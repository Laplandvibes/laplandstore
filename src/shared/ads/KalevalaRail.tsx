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
  /** "alk." / "from". Empty string renders no qualifier at all. */
  from: string
  /** 🔴 ja/zh/ko put the "starting from" marker AFTER the number (41 €〜,
   *  41 €起, 41 €부터), where fi/en/de put it before (alk. 41 €). Rendering it
   *  in front in those three languages is not a style choice, it is wrong —
   *  which is why the first version simply left them blank, and those locales
   *  then showed a bare price that promised more precision than we have: the
   *  sync picks the CHEAPEST variant of each design, so the basket price can
   *  only go up. */
  fromAfter?: boolean
  cta: string
  ctaAll: string
  /** "Prices checked on {date}" — {date} is substituted, never hardcoded. */
  priceNote: string
  /** Kulta-Center's delivery terms, carried over from the brand card that this
   *  rail replaced on laplandstore (commit c5c209f native-reviewed them; an
   *  earlier version had claimed free shipping across Europe, which was wrong).
   *  Removing an ad unit must not silently remove a correction made to it. */
  shipping: string
}

// Every fact in `sub` is read from a primary source, not summarised from memory:
//   • 1937, 40 pieces, replicas, National Museum collections
//     → kalevala.fi/pages/kalevala-korun-tarina (luettu 2026-09-03): "Rahaa
//       päätettiin kerätä valmistamalla muinaiskorujen jäljennöksiä.
//       Kansallismuseon kokoelmista valittiin 40 korua…" first shown 8.12.1937.
//   • "kotimainen perheyritys ja kultasepänliike … vuonna 1933"
//     → kulta-center.com/fi front page, verbatim.
// 🔴 Non-Finnish locales say FINNISH National Museum on purpose: "the National
// Museum" alone means a different building in every reader's country.
const COPY: Record<RailLang, RailCopy> = {
  fi: {
    eyebrow: 'Suomalaista korumuotoilua',
    headline: 'Kalevala-korut Kulta-Centeristä',
    sub: 'Kalevala Koru syntyi 1937, kun Kansallismuseon kokoelmista valittiin 40 muinaiskorua ja niistä tehtiin jäljennöksiä. Kulta-Center on kotimainen perheyritys ja kultasepänliike vuodesta 1933, ja myy Kalevalan koruja verkosta.',
    from: 'alk.',
    cta: 'Katso koru',
    ctaAll: 'Selaa kaikkia Kalevala-koruja',
    priceNote: 'Hinnat tarkistettu {date}. Ajantasainen hinta näkyy Kulta-Centerin sivulla.',
    shipping: "Ilmainen toimitus Suomessa yli 50 €; ulkomaille toimituskulut sovitaan Kulta-Centerin kanssa erikseen.",
  },
  en: {
    eyebrow: 'Finnish jewellery design',
    headline: 'Kalevala jewellery from Kulta-Center',
    sub: 'Kalevala Koru began in 1937, when 40 ancient pieces were picked from the collections of the Finnish National Museum and made as replicas. Kulta-Center is a Finnish family jeweller trading since 1933 and sells them online.',
    from: 'from',
    cta: 'View piece',
    ctaAll: 'Browse all Kalevala jewellery',
    priceNote: 'Prices checked {date}. The current price is shown on Kulta-Center’s own page.',
    shipping: "Free delivery within Finland over €50; for orders abroad, shipping is agreed with Kulta-Center separately.",
  },
  sv: {
    eyebrow: 'Finsk smyckedesign',
    headline: 'Kalevala-smycken från Kulta-Center',
    sub: 'Kalevala Koru började 1937, när 40 forntida smycken valdes ur Finlands nationalmuseums samlingar och tillverkades som kopior. Kulta-Center är en finsk familjeägd guldsmedsbutik sedan 1933 och säljer dem på nätet.',
    from: 'fr.',
    cta: 'Se smycket',
    ctaAll: 'Bläddra bland alla Kalevala-smycken',
    priceNote: 'Priserna kontrollerade {date}. Aktuellt pris visas på Kulta-Centers egen sida.',
    shipping: "Fri frakt inom Finland över 50 €; för beställningar utomlands avtalas frakten separat med Kulta-Center.",
  },
  de: {
    eyebrow: 'Finnisches Schmuckdesign',
    headline: 'Kalevala-Schmuck von Kulta-Center',
    sub: 'Kalevala Koru begann 1937: 40 vorgeschichtliche Schmuckstücke aus den Sammlungen des Finnischen Nationalmuseums wurden als Repliken gefertigt. Kulta-Center ist seit 1933 ein finnischer Familienjuwelier und verkauft sie online.',
    from: 'ab',
    cta: 'Schmuckstück ansehen',
    ctaAll: 'Allen Kalevala-Schmuck ansehen',
    priceNote: 'Preise geprüft am {date}. Den aktuellen Preis zeigt die Seite von Kulta-Center.',
    shipping: "Versandkostenfrei innerhalb Finnlands ab 50 €; für Bestellungen ins Ausland wird der Versand separat mit Kulta-Center vereinbart.",
  },
  fr: {
    eyebrow: 'Design de bijoux finlandais',
    headline: 'Bijoux Kalevala de Kulta-Center',
    sub: 'Kalevala Koru est né en 1937 : 40 bijoux anciens choisis dans les collections du Musée national finlandais ont été reproduits. Kulta-Center est un bijoutier familial finlandais depuis 1933 et les vend en ligne.',
    from: 'dès',
    cta: 'Voir le bijou',
    ctaAll: 'Voir tous les bijoux Kalevala',
    priceNote: 'Prix vérifiés le {date}. Le prix actuel figure sur la page de Kulta-Center.',
    shipping: "Livraison gratuite en Finlande à partir de 50 € ; pour l’étranger, les frais sont convenus directement avec Kulta-Center.",
  },
  it: {
    eyebrow: 'Design di gioielli finlandese',
    headline: 'Gioielli Kalevala da Kulta-Center',
    sub: 'Kalevala Koru nasce nel 1937: 40 gioielli antichi scelti dalle collezioni del Museo nazionale finlandese furono riprodotti come copie. Kulta-Center è una gioielleria di famiglia finlandese dal 1933 e li vende online.',
    from: 'da',
    cta: 'Vedi il gioiello',
    ctaAll: 'Sfoglia tutti i gioielli Kalevala',
    priceNote: 'Prezzi verificati il {date}. Il prezzo aggiornato è sulla pagina di Kulta-Center.',
    shipping: "Spedizione gratuita in Finlandia sopra i 50 €; per l’estero le spese si concordano direttamente con Kulta-Center.",
  },
  es: {
    eyebrow: 'Diseño de joyería finlandesa',
    headline: 'Joyas Kalevala de Kulta-Center',
    sub: 'Kalevala Koru nació en 1937: se eligieron 40 joyas antiguas de las colecciones del Museo Nacional de Finlandia y se hicieron réplicas. Kulta-Center es una joyería familiar finlandesa desde 1933 y las vende en línea.',
    from: 'desde',
    cta: 'Ver la joya',
    ctaAll: 'Ver todas las joyas Kalevala',
    priceNote: 'Precios comprobados el {date}. El precio actual aparece en la página de Kulta-Center.',
    shipping: "Envío gratuito dentro de Finlandia a partir de 50 €; para pedidos al extranjero, el envío se acuerda directamente con Kulta-Center.",
  },
  'pt-BR': {
    eyebrow: 'Design de joias finlandês',
    headline: 'Joias Kalevala da Kulta-Center',
    sub: 'A Kalevala Koru nasceu em 1937: 40 joias antigas foram escolhidas nas coleções do Museu Nacional da Finlândia e reproduzidas como réplicas. A Kulta-Center é uma joalheria familiar finlandesa desde 1933 e as vende pela internet.',
    from: 'a partir de',
    cta: 'Ver a joia',
    ctaAll: 'Ver todas as joias Kalevala',
    priceNote: 'Preços verificados em {date}. O preço atual aparece na página da Kulta-Center.',
    shipping: "Frete grátis na Finlândia acima de 50 €; para pedidos ao exterior, o frete é combinado diretamente com a Kulta-Center.",
  },
  nl: {
    eyebrow: 'Fins sieraadontwerp',
    headline: 'Kalevala-sieraden van Kulta-Center',
    sub: 'Kalevala Koru begon in 1937: 40 oude sieraden uit de collecties van het Fins Nationaal Museum werden als replica’s gemaakt. Kulta-Center is sinds 1933 een Finse familiejuwelier en verkoopt ze online.',
    from: 'vanaf',
    cta: 'Bekijk het sieraad',
    ctaAll: 'Alle Kalevala-sieraden bekijken',
    priceNote: 'Prijzen gecontroleerd op {date}. De actuele prijs staat op de pagina van Kulta-Center.',
    shipping: "Gratis verzending binnen Finland boven € 50; voor bestellingen naar het buitenland wordt de verzending apart met Kulta-Center afgesproken.",
  },
  ja: {
    eyebrow: 'フィンランドのジュエリーデザイン',
    headline: 'Kulta-Center のカレワラ・ジュエリー',
    sub: 'カレワラ・コルは1937年、フィンランド国立博物館の収蔵品から選ばれた40点の古代装身具を復刻することから始まりました。Kulta-Center は1933年から続くフィンランドの家族経営の宝飾店で、オンラインで販売しています。',
    from: '〜',
    fromAfter: true,
    cta: 'この一点を見る',
    ctaAll: 'カレワラのジュエリーをすべて見る',
    priceNote: '価格は{date}時点のものです。最新の価格は Kulta-Center のページでご確認ください。',
    shipping: "フィンランド国内は50ユーロ以上で送料無料。海外への発送は Kulta-Center と個別に取り決めます。",
  },
  'zh-CN': {
    eyebrow: '芬兰珠宝设计',
    headline: 'Kulta-Center 的 Kalevala 珠宝',
    sub: 'Kalevala Koru 始于 1937 年：从芬兰国家博物馆的藏品中选出 40 件古代首饰，复刻成可以佩戴的珠宝。Kulta-Center 是 1933 年开业的芬兰家族珠宝店，在网上销售这些作品。',
    from: '起',
    fromAfter: true,
    cta: '查看这件',
    ctaAll: '浏览全部 Kalevala 珠宝',
    priceNote: '价格核对于 {date}。最新价格以 Kulta-Center 页面为准。',
    shipping: "芬兰境内满 50 欧元免运费；寄往国外的运费需与 Kulta-Center 单独商定。",
  },
  ko: {
    eyebrow: '핀란드 주얼리 디자인',
    headline: 'Kulta-Center의 칼레발라 주얼리',
    sub: '칼레발라 코루는 1937년, 핀란드 국립박물관 소장품에서 고른 고대 장신구 40점을 복제하면서 시작됐습니다. Kulta-Center는 1933년부터 이어온 핀란드 가족 보석상이며 온라인으로 판매합니다.',
    from: '부터',
    fromAfter: true,
    cta: '제품 보기',
    ctaAll: '칼레발라 주얼리 전체 보기',
    priceNote: '가격은 {date} 기준입니다. 최신 가격은 Kulta-Center 페이지에서 확인하세요.',
    shipping: "핀란드 국내는 50유로 이상 무료 배송이며, 해외 배송비는 Kulta-Center와 개별적으로 협의합니다.",
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

      <div className="relative p-5 sm:p-6">
        {/* Header is ONE row on desktop: identity left, "browse all" right.
            🔴 Vesa 2026-09-04: "tuntuu aika massiivisilta nämä mainokset
            kooltaan". It was: eyebrow row + 30px heading + 3-line paragraph +
            a 2×4 product GRID + a full pill button + fine print ≈ 1150 px, i.e.
            more than a phone screen for one advertiser. An ad unit taller than
            the article it sits in stops reading as an ad and starts reading as
            the site — which is exactly what the network rule forbids
            ("proportional size, NOT oversized vs body"). */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <div className="flex items-center gap-2">
            <Gem className="h-3.5 w-3.5 shrink-0" style={{ color: GOLD }} aria-hidden="true" />
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: dark ? '#D9B478' : '#8A5A1E' }}
            >
              {c.eyebrow}
            </span>
          </div>
          <a
            href={linkFor(CATEGORY_URL[shop], `${sid}_all`)}
            target="_blank"
            rel="sponsored nofollow noopener"
            onClick={() =>
              onCtaClick?.('kultacenter', `kalevala_rail:${sid}_all`, linkFor(CATEGORY_URL[shop], `${sid}_all`))
            }
            className="group inline-flex items-center gap-1 text-xs font-semibold no-underline underline-offset-4 hover:underline"
            style={{ color: dark ? '#D9B478' : '#8A5A1E' }}
          >
            {c.ctaAll}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
        </div>

        <h2
          className={`font-heading text-xl sm:text-2xl tracking-wide leading-tight mt-1.5 ${
            dark ? 'text-snow' : 'text-[#1B1710]'
          }`}
        >
          {headline ?? c.headline}
        </h2>
        <p
          className={`mt-1.5 text-[13px] leading-snug max-w-2xl ${dark ? 'text-white/65' : 'text-black/65'}`}
        >
          {c.sub}
        </p>

        {/* ONE row at every width, scrolled sideways — not a grid that grows
            downward. All eight pieces stay reachable, the unit stays ~one third
            of its old height, and it reads as the carousel it is. */}
        <ul className="mt-4 -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2">
          {picks.products.map((p) => {
            // shop → English → Finnish. `urls` only ever holds store views that
            // genuinely exist (the sync drops the partner's mislabelled ones), so
            // a missing key here means that translation is not published and the
            // Finnish product page is the deepest honest link we have.
            const dest = p.urls[shop] ?? p.urls.en ?? p.urls.fi
            const placement = `${sid}_${p.sku}`
            const href = linkFor(dest, placement)
            return (
              <li key={p.sku} className="w-[46vw] max-w-[10.5rem] shrink-0 snap-start sm:w-[10.5rem]">
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
                  {/* Two lines, not three: the per-card "Katso koru →" was the
                      same promise the whole card already makes by being a link,
                      and eight copies of it cost real height for nothing. */}
                  <div className="flex flex-1 flex-col gap-1 p-2.5">
                    <span
                      className={`line-clamp-2 text-[12px] font-semibold leading-snug ${
                        dark ? 'text-snow' : 'text-[#1B1710]'
                      }`}
                    >
                      {p.name}
                    </span>
                    <span className="mt-auto flex items-baseline gap-1">
                      {c.from && !c.fromAfter ? (
                        <span className={`text-[10px] ${dark ? 'text-white/50' : 'text-black/45'}`}>
                          {c.from}
                        </span>
                      ) : null}
                      <span className="text-[13px] font-bold" style={{ color: dark ? '#D9B478' : '#8A5A1E' }}>
                        {fmtPrice(p.price)}
                      </span>
                      {c.from && c.fromAfter ? (
                        <span className={`text-[10px] ${dark ? 'text-white/50' : 'text-black/45'}`}>
                          {c.from}
                        </span>
                      ) : null}
                    </span>
                  </div>
                </a>
              </li>
            )
          })}
        </ul>

        {/* The full-width pill CTA is gone — the same link now sits in the
            header row, where it costs no vertical space. Fine print carries the
            price date AND the delivery terms the removed brand card used to
            state; both were native-reviewed (commit c5c209f) and must not be
            lost just because the card they lived on was taken away. */}
        <p className={`mt-3 text-[11px] leading-snug ${dark ? 'text-white/45' : 'text-black/45'}`}>
          {c.priceNote.replace('{date}', picks.fetchedAt)} {c.shipping}
        </p>

        {disclosure ? <div className="mt-3">{disclosure}</div> : null}
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
