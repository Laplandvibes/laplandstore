import { useEffect } from 'react';
import Hero from '../components/Hero';
import ArtisanStory from '../components/ArtisanStory';
import LocalShops from '../components/LocalShops';
import WhyBuyFromUs from '../components/WhyBuyFromUs';
import FAQ, { FAQ_BY_LANG } from '../components/FAQ';
import RelatedSites from '../components/RelatedSites';
import Newsletter from '../components/Newsletter';
import GiftsHubBanner from '../components/GiftsHubBanner';
import { KultaCenterAd, IvaloAd, ScandinavianOutdoorAd } from '../components/StoreAds';
import SuomikauppaAd from '../components/SuomikauppaAd';
import NordicbuddiesAd from '../components/NordicbuddiesAd';
import HomeAdSlots, { MainPartnerBanner } from '../shared/HomeAdSlots';
import { AD_SLOTS } from '../data/adSlots';
import { useLang, type Lang } from '../lang';
import { AppPromoHero } from '../components/AppPromo';

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
    seoDescription: 'Kuratiertes Verzeichnis lappländischer Boutiquen von Rovaniemi bis Utsjoki: Handwerk, Schmuck, Rentierhorn, Keramik und Delikatessen. Manche versenden.',
  },
  'ja': {
    seoTitle: 'LaplandStore：本物のラップランド土産・工芸品・ギフト',
    seoDescription: 'ロヴァニエミからウツヨキまで、ラップランドのブティックを厳選したディレクトリ。工芸品、ジュエリー、トナカイの角、陶器、ラップランドの味覚。配送する店もあります。',
  },
  'es': {
    seoTitle: 'LaplandStore: Regalos y artesanía auténticos de Laponia',
    seoDescription: 'Directorio curado de boutiques de Laponia, de Rovaniemi a Utsjoki: artesanía, joyas, asta de reno, cerámica y delicias laponas. Algunas hacen envíos.',
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
    seoTitle: 'LaplandStore: Cadeaux et artisanat authentiques de Laponie',
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
      {/* Kumppaniosio heti ensimmäisen kategoriabändin jälkeen:
          kakkospääkumppani + 6 premium-paikkaa (house-adit kun vapaat) */}
      <HomeAdSlots config={AD_SLOTS} locale={lang} surface="light" />
      {/* Mapped product ad — Kulta-Center (jewellery gift), skinned in their brand. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <KultaCenterAd sid="after_featured" />
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
          <SuomikauppaAd sid="after_boutiques_ships_home" />
        </div>
      </section>
      {/* Mapped product ad — IVALO.COM (Finnish design, delivered), skinned in their brand. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <IvaloAd sid="after_boutiques" />
        </div>
      </section>
      <GiftsHubBanner />

      {/* Nordicbuddies (Daisycon 20538). Sits after the gifts banner and before
          the outdoor card so the page keeps alternating shop → story → shop, and
          far from the Suomikauppa card: the two answer different questions.
          Media laplandstore.fi (424061) approved 2026-08-24. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <NordicbuddiesAd sid="home_character_design" />
        </div>
      </section>
      {/* Mapped product ad — Scandinavian Outdoor (pack for the trip), ships worldwide. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <ScandinavianOutdoorAd sid="pack_for_trip" />
        </div>
      </section>
      <FAQ />
      <RelatedSites />
      <Newsletter />
    </>
  );
}
