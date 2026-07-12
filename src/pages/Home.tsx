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
    seoDescription: 'A curated directory of verified Lapland boutiques: puukko knives, reindeer leather, juniper woodware and wool. Order direct from real makers in Finnish Lapland.',
  },
  'fi': {
    seoTitle: 'LaplandStore — Aitoja Lapin lahjoja ja käsitöitä',
    seoDescription: 'Kuratoitu hakemisto aitoihin Lapin putiikkeihin: puukkoja, poronnahkaa, katajapuuta ja villaa. Tilaa suoraan tekijältä Suomen Lapista.',
  },
  'de': {
    seoTitle: 'LaplandStore — Echte Lappland-Geschenke & Souvenirs',
    seoDescription: 'Kuratiertes Verzeichnis echter Lappland-Boutiquen: Puukko-Messer, Rentierleder, Wacholderholz und Wolle. Direkt bei den Machern in Finnisch-Lappland bestellen.',
  },
  'ja': {
    seoTitle: 'LaplandStore — 本物のラップランド土産・工芸品・ギフト',
    seoDescription: '本物のラップランドのブティックを厳選して紹介するディレクトリ。プーッコナイフ、トナカイ革、ジュニパー材、ウール製品を、フィンランド・ラップランドの作り手に直接注文できます。',
  },
  'es': {
    seoTitle: 'LaplandStore — Regalos y artesanía auténticos de Laponia',
    seoDescription: 'Directorio curado de boutiques auténticas de Laponia: cuchillos puukko, cuero de reno, madera de enebro y lana. Compra directamente a los artesanos de la Laponia finlandesa.',
  },
  'pt-BR': {
    seoTitle: 'LaplandStore — Presentes e artesanato autênticos da Lapônia',
    seoDescription: 'Diretório curado de boutiques autênticas da Lapônia: facas puukko, couro de rena, madeira de zimbro e lã. Compre direto dos artesãos da Lapônia finlandesa.',
  },
  'zh-CN': {
    seoTitle: 'LaplandStore — 正宗拉普兰礼物、手工艺与纪念品',
    seoDescription: '精选真实拉普兰精品店指南：芬兰传统刀（puukko）、驯鹿皮、杜松木器与羊毛制品。直接向芬兰拉普兰的手工艺人下单。',
  },
  'ko': {
    seoTitle: 'LaplandStore — 라플란드 정통 선물·공예품·기념품 가이드',
    seoDescription: '엄선한 라플란드 부티크 디렉터리입니다. 푸코(puukko) 칼, 순록 가죽, 향나무 공예품, 양모 제품을 핀란드 라플란드의 장인에게 직접 주문하실 수 있습니다.',
  },
  'fr': {
    seoTitle: 'LaplandStore — Cadeaux et artisanat authentiques de Laponie',
    seoDescription: 'Annuaire sélectif de boutiques authentiques de Laponie : couteaux puukko, cuir de renne, bois de genévrier et laine. Commandez directement auprès des artisans de Laponie finlandaise.',
  },
  'it': {
    seoTitle: 'LaplandStore — Regali e artigianato autentici della Lapponia',
    seoDescription: 'Directory curata di boutique autentiche della Lapponia: coltelli puukko, pelle di renna, legno di ginepro e lana. Ordina direttamente dagli artigiani della Lapponia finlandese.',
  },
  'nl': {
    seoTitle: 'LaplandStore — Authentieke geschenken en ambacht uit Lapland',
    seoDescription: 'Samengestelde gids met echte Lapland-boetieks: puukko-messen, rendierleer, jeneverbeshout en wol. Bestel rechtstreeks bij makers in Fins Lapland.',
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
