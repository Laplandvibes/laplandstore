import { useEffect } from 'react';
import TermsContent from '../shared/Legal/TermsContent';
import { useLang } from '../lang';
// Title and meta description: src/data/pageMeta.mjs, the same values the prerender writes into the static HTML.
import { PAGE_META } from '../data/pageMeta.mjs';

export default function Terms() {
  const { lang } = useLang();
  const m = PAGE_META['/terms'][lang];

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
