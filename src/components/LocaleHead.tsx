// 2026-05-21: Locale-aware head augmentation — hreflang × 11 + og:locale.
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang, type Lang } from '../lang';

const SITE_URL = 'https://laplandstore.fi';

const SUPPORTED: Lang[] = ['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl'];
const URL_PREFIX_OF: Record<Lang, string> = {
  en: '', fi: '/fi', de: '/de', ja: '/ja', es: '/es',
  'pt-BR': '/br', 'zh-CN': '/cn', ko: '/kr', fr: '/fr', it: '/it', nl: '/nl',
};
const BCP47: Record<Lang, string> = {
  en: 'en-US', fi: 'fi-FI', de: 'de-DE', ja: 'ja-JP', es: 'es-ES',
  'pt-BR': 'pt-BR', 'zh-CN': 'zh-CN', ko: 'ko-KR', fr: 'fr-FR', it: 'it-IT', nl: 'nl-NL',
};
const OG_LOCALE: Record<Lang, string> = {
  en: 'en_US', fi: 'fi_FI', de: 'de_DE', ja: 'ja_JP', es: 'es_ES',
  'pt-BR': 'pt_BR', 'zh-CN': 'zh_CN', ko: 'ko_KR', fr: 'fr_FR', it: 'it_IT', nl: 'nl_NL',
};

function stripLocalePath(path: string): string {
  return path.replace(/^\/(fi|de|ja|es|br|cn|kr|fr|it|nl)(?=\/|$)/, '') || '/';
}

export default function LocaleHead() {
  const { lang } = useLang();
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.lang = BCP47[lang];
    const cleanPath = stripLocalePath(pathname);

    document.head.querySelectorAll('link[rel="alternate"][data-seo-hreflang]').forEach((el) => el.remove());
    SUPPORTED.forEach((l) => {
      const lnk = document.createElement('link');
      lnk.setAttribute('rel', 'alternate');
      lnk.setAttribute('hreflang', BCP47[l]);
      lnk.setAttribute('href', SITE_URL + URL_PREFIX_OF[l] + (cleanPath === '/' ? '' : cleanPath));
      lnk.setAttribute('data-seo-hreflang', 'true');
      document.head.appendChild(lnk);
    });
    const xd = document.createElement('link');
    xd.setAttribute('rel', 'alternate');
    xd.setAttribute('hreflang', 'x-default');
    xd.setAttribute('href', SITE_URL + (cleanPath === '/' ? '/' : cleanPath));
    xd.setAttribute('data-seo-hreflang', 'true');
    document.head.appendChild(xd);

    let og = document.head.querySelector<HTMLMetaElement>('meta[property="og:locale"]:not([data-seo-alt])');
    if (!og) {
      og = document.createElement('meta');
      og.setAttribute('property', 'og:locale');
      document.head.appendChild(og);
    }
    og.setAttribute('content', OG_LOCALE[lang]);

    document.head.querySelectorAll('meta[property="og:locale:alternate"][data-seo-alt]').forEach((el) => el.remove());
    SUPPORTED.filter((l) => l !== lang).forEach((l) => {
      const m = document.createElement('meta');
      m.setAttribute('property', 'og:locale:alternate');
      m.setAttribute('content', OG_LOCALE[l]);
      m.setAttribute('data-seo-alt', 'true');
      document.head.appendChild(m);
    });

    // Per-locale JSON-LD: Organization + WebSite carrying inLanguage (BCP-47 of the
    // current locale) so each locale URL signals the right language. The static
    // brand-level @graph in index.html stays put; this augments it per route.
    document.head.querySelectorAll('script[data-seo-jsonld]').forEach((el) => el.remove());
    const bcp47 = BCP47[lang];
    const jsonLdNodes: Array<Record<string, unknown>> = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'LaplandStore',
        url: SITE_URL + '/',
        logo: SITE_URL + '/og-default.jpg',
        inLanguage: bcp47,
        sameAs: [
          'https://www.facebook.com/laplandvibes',
          'https://www.instagram.com/laplandvibesofficial',
          'https://www.tiktok.com/@laplandvibes',
          'https://www.youtube.com/@laplandvibes',
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'LaplandStore.fi',
        url: SITE_URL + URL_PREFIX_OF[lang] + '/',
        inLanguage: bcp47,
        potentialAction: {
          '@type': 'SearchAction',
          target: SITE_URL + '/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ];
    jsonLdNodes.forEach((node) => {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-seo-jsonld', 'true');
      s.textContent = JSON.stringify(node);
      document.head.appendChild(s);
    });
  }, [lang, pathname]);
  return null;
}
