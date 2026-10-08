import { useEffect } from 'react';
import CookieContent from '../shared/Legal/CookieContent';
import { useLang } from '../lang';
// Title and meta description: src/data/pageMeta.mjs, the same values the prerender writes into the static HTML.
import { PAGE_META } from '../data/pageMeta.mjs';

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

  // Peruutusnappi on jaetussa CookieContentissa (8.10.2026 alkaen koko verkostossa).
  return <CookieContent siteId="laplandstore" siteName="LaplandStore" lang={lang} />;
}
