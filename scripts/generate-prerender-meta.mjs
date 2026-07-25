/**
 * generate-prerender-meta.mjs  (laplandstore)
 *
 * Emits scripts/prerender-meta.json with per-locale <title> + <meta description>
 * for the static legal pages (/privacy, /terms, /cookie-policy). Each legal page
 * component declares a per-locale `const META: Record<Lang, { title, description }>`
 * and applies it via document.title / meta[name=description]. We parse that META
 * object straight from SOURCE TEXT (no evaluation) and emit one entry per locale,
 * so the shared ../_prerender_routes.mjs picks it up via its --meta reader (tried
 * FIRST) and bakes localized meta into the prerendered HTML for every locale —
 * instead of the English routes.json fallback placeholder ("LaplandStore — Privacy.").
 *
 * Purely additive: ONLY the 3 legal routes are emitted. Every other route is
 * absent from the map, so the prerenderer resolves those exactly as before
 * (routes.json fallback). Strings are kept verbatim (JA/ZH/KO full-width
 * punctuation, FR apostrophes).
 *
 * STRICTLY READ-ONLY over src/. Always exits 0 so the build never breaks.
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const OUT_FILE = resolve(__dirname, 'prerender-meta.json');

// Keep in sync with ../_prerender_routes.mjs FULL_LOCALE_LIST lang codes.
const LANGS = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl', 'sv'];

// route path → legal page component (each declares `const META: Record<Lang,…>`).
const STATIC_PAGES = {
  '/': 'src/pages/Home.tsx',
  '/privacy': 'src/pages/PrivacyPolicy.tsx',
  '/terms': 'src/pages/Terms.tsx',
  '/cookie-policy': 'src/pages/CookiePolicy.tsx',
};

function warn(msg) {
  console.warn(`[meta] WARN: ${msg}`);
}

function unescapeJsString(s) {
  return s
    .replace(/\\n/g, ' ')
    .replace(/\\t/g, ' ')
    .replace(/\\'/g, "'")
    .replace(/\\"/g, '"')
    .replace(/\\`/g, '`')
    .replace(/\\\\/g, '\\')
    .replace(/\s+/g, ' ')
    .trim();
}

// Single- and double-quoted JS string literals. The legal pages use double
// quotes only where the text itself contains an apostrophe (e.g. FR
// "suivi d'affiliation"); single quotes otherwise.
const STR = `'((?:\\\\.|[^'\\\\])*)'`;
const STR_DQ = `"((?:\\\\.|[^"\\\\])*)"`;

// Pull `field: '…'` or `field: "…"` out of a flat object-literal block.
function matchQuotedField(block, field) {
  let m = block.match(new RegExp(`\\b${field}:\\s*${STR}`));
  if (m) return unescapeJsString(m[1]);
  m = block.match(new RegExp(`\\b${field}:\\s*${STR_DQ}`));
  if (m) return unescapeJsString(m[1]);
  return null;
}

// Slice src from the '{' at openIdx through its matching '}', skipping braces
// that appear inside string literals. Returns null if unbalanced.
function sliceBalancedBraces(src, openIdx) {
  let depth = 0;
  let quote = null;
  for (let i = openIdx; i < src.length; i++) {
    const ch = src[i];
    if (quote) {
      if (ch === '\\') { i++; continue; }
      if (ch === quote) quote = null;
      continue;
    }
    if (ch === "'" || ch === '"' || ch === '`') { quote = ch; continue; }
    if (ch === '{') depth++;
    else if (ch === '}') { depth--; if (depth === 0) return src.slice(openIdx, i + 1); }
  }
  return null;
}

function escapeRe(s) {
  return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}

// Read the per-locale `const META: Record<Lang, {title, description}>` record
// from a legal page component → { [lang]: { title, description } } or null.
function extractLegalMeta(rel) {
  const fp = resolve(ROOT, rel);
  if (!existsSync(fp)) { warn(`page file missing: ${rel}`); return null; }
  const src = readFileSync(fp, 'utf-8');
  const decl = src.match(/const\s+META\b[^=]*=\s*\{/);
  if (!decl) { warn(`no const META record found in ${rel}`); return null; }
  const openIdx = decl.index + decl[0].length - 1; // the assignment '{'
  const metaBlock = sliceBalancedBraces(src, openIdx);
  if (!metaBlock) { warn(`${rel}: found const META but could not slice its object literal`); return null; }
  const rec = {};
  for (const lang of LANGS) {
    // Key is bare (en:) or quoted ('pt-BR':); value is a flat object literal
    // { title: '…', description: '…' } with no nested braces.
    const entryRe = new RegExp(`(?:^|[\\s,{])['"]?${escapeRe(lang)}['"]?\\s*:\\s*(\\{[^{}]*\\})`);
    const m = metaBlock.match(entryRe);
    if (!m) { warn(`${rel}: META has no entry for lang '${lang}'`); continue; }
    // Legal pages use title/description; Home.tsx uses seoTitle/seoDescription.
    const title = matchQuotedField(m[1], 'title') ?? matchQuotedField(m[1], 'seoTitle');
    const description = matchQuotedField(m[1], 'description') ?? matchQuotedField(m[1], 'seoDescription');
    if (title || description) rec[lang] = { title, description };
    else warn(`${rel}: META['${lang}'] has no title/description`);
  }
  return Object.keys(rec).length > 0 ? rec : null;
}

function main() {
  const meta = {};
  let routeCount = 0;
  let entries = 0;
  for (const [routePath, rel] of Object.entries(STATIC_PAGES)) {
    const rec = extractLegalMeta(rel);
    if (!rec) continue;
    const out = {};
    for (const lang of LANGS) {
      const m = rec[lang];
      if (m && (m.title || m.description)) {
        out[lang] = { title: m.title ?? null, description: m.description ?? null };
      }
    }
    if (Object.keys(out).length > 0) { meta[routePath] = out; routeCount++; entries += Object.keys(out).length; }
  }

  // Stable key order for clean diffs.
  const sorted = {};
  for (const p of Object.keys(meta).sort()) sorted[p] = meta[p];

  writeFileSync(OUT_FILE, JSON.stringify(sorted, null, 2) + '\n', 'utf-8');
  console.log(`[meta] wrote scripts/prerender-meta.json: ${routeCount} legal routes, ${entries} lang entries`);
  if (entries === 0) {
    console.error('[meta] WARNING: 0 legal entries extracted — prerender will use routes.json fallbacks!');
  }
  const s = sorted['/privacy'];
  if (s) {
    console.log(`[meta] sample /privacy en: ${s.en?.title}`);
    console.log(`[meta] sample /privacy fi: ${s.fi?.title}`);
  }
}

main();
