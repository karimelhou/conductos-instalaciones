import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import { SITE_URL } from './src/config/site';
import { INDEXABLE_PAGES, LANGS, urlFor, keyForUrl } from './src/i18n/routes';

const INDEXABLE = new Set(
  INDEXABLE_PAGES.flatMap((p) => LANGS.map((l) => urlFor(p.key, l)))
);

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },

  // Buys Astro.currentLocale and a loud throw on an unknown locale. All the
  // real routing work is done by src/i18n/routes.ts — Astro's i18n cannot
  // translate slugs, it only prefixes a locale segment.
  // `fallback` is deliberately omitted: it matches by filename, and our
  // filenames differ per locale by design, so it could only ever misfire.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
      fallbackType: 'redirect',
    },
  },

  integrations: [
    sitemap({
      // The built-in `i18n` option cannot pair translated slugs — it strips the
      // locale segment and groups by exact equality of the remainder, so
      // /conductos-de-ventilacion/ would never match /ventilation-ductwork/.
      // We build the alternates ourselves from the one slug table, which also
      // lets us emit x-default (the built-in option never does).
      filter: (page) => INDEXABLE.has(page),
      serialize(item) {
        const key = keyForUrl(item.url);
        if (!key) return undefined;
        item.links = [
          ...LANGS.map((l) => ({ lang: l, url: urlFor(key, l) })),
          { lang: 'x-default', url: urlFor(key, 'es') },
        ];
        item.changefreq = undefined;
        item.priority = undefined;
        item.lastmod = undefined;
        return item;
      },
    }),
  ],
});
