import SharedNotFound from '../shared/NotFound';
import { useLang, LANG_PREFIX, type Lang } from '../lang';
import { useCopy } from '../i18n/useCopy';
import enCopy, { type CopyShape } from '../components/Nav.copy.en';

// Same lazy per-locale copy loader Nav.tsx uses for its own label set — reused
// here (not imported from Nav.tsx, which doesn't export it) so the 404's link
// labels stay in the 11 already-translated languages.
const loaders = {
  fi: () => import('../components/Nav.copy.fi'),
  de: () => import('../components/Nav.copy.de'),
  ja: () => import('../components/Nav.copy.ja'),
  es: () => import('../components/Nav.copy.es'),
  'pt-BR': () => import('../components/Nav.copy.ptBR'),
  'zh-CN': () => import('../components/Nav.copy.zhCN'),
  ko: () => import('../components/Nav.copy.ko'),
  fr: () => import('../components/Nav.copy.fr'),
  it: () => import('../components/Nav.copy.it'),
  nl: () => import('../components/Nav.copy.nl'),
  sv: () => import('../components/Nav.copy.sv'),
} as const;

const cache: Partial<Record<Lang, CopyShape>> = { en: enCopy };

// Thin wrapper around the canonical shared 404 (Vesa 2026-07-12: catch-all no
// longer renders the home page). LaplandStore is a light/cream boutique
// directory (bg-cream, Playfair heading, amber accent — vibe-pink is unused
// anywhere in this site's own UI), so this uses variant='light' with the
// site's real amber CTA colour instead of the network-default pink. Links
// point at the home page's anchor sections (Categories/Boutiques/Story),
// matching the single-page + legal-pages site structure.
export default function NotFound() {
  const { lang } = useLang();
  const t = useCopy<CopyShape>(enCopy, lang, loaders, cache);
  const prefix = LANG_PREFIX[lang];
  const homeHref = prefix ? `/${prefix}` : '/';
  const anchor = (a: string) => (prefix ? `/${prefix}#${a}` : `/#${a}`);

  // landmark={false} because this site's app layout already renders the
  // page's <main>. Without it the 404 route shipped two nested landmarks --
  // measured from the rendered DOM 2026-08-13, invisible to grep.
  return (
    <SharedNotFound
      landmark={false}
      lang={lang}
      siteName="LaplandStore"
      homeHref={homeHref}
      variant="light"
      accentHex="#D97706"
      links={[
        { href: anchor('herkut'), label: t.categories },
        { href: anchor('putiikit'), label: t.boutiques },
        { href: anchor('tarina'), label: t.story },
      ]}
    />
  );
}
