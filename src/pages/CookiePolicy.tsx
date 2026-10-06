import { useEffect } from 'react';
import CookieContent from '../shared/Legal/CookieContent';
import { useLang } from '../lang';
// Title and meta description: src/data/pageMeta.mjs, the same values the prerender writes into the static HTML.
import { PAGE_META } from '../data/pageMeta.mjs';
import ConsentControls from '../components/ConsentControls';

export default function CookiePolicy() {
  const { lang } = useLang();
  const m = PAGE_META['/cookie-policy'][lang];

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
