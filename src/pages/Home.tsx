import { useEffect } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import ArtisanStory from '../components/ArtisanStory';
import LocalShops from '../components/LocalShops';
import WhyBuyFromUs from '../components/WhyBuyFromUs';
import FAQ, { FAQ_BY_LANG } from '../components/FAQ';
import RelatedSites from '../components/RelatedSites';
import Newsletter from '../components/Newsletter';
import GiftsHubBanner from '../components/GiftsHubBanner';
import { KultaCenterAd, IvaloAd, ScandinavianOutdoorAd } from '../components/StoreAds';
import HomeAdSlots, { MainPartnerBanner } from '../../../shared/HomeAdSlots';
import { AD_SLOTS } from '../data/adSlots';
import { useLang, type Lang } from '../lang';

const BCP47: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL',
};

const META: Record<Lang, { seoTitle: string; seoDescription: string }> = {
  'en': {
    seoTitle: 'LaplandStore — Authentic Lapland gifts, crafts & souvenirs',
    seoDescription: 'A curated shop of authentic Lapland gifts: reindeer leather, puukko knives, juniper wood, woolen socks and Sámi-inspired homeware. Made in Finnish Lapland, shipped worldwide.',
  },
  'fi': {
    seoTitle: 'LaplandStore — Aitoja Lapin lahjoja ja käsitöitä',
    seoDescription: 'Käsin valittu valikoima aitoja Lapin lahjoja: poronnahkaa, puukkoja, katajapuuta ja villasukkia. Valmistettu Suomen Lapissa, toimitus ympäri maailman.',
  },
  'de': {
    seoTitle: 'LaplandStore — Echte Lappland-Geschenke & Souvenirs',
    seoDescription: 'Echte Lappland-Geschenke: Rentierleder, Puukko-Messer, Wacholderholz und Wollsocken. Hergestellt in Finnisch-Lappland, weltweiter Versand.',
  },
  'ja': {
    seoTitle: 'LaplandStore — 本物のラップランド土産・工芸品・ギフト',
    seoDescription: '厳選した本物のラップランドの贈り物 — トナカイ革、プーッコナイフ、ジュニパー材、ウールソックス、サーミにインスパイアされたホームウェア。フィンランド・ラップランド産、世界中へ発送します。',
  },
  'es': {
    seoTitle: 'LaplandStore — Regalos y artesanía auténticos de Laponia',
    seoDescription: 'Regalos auténticos de Laponia: cuero de reno, cuchillos puukko, madera de enebro y calcetines de lana. Hechos en la Laponia finlandesa, envíos a todo el mundo.',
  },
  'pt-BR': {
    seoTitle: 'LaplandStore — Presentes e artesanato autênticos da Lapônia',
    seoDescription: 'Presentes autênticos da Lapônia: couro de rena, facas puukko, madeira de zimbro e meias de lã. Feitos na Lapônia finlandesa, envio para o mundo todo.',
  },
  'zh-CN': {
    seoTitle: 'LaplandStore — 正宗拉普兰礼物、手工艺与纪念品',
    seoDescription: '精选拉普兰正品礼物：驯鹿皮、芬兰传统刀（puukko）、杜松木、羊毛袜以及萨米风格家居用品。芬兰拉普兰制造，全球发货。',
  },
  'ko': {
    seoTitle: 'LaplandStore — 라플란드 정통 선물·공예품·기념품 매장',
    seoDescription: '엄선한 라플란드 정통 선물 매장입니다. 순록 가죽, 푸코(puukko) 칼, 향나무, 양모 양말, 사미 감각의 홈웨어를 만나보십시오. 핀란드 라플란드에서 제작하여 전 세계로 발송해 드립니다.',
  },
  'fr': {
    seoTitle: 'LaplandStore — Cadeaux et artisanat authentiques de Laponie',
    seoDescription: 'Cadeaux authentiques de Laponie : cuir de renne, couteaux puukko, bois de genévrier et laine. Fabriqués en Laponie finlandaise, livraison mondiale.',
  },
  'it': {
    seoTitle: 'LaplandStore — Regali e artigianato autentici della Lapponia',
    seoDescription: 'Regali autentici della Lapponia: pelle di renna, coltelli puukko, legno di ginepro e calze di lana. Realizzati nella Lapponia finlandese, spedizione mondiale.',
  },
  'nl': {
    seoTitle: 'LaplandStore — Authentieke geschenken en ambacht uit Lapland',
    seoDescription: 'Authentieke Lapland-geschenken: rendierleer, puukko-messen, jeneverbeshout en wollen sokken. Gemaakt in Fins Lapland, wereldwijde verzending.',
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
      {/* PÄÄKUMPPANI-banneri heti heron alla — sivun paras mainospaikka,
          tyhjänä kompakti house-ad → LV Media -portaali (cream-pinta → light) */}
      <MainPartnerBanner config={AD_SLOTS} locale={lang} surface="light" />
      <WhyBuyFromUs />
      <Categories />
      {/* Kumppaniosio heti ensimmäisen kategoriabändin jälkeen:
          kakkospääkumppani + 6 premium-paikkaa (house-adit kun vapaat) */}
      <HomeAdSlots config={AD_SLOTS} locale={lang} surface="light" />
      <FeaturedProducts />
      {/* Mapped product ad — Kulta-Center (jewellery gift), skinned in their brand. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <KultaCenterAd sid="after_featured" />
        </div>
      </section>
      <ArtisanStory />
      <LocalShops />
      {/* Mapped product ad — IVALO.COM (Finnish design, delivered), skinned in their brand. */}
      <section className="px-4 py-10 sm:py-14 bg-cream">
        <div className="max-w-5xl mx-auto">
          <IvaloAd sid="after_boutiques" />
        </div>
      </section>
      <GiftsHubBanner />
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
