/**
 * THE slug table. Nothing else in this project may construct a site URL.
 *
 * astro.config.ts imports this file directly, so the sitemap's URLs and the
 * hreflang hrefs are produced by literally the same function — they cannot
 * drift apart.
 */
import { SITE_URL } from '../config/site';

export type Lang = 'es' | 'en';
export const LANGS: readonly Lang[] = ['es', 'en'];
export const DEFAULT_LANG: Lang = 'es';

export const PAGES = [
  { key: 'home',        es: '',                              en: '',                              nav: false, noindex: false },
  { key: 'ventilacion', es: 'conductos-de-ventilacion',      en: 'ventilation-ductwork',          nav: true,  noindex: false },
  { key: 'humos',       es: 'extraccion-de-humos-de-cocina', en: 'commercial-kitchen-extraction', nav: true,  noindex: false },
  { key: 'clima',       es: 'climatizacion',                 en: 'air-conditioning',              nav: true,  noindex: false },
  { key: 'taller',      es: 'taller-y-trabajos',             en: 'workshop-and-projects',         nav: true,  noindex: false },
  { key: 'contacto',    es: 'contacto-y-presupuesto',        en: 'contact-and-quote',             nav: true,  noindex: false },
  { key: 'legal',       es: 'aviso-legal-y-privacidad',      en: 'legal-notice-and-privacy',      nav: false, noindex: true  },
] as const;

export type PageKey = (typeof PAGES)[number]['key'];
export type PageRow = (typeof PAGES)[number];

/** Throws at build time rather than returning undefined. */
export function byKey(key: PageKey): PageRow {
  const row = PAGES.find((p) => p.key === key);
  if (!row) throw new Error(`routes.ts: no existe la página "${key}"`);
  return row;
}

/** Root-relative path, always with a trailing slash. */
export function pathFor(key: PageKey, lang: Lang): string {
  const row = byKey(key);
  const slug = lang === 'es' ? row.es : row.en;
  const prefix = lang === 'es' ? '/' : '/en/';
  return slug ? `${prefix}${slug}/` : prefix;
}

/** Absolute URL. */
export function urlFor(key: PageKey, lang: Lang): string {
  return SITE_URL + pathFor(key, lang);
}

/** Pages that appear in the navigation, in order. */
export const NAV_PAGES = PAGES.filter((p) => p.nav);

/** Pages that belong in the sitemap and carry hreflang. */
export const INDEXABLE_PAGES = PAGES.filter((p) => !p.noindex);

/** Every indexable absolute URL, both languages. Used by the sitemap filter. */
export function indexableUrls(): string[] {
  return INDEXABLE_PAGES.flatMap((p) => LANGS.map((l) => urlFor(p.key, l)));
}

/** Resolve an absolute URL back to its page key, or null. */
export function keyForUrl(url: string): PageKey | null {
  const clean = url.replace(/\/+$/, '/') || '/';
  for (const p of PAGES) {
    for (const l of LANGS) {
      if (urlFor(p.key, l) === clean) return p.key;
    }
  }
  return null;
}
