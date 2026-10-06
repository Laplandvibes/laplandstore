/**
 * generate-prerender-meta.mjs  (laplandstore)
 *
 * Emits scripts/prerender-meta.json with the per-locale <title> + <meta description> of every
 * prerendered route (/, /privacy, /terms, /cookie-policy). The values come from
 * src/data/pageMeta.mjs, the same object the page components (Home, PrivacyPolicy, Terms,
 * CookiePolicy) render in the browser, so the prerendered HTML and the hydrated page read one
 * source. ./_prerender_routes.mjs picks the JSON up via its --meta reader (tried FIRST).
 * Strings are kept verbatim (JA/ZH/KO full-width punctuation, FR apostrophes).
 *
 * Stops the build (exit 1), because each of these would publish a different text than the
 * browser shows (gate:meta-hydraatio):
 *  - A description outside the prerender window. _prerender_routes.mjs extends a description
 *    under 70 characters / 100 width units with the page's own sentences and clamps one over
 *    160 characters / 200 width units (ensureDescriptionLength + clampDescription; a CJK
 *    character counts as 2). The browser shows the source text as it is. Fix the text in
 *    src/data/pageMeta.mjs, never the prerender.
 *  - A route in scripts/routes.json, or one of its locales, without a title or description in
 *    src/data/pageMeta.mjs: the prerender would fall back to routes.json and harvested page text,
 *    while the page renders pageMeta.mjs (or fails on the missing locale).
 *
 * STRICTLY READ-ONLY over src/.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PAGE_META } from '../src/data/pageMeta.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_FILE = resolve(__dirname, 'prerender-meta.json');
const ROUTES_FILE = resolve(__dirname, 'routes.json');

// Keep in sync with ./_prerender_routes.mjs FULL_LOCALE_LIST lang codes and src/lang.tsx.
const LANGS = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl', 'sv'];

// The prerender window: the same wide-character ranges and limits as ensureDescriptionLength()
// and clampDescription() in ./_prerender_routes.mjs. Inside it the prerender leaves a
// description untouched.
const WIDE_RANGES = [
  [0x1100, 0x11ff], [0x2e80, 0xa4cf], [0xa960, 0xa97f], [0xac00, 0xd7ff],
  [0xf900, 0xfaff], [0xfe30, 0xfe4f], [0xff00, 0xff60], [0xffe0, 0xffe6],
];
const isWide = (ch) => {
  const cp = ch.codePointAt(0);
  return WIDE_RANGES.some(([a, b]) => cp >= a && cp <= b);
};
const width = (s) => [...s].reduce((n, ch) => n + (isWide(ch) ? 2 : 1), 0);

/** Why the prerender would change this description, or null when it is inside the window. */
function outsideWindow(description) {
  const s = description.replace(/\s+/g, ' ').trim();
  const n = s.length;
  const w = width(s);
  if (n > 160 || w > 200 || [...s].length > 160) return `yli 160 merkkiä / 200 leveysyksikköä (${n} / ${w})`;
  if (n < 70 && w < 100) return `alle 70 merkkiä / 100 leveysyksikköä (${n} / ${w})`;
  return null;
}

const nonEmpty = (v) => typeof v === 'string' && v.trim() !== '';

function main() {
  const routes = JSON.parse(readFileSync(ROUTES_FILE, 'utf-8'));
  const problems = [];

  // Every prerendered route needs its title + description from the shared source.
  for (const route of routes) {
    const byLang = PAGE_META[route.path];
    if (!byLang) {
      problems.push(`  ${route.path}: reitti on scripts/routes.json:ssa mutta ei src/data/pageMeta.mjs:ssä`);
      continue;
    }
    for (const lang of LANGS) {
      const m = byLang[lang];
      if (!m || !nonEmpty(m.title) || !nonEmpty(m.description)) {
        problems.push(`  ${lang.padEnd(5)} ${route.path}: otsikko tai kuvaus puuttuu src/data/pageMeta.mjs:stä`);
      }
    }
  }

  const meta = {};
  let entries = 0;
  for (const path of Object.keys(PAGE_META).sort()) {
    const out = {};
    for (const lang of LANGS) {
      const m = PAGE_META[path][lang];
      if (!m || !nonEmpty(m.title) || !nonEmpty(m.description)) continue;
      out[lang] = { title: m.title, description: m.description };
      const why = outsideWindow(m.description);
      if (why) problems.push(`  ${lang.padEnd(5)} ${path}: ${why}\n        ${m.description}`);
    }
    if (Object.keys(out).length > 0) { meta[path] = out; entries += Object.keys(out).length; }
  }

  writeFileSync(OUT_FILE, JSON.stringify(meta, null, 2) + '\n', 'utf-8');
  console.log(`[meta] wrote scripts/prerender-meta.json: ${Object.keys(meta).length} routes, ${entries} lang entries`);
  const s = meta['/privacy'];
  if (s) {
    console.log(`[meta] sample /privacy en: ${s.en?.title}`);
    console.log(`[meta] sample /privacy fi: ${s.fi?.title}`);
  }

  if (problems.length) {
    console.error(`\n[meta] ${problems.length} ongelmaa: palvelimen HTML näyttäisi eri otsikon tai kuvauksen kuin selain.`);
    console.error(problems.join('\n'));
    console.error('[meta] Korjaa src/data/pageMeta.mjs: jokaiselle reitille ja kielelle otsikko ja kuvaus, kuvaus omalla kielellään 70–160 merkkiin (CJK-merkki = 2, 100–200 leveysyksikköä).\n');
    return false;
  }
  console.log(`[meta] OK: ${entries} kuvausta esirenderöinnin ikkunassa`);
  return true;
}

process.exit(main() ? 0 : 1);
