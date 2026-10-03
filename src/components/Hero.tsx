import { ChevronDown, ShoppingBag, Gift, Sparkles } from 'lucide-react';
import { useLang } from '../lang';
import { BOUTIQUES } from '../data/boutiques.generated';
import GradientPlaceholder from './GradientPlaceholder';

import enCopy, { type CopyShape } from './Hero.copy.en';
import { useCopy } from '../i18n/useCopy';


const loaders = {
  fi: () => import('./Hero.copy.fi'),
  de: () => import('./Hero.copy.de'),
  ja: () => import('./Hero.copy.ja'),
  es: () => import('./Hero.copy.es'),
  'pt-BR': () => import('./Hero.copy.ptBR'),
  'zh-CN': () => import('./Hero.copy.zhCN'),
  ko: () => import('./Hero.copy.ko'),
  fr: () => import('./Hero.copy.fr'),
  it: () => import('./Hero.copy.it'),
  nl: () => import('./Hero.copy.nl'),
  sv: () => import('./Hero.copy.sv'),
} as const;

const cache: Partial<Record<import('../lang').Lang, CopyShape>> = { en: enCopy };

/* ── Otsikko kahdella rivillä jokaisella kielellä tietokoneella (Vesa 3.10.2026: "tehdään turhaan kolmirivisiä") ──
 * Mitattu livenä 3.10. (12 kieltä × 1280/1536/1920): hero-h1 3–4 riviä de/fr/nl/ko/ja ("Ramenez un / morceau de /
 * Laponie chez vous", "라플란드의 / 한 조각을 집으 / 로"). Koko kasvoi näytön mukana (136–163 px), palsta pysyi
 * 992 px:ssä. Teksti on keskitetty ja peite tasainen vaakasuunnassa, joten palsta levenee xl:llä (max-w-6xl), ja
 * sm:stä ylöspäin koko = min(suunniteltu, 100cqi / pidemmän rivin em-arvio). Malli: hubin Hero.tsx (cadea06). */
const CJK_CHAR = /[぀-ヿ㐀-鿿가-힯＀-￯]/;
/** Rivin leveysarvio em-yksiköinä: Bebas Neuen versaali ~0,36–0,39 em, arvio 0,4 jättää varaa; CJK-merkki 1,05 em;
 *  tracking-[0.01em] lisää 0,01 em jokaiseen merkkiin. */
const emWidth = (s: string): number =>
  [...s].reduce((w, ch) => w + 0.01 + (CJK_CHAR.test(ch) ? 1.05 : ch === ' ' ? 0.25 : 0.4), 0);

export default function Hero() {
  const { lang } = useLang();
  const t = useCopy<CopyShape>(enCopy, lang, loaders, cache);
  const h1Em = Math.max(emWidth(t.titleA), emWidth(`${t.titleHi}${t.titleB}`));
  const cjk = CJK_CHAR.test(t.titleA);

  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden text-white">
      {/* Background — warm wooden crafts / Lapland market (placeholder until AI hero image generated) */}
      <GradientPlaceholder
        theme="cabin"
        showIcon={false}
        imgSrc="/img/hero-market.jpg"
        imgLoading="eager"
        aiGenerated
        ariaLabel={
          lang === 'fi'
            ? 'Puisia kuksia, punaisia marjahillopurkkeja, villalapaset ja palava lyhty pöydällä hirsimökissä'
            : lang === 'de'
            ? 'Hölzerne Kuksa-Becher, Gläser mit roter Beerenmarmelade, Wollhandschuhe und eine brennende Laterne auf einem Tisch in einer Blockhütte'
            : lang === 'ja'
            ? 'ログキャビンのテーブルに並ぶ木製のククサ、赤いベリージャムの瓶、ウールのミトン、灯ったランタン'
            : lang === 'es'
            ? 'Tazas kuksa de madera, tarros de mermelada de bayas rojas, manoplas de lana y un farol encendido sobre una mesa en una cabaña de troncos'
            : lang === 'pt-BR'
            ? 'Canecas kuksa de madeira, potes de geleia de frutas vermelhas, luvas de lã e uma lanterna acesa sobre uma mesa em uma cabana de toras'
            : lang === 'zh-CN'
            ? '原木小屋桌上的木制库克萨杯、红色浆果果酱罐、羊毛连指手套和一盏点亮的提灯'
            : lang === 'ko'
            ? '통나무집 탁자 위의 나무 쿡사 컵, 붉은 베리 잼 병, 양모 벙어리장갑과 불 켜진 랜턴'
            : lang === 'fr'
            ? 'Des tasses kuksa en bois, des pots de confiture de baies rouges, des moufles en laine et une lanterne allumée sur une table dans un chalet en rondins'
            : lang === 'it'
            ? 'Tazze kuksa di legno, vasetti di marmellata di bacche rosse, muffole di lana e una lanterna accesa su un tavolo in una baita di tronchi'
            : lang === 'nl'
            ? 'Houten kuksa-bekers, potten met rode bessenjam, wollen wanten en een brandende lantaarn op een tafel in een blokhut'
            : lang === 'sv'
            ? 'Kåsor av trä, burkar med röd bärsylt, vantar av ull och en tänd lykta på ett bord i en timmerstuga'
            : 'Wooden kuksa cups, jars of red berry jam, woollen mittens and a lit lantern on a table in a log cabin'
        }
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(15,23,42,0.88) 0%, rgba(15,23,42,0.72) 45%, rgba(15,23,42,0.56) 100%)',
        }}
      />

      {/* Animated snow-like particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-amber-light/20"
            style={{
              width: `${4 + Math.random() * 6}px`,
              height: `${4 + Math.random() * 6}px`,
              left: `${Math.random() * 100}%`,
              top: `-10%`,
              animation: `fall ${8 + Math.random() * 12}s linear ${Math.random() * 8}s infinite`,
            }}
          />
        ))}
      </div>

      {/* w-full: sarakeflexin items-center tekisi palstasta sisällön levyisen, ja @container (100cqi) tarvitsee
          kiinteän leveyden. Palsta levenee xl:llä 1024 → 1152 px vain otsikon hyväksi: ingressillä, merkeillä ja
          napeilla on omat leveytensä. */}
      <div className="@container relative z-10 text-center px-4 w-full max-w-5xl xl:max-w-6xl mx-auto">
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-7">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-black/45 backdrop-blur-sm border border-amber/40 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-amber-light">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {t.badge1(BOUTIQUES.length)}
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-black/45 backdrop-blur-sm border border-white/25 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-white/80">
            <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {t.badge2}
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-black/45 backdrop-blur-sm border border-white/25 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-white/80">
            <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {t.badge3}
          </span>
        </div>

        {/* Title — big, emotional */}
        <h1 // Otsikko on heron suurin elementti selvällä erolla (Vesa 5.9.: "kaikki muu
        // ympärillä isompaa"): 60 px kapealla, 136 px leveällä. Varjo on kaksi
        // kevyttä kerrosta, ei mustaa sumua — scrim hoitaa kontrastin.
        // Puhelin (< 640) pitää kiinteän koon; sm+ = min(suunniteltu --h1-max, palstaan mahtuva). ja/zh/ko:
        // keep-all, ettei rivi katkea kesken sanan ("집으 / 로").
        className={`font-heading text-[3.75rem] sm:[--h1-max:4.5rem] md:[--h1-max:6rem] lg:[--h1-max:7.5rem] xl:[--h1-max:clamp(136px,2.125vw_+_108.8px,163.2px)] sm:[font-size:min(var(--h1-max),calc(100cqi/var(--h1-em)))] leading-[0.9] tracking-[0.01em] mb-4 sm:mb-5 [text-shadow:0_1px_1px_rgba(0,0,0,0.35),0_10px_32px_rgba(0,0,0,0.45)] [text-wrap:balance] ${cjk ? '[word-break:keep-all] [overflow-wrap:anywhere]' : ''}`}
        style={{ ['--h1-em' as string]: h1Em.toFixed(2) }}>
          {t.titleA}
          <br />
          <span className="text-amber-light">{t.titleHi}</span>{t.titleB}
        </h1>

        <p className="text-[15px] sm:text-lg md:text-xl text-white/90 font-body mt-3 sm:mt-4 max-w-xl md:max-w-2xl xl:max-w-4xl mx-auto leading-relaxed [text-shadow:0_1px_2px_rgba(0,0,0,0.5)] [text-wrap:pretty] xl:text-2xl">
          {/* Välilyönti sub1+sub2-saumaan: <sm piilotettu <br> liitti lauseet
              yhteen ilman väliä ("purkissa.Jokaisella") kaikilla kielillä. */}
          {t.sub1}{' '}
          <br className="hidden sm:block" />
          {t.sub2}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-9">
          <a
            href="#putiikit"
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-amber text-night font-bold rounded-full hover:bg-amber-light hover:scale-[1.03] transition-all duration-300 text-[15px] sm:text-base shadow-lg shadow-black/30"
          >
            <ShoppingBag className="w-5 h-5" />
            {t.cta1}
          </a>
          <a
            href="#herkut"
            className="inline-flex items-center gap-2 px-5 sm:px-7 py-2.5 sm:py-3 border border-white/45 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-[15px] sm:text-base backdrop-blur-sm"
          >
            {t.cta2}
          </a>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-amber-light/50" />
      </div>

      <style>{`
        @keyframes fall {
          0% { transform: translateY(-10vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
