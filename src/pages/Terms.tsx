import { useEffect } from 'react';
import TermsContent from '../shared/Legal/TermsContent';
import { useLang, type Lang } from '../lang';

const META: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Terms of Service | LaplandStore',
    description: 'The terms for using LaplandStore (LaPeso Oy): orders, shipping, returns, affiliate links and liability, set out in plain language.',
  },
  fi: {
    title: 'Käyttöehdot | LaplandStore',
    description: 'LaplandStoren (LaPeso Oy) käyttöehdot: tilaukset, toimitus, palautukset, affiliate-linkit ja vastuut, selkeästi kerrottuna.',
  },
  de: {
    title: 'Nutzungsbedingungen | LaplandStore',
    description: 'Die Bedingungen für die Nutzung von LaplandStore (LaPeso Oy): Bestellungen, Versand, Rückgabe, Affiliate-Links und Haftung, verständlich erklärt.',
  },
  ja: {
    title: '利用規約 | LaplandStore',
    description: 'LaplandStore（LaPeso Oy）のご利用条件：注文、配送、返品、アフィリエイトリンク、責任についてわかりやすく説明します。',
  },
  es: {
    title: 'Condiciones de servicio | LaplandStore',
    description: 'Las condiciones de uso de LaplandStore (LaPeso Oy): pedidos, envíos, devoluciones, enlaces de afiliados y responsabilidad, explicadas con claridad.',
  },
  'pt-BR': {
    title: 'Termos de serviço | LaplandStore',
    description: 'As condições de uso da LaplandStore (LaPeso Oy): pedidos, envio, devoluções, links de afiliados e responsabilidade, explicados com clareza.',
  },
  'zh-CN': {
    title: '服务条款 | LaplandStore',
    description: 'LaplandStore（LaPeso Oy）使用条款：订单、配送、退货、联盟链接及责任说明，清晰易懂。',
  },
  ko: {
    title: '이용약관 | LaplandStore',
    description: 'LaplandStore(LaPeso Oy) 이용 조건: 주문, 배송, 반품, 제휴 링크 및 책임을 알기 쉽게 설명합니다.',
  },
  fr: {
    title: "Conditions d'utilisation | LaplandStore",
    description: "Les conditions d'utilisation de LaplandStore (LaPeso Oy) : commandes, livraison, retours, liens d'affiliation et responsabilité, expliquées clairement.",
  },
  it: {
    title: 'Condizioni di servizio | LaplandStore',
    description: "Le condizioni d'uso di LaplandStore (LaPeso Oy): ordini, spedizione, resi, link di affiliazione e responsabilità, spiegate con chiarezza.",
  },
  nl: {
    title: 'Gebruiksvoorwaarden | LaplandStore',
    description: 'De voorwaarden voor het gebruik van LaplandStore (LaPeso Oy): bestellingen, verzending, retouren, affiliate-links en aansprakelijkheid, helder uitgelegd.',
  },
  sv: {
    title: 'Användarvillkor | LaplandStore',
    description: 'Villkoren för att använda LaplandStore (LaPeso Oy): beställningar, leverans, returer, partnerlänkar och ansvar, förklarade på ett enkelt sätt.',
  },
};

export default function Terms() {
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

  // variant="shop": this site sells nothing and books nothing, so the
  // network's travel wording (hotel/flight search, Sembo, Trip.com, travel
  // insurance) was factually wrong here. Audit 13.8.2026.
  return <TermsContent siteName="LaplandStore" siteUrl="laplandstore.fi" lang={lang} variant="shop" />;
}
