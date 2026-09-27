"""Destructive, one-time image preparation. Pillow only.

raw/*.jpeg  ->  src/assets/photos/<id>.jpg

Order of operations per image:
  1. EXIF transpose + RGB          bake rotation in; sharp honours EXIF inconsistently
  2. explicit crop                 chrome / letterbox removal from the manifest
  3. aspect cut toward focus       everything becomes 4:3, 3:4 or 16:9. NEVER upscales.
  4. white balance                 clamped-percentile, per-file strength
  5. tone                          autocontrast on luminance, highlight-protecting
  6. desaturate 0.80               the unifier: collapses green/orange/blue casts into one family
  7. shared split-tone LUT         every photo lands on the page's own black and white points

Writes tools/images.manifest.lock.json recording what actually happened, so a
re-run is diffable and a surprise is visible.
"""
import json
import os
import sys

from PIL import Image, ImageEnhance, ImageOps

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
RAW = os.path.join(ROOT, "raw")
OUT = os.path.join(ROOT, "src", "assets", "photos")
MANIFEST = os.path.join(HERE, "images.manifest.json")
LOCK = os.path.join(HERE, "images.manifest.lock.json")

RATIOS = {"4:3": 4 / 3, "3:4": 3 / 4, "16:9": 16 / 9}

# Page palette. Photographs are graded onto these exact end points so they sit
# on the same black and white as the layout around them.
SHADOW = (0x0B, 0x0C, 0x0E)
HIGHLIGHT = (0xE9, 0xEA, 0xEC)
SHADOW_MIX = 0.08
HIGHLIGHT_MIX = 0.05
SATURATION = 0.80
JPEG_QUALITY = 92


def build_split_tone_lut():
    """One 256-entry per-channel table, built once, applied to every photo."""
    lut = []
    for ch in range(3):
        for i in range(256):
            t = i / 255.0
            # weight shadows at the dark end, highlights at the bright end
            s_w = (1.0 - t) ** 2 * SHADOW_MIX
            h_w = t ** 2 * HIGHLIGHT_MIX
            v = i * (1.0 - s_w - h_w) + SHADOW[ch] * s_w + HIGHLIGHT[ch] * h_w
            lut.append(max(0, min(255, int(round(v)))))
    return lut


SPLIT_TONE_LUT = build_split_tone_lut()


def percentile_channel_means(im, midtone_only, pct=90):
    """Near-white reference per channel, robust to a few blown pixels.

    midtone_only restricts the sample to luma 60..190, which is how a strong
    cast is found in a frame that also contains large neutral concrete areas
    (a global measure simply cannot see it).
    """
    small = im.resize((160, 160), Image.LANCZOS)
    px = list(small.getdata())
    if midtone_only:
        sel = [p for p in px
               if 60 <= (0.2126 * p[0] + 0.7152 * p[1] + 0.0722 * p[2]) <= 190]
        if len(sel) > 400:
            px = sel
    out = []
    n = len(px)
    idx = min(n - 1, int(n * pct / 100))
    for ch in range(3):
        vals = sorted(p[ch] for p in px)
        out.append(max(1.0, float(vals[idx])))
    return out


def white_balance(im, strength, midtone_only):
    if strength <= 0:
        return im, [1.0, 1.0, 1.0]
    p = percentile_channel_means(im, midtone_only)
    target = sum(p) / 3.0
    gains = []
    for ch in range(3):
        g = max(0.80, min(1.25, target / p[ch]))
        gains.append(1.0 + (g - 1.0) * strength)
    lut = []
    for ch in range(3):
        lut += [max(0, min(255, int(round(i * gains[ch])))) for i in range(256)]
    return im.point(lut), [round(g, 4) for g in gains]


def aspect_cut(im, ratio_key, focus):
    """Crop to an exact aspect around the focus point. Never enlarges."""
    target = RATIOS[ratio_key]
    w, h = im.size
    cur = w / h
    if abs(cur - target) < 0.002:
        return im, (0, 0, w, h)
    if cur > target:
        new_w, new_h = int(round(h * target)), h
    else:
        new_w, new_h = w, int(round(w / target))
    new_w, new_h = min(new_w, w), min(new_h, h)
    cx, cy = focus[0] * w, focus[1] * h
    left = int(round(max(0, min(w - new_w, cx - new_w / 2))))
    top = int(round(max(0, min(h - new_h, cy - new_h / 2))))
    box = (left, top, left + new_w, top + new_h)
    return im.crop(box), box


def duotone(im):
    """Editorial treatment for a frame too damaged to read as a photograph."""
    g = im.convert("L")
    lo, hi = (0x0B, 0x0C, 0x0E), (0xB9, 0xBE, 0xC5)
    lut = []
    for ch in range(3):
        for i in range(256):
            t = i / 255.0
            v = lo[ch] + (hi[ch] - lo[ch]) * t
            if ch == 0:
                v *= 1.03  # red-shifted midtone
            lut.append(max(0, min(255, int(round(v)))))
    return g.convert("RGB").point(lut)


def main():
    with open(MANIFEST, encoding="utf-8") as fh:
        manifest = json.load(fh)
    os.makedirs(OUT, exist_ok=True)

    lock = []
    failures = []

    for row in manifest["images"]:
        src = os.path.join(RAW, row["src"])
        if not os.path.exists(src):
            failures.append(f"missing source: {row['src']}")
            continue

        im = Image.open(src)
        im = ImageOps.exif_transpose(im).convert("RGB")
        src_w, src_h = im.size

        if row.get("crop"):
            l, t, r, b = row["crop"]
            if not (0 <= l < r <= src_w and 0 <= t < b <= src_h):
                failures.append(f"{row['id']}: crop {row['crop']} outside {src_w}x{src_h}")
                continue
            im = im.crop((l, t, r, b))
        after_crop = im.size

        im, cut_box = aspect_cut(im, row["ratio"], row.get("focus", [0.5, 0.5]))

        im, gains = white_balance(im, row.get("wb", 0.0), row.get("wb_midtone", False))

        # Highlight-protecting: galvanised steel blows out instantly.
        luma = sum(im.resize((64, 64)).convert("L").getdata()) / 4096.0
        cutoff = (0.2, 0.8) if luma < 75 else (0.4, 0.6)
        im = ImageOps.autocontrast(im, cutoff=cutoff, preserve_tone=True)

        if row.get("grade") == "duotone":
            im = duotone(im)
        else:
            im = ImageEnhance.Color(im).enhance(SATURATION)
            im = im.point(SPLIT_TONE_LUT)

        out_w, out_h = im.size
        if out_w > src_w or out_h > src_h:
            failures.append(f"{row['id']}: UPSCALED {src_w}x{src_h} -> {out_w}x{out_h}")
            continue

        dest = os.path.join(OUT, row["id"] + ".jpg")
        im.save(dest, "JPEG", quality=JPEG_QUALITY, subsampling=0,
                optimize=True, progressive=True)

        lock.append({
            "id": row["id"],
            "src": row["src"],
            "source_size": [src_w, src_h],
            "after_crop": list(after_crop),
            "aspect_box": list(cut_box),
            "output_size": [out_w, out_h],
            "ratio": row["ratio"],
            "wb_strength": row.get("wb", 0.0),
            "wb_gains": gains,
            "autocontrast_cutoff": list(cutoff),
            "mean_luma_before_tone": round(luma, 1),
            "grade": row.get("grade", "neutral"),
            "bytes": os.path.getsize(dest),
        })
        print(f"  {row['id']:<34} {src_w}x{src_h} -> {out_w}x{out_h}  "
              f"{row['ratio']:<5} wb{row.get('wb', 0)}  {os.path.getsize(dest)//1024} KB")

    with open(LOCK, "w", encoding="utf-8") as fh:
        json.dump({"images": lock}, fh, ensure_ascii=False, indent=1)
        fh.write("\n")

    print(f"\n{len(lock)} images written to src/assets/photos/")
    if failures:
        print("\nFAILURES:")
        for f in failures:
            print("  ! " + f)
        sys.exit(1)


if __name__ == "__main__":
    main()
