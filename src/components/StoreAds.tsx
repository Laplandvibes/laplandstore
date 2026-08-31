import { Gem, Sparkles, Truck, Leaf, ShieldCheck, Globe, Snowflake, Mountain, Flag } from 'lucide-react';
import ProductBrandAd, { type ProductAdBrand, type ProductAdCopy } from './ProductBrandAd';
import { KULTA_CENTER, IVALO, SCANDINAVIAN_OUTDOOR } from '../lib/affiliate';

/* ─────────────────────────────────────────────────────────────────────────
 * Kulta-Center — Finnish watch & jewellery house since 1933, incl. Kalevala
 * (Finnish design jewellery). Skin: light card, Kalevala-ish warm gold accent,
 * graphite ink. Ships free across the EEA (Europe-wide), so safe for a global
 * audience. Evergreen hook: free shipping + 1–2 day Europe delivery.
 * ──────────────────────────────────────────────────────────────────────── */
const KC_BRAND: ProductAdBrand = {
  ns: 'kc',
  accent: '#B8893A',
  ink: '#8A5A1E',
  stage: ['#F6EEDF', '#E9D7B8'],
  cardBg: '#FFFDF8',
};

const KC_COPY: ProductAdCopy = {
  eyebrow: {
    en: 'Finnish jewellery', fi: 'Suomalaiset korut', de: 'Finnischer Schmuck',
    ja: 'フィンランドのジュエリー', es: 'Joyería finlandesa', 'pt-BR': 'Joias finlandesas',
    'zh-CN': '芬兰珠宝', ko: '핀란드 주얼리', fr: 'Bijoux finlandais',
    it: 'Gioielli finlandesi', nl: 'Finse sieraden', sv: 'Finska smycken',
  },
  headline: {
    en: 'Looking for a real Finnish gift? Kalevala jewellery and Nordic watches at Kulta-Center.',
    fi: 'Etsitkö aitoa suomalaista lahjaa? Kulta-Centeristä löydät Kalevala-korut ja pohjoismaiset kellot.',
    de: 'Auf der Suche nach einem echten finnischen Geschenk? Kalevala-Schmuck und nordische Uhren bei Kulta-Center.',
    ja: '本物のフィンランドの贈り物をお探しですか?Kulta-Center にカレワラのジュエリーと北欧の時計が揃います。',
    es: '¿Busca un regalo finlandés de verdad? Joyas Kalevala y relojes nórdicos en Kulta-Center.',
    'pt-BR': 'Procurando um presente finlandês de verdade? Joias Kalevala e relógios nórdicos na Kulta-Center.',
    'zh-CN': '想找一份真正的芬兰礼物?Kulta-Center 有 Kalevala 珠宝与北欧腕表。',
    ko: '진짜 핀란드 선물을 찾고 계신가요? Kulta-Center의 칼레발라 주얼리와 북유럽 시계를 만나보세요.',
    fr: 'Vous cherchez un vrai cadeau finlandais ? Bijoux Kalevala et montres nordiques chez Kulta-Center.',
    it: 'Cerca un autentico regalo finlandese? Gioielli Kalevala e orologi nordici da Kulta-Center.',
    nl: 'Op zoek naar een echt Fins cadeau? Kalevala-sieraden en Noordse horloges bij Kulta-Center.', sv: 'Letar du efter en äkta finsk present? Kalevala-smycken och nordiska klockor hos Kulta-Center.',
  },
  sub: {
    en: 'A family jeweller since 1933, with Kalevala Koru and other Finnish and Nordic brands in one place. Handy when you want a gift that lasts, not another airport souvenir.',
    fi: 'Perheen kultaseppä vuodesta 1933. Saman katon alta löydät Kalevala Korun ja muut suomalaiset ja pohjoismaiset merkit. Kun haluat kestävän lahjan etkä lentokentän matkamuistoa, tämä on oikea osoite.',
    de: 'Ein Familienjuwelier seit 1933, mit Kalevala Koru und weiteren finnischen und nordischen Marken an einem Ort. Praktisch, wenn Sie ein Geschenk wollen, das bleibt, statt eines weiteren Flughafen-Souvenirs.',
    ja: '1933年から続く家族経営の宝飾店。カレワラ・コルをはじめ、フィンランドや北欧のブランドが一か所に揃います。空港の土産ではなく、長く使える贈り物が欲しいときに。',
    es: 'Una joyería familiar desde 1933, con Kalevala Koru y otras marcas finlandesas y nórdicas en un mismo sitio. Útil cuando quiere un regalo que dura, no otro recuerdo de aeropuerto.',
    'pt-BR': 'Uma joalheria familiar desde 1933, com Kalevala Koru e outras marcas finlandesas e nórdicas no mesmo lugar. Útil quando você quer um presente que dura, não mais uma lembrança de aeroporto.',
    'zh-CN': '自 1933 年传承的家族珠宝店,把 Kalevala Koru 与其他芬兰、北欧品牌汇聚一处。想要一件经久耐用的礼物,而不是又一件机场纪念品时,很合适。',
    ko: '1933년부터 이어온 가족 보석상으로, 칼레발라 코루를 비롯한 핀란드·북유럽 브랜드를 한곳에 모았습니다. 공항 기념품이 아니라 오래 쓰는 선물을 원할 때 좋습니다.',
    fr: 'Un bijoutier familial depuis 1933, avec Kalevala Koru et d’autres marques finlandaises et nordiques au même endroit. Pratique quand vous voulez un cadeau qui dure, pas un énième souvenir d’aéroport.',
    it: 'Un gioielliere di famiglia dal 1933, con Kalevala Koru e altri marchi finlandesi e nordici in un unico posto. Comodo quando vuoi un regalo che dura, non l’ennesimo souvenir da aeroporto.',
    nl: 'Een familiejuwelier sinds 1933, met Kalevala Koru en andere Finse en Noordse merken op één plek. Handig als u een cadeau wilt dat blijft, niet weer een luchthavensouvenir.', sv: 'En familjejuvelerare sedan 1933, med Kalevala Koru och andra finska och nordiska märken på ett ställe. Bra när du vill ha en present som håller, inte ännu en flygplatssouvenir.',
  },
  trust: [
    {
      icon: Gem,
      label: {
        en: 'Kalevala Koru & Finnish design', fi: 'Kalevala Koru ja suomalainen design',
        de: 'Kalevala Koru & finnisches Design', ja: 'カレワラ・コルとフィンランドのデザイン',
        es: 'Kalevala Koru y diseño finlandés', 'pt-BR': 'Kalevala Koru e design finlandês',
        'zh-CN': 'Kalevala Koru 与芬兰设计', ko: '칼레발라 코루와 핀란드 디자인',
        fr: 'Kalevala Koru et design finlandais', it: 'Kalevala Koru e design finlandese',
        nl: 'Kalevala Koru & Fins design', sv: 'Kalevala Koru och finsk design',
      },
    },
    {
      icon: ShieldCheck,
      label: {
        en: 'Family jeweller since 1933', fi: 'Perheen kultaseppä vuodesta 1933',
        de: 'Familienjuwelier seit 1933', ja: '1933年創業の家族経営宝飾店',
        es: 'Joyería familiar desde 1933', 'pt-BR': 'Joalheria familiar desde 1933',
        'zh-CN': '家族珠宝店,始于 1933 年', ko: '1933년부터 이어온 가족 보석상',
        fr: 'Bijoutier familial depuis 1933', it: 'Gioielliere di famiglia dal 1933',
        nl: 'Familiejuwelier sinds 1933', sv: 'Familjejuvelerare sedan 1933',
      },
    },
    {
      icon: Truck,
      label: {
        // 🔴 Luki 13.8.2026 asti "Ships across Europe in a few days". Se ei
        // pidä paikkaansa: Kulta-Centerin oma sivu (info-ja-ostaminen) sanoo
        // "Mikäli olet tilaamassa tuotetta ulkomaille, pyydämme ottamaan
        // meihin yhteyttä. Ulkomaille tilattaessa tuotteen hintaan lisätään
        // toimituskulut, jotka ilmoitetaan asiakkaalle henkilökohtaisesti."
        // Ulkomaantilaus ei siis ole muutaman päivän kassatapahtuma.
        en: 'Orders outside Finland: shipping agreed with them first',
        fi: 'Ulkomaille: toimituskulut sovitaan heidän kanssaan erikseen',
        de: 'Lieferung ins Ausland: Versand vorab mit ihnen absprechen',
        ja: 'フィンランド国外への注文は、送料を先に相談する必要があります',
        es: 'Pedidos fuera de Finlandia: el envío se acuerda con ellos',
        'pt-BR': 'Pedidos fora da Finlândia: o frete é combinado com eles',
        'zh-CN': '寄往芬兰以外：运费需先与他们商定',
        ko: '핀란드 외 지역 주문은 배송비를 먼저 협의합니다',
        fr: 'Hors Finlande : les frais de port sont convenus avec eux',
        it: 'Ordini fuori dalla Finlandia: la spedizione si concorda con loro',
        nl: 'Buiten Finland: verzending wordt vooraf met hen afgesproken',
        sv: 'Utanför Finland: frakten kommer man överens om med dem',
      },
    },
  ],
  offerIcon: Truck,
  offer: {
    // 🔴 Luki "Free delivery within Europe". Kumppanin oma ehto: "ilmainen
    // toimitus kaikille yli 50 € tilauksille Suomen alueella" — siis Suomi,
    // ei Eurooppa, ja vasta 50 eurosta ylöspäin.
    en: 'Free delivery in Finland over €50', fi: 'Ilmainen toimitus Suomessa yli 50 €',
    de: 'Kostenlose Lieferung in Finnland ab 50 €', ja: 'フィンランド国内は 50 € 以上で送料無料',
    es: 'Envío gratis en Finlandia desde 50 €', 'pt-BR': 'Frete grátis na Finlândia acima de 50 €',
    'zh-CN': '芬兰境内满 50 € 免运费', ko: '핀란드 내 50 € 이상 무료 배송',
    fr: 'Livraison gratuite en Finlande dès 50 €', it: 'Spedizione gratuita in Finlandia oltre 50 €',
    nl: 'Gratis levering in Finland vanaf € 50', sv: 'Fri frakt i Finland över 50 €',
  },
  cta: {
    en: 'Browse Kulta-Center', fi: 'Selaa Kulta-Centeriä', de: 'Kulta-Center ansehen',
    ja: 'Kulta-Center を見る', es: 'Ver Kulta-Center', 'pt-BR': 'Ver a Kulta-Center',
    'zh-CN': '逛逛 Kulta-Center', ko: 'Kulta-Center 둘러보기', fr: 'Découvrir Kulta-Center',
    it: 'Esplora Kulta-Center', nl: 'Bekijk Kulta-Center', sv: 'Bläddra hos Kulta-Center',
  },
  soldBy: {
    en: 'Sold by Kulta-Center', fi: 'Myynti: Kulta-Center', de: 'Verkauf durch Kulta-Center',
    ja: '販売:Kulta-Center', es: 'Vendido por Kulta-Center', 'pt-BR': 'Vendido pela Kulta-Center',
    'zh-CN': '由 Kulta-Center 销售', ko: 'Kulta-Center 판매', fr: 'Vendu par Kulta-Center',
    it: 'Venduto da Kulta-Center', nl: 'Verkocht door Kulta-Center', sv: 'Säljs av Kulta-Center',
  },
  stageBadge: {
    en: 'Since 1933', fi: 'Vuodesta 1933', de: 'Seit 1933', ja: '1933年創業',
    es: 'Desde 1933', 'pt-BR': 'Desde 1933', 'zh-CN': '始于 1933 年', ko: '1933년 설립',
    fr: 'Depuis 1933', it: 'Dal 1933', nl: 'Sinds 1933', sv: 'Sedan 1933',
  },
};

export function KultaCenterAd({ sid = 'jewellery_gift', className = '' }: { sid?: string; className?: string }) {
  return <ProductBrandAd partner={KULTA_CENTER} brand={KC_BRAND} copy={KC_COPY} sid={sid} className={className} />;
}

/* ─────────────────────────────────────────────────────────────────────────
 * IVALO.COM — marketplace of 100+ Finnish & Nordic sustainable fashion/design
 * brands. Skin: light card, black ink (their wordmark is black). Ships EU-wide
 * (named list) + worldwide at checkout; free shipping over 200 €.
 * ──────────────────────────────────────────────────────────────────────── */
const IVALO_BRAND: ProductAdBrand = {
  ns: 'iv',
  accent: '#111111',
  ink: '#111111',
  stage: ['#F4F4F2', '#E6E6E2'],
  cardBg: '#FFFFFF',
};

const IVALO_COPY: ProductAdCopy = {
  eyebrow: {
    en: 'Finnish design, delivered', fi: 'Suomalaista designia kotiin',
    de: 'Finnisches Design, geliefert', ja: 'フィンランドのデザインをお届け',
    es: 'Diseño finlandés, a domicilio', 'pt-BR': 'Design finlandês, entregue',
    'zh-CN': '芬兰设计,送货到家', ko: '핀란드 디자인, 집까지',
    fr: 'Design finlandais, livré', it: 'Design finlandese, a casa',
    nl: 'Fins design, thuisbezorgd', sv: 'Finsk design, levererad',
  },
  headline: {
    en: 'Take Finnish design home, even after the trip. 100+ Nordic brands at IVALO.COM.',
    fi: 'Vie suomalaista designia kotiin, vielä reissun jälkeenkin. Yli 100 pohjoismaista merkkiä IVALO.COMissa.',
    de: 'Holen Sie finnisches Design nach Hause, auch nach der Reise. Über 100 nordische Marken bei IVALO.COM.',
    ja: '旅のあとでも、フィンランドのデザインを家に。IVALO.COM に北欧の100以上のブランド。',
    es: 'Llévese el diseño finlandés a casa, incluso después del viaje. Más de 100 marcas nórdicas en IVALO.COM.',
    'pt-BR': 'Leve o design finlandês para casa, mesmo depois da viagem. Mais de 100 marcas nórdicas na IVALO.COM.',
    'zh-CN': '哪怕旅程结束,也能把芬兰设计带回家。IVALO.COM 汇集 100 多个北欧品牌。',
    ko: '여행이 끝난 뒤에도 핀란드 디자인을 집으로. IVALO.COM의 북유럽 브랜드 100여 곳.',
    fr: 'Ramenez le design finlandais chez vous, même après le voyage. Plus de 100 marques nordiques sur IVALO.COM.',
    it: 'Porta a casa il design finlandese, anche dopo il viaggio. Oltre 100 marchi nordici su IVALO.COM.',
    nl: 'Neem Fins design mee naar huis, ook na de reis. Meer dan 100 Noordse merken op IVALO.COM.', sv: 'Ta med dig finsk design hem, även efter resan. Över 100 nordiska märken på IVALO.COM.',
  },
  sub: {
    en: 'IVALO.COM gathers over 100 Finnish and Nordic fashion and design brands in one shop, with a focus on responsibly made pieces. Clothing, bags and accessories you can order from home and have delivered across Europe.',
    fi: 'IVALO.COM kokoaa yli 100 suomalaista ja pohjoismaista muoti- ja designmerkkiä samaan kauppaan, ja mukana on erityisesti vastuullisesti valmistettuja tuotteita. Vaatteet, laukut ja asusteet tilaat kotiisi, ja ne toimitetaan ympäri Eurooppaa.',
    de: 'IVALO.COM versammelt über 100 finnische und nordische Mode- und Designmarken in einem Shop, mit Fokus auf verantwortungsvoll gefertigte Stücke. Kleidung, Taschen und Accessoires, die Sie von zu Hause bestellen und europaweit liefern lassen können.',
    ja: 'IVALO.COM は、責任ある作り方にこだわるフィンランドと北欧のファッション・デザインブランドを100以上集めたショップ。家から注文して、ヨーロッパ各地へ届けられる衣類・バッグ・アクセサリーが揃います。',
    es: 'IVALO.COM reúne más de 100 marcas finlandesas y nórdicas de moda y diseño en una sola tienda, con énfasis en piezas hechas de forma responsable. Ropa, bolsos y complementos que puede pedir desde casa y recibir en toda Europa.',
    'pt-BR': 'A IVALO.COM reúne mais de 100 marcas finlandesas e nórdicas de moda e design em uma só loja, com foco em peças feitas de forma responsável. Roupas, bolsas e acessórios que você pede de casa e recebe em toda a Europa.',
    'zh-CN': 'IVALO.COM 把 100 多个芬兰与北欧的时尚、设计品牌汇聚到同一家店,专注于负责任制作的单品。服饰、包袋与配饰都能在家下单,并送达欧洲各地。',
    ko: 'IVALO.COM은 책임 있게 만든 제품에 초점을 맞춰 핀란드·북유럽 패션·디자인 브랜드 100여 곳을 한 매장에 모았습니다. 집에서 주문해 유럽 전역으로 받아볼 수 있는 의류, 가방, 액세서리.',
    fr: 'IVALO.COM rassemble plus de 100 marques finlandaises et nordiques de mode et de design dans une seule boutique, axée sur des pièces fabriquées de façon responsable. Vêtements, sacs et accessoires à commander depuis chez vous et à faire livrer partout en Europe.',
    it: 'IVALO.COM riunisce oltre 100 marchi finlandesi e nordici di moda e design in un unico negozio, con attenzione ai prodotti realizzati in modo responsabile. Abbigliamento, borse e accessori da ordinare da casa e farti consegnare in tutta Europa.',
    nl: 'IVALO.COM brengt meer dan 100 Finse en Noordse mode- en designmerken samen in één winkel, met aandacht voor verantwoord gemaakte stukken. Kleding, tassen en accessoires die u vanuit huis bestelt en door heel Europa laat bezorgen.', sv: 'IVALO.COM samlar över 100 finska och nordiska mode- och designmärken i en butik, med fokus på ansvarsfullt tillverkade produkter. Kläder, väskor och accessoarer som du beställer hemifrån och får levererade i hela Europa.',
  },
  trust: [
    {
      icon: Sparkles,
      label: {
        en: '100+ Finnish & Nordic brands', fi: 'Yli 100 suomalaista ja pohjoismaista merkkiä',
        de: 'Über 100 finnische & nordische Marken', ja: 'フィンランド・北欧の100以上のブランド',
        es: 'Más de 100 marcas finlandesas y nórdicas', 'pt-BR': 'Mais de 100 marcas finlandesas e nórdicas',
        'zh-CN': '100 多个芬兰与北欧品牌', ko: '핀란드·북유럽 브랜드 100여 곳',
        fr: 'Plus de 100 marques finlandaises et nordiques', it: 'Oltre 100 marchi finlandesi e nordici',
        nl: 'Meer dan 100 Finse & Noordse merken', sv: 'Över 100 finska och nordiska märken',
      },
    },
    {
      icon: Leaf,
      label: {
        en: 'Focus on responsible making', fi: 'Vastuullisuus etusijalla',
        de: 'Fokus auf verantwortungsvolle Fertigung', ja: '責任ある作り方を重視',
        es: 'Enfoque en producción responsable', 'pt-BR': 'Foco em produção responsável',
        'zh-CN': '专注负责任的生产', ko: '책임 있는 제작에 집중',
        fr: 'Axé sur une fabrication responsable', it: 'Attenzione alla produzione responsabile',
        nl: 'Focus op verantwoord maken', sv: 'Fokus på ansvarsfull tillverkning',
      },
    },
    {
      icon: Globe,
      label: {
        en: 'Ships across the EU & beyond', fi: 'Toimitus EU-maihin ja muualle maailmaan',
        de: 'Versand in die EU und darüber hinaus', ja: 'EU圏内および圏外へ配送',
        es: 'Envíos a la UE y más allá', 'pt-BR': 'Envio para a UE e além',
        'zh-CN': '配送至欧盟及更远地区', ko: 'EU 및 그 외 지역으로 배송',
        fr: 'Livraison dans l’UE et au-delà', it: 'Spedizione nell’UE e oltre',
        nl: 'Levering in de EU en daarbuiten', sv: 'Levererar inom EU och längre bort',
      },
    },
  ],
  offerIcon: Truck,
  offer: {
    en: 'Free shipping on orders over 200 €', fi: 'Ilmainen toimitus yli 200 euron tilauksiin',
    de: 'Kostenloser Versand ab 200 €', ja: '200 €以上のご注文で送料無料',
    es: 'Envío gratis en pedidos superiores a 200 €', 'pt-BR': 'Frete grátis em pedidos acima de 200 €',
    'zh-CN': '订单满 200 € 免运费', ko: '200 € 이상 주문 시 무료 배송',
    fr: 'Livraison gratuite dès 200 €', it: 'Spedizione gratuita sopra i 200 €',
    nl: 'Gratis verzending vanaf 200 €', sv: 'Gratis frakt på beställningar över 200 €',
  },
  cta: {
    en: 'Explore IVALO.COM', fi: 'Tutustu IVALO.COMiin', de: 'IVALO.COM entdecken',
    ja: 'IVALO.COM を見る', es: 'Explorar IVALO.COM', 'pt-BR': 'Explorar a IVALO.COM',
    'zh-CN': '探索 IVALO.COM', ko: 'IVALO.COM 둘러보기', fr: 'Découvrir IVALO.COM',
    it: 'Esplora IVALO.COM', nl: 'Ontdek IVALO.COM', sv: 'Utforska IVALO.COM',
  },
  soldBy: {
    en: 'Sold by IVALO.COM', fi: 'Myynti: IVALO.COM', de: 'Verkauf durch IVALO.COM',
    ja: '販売:IVALO.COM', es: 'Vendido por IVALO.COM', 'pt-BR': 'Vendido pela IVALO.COM',
    'zh-CN': '由 IVALO.COM 销售', ko: 'IVALO.COM 판매', fr: 'Vendu par IVALO.COM',
    it: 'Venduto da IVALO.COM', nl: 'Verkocht door IVALO.COM', sv: 'Säljs av IVALO.COM',
  },
  stageBadge: {
    en: 'Sustainable Nordic fashion', fi: 'Vastuullista pohjoismaista muotia',
    de: 'Nachhaltige nordische Mode', ja: 'サステナブルな北欧ファッション',
    es: 'Moda nórdica sostenible', 'pt-BR': 'Moda nórdica sustentável',
    'zh-CN': '可持续北欧时尚', ko: '지속가능한 북유럽 패션',
    fr: 'Mode nordique responsable', it: 'Moda nordica sostenibile',
    nl: 'Duurzame Noordse mode', sv: 'Hållbart nordiskt mode',
  },
};

export function IvaloAd({ sid = 'design_gift', className = '' }: { sid?: string; className?: string }) {
  return <ProductBrandAd partner={IVALO} brand={IVALO_BRAND} copy={IVALO_COPY} sid={sid} className={className} />;
}

/* ─────────────────────────────────────────────────────────────────────────
 * Scandinavian Outdoor — big Nordic outdoor retailer. Skin: light sand card,
 * their deep maroon wordmark colour as accent. Ships worldwide (EU, NO, CH, UK,
 * US, CA, rest of world). Hook for the store visitor: what to pack for the trip.
 * ──────────────────────────────────────────────────────────────────────── */
const SO_BRAND: ProductAdBrand = {
  ns: 'so',
  accent: '#7A1230',
  ink: '#7A1230',
  stage: ['#F3ECEC', '#E6D5D8'],
  cardBg: '#FFFCFB',
};

const SO_COPY: ProductAdCopy = {
  eyebrow: {
    en: 'Pack for the cold', fi: 'Varustaudu pakkaseen', de: 'Für die Kälte packen',
    ja: '寒さに備えて', es: 'Equípese para el frío', 'pt-BR': 'Prepare-se para o frio',
    'zh-CN': '为寒冷做准备', ko: '추위에 대비하기',
    fr: 'S’équiper pour le froid', it: 'Attrezzarsi per il freddo',
    nl: 'Pak in voor de kou', sv: 'Packa för kylan',
  },
  headline: {
    en: 'Coming to Lapland? Sort warm layers and boots before you fly, from Scandinavian Outdoor.',
    fi: 'Tulossa Lappiin? Hanki lämpimät vaatteet ja talvikengät jo ennen lähtöä, Scandinavian Outdoorilta.',
    de: 'Sie kommen nach Lappland? Besorgen Sie warme Lagen und Stiefel schon vor dem Flug, bei Scandinavian Outdoor.',
    ja: 'ラップランドへ？出発前に、暖かいレイヤーとブーツを Scandinavian Outdoor で揃えておきましょう。',
    es: '¿Viene a Laponia? Consiga capas de abrigo y botas antes de volar, en Scandinavian Outdoor.',
    'pt-BR': 'Vindo para a Lapônia? Garanta camadas quentes e botas antes de voar, na Scandinavian Outdoor.',
    'zh-CN': '要来拉普兰吗?出发前先在 Scandinavian Outdoor 备好保暖内层和靴子。',
    ko: '라플란드에 오시나요? 비행 전에 따뜻한 레이어와 부츠를 Scandinavian Outdoor에서 준비하세요.',
    fr: 'Vous venez en Laponie ? Procurez-vous des couches chaudes et des bottes avant de partir, chez Scandinavian Outdoor.',
    it: 'In arrivo in Lapponia? Procurati strati caldi e scarponi prima di partire, da Scandinavian Outdoor.',
    nl: 'Komt u naar Lapland? Regel warme lagen en laarzen vóór uw vlucht, bij Scandinavian Outdoor.', sv: 'Ska du till Lappland? Fixa varma lager och kängor innan du flyger, från Scandinavian Outdoor.',
  },
  sub: {
    en: 'Lapland gets to −30 °C in winter, and shops sell out of the right sizes fast in season. Scandinavian Outdoor carries the base layers, shells, mittens and winter boots that actually handle it, and ships worldwide so it is waiting when you land.',
    fi: 'Lapissa on talvella jopa −30 °C, eikä kaupungin takki siihen riitä. Scandinavian Outdoorilta saat aluskerrastot, kuoritakit, rukkaset ja talvikengät, jotka oikeasti kestävät pakkasen. He toimittavat ympäri maailmaa, joten varusteet voivat odottaa sinua jo perillä.',
    de: 'In Lappland wird es im Winter bis zu −30 °C, und die richtigen Größen sind in der Saison schnell ausverkauft. Scandinavian Outdoor führt die Basisschichten, Shelljacken, Fäustlinge und Winterstiefel, die das wirklich aushalten, und liefert weltweit, sodass alles bereitliegt, wenn Sie ankommen.',
    ja: 'ラップランドの冬は −30 °C にもなり、シーズン中は適切なサイズがすぐ売り切れます。Scandinavian Outdoor には本当に寒さに耐えるベースレイヤー、シェル、ミトン、冬靴が揃い、世界中へ配送するので、到着時には手元に届いています。',
    es: 'Laponia llega a −30 °C en invierno, y en temporada las tallas adecuadas se agotan rápido. Scandinavian Outdoor tiene las primeras capas, chaquetas shell, manoplas y botas de invierno que de verdad aguantan, y envía a todo el mundo, así está esperándole al llegar.',
    'pt-BR': 'A Lapônia chega a −30 °C no inverno, e na temporada os tamanhos certos esgotam rápido. A Scandinavian Outdoor tem as camadas-base, casacos shell, luvas e botas de inverno que realmente aguentam, e envia para o mundo todo, então já está esperando quando você chega.',
    'zh-CN': '拉普兰冬天能到 −30 °C,旺季时合适的尺码很快售罄。Scandinavian Outdoor 备有真正扛得住严寒的打底层、冲锋衣、连指手套和冬靴,并向全球发货,你落地时它已在等你。',
    ko: '라플란드의 겨울은 −30 °C까지 내려가고, 성수기에는 맞는 사이즈가 금세 품절됩니다. Scandinavian Outdoor에는 실제로 견디는 베이스 레이어, 셸, 벙어리장갑, 겨울 부츠가 있고 전 세계로 배송되어 도착할 때 기다리고 있습니다.',
    fr: 'La Laponie descend à −30 °C en hiver, et en saison les bonnes tailles partent vite. Scandinavian Outdoor propose les sous-couches, vestes shell, moufles et bottes d’hiver qui tiennent vraiment, et livre dans le monde entier : tout vous attend à l’arrivée.',
    it: 'In Lapponia d’inverno si arriva a −30 °C, e in stagione le taglie giuste finiscono in fretta. Scandinavian Outdoor ha gli strati base, le giacche shell, le muffole e gli scarponi invernali che reggono davvero, e spedisce in tutto il mondo, così La aspetta all’arrivo.',
    nl: 'In Lapland wordt het ’s winters tot −30 °C, en in het seizoen zijn de juiste maten snel uitverkocht. Scandinavian Outdoor heeft de baselayers, shelljassen, wanten en winterlaarzen die het echt aankunnen, en levert wereldwijd, zodat het klaarligt als u landt.', sv: 'I Lappland blir det ned till −30 °C på vintern, och rätt storlekar tar snabbt slut under säsong. Scandinavian Outdoor har baslagren, skalplaggen, tumvantarna och vinterkängorna som faktiskt klarar det, och skickar över hela världen så att det väntar när du landar.',
  },
  trust: [
    {
      icon: Snowflake,
      label: {
        en: 'Base layers, shells, winter boots', fi: 'Aluskerrastot, kuoritakit, talvikengät',
        de: 'Basisschichten, Shelljacken, Winterstiefel', ja: 'ベースレイヤー・シェル・冬靴',
        es: 'Primeras capas, shells, botas de invierno', 'pt-BR': 'Camadas-base, shells, botas de inverno',
        'zh-CN': '打底层、冲锋衣、冬靴', ko: '베이스 레이어·셸·겨울 부츠',
        fr: 'Sous-couches, shells, bottes d’hiver', it: 'Strati base, shell, scarponi invernali',
        nl: 'Baselayers, shells, winterlaarzen', sv: 'Baslager, skalplagg, vinterkängor',
      },
    },
    {
      icon: Mountain,
      label: {
        en: 'Trusted outdoor brands', fi: 'Luotettavat ulkoilumerkit',
        de: 'Bewährte Outdoor-Marken', ja: '信頼のアウトドアブランド',
        es: 'Marcas outdoor de confianza', 'pt-BR': 'Marcas outdoor confiáveis',
        'zh-CN': '值得信赖的户外品牌', ko: '믿을 수 있는 아웃도어 브랜드',
        fr: 'Marques outdoor de confiance', it: 'Marchi outdoor affidabili',
        nl: 'Vertrouwde outdoormerken', sv: 'Pålitliga friluftsmärken',
      },
    },
    {
      icon: Globe,
      label: {
        en: 'Ships worldwide', fi: 'Toimitus ympäri maailmaa',
        de: 'Weltweiter Versand', ja: '世界中へ配送',
        es: 'Envíos a todo el mundo', 'pt-BR': 'Envio para o mundo todo',
        'zh-CN': '全球配送', ko: '전 세계 배송',
        fr: 'Livraison dans le monde entier', it: 'Spedizione in tutto il mondo',
        nl: 'Wereldwijde verzending', sv: 'Skickar över hela världen',
      },
    },
  ],
  offerIcon: Flag,
  offer: {
    en: 'Nordic outdoor specialist', fi: 'Pohjoismainen ulkoilun erikoisliike',
    de: 'Nordischer Outdoor-Spezialist', ja: '北欧アウトドアの専門店',
    es: 'Especialista nórdico en outdoor', 'pt-BR': 'Especialista nórdico em outdoor',
    'zh-CN': '北欧户外专家', ko: '북유럽 아웃도어 전문점',
    fr: 'Spécialiste outdoor nordique', it: 'Specialista outdoor nordico',
    nl: 'Noordse outdoorspecialist', sv: 'Nordisk friluftsspecialist',
  },
  cta: {
    en: 'Shop Scandinavian Outdoor', fi: 'Tutustu Scandinavian Outdooriin', de: 'Scandinavian Outdoor ansehen',
    ja: 'Scandinavian Outdoor を見る', es: 'Ver Scandinavian Outdoor', 'pt-BR': 'Ver a Scandinavian Outdoor',
    'zh-CN': '选购 Scandinavian Outdoor', ko: 'Scandinavian Outdoor 둘러보기', fr: 'Découvrir Scandinavian Outdoor',
    it: 'Esplora Scandinavian Outdoor', nl: 'Bekijk Scandinavian Outdoor', sv: 'Handla hos Scandinavian Outdoor',
  },
  soldBy: {
    en: 'Sold by Scandinavian Outdoor', fi: 'Myynti: Scandinavian Outdoor', de: 'Verkauf durch Scandinavian Outdoor',
    ja: '販売:Scandinavian Outdoor', es: 'Vendido por Scandinavian Outdoor', 'pt-BR': 'Vendido pela Scandinavian Outdoor',
    'zh-CN': '由 Scandinavian Outdoor 销售', ko: 'Scandinavian Outdoor 판매', fr: 'Vendu par Scandinavian Outdoor',
    it: 'Venduto da Scandinavian Outdoor', nl: 'Verkocht door Scandinavian Outdoor', sv: 'Säljs av Scandinavian Outdoor',
  },
  stageBadge: {
    en: 'Gear for −30 °C', fi: 'Varusteet −30 asteeseen', de: 'Ausrüstung für −30 °C',
    ja: '−30 °C のための装備', es: 'Equipo para −30 °C', 'pt-BR': 'Equipamento para −30 °C',
    'zh-CN': '应对 −30 °C 的装备', ko: '−30 °C용 장비',
    fr: 'Équipement pour −30 °C', it: 'Attrezzatura per −30 °C', nl: 'Uitrusting voor −30 °C', sv: 'Utrustning för −30 °C',
  },
};

export function ScandinavianOutdoorAd({ sid = 'pack_for_lapland', className = '' }: { sid?: string; className?: string }) {
  return <ProductBrandAd partner={SCANDINAVIAN_OUTDOOR} brand={SO_BRAND} copy={SO_COPY} sid={sid} className={className} />;
}
