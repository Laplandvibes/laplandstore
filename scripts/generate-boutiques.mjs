/**
 * Generoi src/data/boutiques.generated.ts laplandgiftsin kanonisesta datasta.
 *
 * 🔴 Putiikkihakemiston LÄHDE ON GIFTS (2026-08-07, Vesan päätös). Store ei
 * ylläpidä omaa listaa: kaksi käsin ylläpidettyä listaa ajautuisi erilleen,
 * ja juuri niin kävi aiemmin. Storen peritty lista lupasi "16 verifioitua
 * putiikkia" kun niitä oli 15, ja kolme listausta oli kuollut kuukausia.
 *
 * Storeen tulee VAIN rakenteellinen data: nimi, paikkakunta, myyntikanava.
 * Kuvaukset jäävät giftsiin, jottei synny duplikaattisisältöä kahdelle
 * domainille. Storen tehtävä on ohjata giftsiin, ei toistaa sitä.
 *
 * Aja: node scripts/generate-boutiques.mjs   (osa build-skriptiä)
 */
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

// 🔴 Gifts on naapuriREPO, ei tama repo. Monorepossa se on vieressa ja
// generointi toimii; PUHTAASSA KLONISSA (GitHub Actions) sita ei ole, ja
// staattinen import kaataa koko buildin ERR_MODULE_NOT_FOUNDiin ennen kuin
// yksikaan rivi tasta skriptista ajetaan. Mitattu 2026-08-21.
//
// src/data/boutiques.generated.ts on committoitu, joten oikea kaytos ilman
// giftsia on: ala regeneroi, kayta committoitua tulosta. Sama saanto kuin
// sync-shared.mjs:ssa ("../shared not found -> using committed vendored copy").
// Siksi importit ovat dynaamisia: staattista importtia ei voi try-catchata.
const HERE = dirname(fileURLToPath(import.meta.url))
const GIFTS = resolve(HERE, '..', '..', 'laplandgifts', 'src', 'data', 'boutiques.ts')
if (!existsSync(GIFTS)) {
  console.log('[boutiques] laplandgifts/ ei ole vieressa (CI / standalone) — kaytetaan committoitua src/data/boutiques.generated.ts:aa.')
  process.exit(0)
}
const { BOUTIQUES, TOWN_IDS } = await import('../../laplandgifts/src/data/boutiques.ts')
const { SHOP_COPY } = await import('../../laplandgifts/src/locales/shopCopy.ts')
const { LANG_PREFIX } = await import('../../laplandgifts/src/i18n/useLang.ts')

const OUT = 'src/data/boutiques.generated.ts'
const LANGS = Object.keys(LANG_PREFIX)

const rows = BOUTIQUES.map((b) => {
  const d = b.district ? `, district: ${JSON.stringify(b.district)}` : ''
  return `  { slug: ${JSON.stringify(b.slug)}, name: ${JSON.stringify(b.name)}, ` +
    `town: ${JSON.stringify(b.town)}${d}, ` +
    `hasOnlineStore: ${b.hasOnlineStore}, hasPhysicalStore: ${b.hasPhysicalStore} },`
}).join('\n')

const townNames = LANGS.map((l) => {
  const n = SHOP_COPY[l].boutique.townNames
  const pairs = TOWN_IDS.map((t) => `${t}: ${JSON.stringify(n[t])}`).join(', ')
  return `  ${JSON.stringify(l)}: { ${pairs} },`
}).join('\n')

// Giftsin kieliprefiksit, jotta uloslinkki osuu samaan kieleen kuin storen sivu.
const prefixes = LANGS.map((l) => `  ${JSON.stringify(l)}: ${JSON.stringify(LANG_PREFIX[l])},`).join('\n')

const out = `// GENEROITU TIEDOSTO. Älä muokkaa käsin.
// Lähde: laplandgifts/src/data/boutiques.ts + locales/shopCopy.ts
// Generoi uudelleen: node scripts/generate-boutiques.mjs
import type { Lang } from '../lang'

export interface StoreBoutique {
  slug: string
  name: string
  town: TownId
  district?: string
  hasOnlineStore: boolean
  hasPhysicalStore: boolean
}

export type TownId = ${TOWN_IDS.map((t) => JSON.stringify(t)).join(' | ')}

export const TOWN_IDS: TownId[] = [${TOWN_IDS.map((t) => JSON.stringify(t)).join(', ')}]

export const BOUTIQUES: StoreBoutique[] = [
${rows}
]

export const TOWN_NAMES: Record<Lang, Record<TownId, string>> = {
${townNames}
}

/** Giftsin kieliprefiksi: '' = englanti, muut esim. 'fi', 'br', 'cn', 'kr'. */
const GIFTS_PREFIX: Record<Lang, string> = {
${prefixes}
}

/**
 * Linkki putiikin sivulle laplandgifts.comissa, samalla kielellä kuin storen
 * sivu. Uloslinkitys yrityksen omille sivuille tapahtuu giftsin puolella,
 * jolloin se on mitattavissa yhdessä paikassa.
 */
export function giftsBoutiqueUrl(slug: string, lang: Lang): string {
  const p = GIFTS_PREFIX[lang]
  return \`https://laplandgifts.com\${p ? '/' + p : ''}/boutique/\${slug}\`
}

export function giftsDirectoryUrl(lang: Lang): string {
  const p = GIFTS_PREFIX[lang]
  return \`https://laplandgifts.com\${p ? '/' + p : ''}/boutiques\`
}
`

mkdirSync('src/data', { recursive: true })
writeFileSync(OUT, out, 'utf8')
const online = BOUTIQUES.filter((b) => b.hasOnlineStore).length
console.log(`[boutiques] ${OUT}: ${BOUTIQUES.length} putiikkia (${online} verkkokauppaa), ${TOWN_IDS.length} paikkakuntaa, ${LANGS.length} kieltä`)

// Portti: generoitu tiedosto on turha jos se on tyhjä tai kielet puuttuvat.
if (BOUTIQUES.length === 0) throw new Error('[boutiques] tyhjä lista')
if (LANGS.length !== 12) throw new Error(`[boutiques] ${LANGS.length} kieltä, odotettiin 12`)
for (const l of LANGS) {
  for (const t of TOWN_IDS) {
    if (!SHOP_COPY[l].boutique.townNames[t]) throw new Error(`[boutiques] ${l}/${t} paikannimi puuttuu`)
  }
}
readFileSync(OUT, 'utf8')
