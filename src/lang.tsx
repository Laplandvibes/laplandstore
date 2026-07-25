import { useLocation, useNavigate } from 'react-router-dom';
import { type ReactNode } from 'react';

export type Lang = 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv';

export const LANG_PREFIX: Record<Lang, string> = {
  en: '',
  fi: 'fi',
  de: 'de',
  ja: 'ja',
  es: 'es',
  'pt-BR': 'br',
  'zh-CN': 'cn',
  ko: 'kr',
  fr: 'fr',
  it: 'it',
  nl: 'nl',
  sv: 'sv',
};

const STORAGE_KEY = 'lv_locale_choice';

export function useLang(): { lang: Lang; setLang: (l: Lang) => void } {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;
  let lang: Lang = 'en';
  if (path === '/fi' || path.startsWith('/fi/')) lang = 'fi';
  else if (path === '/de' || path.startsWith('/de/')) lang = 'de';
  else if (path === '/ja' || path.startsWith('/ja/')) lang = 'ja';
  else if (path === '/es' || path.startsWith('/es/')) lang = 'es';
  else if (path === '/br' || path.startsWith('/br/')) lang = 'pt-BR';
  else if (path === '/cn' || path.startsWith('/cn/')) lang = 'zh-CN';
  else if (path === '/kr' || path.startsWith('/kr/')) lang = 'ko';
  else if (path === '/fr' || path.startsWith('/fr/')) lang = 'fr';
  else if (path === '/it' || path.startsWith('/it/')) lang = 'it';
  else if (path === '/nl' || path.startsWith('/nl/')) lang = 'nl';
  else if (path === '/sv' || path.startsWith('/sv/')) lang = 'sv';

  const setLang = (target: Lang) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.setItem(STORAGE_KEY, target);
    }
    let bare = path;
    const m = path.match(/^\/(fi|de|ja|es|br|cn|kr|fr|it|nl|sv)(?=\/|$)/);
    if (m) bare = path.replace(m[0], '') || '/';
    if (target === 'en') {
      navigate(bare + location.search + location.hash);
    } else {
      const prefix = LANG_PREFIX[target];
      navigate(
        (bare === '/' ? `/${prefix}` : `/${prefix}${bare}`) + location.search + location.hash
      );
    }
  };

  return { lang, setLang };
}

/** No-op provider — kept so existing main.tsx continues to compile. */
export function LangProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

/** Build the FooterDict the shared <Footer> component expects, in the given lang. */
export function footerDict(lang: Lang) {
  if (lang === 'en') {
    return {
      networkBadge: 'Finnish Lapland Network',
      tagline: 'The definitive digital home for Finnish Lapland travel.',
      groups: { stay: 'Stay', eatDrink: 'Eat & Drink', do: 'Do', explore: 'Explore', essentials: 'Essentials' },
      travelGuideKicker: 'Lapland Travel Guide',
      about: {
        eyebrow: 'About LaplandVibes',
        body: 'The definitive guide to Finnish Lapland, from the revontulet to the midnight sun. Curated experiences, insider tips, and the practical basics for your Arctic trip.',
        badge: 'Independently maintained · sources cited',
      },
      spottedError: { title: 'Spotted an Error?', body: "See something that needs fixing? Tell us. We'll correct it immediately.", cta: 'Report an Error →' },
      partner: { title: 'Partner With Us', body: 'Advertise or collaborate across 21+ Lapland sites.', cta: 'Get in Touch →' },
      press: { title: 'Press & Media', body: 'Editorial partnerships and press kits.', cta: 'Press Enquiries →' },
      affiliate: 'This site contains affiliate links. If you book through these links, LaplandVibes may receive a commission at no extra cost to you.',
      copyright: '© {{year}} #LaplandVibes. Part of the #LaplandVibes Network',
      websiteBy: 'Website by Yrityspaketit.fi',
      legal: { privacy: 'Privacy Policy', cookie: 'Cookie Policy', terms: 'Terms of Use', contact: 'Contact' },
    }
  }
  if (lang === 'de') {
    return {
      networkBadge: 'Finnisch-Lappland-Netzwerk',
      tagline: 'Das umfassende digitale Zuhause für Reisen in Finnisch-Lappland.',
      groups: { stay: 'Unterkunft', eatDrink: 'Essen & Trinken', do: 'Aktivitäten', explore: 'Entdecken', essentials: 'Wesentliches' },
      travelGuideKicker: 'Lappland-Reiseführer',
      about: {
        eyebrow: 'Über LaplandVibes',
        body: 'Der umfassende Reiseführer zu Finnisch-Lappland, von den Nordlichtern bis zur Mitternachtssonne. Kuratierte Erlebnisse, Insider-Tipps und alles, was Sie für die Planung Ihres arktischen Abenteuers brauchen.',
        badge: 'Unabhängig gepflegt · Quellen zitiert',
      },
      spottedError: { title: 'Fehler entdeckt?', body: 'Sehen Sie etwas, das korrigiert werden muss? Sagen Sie uns Bescheid. Wir korrigieren es sofort.', cta: 'Fehler melden →' },
      partner: { title: 'Mit uns kooperieren', body: 'Werbung oder Zusammenarbeit 27 Lappland-Websites hinweg.', cta: 'Kontakt aufnehmen →' },
      press: { title: 'Presse & Medien', body: 'Redaktionelle Partnerschaften und Pressemappen.', cta: 'Presseanfragen →' },
      affiliate: 'Diese Website enthält Partnerlinks. Wenn Sie über diese Links buchen, erhält LaplandVibes möglicherweise eine Provision ohne Mehrkosten für Sie.',
      copyright: '© {{year}} #LaplandVibes. Teil des #LaplandVibes-Netzwerks',
      websiteBy: 'Website von Yrityspaketit.fi',
      legal: { privacy: 'Datenschutz', cookie: 'Cookie-Richtlinie', terms: 'Nutzungsbedingungen', contact: 'Kontakt' },
    }
  }
  if (lang === 'ja') {
    return {
      networkBadge: 'フィンランド・ラップランドのネットワーク',
      tagline: 'フィンランド・ラップランド旅行の決定版デジタルガイド。',
      groups: { stay: '泊まる', eatDrink: '食事と飲み物', do: 'アクティビティ', explore: '探検する', essentials: '基本情報' },
      travelGuideKicker: 'ラップランド旅行ガイド',
      about: {
        eyebrow: 'LaplandVibesについて',
        body: 'フィンランド・ラップランドの決定版ガイド、オーロラから白夜まで。厳選された体験とインサイダーの視点、出典を明記した情報で、北極の旅の計画を支えます。',
        badge: '独立運営 · 出典明記',
      },
      spottedError: { title: '誤りを見つけた場合', body: '修正が必要なものに気づきましたか?ご連絡ください。すぐに修正いたします。', cta: '誤りを報告 →' },
      partner: { title: 'パートナーシップ', body: '21以上のラップランド関連サイトでの広告や提携。', cta: 'お問い合わせ →' },
      press: { title: 'プレス・メディア', body: '編集パートナーシップとプレスキット。', cta: 'プレスのお問い合わせ →' },
      affiliate: 'このサイトにはアフィリエイトリンクが含まれます。リンク経由でご予約いただいた場合、追加費用なしでLaplandVibesに手数料が支払われることがあります。',
      copyright: '© {{year}} #LaplandVibes、#LaplandVibesネットワークの一部',
      websiteBy: 'ウェブサイト制作: Yrityspaketit.fi',
      legal: { privacy: 'プライバシーポリシー', cookie: 'クッキーポリシー', terms: '利用規約', contact: 'お問い合わせ' },
    }
  }
  if (lang === 'es') {
    return {
      networkBadge: 'Red de la Laponia finlandesa',
      tagline: 'La guía digital definitiva para viajar por la Laponia finlandesa.',
      groups: { stay: 'Dormir', eatDrink: 'Comer y beber', do: 'Hacer', explore: 'Explorar', essentials: 'Esenciales' },
      travelGuideKicker: 'Guía de viajes de Laponia',
      about: {
        eyebrow: 'Sobre LaplandVibes',
        body: 'La guía definitiva de la Laponia finlandesa, desde las auroras boreales hasta el sol de medianoche. Experiencias seleccionadas, consejos de iniciado y todo lo que necesita para planear su aventura ártica.',
        badge: 'Mantenido de forma independiente · fuentes citadas',
      },
      spottedError: { title: '¿Vio un error?', body: '¿Algo que haya que corregir? Avísenos. Lo corregiremos enseguida.', cta: 'Reportar un error →' },
      partner: { title: 'Colabore con nosotros', body: 'Anuncie o colabore en 27 sitios sobre Laponia.', cta: 'Contactar →' },
      press: { title: 'Prensa y medios', body: 'Colaboraciones editoriales y kits de prensa.', cta: 'Consultas de prensa →' },
      affiliate: 'Este sitio contiene enlaces de afiliados. Si usted reserva a través de estos enlaces, LaplandVibes puede recibir una comisión sin coste adicional para usted.',
      copyright: '© {{year}} #LaplandVibes. Parte de la red #LaplandVibes',
      websiteBy: 'Sitio web de Yrityspaketit.fi',
      legal: { privacy: 'Política de privacidad', cookie: 'Política de cookies', terms: 'Términos de uso', contact: 'Contacto' },
    }
  }
  if (lang === 'pt-BR') {
    return {
      networkBadge: 'Rede da Lapônia finlandesa',
      tagline: 'O guia digital definitivo para viajar pela Lapônia finlandesa.',
      groups: { stay: 'Hospedagem', eatDrink: 'Comer e beber', do: 'O que fazer', explore: 'Explorar', essentials: 'Essenciais' },
      travelGuideKicker: 'Guia de viagem da Lapônia',
      about: {
        eyebrow: 'Sobre o LaplandVibes',
        body: 'O guia definitivo da Lapônia finlandesa, da aurora boreal ao sol da meia-noite. Experiências selecionadas, dicas de quem conhece e o básico para sua viagem ao Ártico.',
        badge: 'Mantido de forma independente · fontes citadas',
      },
      spottedError: { title: 'Viu um erro?', body: 'Algo que precisa ser corrigido? Conte para a gente. Corrigimos na hora.', cta: 'Reportar um erro →' },
      partner: { title: 'Parceria com a gente', body: 'Anuncie ou colabore em 27 sites sobre a Lapônia.', cta: 'Entrar em contato →' },
      press: { title: 'Imprensa e mídia', body: 'Parcerias editoriais e kits de imprensa.', cta: 'Contato de imprensa →' },
      affiliate: 'Este site contém links de afiliados. Se você reservar por meio destes links, o LaplandVibes pode receber uma comissão sem custo adicional para você.',
      copyright: '© {{year}} #LaplandVibes. Parte da rede #LaplandVibes',
      websiteBy: 'Site por Yrityspaketit.fi',
      legal: { privacy: 'Política de privacidade', cookie: 'Política de cookies', terms: 'Termos de uso', contact: 'Contato' },
    }
  }
  if (lang === 'zh-CN') {
    return {
      networkBadge: '芬兰拉普兰网络',
      tagline: '芬兰拉普兰旅游的权威数字指南。',
      groups: { stay: '住宿', eatDrink: '餐饮', do: '体验', explore: '探索', essentials: '实用信息' },
      travelGuideKicker: '拉普兰旅游指南',
      about: {
        eyebrow: '关于 LaplandVibes',
        body: '芬兰拉普兰的权威指南，从北极光到午夜阳光。精选体验、内行贴士,以及规划北极之旅所需的一切。',
        badge: '独立运营 · 注明出处',
      },
      spottedError: { title: '发现错误?', body: '看到需要修正的内容?请告诉我们，我们会立即更正。', cta: '报告错误 →' },
      partner: { title: '合作机会', body: '在超过21个拉普兰相关网站上投放广告或开展合作。', cta: '联系我们 →' },
      press: { title: '媒体与新闻', body: '编辑合作与媒体资料包。', cta: '媒体咨询 →' },
      affiliate: '本网站包含联盟链接。如您通过这些链接预订,LaplandVibes 可能会获得佣金,您无需支付额外费用。',
      copyright: '© {{year}} #LaplandVibes，#LaplandVibes 网络的一部分',
      websiteBy: '网站制作:Yrityspaketit.fi',
      legal: { privacy: '隐私政策', cookie: 'Cookie 政策', terms: '使用条款', contact: '联系方式' },
    }
  }
  if (lang === 'ko') {
    return {
      networkBadge: '핀란드 라플란드 네트워크',
      tagline: '핀란드 라플란드 여행의 결정판 디지털 가이드.',
      groups: { stay: '숙박', eatDrink: '식음료', do: '액티비티', explore: '탐험', essentials: '필수 정보' },
      travelGuideKicker: '라플란드 여행 가이드',
      about: {
        eyebrow: 'LaplandVibes 소개',
        body: '핀란드 라플란드의 결정판 가이드, 오로라부터 백야까지. 엄선된 경험과 현지인 팁, 출처를 밝힌 정보로 북극 여행 계획을 돕습니다.',
        badge: '독립 운영 · 출처 명시',
      },
      spottedError: { title: '오류를 발견하셨나요?', body: '수정이 필요한 부분을 보셨나요? 알려주세요. 즉시 수정하겠습니다.', cta: '오류 신고 →' },
      partner: { title: '파트너십', body: '21개 이상의 라플란드 관련 사이트에서 광고와 협업.', cta: '문의하기 →' },
      press: { title: '언론 및 미디어', body: '편집 파트너십 및 보도자료 키트.', cta: '언론 문의 →' },
      affiliate: '이 사이트에는 제휴 링크가 포함되어 있습니다. 이 링크를 통해 예약하시면 추가 비용 없이 LaplandVibes가 수수료를 받을 수 있습니다.',
      copyright: '© {{year}} #LaplandVibes, #LaplandVibes 네트워크의 일부',
      websiteBy: '웹사이트 제작: Yrityspaketit.fi',
      legal: { privacy: '개인정보처리방침', cookie: '쿠키 정책', terms: '이용약관', contact: '연락처' },
    }
  }
  if (lang === 'fr') {
    return {
      networkBadge: 'Réseau Laponie finlandaise',
      tagline: 'Le guide numérique de référence pour voyager en Laponie finlandaise.',
      groups: { stay: 'Dormir', eatDrink: 'Manger & boire', do: 'À faire', explore: 'Explorer', essentials: 'Essentiels' },
      travelGuideKicker: 'Guide de voyage en Laponie',
      about: {
        eyebrow: 'À propos de LaplandVibes',
        body: "Le guide de référence sur la Laponie finlandaise, de l'aurore boréale au soleil de minuit. Expériences sélectionnées, conseils d'initiés et tout ce qu'il faut pour préparer votre aventure arctique.",
        badge: 'Édité de façon indépendante · sources citées',
      },
      spottedError: { title: 'Vous avez repéré une erreur ?', body: "Quelque chose à corriger ? Dites-le-nous. Nous rectifions immédiatement.", cta: 'Signaler une erreur →' },
      partner: { title: 'Travailler avec nous', body: 'Publicité ou collaborations sur 27 sites consacrés à la Laponie.', cta: 'Nous contacter →' },
      press: { title: 'Presse et médias', body: 'Partenariats éditoriaux et kits presse.', cta: 'Demandes presse →' },
      affiliate: "Ce site contient des liens d'affiliation. Si vous réservez via ces liens, LaplandVibes peut recevoir une commission sans frais supplémentaires pour vous.",
      copyright: '© {{year}} #LaplandVibes. Membre du réseau #LaplandVibes',
      websiteBy: 'Site réalisé par Yrityspaketit.fi',
      legal: { privacy: 'Politique de confidentialité', cookie: 'Politique des cookies', terms: "Conditions d'utilisation", contact: 'Contact' },
    }
  }
  if (lang === 'it') {
    return {
      networkBadge: 'Network Lapponia finlandese',
      tagline: 'La guida digitale di riferimento per viaggiare nella Lapponia finlandese.',
      groups: { stay: 'Dormire', eatDrink: 'Mangiare e bere', do: 'Da fare', explore: 'Esplorare', essentials: 'Essenziali' },
      travelGuideKicker: 'Guida di viaggio della Lapponia',
      about: {
        eyebrow: 'Su LaplandVibes',
        body: "La guida di riferimento sulla Lapponia finlandese, dall'aurora boreale al sole di mezzanotte. Esperienze selezionate, consigli da insider e tutto il necessario per pianificare la Sua avventura artica.",
        badge: 'Gestita in modo indipendente · fonti citate',
      },
      spottedError: { title: 'Ha visto un errore?', body: 'Qualcosa da correggere? Ce lo segnali. Interveniamo subito.', cta: 'Segnala un errore →' },
      partner: { title: 'Collabori con noi', body: 'Pubblicità o collaborazioni su 27 siti dedicati alla Lapponia.', cta: 'Contatti →' },
      press: { title: 'Stampa e media', body: 'Collaborazioni editoriali e cartelle stampa.', cta: 'Richieste stampa →' },
      affiliate: 'Questo sito contiene link di affiliazione. Se prenota tramite questi link, LaplandVibes può ricevere una commissione senza costi aggiuntivi per Lei.',
      copyright: '© {{year}} #LaplandVibes. Parte del network #LaplandVibes',
      websiteBy: 'Sito realizzato da Yrityspaketit.fi',
      legal: { privacy: 'Privacy policy', cookie: 'Cookie policy', terms: "Condizioni d'uso", contact: 'Contatti' },
    }
  }
  if (lang === 'nl') {
    return {
      networkBadge: 'Fins-Lapland-netwerk',
      tagline: 'De toonaangevende digitale gids voor reizen door Fins Lapland.',
      groups: { stay: 'Verblijven', eatDrink: 'Eten & drinken', do: 'Te doen', explore: 'Verkennen', essentials: 'Essentieel' },
      travelGuideKicker: 'Lapland-reisgids',
      about: {
        eyebrow: 'Over LaplandVibes',
        body: 'De toonaangevende gids voor Fins Lapland, van het noorderlicht tot de middernachtszon. Geselecteerde ervaringen, insidertips en de praktische basis voor uw Arctische reis.',
        badge: 'Onafhankelijk beheerd · bronnen vermeld',
      },
      spottedError: { title: 'Een fout gezien?', body: 'Iets dat aangepast moet worden? Laat het ons weten. We corrigeren het meteen.', cta: 'Fout melden →' },
      partner: { title: 'Samenwerken met ons', body: 'Adverteer of werk samen op meer dan 21 Lapland-sites.', cta: 'Neem contact op →' },
      press: { title: 'Pers en media', body: 'Redactionele samenwerkingen en perskits.', cta: 'Persaanvragen →' },
      affiliate: 'Deze site bevat affiliate-links. Als u via deze links boekt, kan LaplandVibes een commissie ontvangen zonder extra kosten voor u.',
      copyright: '© {{year}} #LaplandVibes. Onderdeel van het #LaplandVibes-netwerk',
      websiteBy: 'Website door Yrityspaketit.fi',
      legal: { privacy: 'Privacybeleid', cookie: 'Cookiebeleid', terms: 'Gebruiksvoorwaarden', contact: 'Contact' },
    }
  }
  if (lang === 'sv') {
    return {
      networkBadge: 'Nätverket för finska Lappland',
      tagline: 'Det digitala hemmet för resor i finska Lappland.',
      groups: { stay: 'Bo', eatDrink: 'Äta & dricka', do: 'Göra', explore: 'Utforska', essentials: 'Grunderna' },
      travelGuideKicker: 'Reseguide till Lappland',
      about: {
        eyebrow: 'Om LaplandVibes',
        body: 'Guiden till finska Lappland, från norrskenet till midnattssolen. Handplockade upplevelser, tips från lokalbor och det praktiska du behöver för din resa i Arktis.',
        badge: 'Oberoende · med källor angivna',
      },
      spottedError: { title: 'Hittade du ett fel?', body: 'Ser du något som behöver rättas? Hör av dig. Vi rättar det direkt.', cta: 'Anmäl ett fel →' },
      partner: { title: 'Samarbeta med oss', body: 'Annonsera eller samarbeta på 27 Lappland-webbplatser.', cta: 'Ta kontakt →' },
      press: { title: 'Press & media', body: 'Redaktionella samarbeten och presskit.', cta: 'Pressförfrågningar →' },
      affiliate: 'Den här webbplatsen innehåller partnerlänkar. Om du bokar via dem kan LaplandVibes få en provision utan extra kostnad för dig.',
      copyright: '© {{year}} #LaplandVibes. En del av #LaplandVibes-nätverket',
      websiteBy: 'Webbplats av Yrityspaketit.fi',
      legal: { privacy: 'Integritetspolicy', cookie: 'Cookiepolicy', terms: 'Användarvillkor', contact: 'Kontakt' },
    }
  }
  // fi
  return {
    networkBadge: 'Suomen Lapin verkosto',
    tagline: 'Suomen Lapin matkailun digitaalinen koti.',
    groups: { stay: 'Majoitu', eatDrink: 'Syö & juo', do: 'Tekemistä', explore: 'Tutki', essentials: 'Perustiedot' },
    travelGuideKicker: 'Lapin matkaopas',
    about: {
      eyebrow: 'Tietoa LaplandVibesistä',
      body: 'Kattava opas Suomen Lappiin, revontulista keskiyön aurinkoon. Käsin valittuja elämyksiä, sisäpiirin vinkkejä ja käytännön perustiedot Lapin matkan suunnitteluun.',
      badge: 'Riippumaton · lähteet näkyvillä',
    },
    spottedError: { title: 'Huomasitko virheen?', body: 'Näetkö jotain mikä pitäisi korjata? Kerro meille. Korjaamme sen heti.', cta: 'Ilmoita virheestä →' },
    partner: { title: 'Yhteistyö kanssamme', body: 'Mainosta tai tee yhteistyötä yli 21 Lappi-sivustolla.', cta: 'Ota yhteyttä →' },
    press: { title: 'Media ja lehdistö', body: 'Toimitusyhteistyö ja lehdistömateriaalit.', cta: 'Lehdistöyhteydet →' },
    affiliate: 'Tämä sivusto sisältää kumppanuuslinkkejä. Kun varaat näiden kautta, LaplandVibes voi saada provision ilman lisäkustannuksia sinulle.',
    copyright: '© {{year}} #LaplandVibes. Osa #LaplandVibes-verkostoa',
    websiteBy: 'Sivuston toteutus: Yrityspaketit.fi',
    legal: { privacy: 'Tietosuojaseloste', cookie: 'Evästekäytäntö', terms: 'Käyttöehdot', contact: 'Yhteystiedot' },
  }
}
