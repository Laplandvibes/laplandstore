import { ArrowRight, Gem } from 'lucide-react'
import picks from "./data/kalevalaPicks"

// ─────────────────────────────────────────────────────────────────────────────
// KalevalaRail — a PRODUCT rail for Kulta-Center's Kalevala Koru range.
//
// WHY THIS EXISTS ALONGSIDE AdUnit (Vesa 2026-09-03: "koruliike, heillä on
// Kalevalaa, miksi ei tuoda niitä esille"). AdUnit renders ONE advertiser as a
// brand card and links to a category. That is a signpost, not a shop window:
// the reader sees a logo and a promise, never a piece of jewellery or a price.
// Kulta-Center's Adtraction feed carries 674 Kalevala products, so we can show
// the actual objects — the partner's own photo, the real price, a deep link to
// that exact item. Measured before building: the gifts card did not contain the
// word "Kalevala" even once.
//
// DATA IS A COMMITTED SNAPSHOT, never a runtime fetch — see
// scripts/sync_kalevala_feed.mjs for why (43 MB feed) and how to refresh it.
//
// DESIGN CONTRACT (same as AdUnit — shared code stays site-agnostic):
//   • No import from any site's i18n, analytics or lib. Pass `lang` in, get
//     clicks out through `onCtaClick`, slot the site's own disclosure in.
//   • Every link goes through the redirect Worker. Raw partner URLs in source
//     are forbidden network-wide, and the Worker is what tags the click with
//     the originating site for the D1 log.
//   • target="_blank" rel="sponsored nofollow noopener" — NO noreferrer, the
//     Worker reads Referer to attribute the click.
//   • Affiliate clicks are NOT sent to Umami. Worker-D1 is the single truth;
//     double counting would inflate the numbers. `onCtaClick` is for a site's
//     own optional bookkeeping only.
//   • variant="light" (cream/editorial pages: store, gifts, christmas) or
//     "dark" (deep-night sites).
//
// 🔴 PRICE HONESTY. Prices are from `fetchedAt`, shown with a visible "checked
// on" date and an "alk./from" qualifier — the sync picks the cheapest variant
// of each design, so the real basket price can only go up from what we print.
// No discount badges: a percentage frozen into a snapshot is stale data by
// design, which is exactly what the ad-creative rule forbids.
//
// 🔴 PROGRAMME TERMS. Kulta-Center FI pays 8,5 %/order on a 21-day cookie, and
// its Adtraction record sets ppcMarketing 0 and couponMarketing 0 — never run
// Google Ads on their brand, never frame this as a coupon or discount offer.
// ─────────────────────────────────────────────────────────────────────────────

export type RailLang =
  | 'en' | 'fi' | 'de' | 'ja' | 'es' | 'pt-BR' | 'zh-CN' | 'ko' | 'fr' | 'it' | 'nl' | 'sv'

/** Kulta-Center runs four store views. Everything else gets the English shop —
 *  it is genuine English, which serves a Japanese or Spanish reader far better
 *  than Finnish. Verified 2026-09-03: /fi/kalevala, /en/kalevala, /se/kalevala
 *  and /de/kalevala all return 200 with real localized titles. */
const SHOP_LOCALE: Record<RailLang, 'fi' | 'sv' | 'de' | 'en'> = {
  fi: 'fi', sv: 'sv', de: 'de',
  en: 'en', ja: 'en', es: 'en', 'pt-BR': 'en', 'zh-CN': 'en',
  ko: 'en', fr: 'en', it: 'en', nl: 'en',
}

const CATEGORY_URL: Record<'fi' | 'sv' | 'de' | 'en', string> = {
  fi: 'https://www.kulta-center.com/fi/kalevala',
  sv: 'https://www.kulta-center.com/se/kalevala',
  de: 'https://www.kulta-center.com/de/kalevala',
  en: 'https://www.kulta-center.com/en/kalevala',
}

/** Same wording as AdUnit's chip, so one network speaks with one voice. */
const AD_LABEL: Record<RailLang, string> = {
  en: 'Ad', fi: 'Mainos', de: 'Anzeige', ja: '広告', es: 'Anuncio',
  'pt-BR': 'Publicidade', 'zh-CN': '广告', ko: '광고', fr: 'Publicité',
  it: 'Pubblicità', nl: 'Advertentie', sv: 'Annons',
}

interface RailCopy {
  eyebrow: string
  headline: string
  sub: string
  from: string
  cta: string
  ctaAll: string
  /** "Prices checked on {date}" — {date} is substituted, never hardcoded. */
  priceNote: string
}

const COPY: Record<RailLang, RailCopy> = {
  fi: {
    eyebrow: 'Suomalaista korumuotoilua',
    headline: 'Kalevala-korut Kulta-Centeristä',
    sub: 'Kalevala Koru on tehnyt samoja malleja vuosikymmeniä, ja moni niistä on alun perin muinaislöydön kopio. Kulta-Center on suomalainen kultasepänliike vuodesta 1933 ja myy niitä verkosta.',
    from: 'alk.',
    cta: 'Katso koru',
    ctaAll: 'Selaa kaikkia Kalevala-koruja',
    priceNote: 'Hinnat tarkistettu {date}. Ajantasainen hinta näkyy Kulta-Centerin sivulla.',
  },
  en: {
    eyebrow: 'Finnish jewellery design',
    headline: 'Kalevala jewellery from Kulta-Center',
    sub: 'Kalevala Koru has been making the same designs for decades, and many began as copies of archaeological finds. Kulta-Center is a Finnish jeweller founded in 1933 and sells them online.',
    from: 'from',
    cta: 'View piece',
    ctaAll: 'Browse all Kalevala jewellery',
    priceNote: 'Prices checked {date}. The current price is shown on Kulta-Center’s own page.',
  },
  sv: {
    eyebrow: 'Finsk smyckedesign',
    headline: 'Kalevala-smycken från Kulta-Center',
    sub: 'Kalevala Koru har tillverkat samma modeller i decennier, och många av dem är kopior av arkeologiska fynd. Kulta-Center är en finsk guldsmed sedan 1933 och säljer dem på nätet.',
    from: 'fr.',
    cta: 'Se smycket',
    ctaAll: 'Bläddra bland alla Kalevala-smycken',
    priceNote: 'Priserna kontrollerade {date}. Aktuellt pris visas på Kulta-Centers egen sida.',
  },
  de: {
    eyebrow: 'Finnisches Schmuckdesign',
    headline: 'Kalevala-Schmuck von Kulta-Center',
    sub: 'Kalevala Koru fertigt dieselben Modelle seit Jahrzehnten, viele davon nach archäologischen Funden. Kulta-Center ist ein finnischer Juwelier seit 1933 und verkauft sie online.',
    from: 'ab',
    cta: 'Schmuckstück ansehen',
    ctaAll: 'Allen Kalevala-Schmuck ansehen',
    priceNote: 'Preise geprüft am {date}. Den aktuellen Preis zeigt die Seite von Kulta-Center.',
  },
  fr: {
    eyebrow: 'Design de bijoux finlandais',
    headline: 'Bijoux Kalevala de Kulta-Center',
    sub: 'Kalevala Koru fabrique les mêmes modèles depuis des décennies, et beaucoup reprennent des trouvailles archéologiques. Kulta-Center est un bijoutier finlandais depuis 1933 et les vend en ligne.',
    from: 'dès',
    cta: 'Voir le bijou',
    ctaAll: 'Voir tous les bijoux Kalevala',
    priceNote: 'Prix vérifiés le {date}. Le prix actuel figure sur la page de Kulta-Center.',
  },
  it: {
    eyebrow: 'Design di gioielli finlandese',
    headline: 'Gioielli Kalevala da Kulta-Center',
    sub: 'Kalevala Koru produce gli stessi modelli da decenni e molti nascono da ritrovamenti archeologici. Kulta-Center è un gioielliere finlandese dal 1933 e li vende online.',
    from: 'da',
    cta: 'Vedi il gioiello',
    ctaAll: 'Sfoglia tutti i gioielli Kalevala',
    priceNote: 'Prezzi verificati il {date}. Il prezzo aggiornato è sulla pagina di Kulta-Center.',
  },
  es: {
    eyebrow: 'Diseño de joyería finlandesa',
    headline: 'Joyas Kalevala de Kulta-Center',
    sub: 'Kalevala Koru fabrica los mismos modelos desde hace décadas y muchos parten de hallazgos arqueológicos. Kulta-Center es una joyería finlandesa desde 1933 y los vende en línea.',
    from: 'desde',
    cta: 'Ver la joya',
    ctaAll: 'Ver todas las joyas Kalevala',
    priceNote: 'Precios comprobados el {date}. El precio actual aparece en la página de Kulta-Center.',
  },
  'pt-BR': {
    eyebrow: 'Design de joias finlandês',
    headline: 'Joias Kalevala da Kulta-Center',
    sub: 'A Kalevala Koru faz os mesmos modelos há décadas, e muitos partem de achados arqueológicos. A Kulta-Center é uma joalheria finlandesa desde 1933 e os vende pela internet.',
    from: 'a partir de',
    cta: 'Ver a joia',
    ctaAll: 'Ver todas as joias Kalevala',
    priceNote: 'Preços verificados em {date}. O preço atual aparece na página da Kulta-Center.',
  },
  nl: {
    eyebrow: 'Fins sieraadontwerp',
    headline: 'Kalevala-sieraden van Kulta-Center',
    sub: 'Kalevala Koru maakt dezelfde modellen al decennia, en veel ervan gaan terug op archeologische vondsten. Kulta-Center is sinds 1933 een Finse juwelier en verkoopt ze online.',
    from: 'vanaf',
    cta: 'Bekijk het sieraad',
    ctaAll: 'Alle Kalevala-sieraden bekijken',
    priceNote: 'Prijzen gecontroleerd op {date}. De actuele prijs staat op de pagina van Kulta-Center.',
  },
  ja: {
    eyebrow: 'フィンランドのジュエリーデザイン',
    headline: 'Kulta-Center のカレワラ・ジュエリー',
    sub: 'カレワラ・コルは同じデザインを何十年もつくり続けており、その多くは考古学的な出土品の写しです。Kulta-Center は1933年創業のフィンランドの宝飾店で、オンラインで販売しています。',
    from: '',
    cta: 'この一点を見る',
    ctaAll: 'カレワラのジュエリーをすべて見る',
    priceNote: '価格は{date}時点のものです。最新の価格は Kulta-Center のページでご確認ください。',
  },
  'zh-CN': {
    eyebrow: '芬兰珠宝设计',
    headline: 'Kulta-Center 的 Kalevala 珠宝',
    sub: 'Kalevala Koru 几十年来一直制作同样的款式，其中不少源自考古出土文物的复刻。Kulta-Center 是 1933 年创立的芬兰珠宝店，在网上销售这些作品。',
    from: '',
    cta: '查看这件',
    ctaAll: '浏览全部 Kalevala 珠宝',
    priceNote: '价格核对于 {date}。最新价格以 Kulta-Center 页面为准。',
  },
  ko: {
    eyebrow: '핀란드 주얼리 디자인',
    headline: 'Kulta-Center의 칼레발라 주얼리',
    sub: '칼레발라 코루는 수십 년째 같은 디자인을 만들어 왔고, 상당수는 고고학 출토품을 본뜬 것입니다. Kulta-Center는 1933년에 문을 연 핀란드 보석상이며 온라인으로 판매합니다.',
    from: '',
    cta: '제품 보기',
    ctaAll: '칼레발라 주얼리 전체 보기',
    priceNote: '가격은 {date} 기준입니다. 최신 가격은 Kulta-Center 페이지에서 확인하세요.',
  },
}

export interface KalevalaRailProps {
  lang: RailLang
  /** Placement id, snake_case, no domain — the Worker injects the site.
   *  Each product appends its SKU, so clicks are attributable per piece. */
  sid: string
  variant?: 'light' | 'dark'
  /** The site's own <AffiliateDisclosure/>, if it is not footer-only there. */
  disclosure?: React.ReactNode
  /** Optional site-side bookkeeping. NOT for Umami — see the header note. */
  onCtaClick?: (key: string, sid: string, url: string) => void
  className?: string
  /** Override the section heading, e.g. a Christmas-specific line. */
  headline?: string
}

const GOLD = '#B8893A'

export default function KalevalaRail({
  lang, sid, variant = 'light', disclosure, onCtaClick, className = '', headline,
}: KalevalaRailProps) {
  const c = COPY[lang] ?? COPY.en
  const shop = SHOP_LOCALE[lang] ?? 'en'
  const dark = variant === 'dark'

  const linkFor = (dest: string, placement: string) =>
    `https://go.laplandvibes.com/go/kultacenter?sid=${encodeURIComponent(placement)}` +
    `&dest=${encodeURIComponent(dest)}`

  const fmtPrice = (n: number) =>
    new Intl.NumberFormat(lang === 'pt-BR' ? 'pt-BR' : lang, {
      style: 'currency', currency: 'EUR', maximumFractionDigits: 0,
    }).format(n)

  return (
    <section
      className={`relative overflow-hidden rounded-2xl border ${
        dark ? 'border-white/10 bg-white/[0.04]' : 'border-black/10 bg-[#FFFDF8]'
      } ${className}`}
      aria-label={`${c.headline} — ${AD_LABEL[lang] ?? 'Ad'}`}
    >
      {/* Warm gold wash, the advertiser's own accent. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-[0.18] blur-3xl"
        style={{ background: GOLD }}
      />

      <div className="relative p-6 sm:p-8">
        <div className="mb-1 flex items-center gap-2.5">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
            style={{ backgroundColor: dark ? 'rgba(184,137,58,0.18)' : 'rgba(184,137,58,0.12)' }}
          >
            <Gem className="h-4 w-4" style={{ color: GOLD }} aria-hidden="true" />
          </span>
          <span
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: dark ? '#D9B478' : '#8A5A1E' }}
          >
            {c.eyebrow}
          </span>
        </div>

        <h2
          className={`font-heading text-2xl sm:text-3xl tracking-wide leading-tight mt-3 mb-3 max-w-2xl text-balance ${
            dark ? 'text-snow' : 'text-[#1B1710]'
          }`}
        >
          {headline ?? c.headline}
        </h2>
        <p className={`text-sm sm:text-base leading-relaxed max-w-2xl ${dark ? 'text-white/70' : 'text-black/70'}`}>
          {c.sub}
        </p>

        {/* Horizontal scroll on phones, grid from sm up. overflow-x-auto keeps
            the page body from ever scrolling sideways. */}
        <ul className="mt-6 -mx-1 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 lg:grid-cols-4">
          {picks.products.map((p) => {
            // shop → English → Finnish. `urls` only ever holds store views that
            // genuinely exist (the sync drops the partner's mislabelled ones), so
            // a missing key here means that translation is not published and the
            // Finnish product page is the deepest honest link we have.
            const dest = p.urls[shop] ?? p.urls.en ?? p.urls.fi
            const placement = `${sid}_${p.sku}`
            const href = linkFor(dest, placement)
            return (
              <li key={p.sku} className="w-[62vw] max-w-[15rem] shrink-0 snap-start sm:w-auto sm:max-w-none">
                <a
                  href={href}
                  target="_blank"
                  rel="sponsored nofollow noopener"
                  onClick={() => onCtaClick?.('kultacenter', `kalevala_rail:${placement}`, href)}
                  className={`group flex h-full flex-col overflow-hidden rounded-xl border no-underline transition-all duration-200 hover:-translate-y-0.5 ${
                    dark
                      ? 'border-white/10 bg-white/[0.03] hover:border-white/25'
                      : 'border-black/[0.08] bg-white hover:border-[#B8893A]/45 hover:shadow-lg'
                  }`}
                >
                  <div className="aspect-square w-full overflow-hidden bg-white">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      decoding="async"
                      width={640}
                      height={640}
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2 p-3.5">
                    <span
                      className={`text-sm font-semibold leading-snug ${dark ? 'text-snow' : 'text-[#1B1710]'}`}
                    >
                      {p.name}
                    </span>
                    <span className="mt-auto flex items-baseline gap-1.5">
                      {c.from ? (
                        <span className={`text-[11px] ${dark ? 'text-white/50' : 'text-black/45'}`}>
                          {c.from}
                        </span>
                      ) : null}
                      <span className="text-base font-bold" style={{ color: dark ? '#D9B478' : '#8A5A1E' }}>
                        {fmtPrice(p.price)}
                      </span>
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold"
                      style={{ color: dark ? '#D9B478' : '#8A5A1E' }}
                    >
                      {c.cta}
                      <ArrowRight
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
          <a
            href={linkFor(CATEGORY_URL[shop], `${sid}_all`)}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() =>
              onCtaClick?.('kultacenter', `kalevala_rail:${sid}_all`, linkFor(CATEGORY_URL[shop], `${sid}_all`))
            }
            className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-white font-semibold no-underline shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            style={{ backgroundColor: '#8A5A1E' }}
          >
            {c.ctaAll}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>

        <p className={`mt-4 text-[11px] leading-relaxed ${dark ? 'text-white/45' : 'text-black/45'}`}>
          {c.priceNote.replace('{date}', picks.fetchedAt)}
        </p>

        {disclosure ? <div className="mt-5">{disclosure}</div> : null}
      </div>

      <span
        className="absolute bottom-3.5 right-4 z-10 inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em]"
        style={{
          backgroundColor: dark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.06)',
          color: dark ? 'rgba(255,255,255,0.65)' : 'rgba(0,0,0,0.55)',
        }}
      >
        {AD_LABEL[lang] ?? 'Ad'}
      </span>
    </section>
  )
}
