/**
 * Etusivun standardit mainospaikat (LV Media -inventaari) — laplandstore.fi
 *
 * JAETTU MALLI (shared/HomeAdSlots v3):
 *   mainPartner = pääkumppani → <MainPartnerBanner> heti heron alla
 *                 (tyhjänä kompakti house-ad → LV Media -portaali)
 *   cards[0..1] = etusivun kortit A/B → <HomeAdSlots>-osio
 *   spots       = 6 kohdekohtaista premium-paikkaa (oletusjako)
 *
 * 🔴🔴 Legacy-kenttä `sponsors` EI toimi niin kuin sen nimi lupaa: HomeAdSlots
 * lukee sponsors[0]:n kortiksi A JA MainPartnerBanner lukee saman sponsors[0]:n
 * banneriksi ⇒ sama kumppani kahdesti samalla sivulla. Juuri niin kävi Keloalle
 * 6.9.2026 (Vesa: "teki turhan mainoksen keloasta kun siellä oli alempana jo
 * hyvä mainos"). Yksi kumppani = yksi yksikkö: käytä `cards`-kenttää, ja
 * `mainPartner`ia vain, jos kumppani on ostanut nimenomaan bannerin. Gifts
 * (sama Keloa-objekti) renderöi vain <HomeAdSlots>-kortin — sama lopputulos.
 *
 * Tyhjä paikka (null) renderöi house-adin → LV Media -portaali
 * (https://laplandvibes.com/media/site/laplandstore) + GA4 advertise_here_click.
 *
 * Myyntiprosessi: kumppani ostaa paikan → täytä Partner-objekti tähän →
 * npm run build → deploy --branch=main.
 */

import type { HomeAdSlotsConfig } from '../shared/HomeAdSlots';
import type { Partner } from '../shared/PartnerSlot';
import { DEFAULT_PREMIUM_SPOTS } from '../shared/PremiumSpotGrid';

/**
 * Keloa Eyewear, Sodankylä — kumppanikortti (cards[0], <HomeAdSlots>-osio:
 * kuva, esittely, CTA ja artikkelilinkki). EI lisäksi banneria heron alla —
 * Vesa 6.9.2026 piti kompaktia banneria turhana, kun sama kumppani on jo
 * kunnolla esillä kortissa alempana.
 *
 * Yksi kymmenestä maksuttomasta kumppanipaikasta (Vesa 10.8.2026: "Laskua ei
 * tule kummastakaan"), mutta SAMA tuote kuin maksavalla: artikkeli hubissa +
 * premium-mainospaikka oman kategorian pääsivulla. Luonteva kategoria on
 * lahjat/matkamuistot. Sama kortti on laplandgifts.com:ssa (Vesan lupaus 10.8.);
 * tämä on Vesan 6.9. lisäys laplandstore.fi:hin — sama copy, oma SID.
 *
 * Tekstit ovat Lauran omasta, 31.8. hyväksymästä artikkelitekstistä — ei uutta
 * copya, jota hän ei ole nähnyt. Kuva on hänen oma ateljeekuvansa (13.8.).
 * Logo on rajattu sanamerkki ilman iskulausetta (chip on aina valkoinen, joten
 * tumma vihreä merkki käy sellaisenaan).
 *
 * `url` kulkee go.laplandvibes.com/go/keloa-reitin kautta, jotta klikki päätyy
 * D1:een kuten jokainen muu mainospaikka. Reitti verifioitu ennen tätä sijoitusta
 * (6.9.2026: 302 → keloa.fi UTM:llä, myös dest-muoto) — 4.9. giftsin banneri ehti
 * liveen kuolleella reitillä, joten tarkistus tehdään joka kerta.
 *
 * 🔴🔴 KIELIVERSIO (Niina/Bear 2026-07-30 -sääntö, Vesa löysi rikon 4.9.):
 * linkin pitää viedä kumppanin OMAAN kieliversioon. keloa.fi ilmoittaa
 * hreflangissaan kaksi: fi = / ja en = /en/home/. `urlFi` menee Workerin
 * oletuspohjaan (suomenkielinen juuri), `url` — eli kaikki muut lokaalit —
 * kantaa `dest`-parametrin englanninkieliseen versioon. Worker hyväksyy
 * destin vain jos se alkaa reitin `base`illa, joten se ei ole avoin ohjaus.
 * Molemmat mitattu livenä 4.9.2026: HTTP 200.
 */
const KELOA: Partner = {
  name: 'Keloa',
  tagline: 'Käsintehdyt silmälasit tuohesta ja poronsarvesta',
  taglineEn: 'Handmade eyewear from birch bark and reindeer antler',
  taglineSv: 'Handgjorda glasögon av näver och renhorn',
  url: 'https://go.laplandvibes.com/go/keloa?sid=laplandstore_home_main_partner&dest=https%3A%2F%2Fkeloa.fi%2Fen%2Fhome%2F',
  urlFi: 'https://go.laplandvibes.com/go/keloa?sid=laplandstore_home_main_partner',
  photoSrc: '/images/partners/keloa-atelier.webp',
  imageSrc: '/images/partners/keloa-atelier.webp',
  logoSrc: '/images/partners/keloa.png',
  logoAlt: 'Keloa',
  ctaLabel: 'Tutustu Keloaan',
  ctaLabelEn: 'Discover Keloa',
  ctaLabelSv: 'Upptäck Keloa',
  accent: '#35493E',
  description:
    'Optikon ateljee Sodankylän pääkadulla, jossa silmälasikehykset ja korut tehdään käsin suomalaisesta tuohesta ja luonnollisesti irronneesta poronsarvesta. Ylijäämästä syntyy koruja ja matkamuistoja.',
  descriptionEn:
    "An optician's atelier on the main street of Sodankylä, where eyeglass frames and jewellery are made by hand from Finnish birch bark and naturally shed reindeer antler. The offcuts become jewellery and souvenirs.",
  descriptionSv:
    'En optikers ateljé vid Sodankyläs huvudgata, där glasögonbågar och smycken görs för hand av finländsk näver och naturligt fällt renhorn. Av spillet blir det smycken och souvenirer.',
  articleUrl: 'https://laplandvibes.com/fi/blog/keloa',
  articleUrlEn: 'https://laplandvibes.com/blog/keloa',
  articleUrlSv: 'https://laplandvibes.com/sv/blog/keloa',
  articleLabel: 'Lue Keloan tarina',
  articleLabelEn: "Read Keloa's story",
  articleLabelSv: 'Läs Keloas historia',
};

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandstore',
  cards: [KELOA, null],
  spots: DEFAULT_PREMIUM_SPOTS,
};
