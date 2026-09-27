"""READ-ONLY audit of raw/*.jpeg. Proposes crop boxes; never writes an image.

Reports per file: dimensions, aspect, md5, per-channel means (colour cast),
luma, and a dark-edge probe that finds letterbox / status bars.
Also reports near-duplicate pairs via a 12x12 average hash.
"""
import hashlib
import glob
import os
from PIL import Image

RAW = os.path.join(os.path.dirname(__file__), "..", "raw")


def dark_edges(im, thresh=26):
    """Walk in from each edge while the row/column is uniformly near-black."""
    g = im.convert("L")
    w, h = g.size
    px = g.load()
    step_x = max(1, w // 60)
    step_y = max(1, h // 60)

    def row_dark(y):
        return all(px[x, y] <= thresh for x in range(0, w, step_x))

    def col_dark(x):
        return all(px[x, y] <= thresh for y in range(0, h, step_y))

    t = 0
    while t < h - 1 and row_dark(t):
        t += 1
    b = 0
    while b < h - 1 - t and row_dark(h - 1 - b):
        b += 1
    l = 0
    while l < w - 1 and col_dark(l):
        l += 1
    r = 0
    while r < w - 1 - l and col_dark(w - 1 - r):
        r += 1
    return l, t, r, b


def ahash(im, s=12):
    g = im.convert("L").resize((s, s), Image.LANCZOS)
    d = list(g.getdata())
    avg = sum(d) / len(d)
    return "".join("1" if v > avg else "0" for v in d)


def main():
    files = sorted(glob.glob(os.path.join(RAW, "*.jpeg")))
    hashes = {}
    print(f"{'file':<47}{'WxH':>11} {'ratio':>6} {'R/G/B mean':>16} {'spr':>4} "
          f"{'luma':>5}  dark-edges l,t,r,b")
    print("-" * 128)
    for p in files:
        name = os.path.basename(p)
        im = Image.open(p)
        w, h = im.size
        rgb = im.convert("RGB")
        st = rgb.resize((160, 160), Image.LANCZOS)
        px = list(st.getdata())
        n = len(px)
        mr = sum(q[0] for q in px) / n
        mg = sum(q[1] for q in px) / n
        mb = sum(q[2] for q in px) / n
        spread = max(mr, mg, mb) - min(mr, mg, mb)
        luma = 0.2126 * mr + 0.7152 * mg + 0.0722 * mb
        edges = dark_edges(rgb)
        hashes[name] = ahash(rgb)
        print(f"{name:<47}{f'{w}x{h}':>11} {w/h:>6.2f} "
              f"{f'{mr:.0f}/{mg:.0f}/{mb:.0f}':>16} {spread:>4.0f} {luma:>5.0f}  {edges}")

    print("\nNEAR-DUPLICATES (hamming <= 18 of 144)")
    names = sorted(hashes)
    seen = False
    for i, a in enumerate(names):
        for b in names[i + 1:]:
            d = sum(1 for x, y in zip(hashes[a], hashes[b]) if x != y)
            if d <= 18:
                seen = True
                print(f"  {d:>3}  {a}  <->  {b}")
    if not seen:
        print("  none")


if __name__ == "__main__":
    main()
