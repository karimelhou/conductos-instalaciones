/**
 * Reads dist/ back and asserts the things that are invisible until they have
 * been broken for months: an hreflang pointing at a 404, a duplicated title,
 * a photo served wider than it really is, a third-party script that would make
 * a cookie banner mandatory.
 *
 * Run standalone with `npm run verify` against any built folder.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '..');
const DIST = join(ROOT, 'dist');
const SITE = 'https://conductosinstalaciones.es';

/**
 * The slug table is READ FROM src/i18n/routes.ts, never copied here.
 * A second hand-maintained copy would be exactly the drift this file exists to
 * catch — it would happily agree with itself while disagreeing with the site.
 */
function loadPages() {
  const src = readFileSync(join(ROOT, 'src', 'i18n', 'routes.ts'), 'utf8');
  const block = /export const PAGES = \[([\s\S]*?)\] as const;/.exec(src);
  if (!block) {
    console.error('verify-dist: no encuentro el array PAGES en src/i18n/routes.ts');
    process.exit(1);
  }
  const rows = [...block[1].matchAll(
    /\{\s*key:\s*'([^']*)',\s*es:\s*'([^']*)',\s*en:\s*'([^']*)',\s*nav:\s*(true|false),\s*noindex:\s*(true|false)\s*\}/g
  )].map((m) => ({
    key: m[1], es: m[2], en: m[3], nav: m[4] === 'true', noindex: m[5] === 'true',
  }));
  if (rows.length === 0) {
    console.error('verify-dist: PAGES encontrado pero no he podido leer ninguna fila');
    process.exit(1);
  }
  return rows;
}

const PAGES = loadPages();

// Every route must have a page file, and every page file must have a route.
for (const p of PAGES) {
  for (const [lang, dir] of [['es', 'src/pages'], ['en', 'src/pages/en']]) {
    const slug = lang === 'es' ? p.es : p.en;
    const f = join(ROOT, ...dir.split('/'), (slug || 'index') + '.astro');
    if (!existsSync(f)) {
      console.error(`verify-dist: la ruta "${p.key}" (${lang}) no tiene archivo: ${f}`);
      process.exit(1);
    }
  }
}

const pathFor = (p, lang) => {
  const slug = lang === 'es' ? p.es : p.en;
  const prefix = lang === 'es' ? '/' : '/en/';
  return slug ? `${prefix}${slug}/` : prefix;
};
const urlFor = (p, lang) => SITE + pathFor(p, lang);

const errors = [];
const warnings = [];
const fail = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

if (!existsSync(DIST)) {
  console.error('dist/ no existe. Ejecuta "npm run build" primero.');
  process.exit(1);
}

const allFiles = walk(DIST);
const htmlFiles = allFiles.filter((f) => f.endsWith('.html'));

// ---------------------------------------------------------------- page set --
const expectedHtml = new Set();
for (const p of PAGES) {
  for (const lang of ['es', 'en']) {
    expectedHtml.add(('.' + pathFor(p, lang) + 'index.html').replace(/\//g, sep));
  }
}
expectedHtml.add('.' + sep + '404.html');

const actualHtml = new Set(htmlFiles.map((f) => '.' + sep + relative(DIST, f)));
for (const want of expectedHtml) {
  if (!actualHtml.has(want)) fail(`falta la página ${want}`);
}
for (const got of actualHtml) {
  if (!expectedHtml.has(got)) warn(`página inesperada en dist: ${got}`);
}

// ------------------------------------------------------------- per page ----
const titles = new Map();
const descs = new Map();
let hreflangTotal = 0;
let noindexTotal = 0;
const alternatesByUrl = new Map();

for (const file of htmlFiles) {
  const rel = '/' + relative(DIST, file).split(sep).join('/');
  const html = readFileSync(file, 'utf8');
  const is404 = rel === '/404.html';

  const title = /<title>([\s\S]*?)<\/title>/.exec(html)?.[1]?.trim();
  if (!title) fail(`${rel}: sin <title>`);
  else {
    if (titles.has(title)) fail(`${rel}: <title> duplicado con ${titles.get(title)}`);
    titles.set(title, rel);
    if (title.length > 65) warn(`${rel}: <title> de ${title.length} caracteres (>65)`);
  }

  const desc = /<meta name="description" content="([\s\S]*?)"/.exec(html)?.[1];
  if (!desc) fail(`${rel}: sin meta description`);
  else {
    if (descs.has(desc)) fail(`${rel}: meta description duplicada con ${descs.get(desc)}`);
    descs.set(desc, rel);
    if (desc.length < 110 || desc.length > 170) {
      warn(`${rel}: meta description de ${desc.length} caracteres (fuera de 110-170)`);
    }
  }

  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  if (!is404) {
    if (!canonical) fail(`${rel}: sin canonical`);
    else {
      const expected = SITE + rel.replace(/index\.html$/, '');
      if (canonical !== expected) {
        fail(`${rel}: canonical ${canonical} != ${expected}`);
      }
    }
  }

  const noindex = /<meta name="robots" content="noindex/.test(html);
  if (noindex) noindexTotal++;

  const alts = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)];
  hreflangTotal += alts.length;

  if (noindex || is404) {
    // A noindexed member poisons the whole hreflang cluster.
    if (alts.length > 0) fail(`${rel}: página noindex con ${alts.length} hreflang (debe tener 0)`);
  } else {
    if (alts.length !== 3) fail(`${rel}: ${alts.length} hreflang (esperado 3: es, en, x-default)`);
    const langs = alts.map((a) => a[1]).sort().join(',');
    if (langs !== 'en,es,x-default') fail(`${rel}: hreflang = ${langs}`);
    const self = alts.find((a) => a[2] === canonical);
    if (!self) fail(`${rel}: falta la auto-referencia hreflang`);
    const xd = alts.find((a) => a[1] === 'x-default');
    if (xd && !/^https:\/\/[^/]+\/(?!en\/)/.test(xd[2])) {
      fail(`${rel}: x-default apunta a ${xd[2]} (debe apuntar al español)`);
    }
    if (canonical) alternatesByUrl.set(canonical, alts.map((a) => a[2]));

    // every hreflang must resolve to a real file on disk
    for (const [, , href] of alts) {
      const p = href.replace(SITE, '');
      const onDisk = join(DIST, p.replace(/\//g, sep), 'index.html');
      if (!existsSync(onDisk)) fail(`${rel}: hreflang ${href} no existe en disco`);
    }
  }

  // og
  for (const prop of ['og:title', 'og:description', 'og:url', 'og:image', 'og:locale']) {
    if (!html.includes(`property="${prop}"`)) fail(`${rel}: falta ${prop}`);
  }
  const ogImage = /<meta property="og:image" content="([^"]+)"/.exec(html)?.[1];
  if (ogImage) {
    const p = ogImage.replace(SITE, '').replace(/\//g, sep);
    if (!existsSync(join(DIST, p))) fail(`${rel}: og:image ${ogImage} no existe en disco`);
  }
  if (html.includes('twitter:site')) fail(`${rel}: twitter:site presente (la empresa no tiene cuenta)`);

  // one h1
  const h1s = [...html.matchAll(/<h1[\s>]/g)].length;
  if (h1s !== 1) fail(`${rel}: ${h1s} elementos h1 (debe haber exactamente 1)`);

  // CLS: every img needs width and height
  for (const [, tag] of html.matchAll(/<img\s([^>]*)>/g)) {
    if (!/\bwidth=/.test(tag) || !/\bheight=/.test(tag)) {
      fail(`${rel}: <img> sin width/height`);
      break;
    }
  }

  // zero third parties: this is what protects the no-cookie-banner position
  const bad = [
    [/<script\s[^>]*\bsrc=/i, 'script externo'],
    [/https:\/\/fonts\.(googleapis|gstatic)\.com/i, 'Google Fonts remoto'],
    [/googletagmanager|google-analytics|gtag\(/i, 'Google Analytics'],
    [/recaptcha|hcaptcha|turnstile/i, 'captcha'],
    [/<iframe/i, 'iframe'],
    [/maps\.google|google\.com\/maps/i, 'Google Maps'],
  ];
  for (const [re, label] of bad) {
    if (re.test(html)) fail(`${rel}: contiene ${label} — rompe la política sin cookies`);
  }

  // image honesty: no srcset descriptor may exceed the real source width
  for (const [, srcset] of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const part of srcset.split(',')) {
      const m = /\/_astro\/([a-z0-9-]+)\.[^\s]+\s+(\d+)w/.exec(part.trim());
      if (!m) continue;
      const [, id, w] = m;
      const src = join(ROOT, 'src', 'assets', 'photos', id + '.jpg');
      if (!existsSync(src)) continue;
      const real = jpegSize(src);
      if (real && Number(w) > real.width) {
        fail(`${rel}: ${id} servido a ${w}w pero el original mide ${real.width}px`);
      }
    }
  }
}

/** Minimal JPEG SOF parser — avoids adding a dependency just to read a width. */
function jpegSize(path) {
  const b = readFileSync(path);
  let i = 2;
  while (i < b.length) {
    if (b[i] !== 0xff) { i++; continue; }
    const marker = b[i + 1];
    const len = b.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return { height: b.readUInt16BE(i + 5), width: b.readUInt16BE(i + 7) };
    }
    i += 2 + len;
  }
  return null;
}

// -------------------------------------------------------------- reciprocity -
for (const [url, alts] of alternatesByUrl) {
  for (const other of alts) {
    if (other === url) continue;
    if (!alternatesByUrl.has(other)) continue;
    if (!alternatesByUrl.get(other).includes(url)) {
      fail(`hreflang no recíproco: ${url} -> ${other} pero no al revés`);
    }
  }
}

// ------------------------------------------------------------------ counts --
const indexableCount = PAGES.filter((p) => !p.noindex).length * 2;
if (hreflangTotal !== indexableCount * 3) {
  fail(`${hreflangTotal} etiquetas hreflang en total (esperado ${indexableCount * 3})`);
}
const expectedNoindex = PAGES.filter((p) => p.noindex).length * 2 + 1; // + 404
if (noindexTotal !== expectedNoindex) {
  fail(`${noindexTotal} páginas noindex (esperado ${expectedNoindex})`);
}

// ----------------------------------------------------------------- sitemap --
const smIndex = join(DIST, 'sitemap-index.xml');
const sm0 = join(DIST, 'sitemap-0.xml');
if (!existsSync(smIndex)) fail('falta dist/sitemap-index.xml');
if (!existsSync(sm0)) fail('falta dist/sitemap-0.xml');
else {
  const xml = readFileSync(sm0, 'utf8');
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const expected = PAGES.filter((p) => !p.noindex)
    .flatMap((p) => ['es', 'en'].map((l) => urlFor(p, l)))
    .sort();
  const got = [...locs].sort();
  if (got.length !== expected.length) {
    fail(`sitemap: ${got.length} URLs (esperado ${expected.length})`);
  }
  for (const u of expected) if (!got.includes(u)) fail(`sitemap: falta ${u}`);
  for (const u of got) if (!expected.includes(u)) fail(`sitemap: sobra ${u}`);

  const xhtml = [...xml.matchAll(/<xhtml:link/g)].length;
  if (xhtml !== expected.length * 3) {
    fail(`sitemap: ${xhtml} alternates xhtml:link (esperado ${expected.length * 3})`);
  }
  if (!xml.includes('hreflang="x-default"')) fail('sitemap: sin x-default');
}

const robots = join(DIST, 'robots.txt');
if (!existsSync(robots)) fail('falta dist/robots.txt');
else {
  const txt = readFileSync(robots, 'utf8');
  if (!txt.includes('sitemap-index.xml')) {
    fail('robots.txt no apunta a sitemap-index.xml (el integrador no emite sitemap.xml)');
  }
}

// ------------------------------------------------------------------ report --
const hr = '-'.repeat(72);
console.log(hr);
console.log(`verify-dist: ${htmlFiles.length} páginas HTML, ${hreflangTotal} hreflang, ` +
            `${noindexTotal} noindex`);
console.log(hr);
if (warnings.length) {
  console.log('AVISOS:');
  for (const w of warnings) console.log('  · ' + w);
}
if (errors.length) {
  console.log('ERRORES:');
  for (const e of errors) console.log('  ✗ ' + e);
  console.log(hr);
  console.error(`verify-dist FALLA con ${errors.length} error(es).`);
  process.exit(1);
}
console.log('verify-dist OK — todo correcto.');
