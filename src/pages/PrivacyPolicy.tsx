import { useEffect } from 'react';
import PrivacyContent from '../../../shared/Legal/PrivacyContent';
import { useLang, type Lang } from '../lang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Privacy Policy | LaplandStore',
    description: 'How LaplandStore (Lapeso Oy) handles your data: Google Analytics 4 with Consent Mode v2, newsletter via Resend/Supabase and affiliate tracking, explained in plain language.',
  },
  fi: {
    title: 'Tietosuojaseloste | LaplandStore',
    description: 'Näin LaplandStore (Lapeso Oy) käsittelee tietojasi: Google Analytics 4 ja Consent Mode v2, uutiskirje Resendin/Supabasen kautta sekä affiliate-seuranta, selkeästi selitettynä.',
  },
  de: {
    title: 'Datenschutzerklärung | LaplandStore',
    description: 'So verarbeitet LaplandStore (Lapeso Oy) Ihre Daten: Google Analytics 4 mit Consent Mode v2, Newsletter über Resend/Supabase und Affiliate-Tracking, verständlich erklärt.',
  },
  ja: {
    title: 'プライバシーポリシー | LaplandStore',
    description: 'LaplandStore（Lapeso Oy）のデータ取り扱い：Consent Mode v2対応のGoogle Analytics 4、Resend/Supabase経由のニュースレター、アフィリエイト計測、わかりやすく解説。',
  },
  es: {
    title: 'Política de privacidad | LaplandStore',
    description: 'Cómo LaplandStore (Lapeso Oy) trata sus datos: Google Analytics 4 con Consent Mode v2, newsletter vía Resend/Supabase y seguimiento de afiliados, explicado con claridad.',
  },
  'pt-BR': {
    title: 'Política de privacidade | LaplandStore',
    description: 'Como a LaplandStore (Lapeso Oy) trata seus dados: Google Analytics 4 com Consent Mode v2, newsletter via Resend/Supabase e rastreamento de afiliados, explicado com clareza.',
  },
  'zh-CN': {
    title: '隐私政策 | LaplandStore',
    description: 'LaplandStore（Lapeso Oy）如何处理您的数据：Google Analytics 4 与 Consent Mode v2、通过 Resend/Supabase 的订阅邮件以及联盟跟踪，清晰说明。',
  },
  ko: {
    title: '개인정보 처리방침 | LaplandStore',
    description: 'LaplandStore(Lapeso Oy)의 데이터 처리 방식: Consent Mode v2 기반 Google Analytics 4, Resend/Supabase 뉴스레터, 제휴 트래킹, 알기 쉽게 설명합니다.',
  },
  fr: {
    title: 'Politique de confidentialité | LaplandStore',
    description: "Comment LaplandStore (Lapeso Oy) traite vos données : Google Analytics 4 avec Consent Mode v2, newsletter via Resend/Supabase et suivi d'affiliation, expliqué clairement.",
  },
  it: {
    title: 'Informativa sulla privacy | LaplandStore',
    description: 'Come LaplandStore (Lapeso Oy) tratta i tuoi dati: Google Analytics 4 con Consent Mode v2, newsletter via Resend/Supabase e tracciamento di affiliazione, spiegato con chiarezza.',
  },
  nl: {
    title: 'Privacybeleid | LaplandStore',
    description: 'Hoe LaplandStore (Lapeso Oy) uw gegevens verwerkt: Google Analytics 4 met Consent Mode v2, nieuwsbrief via Resend/Supabase en affiliate-tracking, helder uitgelegd.',
  },
  sv: {
    title: 'Integritetspolicy | LaplandStore',
    description: 'Så hanterar LaplandStore (Lapeso Oy) dina uppgifter: Google Analytics 4 med Consent Mode v2, nyhetsbrev via Resend/Supabase och partnerspårning, förklarat på ett enkelt sätt.',
  },
};

export default function PrivacyPolicy() {
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

  return <PrivacyContent siteName="LaplandStore" lang={lang} />;
}
