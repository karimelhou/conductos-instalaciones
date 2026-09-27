"""Generate favicon.svg, favicon.ico, apple-touch-icon and PWA icons.

The mark is a red chevron over near-black: a duct transition seen end on,
which is the simplest honest mark for a sheet metal fabricator and stays
legible at 16 px.
"""
import os

from PIL import Image, ImageDraw

HERE = os.path.dirname(os.path.abspath(__file__))
PUB = os.path.join(os.path.dirname(HERE), 'public')

INK = (0x0B, 0x0C, 0x0E)
RED = (0xE1, 0x23, 0x2B)
PAPER = (0xE9, 0xEA, 0xEC)

SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="6" fill="#0b0c0e"/>
  <path d="M12 44 L32 16 L52 44 L42 44 L32 30 L22 44 Z" fill="#e1232b"/>
  <rect x="12" y="49" width="40" height="4" fill="#e9eaec"/>
</svg>
"""


def draw(size: int) -> Image.Image:
    # Draw at 4x and downsample: gives clean edges without any AA dependency.
    s = size * 4
    im = Image.new('RGBA', (s, s), INK + (255,))
    d = ImageDraw.Draw(im)
    u = s / 64.0
    d.polygon(
        [(12 * u, 44 * u), (32 * u, 16 * u), (52 * u, 44 * u),
         (42 * u, 44 * u), (32 * u, 30 * u), (22 * u, 44 * u)],
        fill=RED + (255,),
    )
    d.rectangle([12 * u, 49 * u, 52 * u, 53 * u], fill=PAPER + (255,))
    return im.resize((size, size), Image.LANCZOS)


def main() -> None:
    os.makedirs(PUB, exist_ok=True)

    with open(os.path.join(PUB, 'favicon.svg'), 'w', encoding='utf-8') as fh:
        fh.write(SVG)

    draw(180).save(os.path.join(PUB, 'apple-touch-icon.png'), 'PNG', optimize=True)
    draw(192).save(os.path.join(PUB, 'icon-192.png'), 'PNG', optimize=True)
    draw(512).save(os.path.join(PUB, 'icon-512.png'), 'PNG', optimize=True)
    draw(64).save(
        os.path.join(PUB, 'favicon.ico'),
        sizes=[(16, 16), (32, 32), (48, 48), (64, 64)],
    )
    print('icons written to public/')


if __name__ == '__main__':
    main()
