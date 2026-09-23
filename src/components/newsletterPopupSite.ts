import type { NewsletterPopupCopy, NewsletterPopupTheme } from '../shared/NewsletterPopup';

/**
 * laplandstore.fi: uutiskirjepopupin oma väri ja teksti.
 *
 * Vesa 23.9.2026: "tekstit ja värimaailma sivustokohtaisiksi" → "kyllä, vie
 * kaikille". Kuva, lomake, nappi ja #LAPLAND-merkki pysyvät verkoston yhteisinä.
 * Väri = tämän sivuston oma pääväri, mitattu elävältä etusivulta 23.9.2026
 * (meripihka #D97706 ja metsänvihreä #059669). Kontrasti tarkistettu: napin teksti ≥ 4,5:1,
 * kuvan rengas ≥ 3:1 korttia vasten.
 * Teksti = sivun oma aihe lukijan näkökulmasta, 12 kielellä natiivina.
 * 🔴 Ei hälytyksiä, ei lähetystahtia, ei "ensimmäisenä" (9.8.2026 lupauspurku):
 * uutiskirje lähtee vain kun on kerrottavaa. Otsikko tulee jaetusta komponentista.
 */
export const POPUP_THEME: NewsletterPopupTheme = {
  surface: '#0F172A',
  accent: '#059669',
  cta: '#D97706',
  onCta: '#0F172A',
};

export const POPUP_COPY: NewsletterPopupCopy = {
  en: {
    description: 'Founder of LaplandVibes. Lappish crafts, design and flavours. I tell you where the genuine products come from and what\'s worth bringing home as a gift.',
  },
  fi: {
    description: 'LaplandVibesin perustaja. Lappilaista käsityötä, designia ja makuja. Kerron, mistä aidot tuotteet tulevat ja mitä kannattaa tuoda tuliaisiksi.',
  },
  de: {
    description: 'Gründer von LaplandVibes. Kunsthandwerk, Design und Kulinarisches aus Lappland. Ich erzähle Ihnen, woher die echten Produkte stammen und was Sie als Mitbringsel mit nach Hause nehmen sollten.',
  },
  ja: {
    description: 'LaplandVibes創業者。ラップランドの工芸品、デザイン、そして味。本物の品はどこから来ているのか、お土産に何を持ち帰るとよいかをご紹介します。',
  },
  es: {
    description: 'Fundador de LaplandVibes. Artesanía, diseño y sabores de Laponia: le cuento de dónde vienen los productos auténticos y qué regalos vale la pena llevarse a casa.',
  },
  'pt-BR': {
    description: 'Fundador do LaplandVibes. Artesanato, design e sabores da Lapônia. Conto de onde vêm os produtos autênticos e o que vale a pena levar de presente para quem ficou em casa.',
  },
  'zh-CN': {
    description: 'LaplandVibes创始人。拉普兰的手工艺、设计与风味。我来讲讲正宗的产品从哪里来，还有哪些值得带回家当伴手礼。',
  },
  ko: {
    description: 'LaplandVibes 창립자. 라플란드의 수공예품과 디자인, 그리고 맛. 진짜 라플란드 제품이 어디서 오는지, 선물로 무엇을 챙겨 오면 좋은지 알려드립니다.',
  },
  fr: {
    description: 'Fondateur de LaplandVibes. L\'artisanat, le design et les saveurs de Laponie. Je vous raconte d\'où viennent les produits authentiques et ce qu\'il vaut la peine de rapporter en cadeau.',
  },
  it: {
    description: 'Fondatore di LaplandVibes. Artigianato, design e sapori della Lapponia. Le racconto da dove vengono i prodotti autentici e cosa vale la pena portare a casa da regalare.',
  },
  nl: {
    description: 'Oprichter van LaplandVibes. Handwerk, design en smaken uit Lapland. Ik vertel u waar de echte producten vandaan komen en wat u het best als cadeau mee naar huis neemt.',
  },
  sv: {
    description: 'Grundare av LaplandVibes. Lappländskt hantverk, design och smaker. Jag berättar var de äkta produkterna kommer ifrån och vad som är värt att ta med hem som present.',
  },
};
