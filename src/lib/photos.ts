import type { ImageMetadata } from 'astro';
import manifest from '../../tools/images.manifest.json';
import type { Lang } from '../i18n/routes';

type Row = (typeof manifest.images)[number];

export type PhotoId = Row['id'];

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photos/*.jpg',
  { eager: true }
);

const byId = new Map<string, ImageMetadata>();
for (const [path, mod] of Object.entries(files)) {
  const id = path.split('/').pop()!.replace(/\.jpg$/, '');
  byId.set(id, mod.default);
}

export interface Photo {
  id: PhotoId;
  image: ImageMetadata;
  ratio: '4:3' | '3:4' | '16:9';
  alt: Record<Lang, string>;
  caption: Record<Lang, string>;
}

const registry = new Map<string, Photo>();
for (const row of manifest.images) {
  const image = byId.get(row.id);
  if (!image) {
    throw new Error(
      `photos.ts: falta src/assets/photos/${row.id}.jpg — ejecuta "npm run images"`
    );
  }
  registry.set(row.id, {
    id: row.id,
    image,
    ratio: row.ratio as Photo['ratio'],
    alt: row.alt as Record<Lang, string>,
    caption: row.caption as Record<Lang, string>,
  });
}

/** Throws at build time on a typo rather than rendering a broken image. */
export function photo(id: PhotoId): Photo {
  const p = registry.get(id);
  if (!p) throw new Error(`photos.ts: no existe la foto "${id}"`);
  return p;
}

/**
 * Widths for <Picture>, hand-capped at the photo's true pixel width.
 *
 * Astro 5's sharp service only passes withoutEnlargement when `fit` is set, so
 * without this cap it would happily emit a 1200w descriptor for a 918px source
 * — a file that is bigger, blurrier and lying about its resolution.
 * No photo is ever displayed above --photo-max (560px), so 560 and 1120 (2x)
 * are the only sizes that do any work.
 */
export function widthsFor(p: Photo): number[] {
  const max = p.image.width;
  return [400, 560, 800, 1120].filter((w) => w <= max).concat(max <= 400 ? [max] : []);
}
