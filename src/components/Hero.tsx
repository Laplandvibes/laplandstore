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

export default function Hero() {
  const { lang } = useLang();
  const t = useCopy<CopyShape>(enCopy, lang, loaders, cache);

  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center overflow-hidden text-white">
      {/* Background — warm wooden crafts / Lapland market (placeholder until AI hero image generated) */}
      <GradientPlaceholder
        theme="cabin"
        showIcon={false}
        imgSrc="/img/hero-market.jpg"
        imgLoading="eager"
        ariaLabel={
          lang === 'fi'
            ? 'Lappilainen käsityömarkkina'
            : lang === 'de'
            ? 'Ein Handwerksmarkt in Lappland'
            : lang === 'ja'
            ? 'ラップランドの工芸品マーケット'
            : lang === 'es'
            ? 'Un mercado artesanal de Laponia'
            : lang === 'pt-BR'
            ? 'Um mercado artesanal da Lapônia'
            : lang === 'zh-CN'
            ? '拉普兰手工艺品市场'
            : lang === 'ko'
            ? '라플란드 공예품 시장'
            : lang === 'fr'
            ? 'Un marché artisanal en Laponie'
            : lang === 'it'
            ? 'Un mercato artigianale in Lapponia'
            : lang === 'nl'
            ? 'Een Laplandse ambachtenmarkt'
            : 'A Lapland artisan market'
        }
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(15,23,42,0.80) 0%, rgba(15,23,42,0.42) 50%, rgba(15,23,42,0.30) 100%)',
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

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-amber/20 backdrop-blur-sm border border-amber/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-amber-light">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {t.badge1(BOUTIQUES.length)}
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-white/80">
            <Gift className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {t.badge2}
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-xs font-bold text-white/80">
            <ShoppingBag className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> {t.badge3}
          </span>
        </div>

        {/* Title — big, emotional */}
        <h1 className="font-heading text-3xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-wide mb-4 sm:mb-6 drop-shadow-[0_2px_18px_rgba(0,0,0,0.95)] [text-wrap:balance]">
          {t.titleA}
          <br />
          <span className="text-amber-light">{t.titleHi}</span>{t.titleB}
        </h1>

        <p className="text-sm sm:text-xl text-white/90 font-body mt-3 sm:mt-4 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] [text-wrap:pretty]">
          {/* Välilyönti sub1+sub2-saumaan: <sm piilotettu <br> liitti lauseet
              yhteen ilman väliä ("purkissa.Jokaisella") kaikilla kielillä. */}
          {t.sub1}{' '}
          <br className="hidden sm:block" />
          {t.sub2}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <a
            href="#putiikit"
            className="group inline-flex items-center gap-2 px-7 sm:px-9 py-3 sm:py-4 bg-amber text-white font-black rounded-full hover:bg-amber-light hover:scale-105 transition-all duration-300 text-base sm:text-lg shadow-2xl"
          >
            <ShoppingBag className="w-5 h-5" />
            {t.cta1}
          </a>
          <a
            href="#herkut"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-base sm:text-lg backdrop-blur-sm"
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
