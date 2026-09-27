# Conductos Instalaciones — bilingual static site

Static marketing site for a Madrid sheet-metal ductwork contractor. Spanish is
the default language at `/`, English lives at `/en/`, and both have translated
slugs. **No backend, and zero JavaScript is shipped** — the only `<script>` tags
in the output are JSON-LD blocks.

For the owner's own editing guide, see **[EDITAR-LA-WEB.md](./EDITAR-LA-WEB.md)**
(in Spanish).

---

## Quick start

```bash
npm install
npm run build      # astro check + astro build + verify-dist
npm run preview    # serve dist/ at http://localhost:4321
```

The deployable artefact is `dist/` — a plain folder of static files. Upload it
anywhere: Cloudflare Pages, Netlify, GitHub Pages, or cPanel over FTP.

### Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type check → build → verify. **Fails loudly rather than shipping something broken.** |
| `npm run build:fast` | Build only, skipping the checks. For iterating. |
| `npm run verify` | Run the `dist/` assertion suite standalone |
| `npm run images` | Re-run the Pillow pipeline over `raw/` |
| `npm run images:audit` | Read-only report on the source photos |
| `npm run og` | Regenerate the 14 Open Graph cards |
| `npm run icons` | Regenerate favicons |

---

## Version constraints — read before upgrading

This project is pinned to **Astro 5.18.2 on Node 20**, deliberately:

- Astro **6 and 7 require Node ≥ 22.12.0**. This machine runs Node 20.19.0.
- `@astrojs/sitemap` is pinned to **3.6.0**, not the current 3.7.4, because
  3.7.x depends on `sitemap@9`, which requires Node ≥ 20.19.5. 3.6.0 uses
  `sitemap@8`, which runs on Node 14+.
- `package.json` carries an override pinning **undici to ^7.16.0**. Astro pulls
  `unifont → undici@8`, which needs Node ≥ 22.19. We never use `astro:fonts`
  (the two WOFF2 files are self-hosted in `public/fonts/`), so undici is never
  loaded — but `engine-strict=true` in `.npmrc` would otherwise refuse to install.

**To upgrade to Astro 7** you need Node ≥ 22.12. Install it, then drop the
undici override, unpin `@astrojs/sitemap`, and simplify `widthsFor()` in
`src/lib/photos.ts` (Astro 7 clamps image widths itself — see below).

---

## Architecture

### Routing — one slug table, no mirror

`src/i18n/routes.ts` holds the `PAGES` array and the only URL builders in the
project. **Nothing else may construct a site URL.** `astro.config.ts` imports it
directly, so the sitemap's URLs and the hreflang hrefs come from literally the
same function and cannot drift.

Astro's built-in i18n **does not translate slugs** — it only prefixes a locale
segment. So the 14 page files under `src/pages/` are named for their URLs
(`conductos-de-ventilacion.astro` ↔ `en/ventilation-ductwork.astro`), each a
ten-line wrapper over a shared layout. A wrong slug is then visible in the file
tree and in `git diff`, rather than hiding inside `getStaticPaths` where it
would silently produce a plausible sitemap entry pointing at a 404.

`@astrojs/sitemap`'s built-in `i18n` option **cannot** pair translated slugs: it
strips the locale segment and groups by exact equality of the remainder, so
`/conductos-de-ventilacion/` would never match `/ventilation-ductwork/`. We use
`serialize` instead and build `item.links` from the same table — which also lets
us emit `x-default`, something the built-in option never does.

> Output is `sitemap-index.xml` + `sitemap-0.xml`, **not** `sitemap.xml`.
> `robots.txt` points at the index accordingly.

### Content — bilingual modules

`src/copy/*.ts` holds one module per page, with `es` and `en` side by side and
typed by one interface. A missing English field is a **compile error**, not a
blank space on the page.

Four layers of drift defence, because the failure mode here is silent:

1. **Types** — `astro check` catches a missing field.
2. **Parity walk** — `assert-parity.ts` runs at module scope in
   `src/copy/registry.ts`: key sets, array lengths, empty strings, stray TODOs,
   and strings identical in both languages (ignoring photo ids and numbers).
3. **Routes vs files** — a `PAGES` row with no page file fails the build.
4. **Read `dist/` back** — `tools/verify-dist.mjs` resolves every canonical and
   hreflang href to a real `index.html` on disk.

All four have been deliberately broken once and confirmed to fail readably.

### Images

The split: **Pillow does the destructive, human-judgement work once** and the
result is committed to `src/assets/photos/`; **sharp (via `astro:assets`) does
the deterministic work on every build**. Nothing crosses that line.

`tools/images.manifest.json` is hand-authored and holds every crop box, focus
point, white-balance strength and bilingual alt string. `prepare-images.py`
applies, in order: EXIF transpose → explicit crop → aspect cut to 4:3 / 3:4 /
16:9 → clamped-percentile white balance → highlight-protecting autocontrast →
20% desaturation → a shared split-tone LUT onto the page's own black and white
points. It writes `images.manifest.lock.json` recording what it actually did, so
a re-run is diffable.

**Every source photo is 738–1300 px wide.** Astro 5's sharp service only passes
`withoutEnlargement` when `fit` is set, so it *will* upscale by default — which
is why `widthsFor()` in `src/lib/photos.ts` hand-caps the `widths` array at each
photo's true pixel width, and why `densities` is never used. `verify-dist.mjs`
asserts no srcset descriptor exceeds the real source width.

### Design

`src/styles/tokens.css` is the whole design system in one file.

The governing constraint: **no photograph is ever displayed wider than 560 CSS
px**, enforced by `Plate.astro` being the only component that can render one. At
344 px a 918 px source renders at 2.67× device pixel ratio and is sharp; at
1200 px it renders at 0.76× and looks exactly as low-resolution as it is. Small
is not a compromise here — it is what makes the set look deliberate.

The look is a fabrication data sheet: ink bands, off-white body, red as
structural punctuation (at most three red elements per viewport), hairline rules
instead of shadows, condensed uppercase headings, real spec tables, inline SVG
technical drawings, and photographs presented as numbered figures inside mats.

One downloaded font family (Barlow Condensed 700 + 700 italic, ~17 KB each),
self-hosted, with a metric-matched fallback for zero CLS on swap. Body and mono
are system stacks.

---

## The no-cookie-banner property — protect it

The site currently needs **no cookie consent banner**, because it loads nothing
from a third party: no analytics, no Google Maps iframe, no YouTube embed, no
remote fonts, no captcha, and no client-side storage of its own. The service-area
map is hand-drawn SVG precisely for this reason.

`verify-dist.mjs` fails the build on any `<script src>`, `<iframe>`, Google
Fonts URL, analytics snippet or captcha in the output. That grep protects the
legal position, the CSP in `public/_headers`, and the Core Web Vitals budget at
the same time.

Adding GA4 or a Maps embed makes an AEPD-compliant banner mandatory (reject as
prominent as accept on the first layer, granular per-purpose choice, nothing
loading before consent). Note separately that Google Fonts served from Google's
CDN is a GDPR problem independent of cookies.

---

## Outstanding items

1. **The workshop address is not filled in.** `src/config/site.ts` →
   `BUSINESS.address`. Until it is, the JSON-LD emits `Organization` rather than
   `HVACBusiness` (Google's Local Business spec requires `address`, so emitting
   LocalBusiness without one would just produce a validator error), and the aviso
   legal shows a "pendiente" notice. LSSI-CE art. 10.1.a requires it before the
   site goes live.
2. **No air-conditioning photograph exists** in the supplied set — no split, no
   outdoor unit, no refrigerant pipework. `/climatizacion/` runs on air-side
   photos plus line art. Four photos from the owner would fix the thinnest page
   on the site.
3. **Provenance of three images** should be confirmed: the showroom kitchen, the
   plant-room ceiling and the white-background panel duct look like catalogue
   imagery. The panel duct is captioned as a manufacturer product image and sits
   in a materials block, never in a gallery of work.
4. **Verify the 602 number has WhatsApp active.** Every green button targets
   `wa.me/34602128302`; a number without WhatsApp shows an error page and
   silently kills those leads.
5. **Municipality landing pages are deliberately not built.** A new domain with
   no authority cannot survive a thin-content classification. The gate for phase
   two: a town page is created only when there is a completed job there with
   three of the owner's own photos and 400+ words that could not be pasted onto
   another town. Cap at six.
6. **The two MP4 clips are unused.** No ffmpeg on the build machine means no
   poster frame, and 7.4 MB of posterless vertical video is a bad trade against
   stills. Do **not** solve this with a YouTube embed.

## Excluded photographs

See `tools/EXCLUDED.md` for why eleven of the supplied files are not published.
