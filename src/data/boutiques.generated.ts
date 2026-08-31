// GENEROITU TIEDOSTO. Älä muokkaa käsin.
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

export type TownId = "rovaniemi" | "inari" | "posio" | "levi" | "sodankyla" | "yllas" | "saariselka" | "enontekio" | "utsjoki"

export const TOWN_IDS: TownId[] = ["rovaniemi", "inari", "posio", "levi", "sodankyla", "yllas", "saariselka", "enontekio", "utsjoki"]

export const BOUTIQUES: StoreBoutique[] = [
  { slug: "lauri-handicrafts", name: "Lauri Handicrafts", town: "rovaniemi", hasOnlineStore: true, hasPhysicalStore: true },
  { slug: "marttiini", name: "Marttiini", town: "rovaniemi", hasOnlineStore: true, hasPhysicalStore: true },
  { slug: "pentik", name: "Pentik", town: "posio", hasOnlineStore: true, hasPhysicalStore: true },
  { slug: "duodji-shop", name: "Duodji Shop", town: "inari", district: "Sajos", hasOnlineStore: true, hasPhysicalStore: true },
  { slug: "samekki", name: "Samekki", town: "inari", hasOnlineStore: true, hasPhysicalStore: true },
  { slug: "piece-of-lapland", name: "Piece of Lapland", town: "rovaniemi", hasOnlineStore: true, hasPhysicalStore: true },
  { slug: "rovaniemi-souvenirs-shop", name: "Rovaniemi Souvenirs Shop", town: "rovaniemi", district: "Joulupukin Pajakylä", hasOnlineStore: true, hasPhysicalStore: true },
  { slug: "christmas-house-shop", name: "Christmas House Shop", town: "rovaniemi", district: "Joulupukin Pajakylä", hasOnlineStore: false, hasPhysicalStore: true },
  { slug: "korundi-shop", name: "Korundi Shop", town: "rovaniemi", hasOnlineStore: false, hasPhysicalStore: true },
  { slug: "shoppi-craft-design", name: "SHOPPI Craft & Design", town: "levi", hasOnlineStore: false, hasPhysicalStore: true },
  { slug: "siida-shop", name: "Siida Shop", town: "inari", district: "Saamelaismuseo Siida", hasOnlineStore: false, hasPhysicalStore: true },
  { slug: "tankavaaran-kultakyla", name: "Tankavaaran Kultakylä", town: "sodankyla", district: "Tankavaara", hasOnlineStore: false, hasPhysicalStore: true },
  { slug: "mailan-putiikki", name: "Mailan Putiikki", town: "yllas", district: "Äkäslompolo", hasOnlineStore: false, hasPhysicalStore: true },
  { slug: "kuukkeli-shop", name: "Kuukkeli Shop", town: "saariselka", hasOnlineStore: false, hasPhysicalStore: true },
  { slug: "mariellen-vaatehuone", name: "Mariellen Vaatehuone", town: "enontekio", hasOnlineStore: false, hasPhysicalStore: true },
  { slug: "lahjapuoti-tiinuska", name: "Lahjapuoti Tiinuska", town: "rovaniemi", hasOnlineStore: true, hasPhysicalStore: false },
  { slug: "lappi-shop-levi", name: "Lappi Shop Levi", town: "levi", district: "Sirkka", hasOnlineStore: false, hasPhysicalStore: true },
  { slug: "utsjoki-handicraft", name: "Utsjoki Handicraft", town: "utsjoki", hasOnlineStore: true, hasPhysicalStore: true },
]

export const TOWN_NAMES: Record<Lang, Record<TownId, string>> = {
  "en": { rovaniemi: "Rovaniemi", inari: "Inari", posio: "Posio", levi: "Levi", sodankyla: "Sodankylä", yllas: "Ylläs", saariselka: "Saariselkä", enontekio: "Enontekiö", utsjoki: "Utsjoki" },
  "fi": { rovaniemi: "Rovaniemi", inari: "Inari", posio: "Posio", levi: "Levi", sodankyla: "Sodankylä", yllas: "Ylläs", saariselka: "Saariselkä", enontekio: "Enontekiö", utsjoki: "Utsjoki" },
  "de": { rovaniemi: "Rovaniemi", inari: "Inari", posio: "Posio", levi: "Levi", sodankyla: "Sodankylä", yllas: "Ylläs", saariselka: "Saariselkä", enontekio: "Enontekiö", utsjoki: "Utsjoki" },
  "ja": { rovaniemi: "ロヴァニエミ", inari: "イナリ", posio: "ポシオ", levi: "レヴィ", sodankyla: "ソダンキュラ", yllas: "ユッラス", saariselka: "サーリセルカ", enontekio: "エノンテキオ", utsjoki: "ウツヨキ" },
  "es": { rovaniemi: "Rovaniemi", inari: "Inari", posio: "Posio", levi: "Levi", sodankyla: "Sodankylä", yllas: "Ylläs", saariselka: "Saariselkä", enontekio: "Enontekiö", utsjoki: "Utsjoki" },
  "pt-BR": { rovaniemi: "Rovaniemi", inari: "Inari", posio: "Posio", levi: "Levi", sodankyla: "Sodankylä", yllas: "Ylläs", saariselka: "Saariselkä", enontekio: "Enontekiö", utsjoki: "Utsjoki" },
  "zh-CN": { rovaniemi: "Rovaniemi", inari: "Inari", posio: "Posio", levi: "Levi", sodankyla: "Sodankylä", yllas: "Ylläs", saariselka: "Saariselkä", enontekio: "Enontekiö", utsjoki: "Utsjoki" },
  "ko": { rovaniemi: "Rovaniemi", inari: "Inari", posio: "Posio", levi: "Levi", sodankyla: "Sodankylä", yllas: "Ylläs", saariselka: "Saariselkä", enontekio: "Enontekiö", utsjoki: "Utsjoki" },
  "fr": { rovaniemi: "Rovaniemi", inari: "Inari", posio: "Posio", levi: "Levi", sodankyla: "Sodankylä", yllas: "Ylläs", saariselka: "Saariselkä", enontekio: "Enontekiö", utsjoki: "Utsjoki" },
  "it": { rovaniemi: "Rovaniemi", inari: "Inari", posio: "Posio", levi: "Levi", sodankyla: "Sodankylä", yllas: "Ylläs", saariselka: "Saariselkä", enontekio: "Enontekiö", utsjoki: "Utsjoki" },
  "nl": { rovaniemi: "Rovaniemi", inari: "Inari", posio: "Posio", levi: "Levi", sodankyla: "Sodankylä", yllas: "Ylläs", saariselka: "Saariselkä", enontekio: "Enontekiö", utsjoki: "Utsjoki" },
  "sv": { rovaniemi: "Rovaniemi", inari: "Inari", posio: "Posio", levi: "Levi", sodankyla: "Sodankylä", yllas: "Ylläs", saariselka: "Saariselkä", enontekio: "Enontekiö", utsjoki: "Utsjoki" },
}

/** Giftsin kieliprefiksi: '' = englanti, muut esim. 'fi', 'br', 'cn', 'kr'. */
const GIFTS_PREFIX: Record<Lang, string> = {
  "en": "",
  "fi": "fi",
  "de": "de",
  "ja": "ja",
  "es": "es",
  "pt-BR": "br",
  "zh-CN": "cn",
  "ko": "kr",
  "fr": "fr",
  "it": "it",
  "nl": "nl",
  "sv": "sv",
}

/**
 * Linkki putiikin sivulle laplandgifts.comissa, samalla kielellä kuin storen
 * sivu. Uloslinkitys yrityksen omille sivuille tapahtuu giftsin puolella,
 * jolloin se on mitattavissa yhdessä paikassa.
 */
export function giftsBoutiqueUrl(slug: string, lang: Lang): string {
  const p = GIFTS_PREFIX[lang]
  return `https://laplandgifts.com${p ? '/' + p : ''}/boutique/${slug}`
}

export function giftsDirectoryUrl(lang: Lang): string {
  const p = GIFTS_PREFIX[lang]
  return `https://laplandgifts.com${p ? '/' + p : ''}/boutiques`
}
