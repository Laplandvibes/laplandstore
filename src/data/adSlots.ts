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
  articleUrl: 'https://laplandvibes.com/fi/blog/keloa/',
  articleUrlEn: 'https://laplandvibes.com/blog/keloa/',
  articleUrlSv: 'https://laplandvibes.com/sv/blog/keloa/',
  articleLabel: 'Lue Keloan tarina',
  articleLabelEn: "Read Keloa's story",
  articleLabelSv: 'Läs Keloas historia',
  // Muut yhdeksän kieltä, sama kartta kuin laplandgiftsin adSlots.ts:ssä.
  // Ilman sitä kortti näytti englannin /de/-, /fr/-, /ja/- jne. etusivulla
  // (gate:kielipuhtaus-dom 28.9.2026). Iskulause ja kuvauksen alku ovat hubin
  // Keloa-artikkelin omasta brandCard-lohkosta (laplandvibes/src/locales/
  // <kieli>/keloa.json), "pääkadulla" artikkelin atelier-kappaleesta ja
  // ylijäämävirke sen jewellery-kappaleesta: hubissa julkaistut käännökset,
  // eivät uutta copya. Keloan oma sivusto on vain fi + en, joten `url` pysyy
  // englanninkielisessä versiossa.
  i18n: {
    de: {
      tagline: 'Handgefertigte Brillen aus Birkenrinde und Rentiergeweih',
      description:
        'Das Atelier einer Augenoptikerin an der Hauptstraße von Sodankylä, in dem Brillenfassungen und Schmuck von Hand aus finnischer Birkenrinde und natürlich abgeworfenem Rentiergeweih entstehen. Das Material, das bei der Fertigung der Fassungen übrig bleibt, wird für Schmuck und Mitbringsel genutzt.',
      cta: 'Keloa entdecken',
      articleLabel: 'Keloas Geschichte lesen',
      articleUrl: 'https://laplandvibes.com/de/blog/keloa/',
    },
    fr: {
      tagline: 'Lunettes faites main en écorce de bouleau et bois de renne',
      description:
        'L’atelier d’une opticienne dans la rue principale de Sodankylä, où les montures et les bijoux sont façonnés à la main dans de l’écorce de bouleau finlandaise et du bois de renne tombé naturellement. Les chutes de matière issues de la fabrication des montures servent à faire des bijoux et des souvenirs.',
      cta: 'Découvrir Keloa',
      articleLabel: 'Lire l’histoire de Keloa',
      articleUrl: 'https://laplandvibes.com/fr/blog/keloa/',
    },
    it: {
      tagline: 'Occhiali fatti a mano in corteccia di betulla e palco di renna',
      description:
        'L’atelier di un’ottica sulla via principale di Sodankylä, dove montature e gioielli nascono a mano dalla corteccia di betulla finlandese e da palchi di renna caduti naturalmente. Il materiale che avanza dalla lavorazione delle montature viene usato per gioielli e souvenir.',
      cta: 'Scopri Keloa',
      articleLabel: 'Leggi la storia di Keloa',
      articleUrl: 'https://laplandvibes.com/it/blog/keloa/',
    },
    es: {
      tagline: 'Gafas hechas a mano en corteza de abedul y cuerna de reno',
      description:
        'El taller de una óptica en la calle principal de Sodankylä, donde las monturas y las joyas se hacen a mano con corteza de abedul finlandesa y cuerna de reno desprendida de forma natural. El material sobrante de la fabricación de las monturas se aprovecha en joyas y recuerdos.',
      cta: 'Descubrir Keloa',
      articleLabel: 'Leer la historia de Keloa',
      articleUrl: 'https://laplandvibes.com/es/blog/keloa/',
    },
    pt: {
      tagline: 'Óculos feitos à mão em casca de bétula e galhada de rena',
      description:
        'O ateliê de uma optometrista na rua principal de Sodankylä, onde armações e joias são feitas à mão com casca de bétula finlandesa e galhada de rena caída naturalmente. O material que sobra da fabricação das armações é aproveitado em joias e lembranças.',
      cta: 'Conheça a Keloa',
      articleLabel: 'Leia a história da Keloa',
      articleUrl: 'https://laplandvibes.com/br/blog/keloa/',
    },
    nl: {
      tagline: 'Handgemaakte brillen van berkenbast en rendiergewei',
      description:
        'Het atelier van een opticien aan de hoofdstraat van Sodankylä, waar monturen en sieraden met de hand worden gemaakt van Finse berkenbast en natuurlijk afgeworpen rendiergewei. Het materiaal dat overblijft bij het maken van de monturen wordt gebruikt voor sieraden en souvenirs.',
      cta: 'Ontdek Keloa',
      articleLabel: 'Lees het verhaal van Keloa',
      articleUrl: 'https://laplandvibes.com/nl/blog/keloa/',
    },
    ja: {
      tagline: '樺の樹皮とトナカイの角でつくる手づくりの眼鏡',
      description:
        'ソダンキュラの目抜き通りにある眼鏡技術者のアトリエ。フィンランドの樺の樹皮と自然に落ちたトナカイの角から、フレームとジュエリーを手づくりしています。フレームづくりで出た端材は、ジュエリーやおみやげに生かしています。',
      cta: 'Keloaの公式サイトへ',
      articleLabel: 'Keloaのストーリーを読む',
      articleUrl: 'https://laplandvibes.com/ja/blog/keloa/',
    },
    ko: {
      tagline: '자작나무 껍질과 순록 뿔로 만드는 수제 안경',
      description:
        '소단퀼래 중심 거리에 있는 안경사의 아틀리에. 핀란드 자작나무 껍질과 자연적으로 떨어진 순록 뿔로 테와 주얼리를 손수 만듭니다. 테를 만들고 남은 재료는 주얼리와 기념품에 활용합니다.',
      cta: 'Keloa 둘러보기',
      articleLabel: 'Keloa 이야기 읽기',
      articleUrl: 'https://laplandvibes.com/kr/blog/keloa/',
    },
    zh: {
      tagline: '用桦树皮和驯鹿角手工制作的眼镜',
      description:
        '索丹屈莱主街上一位验光配镜师的工作室，用芬兰桦树皮和自然脱落的驯鹿角手工制作镜架与首饰。做镜架剩下的余料会用在首饰和纪念品上。',
      cta: '了解 Keloa',
      articleLabel: '阅读 Keloa 的故事',
      articleUrl: 'https://laplandvibes.com/cn/blog/keloa/',
    },
  },
};

export const AD_SLOTS: HomeAdSlotsConfig = {
  siteSlug: 'laplandstore',
  cards: [KELOA, null],
  spots: DEFAULT_PREMIUM_SPOTS,
};
