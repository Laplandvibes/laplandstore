import { ExternalLink, MapPin, ShoppingBag } from 'lucide-react';
import { useLang } from '../lang';
import type { Lang } from '../lang';
import GradientPlaceholder, { type PlaceholderTheme } from './GradientPlaceholder';

import enCopy, { type CopyShape } from './LocalShops.copy.en';
import { useCopy } from '../i18n/useCopy';


interface Shop {
  name: string;
  location: string;
  description: Record<Lang, string>;
  url: string;
  categories: Record<Lang, string[]>;
  /** Sells via an online store. May ship anywhere in Finland (and often EU). */
  hasOnlineStore: boolean;
  /** Has at least one physical / brick-and-mortar shop visitors can walk into. */
  hasPhysicalStore: boolean;
  theme: PlaceholderTheme;
  img: string;
}

function utmLink(url: string, shop: string): string {
  const base = url.includes('?') ? '&' : '?';
  return `${url}${base}utm_source=laplandstore.fi&utm_medium=referral&utm_campaign=${encodeURIComponent(shop)}`;
}

// Verified April 2026 — real businesses with confirmed addresses and URLs
// Each image is unique — never reused
const shops: Shop[] = [
  {
    name: 'Lauri Handicrafts',
    location: 'Rovaniemi',
    description: {
      fi: 'Käsintehtyjä puukkoja, koruja ja huopatuotteita vuodesta 1924. Poronluuta, visakoivua ja suomalaista terästä.',
      en: 'Handcrafted knives, jewellery and felt products since 1924. Reindeer bone, curly birch and Finnish steel.',
      de: 'Handgefertigte Puukko-Messer, Schmuck und Filzwaren seit 1924. Rentierknochen, Maserbirke und finnischer Stahl.',
      ja: '1924年創業の手作りナイフ、ジュエリー、フェルト製品。トナカイの骨、カーリーバーチ、フィンランドの鋼を使用。',
      es: 'Cuchillos, joyas y productos de fieltro hechos a mano desde 1924. Hueso de reno, abedul rizado y acero finlandés.',
      'pt-BR': 'Facas, joias e produtos de feltro feitos à mão desde 1924. Osso de rena, bétula encaracolada e aço finlandês.',
      'zh-CN': '自 1924 年以来手工制作的刀具、饰品和毛毡制品。驯鹿骨、卷纹桦木与芬兰钢。',
      ko: '1924년부터 손으로 만든 칼, 장신구, 펠트 제품. 순록 뼈, 컬리 자작나무, 핀란드 강철.',
      fr: 'Couteaux, bijoux et produits en feutre faits main depuis 1924. Os de renne, bouleau ronceux et acier finlandais.',
      it: 'Coltelli, gioielli e prodotti in feltro fatti a mano dal 1924. Osso di renna, betulla riccia e acciaio finlandese.',
      nl: 'Met de hand gemaakte messen, sieraden en viltproducten sinds 1924. Rendierbot, gevlamde berk en Fins staal.',
      sv: 'Handgjorda knivar, smycken och filtprodukter sedan 1924. Renben, masurbjörk och finskt stål.'
    },
    url: 'https://www.laurihouse.com',
    categories: {
      fi: ['Puukot', 'Käsityöt'],
      en: ['Knives', 'Crafts'],
      de: ['Messer', 'Handwerk'],
  ja: ['ナイフ', '工芸品'],
      es: ['Cuchillos', 'Artesanía'],
      'pt-BR': ['Facas', 'Artesanato'],
      'zh-CN': ['刀具', '手工艺品'],
      ko: ['칼', '공예품'],
      fr: ['Couteaux', 'Artisanat'],
      it: ['Coltelli', 'Artigianato'],
      nl: ['Messen', 'Ambacht'],
      sv: ['Knivar', 'Hantverk']
    },
    hasOnlineStore: true,
    hasPhysicalStore: true,
    theme: 'knives',
    img: '/img/shop-lauri.jpg',
  },
  {
    name: 'Marttiini',
    location: 'Rovaniemi',
    description: {
      fi: 'Maailmankuuluja puukkoja vuodesta 1928. Tehtaanmyymälä ja Brand Store, ilmainen kaiverrus.',
      en: 'World-renowned knives since 1928. Factory outlet and Brand Store, free engraving.',
      de: 'Weltbekannte Puukko-Messer seit 1928. Fabrikverkauf und Brand Store. Kostenfreie Gravur.',
      ja: '1928年創業の世界的に有名なナイフ。工場直営アウトレットとブランドストア。刻印サービス無料。',
      es: 'Cuchillos de fama mundial desde 1928. Tienda de fábrica y Brand Store. Grabado gratuito.',
      'pt-BR': 'Facas mundialmente famosas desde 1928. Loja de fábrica e Brand Store. Gravação gratuita.',
      'zh-CN': '自 1928 年以来享誉世界的刀具。工厂直销店与品牌专卖店。免费刻字。',
      ko: '1928년부터 세계적으로 유명한 칼. 공장 직영점과 브랜드 매장. 각인 무료.',
      fr: 'Couteaux de renommée mondiale depuis 1928. Magasin d\'usine et boutique de marque. Gravure offerte.',
      it: 'Coltelli di fama mondiale dal 1928. Spaccio aziendale e Brand Store. Incisione gratuita.',
      nl: 'Wereldberoemde messen sinds 1928. Fabriekswinkel en merkwinkel. Gratis graveren.',
      sv: 'Världsberömda knivar sedan 1928. Fabriksbutik och Brand Store, gratis gravyr.'
    },
    url: 'https://www.marttiini.fi',
    categories: {
      fi: ['Puukot', 'Lahjat'],
      en: ['Knives', 'Gifts'],
      de: ['Messer', 'Geschenke'],
  ja: ['ナイフ', 'ギフト'],
      es: ['Cuchillos', 'Regalos'],
      'pt-BR': ['Facas', 'Presentes'],
      'zh-CN': ['刀具', '礼物'],
      ko: ['칼', '선물'],
      fr: ['Couteaux', 'Cadeaux'],
      it: ['Coltelli', 'Regali'],
      nl: ['Messen', 'Geschenken'],
      sv: ['Knivar', 'Presenter']
    },
    hasOnlineStore: true,
    hasPhysicalStore: true,
    theme: 'cabin',
    img: '/img/shop-marttiini.jpg',
  },
  {
    name: 'Pentik',
    location: 'Posio / koko Suomi',
    description: {
      fi: 'Maailman pohjoisin keramiikkatehdas Posiolla vuodesta 1971. Keramiikkaa, sisustusta ja designia.',
      en: "The world's northernmost ceramic factory in Posio since 1971. Ceramics, home decor and design.",
      de: 'Die nördlichste Keramikmanufaktur der Welt, in Posio seit 1971. Keramik, Wohnaccessoires und Design.',
      ja: '1971年創業、ポシオにある世界最北の陶器工房。陶器、インテリア、デザインアイテム。',
      es: 'La fábrica de cerámica más septentrional del mundo, en Posio desde 1971. Cerámica, decoración del hogar y diseño.',
      'pt-BR': 'A fábrica de cerâmica mais ao norte do mundo, em Posio desde 1971. Cerâmica, decoração e design.',
      'zh-CN': '自 1971 年起在波西奥运营的世界最北陶瓷工厂。陶瓷、家居装饰与设计。',
      ko: '1971년부터 포시오에서 운영 중인 세계 최북단 도자기 공방. 도자기, 인테리어, 디자인.',
      fr: "La fabrique de céramique la plus au nord du monde, à Posio depuis 1971. Céramique, décoration et design.",
      it: 'La fabbrica di ceramiche più a nord del mondo, a Posio dal 1971. Ceramiche, décor e design.',
      nl: 'De noordelijkste keramiekfabriek ter wereld in Posio sinds 1971. Keramiek, woondecoratie en design.',
      sv: 'Världens nordligaste keramikfabrik i Posio sedan 1971. Keramik, heminredning och design.'
    },
    url: 'https://www.pentik.com',
    categories: {
      fi: ['Keramiikka', 'Sisustus'],
      en: ['Ceramics', 'Home decor'],
      de: ['Keramik', 'Wohnen'],
  ja: ['陶器', 'インテリア'],
      es: ['Cerámica', 'Decoración'],
      'pt-BR': ['Cerâmica', 'Decoração'],
      'zh-CN': ['陶瓷', '家居装饰'],
      ko: ['도자기', '인테리어'],
      fr: ['Céramique', 'Décoration'],
      it: ['Ceramica', 'Décor'],
      nl: ['Keramiek', 'Wonen'],
      sv: ['Keramik', 'Heminredning']
    },
    hasOnlineStore: true,
    hasPhysicalStore: true,
    theme: 'ceramics',
    img: '/img/shop-pentik.jpg',
  },
  {
    name: 'Duodji Shop',
    location: 'Inari (Sajos)',
    description: {
      fi: 'Suomen laajin valikoima aitoja saamelaiskäsitöitä Sajos-kulttuurikeskuksessa.',
      en: "Finland's widest selection of authentic Sámi crafts at the Sajos cultural centre.",
      de: 'Finnlands größte Auswahl an authentischem Sámi-Handwerk im Kulturzentrum Sajos.',
      ja: 'Sajos文化センター内、フィンランド最大規模の本格的なサーミ工芸品セレクション。',
      es: 'La selección más amplia de Finlandia de auténtica artesanía sami, en el centro cultural Sajos.',
      'pt-BR': 'A mais ampla seleção da Finlândia de autêntico artesanato sámi, no centro cultural Sajos.',
      'zh-CN': '位于 Sajos 文化中心。芬兰种类最齐全的正宗萨米手工艺品。',
      ko: 'Sajos 문화 센터에 위치. 핀란드에서 가장 폭넓은 정통 사미 공예품 셀렉션.',
      fr: "La plus large sélection finlandaise d'artisanat sami authentique, au centre culturel Sajos.",
      it: "La più ampia selezione finlandese di autentico artigianato sami, al centro culturale Sajos.",
      nl: 'De grootste selectie authentieke Sami-ambachten in Finland, in het culturele centrum Sajos.',
      sv: 'Finlands bredaste urval av äkta samiskt hantverk i kulturcentret Sajos.'
    },
    url: 'https://duodjishop.fi',
    categories: {
      fi: ['Saamenkäsityöt', 'Duodji'],
      en: ['Sámi crafts', 'Duodji'],
      de: ['Sámi-Handwerk', 'Duodji'],
  ja: ['サーミの工芸品', 'ドゥオッジ'],
      es: ['Artesanía sami', 'Duodji'],
      'pt-BR': ['Artesanato sámi', 'Duodji'],
      'zh-CN': ['萨米工艺品', '杜奥德吉'],
      ko: ['사미 공예품', '두오지'],
      fr: ['Artisanat sami', 'Duodji'],
      it: ['Artigianato sami', 'Duodji'],
      nl: ['Sami-ambacht', 'Duodji'],
      sv: ['Samiskt hantverk', 'Duodji']
    },
    hasOnlineStore: true,
    hasPhysicalStore: true,
    theme: 'museum',
    img: '/img/shop-duodji.jpg',
  },
  {
    name: 'Samekki - Sámi Duodji',
    location: 'Inari',
    description: {
      fi: 'Käsintehtyä saamelaista hopeakorumuotoilua: sormukset, soljet ja perinteiset duodji-esineet.',
      en: 'Handcrafted Sámi silver jewellery: rings, brooches and traditional duodji pieces.',
      de: 'Handgefertigter Sámi-Silberschmuck: Ringe, Broschen und traditionelle Duodji-Stücke.',
      ja: '手作りのサーミ銀細工：指輪、ブローチ、伝統的なドゥオッジ作品。',
      es: 'Joyería sami en plata hecha a mano: anillos, broches y piezas duodji tradicionales.',
      'pt-BR': 'Joias sámi em prata feitas à mão: anéis, broches e peças duodji tradicionais.',
      'zh-CN': '手工制作的萨米银饰：戒指、胸针和传统杜奥吉(duodji)作品。',
      ko: '손으로 만든 사미 은세공: 반지, 브로치, 전통 두오지 작품.',
      fr: "Bijoux sami en argent faits main: bagues, broches et pièces duodji traditionnelles.",
      it: 'Gioielli sami in argento fatti a mano: anelli, spille e pezzi duodji tradizionali.',
      nl: 'Met de hand gemaakt Sami-zilverwerk: ringen, broches en traditionele duodji-stukken.',
      sv: 'Handgjorda samiska silversmycken: ringar, broscher och traditionella duodji-föremål.'
    },
    url: 'https://samekki.fi',
    categories: {
      fi: ['Hopea', 'Saamenkäsityöt'],
      en: ['Silver', 'Sámi crafts'],
      de: ['Silber', 'Sámi-Handwerk'],
  ja: ['銀細工', 'サーミの工芸品'],
      es: ['Plata', 'Artesanía sami'],
      'pt-BR': ['Prata', 'Artesanato sámi'],
      'zh-CN': ['银饰', '萨米工艺品'],
      ko: ['은세공', '사미 공예품'],
      fr: ['Argent', 'Artisanat sami'],
      it: ['Argento', 'Artigianato sami'],
      nl: ['Zilver', 'Sami-ambacht'],
      sv: ['Silver', 'Samiskt hantverk']
    },
    hasOnlineStore: true,
    hasPhysicalStore: true,
    theme: 'silver',
    img: '/img/shop-samekki.jpg',
  },
  {
    name: 'Piece of Lapland',
    location: 'Rovaniemi',
    description: {
      fi: 'Matkamuistoja, saamelaiskäsitöitä, puuveistoksia ja revontuliteemaisia tuotteita.',
      en: 'Souvenirs, Sámi crafts, wood carvings and aurora-themed products.',
      de: 'Souvenirs, Sámi-Handwerk, Holzschnitzereien und Produkte mit Polarlicht-Motiv.',
      ja: '北欧グッズ、サーミ工芸品、木彫り、オーロラをテーマにした商品。',
      es: 'Recuerdos, artesanía sami, tallas de madera y productos con temática de auroras boreales.',
      'pt-BR': 'Lembranças, artesanato sámi, esculturas em madeira e produtos com tema de aurora boreal.',
      'zh-CN': '纪念品、萨米工艺品、木雕,以及极光主题商品。',
      ko: '기념품, 사미 공예품, 목각, 그리고 오로라 테마 상품.',
      fr: "Souvenirs, artisanat sami, sculptures sur bois et produits sur le thème de l'aurore boréale.",
      it: "Souvenir, artigianato sami, sculture in legno e prodotti a tema aurora boreale.",
      nl: 'Souvenirs, Sami-ambacht, houtsnijwerk en producten met noorderlicht-thema.',
      sv: 'Souvenirer, samiskt hantverk, träsniderier och produkter med norrskenstema.'
    },
    url: 'https://www.pieceoflapland.fi',
    categories: {
      fi: ['Matkamuistot', 'Käsityöt'],
      en: ['Souvenirs', 'Crafts'],
      de: ['Souvenirs', 'Handwerk'],
  ja: ['北欧グッズ', '工芸品'],
      es: ['Recuerdos', 'Artesanía'],
      'pt-BR': ['Lembrancinhas', 'Artesanato'],
      'zh-CN': ['纪念品', '手工艺品'],
      ko: ['기념품', '공예품'],
      fr: ['Souvenirs', 'Artisanat'],
      it: ['Souvenir', 'Artigianato'],
      nl: ['Souvenirs', 'Ambacht'],
      sv: ['Souvenirer', 'Hantverk']
    },
    hasOnlineStore: true,
    hasPhysicalStore: true,
    theme: 'souvenirs',
    img: '/img/shop-piece.jpg',
  },
  {
    name: 'Rovaniemi Souvenirs Shop',
    location: 'Joulupukin Pajakylä',
    description: {
      fi: 'Käsintehtyjä poronsarvituotteita omassa pajassa, ilmainen kaiverrus. Napapiirillä.',
      en: 'Handcrafted reindeer-antler products in their own workshop, free engraving. On the Arctic Circle.',
      de: 'Handgefertigte Produkte aus Rentierhorn in eigener Werkstatt. Kostenfreie Gravur. Polarkreis.',
      ja: '自社工房で手作りするトナカイの角の製品。刻印サービス無料。北極圏。',
      es: 'Productos de asta de reno hechos a mano en su propio taller. Grabado gratuito. Círculo Polar Ártico.',
      'pt-BR': 'Produtos de chifre de rena feitos à mão no próprio ateliê. Gravação gratuita. Círculo Polar Ártico.',
      'zh-CN': '在自家工作坊手工制作的驯鹿角制品。免费刻字。北极圈。',
      ko: '자체 공방에서 손으로 만드는 순록 뿔 제품. 각인 무료. 북극권.',
      fr: "Produits en bois de renne faits main dans leur propre atelier. Gravure offerte. Cercle polaire arctique.",
      it: 'Prodotti in corno di renna fatti a mano nel proprio laboratorio. Incisione gratuita. Circolo Polare Artico.',
      nl: 'Met de hand gemaakte producten van rendiergewei in eigen werkplaats. Gratis graveren. Poolcirkel.',
      sv: 'Handgjorda produkter av renhorn i egen verkstad, gratis gravyr. Vid polcirkeln.'
    },
    url: 'https://www.rovaniemisouvenirsshop.fi',
    categories: {
      fi: ['Poronsarvi', 'Käsityöt'],
      en: ['Reindeer antler', 'Crafts'],
      de: ['Rentierhorn', 'Handwerk'],
  ja: ['トナカイの角', '工芸品'],
      es: ['Asta de reno', 'Artesanía'],
      'pt-BR': ['Chifre de rena', 'Artesanato'],
      'zh-CN': ['驯鹿角', '手工艺品'],
      ko: ['순록 뿔', '공예품'],
      fr: ['Bois de renne', 'Artisanat'],
      it: ['Corno di renna', 'Artigianato'],
      nl: ['Rendiergewei', 'Ambacht'],
      sv: ['Renhorn', 'Hantverk']
    },
    hasOnlineStore: true,
    hasPhysicalStore: true,
    theme: 'antler',
    img: '/img/shop-rov-souvenirs.jpg',
  },
  {
    name: 'Taigakoru',
    location: 'Oulu / koko Lappi',
    description: {
      fi: 'Lappi-aiheista hopeakorumuotoilua vuodesta 1981. Revontulet, eläimet, kätkytpallot. Oma paja.',
      en: 'Lapland-themed silver jewellery since 1981. Aurora, animals, locket pendants. Own workshop.',
      de: 'Silberschmuck mit Lappland-Motiven seit 1981. Polarlicht, Tiere, Anhänger. Eigene Werkstatt.',
      ja: '1981年からのラップランドをテーマにした銀細工。オーロラ、動物、ロケットペンダント。自社工房。',
      es: 'Joyería de plata con temática de Laponia desde 1981. Auroras, animales, medallones colgantes. Taller propio.',
      'pt-BR': 'Joias de prata com tema da Lapônia desde 1981. Auroras, animais, pingentes-medalhão. Ateliê próprio.',
      'zh-CN': '自 1981 年起的拉普兰主题银饰。极光、动物、小盒挂坠。自营工作坊。',
      ko: '1981년부터 시작된 라플란드 테마 은세공. 오로라, 동물, 로켓 펜던트. 자체 공방.',
      fr: "Bijoux en argent sur le thème de la Laponie depuis 1981. Aurore, animaux, médaillons. Atelier propre.",
      it: "Gioielli in argento a tema Lapponia dal 1981. Aurora, animali, medaglioni. Laboratorio proprio.",
      nl: 'Zilveren sieraden met Lapland-thema sinds 1981. Noorderlicht, dieren, medaillon-hangers. Eigen werkplaats.',
      sv: 'Silversmycken med Lappland-tema sedan 1981. Norrsken, djur, medaljonghängen. Egen verkstad.'
    },
    url: 'https://www.taigakoru.eu',
    categories: {
      fi: ['Hopea', 'Korut'],
      en: ['Silver', 'Jewellery'],
      de: ['Silber', 'Schmuck'],
  ja: ['銀細工', 'ジュエリー'],
      es: ['Plata', 'Joyas'],
      'pt-BR': ['Prata', 'Joias'],
      'zh-CN': ['银饰', '饰品'],
      ko: ['은세공', '장신구'],
      fr: ['Argent', 'Bijoux'],
      it: ['Argento', 'Gioielli'],
      nl: ['Zilver', 'Sieraden'],
      sv: ['Silver', 'Smycken']
    },
    hasOnlineStore: true,
    hasPhysicalStore: true,
    theme: 'aurora',
    img: '/img/shop-taiga.jpg',
  },
  {
    name: 'Lapin Kelloseppä',
    location: 'Rovaniemi',
    description: {
      fi: 'Pohjoisen luonnosta inspiroitua korumuotoilua: revontulikoruja, timantteja ja uniikkeja Lappi-sarjoja.',
      en: 'Jewellery design inspired by the northern wilderness: aurora pieces, diamonds and unique Lapland collections.',
      de: 'Schmuckdesign inspiriert von der nordischen Wildnis: Polarlicht-Stücke, Diamanten und Lappland-Editionen.',
      ja: '北極の大自然にインスパイアされたジュエリーデザイン：オーロラ作品、ダイヤモンド、ラップランド限定コレクション。',
      es: 'Diseño de joyería inspirado en la naturaleza salvaje del norte: piezas de auroras, diamantes y colecciones exclusivas de Laponia.',
      'pt-BR': 'Design de joias inspirado na natureza selvagem do norte: peças de aurora, diamantes e coleções exclusivas da Lapônia.',
      'zh-CN': '灵感源自北方荒野的珠宝设计：极光主题、钻石与独家拉普兰系列。',
      ko: '북극 황야에서 영감을 받은 주얼리 디자인: 오로라 작품, 다이아몬드, 유일무이한 라플란드 컬렉션.',
      fr: "Création de bijoux inspirée par la nature sauvage du Nord: pièces aurore boréale, diamants et collections uniques de Laponie.",
      it: "Design di gioielli ispirato alla natura selvaggia del nord: pezzi aurora, diamanti e collezioni esclusive della Lapponia.",
      nl: 'Sieraadontwerp geïnspireerd op de noordelijke wildernis: noorderlicht-stukken, diamanten en unieke Lapland-collecties.',
      sv: 'Smyckesdesign inspirerad av den nordliga vildmarken: norrskensföremål, diamanter och unika Lappland-kollektioner.'
    },
    url: 'https://www.lapinkelloseppa.fi',
    categories: {
      fi: ['Korut', 'Timantit'],
      en: ['Jewellery', 'Diamonds'],
      de: ['Schmuck', 'Diamanten'],
  ja: ['ジュエリー', 'ダイヤモンド'],
      es: ['Joyas', 'Diamantes'],
      'pt-BR': ['Joias', 'Diamantes'],
      'zh-CN': ['饰品', '钻石'],
      ko: ['장신구', '다이아몬드'],
      fr: ['Bijoux', 'Diamants'],
      it: ['Gioielli', 'Diamanti'],
      nl: ['Sieraden', 'Diamanten'],
      sv: ['Smycken', 'Diamanter']
    },
    hasOnlineStore: true,
    hasPhysicalStore: true,
    theme: 'arctic',
    img: '/img/shop-kelloseppa.jpg',
  },
  {
    name: 'Arctic Design Shop',
    location: 'Rovaniemi',
    description: {
      fi: 'Paikallisten suunnittelijoiden taidetta, koruja ja muotia historiallisessa Kauppayhtiö-rakennuksessa.',
      en: 'Local designers\' art, jewellery and fashion in the historic Kauppayhtiö building.',
      de: 'Kunst, Schmuck und Mode lokaler Designer im historischen Kauppayhtiö-Gebäude.',
      ja: '歴史あるKauppayhtiöビルにある、地元デザイナーによるアート、ジュエリー、ファッション。',
      es: "Arte, joyas y moda de diseñadores locales en el histórico edificio Kauppayhtiö.",
      'pt-BR': "Arte, joias e moda de designers locais no histórico prédio Kauppayhtiö.",
      'zh-CN': '历史悠久的 Kauppayhtiö 大楼内,本地设计师的艺术品、饰品和时尚单品。',
      ko: '역사적인 Kauppayhtiö 건물 안의 현지 디자이너 작품, 장신구, 패션 아이템.',
      fr: "Art, bijoux et mode de créateurs locaux dans le bâtiment historique Kauppayhtiö.",
      it: 'Arte, gioielli e moda di designer locali nello storico edificio Kauppayhtiö.',
      nl: 'Kunst, sieraden en mode van lokale ontwerpers in het historische Kauppayhtiö-gebouw.',
      sv: 'Lokala designers konst, smycken och mode i den historiska Kauppayhtiö-byggnaden.'
    },
    url: 'https://arcticdesignshop.com',
    categories: {
      fi: ['Design', 'Korut'],
      en: ['Design', 'Jewellery'],
      de: ['Design', 'Schmuck'],
  ja: ['デザイン', 'ジュエリー'],
      es: ['Diseño', 'Joyas'],
      'pt-BR': ['Design', 'Joias'],
      'zh-CN': ['设计', '饰品'],
      ko: ['디자인', '장신구'],
      fr: ['Design', 'Bijoux'],
      it: ['Design', 'Gioielli'],
      nl: ['Design', 'Sieraden'],
      sv: ['Design', 'Smycken']
    },
    hasOnlineStore: false,
    hasPhysicalStore: true,
    theme: 'design',
    img: '/img/shop-arctic-design.jpg',
  },
  {
    name: 'Christmas House Shop',
    location: 'Joulupukin Pajakylä',
    description: {
      fi: 'Pajakylän suurin matkamuistomyymälä: lappilaisia tuotteita, koruja, herkkuja ja todistuksia.',
      en: "Santa's Village's largest souvenir store: Lapland products, jewellery, treats and certificates.",
      de: 'Das größte Souvenirgeschäft im Weihnachtsmanndorf: Lappland-Produkte, Schmuck, Spezialitäten und Zertifikate.',
      ja: 'サンタクロース村最大のお土産ショップ：ラップランド製品、ジュエリー、お菓子、認定証。',
      es: 'La mayor tienda de recuerdos del Pueblo de Papá Noel: productos de Laponia, joyas, golosinas y certificados.',
      'pt-BR': 'A maior loja de lembranças da Vila do Papai Noel: produtos da Lapônia, joias, guloseimas e certificados.',
      'zh-CN': '圣诞老人村最大的纪念品商店：拉普兰商品、饰品、美食与证书。',
      ko: '산타클로스 마을 최대의 기념품점: 라플란드 상품, 장신구, 별미, 인증서.',
      fr: "La plus grande boutique de souvenirs du village du Père Noël: produits lapons, bijoux, gourmandises et certificats.",
      it: 'Il più grande negozio di souvenir del Villaggio di Babbo Natale: prodotti lapponi, gioielli, dolci e certificati.',
      nl: 'De grootste souvenirwinkel van het Kerstmandorp: Lapland-producten, sieraden, lekkernijen en certificaten.',
      sv: 'Jultomtens bys största souvenirbutik: Lappland-produkter, smycken, delikatesser och certifikat.'
    },
    url: 'https://christmashousesanta.fi',
    categories: {
      fi: ['Matkamuistot', 'Herkut'],
      en: ['Souvenirs', 'Treats'],
      de: ['Souvenirs', 'Spezialitäten'],
  ja: ['北欧グッズ', 'お菓子'],
      es: ['Recuerdos', 'Delicias'],
      'pt-BR': ['Lembrancinhas', 'Delícias'],
      'zh-CN': ['纪念品', '美食'],
      ko: ['기념품', '별미'],
      fr: ['Souvenirs', 'Gourmandises'],
      it: ['Souvenir', 'Dolci'],
      nl: ['Souvenirs', 'Lekkernijen'],
      sv: ['Souvenirer', 'Delikatesser']
    },
    hasOnlineStore: false,
    hasPhysicalStore: true,
    theme: 'berries',
    img: '/img/shop-christmas.jpg',
  },
  {
    name: 'Korundi Shop',
    location: 'Rovaniemi',
    description: {
      fi: 'Arktista taidetta ja designia Korundi-kulttuuritalossa. Uniikkeja lahjoja ja korkeatasoisia tuotteita.',
      en: 'Arctic art and design at the Korundi cultural centre. Unique gifts and high-end products.',
      de: 'Arktische Kunst und Design im Kulturhaus Korundi. Einzigartige Geschenke und hochwertige Produkte.',
      ja: 'Korundi文化センターで北極のアートとデザインを。世界に一つの贈り物と上質な商品。',
      es: 'Arte y diseño árticos en el centro cultural Korundi. Regalos únicos y productos de alta gama.',
      'pt-BR': 'Arte e design árticos no centro cultural Korundi. Presentes únicos e produtos de alto padrão.',
      'zh-CN': '在 Korundi 文化中心欣赏并选购北极艺术与设计。独特礼物与高端商品。',
      ko: 'Korundi 문화 센터의 북극 예술과 디자인. 독특한 선물과 고급 상품.',
      fr: "Art et design arctiques au centre culturel Korundi. Cadeaux uniques et produits haut de gamme.",
      it: 'Arte e design artici al centro culturale Korundi. Regali unici e prodotti di alta gamma.',
      nl: 'Arctische kunst en design in het culturele centrum Korundi. Unieke geschenken en topproducten.',
      sv: 'Arktisk konst och design i kulturhuset Korundi. Unika presenter och exklusiva produkter.'
    },
    url: 'https://korundi.fi',
    categories: {
      fi: ['Taide', 'Design'],
      en: ['Art', 'Design'],
      de: ['Kunst', 'Design'],
  ja: ['アート', 'デザイン'],
      es: ['Arte', 'Diseño'],
      'pt-BR': ['Arte', 'Design'],
      'zh-CN': ['艺术', '设计'],
      ko: ['예술', '디자인'],
      fr: ['Art', 'Design'],
      it: ['Arte', 'Design'],
      nl: ['Kunst', 'Design'],
      sv: ['Konst', 'Design']
    },
    hasOnlineStore: false,
    hasPhysicalStore: true,
    theme: 'museum',
    img: '/img/shop-korundi.jpg',
  },
  {
    name: 'SHOPPI Craft & Design',
    location: 'Levi',
    description: {
      fi: 'Suomalaisten käsityöläisten koruja, asusteita ja matkamuistoja Levin rinteen juurella.',
      en: 'Jewellery, accessories and souvenirs by Finnish artisans at the foot of Levi slope.',
      de: 'Schmuck, Accessoires und Souvenirs finnischer Handwerker am Fuße der Piste in Levi.',
      ja: 'レヴィのゲレンデの麓で、フィンランドの職人による宝飾、アクセサリー、北欧グッズを。',
      es: 'Joyas, complementos y recuerdos de artesanos finlandeses al pie de la pista de Levi.',
      'pt-BR': 'Joias, acessórios e lembranças de artesãos finlandeses ao pé da encosta de Levi.',
      'zh-CN': '位于莱维滑雪坡脚下,芬兰工匠制作的饰品、配饰与纪念品。',
      ko: '레비 슬로프 기슭, 핀란드 장인이 만든 장신구, 액세서리, 기념품.',
      fr: "Bijoux, accessoires et souvenirs d'artisans finlandais, au pied des pistes de Levi.",
      it: 'Gioielli, accessori e souvenir di artigiani finlandesi ai piedi della pista di Levi.',
      nl: 'Sieraden, accessoires en souvenirs van Finse ambachtslieden aan de voet van de Levi-piste.',
      sv: 'Smycken, accessoarer och souvenirer av finska hantverkare vid foten av Levibacken.'
    },
    url: 'https://www.levi.fi',
    categories: {
      fi: ['Korut', 'Design'],
      en: ['Jewellery', 'Design'],
      de: ['Schmuck', 'Design'],
  ja: ['ジュエリー', 'デザイン'],
      es: ['Joyas', 'Diseño'],
      'pt-BR': ['Joias', 'Design'],
      'zh-CN': ['饰品', '设计'],
      ko: ['장신구', '디자인'],
      fr: ['Bijoux', 'Design'],
      it: ['Gioielli', 'Design'],
      nl: ['Sieraden', 'Design'],
      sv: ['Smycken', 'Design']
    },
    hasOnlineStore: false,
    hasPhysicalStore: true,
    theme: 'wool',
    img: '/img/shop-shoppi.jpg',
  },
  {
    name: 'Siida Shop',
    location: 'Inari (Saamelaismuseo)',
    description: {
      fi: 'Saamelaismuseon myymälä: duodji-käsitöitä, koruja ja Lapin luontoon liittyviä lahjoja.',
      en: 'The Sámi Museum store: duodji crafts, jewellery and gifts inspired by Lapland nature.',
      de: 'Der Museumsshop des Sámi-Museums: Duodji-Handwerk, Schmuck und Geschenke mit Lappland-Bezug.',
      ja: 'サーミ博物館のショップ：ドゥオッジの工芸品、ジュエリー、ラップランドの自然をモチーフにしたギフト。',
      es: 'La tienda del Museo Sami: artesanía duodji, joyas y regalos inspirados en la naturaleza de Laponia.',
      'pt-BR': 'A loja do Museu Sámi: artesanato duodji, joias e presentes inspirados na natureza da Lapônia.',
      'zh-CN': '萨米博物馆商店：杜奥吉(duodji)手工艺品、饰品,以及以拉普兰自然为灵感的礼物。',
      ko: '사미 박물관 매장: 두오지 공예품, 장신구, 라플란드 자연에서 영감을 받은 선물.',
      fr: "Boutique du musée sami: artisanat duodji, bijoux et cadeaux inspirés de la nature lapone.",
      it: 'Negozio del Museo Sami: artigianato duodji, gioielli e regali ispirati alla natura della Lapponia.',
      nl: 'Winkel van het Sami-museum: duodji-ambacht, sieraden en geschenken geïnspireerd op de Laplandse natuur.',
      sv: 'Samemuseets butik: duodji-hantverk, smycken och presenter inspirerade av Lapplands natur.'
    },
    url: 'https://siida.fi',
    categories: {
      fi: ['Duodji', 'Lahjat'],
      en: ['Duodji', 'Gifts'],
      de: ['Duodji', 'Geschenke'],
  ja: ['ドゥオッジ', 'ギフト'],
      es: ['Duodji', 'Regalos'],
      'pt-BR': ['Duodji', 'Presentes'],
      'zh-CN': ['杜奥德吉', '礼物'],
      ko: ['두오지', '선물'],
      fr: ['Duodji', 'Cadeaux'],
      it: ['Duodji', 'Regali'],
      nl: ['Duodji', 'Geschenken'],
      sv: ['Duodji', 'Presenter']
    },
    hasOnlineStore: false,
    hasPhysicalStore: true,
    theme: 'forest',
    img: '/img/shop-siida.jpg',
  },
  {
    name: 'Tankavaaran Kultakylä',
    location: 'Tankavaara (Sodankylä)',
    description: {
      fi: 'Kultakoruja, aitoa kultaa ja mineraaleja Lapin kullankaivuuperinteen keskuksesta.',
      en: 'Gold jewellery, real gold and minerals from the heart of Lapland\'s gold-panning tradition.',
      de: 'Goldschmuck, echtes Gold und Mineralien aus dem Zentrum der lappländischen Goldwaschtradition.',
      ja: 'ラップランドの砂金採取の伝統の中心地から、金のジュエリー、本物の金、鉱物をお届け。',
      es: "Joyas de oro, oro auténtico y minerales desde el corazón de la tradición de búsqueda de oro de Laponia.",
      'pt-BR': "Joias de ouro, ouro de verdade e minerais do coração da tradição de garimpo de ouro da Lapônia.",
      'zh-CN': '来自拉普兰淘金传统中心的金饰、真金与矿石。',
      ko: '라플란드 사금 채취 전통의 중심지에서 만드는 금 장신구, 진짜 금과 광물.',
      fr: "Bijoux en or, or véritable et minéraux issus du cœur de la tradition d'orpaillage de Laponie.",
      it: "Gioielli in oro, oro vero e minerali dal cuore della tradizione lapponese della ricerca dell'oro.",
      nl: 'Gouden sieraden, echt goud en mineralen uit het hart van de Laplandse goudwastraditie.',
      sv: 'Guldsmycken, äkta guld och mineraler från hjärtat av Lapplands guldvaskningstradition.'
    },
    url: 'https://www.tankavaara.fi',
    categories: {
      fi: ['Kulta', 'Mineraalit'],
      en: ['Gold', 'Minerals'],
      de: ['Gold', 'Mineralien'],
  ja: ['金', '鉱物'],
      es: ['Oro', 'Minerales'],
      'pt-BR': ['Ouro', 'Minerais'],
      'zh-CN': ['黄金', '矿物'],
      ko: ['금', '광물'],
      fr: ['Or', 'Minéraux'],
      it: ['Oro', 'Minerali'],
      nl: ['Goud', 'Mineralen'],
      sv: ['Guld', 'Mineraler']
    },
    hasOnlineStore: false,
    hasPhysicalStore: true,
    theme: 'gold',
    img: '/img/shop-tankavaara.jpg',
  },
];

const loaders = {
  fi: () => import('./LocalShops.copy.fi'),
  de: () => import('./LocalShops.copy.de'),
  ja: () => import('./LocalShops.copy.ja'),
  es: () => import('./LocalShops.copy.es'),
  'pt-BR': () => import('./LocalShops.copy.ptBR'),
  'zh-CN': () => import('./LocalShops.copy.zhCN'),
  ko: () => import('./LocalShops.copy.ko'),
  fr: () => import('./LocalShops.copy.fr'),
  it: () => import('./LocalShops.copy.it'),
  nl: () => import('./LocalShops.copy.nl'),
  sv: () => import('./LocalShops.copy.sv'),
} as const;

const cache: Partial<Record<import('../lang').Lang, CopyShape>> = { en: enCopy };

export default function LocalShops() {
  const { lang } = useLang();
  const t = useCopy<CopyShape>(enCopy, lang, loaders, cache);
  const onlineShops = shops.filter((s) => s.hasOnlineStore);
  const physicalShops = shops.filter((s) => s.hasPhysicalStore);

  return (
    <section id="putiikit" className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm tracking-[0.2em] uppercase text-forest font-body">
            {t.eyebrow}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl mt-2 text-night [text-wrap:balance]">
            {t.heading}
          </h2>
          <p className="text-warm-gray mt-4 max-w-xl mx-auto [text-wrap:pretty]">
            {t.sub(shops.length)}
          </p>
        </div>

        {/* Online stores first — only those with shipping */}
        <h3 className="font-heading text-2xl text-night mb-4 flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-amber" />
          {t.onlineHeading}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {onlineShops.map((shop) => (
            <ShopCard
              key={`online-${shop.name}`}
              shop={shop}
              lang={lang}
              onlineBadge={t.onlineBadge}
              physicalBadge={t.physicalBadge}
            />
          ))}
        </div>

        {/* Physical stores — every boutique. Some appear in both lists. */}
        <h3 className="font-heading text-2xl text-night mb-2 flex items-center gap-2">
          <MapPin className="w-5 h-5 text-forest" />
          {t.physicalHeading}
        </h3>
        <p className="text-warm-gray text-sm mb-6 max-w-xl">{t.physicalSub}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {physicalShops.map((shop) => (
            <ShopCard
              key={`physical-${shop.name}`}
              shop={shop}
              lang={lang}
              onlineBadge={t.onlineBadge}
              physicalBadge={t.physicalBadge}
            />
          ))}
        </div>

        <div className="text-center mt-12 p-6 bg-white rounded-2xl shadow-sm">
          <p className="text-night font-heading text-xl mb-2">
            {t.ctaHeading}
          </p>
          <p className="text-warm-gray text-sm mb-4">
            {t.ctaBody}
          </p>
          <a
            href={`mailto:info@laplandvibes.com?subject=${encodeURIComponent(t.ctaSubject)}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber text-white font-bold rounded-full hover:bg-amber-light transition-colors"
          >
            {t.ctaButton}
          </a>
        </div>
      </div>
    </section>
  );
}

function ShopCard({
  shop,
  lang,
  onlineBadge,
  physicalBadge,
}: {
  shop: Shop;
  lang: Lang;
  onlineBadge: string;
  physicalBadge: string;
}) {
  return (
    <a
      href={utmLink(shop.url, shop.name)}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-36 overflow-hidden">
        <GradientPlaceholder theme={shop.theme} imgSrc={shop.img} ariaLabel={shop.name} />
        <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
        <div className="absolute top-2 right-2 flex flex-col items-end gap-1">
          {shop.hasOnlineStore && (
            <span className="text-[9px] font-bold bg-forest text-white px-2 py-0.5 rounded-full shadow">
              {onlineBadge}
            </span>
          )}
          {shop.hasPhysicalStore && (
            <span className="text-[9px] font-bold bg-amber text-white px-2 py-0.5 rounded-full shadow">
              {physicalBadge}
            </span>
          )}
        </div>
        <div className="absolute bottom-2 left-3 flex items-center gap-1 text-xs text-white/90">
          <MapPin className="w-3 h-3" />
          <span>{shop.location}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-heading text-lg text-night group-hover:text-amber transition-colors leading-tight">
            {shop.name}
          </h4>
          <ExternalLink className="w-3.5 h-3.5 text-warm-gray/30 group-hover:text-amber transition-colors shrink-0 mt-1" />
        </div>

        <p className="text-warm-gray text-xs leading-relaxed flex-1">
          {shop.description[lang]}
        </p>

        <div className="flex flex-wrap gap-1 mt-3 pt-2 border-t border-gray-100">
          {shop.categories[lang].map((cat) => (
            <span
              key={cat}
              className="text-[9px] font-semibold bg-amber/10 text-amber px-1.5 py-0.5 rounded-full"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
