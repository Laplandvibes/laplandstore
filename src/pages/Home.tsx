import { useEffect } from 'react';
import Hero from '../components/Hero';
import ArtisanStory from '../components/ArtisanStory';
import LocalShops from '../components/LocalShops';
import WhyBuyFromUs from '../components/WhyBuyFromUs';
import FAQ, { FAQ_BY_LANG } from '../components/FAQ';
import RelatedSites from '../components/RelatedSites';
import Newsletter from '../components/Newsletter';
import GiftsHubBanner from '../components/GiftsHubBanner';
import ProductRail from '../shared/ads/ProductRail';
import suomikauppaRail from '../shared/ads/rails/suomikauppa';
import suomikauppaPicks from '../shared/ads/data/suomikauppaPicks';
import ivaloRail from '../shared/ads/rails/ivalo';
import ivaloPicks from '../shared/ads/data/ivaloPicks';
import nordicbuddiesRail from '../shared/ads/rails/nordicbuddies';
import nordicbuddiesPicks from '../shared/ads/data/nordicbuddiesPicks';
import scandinavianoutdoorRail from '../shared/ads/rails/scandinavianoutdoor';
import scandinavianoutdoorPicks from '../shared/ads/data/scandinavianoutdoorPicks';
import finlaysonRail from '../shared/ads/rails/finlayson';
import finlaysonPicks from '../shared/ads/data/finlaysonPicks';
import nansoRail from '../shared/ads/rails/nanso';
import nansoPicks from '../shared/ads/data/nansoPicks';
import KalevalaRail from '../shared/ads/KalevalaRail';
import HomeAdSlots, { MainPartnerBanner } from '../shared/HomeAdSlots';
import { AD_SLOTS } from '../data/adSlots';
import { useLang, type Lang } from '../lang';
import { AppPromoHero } from '../components/AppPromo';
import ReadyBaskets from '../components/ReadyBaskets';
import ActivitiesRail from '../components/ActivitiesRail';

const BCP47: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL', sv: 'sv-SE',
};

const META: Record<Lang, { seoTitle: string; seoDescription: string }> = {
  'en': {
    seoTitle: 'LaplandStore: Authentic Lapland gifts, crafts & souvenirs',
    seoDescription: 'A curated directory of Lapland boutiques from Rovaniemi to Utsjoki: crafts, jewellery, reindeer antler, ceramics and Lapland delicacies. Some ship to you.',
  },
  'fi': {
    seoTitle: 'LaplandStore: Aitoja Lapin lahjoja ja käsitöitä',
    seoDescription: 'Kuratoitu hakemisto lappilaisista putiikeista Rovaniemeltä Utsjoelle: käsityötä, koruja, poronsarvea, keramiikkaa ja Lapin herkkuja. Osa toimittaa kotiin.',
  },
  'de': {
    seoTitle: 'LaplandStore: Echte Lappland-Geschenke & Souvenirs',
    seoDescription: 'Kuratiertes Verzeichnis lappländischer Boutiquen von Rovaniemi bis Utsjoki: Handwerk, Schmuck, Rentiergeweih, Keramik und Delikatessen. Manche versenden.',
  },
  'ja': {
    seoTitle: 'LaplandStore：本物のラップランド土産・工芸品・ギフト',
    seoDescription: 'ロヴァニエミからウツヨキまで、ラップランドのブティックを厳選したディレクトリ。工芸品、ジュエリー、トナカイの角、陶器、ラップランドの味覚。配送する店もあります。',
  },
  'es': {
    seoTitle: 'LaplandStore: Regalos y artesanía auténticos de Laponia',
    seoDescription: 'Directorio seleccionado de boutiques de Laponia, de Rovaniemi a Utsjoki: artesanía, joyas, asta de reno, cerámica y delicias laponas. Algunas hacen envíos.',
  },
  'pt-BR': {
    seoTitle: 'LaplandStore: Presentes e artesanato autênticos da Lapônia',
    seoDescription: 'Diretório curado de boutiques da Lapônia, de Rovaniemi a Utsjoki: artesanato, joias, chifre de rena, cerâmica e iguarias. Algumas fazem entregas.',
  },
  'zh-CN': {
    seoTitle: 'LaplandStore：正宗拉普兰礼物、手工艺与纪念品',
    seoDescription: '精选拉普兰精品店名录，从罗瓦涅米到乌茨约基：手工艺品、饰品、驯鹿角、陶器与拉普兰美味。部分商店可寄送。',
  },
  'ko': {
    seoTitle: 'LaplandStore: 라플란드 정통 선물·공예품·기념품 가이드',
    seoDescription: '로바니에미에서 우츠요키까지, 라플란드 부티크를 엄선한 디렉터리입니다. 공예품, 장신구, 순록 뿔, 도자기, 라플란드 먹거리. 일부는 배송합니다.',
  },
  'fr': {
    seoTitle: 'LaplandStore : Cadeaux et artisanat authentiques de Laponie',
    seoDescription: 'Annuaire sélectif de boutiques de Laponie, de Rovaniemi à Utsjoki : artisanat, bijoux, bois de renne, céramique et spécialités. Certaines expédient.',
  },
  'it': {
    seoTitle: 'LaplandStore: Regali e artigianato autentici della Lapponia',
    seoDescription: 'Directory curata di boutique della Lapponia, da Rovaniemi a Utsjoki: artigianato, gioielli, corno di renna, ceramica e specialità. Alcune spediscono.',
  },
  'nl': {
    seoTitle: 'LaplandStore: Authentieke geschenken en ambacht uit Lapland',
    seoDescription: 'Samengestelde gids met Lapland-boetieks van Rovaniemi tot Utsjoki: ambacht, sieraden, rendiergewei, keramiek en lekkernijen. Sommige verzenden.',
  },
  'sv': {
    seoTitle: 'LaplandStore: Äkta presenter och hantverk från Lappland',
    seoDescription: 'Handplockad katalog över butiker i Lappland, från Rovaniemi till Utsjoki: hantverk, smycken, renhorn, keramik och delikatesser. Vissa skickar hem.',
  },
};

export default function Home() {
  const { lang } = useLang();
  const m = META[lang];

  useEffect(() => {
    document.title = m.seoTitle;
    let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', m.seoDescription);
  }, [m.seoTitle, m.seoDescription]);

  // FAQPage rich-snippet JSON-LD, built from the same source as the visible FAQ.
  useEffect(() => {
    const faqPage = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: BCP47[lang],
      mainEntity: FAQ_BY_LANG[lang].map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.aPlain },
      })),
    };
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faqpage', 'home');
    script.textContent = JSON.stringify(faqPage);
    // Replace any prior instance (locale switch / re-render) to avoid duplicates.
    document.querySelectorAll('script[data-faqpage="home"]').forEach((el) => el.remove());
    document.head.appendChild(script);
    return () => script.remove();
  }, [lang]);

  return (
    <>
      <Hero />
      {/* App launch block, directly under the site's own opening. At the foot
          of the page it measured 81 % down a 33 000 px front page, and an
          announcement nobody scrolls to is not an announcement. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AppPromoHero />
      </div>
      {/* PÄÄKUMPPANI-banneri heti heron alla — sivun paras mainospaikka,
          tyhjänä kompakti house-ad → LV Media -portaali (cream-pinta → light) */}
      <MainPartnerBanner config={AD_SLOTS} locale={lang} surface="light" />
      <WhyBuyFromUs />
      {/* Valmis kori (Vesa 5.9.2026): koko kerrasto yhdellä klikillä kumppanin
          ostoskoriin, kokovalitsin vaihtaa kaikki rivit. Heti sen jälkeen, kun
          sivu on kertonut miksi täältä ostetaan. */}
      <ReadyBaskets />
      {/* Kumppaniosio heti ensimmäisen kategoriabändin jälkeen:
          kakkospääkumppani + 6 premium-paikkaa (house-adit kun vapaat) */}
      <HomeAdSlots config={AD_SLOTS} locale={lang} surface="light" />
      {/* Kulta-Center — the product rail ONLY. The brand card that used to sit
          directly above it is gone (Vesa 2026-09-04: "huh huh mitä paskaa. kaksi
          saman firman mainosta perätysten?"). He is right and the rule was already
          written down: ads must be proportional in size and distributed, never
          stacked back-to-back. Two units for ONE advertiser, one after the other,
          each about a screen tall, is the worst case of it — and the second one
          repeated the first one's argument almost word for word.
          🔴 Do not reintroduce <KultaCenterAd> on this page. The rail carries the
          same brand facts and the same delivery terms in its fine print, plus
          eight actual pieces with prices. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <KalevalaRail lang={lang} sid="home_kalevala" variant="light" />
        </div>
      </section>
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ProductRail partner={nansoRail} snapshot={nansoPicks} lang={lang} sid="home_nanso" variant="light" />
        </div>
      </section>
      <ArtisanStory />
      <LocalShops />
      {/* Suomikauppa (Daisycon) — placed DIRECTLY after the boutique directory
          because the card's whole argument depends on it: most of the shops
          listed above sell over the counter only, and this is the one that
          posts abroad. Moved anywhere else the headline stops being true. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ProductRail partner={suomikauppaRail} snapshot={suomikauppaPicks} lang={lang} sid="after_boutiques_ships_home" variant="light" />
        </div>
      </section>
      {/* Aktiviteetit (Vesa 5.9.2026: "juuri ne aktiviteetit siellä
          laplandstoressa"): putiikkien ja kotiin toimittavan kaupan jälkeen,
          ennen seuraavaa tuoteriviä, jotta sivu vuorottelee kauppa → tekeminen. */}
      <ActivitiesRail />
      {/* Mapped product ad — IVALO.COM (Finnish design, delivered), skinned in their brand. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ProductRail partner={ivaloRail} snapshot={ivaloPicks} lang={lang} sid="after_boutiques" variant="light" />
        </div>
      </section>
      {/* Finlayson ja Nanso — kaksi suomalaista tekstiilitaloa, kumpikin oma
          yksikkönsä eri kohdassa sivua. EI vierekkäin: kaksi samankaltaista
          mainosta peräkkäin on sama virhe kuin Kulta-Center kahdesti. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ProductRail partner={finlaysonRail} snapshot={finlaysonPicks} lang={lang} sid="home_finlayson" variant="light" />
        </div>
      </section>
      <GiftsHubBanner />

      {/* Nordicbuddies (Daisycon 20538). Sits after the gifts banner and before
          the outdoor card so the page keeps alternating shop → story → shop, and
          far from the Suomikauppa card: the two answer different questions.
          Media laplandstore.fi (424061) approved 2026-08-24. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ProductRail partner={nordicbuddiesRail} snapshot={nordicbuddiesPicks} lang={lang} sid="home_character_design" variant="light" />
        </div>
      </section>
      {/* Mapped product ad — Scandinavian Outdoor (pack for the trip), ships worldwide. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ProductRail partner={scandinavianoutdoorRail} snapshot={scandinavianoutdoorPicks} lang={lang} sid="pack_for_trip" variant="light" />
        </div>
      </section>
      <FAQ />
      <RelatedSites />
      <Newsletter />
    </>
  );
}
