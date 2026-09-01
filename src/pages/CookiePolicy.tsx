import { useEffect } from 'react';
import CookieContent from '../shared/Legal/CookieContent';
import { useLang, type Lang } from '../lang';
import ConsentControls from '../components/ConsentControls';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Cookie Policy | LaplandStore',
    description: 'Which cookies LaplandStore (LaPeso Oy) uses and why: Consent Mode v2, Google Analytics 4 and affiliate attribution, and how to manage your choices.',
  },
  fi: {
    title: 'Evästekäytäntö | LaplandStore',
    description: 'Mitä evästeitä LaplandStore (LaPeso Oy) käyttää ja miksi: Consent Mode v2, Google Analytics 4 ja affiliate-seuranta, sekä miten hallitset valintojasi.',
  },
  de: {
    title: 'Cookie-Richtlinie | LaplandStore',
    description: 'Welche Cookies LaplandStore (LaPeso Oy) verwendet und warum: Consent Mode v2, Google Analytics 4 und Affiliate-Zuordnung. So verwalten Sie Ihre Auswahl.',
  },
  ja: {
    title: 'クッキーポリシー | LaplandStore',
    description: 'LaplandStore（LaPeso Oy）が使用するクッキーとその目的：Consent Mode v2、Google Analytics 4、アフィリエイト計測、および設定の管理方法。',
  },
  es: {
    title: 'Política de cookies | LaplandStore',
    description: 'Qué cookies usa LaplandStore (LaPeso Oy) y por qué: Consent Mode v2, Google Analytics 4 y atribución de afiliados, y cómo gestionar sus preferencias.',
  },
  'pt-BR': {
    title: 'Política de cookies | LaplandStore',
    description: 'Quais cookies a LaplandStore (LaPeso Oy) usa e por quê: Consent Mode v2, Google Analytics 4 e atribuição de afiliados, e como gerenciar suas escolhas.',
  },
  'zh-CN': {
    title: 'Cookie 政策 | LaplandStore',
    description: 'LaplandStore（LaPeso Oy）使用哪些 Cookie 及其原因：Consent Mode v2、Google Analytics 4 和联盟归因，以及如何管理您的选择。',
  },
  ko: {
    title: '쿠키 정책 | LaplandStore',
    description: 'LaplandStore(LaPeso Oy)가 사용하는 쿠키와 이유: Consent Mode v2, Google Analytics 4, 제휴 어트리뷰션, 그리고 설정을 관리하는 방법.',
  },
  fr: {
    title: 'Politique relative aux cookies | LaplandStore',
    description: "Quels cookies LaplandStore (LaPeso Oy) utilise et pourquoi : Consent Mode v2, Google Analytics 4 et attribution d'affiliation, et comment gérer vos choix.",
  },
  it: {
    title: 'Politica sui cookie | LaplandStore',
    description: 'Quali cookie usa LaplandStore (LaPeso Oy) e perché: Consent Mode v2, Google Analytics 4 e attribuzione di affiliazione, e come gestire le Sue scelte.',
  },
  nl: {
    title: 'Cookiebeleid | LaplandStore',
    description: 'Welke cookies LaplandStore (LaPeso Oy) gebruikt en waarom: Consent Mode v2, Google Analytics 4 en affiliate-attributie, en hoe u uw keuzes beheert.',
  },
  sv: {
    title: 'Cookiepolicy | LaplandStore',
    description: 'Vilka cookies LaplandStore (LaPeso Oy) använder och varför: Consent Mode v2, Google Analytics 4 och partnerattribution, och hur du hanterar dina val.',
  },
};

export default function CookiePolicy() {
  const { lang } = useLang();
  const m = META[lang];

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

  // 🔴 Peruutus tällä sivulla eikä bannerissa: CookieBanner on verkoston
  // jaettu komponentti, jonka on oltava identtinen joka sivustolla.
  // (fi-katselmus 28.8.2026: return-lause päättyi ensimmäiseen elementtiin ja
  // ConsentControls oli kuollutta koodia — "Peru suostumus" ei renderöitynyt.)
  return (
    <>
      <CookieContent siteId="laplandstore" siteName="LaplandStore" lang={lang} />
      <ConsentControls lang={lang} />
    </>
  );
}
