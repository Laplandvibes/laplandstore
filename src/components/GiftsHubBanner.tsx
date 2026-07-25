import { Sparkles, ArrowRight } from 'lucide-react';
import { useLang } from '../lang';

const COPY = {
  fi: {
    eyebrow: 'Tulossa',
    heading: 'Oma verkkokauppa Lapin tuotteille',
    body:
      'Rakennamme omaa LaplandVibes-verkkokauppaa, joka kokoaa lappilaisten yrittäjien tuotteet yhteen paikkaan. Sillä välin jokainen tämän sivun linkki vie suoraan paikallisen putiikin sivulle.',
    cta: 'Vilkaise laplandgifts.com',
  },
  en: {
    eyebrow: 'Coming soon',
    heading: 'A LaplandVibes online store, in the works',
    body:
      'We are building a LaplandVibes online store that gathers Lapland-based makers under one roof. Until it opens, every link here goes straight to a local boutique.',
    cta: 'Peek at laplandgifts.com',
  },
  de: {
    eyebrow: 'In Vorbereitung',
    heading: 'Ein eigener Online-Shop für Lappland-Produkte',
    body:
      'Ein eigener LaplandVibes-Online-Shop wird derzeit aufgebaut, eine Plattform, die Hersteller aus Lappland bündelt. In der Zwischenzeit führt jeder Link hier direkt zu einer lokalen Boutique.',
    cta: 'laplandgifts.com ansehen',
  },

  ja: {
    eyebrow: '近日公開',
    heading: 'LaplandVibes自社オンラインショップ、準備中',
    body:
      'LaplandVibes自社運営のオンラインショップを構築中です、ラップランドの職人や作り手を一つの屋根の下に集めるプラットフォームです。それまでは、当サイトのリンクはすべて、現地のブティックへ直接ご案内します。',
    cta: 'laplandgifts.com を覗く',
  },
  es: {
    eyebrow: 'Próximamente',
    heading: 'Una tienda en línea propia para los productos de Laponia',
    body:
      'Estamos construyendo una tienda en línea propia de LaplandVibes, una plataforma que reúne a los productores de Laponia bajo un mismo techo. Mientras tanto, cada enlace de esta página le lleva directamente a una boutique local.',
    cta: 'Echar un vistazo a laplandgifts.com',
  },
  'pt-BR': {
    eyebrow: 'Em breve',
    heading: 'Uma loja online própria para produtos da Lapônia',
    body:
      'A loja online própria do LaplandVibes está sendo construída, uma única plataforma que reúne os produtores da Lapônia. Até lá, cada link daqui leva você diretamente a uma boutique local.',
    cta: 'Conferir laplandgifts.com',
  },
  'zh-CN': {
    eyebrow: '即将上线',
    heading: 'LaplandVibes 自营线上商店,正在筹备中',
    body:
      '我们正在打造 LaplandVibes 自营的线上商店，一个把拉普兰本地工匠汇聚一堂的平台。在此之前,本页面的每个链接都会直接引导您到当地的精品店。',
    cta: '看看 laplandgifts.com',
  },
  ko: {
    eyebrow: '곧 오픈',
    heading: 'LaplandVibes 자체 온라인 상점, 준비 중',
    body:
      'LaplandVibes가 직접 운영하는 온라인 상점을 준비하고 있습니다, 라플란드의 장인과 만드는 이들을 하나의 플랫폼에 모으는 곳입니다. 그동안에는 이 페이지의 모든 링크가 현지 부티크로 바로 연결됩니다.',
    cta: 'laplandgifts.com 미리보기',
  },
  fr: {
    eyebrow: 'Bientôt',
    heading: 'Une boutique en ligne LaplandVibes en préparation',
    body:
      "Nous construisons une boutique en ligne propre à LaplandVibes, une plateforme qui rassemblera les artisans de Laponie sous un même toit. En attendant, chaque lien de cette page renvoie directement à une boutique locale.",
    cta: 'Jeter un œil à laplandgifts.com',
  },
  it: {
    eyebrow: 'Prossimamente',
    heading: 'Un negozio online LaplandVibes in arrivo',
    body:
      "Stiamo costruendo un negozio online di proprietà di LaplandVibes, una piattaforma che riunisce gli artigiani della Lapponia sotto un unico tetto. Nel frattempo, ogni link in questa pagina porta direttamente a una boutique locale.",
    cta: 'Dare un\'occhiata a laplandgifts.com',
  },
  nl: {
    eyebrow: 'Binnenkort',
    heading: 'Een eigen LaplandVibes-online winkel in de maak',
    body:
      'We bouwen een eigen LaplandVibes-online winkel, één platform dat de Laplandse makers samenbrengt onder één dak. Tot die tijd leidt elke link op deze pagina rechtstreeks naar een lokale boutique.',
    cta: 'Een kijkje nemen op laplandgifts.com',
  },
  sv: {
    eyebrow: 'Kommer snart',
    heading: 'En egen webbutik för produkter från Lappland',
    body:
      'Vi bygger en egen LaplandVibes-webbutik som samlar tillverkare från Lappland på ett ställe. Tills den öppnar leder varje länk här direkt till en lokal butik.',
    cta: 'Ta en titt på laplandgifts.com',
  },
} as const;

export default function GiftsHubBanner() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section className="px-4 py-12 sm:py-16 bg-cream">
      <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative shadow-md">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, #0F172A 0%, #1e293b 45%, #064e3b 100%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background:
              'radial-gradient(circle at 20% 30%, rgba(217,119,6,0.40), transparent 55%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.25), transparent 55%)',
          }}
        />

        <div className="relative px-6 sm:px-10 py-10 sm:py-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-light text-xs font-bold tracking-[0.25em] uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              {t.eyebrow}
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl text-white mt-3 leading-tight [text-wrap:balance]">
              {t.heading}
            </h2>
            <p className="text-white/75 text-base mt-4 leading-relaxed max-w-xl [text-wrap:pretty]">
              {t.body}
            </p>
          </div>

          <a
            href="https://laplandgifts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-amber text-white font-bold rounded-full hover:bg-amber-light transition-colors shadow-lg whitespace-nowrap min-h-[44px]"
          >
            {t.cta}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
