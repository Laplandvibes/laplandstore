/**
 * Provenance and licence receipt for every open-licence or stock photograph on this site (partner product pictures are the partners' own and are not listed).
 *
 * 9.10.2026 (Vesa 4.10.: swap the network's AI images for real photographs). The home hero, the artisan picture and the four
 * activity posters were AI renders (May-September 2026). Each is now a real photograph with a licence that allows
 * commercial use.
 *
 * One image, one site: every file was checked against every LaplandVibes repo by name, by 64×36 pixel comparison and
 * by photographer + day (siblings) and reserved in _kuvavaihto-20261004/ledger.tsv. Receipt fields: source, title,
 * author as written there, licence with version, taken, retrieved, price 0 EUR, changes, checks.
 *
 * 🔴 CC BY-SA files are RESIZED ONLY, never cropped (a crop is an adapted work and carries the ShareAlike duty): the
 * file is the whole frame and object-cover crops it on screen. CC BY, CC0 and public-domain files may be cropped; the
 * crop is declared in `changes` and printed as "cropped" beside the licence (CC BY §3(a)(1)(B)).
 * 🔴 The home hero (hero-market) is CC BY-SA, so the share card must NOT be made from it (lv_permanent_rules §34.2):
 * og.korttikuva in scripts/sivustot.json must be pinned to /img/artisan-hands.jpg (Pexels): coordinator task.
 * 🔴 Key = the file name under /img/ without extension (`hero-market`, `activities/aurora`); -600/-800/... variants share it.
 */
import type { Lang } from '../lang'

export type PhotoCredit = {
  source: 'Wikimedia Commons' | 'Flickr' | 'Pexels'
  /** The source's own title of the file (CC BY §4(b): the title, if supplied). */
  title: string
  /** Author exactly as the source writes it. */
  author: string
  license: 'CC BY 2.0' | 'CC BY 3.0' | 'CC BY 4.0' | 'CC BY-SA 2.0' | 'CC BY-SA 3.0' | 'CC BY-SA 4.0' | 'CC0 1.0' | 'Public Domain Mark 1.0' | 'Pexels'
  licenseUrl: string
  /** File page at the source. */
  sourceUrl: string
  /** Commons file name, Flickr photo id or pexels:<id>. */
  sourceId: string
  taken: string
  retrieved: string
  /** The served file is a crop of the original (CC BY / CC0 / PD only): the credit says so. */
  cropped?: boolean
  /** What the picture shows, in English: the alt text and the card text must say this. */
  shows: string
  changes: string
  checks: string
}

export const CREDIT_WORDS: Record<Lang, { photo: string; photos: string; cropped: string }> = {
  en: { photo: 'Photo', photos: 'Photos', cropped: 'cropped' },
  fi: { photo: 'Kuva', photos: 'Kuvat', cropped: 'rajattu' },
  de: { photo: 'Foto', photos: 'Fotos', cropped: 'beschnitten' },
  ja: { photo: '写真', photos: '写真', cropped: 'トリミング' },
  es: { photo: 'Foto', photos: 'Fotos', cropped: 'recortada' },
  'pt-BR': { photo: 'Foto', photos: 'Fotos', cropped: 'recortada' },
  'zh-CN': { photo: '图片', photos: '图片', cropped: '已裁剪' },
  ko: { photo: '사진', photos: '사진', cropped: '잘라냄' },
  fr: { photo: 'Photo', photos: 'Photos', cropped: 'recadrée' },
  it: { photo: 'Foto', photos: 'Foto', cropped: 'ritagliata' },
  nl: { photo: 'Foto', photos: "Foto's", cropped: 'bijgesneden' },
  sv: { photo: 'Foto', photos: 'Foton', cropped: 'beskuren' },
}

const WHEN = '2026-10-09'
const CHECKS =
  'name, 64×36 pixel and photographer+day sibling check against all 29 repos 4.–9.10.2026; plates, faces and lettering checked at 100 %'

export const PHOTO_CREDITS: Record<string, PhotoCredit> = {
  "hero-market": {
    source: "Wikimedia Commons", title: "Kuksa mugs hanging on the wall.jpg", author: "Periegetes",
    license: "CC BY-SA 4.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Kuksa_mugs_hanging_on_the_wall.jpg", sourceId: "Kuksa mugs hanging on the wall.jpg",
    taken: "2023-04-09", retrieved: WHEN,
    shows: "Wooden kuksa mugs hanging on a log wall",
    changes: "resized 4496×3000 → 1920×1281 (JPEG q80) and 800/1200/1920/2560 px AVIF; no crop (ShareAlike)", checks: CHECKS,
  },
  "artisan-hands": {
    source: "Pexels", title: "Brown Wooden Axe Besides Brown Leather Knife Holster", author: "Lum3n",
    license: "Pexels", licenseUrl: "https://www.pexels.com/license/",
    sourceUrl: "https://www.pexels.com/photo/brown-wooden-axe-besides-brown-leather-knife-holster-167696/", sourceId: "pexels:167696",
    taken: "2016-09-05", retrieved: WHEN,
    shows: "A knife in a leather sheath beside an axe on a tree stump",
    changes: "resized 5034×3356 → 1920×1280 (JPEG q82) and 800/1200/1920 px AVIF; no crop", checks: CHECKS,
  },
  "activities/aurora": {
    source: "Flickr", title: "Northern Lights IV", author: "Adrián Pérez",
    license: "CC BY-SA 2.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    sourceUrl: "https://www.flickr.com/photos/aperezdc/22622361397/", sourceId: "22622361397",
    taken: "2015-10-30", retrieved: WHEN,
    shows: "Green aurora over birches and the Kemijoki river, seen from the park by Arktikum, Rovaniemi",
    changes: "resized 2500×1667 → 1200×800 and 600×400 WebP; no crop (ShareAlike)", checks: CHECKS,
  },
  "activities/icebreaker": {
    source: "Wikimedia Commons", title: "SampoIceTrac.JPG", author: "Kat1100",
    license: "CC BY-SA 3.0", licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:SampoIceTrac.JPG", sourceId: "SampoIceTrac.JPG",
    taken: "2007-03", retrieved: WHEN,
    shows: "The track broken in the sea ice, seen from the icebreaker Sampo near Kemi",
    changes: "resized 1600×1200 → 1200×900 and 600×450 WebP; no crop (ShareAlike)", checks: CHECKS,
  },
  "activities/husky": {
    source: "Flickr", title: "husky safari in lapponia 02", author: "arcticroute.com",
    license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl: "https://www.flickr.com/photos/arcticroute/2103792481/", sourceId: "2103792481",
    taken: "2005-03-15", retrieved: WHEN,
    shows: "A husky team on a snowy trail with pines and blue sky, Saariselkä",
    changes: "resized 2272×1704 → 1200×900 and 600×450 WebP; no crop", checks: CHECKS,
  },
  "activities/korouoma": {
    source: "Wikimedia Commons", title: "Korouoma Canyon, Lapland 03.jpg", author: "Ninara",
    license: "CC BY 2.0", licenseUrl: "https://creativecommons.org/licenses/by/2.0/",
    sourceUrl: "https://commons.wikimedia.org/wiki/File:Korouoma_Canyon,_Lapland_03.jpg", sourceId: "Korouoma Canyon, Lapland 03.jpg",
    taken: "2021-02-12", retrieved: WHEN,
    shows: "The frozen waterfalls of Korouoma canyon among rime-covered trees, Posio",
    changes: "resized 5476×3651 → 1200×800 and 600×400 WebP; no crop", checks: CHECKS,
  },
}

/** Credit for an image path or key: query string, /img/ prefix, extension and size suffix are ignored. */
export function creditFor(nameOrSrc: string | undefined): PhotoCredit | undefined {
  if (!nameOrSrc) return undefined
  const base = nameOrSrc.split('?')[0].replace(/^\/img\//, '').replace(/\.(avif|webp|jpe?g)$/, '').replace(/-(?:600|800|1200|1920|2560)$/, '')
  return PHOTO_CREDITS[base]
}
