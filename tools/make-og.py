"""Generate the 1200x630 Open Graph cards, one per page per language.

Same visual language as the site: ink ground with a 45-degree hatch, the
wordmark, a red rule, the page H1 set in Barlow Condensed, and the phone
number in the corner. No photographs — at 1200x630 our sources would be
upscaled, which is exactly what the whole design avoids.

Titles are read from src/copy/*.ts by a small regex rather than by executing
TypeScript: the h1 and eyebrow fields are plain string literals, so this stays
a 60-line script instead of a build step.
"""
import os
import re

from PIL import Image, ImageDraw, ImageFont

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
COPY = os.path.join(ROOT, 'src', 'copy')
OUT = os.path.join(ROOT, 'public', 'og')
FONTS = os.path.join(HERE, 'fonts')

W, H = 1200, 630
INK = (0x0B, 0x0C, 0x0E)
WHITE = (0xFF, 0xFF, 0xFF)
RED = (0xE1, 0x23, 0x2B)
STEEL = (0xA8, 0xAE, 0xB6)
PAPER = (0xE9, 0xEA, 0xEC)

PHONE = '602 12 83 02'
MODULES = ['home', 'ventilacion', 'humos', 'clima', 'taller', 'contacto', 'legal']


def read_field(module: str, lang: str, field: str) -> str:
    """Pull one string literal out of a bilingual copy module."""
    path = os.path.join(COPY, module + '.ts')
    src = open(path, encoding='utf-8').read()
    # isolate the language half: from "  es: {" to the start of "  en: {"
    start = src.find('\n  ' + lang + ': {')
    if start == -1:
        raise SystemExit(f'{module}.ts: no encuentro la mitad "{lang}"')
    other = 'en' if lang == 'es' else 'es'
    end = src.find('\n  ' + other + ': {', start)
    chunk = src[start:end if end != -1 else len(src)]
    m = re.search(r"\n\s+" + field + r":\s*\n?\s*'((?:[^'\\]|\\.)*)'", chunk)
    if not m:
        raise SystemExit(f'{module}.ts [{lang}]: no encuentro el campo "{field}"')
    return m.group(1).replace("\\'", "'")


def wrap(draw, text, font, max_w):
    words, lines, cur = text.split(), [], ''
    for w in words:
        trial = (cur + ' ' + w).strip()
        if draw.textlength(trial, font=font) <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


def hatch(img):
    d = ImageDraw.Draw(img, 'RGBA')
    for x in range(-H, W, 8):
        d.line([(x, H), (x + H, 0)], fill=(255, 255, 255, 13), width=1)


def card(title: str, eyebrow: str, path: str) -> None:
    img = Image.new('RGB', (W, H), INK)
    hatch(img)
    d = ImageDraw.Draw(img)

    bold = os.path.join(FONTS, 'BarlowCondensed-Bold.ttf')
    ital = os.path.join(FONTS, 'BarlowCondensed-BoldItalic.ttf')

    f_mark = ImageFont.truetype(ital, 46)
    f_eyebrow = ImageFont.truetype(bold, 26)
    f_phone = ImageFont.truetype(bold, 34)

    M = 72

    # wordmark
    a = 'CONDUCTOS'
    d.text((M, M), a, font=f_mark, fill=WHITE)
    d.text((M + d.textlength(a, font=f_mark) + 14, M), 'INSTALACIONES',
           font=f_mark, fill=RED)

    # eyebrow + rule
    d.text((M, M + 92), eyebrow.upper(), font=f_eyebrow, fill=STEEL)
    d.rectangle([M, M + 134, M + 96, M + 139], fill=RED)

    # title, shrunk to fit rather than truncated
    size = 92
    while size > 44:
        f = ImageFont.truetype(bold, size)
        lines = wrap(d, title.upper(), f, W - 2 * M)
        if len(lines) <= 3:
            break
        size -= 6
    f_title = ImageFont.truetype(bold, size)
    lines = wrap(d, title.upper(), f_title, W - 2 * M)
    y = M + 186
    for line in lines:
        d.text((M, y), line, font=f_title, fill=WHITE)
        y += int(size * 0.94)

    # brushed trim + phone
    d.rectangle([0, H - 72, W, H - 68], fill=(0x2A, 0x2F, 0x36))
    d.rectangle([0, H - 6, W, H], fill=RED)
    d.text((M, H - 58), PHONE, font=f_phone, fill=PAPER)
    d.text((W - M - d.textlength('MADRID', font=f_phone), H - 58), 'MADRID',
           font=f_phone, fill=STEEL)

    img.save(path, 'PNG', optimize=True)


def main() -> None:
    os.makedirs(OUT, exist_ok=True)
    n = 0
    for mod in MODULES:
        for lang in ('es', 'en'):
            title = read_field(mod, lang, 'h1')
            eyebrow = read_field(mod, lang, 'eyebrow')
            dest = os.path.join(OUT, f'{mod}-{lang}.png')
            card(title, eyebrow, dest)
            n += 1
            print(f'  {mod}-{lang}.png  {os.path.getsize(dest) // 1024} KB  "{title}"')
    print(f'\n{n} tarjetas OG escritas en public/og/')


if __name__ == '__main__':
    main()
