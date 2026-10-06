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
// Title and meta description: src/data/pageMeta.mjs, the same values the prerender writes into the static HTML.
import { PAGE_META } from '../data/pageMeta.mjs';

const BCP47: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL', sv: 'sv-SE',
};

export default function Home() {
  const { lang } = useLang();
  const m = PAGE_META['/'][lang];

  useEffect(() => {
    document.title = m.title;
    let desc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!desc) {
      desc = document.createElement('meta');
      desc.setAttribute('name', 'description');
      document.head.appendChild(desc);
    }
    desc.setAttribute('content', m.description);
  }, [m.title, m.description]);

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
