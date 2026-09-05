import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLang, type Lang } from '../lang';

/**
 * Valmis kori — koko kerrasto yhdellä klikillä kumppanin ostoskoriin.
 *
 * 🔴 Miksi (Vesa 5.9.2026): "eikö siellä pitäisi olla sellaisia täkyjä ja
 * paketteja luotu, osta tästä koko setti mitä tarvitset lappiin, haalarit,
 * kengät, sukat, koko kerrasto, olisimme keränneet ne valmiiksi ostoskoriin
 * ja aina kun uusi asiakas menee ne olisi jo etsitty hänelle valmiiksi."
 *
 * Miten: Shopify-kaupat hyväksyvät koripermalinkin /cart/<variantId>:<määrä>,…
 * ja linkki kulkee Workerin (go.laplandvibes.com) ja Adtractionin läpi, joten
 * komissio säilyy. Mitattu 5.9.2026 selaimessa: Halti (3 riviä → kassa, at_gd-
 * eväste) ja Sukkamestarit (3 riviä → kassa, at_gd-eväste). Halti toimittaa
 * vain Suomeen (halti.fi:n toimitusehdot 4.8.2026), mikä sanotaan kortissa.
 *
 * Koko: kerrasto ja sukat ovat kokoriippuvaisia, joten kortissa on yksi
 * kokovalitsin, joka vaihtaa KAIKKIEN rivien variantit kerralla. Ilman sitä
 * kori olisi väärää kokoa ja lukija poistaisi rivit kassalla.
 *
 * 🔴 Ei Umami-eventtiä CTA:lle: affiliate-klikit mitataan Worker-D1:ssä
 * (CLAUDE.md), tupla inflatoisi luvut. Variantti-id:t ja hinnat luettu
 * kauppojen products/<handle>.js-rajapinnasta 5.9.2026.
 */

const PRICES_AS_OF = '2026-09-05';

interface BasketItem {
  /** Kaupan oma tuotenimi, ei käännetä. */
  name: string;
  price: number;
  /** kokoavain → variantId; '*' = sama variantti joka koolle (esim. pipo). */
  variants: Record<string, string>;
}

interface Basket {
  key: string;
  shop: 'halti' | 'sukkamestarit';
  shopName: string;
  cartBase: string;
  sizes: string[];
  items: BasketItem[];
}

const BASKETS: Basket[] = [
  {
    key: 'merino_men',
    shop: 'halti',
    shopName: 'Halti',
    cartBase: 'https://www.halti.fi',
    sizes: ['S', 'M', 'L', 'XXL', 'XXXL'],
    items: [
      { name: 'Hossa II Merino Kerrasto, miesten', price: 120, variants: { S: '55373603668293', M: '55373603701061', L: '55373603733829', XXL: '55373603799365', XXXL: '55373603832133' } },
      { name: 'Merinovillasukat, 2 paria', price: 30, variants: { S: '54332035793221', M: '54332035825989', L: '54332035858757', XXL: '54332035891525', XXXL: '54332035891525' } },
      { name: 'Pehmee Merinopipo', price: 50, variants: { '*': '56543933727045' } },
    ],
  },
  {
    key: 'merino_women',
    shop: 'halti',
    shopName: 'Halti',
    cartBase: 'https://www.halti.fi',
    sizes: ['38', '40', '42', '44', '46', '48'],
    items: [
      { name: 'Hossa II Merino Kerrasto, naisten', price: 120, variants: { 38: '55623370015045', 40: '55623370047813', 42: '55623370080581', 44: '55623370113349', 46: '55623370146117', 48: '55623370178885' } },
      { name: 'Merinovillasukat, 2 paria', price: 30, variants: { 38: '55741659119941', 40: '55741659152709', 42: '55741659152709', 44: '55741659185477', 46: '55741659185477', 48: '55741659218245' } },
      { name: 'Pehmee Merinopipo', price: 50, variants: { '*': '56543933759813' } },
    ],
  },
  {
    key: 'hands_feet',
    shop: 'halti',
    shopName: 'Halti',
    cartBase: 'https://www.halti.fi',
    sizes: ['S', 'M', 'L', 'XL'],
    items: [
      { name: 'Viiri Fleece Hanskat', price: 35, variants: { S: '55438357922117', M: '55438357954885', L: '55438357987653', XL: '55438358020421' } },
      { name: 'Tunturit Laskettelusukat', price: 25, variants: { S: '56047354020165', M: '56047354052933', L: '56047354085701', XL: '56047354118469' } },
      { name: 'Pehmee Merinopipo', price: 50, variants: { '*': '56543933792581' } },
    ],
  },
  {
    key: 'socks_week',
    shop: 'sukkamestarit',
    shopName: 'Sukkamestarit',
    cartBase: 'https://sukkamestarit.com',
    sizes: ['35-38', '39-42', '43-46'],
    items: [
      { name: 'Napa, merinovillasukat vaellukseen', price: 24.9, variants: { '35-38': '45185635221760', '39-42': '45185635254528', '43-46': '45185635287296' } },
      { name: 'Rakka, tencel-merinovillasukat', price: 16.9, variants: { '35-38': '56536355471738', '39-42': '56536355504506', '43-46': '56536355537274' } },
      { name: 'Vuori, merinovillasukat pukeutumiseen', price: 10.43, variants: { '35-38': '45185676247296', '39-42': '45185676280064', '43-46': '45185676312832' } },
    ],
  },
];

interface BasketCopy {
  name: string;
  desc: string;
  shipping: string;
}

interface Copy {
  eyebrow: string;
  title: string;
  intro: string;
  size: string;
  cta: (shop: string) => string;
  total: string;
  fine: string;
  baskets: Record<string, BasketCopy>;
}

const HALTI_FI = 'Toimitus vain Suomeen (Posti, Matkahuolto, PostNord).';
// Sukkamestarit.com/policies/shipping-policy 5.9.2026: Suomessa veloituksetta,
// kun tilaus on vähintään 50 €; muut maat kassalla ("riippuen toimitusmaasta").
const SUKKA_FI = 'Suomeen veloituksetta, kun tilaus on vähintään 50 €; muihin maihin hinta näkyy kassalla.';

const COPY: Record<Lang, Copy> = {
  fi: {
    eyebrow: 'Valmis kori',
    title: 'Koko kerrasto yhdellä klikillä',
    intro: 'Valitse koko ja avaa kori: tuotteet ovat jo kaupan ostoskorissa, jäljellä on osoite ja maksu. Hinnat luettu kauppojen omista tuotetiedoista 5.9.2026.',
    size: 'Koko',
    cta: (s) => `Avaa kori Haltilla`.replace('Haltilla', s === 'Halti' ? 'Haltilla' : 'Sukkamestareilla'),
    total: 'Yhteensä',
    fine: 'Kori aukeaa kumppanin kassalle uudessa välilehdessä. Hinta ja saatavuus ovat kaupan omia, ja saatamme saada ostoksesta palkkion.',
    baskets: {
      merino_men: { name: 'Merinokerrasto, miehet', desc: 'Aluskerrasto, kahdet villasukat ja pipo: se, mitä pakkasessa on ihoa vasten.', shipping: HALTI_FI },
      merino_women: { name: 'Merinokerrasto, naiset', desc: 'Sama kerrasto naisten mitoituksella, sukat ja pipo sävyyn.', shipping: HALTI_FI },
      hands_feet: { name: 'Kädet ja jalat pakkasessa', desc: 'Kosketusnäyttöhanskat, laskettelusukat ja merinopipo: kolme kohtaa, joista kylmä tulee ensin.', shipping: HALTI_FI },
      socks_week: { name: 'Villasukat viikoksi', desc: 'Kolme paria merinoa Suomesta: vaellukseen, tencel-merino kuiviin jalkoihin ja ohuempi pari iltaan.', shipping: SUKKA_FI },
    },
  },
  en: {
    eyebrow: 'Ready basket',
    title: 'The whole layer in one click',
    intro: 'Pick a size and open the basket: the items are already in the shop\'s cart, only the address and payment are left. Prices read from the shops\' own product data on 5 September 2026.',
    size: 'Size',
    cta: (s) => `Open the basket at ${s}`,
    total: 'Total',
    fine: 'The basket opens at the partner\'s checkout in a new tab. Price and availability are the shop\'s own, and we may earn a commission on the purchase.',
    baskets: {
      merino_men: { name: 'Merino base layers, men', desc: 'Base layer set, two pairs of wool socks and a beanie: what sits against the skin in the cold.', shipping: 'Delivers within Finland only (Posti, Matkahuolto, PostNord).' },
      merino_women: { name: 'Merino base layers, women', desc: 'The same set in women\'s sizing, socks and beanie to match.', shipping: 'Delivers within Finland only (Posti, Matkahuolto, PostNord).' },
      hands_feet: { name: 'Hands and feet in the cold', desc: 'Touchscreen gloves, ski socks and a merino beanie: the three places the cold reaches first.', shipping: 'Delivers within Finland only (Posti, Matkahuolto, PostNord).' },
      socks_week: { name: 'Wool socks for a week', desc: 'Three pairs of merino from Finland: one for hiking, a tencel merino pair for dry feet and a thinner pair for the evening.', shipping: 'Free delivery within Finland on orders of 50 € or more; other countries priced at checkout.' },
    },
  },
  de: {
    eyebrow: 'Fertiger Warenkorb',
    title: 'Die ganze Schicht mit einem Klick',
    intro: 'Größe wählen und Warenkorb öffnen: Die Artikel liegen bereits im Warenkorb des Shops, es fehlen nur Adresse und Zahlung. Preise am 5. September 2026 aus den Produktdaten der Shops gelesen.',
    size: 'Größe',
    cta: (s) => `Warenkorb bei ${s} öffnen`,
    total: 'Gesamt',
    fine: 'Der Warenkorb öffnet sich an der Kasse des Partners in einem neuen Tab. Preis und Verfügbarkeit sind die des Shops, und wir erhalten möglicherweise eine Provision.',
    baskets: {
      merino_men: { name: 'Merino-Unterwäsche, Herren', desc: 'Unterwäscheset, zwei Paar Wollsocken und eine Mütze: das, was in der Kälte auf der Haut liegt.', shipping: 'Lieferung nur innerhalb Finnlands (Posti, Matkahuolto, PostNord).' },
      merino_women: { name: 'Merino-Unterwäsche, Damen', desc: 'Dasselbe Set in Damengrößen, Socken und Mütze passend dazu.', shipping: 'Lieferung nur innerhalb Finnlands (Posti, Matkahuolto, PostNord).' },
      hands_feet: { name: 'Hände und Füße in der Kälte', desc: 'Touchscreen-Handschuhe, Skisocken und eine Merinomütze: die drei Stellen, an denen die Kälte zuerst ankommt.', shipping: 'Lieferung nur innerhalb Finnlands (Posti, Matkahuolto, PostNord).' },
      socks_week: { name: 'Wollsocken für eine Woche', desc: 'Drei Paar Merino aus Finnland: eins zum Wandern, ein Tencel-Merino-Paar für trockene Füße und ein dünneres Paar für den Abend.', shipping: 'Versand innerhalb Finnlands und ins Ausland, Preis an der Kasse.' },
    },
  },
  sv: {
    eyebrow: 'Färdig varukorg',
    title: 'Hela lagret med ett klick',
    intro: 'Välj storlek och öppna korgen: varorna ligger redan i butikens varukorg, kvar är adress och betalning. Priserna lästa ur butikernas egna produktdata den 5 september 2026.',
    size: 'Storlek',
    cta: (s) => `Öppna korgen hos ${s}`,
    total: 'Totalt',
    fine: 'Korgen öppnas i partnerns kassa i en ny flik. Pris och tillgänglighet är butikens egna, och vi kan få provision på köpet.',
    baskets: {
      merino_men: { name: 'Merinounderställ, herr', desc: 'Underställ, två par ullstrumpor och en mössa: det som ligger mot huden i kylan.', shipping: 'Levererar endast inom Finland (Posti, Matkahuolto, PostNord).' },
      merino_women: { name: 'Merinounderställ, dam', desc: 'Samma set i damstorlekar, strumpor och mössa i ton.', shipping: 'Levererar endast inom Finland (Posti, Matkahuolto, PostNord).' },
      hands_feet: { name: 'Händer och fötter i kylan', desc: 'Pekskärmshandskar, skidstrumpor och en merinomössa: de tre ställen där kylan når först.', shipping: 'Levererar endast inom Finland (Posti, Matkahuolto, PostNord).' },
      socks_week: { name: 'Ullstrumpor för en vecka', desc: 'Tre par merino från Finland: ett för vandring, ett tencel-merinopar för torra fötter och ett tunnare par för kvällen.', shipping: 'Skickar inom Finland och utomlands, priset visas i kassan.' },
    },
  },
  fr: {
    eyebrow: 'Panier prêt',
    title: 'Toute la couche en un clic',
    intro: 'Choisissez une taille et ouvrez le panier : les articles sont déjà dans le panier de la boutique, il ne reste que l\'adresse et le paiement. Prix relevés dans les données produit des boutiques le 5 septembre 2026.',
    size: 'Taille',
    cta: (s) => `Ouvrir le panier chez ${s}`,
    total: 'Total',
    fine: 'Le panier s\'ouvre à la caisse du partenaire dans un nouvel onglet. Le prix et la disponibilité sont ceux de la boutique, et nous pouvons toucher une commission sur l\'achat.',
    baskets: {
      merino_men: { name: 'Sous-vêtements mérinos, homme', desc: 'Ensemble de sous-vêtements, deux paires de chaussettes en laine et un bonnet : ce qui touche la peau dans le froid.', shipping: 'Livraison en Finlande uniquement (Posti, Matkahuolto, PostNord).' },
      merino_women: { name: 'Sous-vêtements mérinos, femme', desc: 'Le même ensemble en tailles femme, chaussettes et bonnet assortis.', shipping: 'Livraison en Finlande uniquement (Posti, Matkahuolto, PostNord).' },
      hands_feet: { name: 'Mains et pieds dans le froid', desc: 'Gants tactiles, chaussettes de ski et bonnet en mérinos : les trois endroits où le froid arrive en premier.', shipping: 'Livraison en Finlande uniquement (Posti, Matkahuolto, PostNord).' },
      socks_week: { name: 'Chaussettes en laine pour une semaine', desc: 'Trois paires de mérinos de Finlande : une pour la randonnée, une paire tencel-mérinos pour les pieds au sec et une paire plus fine pour le soir.', shipping: 'Expédie en Finlande et à l\'étranger, prix affiché à la caisse.' },
    },
  },
  es: {
    eyebrow: 'Cesta lista',
    title: 'Toda la capa en un clic',
    intro: 'Elija una talla y abra la cesta: los artículos ya están en el carrito de la tienda, solo faltan la dirección y el pago. Precios leídos de los datos de producto de las tiendas el 5 de septiembre de 2026.',
    size: 'Talla',
    cta: (s) => `Abrir la cesta en ${s}`,
    total: 'Total',
    fine: 'La cesta se abre en la caja del socio en una pestaña nueva. El precio y la disponibilidad son los de la tienda, y podemos recibir una comisión por la compra.',
    baskets: {
      merino_men: { name: 'Ropa interior de merino, hombre', desc: 'Conjunto de primera capa, dos pares de calcetines de lana y un gorro: lo que va pegado a la piel con el frío.', shipping: 'Envío solo dentro de Finlandia (Posti, Matkahuolto, PostNord).' },
      merino_women: { name: 'Ropa interior de merino, mujer', desc: 'El mismo conjunto en tallas de mujer, calcetines y gorro a juego.', shipping: 'Envío solo dentro de Finlandia (Posti, Matkahuolto, PostNord).' },
      hands_feet: { name: 'Manos y pies en el frío', desc: 'Guantes táctiles, calcetines de esquí y gorro de merino: los tres sitios a los que el frío llega primero.', shipping: 'Envío solo dentro de Finlandia (Posti, Matkahuolto, PostNord).' },
      socks_week: { name: 'Calcetines de lana para una semana', desc: 'Tres pares de merino de Finlandia: uno para senderismo, un par de tencel-merino para pies secos y un par más fino para la noche.', shipping: 'Envía dentro de Finlandia y al extranjero, precio en la caja.' },
    },
  },
  it: {
    eyebrow: 'Carrello pronto',
    title: 'Tutto lo strato con un clic',
    intro: 'Scegliete la taglia e aprite il carrello: gli articoli sono già nel carrello del negozio, restano solo indirizzo e pagamento. Prezzi letti dai dati prodotto dei negozi il 5 settembre 2026.',
    size: 'Taglia',
    cta: (s) => `Apri il carrello da ${s}`,
    total: 'Totale',
    fine: 'Il carrello si apre alla cassa del partner in una nuova scheda. Prezzo e disponibilità sono quelli del negozio, e potremmo ricevere una commissione sull\'acquisto.',
    baskets: {
      merino_men: { name: 'Intimo in merino, uomo', desc: 'Set intimo, due paia di calze di lana e un berretto: ciò che sta a contatto con la pelle nel freddo.', shipping: 'Consegna solo in Finlandia (Posti, Matkahuolto, PostNord).' },
      merino_women: { name: 'Intimo in merino, donna', desc: 'Lo stesso set nelle taglie da donna, calze e berretto in tinta.', shipping: 'Consegna solo in Finlandia (Posti, Matkahuolto, PostNord).' },
      hands_feet: { name: 'Mani e piedi al freddo', desc: 'Guanti touchscreen, calze da sci e berretto in merino: i tre punti dove il freddo arriva per primo.', shipping: 'Consegna solo in Finlandia (Posti, Matkahuolto, PostNord).' },
      socks_week: { name: 'Calze di lana per una settimana', desc: 'Tre paia di merino dalla Finlandia: uno per l\'escursione, un paio in tencel-merino per piedi asciutti e un paio più sottile per la sera.', shipping: 'Spedisce in Finlandia e all\'estero, prezzo alla cassa.' },
    },
  },
  nl: {
    eyebrow: 'Kant-en-klaar mandje',
    title: 'De hele laag in één klik',
    intro: 'Kies een maat en open het mandje: de artikelen liggen al in de winkelwagen van de shop, alleen adres en betaling blijven over. Prijzen gelezen uit de productgegevens van de shops op 5 september 2026.',
    size: 'Maat',
    cta: (s) => `Mandje openen bij ${s}`,
    total: 'Totaal',
    fine: 'Het mandje opent bij de kassa van de partner in een nieuw tabblad. Prijs en beschikbaarheid zijn die van de shop, en wij kunnen commissie ontvangen over de aankoop.',
    baskets: {
      merino_men: { name: 'Merino-onderkleding, heren', desc: 'Onderkledingset, twee paar wollen sokken en een muts: wat in de kou tegen de huid ligt.', shipping: 'Levert alleen binnen Finland (Posti, Matkahuolto, PostNord).' },
      merino_women: { name: 'Merino-onderkleding, dames', desc: 'Dezelfde set in damesmaten, sokken en muts erbij.', shipping: 'Levert alleen binnen Finland (Posti, Matkahuolto, PostNord).' },
      hands_feet: { name: 'Handen en voeten in de kou', desc: 'Touchscreenhandschoenen, skisokken en een merinomuts: de drie plekken waar de kou het eerst komt.', shipping: 'Levert alleen binnen Finland (Posti, Matkahuolto, PostNord).' },
      socks_week: { name: 'Wollen sokken voor een week', desc: 'Drie paar merino uit Finland: één om te wandelen, een tencel-merinopaar voor droge voeten en een dunner paar voor de avond.', shipping: 'Verzendt binnen Finland en naar het buitenland, prijs bij de kassa.' },
    },
  },
  'pt-BR': {
    eyebrow: 'Carrinho pronto',
    title: 'A camada inteira em um clique',
    intro: 'Escolha o tamanho e abra o carrinho: os itens já estão no carrinho da loja, só faltam endereço e pagamento. Preços lidos dos dados de produto das lojas em 5 de setembro de 2026.',
    size: 'Tamanho',
    cta: (s) => `Abrir o carrinho na ${s}`,
    total: 'Total',
    fine: 'O carrinho abre no checkout do parceiro em uma nova aba. Preço e disponibilidade são da loja, e podemos receber comissão pela compra.',
    baskets: {
      merino_men: { name: 'Segunda pele de merino, masculina', desc: 'Conjunto de segunda pele, dois pares de meias de lã e um gorro: o que fica junto à pele no frio.', shipping: 'Entrega apenas na Finlândia (Posti, Matkahuolto, PostNord).' },
      merino_women: { name: 'Segunda pele de merino, feminina', desc: 'O mesmo conjunto em tamanhos femininos, meias e gorro combinando.', shipping: 'Entrega apenas na Finlândia (Posti, Matkahuolto, PostNord).' },
      hands_feet: { name: 'Mãos e pés no frio', desc: 'Luvas touchscreen, meias de esqui e gorro de merino: os três pontos onde o frio chega primeiro.', shipping: 'Entrega apenas na Finlândia (Posti, Matkahuolto, PostNord).' },
      socks_week: { name: 'Meias de lã para uma semana', desc: 'Três pares de merino da Finlândia: um para caminhada, um par de tencel-merino para pés secos e um par mais fino para a noite.', shipping: 'Envia para a Finlândia e para o exterior, preço no checkout.' },
    },
  },
  ja: {
    eyebrow: '準備済みカート',
    title: 'ひとそろい、ワンクリックで',
    intro: 'サイズを選んでカートを開くと、商品はすでにショップのカートに入っています。あとは住所と支払いだけ。価格は2026年9月5日にショップの商品データから読み取りました。',
    size: 'サイズ',
    cta: (s) => `${s}でカートを開く`,
    total: '合計',
    fine: 'カートは新しいタブでパートナーのレジに開きます。価格と在庫はショップのものであり、購入により当サイトが手数料を受け取ることがあります。',
    baskets: {
      merino_men: { name: 'メリノベースレイヤー メンズ', desc: 'ベースレイヤー上下、ウールソックス2足、ビーニー。寒さの中で肌に触れるもの一式。', shipping: '配送はフィンランド国内のみ（Posti、Matkahuolto、PostNord）。' },
      merino_women: { name: 'メリノベースレイヤー レディース', desc: '同じセットをレディースサイズで。ソックスとビーニーは色を合わせて。', shipping: '配送はフィンランド国内のみ（Posti、Matkahuolto、PostNord）。' },
      hands_feet: { name: '寒さの中の手と足', desc: 'タッチスクリーン対応グローブ、スキーソックス、メリノビーニー。寒さが最初に届く3か所。', shipping: '配送はフィンランド国内のみ（Posti、Matkahuolto、PostNord）。' },
      socks_week: { name: '一週間分のウールソックス', desc: 'フィンランドのメリノ3足：ハイキング用、足を乾いた状態に保つテンセルメリノ、夜用の薄手。', shipping: 'フィンランド国内および海外へ配送、送料はレジで表示。' },
    },
  },
  'zh-CN': {
    eyebrow: '现成购物车',
    title: '一整套，一次点击',
    intro: '选好尺码打开购物车：商品已经在店铺的购物车里，只剩地址和付款。价格于2026年9月5日读取自店铺自己的商品数据。',
    size: '尺码',
    cta: (s) => `在 ${s} 打开购物车`,
    total: '合计',
    fine: '购物车会在新标签页中打开合作店铺的结账页。价格和库存以店铺为准，我们可能从购买中获得佣金。',
    baskets: {
      merino_men: { name: '美利奴内层套装，男款', desc: '内层上下装、两双羊毛袜和一顶毛线帽：寒冷中贴着皮肤的那一层。', shipping: '仅限芬兰境内配送（Posti、Matkahuolto、PostNord）。' },
      merino_women: { name: '美利奴内层套装，女款', desc: '同一套装的女款尺码，袜子和毛线帽配色。', shipping: '仅限芬兰境内配送（Posti、Matkahuolto、PostNord）。' },
      hands_feet: { name: '寒冷中的手和脚', desc: '触屏手套、滑雪袜和美利奴毛线帽：寒冷最先到达的三个地方。', shipping: '仅限芬兰境内配送（Posti、Matkahuolto、PostNord）。' },
      socks_week: { name: '一周的羊毛袜', desc: '三双来自芬兰的美利奴袜：一双徒步用，一双天丝美利奴保持双脚干爽，一双更薄的留给晚上。', shipping: '可配送芬兰境内及海外，运费在结账时显示。' },
    },
  },
  ko: {
    eyebrow: '준비된 장바구니',
    title: '한 벌 전체를 한 번의 클릭으로',
    intro: '사이즈를 고르고 장바구니를 여세요. 상품은 이미 상점 장바구니에 담겨 있고 주소와 결제만 남습니다. 가격은 2026년 9월 5일 상점의 상품 데이터에서 읽었습니다.',
    size: '사이즈',
    cta: (s) => `${s}에서 장바구니 열기`,
    total: '합계',
    fine: '장바구니는 새 탭에서 파트너의 결제 페이지로 열립니다. 가격과 재고는 상점 기준이며, 구매 시 저희가 수수료를 받을 수 있습니다.',
    baskets: {
      merino_men: { name: '메리노 베이스레이어, 남성', desc: '베이스레이어 세트, 울 양말 두 켤레, 비니: 추위 속에서 피부에 닿는 것들.', shipping: '핀란드 국내 배송만 가능 (Posti, Matkahuolto, PostNord).' },
      merino_women: { name: '메리노 베이스레이어, 여성', desc: '같은 세트를 여성 사이즈로, 양말과 비니는 색을 맞춰.', shipping: '핀란드 국내 배송만 가능 (Posti, Matkahuolto, PostNord).' },
      hands_feet: { name: '추위 속의 손과 발', desc: '터치스크린 장갑, 스키 양말, 메리노 비니: 추위가 가장 먼저 닿는 세 곳.', shipping: '핀란드 국내 배송만 가능 (Posti, Matkahuolto, PostNord).' },
      socks_week: { name: '일주일치 울 양말', desc: '핀란드산 메리노 세 켤레: 하이킹용 하나, 발을 보송하게 하는 텐셀 메리노 하나, 저녁용 얇은 하나.', shipping: '핀란드 국내 및 해외 배송, 배송비는 결제 시 표시.' },
    },
  },
};

const REL = 'sponsored nofollow noopener';

function money(n: number, lang: Lang): string {
  return new Intl.NumberFormat(lang === 'pt-BR' ? 'pt-BR' : lang, { style: 'currency', currency: 'EUR', maximumFractionDigits: 2, minimumFractionDigits: 0 }).format(n);
}

function cartHref(b: Basket, size: string): string {
  const ids = b.items.map((it) => (it.variants[size] ?? it.variants['*']) + ':1').join(',');
  const dest = `${b.cartBase}/cart/${ids}`;
  return `https://go.laplandvibes.com/go/${b.shop}?sid=${encodeURIComponent(`store_basket_${b.key}`)}&dest=${encodeURIComponent(dest)}`;
}

function BasketCard({ basket, lang }: { basket: Basket; lang: Lang }) {
  const t = COPY[lang];
  const c = t.baskets[basket.key];
  const [size, setSize] = useState(basket.sizes[Math.min(1, basket.sizes.length - 1)]);
  const total = basket.items.reduce((s, it) => s + it.price, 0);
  return (
    <article className="flex flex-col rounded-[28px] border border-slate-200/70 bg-white p-6 shadow-[0_24px_48px_-28px_rgba(15,23,42,0.35)] sm:p-7">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{basket.shopName}</p>
      <h3 className="mt-1 font-heading text-3xl text-night">{c.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>
      <ul className="mt-4 divide-y divide-slate-100 border-y border-slate-100 text-sm">
        {basket.items.map((it) => (
          <li key={it.name} className="flex items-baseline justify-between gap-4 py-2">
            <span className="text-slate-700">{it.name}</span>
            <span className="shrink-0 tabular-nums text-slate-500">{money(it.price, lang)}</span>
          </li>
        ))}
        <li className="flex items-baseline justify-between gap-4 py-2 font-semibold text-night">
          <span>{t.total}</span>
          <span className="tabular-nums">{money(total, lang)}</span>
        </li>
      </ul>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <label className="flex items-center gap-2 text-sm text-slate-700">
          <span>{t.size}</span>
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="rounded-full border border-slate-300 bg-white px-3 py-2 text-sm text-night focus:outline-none focus:ring-2 focus:ring-vibe-pink/40"
          >
            {basket.sizes.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </label>
        <a
          href={cartHref(basket, size)}
          target="_blank"
          rel={REL}
          className="inline-flex items-center gap-2 rounded-full bg-[#DB2777] px-5 py-2.5 text-sm font-semibold text-white transition-[transform,background-color] duration-150 hover:bg-[#BE185D] active:scale-[0.97]"
        >
          {t.cta(basket.shopName)}
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
      <p className="mt-3 text-xs text-slate-500">{c.shipping}</p>
    </article>
  );
}

export default function ReadyBaskets() {
  const { lang } = useLang();
  const t = COPY[lang];
  return (
    <section className="bg-cream px-4 py-12 sm:py-16" aria-labelledby="ready-baskets-title">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-vibe-pink">{t.eyebrow}</p>
        <h2 id="ready-baskets-title" className="mt-1 font-heading text-4xl text-night sm:text-5xl">{t.title}</h2>
        <p className="mt-3 max-w-2xl text-slate-600">{t.intro}</p>
        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
          {BASKETS.map((b) => (
            <BasketCard key={b.key} basket={b} lang={lang} />
          ))}
        </div>
        <p className="mt-5 text-xs text-slate-500">
          {t.fine} ({PRICES_AS_OF})
        </p>
      </div>
    </section>
  );
}
