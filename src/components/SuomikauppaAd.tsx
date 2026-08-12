import { Globe, Package, Truck } from 'lucide-react';
import ProductBrandAd, {
  type ProductAdBrand,
  type ProductAdCopy,
  type ProductAdShot,
} from './ProductBrandAd';
import { SUOMIKAUPPA } from '../lib/affiliate';

/**
 * Real Marimekko Unikko photography from the shop's own catalogue, read
 * 2026-08-10, all in stock. Suomikauppa's Daisycon programme ships a product
 * feed, which is what clears its imagery for affiliate use (same basis as the
 * Metsola card on laplandkids).
 *
 * Unikko earns the stage on merit: it is the one Finnish print a visitor
 * recognises without being told, and Marimekko is a brand no affiliate network
 * we are in has ever offered us. Suomikauppa is how we finally reach it.
 */
const SK_SHOTS: ProductAdShot[] = [
  {
    img: '/img/partners/suomikauppa/unikko-cosmetic-bag.jpg',
    alt: {
      en: 'Marimekko Kaika Mini Unikko cosmetic bag in red and white',
      fi: 'Marimekko Kaika Mini Unikko -kosmetiikkalaukku puna-valkoisena',
      de: 'Marimekko Kaika Mini Unikko Kosmetiktasche in Rot und Weiß',
      ja: 'マリメッコ Kaika ミニ ウニッコ コスメポーチ（赤・白）',
      es: 'Neceser Marimekko Kaika Mini Unikko en rojo y blanco',
      'pt-BR': 'Necessaire Marimekko Kaika Mini Unikko em vermelho e branco',
      'zh-CN': 'Marimekko Kaika Mini Unikko 化妆包,红白配色',
      ko: '마리메꼬 카이카 미니 우니꼬 파우치, 레드 화이트',
      fr: 'Trousse Marimekko Kaika Mini Unikko rouge et blanc',
      it: 'Pochette Marimekko Kaika Mini Unikko rossa e bianca',
      nl: 'Marimekko Kaika Mini Unikko toilettas in rood en wit',
      sv: 'Marimekko Kaika Mini Unikko necessär i rött och vitt',
    },
  },
  {
    img: '/img/partners/suomikauppa/unikko-crossbody.jpg',
    alt: {
      en: 'Marimekko Neat Crossbody Unikko shoulder bag in blue',
      fi: 'Marimekko Neat Crossbody Unikko -olkalaukku sinisenä',
      de: 'Marimekko Neat Crossbody Unikko Umhängetasche in Blau',
      ja: 'マリメッコ Neat クロスボディ ウニッコ ショルダーバッグ（ブルー）',
      es: 'Bolso bandolera Marimekko Neat Crossbody Unikko en azul',
      'pt-BR': 'Bolsa transversal Marimekko Neat Crossbody Unikko em azul',
      'zh-CN': 'Marimekko Neat Crossbody Unikko 斜挎包,蓝色',
      ko: '마리메꼬 니트 크로스바디 우니꼬 숄더백, 블루',
      fr: 'Sac bandoulière Marimekko Neat Crossbody Unikko bleu',
      it: 'Borsa a tracolla Marimekko Neat Crossbody Unikko blu',
      nl: 'Marimekko Neat Crossbody Unikko schoudertas in blauw',
      sv: 'Marimekko Neat Crossbody Unikko axelväska i blått',
    },
  },
  {
    img: '/img/partners/suomikauppa/unikko-vilja-bag.jpg',
    alt: {
      en: 'Marimekko Vilja Mini Unikko cosmetic bag in orange and pink',
      fi: 'Marimekko Vilja Mini Unikko -kosmetiikkalaukku oranssi-pinkkinä',
      de: 'Marimekko Vilja Mini Unikko Kosmetiktasche in Orange und Pink',
      ja: 'マリメッコ Vilja ミニ ウニッコ コスメポーチ（オレンジ・ピンク）',
      es: 'Neceser Marimekko Vilja Mini Unikko en naranja y rosa',
      'pt-BR': 'Necessaire Marimekko Vilja Mini Unikko em laranja e rosa',
      'zh-CN': 'Marimekko Vilja Mini Unikko 化妆包,橙粉配色',
      ko: '마리메꼬 빌야 미니 우니꼬 파우치, 오렌지 핑크',
      fr: 'Trousse Marimekko Vilja Mini Unikko orange et rose',
      it: 'Pochette Marimekko Vilja Mini Unikko arancione e rosa',
      nl: 'Marimekko Vilja Mini Unikko toilettas in oranje en roze',
      sv: 'Marimekko Vilja Mini Unikko necessär i orange och rosa',
    },
  },
];

/**
 * Suomikauppa.fi — Daisycon campaign 17977, 7 % per sale, 30-day attribution.
 * Finnish groceries, sweets, coffee, sauna products and gifts, shipped worldwide.
 *
 * WHY THIS CARD EXISTS. The 2026-08-07 rebuild stripped this site's product grid
 * because it duplicated laplandgifts and earned NOTHING: 13 of 15 listed
 * boutiques are in no affiliate network and never will be. This is the opposite
 * case, a real programme with a real rate, so the products return as ONE
 * advertiser card rather than as a second catalogue competing with gifts. The
 * site's own job is unchanged: it still answers "where do you buy in Lapland".
 *
 * ANGLE. The honest gap in the boutique directory above is that most of those
 * shops sell over the counter only. This card names that gap and fills it,
 * instead of pretending to be another curated shelf.
 *
 * Skin: the advertiser's own blue (#063092, sampled from their brand mark) on a
 * white card, so it reads as Suomikauppa and not as our cream editorial.
 *
 * Kept out on purpose: any discount or "−X %" claim. The two hooks are
 * structural facts the shop states itself (worldwide delivery, 15+ years), so
 * they cannot go stale.
 */

const SK_BRAND: ProductAdBrand = {
  ns: 'sk',
  accent: '#063092',
  ink: '#063092',
  stage: ['#EAF0FA', '#D3E0F2'],
  cardBg: '#FFFFFF',
};

const SK_COPY: ProductAdCopy = {
  eyebrow: {
    en: 'New in: Marimekko',
    fi: 'Uutuutena: Marimekko',
    de: 'Neu: Marimekko',
    ja: '新入荷：マリメッコ',
    es: 'Novedad: Marimekko',
    'pt-BR': 'Novidade: Marimekko',
    'zh-CN': '新到:Marimekko',
    ko: '신상: 마리메꼬',
    fr: 'Nouveau : Marimekko',
    it: 'Novità: Marimekko',
    nl: 'Nieuw: Marimekko',
    sv: 'Nyhet: Marimekko',
  },
  headline: {
    en: 'The shops on this page do not all post abroad. This one does.',
    fi: 'Kaikki tämän sivun putiikit eivät postita ulkomaille. Tämä postittaa.',
    de: 'Nicht alle Läden auf dieser Seite versenden ins Ausland. Dieser schon.',
    ja: 'このページの店がすべて海外発送に対応しているわけではありません。この店は対応しています。',
    es: 'No todas las tiendas de esta página envían al extranjero. Esta sí.',
    'pt-BR': 'Nem todas as lojas desta página enviam para o exterior. Esta envia.',
    'zh-CN': '本页的店铺并非都寄往国外。这一家可以。',
    ko: '이 페이지의 상점이 모두 해외로 부치지는 않습니다. 이곳은 보냅니다.',
    fr: 'Toutes les boutiques de cette page n’expédient pas à l’étranger. Celle-ci, oui.',
    it: 'Non tutti i negozi di questa pagina spediscono all’estero. Questo sì.',
    nl: 'Niet alle winkels op deze pagina verzenden naar het buitenland. Deze wel.',
    sv: 'Alla butiker på den här sidan skickar inte utomlands. Den här gör det.',
  },
  sub: {
    en: 'Marimekko has just landed at Suomikauppa, Unikko bags and towels included, alongside Moomin, Fiskars, Lumene and the Fazer shelf. They post with DHL, FedEx, GLS, PostNord and Posti, so an Unikko bag reaches Osaka as easily as Oulu.',
    fi: 'Suomikauppaan on juuri saapunut Marimekko, mukana Unikko-laukut ja -pyyhkeet, Muumien, Fiskarsin, Lumenen ja Fazerin hyllyn rinnalle. Kauppa postittaa DHL:llä, FedExillä, GLS:llä, PostNordilla ja Postilla, joten Unikko-laukku päätyy Osakaan yhtä helposti kuin Ouluun.',
    de: 'Marimekko ist neu bei Suomikauppa, samt Unikko-Taschen und -Handtüchern, neben Mumins, Fiskars, Lumene und dem Fazer-Regal. Versandt wird mit DHL, FedEx, GLS, PostNord und Posti, eine Unikko-Tasche erreicht Osaka also so leicht wie Oulu.',
    ja: 'Suomikauppa にマリメッコが入荷しました。ウニッコのバッグやタオルに加え、ムーミン、フィスカルス、ルメネ、そしてファッツェルの棚も。発送は DHL、FedEx、GLS、PostNord、Posti。ウニッコのバッグはオウルへも大阪へも同じように届きます。',
    es: 'Marimekko acaba de llegar a Suomikauppa, con bolsos y toallas Unikko, junto a los Moomin, Fiskars, Lumene y el estante de Fazer. Envían con DHL, FedEx, GLS, PostNord y Posti, así que un bolso Unikko llega a Osaka igual de fácil que a Oulu.',
    'pt-BR': 'A Marimekko acaba de chegar à Suomikauppa, com bolsas e toalhas Unikko, ao lado dos Moomin, da Fiskars, da Lumene e da prateleira Fazer. Enviam por DHL, FedEx, GLS, PostNord e Posti, então uma bolsa Unikko chega a Osaka tão facilmente quanto a Oulu.',
    'zh-CN': 'Marimekko 刚刚上架 Suomikauppa,包含 Unikko 手袋与毛巾,与姆明、Fiskars、Lumene 以及 Fazer 货架并列。他们通过 DHL、FedEx、GLS、PostNord 与 Posti 发货,一只 Unikko 手袋寄到大阪和寄到奥卢一样简单。',
    ko: '마리메꼬가 Suomikauppa에 막 입고되었습니다. 우니꼬 가방과 타월을 비롯해 무민, 피스카스, 루메네, 그리고 파제르 진열대까지. DHL, FedEx, GLS, PostNord, Posti로 발송하니 우니꼬 가방은 오울루만큼이나 쉽게 오사카에도 도착합니다.',
    fr: 'Marimekko vient d’arriver chez Suomikauppa, sacs et serviettes Unikko compris, aux côtés des Moumines, de Fiskars, de Lumene et du rayon Fazer. Ils expédient avec DHL, FedEx, GLS, PostNord et Posti : un sac Unikko rejoint Osaka aussi facilement qu’Oulu.',
    it: 'Marimekko è appena arrivata da Suomikauppa, borse e asciugamani Unikko compresi, accanto ai Moomin, a Fiskars, a Lumene e allo scaffale Fazer. Spediscono con DHL, FedEx, GLS, PostNord e Posti, quindi una borsa Unikko arriva a Osaka con la stessa facilità con cui arriva a Oulu.',
    nl: 'Marimekko is net binnen bij Suomikauppa, inclusief Unikko-tassen en -handdoeken, naast de Moomins, Fiskars, Lumene en het Fazer-schap. Ze versturen met DHL, FedEx, GLS, PostNord en Posti, dus een Unikko-tas bereikt Osaka net zo makkelijk als Oulu.',
    sv: 'Marimekko har precis kommit in hos Suomikauppa, Unikko-väskor och -handdukar inkluderat, vid sidan av Mumin, Fiskars, Lumene och Fazerhyllan. De skickar med DHL, FedEx, GLS, PostNord och Posti, så en Unikko-väska når Osaka lika lätt som Uleåborg.',
  },
  trust: [
    {
      icon: Globe,
      label: {
        en: 'Ships worldwide',
        fi: 'Toimitus maailmanlaajuisesti',
        de: 'Weltweiter Versand',
        ja: '世界中へ配送',
        es: 'Envíos a todo el mundo',
        'pt-BR': 'Envio para todo o mundo',
        'zh-CN': '全球配送',
        ko: '전 세계 배송',
        fr: 'Livraison dans le monde entier',
        it: 'Spedizione in tutto il mondo',
        nl: 'Wereldwijde verzending',
        sv: 'Skickar över hela världen',
      },
    },
    {
      // Carriers NAMED, never drawn. Suomikauppa may show the DHL and FedEx
      // marks on its own site; we hold no licence to reproduce them in our
      // creative, and the reassurance lives in the names anyway.
      icon: Truck,
      label: {
        en: 'DHL, FedEx, GLS, PostNord and Posti',
        fi: 'DHL, FedEx, GLS, PostNord ja Posti',
        de: 'DHL, FedEx, GLS, PostNord und Posti',
        ja: 'DHL・FedEx・GLS・PostNord・Posti',
        es: 'DHL, FedEx, GLS, PostNord y Posti',
        'pt-BR': 'DHL, FedEx, GLS, PostNord e Posti',
        'zh-CN': 'DHL、FedEx、GLS、PostNord 与 Posti',
        ko: 'DHL, FedEx, GLS, PostNord, Posti',
        fr: 'DHL, FedEx, GLS, PostNord et Posti',
        it: 'DHL, FedEx, GLS, PostNord e Posti',
        nl: 'DHL, FedEx, GLS, PostNord en Posti',
        sv: 'DHL, FedEx, GLS, PostNord och Posti',
      },
    },
    {
      // The shop's own published figures, read from suomikauppa.fi 2026-08-10.
      // Stronger than "15 years of trading" because it is about the thing the
      // reader is actually worried about: whether the parcel arrives.
      icon: Package,
      label: {
        en: 'Over 300,000 shipments delivered',
        fi: 'Yli 300 000 toimitettua lähetystä',
        de: 'Über 300.000 versandte Sendungen',
        ja: '30万件を超える配送実績',
        es: 'Más de 300 000 envíos entregados',
        'pt-BR': 'Mais de 300 000 envios entregues',
        'zh-CN': '已完成逾 30 万次发货',
        ko: '30만 건 이상 배송 완료',
        fr: 'Plus de 300 000 colis livrés',
        it: 'Oltre 300.000 spedizioni consegnate',
        nl: 'Ruim 300.000 zendingen bezorgd',
        sv: 'Över 300 000 levererade försändelser',
      },
    },
  ],
  offer: {
    en: 'Groceries, sweets and gifts in one order',
    fi: 'Elintarvikkeet, makeiset ja lahjat yhdellä tilauksella',
    de: 'Lebensmittel, Süßigkeiten und Geschenke in einer Bestellung',
    ja: '食品・菓子・ギフトをまとめて一度の注文で',
    es: 'Alimentos, dulces y regalos en un solo pedido',
    'pt-BR': 'Alimentos, doces e presentes em um só pedido',
    'zh-CN': '食品、糖果与礼品,一单搞定',
    ko: '식품·과자·선물을 한 번의 주문으로',
    fr: 'Épicerie, confiseries et cadeaux en une commande',
    it: 'Alimentari, dolci e regali in un solo ordine',
    nl: 'Levensmiddelen, snoep en cadeaus in één bestelling',
    sv: 'Matvaror, godis och presenter i en beställning',
  },
  offerIcon: Truck,
  cta: {
    en: 'See the Marimekko range',
    fi: 'Katso Marimekko-valikoima',
    de: 'Marimekko-Sortiment ansehen',
    ja: 'マリメッコの品ぞろえを見る',
    es: 'Ver la selección de Marimekko',
    'pt-BR': 'Ver a seleção Marimekko',
    'zh-CN': '查看 Marimekko 系列',
    ko: '마리메꼬 컬렉션 보기',
    fr: 'Voir la sélection Marimekko',
    it: 'Vedi la selezione Marimekko',
    nl: 'Bekijk het Marimekko-assortiment',
    sv: 'Se Marimekko-sortimentet',
  },
  soldBy: {
    en: 'Sold by Suomikauppa.fi',
    fi: 'Myynti: Suomikauppa.fi',
    de: 'Verkauf durch Suomikauppa.fi',
    ja: '販売：Suomikauppa.fi',
    es: 'Vendido por Suomikauppa.fi',
    'pt-BR': 'Vendido pela Suomikauppa.fi',
    'zh-CN': '由 Suomikauppa.fi 销售',
    ko: 'Suomikauppa.fi 판매',
    fr: 'Vendu par Suomikauppa.fi',
    it: 'Venduto da Suomikauppa.fi',
    nl: 'Verkocht door Suomikauppa.fi',
    sv: 'Säljs av Suomikauppa.fi',
  },
  stageBadge: {
    en: 'Finnish goods, sent home',
    fi: 'Suomalaista, kotiin postitettuna',
    de: 'Finnische Waren, nach Hause geschickt',
    ja: 'フィンランドの品を自宅へ',
    es: 'Productos finlandeses, enviados a casa',
    'pt-BR': 'Produtos finlandeses, enviados para casa',
    'zh-CN': '芬兰好物,寄回家',
    ko: '핀란드 제품, 집으로 배송',
    fr: 'Des produits finlandais, expédiés chez vous',
    it: 'Prodotti finlandesi, spediti a casa',
    nl: 'Finse waren, naar huis gestuurd',
    sv: 'Finska varor, skickade hem',
  },
};

export default function SuomikauppaAd({
  sid = 'store_finnish_goods',
  className = '',
}: {
  sid?: string;
  className?: string;
}) {
  return (
    <ProductBrandAd
      partner={SUOMIKAUPPA}
      brand={SK_BRAND}
      copy={SK_COPY}
      sid={sid}
      shots={SK_SHOTS}
      className={className}
    />
  );
}
