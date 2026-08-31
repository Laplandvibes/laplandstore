import { Globe, Package, Truck } from 'lucide-react';
import ProductBrandAd, {
  type ProductAdBrand,
  type ProductAdCopy,
  type ProductAdShot,
} from './ProductBrandAd';
import { SUOMIKAUPPA } from '../lib/affiliate';

/**
 * Product photography taken from Suomikauppa's OWN Daisycon product feed
 * (program 17977, media 424061 = laplandstore.fi), fetched and verified
 * 2026-08-23. Feed: 1,949 products, every image on the advertiser's own
 * Shopify CDN. That is "Material provided by the Advertiser" in the sense of
 * Daisycon's general T&C Art. 2.4/2.6, so the licence question is settled at
 * source rather than argued.
 *
 * 🔴 WHY THE PREVIOUS THREE IMAGES WERE REPLACED (2026-08-23). This card used
 * to show three Marimekko Unikko BAGS, and the header claimed the Daisycon feed
 * "clears its imagery for affiliate use". That was a non sequitur: the feed does
 * exist, but it contains six Marimekko items and all six are serviettes — there
 * are no Unikko bags in it at all. Those images had been taken from the shop's
 * public website, and the justification was written without checking the thing
 * it cited. Recorded in _affiliate/creatives.json.
 *
 * 🔴 WHY NO MOOMIN, even though the feed carries 205 Moomin products and they
 * would be the most recognisable choice. Moomin Characters Oy licenses
 * exceptionally tightly: their own licensing page treats use of the Moomins in
 * "an advertisement or other sales promotion" as a fee-bearing licensable act,
 * their press-kit permission is expressly editorial-only, and they logged 552
 * infringement cases in 2014–2021 and publicly challenged Yle over a single
 * Instagram post. Dior v Evora (C-337/95) gives a reseller a real defence for
 * advertising genuine exhausted goods, but an affiliate is not literally a
 * reseller and that extension is untested. Not worth it for a decorative tile.
 * Iittala, Fiskars and Lumene carry no third-party character IP at all.
 *
 * The three shown are glass, steel and arctic skincare — three Finnish things a
 * visitor recognises without being told, which is the same merit the Unikko
 * choice was reaching for.
 */
const SK_SHOTS: ProductAdShot[] = [
  {
    // Feed source: cdn.shopify.com/s/files/1/0608/9123/4523/products/Resource_IittalaEMEA_1007062.jpg
    img: '/img/partners/suomikauppa/iittala-mariskooli.jpg',
    alt: {
      en: 'Iittala Mariskooli footed bowl in clear pressed glass',
      fi: 'Iittala Mariskooli -jalallinen malja kirkasta painolasia',
      de: 'Iittala Mariskooli Fußschale aus klarem Pressglas',
      ja: 'イッタラ マリスコオリ 脚付きボウル（クリアプレスガラス）',
      es: 'Cuenco con pie Iittala Mariskooli en vidrio prensado transparente',
      'pt-BR': 'Tigela com pé Iittala Mariskooli em vidro prensado transparente',
      'zh-CN': 'Iittala Mariskooli 高脚碗，透明压制玻璃',
      ko: '이딸라 마리스코올리 굽 있는 볼, 투명 프레스 글라스',
      fr: 'Coupe sur pied Iittala Mariskooli en verre pressé transparent',
      it: 'Coppa con piede Iittala Mariskooli in vetro pressato trasparente',
      nl: 'Iittala Mariskooli schaal op voet van helder geperst glas',
      sv: 'Iittala Mariskooli fotskål i klart pressglas',
    },
  },
  {
    // Feed source: cdn.shopify.com/s/files/1/0608/9123/4523/products/functional_form_yleissakset.jpg
    img: '/img/partners/suomikauppa/fiskars-classic-scissors.jpg',
    alt: {
      en: 'Fiskars Classic universal scissors, 21 cm, with the orange handles',
      fi: 'Fiskars Classic -yleissakset, 21 cm, oranssein kahvoin',
      de: 'Fiskars Classic Universalschere, 21 cm, mit den orangefarbenen Griffen',
      ja: 'フィスカルス クラシック 万能はさみ 21cm（オレンジの持ち手）',
      es: 'Tijeras universales Fiskars Classic de 21 cm con mangos naranjas',
      'pt-BR': 'Tesoura universal Fiskars Classic de 21 cm com cabos laranja',
      'zh-CN': 'Fiskars Classic 通用剪刀 21 厘米，橙色手柄',
      ko: '피스카스 클래식 만능 가위 21cm, 오렌지 손잡이',
      fr: 'Ciseaux universels Fiskars Classic 21 cm à manches orange',
      it: 'Forbici universali Fiskars Classic da 21 cm con manici arancioni',
      nl: 'Fiskars Classic universele schaar, 21 cm, met de oranje grepen',
      sv: 'Fiskars Classic universalsax, 21 cm, med de orange handtagen',
    },
  },
  {
    // Feed source: cdn.shopify.com/s/files/1/0608/9123/4523/products/VALO_nordic_c_radiance_flash_day_fluid_6412600817881.jpg
    img: '/img/partners/suomikauppa/lumene-valo-nordic-c.jpg',
    alt: {
      en: 'Lumene VALO Nordic-C day fluid in a white and orange tube',
      fi: 'Lumene VALO Nordic-C -päivävoide valko-oranssissa tuubissa',
      de: 'Lumene VALO Nordic-C Tagesfluid in einer weiß-orangefarbenen Tube',
      ja: 'ルメネ VALO Nordic-C デイフルイド（白とオレンジのチューブ）',
      es: 'Fluido de día Lumene VALO Nordic-C en tubo blanco y naranja',
      'pt-BR': 'Fluido diurno Lumene VALO Nordic-C em tubo branco e laranja',
      'zh-CN': 'Lumene VALO Nordic-C 日间乳液，白橙色管装',
      ko: '루메네 VALO 노르딕-C 데이 플루이드, 화이트 오렌지 튜브',
      fr: 'Fluide de jour Lumene VALO Nordic-C en tube blanc et orange',
      it: 'Fluido giorno Lumene VALO Nordic-C in tubo bianco e arancione',
      nl: 'Lumene VALO Nordic-C dagfluid in een wit-oranje tube',
      sv: 'Lumene VALO Nordic-C dagfluid i vit och orange tub',
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
    en: 'Finnish design, posted home',
    fi: 'Suomalaista muotoilua, postitse kotiin',
    de: 'Finnisches Design, nach Hause geschickt',
    ja: 'フィンランドのデザインを自宅へ',
    es: 'Diseño finlandés, enviado a casa',
    'pt-BR': 'Design finlandês, enviado para casa',
    'zh-CN': '芬兰设计，寄到家',
    ko: '핀란드 디자인, 집으로 배송',
    fr: 'Le design finlandais, expédié chez vous',
    it: 'Design finlandese, spedito a casa',
    nl: 'Fins design, thuisbezorgd',
    sv: 'Finsk design, skickad hem',
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
    en: 'An Iittala Mariskooli, the orange Fiskars scissors, a Lumene Nordic-C fluid: things you can pick up in Finland and nowhere near as easily at home. Suomikauppa posts with DHL, FedEx, GLS, PostNord and Posti, so the parcel reaches Osaka as readily as Oulu.',
    fi: 'Iittalan Mariskooli, oranssit Fiskars-sakset, Lumenen Nordic-C-voide: tavaraa, jonka saa Suomesta ja jota kotoa ei löydy läheskään yhtä helposti. Suomikauppa postittaa DHL:llä, FedExillä, GLS:llä, PostNordilla ja Postilla, joten paketti päätyy Osakaan yhtä helposti kuin Ouluun.',
    de: 'Eine Iittala Mariskooli, die orange Fiskars-Schere, ein Lumene Nordic-C Fluid: Dinge, die man in Finnland bekommt und zu Hause längst nicht so leicht. Suomikauppa versendet mit DHL, FedEx, GLS, PostNord und Posti, das Paket erreicht Osaka also so leicht wie Oulu.',
    ja: 'イッタラのマリスコオリ、オレンジのフィスカルスのはさみ、ルメネの Nordic-C フルイド。フィンランドでは手に入るのに、自国ではそう簡単ではないものです。Suomikauppa は DHL、FedEx、GLS、PostNord、Posti で発送するので、荷物はオウルへも大阪へも同じように届きます。',
    es: 'Un Mariskooli de Iittala, las tijeras naranjas de Fiskars, un fluido Nordic-C de Lumene: cosas que consigues en Finlandia y no tan fácilmente en casa. Suomikauppa envía con DHL, FedEx, GLS, PostNord y Posti, así que el paquete llega a Osaka igual de fácil que a Oulu.',
    'pt-BR': 'Um Mariskooli da Iittala, a tesoura laranja da Fiskars, um fluido Nordic-C da Lumene: coisas que se acham na Finlândia e nem de longe tão facilmente em casa. A Suomikauppa envia por DHL, FedEx, GLS, PostNord e Posti, então a encomenda chega a Osaka tão facilmente quanto a Oulu.',
    'zh-CN': '一只伊塔拉 Mariskooli 玻璃碗、一把橙色 Fiskars 剪刀、一支 Lumene Nordic-C 乳液：在芬兰随手可得，回到家却没那么容易找到。Suomikauppa 通过 DHL、FedEx、GLS、PostNord 与 Posti 发货，包裹寄到大阪和寄到奥卢一样简单。',
    ko: '이딸라 마리스코올리, 오렌지색 피스카스 가위, 루메네 노르딕-C 플루이드. 핀란드에서는 손쉽게 구하지만 집에서는 그만큼 쉽지 않은 것들입니다. Suomikauppa는 DHL, FedEx, GLS, PostNord, Posti로 발송하므로 소포는 오울루만큼이나 쉽게 오사카에도 도착합니다.',
    fr: 'Une coupe Mariskooli d’Iittala, les ciseaux orange de Fiskars, un fluide Nordic-C de Lumene : des choses qu’on trouve en Finlande et bien moins facilement chez soi. Suomikauppa expédie avec DHL, FedEx, GLS, PostNord et Posti : le colis rejoint Osaka aussi facilement qu’Oulu.',
    it: 'Una Mariskooli di Iittala, le forbici arancioni di Fiskars, un fluido Nordic-C di Lumene: cose che in Finlandia trovi e a casa molto meno facilmente. Suomikauppa spedisce con DHL, FedEx, GLS, PostNord e Posti, così il pacco arriva a Osaka con la stessa facilità con cui arriva a Oulu.',
    nl: 'Een Iittala Mariskooli, de oranje Fiskars-schaar, een Lumene Nordic-C fluid: spullen die u in Finland vindt en thuis lang niet zo makkelijk. Suomikauppa verstuurt met DHL, FedEx, GLS, PostNord en Posti, dus het pakket bereikt Osaka net zo makkelijk als Oulu.',
    sv: 'En Iittala Mariskooli, den orange Fiskars-saxen, ett Lumene Nordic-C-fluid: sådant man får tag på i Finland och långt ifrån lika lätt hemma. Suomikauppa skickar med DHL, FedEx, GLS, PostNord och Posti, så paketet når Osaka lika lätt som Uleåborg.',
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
    'zh-CN': '食品、糖果与礼品，一单搞定',
    ko: '식품·과자·선물을 한 번의 주문으로',
    fr: 'Épicerie, confiseries et cadeaux en une commande',
    it: 'Alimentari, dolci e regali in un solo ordine',
    nl: 'Levensmiddelen, snoep en cadeaus in één bestelling',
    sv: 'Matvaror, godis och presenter i en beställning',
  },
  offerIcon: Truck,
  cta: {
    en: 'Browse the Finnish shelf',
    fi: 'Selaa suomalaista hyllyä',
    de: 'Das finnische Regal ansehen',
    ja: 'フィンランドの棚を見る',
    es: 'Ver el estante finlandés',
    'pt-BR': 'Ver a prateleira finlandesa',
    'zh-CN': '浏览芬兰货架',
    ko: '핀란드 진열대 둘러보기',
    fr: 'Parcourir le rayon finlandais',
    it: 'Sfoglia lo scaffale finlandese',
    nl: 'Bekijk het Finse schap',
    sv: 'Bläddra i den finska hyllan',
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
    'zh-CN': '芬兰好物，寄回家',
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
