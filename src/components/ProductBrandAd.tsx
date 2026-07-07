import { useEffect, useRef, useState, type ComponentType } from 'react';
import { ArrowRight, Truck, type LucideProps } from 'lucide-react';
import { useLang, type Lang } from '../lang';
import { trackAffiliateClick } from '../lib/analytics';
import AffiliateDisclosure from './AffiliateDisclosure';
import type { StorePartner } from '../lib/affiliate';

/**
 * Reusable PRODUCT affiliate ad, skinned in the ADVERTISER's OWN brand
 * (premium_design_standard §6: an ad must look like the advertiser, not like us).
 * Each placement passes its own colours, logo, copy and trust points. The card
 * is a clearly framed "Mainos/Ad" unit that sits cleanly on the cream page.
 *
 * Build notes:
 *  • No product feed photos are featured (we only hold the official LOGO for
 *    these advertisers via Adtraction, not a cleared product feed), so the stage
 *    is a tasteful brand panel: real wordmark + brand-gradient + an accurate
 *    proof chip. This avoids putting un-cleared / wrong product imagery on the
 *    card (premium_design_standard §1c: never a wrong/garbled image).
 *  • Pure CSS/Tailwind one-shot scroll reveal + slow shimmer + soft drift. NO
 *    animation library. Fully disabled under prefers-reduced-motion, and always
 *    visible pre-JS (the motion is progressive enhancement, never a content gate).
 *  • Offer hook is EVERGREEN only (free-shipping threshold / brand fact). No
 *    hardcoded sale-% (stale = fake data; coupon-marketing not enabled for us).
 *  • Affiliate <a>: target="_blank" rel="sponsored nofollow noopener" (NO
 *    noreferrer) + tracking.
 */

export interface ProductAdCopy {
  eyebrow: Record<Lang, string>;
  headline: Record<Lang, string>;
  sub: Record<Lang, string>;
  /** 3 short trust points, each with an icon. */
  trust: { icon: ComponentType<LucideProps>; label: Record<Lang, string> }[];
  /** Evergreen offer / proof chip shown above the CTA. */
  offer: Record<Lang, string>;
  /** Icon for the offer chip (defaults to Truck = shipping). */
  offerIcon?: ComponentType<LucideProps>;
  cta: Record<Lang, string>;
  soldBy: Record<Lang, string>;
  /** Short proof badge rendered on the brand stage. */
  stageBadge: Record<Lang, string>;
}

export interface ProductAdBrand {
  /** CSS namespace prefix, e.g. "kc" — must be unique per advertiser. */
  ns: string;
  /** Accent (chips, hairline, wordmark wash). */
  accent: string;
  /** Darker accent used for the CTA fill + accent text (AA on white). */
  ink: string;
  /** Two-stop gradient for the brand stage. */
  stage: [string, string];
  /** Card background (kept distinct from the page's cream). */
  cardBg?: string;
}

const AD_LABEL: Record<Lang, string> = {
  en: 'Ad', fi: 'Mainos', de: 'Anzeige', ja: '広告', es: 'Anuncio',
  'pt-BR': 'Anúncio', 'zh-CN': '广告', ko: '광고', fr: 'Annonce',
  it: 'Annuncio', nl: 'Advertentie',
};

export default function ProductBrandAd({
  partner,
  brand,
  copy,
  sid,
  className = '',
}: {
  partner: StorePartner;
  brand: ProductAdBrand;
  copy: ProductAdCopy;
  sid: string;
  className?: string;
}) {
  const { lang } = useLang();
  const href = partner.link;

  // One-shot scroll reveal. Visible pre-JS / reduced-motion; the animation only
  // layers on once armed, with a safety timer so it can never stick hidden.
  const rootRef = useRef<HTMLElement | null>(null);
  const [armed, setArmed] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setRevealed(true);
      return;
    }
    setArmed(true);
  }, []);

  useEffect(() => {
    if (!armed || revealed) return;
    const el = rootRef.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setRevealed(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    const t = window.setTimeout(() => setRevealed(true), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, [armed, revealed]);

  const animState = !armed ? 'off' : revealed ? 'in' : 'pending';
  const ns = brand.ns;
  const OfferIcon = copy.offerIcon ?? Truck;
  const cardBg = brand.cardBg ?? '#FFFFFF';

  return (
    <section
      ref={rootRef}
      data-anim={animState}
      className={`${ns}-ad group/ad relative overflow-hidden rounded-3xl text-stone-900 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.45)] ring-1 ring-stone-900/10 ${className}`}
      style={{ background: cardBg, borderTop: `4px solid ${brand.accent}` }}
      aria-label={copy.headline[lang]}
    >
      <style>{`
        .${ns}-ad[data-anim='pending'] .${ns}-rise { opacity: 0; transform: translateY(14px); }
        .${ns}-ad[data-anim='in'] .${ns}-rise {
          opacity: 1; transform: none;
          transition: opacity .6s ease, transform .6s cubic-bezier(.22,.61,.36,1);
        }
        .${ns}-ad[data-anim='in'] .${ns}-rise-1 { transition-delay: .05s; }
        .${ns}-ad[data-anim='in'] .${ns}-rise-2 { transition-delay: .13s; }
        .${ns}-ad[data-anim='in'] .${ns}-rise-3 { transition-delay: .21s; }

        .${ns}-ad[data-anim='pending'] .${ns}-stage { opacity: 0; transform: scale(.96); }
        .${ns}-ad[data-anim='in'] .${ns}-stage {
          opacity: 1; transform: scale(1);
          transition: opacity .7s ease, transform .9s cubic-bezier(.22,.61,.36,1);
        }

        .${ns}-ad .${ns}-shimmer {
          background: linear-gradient(115deg, transparent 30%, rgba(255,255,255,.55) 50%, transparent 70%);
          transform: translateX(-120%); opacity: 0;
        }
        .${ns}-ad[data-anim='in'] .${ns}-shimmer {
          opacity: 1; animation: ${ns}-shimmer 6.5s ease-in-out 1.1s infinite;
        }
        @keyframes ${ns}-shimmer {
          0% { transform: translateX(-120%); }
          22%,100% { transform: translateX(120%); }
        }

        .${ns}-ad .${ns}-drift {
          position: absolute; top: -8%; border-radius: 9999px;
          background: rgba(255,255,255,.85); opacity: 0; will-change: transform;
        }
        .${ns}-ad[data-anim='in'] .${ns}-drift { animation: ${ns}-fall linear infinite; }
        @keyframes ${ns}-fall {
          0%   { transform: translate3d(0,-10%,0); opacity: 0; }
          12%  { opacity: .7; }
          88%  { opacity: .65; }
          100% { transform: translate3d(var(--dx,6px),360px,0); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .${ns}-ad .${ns}-rise,
          .${ns}-ad .${ns}-stage { opacity: 1 !important; transform: none !important; transition: none !important; }
          .${ns}-ad .${ns}-shimmer,
          .${ns}-ad .${ns}-drift { animation: none !important; opacity: 0 !important; }
        }
      `}</style>

      {/* Soft accent wash, top-right. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full"
        style={{ background: `radial-gradient(closest-side, ${brand.accent}26, transparent)` }}
      />

      <div className="relative grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
        {/* ── Copy column ─────────────────────────────────────────────── */}
        <div className="relative p-6 sm:p-8 lg:p-10">
          <div className={`${ns}-rise ${ns}-rise-1 mb-5 flex items-start justify-between gap-4`}>
            <div className="flex flex-col gap-1.5">
              <span
                className="inline-flex w-fit items-center rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
                style={{ backgroundColor: `${brand.accent}22`, color: brand.ink }}
              >
                {AD_LABEL[lang]}
              </span>
              <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: brand.ink }}>
                {copy.eyebrow[lang]}
              </p>
            </div>
            <img
              src={partner.logo}
              alt={partner.name}
              width={120}
              height={40}
              loading="lazy"
              decoding="async"
              className="h-6 w-auto shrink-0 sm:h-7"
            />
          </div>

          <h2
            className={`${ns}-rise ${ns}-rise-1 mb-3 max-w-xl text-2xl font-bold leading-tight text-stone-900 sm:text-3xl [text-wrap:balance]`}
          >
            {copy.headline[lang]}
          </h2>
          <p className={`${ns}-rise ${ns}-rise-2 max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base`}>
            {copy.sub[lang]}
          </p>

          <ul className={`${ns}-rise ${ns}-rise-2 mt-5 flex flex-wrap gap-x-5 gap-y-2.5`}>
            {copy.trust.map((tp) => {
              const Icon = tp.icon;
              return (
                <li key={tp.label.en} className="flex items-center gap-2 text-sm text-stone-700">
                  <Icon className="h-4 w-4 shrink-0" style={{ color: brand.ink }} aria-hidden="true" />
                  <span>{tp.label[lang]}</span>
                </li>
              );
            })}
          </ul>

          {/* Evergreen offer chip — real, never stale, in the brand accent. */}
          <div
            className={`${ns}-rise ${ns}-rise-3 mt-6 inline-flex w-fit items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold`}
            style={{ backgroundColor: `${brand.accent}22`, color: brand.ink }}
          >
            <OfferIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>{copy.offer[lang]}</span>
          </div>

          <div className={`${ns}-rise ${ns}-rise-3 mt-5 flex flex-wrap items-center gap-x-5 gap-y-2`}>
            <a
              href={href}
              target="_blank"
              rel="sponsored nofollow noopener"
              onClick={() => trackAffiliateClick(partner.slug, `laplandstore:${sid}`, href)}
              className="group/cta inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-7 py-4 font-semibold text-white no-underline shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              style={{ backgroundColor: brand.ink, boxShadow: `0 14px 30px -12px ${brand.ink}99` }}
            >
              {copy.cta[lang]}
              <ArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-0.5" aria-hidden="true" />
            </a>
            <p className="text-[11px] uppercase tracking-[0.12em] text-stone-400">{copy.soldBy[lang]}</p>
          </div>

          <AffiliateDisclosure lang={lang} variant="compact" className="mt-6 !justify-start !text-stone-500" />
        </div>

        {/* ── Brand stage (real wordmark + brand gradient, no fake product art) ── */}
        <div
          aria-hidden="true"
          className="relative min-h-[15rem] overflow-hidden lg:min-h-full"
          style={{ background: `linear-gradient(155deg, ${brand.stage[0]} 0%, ${brand.stage[1]} 100%)` }}
        >
          <div className="pointer-events-none absolute inset-0">
            {DRIFT.map((s, i) => (
              <span
                key={i}
                className={`${ns}-drift`}
                style={{
                  left: s.left,
                  width: s.size,
                  height: s.size,
                  // @ts-expect-error CSS custom property
                  '--dx': s.dx,
                  animationDuration: s.dur,
                  animationDelay: s.delay,
                  opacity: s.op,
                }}
              />
            ))}
          </div>

          <div className={`${ns}-stage relative flex h-full flex-col items-center justify-center gap-5 p-8 text-center`}>
            <div className="relative overflow-hidden rounded-2xl bg-white px-8 py-6 shadow-[0_18px_45px_-18px_rgba(0,0,0,0.45)] ring-1 ring-stone-900/5">
              <img
                src={partner.logo}
                alt=""
                width={300}
                height={100}
                loading="lazy"
                decoding="async"
                className="h-8 w-auto sm:h-10"
              />
              <div className={`${ns}-shimmer pointer-events-none absolute inset-0`} />
            </div>
            <span
              className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em]"
              style={{ backgroundColor: brand.accent, color: brand.ink === '#0B0B0C' ? '#0B0B0C' : '#FFFFFF' }}
            >
              {copy.stageBadge[lang]}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Pre-baked drift specks for the stage (deterministic, no runtime random). */
const DRIFT: { left: string; size: string; dx: string; dur: string; delay: string; op: number }[] = [
  { left: '12%', size: '5px', dx: '9px', dur: '7.8s', delay: '0s', op: 0.8 },
  { left: '28%', size: '4px', dx: '-7px', dur: '9.2s', delay: '1.1s', op: 0.6 },
  { left: '44%', size: '6px', dx: '6px', dur: '8.2s', delay: '0.6s', op: 0.75 },
  { left: '60%', size: '3px', dx: '11px', dur: '10.2s', delay: '2.0s', op: 0.5 },
  { left: '74%', size: '5px', dx: '-9px', dur: '8.6s', delay: '1.5s', op: 0.7 },
  { left: '88%', size: '4px', dx: '7px', dur: '9.6s', delay: '0.9s', op: 0.6 },
];
