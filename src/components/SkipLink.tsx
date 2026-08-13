import { useLang, type Lang } from '../lang';

/**
 * "Ohita navigaatio" -linkki (WCAG 2.4.1 Bypass Blocks, taso A).
 * Compliance-auditti 13.8.2026: puuttui kokonaan.
 *
 * Näkymätön kunnes se saa näppäimistöfokuksen: `sr-only` vie sen ruudulta
 * mutta jättää ruudunlukijalle ja tabulaattorille, `focus:not-sr-only` tuo
 * sen näkyviin ensimmäisellä Tab-painalluksella.
 *
 * 🔴 Kohteessa on oltava `tabIndex={-1}`, muuten selain palauttaa fokuksen
 * dokumentin alkuun: sivu vierii, mutta ruudunlukijan fokus ei siirry ja
 * linkki näyttää toimivan toimimatta.
 */
const SKIP_TO_CONTENT: Record<Lang, string> = {
  en: 'Skip to content',
  fi: 'Siirry sisältöön',
  de: 'Zum Inhalt springen',
  ja: '本文へスキップ',
  es: 'Saltar al contenido',
  'pt-BR': 'Pular para o conteúdo',
  'zh-CN': '跳到主要内容',
  ko: '본문으로 건너뛰기',
  fr: 'Aller au contenu',
  it: 'Vai al contenuto',
  nl: 'Naar de inhoud',
  sv: 'Hoppa till innehållet',
};

export default function SkipLink() {
  const { lang } = useLang();
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-full focus:bg-night focus:px-5 focus:py-3 focus:font-semibold focus:text-white focus:outline-none focus:ring-2 focus:ring-amber"
    >
      {SKIP_TO_CONTENT[lang]}
    </a>
  );
}
