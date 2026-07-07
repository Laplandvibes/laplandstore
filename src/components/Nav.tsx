import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Globe, ChevronDown } from 'lucide-react';
import { useLang, type Lang } from '../lang';

import enCopy, { type CopyShape } from './Nav.copy.en';
import { useCopy } from '../i18n/useCopy';
import EcosystemMenu from '../../../shared/EcosystemMenu';


const loaders = {
  fi: () => import('./Nav.copy.fi'),
  de: () => import('./Nav.copy.de'),
  ja: () => import('./Nav.copy.ja'),
  es: () => import('./Nav.copy.es'),
  'pt-BR': () => import('./Nav.copy.ptBR'),
  'zh-CN': () => import('./Nav.copy.zhCN'),
  ko: () => import('./Nav.copy.ko'),
  fr: () => import('./Nav.copy.fr'),
  it: () => import('./Nav.copy.it'),
  nl: () => import('./Nav.copy.nl'),
} as const;

const cache: Partial<Record<import('../lang').Lang, CopyShape>> = { en: enCopy };

const LANG_OPTIONS: { code: Lang; label: string; native: string }[] = [
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'fi', label: 'FI', native: 'Suomi' },
  { code: 'de', label: 'DE', native: 'Deutsch' },
  { code: 'ja', label: 'JA', native: '日本語' },
  { code: 'es', label: 'ES', native: 'Español' },
  { code: 'pt-BR', label: 'BR', native: 'Português' },
  { code: 'zh-CN', label: 'CN', native: '中文' },
  { code: 'ko', label: 'KR', native: '한국어' },
  { code: 'fr', label: 'FR', native: 'Français' },
  { code: 'it', label: 'IT', native: 'Italiano' },
  { code: 'nl', label: 'NL', native: 'Nederlands' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { lang, setLang } = useLang();
  const t = useCopy<CopyShape>(enCopy, lang, loaders, cache);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!langOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setLangOpen(false); };
    document.addEventListener('mousedown', onClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [langOpen]);

  // Strip locale prefix to detect "are we on the home page?".
  const bare =
    location.pathname.replace(/^\/(?:fi|de|ja|es|br|cn|kr|fr|it|nl)/, '') || '/';
  const onHome = bare === '/';
  const prefixMap: Record<Lang, string> = { en: '', fi: '/fi', de: '/de', ja: '/ja', es: '/es', 'pt-BR': '/br', 'zh-CN': '/cn', ko: '/kr', fr: '/fr', it: '/it', nl: '/nl' };
  const localePrefix = prefixMap[lang];

  // Anchor links work only on the home page; on legal pages they navigate to /
  // first via React Router, then the browser handles the hash.
  const link = (anchor: string) => (onHome ? `#${anchor}` : `${localePrefix || '/'}#${anchor}`);

  const links: { href: string; label: string }[] = [
    { href: link('top'), label: t.home },
    { href: link('herkut'), label: t.categories },
    { href: link('putiikit'), label: t.boutiques },
    { href: link('tarina'), label: t.story },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-[0_2px_20px_rgba(15,23,42,0.06)] border-b border-warm-gray/10'
            : 'bg-gradient-to-b from-black/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-3 sm:gap-5 shrink-0">
            <EcosystemMenu lang={lang} currentDomain="laplandstore.fi" variant={scrolled ? 'light' : 'dark'} />
            <Link
              to={localePrefix || '/'}
              className="flex items-center shrink-0"
              aria-label="LaplandStore home"
            >
              <span className="font-heading tracking-wider leading-none text-xl sm:text-2xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
                <span className="text-amber">#</span>
                <span className={scrolled ? 'text-night' : 'text-white'}>LAPLAND</span>
                <span className="text-amber">STORE</span>
              </span>
            </Link>
          </div>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? 'text-night/70 hover:text-amber hover:bg-amber/5'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </a>
            ))}

            {/* Lang dropdown */}
            <div className="relative ml-2" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((o) => !o)}
                aria-haspopup="listbox"
                aria-expanded={langOpen}
                aria-label="Select language"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase border transition-colors ${
                  scrolled
                    ? 'border-warm-gray/30 text-night/80 hover:border-amber hover:text-amber'
                    : 'border-white/30 text-white/90 hover:border-amber hover:text-amber'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                {LANG_OPTIONS.find((l) => l.code === lang)?.label ?? 'EN'}
                <ChevronDown className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>
              {langOpen && (
                <ul
                  role="listbox"
                  aria-label="Select language"
                  className="absolute right-0 top-full mt-2 min-w-[180px] py-1 bg-cream border border-warm-gray/15 rounded-lg shadow-xl z-50 max-h-[80vh] overflow-y-auto"
                >
                  {LANG_OPTIONS.map((l) => {
                    const isActive = l.code === lang;
                    return (
                      <li key={l.code} role="option" aria-selected={isActive}>
                        <button
                          type="button"
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                          className={`w-full flex items-center gap-2 px-3 py-2 text-left text-sm transition-colors ${
                            isActive ? 'bg-amber/15 text-amber font-bold' : 'text-night/85 hover:bg-warm-gray/10'
                          }`}
                        >
                          <span className="w-8 text-xs font-bold tracking-wider">{l.label}</span>
                          <span>{l.native}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <a
              href={link('putiikit')}
              className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 text-white text-sm font-bold rounded-full transition-colors"
              style={{ background: '#D97706' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#F59E0B')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = '#D97706')}
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              {t.cta}
            </a>
          </div>

          {/* Mobile lang dropdown + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Lang)}
              aria-label="Language"
              className={`bg-transparent border rounded px-2 py-1 text-xs font-bold uppercase ${scrolled ? 'border-warm-gray/30 text-night' : 'border-white/40 text-white'}`}
            >
              <option value="en" className="bg-cream text-night">EN</option>
              <option value="fi" className="bg-cream text-night">FI</option>
              <option value="de" className="bg-cream text-night">DE</option>
              <option value="ja" className="bg-cream text-night">JA</option>
              <option value="es" className="bg-cream text-night">ES</option>
              <option value="pt-BR" className="bg-cream text-night">BR</option>
              <option value="zh-CN" className="bg-cream text-night">CN</option>
              <option value="ko" className="bg-cream text-night">KR</option>
              <option value="fr" className="bg-cream text-night">FR</option>
              <option value="it" className="bg-cream text-night">IT</option>
              <option value="nl" className="bg-cream text-night">NL</option>
            </select>
            <button
              className={`p-2 rounded-lg transition-colors ${scrolled ? 'text-night' : 'text-white'}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? t.close : t.menu}
              aria-expanded={open}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 pt-16 bg-cream overflow-y-auto">
          <div className="flex flex-col p-5 gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3.5 text-base font-medium rounded-xl text-night/80 hover:bg-amber/10 transition-colors min-h-[44px] flex items-center"
              >
                {l.label}
              </a>
            ))}

            <a
              href={link('putiikit')}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-3.5 text-white text-base font-bold rounded-xl text-center min-h-[44px]"
              style={{ background: '#D97706' }}
            >
              <ShoppingBag className="w-4 h-4" />
              {t.cta}
            </a>

            {/* Lang toggle — bottom of drawer */}
            <div className="mt-6 pt-6 border-t border-warm-gray/15 flex flex-wrap items-center justify-center gap-2">
              {(['en', 'fi', 'de', 'ja', 'es', 'pt-BR', 'zh-CN', 'ko', 'fr', 'it', 'nl'] as const).map((l) => {
                const labels: Record<typeof l, string> = { en: 'EN', fi: 'FI', de: 'DE', ja: 'JA', es: 'ES', 'pt-BR': 'BR', 'zh-CN': 'CN', ko: 'KR', fr: 'FR', it: 'IT', nl: 'NL' };
                return (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-4 py-3 rounded-full text-sm font-bold tracking-wider min-h-[44px] min-w-[64px] ${
                      lang === l ? 'bg-amber text-white' : 'bg-warm-gray/10 text-night/70'
                    }`}
                    aria-pressed={lang === l}
                  >
                    {labels[l]}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
