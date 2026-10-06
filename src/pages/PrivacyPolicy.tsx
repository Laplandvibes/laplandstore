import { useEffect } from 'react';
import PrivacyContent from '../shared/Legal/PrivacyContent';
import { useLang } from '../lang';
// Title and meta description: src/data/pageMeta.mjs, the same values the prerender writes into the static HTML.
import { PAGE_META } from '../data/pageMeta.mjs';

export default function PrivacyPolicy() {
  const { lang } = useLang();
  const m = PAGE_META['/privacy'][lang];

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
