import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Footer from '../../shared/Footer';
import CookieBanner from '../../shared/CookieBanner';
import Nav from './components/Nav';
import NewsletterPopup from './components/NewsletterPopup';
const Home = lazy(() => import('./pages/Home'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms = lazy(() => import('./pages/Terms'))
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'))
const NotFound = lazy(() => import('./pages/NotFound'))
import { useLang, footerDict } from './lang';
import LocaleAutoRedirect from './i18n/LocaleAutoRedirect';
import LocaleHead from './components/LocaleHead';

const FOOTER_PILLARS_FI = [
  { name: 'Kategoriat', href: '/fi#herkut' },
  { name: 'Suosittelemme', href: '/fi#suosittelemme' },
  { name: 'Putiikit', href: '/fi#putiikit' },
  { name: 'Tarina', href: '/fi#tarina' },
  { name: 'Tulossa: Verkkokauppa', href: 'https://laplandgifts.com' },
  { name: 'Joulu Lapissa', href: 'https://laplandchristmas.com' },
];

const FOOTER_PILLARS_EN = [
  { name: 'Categories', href: '/#herkut' },
  { name: 'We Recommend', href: '/#suosittelemme' },
  { name: 'Boutiques', href: '/#putiikit' },
  { name: 'Story', href: '/#tarina' },
  { name: 'Coming: Online Store', href: 'https://laplandgifts.com' },
  { name: 'Christmas in Lapland', href: 'https://laplandchristmas.com' },
];

const FOOTER_PILLARS_DE = [
  { name: 'Kategorien', href: '/de#herkut' },
  { name: 'Empfehlungen', href: '/de#suosittelemme' },
  { name: 'Boutiquen', href: '/de#putiikit' },
  { name: 'Geschichte', href: '/de#tarina' },
  { name: 'Bald: Online-Shop', href: 'https://laplandgifts.com' },
  { name: 'Weihnachten in Lappland', href: 'https://laplandchristmas.com' },
];

const FOOTER_PILLARS_JA = [
  { name: 'カテゴリー', href: '/ja#herkut' },
  { name: 'おすすめ', href: '/ja#suosittelemme' },
  { name: 'ブティック', href: '/ja#putiikit' },
  { name: 'ストーリー', href: '/ja#tarina' },
  { name: '近日公開：オンラインストア', href: 'https://laplandgifts.com' },
  { name: 'ラップランドのクリスマス', href: 'https://laplandchristmas.com' },
];

const FOOTER_PILLARS_ES = [
  { name: 'Categorías', href: '/es#herkut' },
  { name: 'Recomendamos', href: '/es#suosittelemme' },
  { name: 'Boutiques', href: '/es#putiikit' },
  { name: 'Historia', href: '/es#tarina' },
  { name: 'Próximamente: Tienda en línea', href: 'https://laplandgifts.com' },
  { name: 'Navidad en Laponia', href: 'https://laplandchristmas.com' },
];

const FOOTER_PILLARS_PT = [
  { name: 'Categorias', href: '/br#herkut' },
  { name: 'Recomendamos', href: '/br#suosittelemme' },
  { name: 'Boutiques', href: '/br#putiikit' },
  { name: 'História', href: '/br#tarina' },
  { name: 'Em breve: Loja online', href: 'https://laplandgifts.com' },
  { name: 'Natal na Lapônia', href: 'https://laplandchristmas.com' },
];

const FOOTER_PILLARS_ZH = [
  { name: '分类', href: '/cn#herkut' },
  { name: '我们的推荐', href: '/cn#suosittelemme' },
  { name: '精品店', href: '/cn#putiikit' },
  { name: '故事', href: '/cn#tarina' },
  { name: '即将上线:线上商店', href: 'https://laplandgifts.com' },
  { name: '拉普兰的圣诞节', href: 'https://laplandchristmas.com' },
];

const FOOTER_PILLARS_KO = [
  { name: '카테고리', href: '/kr#herkut' },
  { name: '추천 상점', href: '/kr#suosittelemme' },
  { name: '부티크', href: '/kr#putiikit' },
  { name: '이야기', href: '/kr#tarina' },
  { name: '곧 오픈: 온라인 상점', href: 'https://laplandgifts.com' },
  { name: '라플란드의 크리스마스', href: 'https://laplandchristmas.com' },
];

const FOOTER_PILLARS_FR = [
  { name: 'Catégories', href: '/fr#herkut' },
  { name: 'Nos recommandations', href: '/fr#suosittelemme' },
  { name: 'Boutiques', href: '/fr#putiikit' },
  { name: 'Histoire', href: '/fr#tarina' },
  { name: 'Bientôt : boutique en ligne', href: 'https://laplandgifts.com' },
  { name: 'Noël en Laponie', href: 'https://laplandchristmas.com' },
];

const FOOTER_PILLARS_IT = [
  { name: 'Categorie', href: '/it#herkut' },
  { name: 'Le nostre raccomandazioni', href: '/it#suosittelemme' },
  { name: 'Boutique', href: '/it#putiikit' },
  { name: 'Storia', href: '/it#tarina' },
  { name: 'Prossimamente: negozio online', href: 'https://laplandgifts.com' },
  { name: 'Natale in Lapponia', href: 'https://laplandchristmas.com' },
];

const FOOTER_PILLARS_NL = [
  { name: 'Categorieën', href: '/nl#herkut' },
  { name: 'Onze aanbevelingen', href: '/nl#suosittelemme' },
  { name: 'Boutiques', href: '/nl#putiikit' },
  { name: 'Verhaal', href: '/nl#tarina' },
  { name: 'Binnenkort: online winkel', href: 'https://laplandgifts.com' },
  { name: 'Kerst in Lapland', href: 'https://laplandchristmas.com' },
];

const FOOTER_NOTE_FI =
  'Itsenäisesti ylläpidetty Lapeso Oy:n toimesta · viimeksi tarkistettu huhtikuu 2026 · listaus on ilmainen lappilaisille yrittäjille.';
const FOOTER_NOTE_EN =
  'Independently maintained by Lapeso Oy · last reviewed April 2026 · listings are free for Lapland-based entrepreneurs.';
const FOOTER_NOTE_DE =
  'Redaktionell betreut von Lapeso Oy · zuletzt geprüft im April 2026 · Eintragungen sind für Unternehmen aus Lappland kostenfrei.';
const FOOTER_NOTE_JA =
  'Lapeso Oy が独立して運営 · 最終確認 2026年4月 · ラップランドの事業者は無料で掲載いただけます。';
const FOOTER_NOTE_ES =
  'Mantenido de forma independiente por Lapeso Oy · última revisión en abril de 2026 · el alta es gratuita para los emprendedores de la Laponia finlandesa.';
const FOOTER_NOTE_PT =
  'Mantido de forma independente pela Lapeso Oy · última revisão em abril de 2026 · o cadastro é gratuito para empreendedores da Lapônia finlandesa.';
const FOOTER_NOTE_ZH =
  '由 Lapeso Oy 独立运营 · 最后审阅:2026年4月 · 来自拉普兰的商家可免费列入。';
const FOOTER_NOTE_KO =
  'Lapeso Oy가 독립적으로 운영 · 최종 검토 2026년 4월 · 라플란드 사업자는 무료로 등재됩니다.';
const FOOTER_NOTE_FR =
  'Édité de façon indépendante par Lapeso Oy · dernière vérification avril 2026 · les inscriptions sont gratuites pour les entrepreneurs de Laponie finlandaise.';
const FOOTER_NOTE_IT =
  'Gestito in modo indipendente da Lapeso Oy · ultima revisione aprile 2026 · l\'iscrizione è gratuita per gli imprenditori della Lapponia finlandese.';
const FOOTER_NOTE_NL =
  'Onafhankelijk beheerd door Lapeso Oy · laatst beoordeeld in april 2026 · vermeldingen zijn gratis voor ondernemers uit Fins Lapland.';

function LocaleSync({ lang }: { lang: 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' }) {
  useEffect(() => {
    const map: Record<typeof lang, string> = { en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES', 'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL' };
    document.documentElement.lang = map[lang];
  }, [lang]);
  return null;
}

export default function App() {
  const { lang } = useLang();
  const pillars =
    lang === 'fi' ? FOOTER_PILLARS_FI
    : lang === 'de' ? FOOTER_PILLARS_DE
    : lang === 'ja' ? FOOTER_PILLARS_JA
    : lang === 'es' ? FOOTER_PILLARS_ES
    : lang === 'pt-BR' ? FOOTER_PILLARS_PT
    : lang === 'zh-CN' ? FOOTER_PILLARS_ZH
    : lang === 'ko' ? FOOTER_PILLARS_KO
    : lang === 'fr' ? FOOTER_PILLARS_FR
    : lang === 'it' ? FOOTER_PILLARS_IT
    : lang === 'nl' ? FOOTER_PILLARS_NL
    : FOOTER_PILLARS_EN;
  const note =
    lang === 'fi' ? FOOTER_NOTE_FI
    : lang === 'de' ? FOOTER_NOTE_DE
    : lang === 'ja' ? FOOTER_NOTE_JA
    : lang === 'es' ? FOOTER_NOTE_ES
    : lang === 'pt-BR' ? FOOTER_NOTE_PT
    : lang === 'zh-CN' ? FOOTER_NOTE_ZH
    : lang === 'ko' ? FOOTER_NOTE_KO
    : lang === 'fr' ? FOOTER_NOTE_FR
    : lang === 'it' ? FOOTER_NOTE_IT
    : lang === 'nl' ? FOOTER_NOTE_NL
    : FOOTER_NOTE_EN;
  return (
    <div className="min-h-screen flex flex-col bg-cream">
      <LocaleAutoRedirect />
      <LocaleSync lang={lang} />
      <LocaleHead />
      <Nav />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-screen" />}>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fi" element={<Home />} />
          <Route path="/de" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/fi/privacy" element={<PrivacyPolicy />} />
          <Route path="/de/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/fi/terms" element={<Terms />} />
          <Route path="/de/terms" element={<Terms />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/fi/cookie-policy" element={<CookiePolicy />} />
          <Route path="/de/cookie-policy" element={<CookiePolicy />} />
      {/* JA */}
          <Route path="/ja" element={<Home />} />
          <Route path="/ja/privacy" element={<PrivacyPolicy />} />
          <Route path="/ja/terms" element={<Terms />} />
          <Route path="/ja/cookie-policy" element={<CookiePolicy />} />
      {/* ES */}
          <Route path="/es" element={<Home />} />
          <Route path="/es/privacy" element={<PrivacyPolicy />} />
          <Route path="/es/terms" element={<Terms />} />
          <Route path="/es/cookie-policy" element={<CookiePolicy />} />
      {/* PT-BR */}
          <Route path="/br" element={<Home />} />
          <Route path="/br/privacy" element={<PrivacyPolicy />} />
          <Route path="/br/terms" element={<Terms />} />
          <Route path="/br/cookie-policy" element={<CookiePolicy />} />
      {/* ZH-CN */}
          <Route path="/cn" element={<Home />} />
          <Route path="/cn/privacy" element={<PrivacyPolicy />} />
          <Route path="/cn/terms" element={<Terms />} />
          <Route path="/cn/cookie-policy" element={<CookiePolicy />} />
      {/* KO */}
          <Route path="/kr" element={<Home />} />
          <Route path="/kr/privacy" element={<PrivacyPolicy />} />
          <Route path="/kr/terms" element={<Terms />} />
          <Route path="/kr/cookie-policy" element={<CookiePolicy />} />
      {/* FR */}
          <Route path="/fr" element={<Home />} />
          <Route path="/fr/privacy" element={<PrivacyPolicy />} />
          <Route path="/fr/terms" element={<Terms />} />
          <Route path="/fr/cookie-policy" element={<CookiePolicy />} />
      {/* IT */}
          <Route path="/it" element={<Home />} />
          <Route path="/it/privacy" element={<PrivacyPolicy />} />
          <Route path="/it/terms" element={<Terms />} />
          <Route path="/it/cookie-policy" element={<CookiePolicy />} />
      {/* NL */}
          <Route path="/nl" element={<Home />} />
          <Route path="/nl/privacy" element={<PrivacyPolicy />} />
          <Route path="/nl/terms" element={<Terms />} />
          <Route path="/nl/cookie-policy" element={<CookiePolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>
      <Footer pillarLinks={pillars} editorialNote={note} dict={footerDict(lang)} />
      <CookieBanner consentKey="laplandstore_cookie_consent" lang={lang} />
      <NewsletterPopup />
    </div>
  );
}
