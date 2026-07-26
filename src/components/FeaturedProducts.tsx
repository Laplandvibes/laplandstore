import { Star, ArrowRight } from 'lucide-react';
import { useLang } from '../lang';
import GradientPlaceholder, { type PlaceholderTheme } from './GradientPlaceholder';

import type { Lang } from '../lang';

import enCopy, { type CopyShape } from './FeaturedProducts.copy.en';
import { useCopy } from '../i18n/useCopy';


const PRODUCTS: ReadonlyArray<{
  name: string | Record<Lang, string>;
  price: Record<Lang, string>;
  tagline: Record<Lang, string>;
  theme: PlaceholderTheme;
  img: string;
  shop: string;
  shopUrl: string;
}> = [
  {
    name: 'Marttiini Puukko',
    price: { fi: 'alk. 49 €', en: 'from €49', de: 'ab 49 €', ja: '€49 〜', es: 'desde 49 €', 'pt-BR': 'a partir de €49', 'zh-CN': '49 € 起', ko: '49 €부터', fr: 'à partir de 49 €', it: 'da 49 €', nl: 'vanaf € 49', sv: 'från 49 €' },
    tagline: {
      fi: 'Suomen tunnetuin puukko, valmistettu Rovaniemellä vuodesta 1928.',
      en: 'The best-known Finnish puukko knife, made in Rovaniemi since 1928.',
      de: 'Seit 1928: das bekannteste finnische Puukko-Messer',
      ja: '1928年創業：世界で最も知られるフィンランドのプーッコ・ナイフ',
      es: 'Desde 1928: el cuchillo puukko finlandés más reconocido',
      'pt-BR': 'Desde 1928: a faca puukko finlandesa mais reconhecida',
      'zh-CN': '始于1928年：最知名的芬兰普科刀',
      ko: '1928년부터: 가장 잘 알려진 핀란드 푸코',
      fr: 'Depuis 1928: le couteau puukko finlandais le plus reconnu',
      it: 'Dal 1928: il coltello puukko finlandese più riconoscibile',
      nl: 'Sinds 1928: het meest herkenbare Finse puukko-mes',
      sv: 'Sedan 1928: den mest välkända finska puukko-kniven',
    },
    theme: 'knives' as PlaceholderTheme,
    img: '/img/prod-marttiini.jpg',
    shop: 'Marttiini',
    shopUrl: 'https://www.marttiini.fi',
  },
  {
    name: { fi: 'Saamelaishopeakoru', en: 'Sámi Silver Jewellery', de: 'Sámi-Silberschmuck', ja: 'サーミの銀細工アクセサリー', es: 'Joyas sami de plata', 'pt-BR': 'Joias sámi de prata', 'zh-CN': '萨米银饰', ko: '사미 은세공 장신구', fr: 'Bijoux sami en argent', it: 'Gioielli sami in argento', nl: 'Sami-zilverwerk', sv: 'Samiska silversmycken' },
    price: { fi: 'alk. 79 €', en: 'from €79', de: 'ab 79 €', ja: '€79 〜', es: 'desde 79 €', 'pt-BR': 'a partir de €79', 'zh-CN': '79 € 起', ko: '79 €부터', fr: 'à partir de 79 €', it: 'da 79 €', nl: 'vanaf € 79', sv: 'från 79 €' },
    tagline: {
      fi: 'Käsintehtyjä uniikkeja koruja Inarista',
      en: 'Handcrafted, one-of-a-kind pieces from Inari',
      de: 'Handgefertigte Unikate aus Inari',
      ja: 'イナリの職人による、世界に一つだけの手作りジュエリー',
      es: 'Piezas únicas hechas a mano en Inari',
      'pt-BR': 'Peças únicas feitas à mão em Inari',
      'zh-CN': '来自伊纳里的手工独家饰品',
      ko: '이나리에서 만든 유일무이한 수공예 작품',
      fr: "Pièces uniques fabriquées à la main à Inari",
      it: 'Pezzi unici realizzati a mano a Inari',
      nl: 'Handgemaakte unieke stukken uit Inari',
      sv: 'Handgjorda, unika smycken från Enare',
    },
    theme: 'silver' as PlaceholderTheme,
    img: '/img/prod-samekki.jpg',
    shop: 'Samekki',
    shopUrl: 'https://samekki.fi',
  },
  {
    name: { fi: 'Pentik-keramiikka', en: 'Pentik ceramics', de: 'Pentik-Keramik', ja: 'Pentik(ペンティック)の陶器', es: 'Cerámica Pentik', 'pt-BR': 'Cerâmica Pentik', 'zh-CN': 'Pentik 陶瓷', ko: 'Pentik 도자기', fr: 'Céramique Pentik', it: 'Ceramiche Pentik', nl: 'Pentik-keramiek', sv: 'Pentik-keramik' },
    price: { fi: 'alk. 25 €', en: 'from €25', de: 'ab 25 €', ja: '€25 〜', es: 'desde 25 €', 'pt-BR': 'a partir de €25', 'zh-CN': '25 € 起', ko: '25 €부터', fr: 'à partir de 25 €', it: 'da 25 €', nl: 'vanaf € 25', sv: 'från 25 €' },
    tagline: {
      fi: 'Maailman pohjoisin keramiikkatehdas, Posio',
      en: "The world's northernmost ceramic factory, Posio",
      de: 'Die nördlichste Keramikmanufaktur der Welt, Posio',
      ja: '世界最北の陶器工房、ポシオ。',
      es: 'La fábrica de cerámica más al norte del mundo, en Posio',
      'pt-BR': 'A fábrica de cerâmica mais ao norte do mundo, em Posio',
      'zh-CN': '世界最北的陶瓷工厂,位于波西奥',
      ko: '세계 최북단의 도자기 공방, 포시오',
      fr: "La fabrique de céramique la plus au nord du monde, à Posio",
      it: 'La fabbrica di ceramiche più a nord del mondo, a Posio',
      nl: 'De noordelijkste keramiekfabriek ter wereld, Posio',
      sv: 'Världens nordligaste keramikfabrik, Posio',
    },
    theme: 'ceramics' as PlaceholderTheme,
    img: '/img/prod-pentik.jpg',
    shop: 'Pentik',
    shopUrl: 'https://www.pentik.com',
  },
  {
    name: { fi: 'Lapin marjaherkut', en: 'Lapland berry treats', de: 'Lappland-Beerenspezialitäten', ja: 'ラップランドのベリー製品', es: 'Delicias de bayas de Laponia', 'pt-BR': 'Delícias de frutas silvestres da Lapônia', 'zh-CN': '拉普兰浆果美食', ko: '라플란드 베리 별미', fr: 'Délices de baies de Laponie', it: 'Specialità di bacche della Lapponia', nl: 'Lapland-bessenlekkernijen', sv: 'Bärdelikatesser från Lappland' },
    price: { fi: 'alk. 12 €', en: 'from €12', de: 'ab 12 €', ja: '€12 〜', es: 'desde 12 €', 'pt-BR': 'a partir de €12', 'zh-CN': '12 € 起', ko: '12 €부터', fr: 'à partir de 12 €', it: 'da 12 €', nl: 'vanaf € 12', sv: 'från 12 €' },
    tagline: {
      fi: 'Lakka, mustikka ja puolukka. Lapin puhtaat maut.',
      en: 'Cloudberry, blueberry and lingonberry. The clean flavours of Lapland.',
      de: 'Moltebeere, Blaubeere und Preiselbeere. Reine Aromen Lapplands',
      ja: 'クラウドベリー、ブルーベリー、リンゴンベリー。ラップランドの澄んだ味わい',
      es: 'Mora ártica, arándano y arándano rojo. Sabores puros de Laponia',
      'pt-BR': 'Amora-ártica, mirtilo e oxicoco. Sabores puros da Lapônia',
      'zh-CN': '云莓、蓝莓和越橘。拉普兰的纯粹风味',
      ko: '클라우드베리, 블루베리, 링곤베리: 라플란드의 순수한 맛',
      fr: 'Chicouté, myrtille et airelle: saveurs pures de Laponie',
      it: 'Camemoro, mirtillo e mirtillo rosso: sapori puri della Lapponia',
      nl: 'Kruipbraam, bosbes en vossenbes: pure smaken van Lapland',
      sv: 'Hjortron, blåbär och lingon. Lapplands rena smaker.',
    },
    theme: 'berries' as PlaceholderTheme,
    img: '/img/prod-berries.jpg',
    shop: 'Piece of Lapland',
    shopUrl: 'https://www.pieceoflapland.fi',
  },
];

const loaders = {
  fi: () => import('./FeaturedProducts.copy.fi'),
  de: () => import('./FeaturedProducts.copy.de'),
  ja: () => import('./FeaturedProducts.copy.ja'),
  es: () => import('./FeaturedProducts.copy.es'),
  'pt-BR': () => import('./FeaturedProducts.copy.ptBR'),
  'zh-CN': () => import('./FeaturedProducts.copy.zhCN'),
  ko: () => import('./FeaturedProducts.copy.ko'),
  fr: () => import('./FeaturedProducts.copy.fr'),
  it: () => import('./FeaturedProducts.copy.it'),
  nl: () => import('./FeaturedProducts.copy.nl'),
  sv: () => import('./FeaturedProducts.copy.sv'),
} as const;

const cache: Partial<Record<import('../lang').Lang, CopyShape>> = { en: enCopy };

export default function FeaturedProducts() {
  const { lang } = useLang();
  const t = useCopy<CopyShape>(enCopy, lang, loaders, cache);

  return (
    <section id="suosittelemme" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm tracking-[0.2em] uppercase text-forest font-body font-bold">
            {t.eyebrow}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl mt-2 text-night [text-wrap:balance]">
            {t.heading}
          </h2>
          <p className="text-warm-gray mt-3 max-w-lg mx-auto [text-wrap:pretty]">
            {t.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PRODUCTS.map((p) => {
            const name = typeof p.name === 'string' ? p.name : p.name[lang];
            const price = p.price[lang];
            const tagline = p.tagline[lang];
            return (
              <a
                key={p.shop}
                href={`${p.shopUrl}?utm_source=laplandvibes&utm_medium=referral&utm_campaign=store_featured`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-2xl overflow-hidden bg-cream shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <GradientPlaceholder theme={p.theme} imgSrc={p.img} ariaLabel={name} />
                  <div className="absolute top-3 left-3 flex items-center gap-1 bg-amber text-white text-xs font-bold px-3 py-1 rounded-full shadow z-10">
                    <Star className="w-3 h-3 fill-white" /> {t.badge}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-night/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Info */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-heading text-xl text-night group-hover:text-amber transition-colors [text-wrap:balance]">
                    {name}
                  </h3>
                  <p className="text-amber font-bold text-lg mt-1">{price}</p>
                  <p className="text-warm-gray text-sm mt-2 leading-relaxed [text-wrap:pretty]">{tagline}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs text-warm-gray">
                      {t.soldBy}: <span className="font-bold text-night">{p.shop}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-amber text-xs font-bold group-hover:gap-2 transition-all">
                      {t.view} <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
