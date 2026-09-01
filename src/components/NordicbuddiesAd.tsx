import { BadgeCheck, Globe, Truck } from 'lucide-react';
import ProductBrandAd, {
  type ProductAdBrand,
  type ProductAdCopy,
  type ProductAdShot,
} from './ProductBrandAd';
import { NORDICBUDDIES } from '../lib/affiliate';

/**
 * Nordicbuddies — Daisycon campaign 20538, 7 % per sale, 30-day attribution.
 * Media laplandstore.fi (424061) approved by the advertiser 2026-08-24.
 *
 * ANGLE. The boutique directory on this page answers "where do you buy in
 * Lapland". The licensed character things a visitor actually carries home —
 * Pippi, Mauri Kunnas' dogs — come from neither a boutique nor a grocer, and
 * the page leaves that open. This card fills that one gap. It is NOT a second
 * Suomikauppa: different shop, different shelf, and no product appears on both.
 *
 * 🔴 PIPPI AND MAURI KUNNAS, NOT MOOMIN, ON PURPOSE. The shop's catalogue is
 * 2 225 Moomin products against 267 Pippi and 36 Kunnas, so Moomin would have
 * been the obvious pick. The network's standing rule says otherwise: no Moomin
 * in an LV ad unit until Moomin Characters answers in writing (moomin_note in
 * _affiliate/creatives.json — their licensing page treats use in "an
 * advertisement or other sales promotion" as a fee-bearing licensable act).
 * The Suomikauppa card above was built on the same reasoning.
 *
 * 🔴 NOT "MADE IN FINLAND". The shop's own About page says production happens
 * "mainly in Europe and Eurasia", that only part of it is done in Finland, and
 * that its cotton comes from Anhui and Henan in China. The card therefore says
 * Helsinki COMPANY, never Finnish manufacture — the same finding that stopped
 * laplandgifts' catalogue from claiming it.
 *
 * Facts, all read from the advertiser 2026-08-24, none of them perishable:
 *  • "Established in 2019 in the heart of Helsinki, Finland" (About us)
 *  • free shipping over 60 € inside EU + UK + Norway, over 100 € worldwide,
 *    tracking on every option, packing 1–3 working days (Shipping policy)
 *  • the three products are in the advertiser's own Daisycon feed, in stock,
 *    photographed by the shop itself (image sources below)
 *
 * No prices on the card: they move, and a stale price is a broken promise.
 */

const NB_SHOTS: ProductAdShot[] = [
  {
    // Shop source: cdn.shopify.com/s/files/1/0532/9843/0106/files/PIPPI2JFRONTPNG_651440e0.png
    // "Pippi & Little Old Man Tote Bag", 100 % cotton, 38 × 48 cm, in stock.
    // Little Old Man (Lilla Gubben) is Pippi's horse — the print is her lifting it.
    img: '/img/partners/nordicbuddies/pippi-old-man-tote.jpg',
    alt: {
      en: 'Lilac cotton tote bag printed with Pippi lifting her horse Little Old Man',
      fi: 'Liila puuvillakassi, jossa Peppi nostaa hevostaan',
      de: 'Fliederfarbene Baumwolltasche mit Pippi, die ihr Pferd hochhebt',
      ja: 'ピッピが馬を持ち上げる絵柄のライラック色コットントート',
      es: 'Bolsa de algodón lila con Pippi levantando a su caballo',
      'pt-BR': 'Sacola de algodão lilás com Píppi levantando seu cavalo',
      'zh-CN': '淡紫色棉布托特包，印着皮皮举起她的马',
      ko: '말을 번쩍 들어 올린 삐삐가 프린트된 라일락색 면 토트백',
      fr: 'Tote bag en coton lilas imprimé de Fifi soulevant son cheval',
      it: 'Borsa di cotone lilla con Pippi che solleva il suo cavallo',
      nl: 'Lila katoenen tas met Pippi die haar paard optilt',
      sv: 'Lila bomullskasse med Pippi som lyfter sin häst Lilla Gubben',
    },
  },
  {
    // Shop source: cdn.shopify.com/s/files/1/0532/9843/0106/files/PIPPI7A.jpg
    // "Pippi Passport Bag", 17 × 21 cm shoulder bag, in stock.
    img: '/img/partners/nordicbuddies/pippi-passport-bag.jpg',
    alt: {
      en: 'Cream two-zip shoulder bag for passport and phone, with an upside-down Pippi print',
      fi: 'Luonnonvalkoinen kahden vetoketjun olkalaukku passille ja puhelimelle, ylösalaisin oleva Peppi-painatus',
      de: 'Cremefarbene Umhängetasche mit zwei Reißverschlüssen für Pass und Handy, mit kopfstehendem Pippi-Print',
      ja: 'パスポートとスマホが入る二重ファスナーのショルダーバッグ。逆さまのピッピ柄',
      es: 'Bolso bandolera color crema con dos cremalleras para pasaporte y móvil, con estampado de Pippi cabeza abajo',
      'pt-BR': 'Bolsa transversal creme com dois zíperes para passaporte e celular, com estampa de Píppi de cabeça para baixo',
      'zh-CN': '米色双拉链斜挎包，可放护照和手机，印着倒立的皮皮',
      ko: '여권과 휴대폰을 넣는 지퍼 두 개짜리 크림색 숄더백, 거꾸로 선 삐삐 프린트',
      fr: 'Sacoche crème à deux fermetures pour passeport et téléphone, imprimé Fifi à l’envers',
      it: 'Borsa a tracolla color crema con due cerniere per passaporto e telefono, stampa di Pippi a testa in giù',
      nl: 'Crèmekleurige schoudertas met twee ritsen voor paspoort en telefoon, met een omgekeerde Pippi-print',
      sv: 'Gräddvit axelväska med två dragkedjor för pass och telefon, med ett upp-och-nedvänt Pippi-tryck',
    },
  },
  {
    // Shop source: cdn.shopify.com/s/files/1/0532/9843/0106/files/0003_Layer2_8ab7f669.jpg
    // "Mr. Clutterbuck Beanie", 100 % recycled polyester, adult one size, lilac, in stock.
    img: '/img/partners/nordicbuddies/clutterbuck-beanie.jpg',
    alt: {
      en: 'Lilac ribbed beanie in recycled polyester with a small embroidered Mr. Clutterbuck',
      fi: 'Liila resoripipo kierrätyspolyesteristä, käänteessä kirjailtu Herra Hakkarainen',
      de: 'Fliederfarbene Rippstrickmütze aus recyceltem Polyester mit kleiner gestickter Figur',
      ja: 'リサイクルポリエステルのライラック色リブ帽。小さな刺繍入り',
      es: 'Gorro de canalé lila en poliéster reciclado con una figura bordada',
      'pt-BR': 'Gorro canelado lilás em poliéster reciclado com uma figura bordada',
      'zh-CN': '再生聚酯淡紫色罗纹针织帽，绣有小小的人物',
      ko: '재활용 폴리에스터로 만든 라일락색 골지 비니, 작은 자수 장식',
      fr: 'Bonnet côtelé lilas en polyester recyclé avec un petit personnage brodé',
      it: 'Berretto a coste lilla in poliestere riciclato con un personaggio ricamato',
      nl: 'Lila geribbelde muts van gerecycled polyester met een klein geborduurd figuurtje',
      sv: 'Lila ribbstickad mössa i återvunnen polyester med en liten broderad figur',
    },
  },
];

/** The shop's own lilac, sampled from its product photography. */
const NB_BRAND: ProductAdBrand = {
  ns: 'nb',
  accent: '#7C4DBE',
  ink: '#5B2E96',
  stage: ['#F1E9FB', '#DFCDF6'],
  cardBg: '#FFFFFF',
};

const NB_COPY: ProductAdCopy = {
  eyebrow: {
    en: 'Officially licensed characters',
    fi: 'Virallisesti lisensoidut hahmot',
    de: 'Offiziell lizenzierte Figuren',
    ja: '公式ライセンスのキャラクター',
    es: 'Personajes con licencia oficial',
    'pt-BR': 'Personagens com licença oficial',
    'zh-CN': '官方授权角色',
    ko: '공식 라이선스 캐릭터',
    fr: 'Personnages sous licence officielle',
    it: 'Personaggi con licenza ufficiale',
    nl: 'Officieel gelicentieerde figuren',
    sv: 'Officiellt licensierade figurer',
  },
  headline: {
    en: 'Pippi and Mauri Kunnas, from the Helsinki label that holds the licence.',
    fi: 'Peppi ja Mauri Kunnas helsinkiläiseltä merkiltä, jolla on lisenssi.',
    de: 'Pippi und Mauri Kunnas vom Helsinkier Label, das die Lizenz hält.',
    ja: 'ピッピとマウリ・クンナスを、ライセンスを持つヘルシンキのブランドから。',
    es: 'Pippi y Mauri Kunnas, de la firma de Helsinki que tiene la licencia.',
    'pt-BR': 'Píppi e Mauri Kunnas, da marca de Helsinque que detém a licença.',
    'zh-CN': '长袜子皮皮与毛里·库纳斯，来自持有授权的赫尔辛基品牌。',
    ko: '삐삐와 마우리 쿤나스, 라이선스를 가진 헬싱키 브랜드에서.',
    fr: 'Fifi Brindacier et Mauri Kunnas, par la maison d’Helsinki qui détient la licence.',
    it: 'Pippi e Mauri Kunnas, dal marchio di Helsinki che ne ha la licenza.',
    nl: 'Pippi en Mauri Kunnas, van het Helsinkse merk met de licentie.',
    sv: 'Pippi och Mauri Kunnas, från Helsingforsmärket som har licensen.',
  },
  sub: {
    en: 'Nordicbuddies is a Helsinki label founded in 2019, selling licensed character wear: a cotton tote, a passport bag that fits a phone, a ribbed beanie in recycled polyester. The shop posts worldwide and every option is tracked, so the parcel follows you home instead of filling a suitcase.',
    fi: 'Nordicbuddies on vuonna 2019 perustettu helsinkiläinen merkki, joka myy lisensoituja hahmotuotteita: puuvillakassi, passilaukku, johon puhelin mahtuu, ja resoripipo kierrätyspolyesteristä. Kauppa postittaa maailmanlaajuisesti ja jokaisessa toimitustavassa on seuranta, joten paketti tulee perässä eikä täytä matkalaukkua.',
    de: 'Nordicbuddies ist ein 2019 gegründetes Helsinkier Label für lizenzierte Figurenmode: eine Baumwolltasche, eine Passtasche, in die das Handy passt, eine Rippstrickmütze aus recyceltem Polyester. Der Shop versendet weltweit, jede Versandart ist nachverfolgbar, das Paket kommt hinterher, statt den Koffer zu füllen.',
    ja: 'Nordicbuddies は 2019 年にヘルシンキで創業した、ライセンス製品を扱うブランドです。コットントート、スマホの入るパスポートバッグ、リサイクルポリエステルのリブ帽。世界中へ発送し、どの配送方法にも追跡が付くので、スーツケースを膨らませずに後から届きます。',
    es: 'Nordicbuddies es una marca de Helsinki fundada en 2019 que vende productos con licencia: una bolsa de algodón, un bolso de pasaporte donde cabe el móvil, un gorro de canalé en poliéster reciclado. La tienda envía a todo el mundo y todas las opciones llevan seguimiento, así que el paquete viaja hasta su casa en vez de llenarle la maleta.',
    'pt-BR': 'A Nordicbuddies é uma marca de Helsinque fundada em 2019 que vende produtos licenciados: uma sacola de algodão, uma bolsa de passaporte onde cabe o celular, um gorro canelado em poliéster reciclado. A loja envia para o mundo todo e toda opção tem rastreio, então a encomenda segue você para casa em vez de encher a mala.',
    'zh-CN': 'Nordicbuddies 是 2019 年在赫尔辛基创立的品牌，售卖授权角色单品：棉布托特包、能装下手机的护照包、再生聚酯罗纹针织帽。店铺全球发货，每种配送方式都可追踪，包裹随后寄到家，不必塞满行李箱。',
    ko: 'Nordicbuddies는 2019년 헬싱키에서 시작한 브랜드로, 라이선스 캐릭터 제품을 판매합니다. 면 토트백, 휴대폰이 들어가는 여권 가방, 재활용 폴리에스터 골지 비니. 전 세계로 발송하며 모든 배송 방법에 추적이 붙으니, 캐리어를 채우는 대신 소포가 집으로 따라옵니다.',
    fr: 'Nordicbuddies est une marque d’Helsinki fondée en 2019 qui vend des produits sous licence : un tote bag en coton, une sacoche à passeport où tient le téléphone, un bonnet côtelé en polyester recyclé. La boutique expédie dans le monde entier et chaque option est suivie : le colis vous rejoint chez vous au lieu de remplir la valise.',
    it: 'Nordicbuddies è un marchio di Helsinki fondato nel 2019 che vende prodotti su licenza: una borsa di cotone, una borsa portapassaporto in cui entra il telefono, un berretto a coste in poliestere riciclato. Il negozio spedisce in tutto il mondo e ogni opzione è tracciata, così il pacco La raggiunge a casa invece di riempire la valigia.',
    nl: 'Nordicbuddies is een in 2019 opgericht Helsinks merk dat gelicentieerde figuurartikelen verkoopt: een katoenen tas, een paspoorttasje waar uw telefoon in past, een geribbelde muts van gerecycled polyester. De winkel verstuurt wereldwijd en elke optie is te volgen, dus het pakket komt u achterna in plaats van uw koffer te vullen.',
    sv: 'Nordicbuddies är ett Helsingforsmärke grundat 2019 som säljer licensierade figurprodukter: en bomullskasse, en passväska där telefonen får plats, en ribbstickad mössa i återvunnen polyester. Butiken skickar över hela världen och alla alternativ är spårbara, så paketet följer efter hem i stället för att fylla resväskan.',
  },
  trust: [
    {
      icon: Globe,
      label: {
        en: 'Ships worldwide, tracked',
        fi: 'Toimitus maailmanlaajuisesti, seurannalla',
        de: 'Weltweiter Versand, nachverfolgbar',
        ja: '世界中へ配送・追跡付き',
        es: 'Envíos a todo el mundo con seguimiento',
        'pt-BR': 'Envio mundial com rastreio',
        'zh-CN': '全球配送，可追踪',
        ko: '전 세계 배송, 추적 가능',
        fr: 'Livraison mondiale, avec suivi',
        it: 'Spedizione in tutto il mondo, tracciata',
        nl: 'Wereldwijde verzending, met track & trace',
        sv: 'Skickar över hela världen, spårbart',
      },
    },
    {
      icon: BadgeCheck,
      label: {
        en: 'Official Pippi and Mauri Kunnas licences',
        fi: 'Viralliset Peppi- ja Mauri Kunnas -lisenssit',
        de: 'Offizielle Pippi- und Mauri-Kunnas-Lizenzen',
        ja: 'ピッピとマウリ・クンナスの公式ライセンス',
        es: 'Licencias oficiales de Pippi y Mauri Kunnas',
        'pt-BR': 'Licenças oficiais de Píppi e Mauri Kunnas',
        'zh-CN': '皮皮与毛里·库纳斯官方授权',
        ko: '삐삐·마우리 쿤나스 공식 라이선스',
        fr: 'Licences officielles Fifi Brindacier et Mauri Kunnas',
        it: 'Licenze ufficiali Pippi e Mauri Kunnas',
        nl: 'Officiële Pippi- en Mauri Kunnas-licenties',
        sv: 'Officiella Pippi- och Mauri Kunnas-licenser',
      },
    },
    {
      icon: Truck,
      label: {
        en: 'Packed in 1–3 working days',
        fi: 'Pakataan 1–3 arkipäivässä',
        de: 'Wird in 1–3 Werktagen verpackt',
        ja: '1〜3 営業日で梱包',
        es: 'Preparado en 1–3 días laborables',
        'pt-BR': 'Preparado em 1–3 dias úteis',
        'zh-CN': '1–3 个工作日内打包',
        ko: '영업일 기준 1~3일 내 포장',
        fr: 'Préparé en 1 à 3 jours ouvrés',
        it: 'Preparato in 1–3 giorni lavorativi',
        nl: 'Ingepakt in 1–3 werkdagen',
        sv: 'Packas på 1–3 arbetsdagar',
      },
    },
  ],
  offer: {
    en: 'Free shipping over 60 € in the EU, the UK and Norway',
    fi: 'Ilmainen toimitus yli 60 €:n tilauksiin EU:ssa, Britanniassa ja Norjassa',
    de: 'Versandkostenfrei ab 60 € in der EU, Großbritannien und Norwegen',
    ja: 'EU・英国・ノルウェー向けは 60 € 以上で送料無料',
    es: 'Envío gratis desde 60 € en la UE, el Reino Unido y Noruega',
    'pt-BR': 'Frete grátis acima de 60 € na UE, no Reino Unido e na Noruega',
    'zh-CN': '欧盟、英国与挪威订单满 60 € 免运费',
    ko: 'EU·영국·노르웨이 60 € 이상 무료 배송',
    fr: 'Livraison offerte dès 60 € dans l’UE, au Royaume-Uni et en Norvège',
    it: 'Spedizione gratuita oltre 60 € in UE, Regno Unito e Norvegia',
    nl: 'Gratis verzending vanaf 60 € in de EU, het VK en Noorwegen',
    sv: 'Fri frakt över 60 € inom EU, Storbritannien och Norge',
  },
  offerIcon: Truck,
  cta: {
    en: 'See the Pippi collection',
    fi: 'Katso Peppi-valikoima',
    de: 'Die Pippi-Kollektion ansehen',
    ja: 'ピッピのコレクションを見る',
    es: 'Ver la colección de Pippi',
    'pt-BR': 'Ver a coleção da Píppi',
    'zh-CN': '查看皮皮系列',
    ko: '삐삐 컬렉션 보기',
    fr: 'Voir la collection Fifi Brindacier',
    it: 'Vedi la collezione Pippi',
    nl: 'Bekijk de Pippi-collectie',
    sv: 'Se Pippi-kollektionen',
  },
  soldBy: {
    en: 'Sold by Nordicbuddies',
    fi: 'Myynti: Nordicbuddies',
    de: 'Verkauf durch Nordicbuddies',
    ja: '販売：Nordicbuddies',
    es: 'Vendido por Nordicbuddies',
    'pt-BR': 'Vendido pela Nordicbuddies',
    'zh-CN': '由 Nordicbuddies 销售',
    ko: 'Nordicbuddies 판매',
    fr: 'Vendu par Nordicbuddies',
    it: 'Venduto da Nordicbuddies',
    nl: 'Verkocht door Nordicbuddies',
    sv: 'Säljs av Nordicbuddies',
  },
  stageBadge: {
    en: 'Helsinki, since 2019',
    fi: 'Helsinki, vuodesta 2019',
    de: 'Helsinki, seit 2019',
    ja: 'ヘルシンキ、2019 年から',
    es: 'Helsinki, desde 2019',
    'pt-BR': 'Helsinque, desde 2019',
    'zh-CN': '赫尔辛基，自 2019 年',
    ko: '헬싱키, 2019년부터',
    fr: 'Helsinki, depuis 2019',
    it: 'Helsinki, dal 2019',
    nl: 'Helsinki, sinds 2019',
    sv: 'Helsingfors, sedan 2019',
  },
};

export default function NordicbuddiesAd({
  sid = 'home_character_design',
  className = '',
}: {
  sid?: string;
  className?: string;
}) {
  return (
    <ProductBrandAd
      partner={NORDICBUDDIES}
      brand={NB_BRAND}
      copy={NB_COPY}
      sid={sid}
      shots={NB_SHOTS}
      className={className}
    />
  );
}
