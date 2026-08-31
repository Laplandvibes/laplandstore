import { useLang, type Lang } from '../lang';

/**
 * Home FAQ — light editorial Q&A on cream, matching the LaplandStore variant
 * (Playfair headings, warm-gray body, white cards). `aPlain` feeds the FAQPage
 * JSON-LD (no markup); `aHtml` renders the visible answer with inline sibling
 * links. Sibling links use rel="noopener" (NOT affiliate rel).
 *
 * Brand rules honoured: no invented statistics or prices, no banned adjectives.
 */
export interface StoreFaq {
  q: string;
  /** Plain-text answer for schema.org FAQPage. */
  aPlain: string;
  /** HTML answer for display (may contain sibling <a> links). */
  aHtml: string;
}

export const FAQ_BY_LANG: Record<Lang, StoreFaq[]> = {
  en: [
    {
      q: 'What products are genuinely made in Lapland?',
      aPlain:
        'Genuinely Lappish products are crafted in Finnish Lapland from local materials and traditions: reindeer leather and antler items, hand-forged puukko knives, carved juniper and curly-birch woodware, woollen knits, Sámi-inspired silver jewellery and Arctic food products such as cloudberry preserve, lingonberry jam, birch syrup and herbal teas. Each boutique listed here is independently verified, with sources on file.',
      aHtml:
        'Genuinely Lappish products are crafted in Finnish Lapland from local materials and traditions: reindeer leather and antler items, hand-forged puukko knives, carved juniper and curly-birch woodware, woollen knits, Sámi-inspired silver jewellery and Arctic food products such as cloudberry preserve, lingonberry jam, birch syrup and herbal teas. Each boutique listed here is independently verified, with sources on file.',
    },
    {
      q: 'Do you ship Lapland products internationally?',
      aPlain:
        'It depends on the boutique. LaplandStore is a curated directory rather than a single checkout, so shipping is handled by each maker. Many run their own online store and post within Finland; some ship across the EU or worldwide. Check the individual shop’s delivery terms, or contact them directly, before ordering.',
      aHtml:
        'It depends on the boutique. LaplandStore is a curated directory rather than a single checkout, so shipping is handled by each maker. Many run their own online store and post within Finland; some ship across the EU or worldwide. Check the individual shop’s delivery terms, or contact them directly, before ordering.',
    },
    {
      q: 'What is a traditional Lapland or Sámi craft?',
      aPlain:
        'The Sámi handicraft tradition is called Duodji. It covers functional, handmade objects rooted in Sámi culture: knives, woodware, items in reindeer leather, antler and bone, woven bands and silver jewellery. Duodji is made by hand from natural materials, and its patterns and techniques are passed down within Sámi communities.',
      aHtml:
        'The Sámi handicraft tradition is called Duodji. It covers functional, handmade objects rooted in Sámi culture: knives, woodware, items in reindeer leather, antler and bone, woven bands and silver jewellery. Duodji is made by hand from natural materials, and its patterns and techniques are passed down within Sámi communities.',
    },
    {
      q: 'How do I know a product is authentically Sámi (the Sámi Duodji mark)?',
      aPlain:
        'Look for the Sámi Duodji trademark. It is a registered label of authenticity, administered by the Sámi Duodji organisation, that certifies an item was made by a Sámi craftsperson according to traditional methods. The mark helps distinguish genuine Sámi handicraft from mass-produced imitations sold as souvenirs.',
      aHtml:
        'Look for the Sámi Duodji trademark. It is a registered label of authenticity, administered by the Sámi Duodji organisation, that certifies an item was made by a Sámi craftsperson according to traditional methods. The mark helps distinguish genuine Sámi handicraft from mass-produced imitations sold as souvenirs.',
    },
    {
      q: 'What are popular Lapland food products to buy?',
      aPlain:
        'Popular edible souvenirs include cloudberry and lingonberry preserves, birch syrup, dried and smoked reindeer meat, Arctic herbal teas, rye and other local breads, and chocolates flavoured with northern berries. They travel well and keep, which makes them practical gifts to bring home.',
      aHtml:
        'Popular edible souvenirs include cloudberry and lingonberry preserves, birch syrup, dried and smoked reindeer meat, Arctic herbal teas, rye and other local breads, and chocolates flavoured with northern berries. They travel well and keep, which makes them practical gifts to bring home.',
    },
    {
      q: 'Why buy from local Lapland makers instead of generic souvenir shops?',
      aPlain:
        'Buying from local makers keeps the money with the craftsperson and the region, and you get an item with a known origin rather than an imported imitation. Many generic souvenirs are mass-produced abroad. Every boutique on this page is a Lapland-based business, listed with its sources on file.',
      aHtml:
        'Buying from local makers keeps the money with the craftsperson and the region, and you get an item with a known origin rather than an imported imitation. Many generic souvenirs are mass-produced abroad. Every boutique on this page is a Lapland-based business, listed with its sources on file.',
    },
  ],

  fi: [
    {
      q: 'Mitkä tuotteet ovat aidosti Lapissa tehtyjä?',
      aPlain:
        'Aidosti lappilaiset tuotteet valmistetaan Suomen Lapissa paikallisista materiaaleista ja perinteistä: poronnahka- ja sarviesineet, käsin taotut puukot, kataja- ja visakoivuesineet, villaneuleet, saamelaisvaikutteiset hopeakorut sekä arktiset elintarvikkeet kuten lakkahillo, puolukkahillo, koivusiirappi ja yrttiteet. Jokainen tässä esitelty putiikki on käsin valittu, lähteet näkyvillä.',
      aHtml:
        'Aidosti lappilaiset tuotteet valmistetaan Suomen Lapissa paikallisista materiaaleista ja perinteistä: poronnahka- ja sarviesineet, käsin taotut puukot, kataja- ja visakoivuesineet, villaneuleet, saamelaisvaikutteiset hopeakorut sekä arktiset elintarvikkeet kuten lakkahillo, puolukkahillo, koivusiirappi ja yrttiteet. Jokainen tässä esitelty putiikki on käsin valittu, lähteet näkyvillä.',
    },
    {
      q: 'Toimitatteko Lapin tuotteita ulkomaille?',
      aPlain:
        'Se riippuu putiikista. LaplandStore on käsin koottu hakemisto eikä yksi yhteinen kassa, joten toimituksesta vastaa kukin tekijä itse. Moni pitää omaa verkkokauppaa ja postittaa Suomen sisällä; osa toimittaa EU-alueelle tai maailmanlaajuisesti. Tarkista kunkin kaupan toimitusehdot tai ota suoraan yhteyttä ennen tilausta.',
      aHtml:
        'Se riippuu putiikista. LaplandStore on käsin koottu hakemisto eikä yksi yhteinen kassa, joten toimituksesta vastaa kukin tekijä itse. Moni pitää omaa verkkokauppaa ja postittaa Suomen sisällä; osa toimittaa EU-alueelle tai maailmanlaajuisesti. Tarkista kunkin kaupan toimitusehdot tai ota suoraan yhteyttä ennen tilausta.',
    },
    {
      q: 'Mitä on perinteinen lappilainen tai saamelainen käsityö?',
      aPlain:
        'Saamelainen käsityöperinne on nimeltään duodji. Siihen kuuluvat saamelaiskulttuuriin pohjautuvat käyttöesineet: puukot, puuesineet, poronnahasta, sarvesta ja luusta tehdyt esineet, kudotut nauhat ja hopeakorut. Duodji tehdään käsin luonnonmateriaaleista, ja sen kuviot ja tekniikat siirtyvät sukupolvelta toiselle saamelaisyhteisöissä.',
      aHtml:
        'Saamelainen käsityöperinne on nimeltään duodji. Siihen kuuluvat saamelaiskulttuuriin pohjautuvat käyttöesineet: puukot, puuesineet, poronnahasta, sarvesta ja luusta tehdyt esineet, kudotut nauhat ja hopeakorut. Duodji tehdään käsin luonnonmateriaaleista, ja sen kuviot ja tekniikat siirtyvät sukupolvelta toiselle saamelaisyhteisöissä.',
    },
    {
      q: 'Mistä tiedän, että tuote on aidosti saamelainen (Sámi Duodji -merkki)?',
      aPlain:
        'Etsi Sámi Duodji -tavaramerkki. Se on Sámi Duodji -järjestön hallinnoima rekisteröity aitousmerkki, joka todistaa, että esineen on tehnyt saamelainen käsityöläinen perinteisin menetelmin. Merkki auttaa erottamaan aidon saamelaiskäsityön matkamuistoiksi myytävistä massatuotetuista jäljitelmistä.',
      aHtml:
        'Etsi Sámi Duodji -tavaramerkki. Se on Sámi Duodji -järjestön hallinnoima rekisteröity aitousmerkki, joka todistaa, että esineen on tehnyt saamelainen käsityöläinen perinteisin menetelmin. Merkki auttaa erottamaan aidon saamelaiskäsityön matkamuistoiksi myytävistä massatuotetuista jäljitelmistä.',
    },
    {
      q: 'Mitä Lapin elintarvikkeita kannattaa ostaa mukaan?',
      aPlain:
        'Suosittuja syötäviä matkamuistoja ovat lakka- ja puolukkahillot, koivusiirappi, kuivattu ja savustettu poronliha, arktiset yrttiteet, ruisleipä ja muut paikalliset leivät sekä pohjoisen marjoilla maustetut suklaat. Ne säilyvät ja kestävät matkan, joten ne ovat käteviä tuliaisia.',
      aHtml:
        'Suosittuja syötäviä matkamuistoja ovat lakka- ja puolukkahillot, koivusiirappi, kuivattu ja savustettu poronliha, arktiset yrttiteet, ruisleipä ja muut paikalliset leivät sekä pohjoisen marjoilla maustetut suklaat. Ne säilyvät ja kestävät matkan, joten ne ovat käteviä tuliaisia.',
    },
    {
      q: 'Miksi ostaa paikallisilta lappilaisilta tekijöiltä eikä tavallisesta matkamuistokaupasta?',
      aPlain:
        'Paikalliselta tekijältä ostaminen pitää rahan käsityöläisellä ja alueella, ja saat esineen, jonka alkuperä tunnetaan, tuontijäljitelmän sijaan. Monet tavalliset matkamuistot tehdään massatuotantona ulkomailla. Jokainen tämän sivun putiikki on lappilainen yritys, ja lähteet ovat näkyvillä.',
      aHtml:
        'Paikalliselta tekijältä ostaminen pitää rahan käsityöläisellä ja alueella, ja saat esineen, jonka alkuperä tunnetaan, tuontijäljitelmän sijaan. Monet tavalliset matkamuistot tehdään massatuotantona ulkomailla. Jokainen tämän sivun putiikki on lappilainen yritys, ja lähteet ovat näkyvillä.',
    },
  ],

  de: [
    {
      q: 'Welche Produkte werden tatsächlich in Lappland hergestellt?',
      aPlain:
        'Echte lappländische Produkte werden in Finnisch-Lappland aus regionalen Materialien und nach überlieferten Traditionen gefertigt: Artikel aus Rentierleder und Geweih, handgeschmiedete Puukko-Messer, Holzwaren aus Wacholder und Maserbirke, Strickwaren aus Wolle, von der samischen Kultur inspirierter Silberschmuck sowie arktische Lebensmittel wie Moltebeerenkonfitüre, Preiselbeermarmelade, Birkensirup und Kräutertees. Jede hier aufgeführte Boutique wird redaktionell geprüft, die Quellen sind dokumentiert.',
      aHtml:
        'Echte lappländische Produkte werden in Finnisch-Lappland aus regionalen Materialien und nach überlieferten Traditionen gefertigt: Artikel aus Rentierleder und Geweih, handgeschmiedete Puukko-Messer, Holzwaren aus Wacholder und Maserbirke, Strickwaren aus Wolle, von der samischen Kultur inspirierter Silberschmuck sowie arktische Lebensmittel wie Moltebeerenkonfitüre, Preiselbeermarmelade, Birkensirup und Kräutertees. Jede hier aufgeführte Boutique wird redaktionell geprüft, die Quellen sind dokumentiert.',
    },
    {
      q: 'Versenden Sie Lappland-Produkte ins Ausland?',
      aPlain:
        'Das hängt von der Boutique ab. LaplandStore ist ein redaktionell gepflegtes Verzeichnis und keine zentrale Kasse. Den Versand übernimmt jeder Hersteller selbst. Viele betreiben einen eigenen Online-Shop und versenden innerhalb Finnlands; einige liefern in die EU oder weltweit. Prüfen Sie vor der Bestellung die Versandbedingungen des jeweiligen Shops oder nehmen Sie direkt Kontakt auf.',
      aHtml:
        'Das hängt von der Boutique ab. LaplandStore ist ein redaktionell gepflegtes Verzeichnis und keine zentrale Kasse. Den Versand übernimmt jeder Hersteller selbst. Viele betreiben einen eigenen Online-Shop und versenden innerhalb Finnlands; einige liefern in die EU oder weltweit. Prüfen Sie vor der Bestellung die Versandbedingungen des jeweiligen Shops oder nehmen Sie direkt Kontakt auf.',
    },
    {
      q: 'Was ist ein traditionelles lappländisches oder samisches Handwerk?',
      aPlain:
        'Die samische Handwerkstradition heißt Duodji. Sie umfasst funktionale, handgefertigte Gegenstände aus der samischen Kultur: Messer, Holzwaren, Artikel aus Rentierleder, Geweih und Knochen, gewebte Bänder und Silberschmuck. Duodji wird von Hand aus Naturmaterialien gefertigt; Muster und Techniken werden innerhalb der samischen Gemeinschaften weitergegeben.',
      aHtml:
        'Die samische Handwerkstradition heißt Duodji. Sie umfasst funktionale, handgefertigte Gegenstände aus der samischen Kultur: Messer, Holzwaren, Artikel aus Rentierleder, Geweih und Knochen, gewebte Bänder und Silberschmuck. Duodji wird von Hand aus Naturmaterialien gefertigt; Muster und Techniken werden innerhalb der samischen Gemeinschaften weitergegeben.',
    },
    {
      q: 'Woran erkenne ich ein authentisch samisches Produkt (das Sámi-Duodji-Zeichen)?',
      aPlain:
        'Achten Sie auf das Sámi-Duodji-Markenzeichen. Es ist ein eingetragenes Echtheitszeichen, das von der Organisation Sámi Duodji verwaltet wird und bestätigt, dass ein Stück von einer samischen Handwerkerin oder einem samischen Handwerker nach traditionellen Methoden gefertigt wurde. Das Zeichen hilft, echtes samisches Handwerk von massenhaft produzierten Nachahmungen zu unterscheiden.',
      aHtml:
        'Achten Sie auf das Sámi-Duodji-Markenzeichen. Es ist ein eingetragenes Echtheitszeichen, das von der Organisation Sámi Duodji verwaltet wird und bestätigt, dass ein Stück von einer samischen Handwerkerin oder einem samischen Handwerker nach traditionellen Methoden gefertigt wurde. Das Zeichen hilft, echtes samisches Handwerk von massenhaft produzierten Nachahmungen zu unterscheiden.',
    },
    {
      q: 'Welche Lebensmittel aus Lappland sind beliebte Mitbringsel?',
      aPlain:
        'Beliebte essbare Souvenirs sind Moltebeeren- und Preiselbeerkonfitüre, Birkensirup, getrocknetes und geräuchertes Rentierfleisch, arktische Kräutertees, Roggen- und andere regionale Brote sowie Schokolade mit nordischen Beeren. Sie sind haltbar und überstehen die Reise gut, was sie zu praktischen Geschenken macht.',
      aHtml:
        'Beliebte essbare Souvenirs sind Moltebeeren- und Preiselbeerkonfitüre, Birkensirup, getrocknetes und geräuchertes Rentierfleisch, arktische Kräutertees, Roggen- und andere regionale Brote sowie Schokolade mit nordischen Beeren. Sie sind haltbar und überstehen die Reise gut, was sie zu praktischen Geschenken macht.',
    },
    {
      q: 'Warum bei lokalen Herstellern in Lappland kaufen statt im üblichen Souvenirladen?',
      aPlain:
        'Der Kauf bei lokalen Herstellern lässt das Geld bei der Handwerkerin oder dem Handwerker und in der Region, und Sie erhalten ein Stück mit bekannter Herkunft statt einer importierten Nachahmung. Viele übliche Souvenirs werden im Ausland in Massenproduktion gefertigt. Jede Boutique auf dieser Seite ist ein Betrieb aus Lappland, mit dokumentierten Quellen.',
      aHtml:
        'Der Kauf bei lokalen Herstellern lässt das Geld bei der Handwerkerin oder dem Handwerker und in der Region, und Sie erhalten ein Stück mit bekannter Herkunft statt einer importierten Nachahmung. Viele übliche Souvenirs werden im Ausland in Massenproduktion gefertigt. Jede Boutique auf dieser Seite ist ein Betrieb aus Lappland, mit dokumentierten Quellen.',
    },
  ],

  ja: [
    {
      q: '本当にラップランドで作られている商品はどれですか？',
      aPlain:
        '本物のラップランド産の商品は、地元の素材と伝統をもとにフィンランド・ラップランドで作られます。トナカイ革や角の製品、手鍛えのプーッコナイフ、ジュニパーや縮み杢の白樺の木工品、ウールのニット、サーミ文化に着想を得たシルバージュエリー、そしてクラウドベリーのジャム、リンゴンベリーのジャム、白樺シロップ、ハーブティーといった北極圏の食品などです。ここで紹介する各ブティックは独立して検証され、出典も記録に残しています。',
      aHtml:
        '本物のラップランド産の商品は、地元の素材と伝統をもとにフィンランド・ラップランドで作られます。トナカイ革や角の製品、手鍛えのプーッコナイフ、ジュニパーや縮み杢の白樺の木工品、ウールのニット、サーミ文化に着想を得たシルバージュエリー、そしてクラウドベリーのジャム、リンゴンベリーのジャム、白樺シロップ、ハーブティーといった北極圏の食品などです。ここで紹介する各ブティックは独立して検証され、出典も記録に残しています。',
    },
    {
      q: 'ラップランドの商品を海外へ発送してもらえますか？',
      aPlain:
        'ブティックによって異なります。LaplandStoreは共通のレジを持つ店舗ではなく、厳選した案内ディレクトリのため、発送は各作り手が行います。多くは自社のオンラインショップを運営しフィンランド国内へ発送します。EU圏内や世界各地へ発送する店もあります。ご注文の前に各店の配送条件をご確認いただくか、直接お問い合わせください。',
      aHtml:
        'ブティックによって異なります。LaplandStoreは共通のレジを持つ店舗ではなく、厳選した案内ディレクトリのため、発送は各作り手が行います。多くは自社のオンラインショップを運営しフィンランド国内へ発送します。EU圏内や世界各地へ発送する店もあります。ご注文の前に各店の配送条件をご確認いただくか、直接お問い合わせください。',
    },
    {
      q: '伝統的なラップランドまたはサーミの工芸とは何ですか？',
      aPlain:
        'サーミの工芸の伝統は「ドゥオッジ(Duodji)」と呼ばれます。サーミ文化に根ざした実用的な手作りの品々、ナイフ、木工品、トナカイ革・角・骨の製品、織りのバンド、シルバージュエリーなどを指します。ドゥオッジは天然素材から手作業で作られ、その文様や技法はサーミの共同体の中で受け継がれています。',
      aHtml:
        'サーミの工芸の伝統は「ドゥオッジ(Duodji)」と呼ばれます。サーミ文化に根ざした実用的な手作りの品々、ナイフ、木工品、トナカイ革・角・骨の製品、織りのバンド、シルバージュエリーなどを指します。ドゥオッジは天然素材から手作業で作られ、その文様や技法はサーミの共同体の中で受け継がれています。',
    },
    {
      q: '商品が本物のサーミ製であることをどう見分けますか（サーミ・ドゥオッジのマーク）?',
      aPlain:
        'サーミ・ドゥオッジ(Sámi Duodji)の商標を探してください。これはSámi Duodji団体が管理する登録された真正性のマークで、その品がサーミの職人によって伝統的な手法で作られたことを証明します。このマークは、本物のサーミ工芸と、土産物として売られる大量生産の模倣品とを見分ける助けになります。',
      aHtml:
        'サーミ・ドゥオッジ(Sámi Duodji)の商標を探してください。これはSámi Duodji団体が管理する登録された真正性のマークで、その品がサーミの職人によって伝統的な手法で作られたことを証明します。このマークは、本物のサーミ工芸と、土産物として売られる大量生産の模倣品とを見分ける助けになります。',
    },
    {
      q: 'ラップランドで買うのに人気の食品にはどんなものがありますか？',
      aPlain:
        '人気の食べられるお土産には、クラウドベリーやリンゴンベリーのジャム、白樺シロップ、乾燥・燻製のトナカイ肉、北極圏のハーブティー、ライ麦パンなどの地元のパン、北国のベリーで風味づけしたチョコレートがあります。日持ちがして持ち運びにも向くため、実用的な贈り物になります。',
      aHtml:
        '人気の食べられるお土産には、クラウドベリーやリンゴンベリーのジャム、白樺シロップ、乾燥・燻製のトナカイ肉、北極圏のハーブティー、ライ麦パンなどの地元のパン、北国のベリーで風味づけしたチョコレートがあります。日持ちがして持ち運びにも向くため、実用的な贈り物になります。',
    },
    {
      q: '一般的な土産物店ではなく、地元ラップランドの作り手から買う理由は？',
      aPlain:
        '地元の作り手から買うと、代金が職人と地域に残り、輸入された模倣品ではなく出所のわかる品が手に入ります。一般的な土産物の多くは海外で大量生産されています。このページの各ブティックはいずれもラップランドの事業者で、出典も記録に残しています。',
      aHtml:
        '地元の作り手から買うと、代金が職人と地域に残り、輸入された模倣品ではなく出所のわかる品が手に入ります。一般的な土産物の多くは海外で大量生産されています。このページの各ブティックはいずれもラップランドの事業者で、出典も記録に残しています。',
    },
  ],

  es: [
    {
      q: '¿Qué productos están realmente hechos en Laponia?',
      aPlain:
        'Los productos auténticamente lapones se elaboran en la Laponia finlandesa con materiales y tradiciones locales: artículos de cuero de reno y asta, cuchillos puukko forjados a mano, objetos de madera de enebro y abedul rizado, prendas de lana, joyería de plata de inspiración sami y alimentos árticos como mermelada de mora ártica, mermelada de arándano rojo, sirope de abedul e infusiones de hierbas. Cada boutique aquí incluida se verifica de forma independiente, con las fuentes documentadas.',
      aHtml:
        'Los productos auténticamente lapones se elaboran en la Laponia finlandesa con materiales y tradiciones locales: artículos de cuero de reno y asta, cuchillos puukko forjados a mano, objetos de madera de enebro y abedul rizado, prendas de lana, joyería de plata de inspiración sami y alimentos árticos como mermelada de mora ártica, mermelada de arándano rojo, sirope de abedul e infusiones de hierbas. Cada boutique aquí incluida se verifica de forma independiente, con las fuentes documentadas.',
    },
    {
      q: '¿Envían productos de Laponia al extranjero?',
      aPlain:
        'Depende de la boutique. LaplandStore es un directorio seleccionado, no una caja única, así que cada productor gestiona sus propios envíos. Muchos tienen tienda en línea propia y envían dentro de Finlandia; algunos envían a la UE o a todo el mundo. Consulte las condiciones de envío de cada tienda, o contáctela directamente, antes de pedir.',
      aHtml:
        'Depende de la boutique. LaplandStore es un directorio seleccionado, no una caja única, así que cada productor gestiona sus propios envíos. Muchos tienen tienda en línea propia y envían dentro de Finlandia; algunos envían a la UE o a todo el mundo. Consulte las condiciones de envío de cada tienda, o contáctela directamente, antes de pedir.',
    },
    {
      q: '¿Qué es una artesanía tradicional lapona o sami?',
      aPlain:
        'La tradición artesanal sami se llama Duodji. Abarca objetos funcionales hechos a mano y arraigados en la cultura sami: cuchillos, objetos de madera, piezas de cuero de reno, asta y hueso, bandas tejidas y joyería de plata. El Duodji se hace a mano con materiales naturales, y sus patrones y técnicas se transmiten dentro de las comunidades sami.',
      aHtml:
        'La tradición artesanal sami se llama Duodji. Abarca objetos funcionales hechos a mano y arraigados en la cultura sami: cuchillos, objetos de madera, piezas de cuero de reno, asta y hueso, bandas tejidas y joyería de plata. El Duodji se hace a mano con materiales naturales, y sus patrones y técnicas se transmiten dentro de las comunidades sami.',
    },
    {
      q: '¿Cómo sé que un producto es auténticamente sami (el sello Sámi Duodji)?',
      aPlain:
        'Busque la marca registrada Sámi Duodji. Es un sello de autenticidad, gestionado por la organización Sámi Duodji, que certifica que una pieza fue hecha por un artesano sami según métodos tradicionales. El sello ayuda a distinguir la artesanía sami genuina de las imitaciones de producción masiva vendidas como recuerdos.',
      aHtml:
        'Busque la marca registrada Sámi Duodji. Es un sello de autenticidad, gestionado por la organización Sámi Duodji, que certifica que una pieza fue hecha por un artesano sami según métodos tradicionales. El sello ayuda a distinguir la artesanía sami genuina de las imitaciones de producción masiva vendidas como recuerdos.',
    },
    {
      q: '¿Qué alimentos de Laponia son populares para comprar?',
      aPlain:
        'Entre los recuerdos comestibles populares están las mermeladas de mora ártica y arándano rojo, el sirope de abedul, la carne de reno seca y ahumada, las infusiones árticas, el pan de centeno y otros panes locales, y los chocolates con bayas del norte. Se conservan bien y aguantan el viaje, lo que los hace regalos prácticos.',
      aHtml:
        'Entre los recuerdos comestibles populares están las mermeladas de mora ártica y arándano rojo, el sirope de abedul, la carne de reno seca y ahumada, las infusiones árticas, el pan de centeno y otros panes locales, y los chocolates con bayas del norte. Se conservan bien y aguantan el viaje, lo que los hace regalos prácticos.',
    },
    {
      q: '¿Por qué comprar a productores locales de Laponia en vez de en tiendas de recuerdos genéricas?',
      aPlain:
        'Comprar a productores locales hace que el dinero quede con el artesano y la región, y obtiene una pieza de origen conocido en lugar de una imitación importada. Muchos recuerdos genéricos se fabrican en serie en el extranjero. Cada boutique de esta página es una empresa de Laponia, listada con sus fuentes documentadas.',
      aHtml:
        'Comprar a productores locales hace que el dinero quede con el artesano y la región, y obtiene una pieza de origen conocido en lugar de una imitación importada. Muchos recuerdos genéricos se fabrican en serie en el extranjero. Cada boutique de esta página es una empresa de Laponia, listada con sus fuentes documentadas.',
    },
  ],

  'pt-BR': [
    {
      q: 'Quais produtos são realmente feitos na Lapônia?',
      aPlain:
        'Os produtos genuinamente lapões são feitos na Lapônia finlandesa com materiais e tradições locais: itens de couro de rena e chifre, facas puukko forjadas à mão, objetos de madeira de zimbro e bétula-frisada, malhas de lã, joias de prata de inspiração sami e alimentos árticos como geleia de amora-ártica, geleia de oxicoco-vermelho, xarope de bétula e chás de ervas. Cada boutique aqui listada é verificada de forma independente, com as fontes documentadas.',
      aHtml:
        'Os produtos genuinamente lapões são feitos na Lapônia finlandesa com materiais e tradições locais: itens de couro de rena e chifre, facas puukko forjadas à mão, objetos de madeira de zimbro e bétula-frisada, malhas de lã, joias de prata de inspiração sami e alimentos árticos como geleia de amora-ártica, geleia de oxicoco-vermelho, xarope de bétula e chás de ervas. Cada boutique aqui listada é verificada de forma independente, com as fontes documentadas.',
    },
    {
      q: 'Vocês enviam produtos da Lapônia para o exterior?',
      aPlain:
        'Depende da boutique. O LaplandStore é um diretório selecionado, não um caixa único, então cada produtor cuida do próprio envio. Muitos têm loja online própria e enviam dentro da Finlândia; alguns enviam para a UE ou para o mundo todo. Confira as condições de envio de cada loja, ou entre em contato diretamente, antes de comprar.',
      aHtml:
        'Depende da boutique. O LaplandStore é um diretório selecionado, não um caixa único, então cada produtor cuida do próprio envio. Muitos têm loja online própria e enviam dentro da Finlândia; alguns enviam para a UE ou para o mundo todo. Confira as condições de envio de cada loja, ou entre em contato diretamente, antes de comprar.',
    },
    {
      q: 'O que é um artesanato tradicional lapão ou sami?',
      aPlain:
        'A tradição artesanal sami chama-se Duodji. Abrange objetos funcionais feitos à mão e enraizados na cultura sami: facas, objetos de madeira, peças de couro de rena, chifre e osso, faixas tecidas e joias de prata. O Duodji é feito à mão com materiais naturais, e seus padrões e técnicas são transmitidos dentro das comunidades sami.',
      aHtml:
        'A tradição artesanal sami chama-se Duodji. Abrange objetos funcionais feitos à mão e enraizados na cultura sami: facas, objetos de madeira, peças de couro de rena, chifre e osso, faixas tecidas e joias de prata. O Duodji é feito à mão com materiais naturais, e seus padrões e técnicas são transmitidos dentro das comunidades sami.',
    },
    {
      q: 'Como sei se um produto é autenticamente sami (o selo Sámi Duodji)?',
      aPlain:
        'Procure a marca registrada Sámi Duodji. É um selo de autenticidade, administrado pela organização Sámi Duodji, que certifica que uma peça foi feita por um artesão sami segundo métodos tradicionais. O selo ajuda a distinguir o artesanato sami genuíno das imitações produzidas em massa e vendidas como lembrancinhas.',
      aHtml:
        'Procure a marca registrada Sámi Duodji. É um selo de autenticidade, administrado pela organização Sámi Duodji, que certifica que uma peça foi feita por um artesão sami segundo métodos tradicionais. O selo ajuda a distinguir o artesanato sami genuíno das imitações produzidas em massa e vendidas como lembrancinhas.',
    },
    {
      q: 'Quais alimentos da Lapônia são populares para comprar?',
      aPlain:
        'Entre as lembrancinhas comestíveis populares estão as geleias de amora-ártica e oxicoco-vermelho, o xarope de bétula, a carne de rena seca e defumada, os chás de ervas árticos, o pão de centeio e outros pães locais, e os chocolates com frutas vermelhas do norte. Eles se conservam bem e aguentam a viagem, o que os torna presentes práticos.',
      aHtml:
        'Entre as lembrancinhas comestíveis populares estão as geleias de amora-ártica e oxicoco-vermelho, o xarope de bétula, a carne de rena seca e defumada, os chás de ervas árticos, o pão de centeio e outros pães locais, e os chocolates com frutas vermelhas do norte. Eles se conservam bem e aguentam a viagem, o que os torna presentes práticos.',
    },
    {
      q: 'Por que comprar de produtores locais da Lapônia em vez de lojas de souvenir genéricas?',
      aPlain:
        'Comprar de produtores locais mantém o dinheiro com o artesão e a região, e você leva uma peça de origem conhecida, não uma imitação importada. Muitos souvenires genéricos são fabricados em massa no exterior. Cada boutique desta página é uma empresa da Lapônia, listada com as fontes documentadas.',
      aHtml:
        'Comprar de produtores locais mantém o dinheiro com o artesão e a região, e você leva uma peça de origem conhecida, não uma imitação importada. Muitos souvenires genéricos são fabricados em massa no exterior. Cada boutique desta página é uma empresa da Lapônia, listada com as fontes documentadas.',
    },
  ],

  'zh-CN': [
    {
      q: '哪些商品是真正在拉普兰制作的?',
      aPlain:
        '真正的拉普兰商品在芬兰拉普兰用本地材料和传统工艺制作:驯鹿皮和鹿角制品、手工锻造的芬兰传统刀(puukko)、杜松木与卷纹桦木的木制品、羊毛针织品、受萨米文化启发的银饰,以及北极食品,如云莓果酱、越橘果酱、桦树糖浆和草本茶。本页收录的每家精品店都经过独立核实,资料来源均有记录。',
      aHtml:
        '真正的拉普兰商品在芬兰拉普兰用本地材料和传统工艺制作:驯鹿皮和鹿角制品、手工锻造的芬兰传统刀(puukko)、杜松木与卷纹桦木的木制品、羊毛针织品、受萨米文化启发的银饰,以及北极食品,如云莓果酱、越橘果酱、桦树糖浆和草本茶。本页收录的每家精品店都经过独立核实,资料来源均有记录。',
    },
    {
      q: '你们会把拉普兰商品寄到国外吗?',
      aPlain:
        '这取决于具体的精品店。LaplandStore 是一个精选的商家目录,而不是统一的结账平台,因此发货由各个制作者各自负责。许多店家自营线上商店并在芬兰境内寄送;部分店家可寄往欧盟或全球。下单前请查看各店的配送条款,或直接与店家联系。',
      aHtml:
        '这取决于具体的精品店。LaplandStore 是一个精选的商家目录,而不是统一的结账平台,因此发货由各个制作者各自负责。许多店家自营线上商店并在芬兰境内寄送;部分店家可寄往欧盟或全球。下单前请查看各店的配送条款,或直接与店家联系。',
    },
    {
      q: '什么是传统的拉普兰或萨米手工艺?',
      aPlain:
        '萨米手工艺传统称为 Duodji。它涵盖植根于萨米文化的实用手工物件：刀具、木制品,以及用驯鹿皮、鹿角和骨制成的物品、编织带和银饰。Duodji 用天然材料手工制作,其纹样和技法在萨米社群中代代相传。',
      aHtml:
        '萨米手工艺传统称为 Duodji。它涵盖植根于萨米文化的实用手工物件：刀具、木制品,以及用驯鹿皮、鹿角和骨制成的物品、编织带和银饰。Duodji 用天然材料手工制作,其纹样和技法在萨米社群中代代相传。',
    },
    {
      q: '我如何确认某件商品是正宗的萨米制品(Sámi Duodji 标志)?',
      aPlain:
        '请寻找 Sámi Duodji 商标。这是由 Sámi Duodji 组织管理的注册真品标志,用以证明某件物品是由萨米工匠按传统方法制作的。该标志有助于把正宗的萨米手工艺与作为纪念品出售的大批量仿制品区分开来。',
      aHtml:
        '请寻找 Sámi Duodji 商标。这是由 Sámi Duodji 组织管理的注册真品标志,用以证明某件物品是由萨米工匠按传统方法制作的。该标志有助于把正宗的萨米手工艺与作为纪念品出售的大批量仿制品区分开来。',
    },
    {
      q: '拉普兰有哪些受欢迎的食品值得购买?',
      aPlain:
        '受欢迎的可食用纪念品包括云莓和越橘果酱、桦树糖浆、风干和烟熏的驯鹿肉、北极草本茶、黑麦面包及其他本地面包,以及用北方浆果调味的巧克力。它们易于保存、耐得住旅途,因此是实用的伴手礼。',
      aHtml:
        '受欢迎的可食用纪念品包括云莓和越橘果酱、桦树糖浆、风干和烟熏的驯鹿肉、北极草本茶、黑麦面包及其他本地面包,以及用北方浆果调味的巧克力。它们易于保存、耐得住旅途,因此是实用的伴手礼。',
    },
    {
      q: '为什么要向拉普兰本地制作者购买,而不是去普通的纪念品店?',
      aPlain:
        '向本地制作者购买,会让钱留在工匠和当地手中,你买到的是一件来源明确的物品,而不是进口的仿制品。许多普通纪念品是在国外大批量生产的。本页面的每家精品店都是拉普兰本地企业,并附有资料来源。',
      aHtml:
        '向本地制作者购买,会让钱留在工匠和当地手中,你买到的是一件来源明确的物品,而不是进口的仿制品。许多普通纪念品是在国外大批量生产的。本页面的每家精品店都是拉普兰本地企业,并附有资料来源。',
    },
  ],

  ko: [
    {
      q: '실제로 라플란드에서 만들어지는 제품은 무엇인가요?',
      aPlain:
        '진정한 라플란드 제품은 핀란드 라플란드에서 현지 재료와 전통으로 만들어집니다. 순록 가죽과 뿔 제품, 손으로 단조한 푸코(puukko) 칼, 향나무와 자작나무 결무늬 목공품, 양모 니트, 사미 문화에서 영감을 받은 은 장신구, 그리고 클라우드베리 잼, 링곤베리 잼, 자작나무 시럽, 허브차 같은 북극 식품 등입니다. 이 페이지에 소개된 모든 부티크는 독립적으로 검증되었으며 출처가 기록되어 있습니다.',
      aHtml:
        '진정한 라플란드 제품은 핀란드 라플란드에서 현지 재료와 전통으로 만들어집니다. 순록 가죽과 뿔 제품, 손으로 단조한 푸코(puukko) 칼, 향나무와 자작나무 결무늬 목공품, 양모 니트, 사미 문화에서 영감을 받은 은 장신구, 그리고 클라우드베리 잼, 링곤베리 잼, 자작나무 시럽, 허브차 같은 북극 식품 등입니다. 이 페이지에 소개된 모든 부티크는 독립적으로 검증되었으며 출처가 기록되어 있습니다.',
    },
    {
      q: '라플란드 제품을 해외로 배송하나요?',
      aPlain:
        '부티크에 따라 다릅니다. LaplandStore는 공통 결제창이 있는 매장이 아니라 엄선된 안내 디렉터리이므로 배송은 각 제작자가 담당합니다. 다수는 자체 온라인 상점을 운영하며 핀란드 내로 발송하고, 일부는 EU나 전 세계로 배송합니다. 주문 전에 각 상점의 배송 조건을 확인하거나 직접 문의하시기 바랍니다.',
      aHtml:
        '부티크에 따라 다릅니다. LaplandStore는 공통 결제창이 있는 매장이 아니라 엄선된 안내 디렉터리이므로 배송은 각 제작자가 담당합니다. 다수는 자체 온라인 상점을 운영하며 핀란드 내로 발송하고, 일부는 EU나 전 세계로 배송합니다. 주문 전에 각 상점의 배송 조건을 확인하거나 직접 문의하시기 바랍니다.',
    },
    {
      q: '전통 라플란드 또는 사미 공예란 무엇인가요?',
      aPlain:
        '사미 공예 전통은 두오지(Duodji)라고 합니다. 사미 문화에 뿌리를 둔 실용적인 수공예품, 칼, 목공품, 순록 가죽·뿔·뼈로 만든 물건, 짜서 만든 띠, 은 장신구 등 을 아우릅니다. 두오지는 천연 재료로 손수 만들며, 그 문양과 기법은 사미 공동체 안에서 대대로 전해집니다.',
      aHtml:
        '사미 공예 전통은 두오지(Duodji)라고 합니다. 사미 문화에 뿌리를 둔 실용적인 수공예품, 칼, 목공품, 순록 가죽·뿔·뼈로 만든 물건, 짜서 만든 띠, 은 장신구 등 을 아우릅니다. 두오지는 천연 재료로 손수 만들며, 그 문양과 기법은 사미 공동체 안에서 대대로 전해집니다.',
    },
    {
      q: '제품이 정품 사미 공예임을 어떻게 알 수 있나요(Sámi Duodji 마크)?',
      aPlain:
        'Sámi Duodji 상표를 확인하세요. 이는 Sámi Duodji 단체가 관리하는 등록된 진품 표시로, 해당 물건이 사미 장인이 전통 방식으로 만들었음을 증명합니다. 이 마크는 진정한 사미 공예품을 기념품으로 판매되는 대량 생산 모조품과 구별하는 데 도움이 됩니다.',
      aHtml:
        'Sámi Duodji 상표를 확인하세요. 이는 Sámi Duodji 단체가 관리하는 등록된 진품 표시로, 해당 물건이 사미 장인이 전통 방식으로 만들었음을 증명합니다. 이 마크는 진정한 사미 공예품을 기념품으로 판매되는 대량 생산 모조품과 구별하는 데 도움이 됩니다.',
    },
    {
      q: '라플란드에서 사기 좋은 인기 식품은 무엇인가요?',
      aPlain:
        '인기 있는 먹거리 기념품으로는 클라우드베리와 링곤베리 잼, 자작나무 시럽, 말린 훈제 순록 고기, 북극 허브차, 호밀빵과 그 밖의 현지 빵, 북방 베리로 맛을 낸 초콜릿이 있습니다. 보관이 쉽고 이동에도 잘 견뎌 실용적인 선물이 됩니다.',
      aHtml:
        '인기 있는 먹거리 기념품으로는 클라우드베리와 링곤베리 잼, 자작나무 시럽, 말린 훈제 순록 고기, 북극 허브차, 호밀빵과 그 밖의 현지 빵, 북방 베리로 맛을 낸 초콜릿이 있습니다. 보관이 쉽고 이동에도 잘 견뎌 실용적인 선물이 됩니다.',
    },
    {
      q: '일반 기념품 가게 대신 라플란드 현지 제작자에게서 사야 하는 이유는?',
      aPlain:
        '현지 제작자에게서 사면 돈이 장인과 지역에 남고, 수입 모조품이 아니라 출처가 분명한 물건을 얻게 됩니다. 일반 기념품의 상당수는 해외에서 대량 생산됩니다. 이 페이지의 모든 부티크는 라플란드에 기반을 둔 사업체이며 출처가 함께 기록되어 있습니다.',
      aHtml:
        '현지 제작자에게서 사면 돈이 장인과 지역에 남고, 수입 모조품이 아니라 출처가 분명한 물건을 얻게 됩니다. 일반 기념품의 상당수는 해외에서 대량 생산됩니다. 이 페이지의 모든 부티크는 라플란드에 기반을 둔 사업체이며 출처가 함께 기록되어 있습니다.',
    },
  ],

  fr: [
    {
      q: 'Quels produits sont réellement fabriqués en Laponie ?',
      aPlain:
        'Les produits authentiquement lapons sont fabriqués en Laponie finlandaise à partir de matériaux et de traditions locales : articles en cuir de renne et en bois de renne, couteaux puukko forgés à la main, objets en bois de genévrier et de bouleau madré, tricots de laine, bijoux en argent d’inspiration sâme et produits alimentaires arctiques comme la confiture de plaquebières (mûres arctiques), la confiture d’airelles, le sirop de bouleau et les tisanes. Chaque boutique présentée ici est vérifiée de façon indépendante, sources documentées.',
      aHtml:
        'Les produits authentiquement lapons sont fabriqués en Laponie finlandaise à partir de matériaux et de traditions locales : articles en cuir de renne et en bois de renne, couteaux puukko forgés à la main, objets en bois de genévrier et de bouleau madré, tricots de laine, bijoux en argent d’inspiration sâme et produits alimentaires arctiques comme la confiture de plaquebières (mûres arctiques), la confiture d’airelles, le sirop de bouleau et les tisanes. Chaque boutique présentée ici est vérifiée de façon indépendante, sources documentées.',
    },
    {
      q: 'Expédiez-vous les produits de Laponie à l’étranger ?',
      aPlain:
        'Cela dépend de la boutique. LaplandStore est un annuaire sélectionné, pas une caisse unique : chaque artisan gère ses propres expéditions. Beaucoup tiennent leur propre boutique en ligne et expédient en Finlande ; certains livrent dans l’UE ou dans le monde entier. Vérifiez les conditions de livraison de chaque boutique, ou contactez-la directement, avant de commander.',
      aHtml:
        'Cela dépend de la boutique. LaplandStore est un annuaire sélectionné, pas une caisse unique : chaque artisan gère ses propres expéditions. Beaucoup tiennent leur propre boutique en ligne et expédient en Finlande ; certains livrent dans l’UE ou dans le monde entier. Vérifiez les conditions de livraison de chaque boutique, ou contactez-la directement, avant de commander.',
    },
    {
      q: 'Qu’est-ce qu’un artisanat traditionnel lapon ou sâme ?',
      aPlain:
        'La tradition artisanale sâme s’appelle le Duodji. Elle regroupe des objets fonctionnels faits main et ancrés dans la culture sâme : couteaux, objets en bois, pièces en cuir de renne, en bois de renne et en os, bandes tissées et bijoux en argent. Le Duodji est fabriqué à la main à partir de matériaux naturels, et ses motifs et techniques se transmettent au sein des communautés sâmes.',
      aHtml:
        'La tradition artisanale sâme s’appelle le Duodji. Elle regroupe des objets fonctionnels faits main et ancrés dans la culture sâme : couteaux, objets en bois, pièces en cuir de renne, en bois de renne et en os, bandes tissées et bijoux en argent. Le Duodji est fabriqué à la main à partir de matériaux naturels, et ses motifs et techniques se transmettent au sein des communautés sâmes.',
    },
    {
      q: 'Comment savoir si un produit est authentiquement sâme (le label Sámi Duodji) ?',
      aPlain:
        'Recherchez la marque Sámi Duodji. C’est un label d’authenticité enregistré, géré par l’organisation Sámi Duodji, qui certifie qu’une pièce a été fabriquée par un artisan sâme selon des méthodes traditionnelles. Ce label aide à distinguer l’artisanat sâme authentique des imitations produites en série et vendues comme souvenirs.',
      aHtml:
        'Recherchez la marque Sámi Duodji. C’est un label d’authenticité enregistré, géré par l’organisation Sámi Duodji, qui certifie qu’une pièce a été fabriquée par un artisan sâme selon des méthodes traditionnelles. Ce label aide à distinguer l’artisanat sâme authentique des imitations produites en série et vendues comme souvenirs.',
    },
    {
      q: 'Quels produits alimentaires de Laponie sont prisés à l’achat ?',
      aPlain:
        'Parmi les souvenirs comestibles prisés figurent les confitures de plaquebières et d’airelles, le sirop de bouleau, la viande de renne séchée et fumée, les tisanes arctiques, le pain de seigle et d’autres pains locaux, ainsi que les chocolats aux baies du Nord. Ils se conservent bien et supportent le voyage, ce qui en fait des cadeaux pratiques.',
      aHtml:
        'Parmi les souvenirs comestibles prisés figurent les confitures de plaquebières et d’airelles, le sirop de bouleau, la viande de renne séchée et fumée, les tisanes arctiques, le pain de seigle et d’autres pains locaux, ainsi que les chocolats aux baies du Nord. Ils se conservent bien et supportent le voyage, ce qui en fait des cadeaux pratiques.',
    },
    {
      q: 'Pourquoi acheter auprès d’artisans locaux de Laponie plutôt que dans des boutiques de souvenirs génériques ?',
      aPlain:
        'Acheter auprès d’artisans locaux fait rester l’argent chez l’artisan et dans la région, et vous obtenez une pièce d’origine connue plutôt qu’une imitation importée. Beaucoup de souvenirs génériques sont produits en série à l’étranger. Chaque boutique de cette page est une entreprise de Laponie, présentée avec ses sources documentées.',
      aHtml:
        'Acheter auprès d’artisans locaux fait rester l’argent chez l’artisan et dans la région, et vous obtenez une pièce d’origine connue plutôt qu’une imitation importée. Beaucoup de souvenirs génériques sont produits en série à l’étranger. Chaque boutique de cette page est une entreprise de Laponie, présentée avec ses sources documentées.',
    },
  ],

  it: [
    {
      q: 'Quali prodotti sono davvero fatti in Lapponia?',
      aPlain:
        'I prodotti autenticamente lapponi sono realizzati nella Lapponia finlandese con materiali e tradizioni locali: articoli in pelle di renna e corno, coltelli puukko forgiati a mano, oggetti in legno di ginepro e betulla fiammata, maglieria di lana, gioielli d’argento di ispirazione sami e alimenti artici come confettura di lampone artico, marmellata di mirtillo rosso, sciroppo di betulla e tisane. Ogni boutique qui presentata è verificata in modo indipendente, con le fonti documentate.',
      aHtml:
        'I prodotti autenticamente lapponi sono realizzati nella Lapponia finlandese con materiali e tradizioni locali: articoli in pelle di renna e corno, coltelli puukko forgiati a mano, oggetti in legno di ginepro e betulla fiammata, maglieria di lana, gioielli d’argento di ispirazione sami e alimenti artici come confettura di lampone artico, marmellata di mirtillo rosso, sciroppo di betulla e tisane. Ogni boutique qui presentata è verificata in modo indipendente, con le fonti documentate.',
    },
    {
      q: 'Spedisce i prodotti della Lapponia all’estero?',
      aPlain:
        'Dipende dalla boutique. LaplandStore è una directory selezionata, non una cassa unica, quindi la spedizione è gestita da ciascun artigiano. Molti hanno un proprio negozio online e spediscono in Finlandia; alcuni spediscono nell’UE o in tutto il mondo. Verifichi le condizioni di spedizione del singolo negozio, o lo contatti direttamente, prima di ordinare.',
      aHtml:
        'Dipende dalla boutique. LaplandStore è una directory selezionata, non una cassa unica, quindi la spedizione è gestita da ciascun artigiano. Molti hanno un proprio negozio online e spediscono in Finlandia; alcuni spediscono nell’UE o in tutto il mondo. Verifichi le condizioni di spedizione del singolo negozio, o lo contatti direttamente, prima di ordinare.',
    },
    {
      q: 'Che cos’è un artigianato tradizionale lappone o sami?',
      aPlain:
        'La tradizione artigianale sami si chiama Duodji. Comprende oggetti funzionali fatti a mano e radicati nella cultura sami: coltelli, oggetti in legno, articoli in pelle di renna, corno e osso, fasce intrecciate e gioielli d’argento. Il Duodji è realizzato a mano con materiali naturali, e i suoi motivi e le sue tecniche si tramandano all’interno delle comunità sami.',
      aHtml:
        'La tradizione artigianale sami si chiama Duodji. Comprende oggetti funzionali fatti a mano e radicati nella cultura sami: coltelli, oggetti in legno, articoli in pelle di renna, corno e osso, fasce intrecciate e gioielli d’argento. Il Duodji è realizzato a mano con materiali naturali, e i suoi motivi e le sue tecniche si tramandano all’interno delle comunità sami.',
    },
    {
      q: 'Come faccio a sapere che un prodotto è autenticamente sami (il marchio Sámi Duodji)?',
      aPlain:
        'Cerchi il marchio Sámi Duodji. È un’etichetta di autenticità registrata, gestita dall’organizzazione Sámi Duodji, che certifica che un oggetto è stato realizzato da un artigiano sami secondo metodi tradizionali. Il marchio aiuta a distinguere l’autentico artigianato sami dalle imitazioni prodotte in serie e vendute come souvenir.',
      aHtml:
        'Cerchi il marchio Sámi Duodji. È un’etichetta di autenticità registrata, gestita dall’organizzazione Sámi Duodji, che certifica che un oggetto è stato realizzato da un artigiano sami secondo metodi tradizionali. Il marchio aiuta a distinguere l’autentico artigianato sami dalle imitazioni prodotte in serie e vendute come souvenir.',
    },
    {
      q: 'Quali prodotti alimentari della Lapponia sono apprezzati come acquisto?',
      aPlain:
        'Tra i souvenir gastronomici apprezzati ci sono le confetture di lampone artico e mirtillo rosso, lo sciroppo di betulla, la carne di renna essiccata e affumicata, le tisane artiche, il pane di segale e altri pani locali, e i cioccolatini ai frutti di bosco del Nord. Si conservano bene e resistono al viaggio, il che li rende regali pratici.',
      aHtml:
        'Tra i souvenir gastronomici apprezzati ci sono le confetture di lampone artico e mirtillo rosso, lo sciroppo di betulla, la carne di renna essiccata e affumicata, le tisane artiche, il pane di segale e altri pani locali, e i cioccolatini ai frutti di bosco del Nord. Si conservano bene e resistono al viaggio, il che li rende regali pratici.',
    },
    {
      q: 'Perché acquistare da artigiani locali della Lapponia invece che nei comuni negozi di souvenir?',
      aPlain:
        'Acquistare da artigiani locali fa restare il denaro all’artigiano e alla regione, e si ottiene un oggetto di origine nota anziché un’imitazione importata. Molti souvenir comuni sono prodotti in serie all’estero. Ogni boutique di questa pagina è un’attività della Lapponia, presentata con le fonti documentate.',
      aHtml:
        'Acquistare da artigiani locali fa restare il denaro all’artigiano e alla regione, e si ottiene un oggetto di origine nota anziché un’imitazione importata. Molti souvenir comuni sono prodotti in serie all’estero. Ogni boutique di questa pagina è un’attività della Lapponia, presentata con le fonti documentate.',
    },
  ],

  nl: [
    {
      q: 'Welke producten worden echt in Lapland gemaakt?',
      aPlain:
        'Echt Laplandse producten worden in Fins Lapland gemaakt van lokale materialen en tradities: artikelen van rendierleer en gewei, handgesmede puukko-messen, houtwerk van jeneverbes en gevlamd berken, wollen breiwerk, op de Sami-cultuur geïnspireerde zilveren sieraden en Arctische levensmiddelen zoals kruipbraamjam, vossenbessenjam, berkensiroop en kruidenthee. Elke hier vermelde boutique wordt onafhankelijk geverifieerd, met de bronnen gedocumenteerd.',
      aHtml:
        'Echt Laplandse producten worden in Fins Lapland gemaakt van lokale materialen en tradities: artikelen van rendierleer en gewei, handgesmede puukko-messen, houtwerk van jeneverbes en gevlamd berken, wollen breiwerk, op de Sami-cultuur geïnspireerde zilveren sieraden en Arctische levensmiddelen zoals kruipbraamjam, vossenbessenjam, berkensiroop en kruidenthee. Elke hier vermelde boutique wordt onafhankelijk geverifieerd, met de bronnen gedocumenteerd.',
    },
    {
      q: 'Verzendt u Lapland-producten naar het buitenland?',
      aPlain:
        'Dat hangt van de boutique af. LaplandStore is een samengestelde gids, geen gezamenlijke kassa, dus de verzending wordt door elke maker zelf geregeld. Veel makers hebben een eigen online winkel en versturen binnen Finland; sommige verzenden naar de EU of wereldwijd. Controleer vóór het bestellen de verzendvoorwaarden van de betreffende winkel, of neem rechtstreeks contact op.',
      aHtml:
        'Dat hangt van de boutique af. LaplandStore is een samengestelde gids, geen gezamenlijke kassa, dus de verzending wordt door elke maker zelf geregeld. Veel makers hebben een eigen online winkel en versturen binnen Finland; sommige verzenden naar de EU of wereldwijd. Controleer vóór het bestellen de verzendvoorwaarden van de betreffende winkel, of neem rechtstreeks contact op.',
    },
    {
      q: 'Wat is een traditioneel Laplands of Sami-ambacht?',
      aPlain:
        'De Sami-ambachtstraditie heet Duodji. Ze omvat functionele, handgemaakte voorwerpen die geworteld zijn in de Sami-cultuur: messen, houtwerk, voorwerpen van rendierleer, gewei en bot, geweven banden en zilveren sieraden. Duodji wordt met de hand gemaakt van natuurlijke materialen, en de patronen en technieken worden binnen de Sami-gemeenschappen doorgegeven.',
      aHtml:
        'De Sami-ambachtstraditie heet Duodji. Ze omvat functionele, handgemaakte voorwerpen die geworteld zijn in de Sami-cultuur: messen, houtwerk, voorwerpen van rendierleer, gewei en bot, geweven banden en zilveren sieraden. Duodji wordt met de hand gemaakt van natuurlijke materialen, en de patronen en technieken worden binnen de Sami-gemeenschappen doorgegeven.',
    },
    {
      q: 'Hoe weet ik dat een product authentiek Sami is (het Sámi Duodji-merk)?',
      aPlain:
        'Let op het Sámi Duodji-merk. Dat is een geregistreerd echtheidskeurmerk, beheerd door de organisatie Sámi Duodji, dat bevestigt dat een stuk door een Sami-ambachtsman volgens traditionele methoden is gemaakt. Het keurmerk helpt om echt Sami-ambacht te onderscheiden van massaal geproduceerde imitaties die als souvenir worden verkocht.',
      aHtml:
        'Let op het Sámi Duodji-merk. Dat is een geregistreerd echtheidskeurmerk, beheerd door de organisatie Sámi Duodji, dat bevestigt dat een stuk door een Sami-ambachtsman volgens traditionele methoden is gemaakt. Het keurmerk helpt om echt Sami-ambacht te onderscheiden van massaal geproduceerde imitaties die als souvenir worden verkocht.',
    },
    {
      q: 'Welke Lapland-levensmiddelen zijn populair om te kopen?',
      aPlain:
        'Populaire eetbare souvenirs zijn kruipbraam- en vossenbessenjam, berkensiroop, gedroogd en gerookt rendiervlees, Arctische kruidenthee, roggebrood en ander lokaal brood, en chocolade met noordelijke bessen. Ze zijn goed houdbaar en bestand tegen de reis, wat ze praktische cadeaus maakt.',
      aHtml:
        'Populaire eetbare souvenirs zijn kruipbraam- en vossenbessenjam, berkensiroop, gedroogd en gerookt rendiervlees, Arctische kruidenthee, roggebrood en ander lokaal brood, en chocolade met noordelijke bessen. Ze zijn goed houdbaar en bestand tegen de reis, wat ze praktische cadeaus maakt.',
    },
    {
      q: 'Waarom kopen bij lokale Laplandse makers in plaats van bij gewone souvenirwinkels?',
      aPlain:
        'Kopen bij lokale makers houdt het geld bij de ambachtsman en de regio, en u krijgt een stuk met een bekende herkomst in plaats van een geïmporteerde imitatie. Veel gewone souvenirs worden in het buitenland massaal geproduceerd. Elke boutique op deze pagina is een in Lapland gevestigd bedrijf, vermeld met de bronnen gedocumenteerd.',
      aHtml:
        'Kopen bij lokale makers houdt het geld bij de ambachtsman en de regio, en u krijgt een stuk met een bekende herkomst in plaats van een geïmporteerde imitatie. Veel gewone souvenirs worden in het buitenland massaal geproduceerd. Elke boutique op deze pagina is een in Lapland gevestigd bedrijf, vermeld met de bronnen gedocumenteerd.',
    },
  ],

  sv: [
    {
      q: 'Vilka produkter är verkligt tillverkade i Lappland?',
      aPlain:
        'Verkligt lappländska produkter tillverkas i finska Lappland av lokala material och traditioner: föremål i renläder och renhorn, handsmidda puukko-knivar, svarvade föremål i en och masurbjörk, stickat i ull, silversmycken inspirerade av samisk kultur och arktiska livsmedel som hjortronsylt, lingonsylt, björksirap och örtteer. Varje butik som listas här är oberoende verifierad, med källorna sparade.',
      aHtml:
        'Verkligt lappländska produkter tillverkas i finska Lappland av lokala material och traditioner: föremål i renläder och renhorn, handsmidda puukko-knivar, svarvade föremål i en och masurbjörk, stickat i ull, silversmycken inspirerade av samisk kultur och arktiska livsmedel som hjortronsylt, lingonsylt, björksirap och örtteer. Varje butik som listas här är oberoende verifierad, med källorna sparade.',
    },
    {
      q: 'Skickar ni produkter från Lappland utomlands?',
      aPlain:
        'Det beror på butiken. LaplandStore är en handplockad katalog snarare än en gemensam kassa, så leveransen sköts av varje tillverkare. Många driver en egen webbutik och skickar inom Finland; en del skickar inom EU eller över hela världen. Kontrollera den enskilda butikens leveransvillkor, eller kontakta den direkt, innan du beställer.',
      aHtml:
        'Det beror på butiken. LaplandStore är en handplockad katalog snarare än en gemensam kassa, så leveransen sköts av varje tillverkare. Många driver en egen webbutik och skickar inom Finland; en del skickar inom EU eller över hela världen. Kontrollera den enskilda butikens leveransvillkor, eller kontakta den direkt, innan du beställer.',
    },
    {
      q: 'Vad är traditionellt lappländskt eller samiskt hantverk?',
      aPlain:
        'Den samiska hantverkstraditionen kallas duodji. Den omfattar funktionella, handgjorda föremål med rötter i samisk kultur: knivar, träföremål, föremål i renläder, horn och ben, vävda band och silversmycken. Duodji görs för hand av naturmaterial, och dess mönster och tekniker förs vidare inom de samiska samhällena.',
      aHtml:
        'Den samiska hantverkstraditionen kallas duodji. Den omfattar funktionella, handgjorda föremål med rötter i samisk kultur: knivar, träföremål, föremål i renläder, horn och ben, vävda band och silversmycken. Duodji görs för hand av naturmaterial, och dess mönster och tekniker förs vidare inom de samiska samhällena.',
    },
    {
      q: 'Hur vet jag att en produkt är äkta samisk (märket Sámi Duodji)?',
      aPlain:
        'Leta efter varumärket Sámi Duodji. Det är en registrerad äkthetsmärkning som administreras av organisationen Sámi Duodji och intygar att ett föremål har tillverkats av en samisk hantverkare enligt traditionella metoder. Märket hjälper dig att skilja äkta samiskt hantverk från massproducerade imitationer som säljs som souvenirer.',
      aHtml:
        'Leta efter varumärket Sámi Duodji. Det är en registrerad äkthetsmärkning som administreras av organisationen Sámi Duodji och intygar att ett föremål har tillverkats av en samisk hantverkare enligt traditionella metoder. Märket hjälper dig att skilja äkta samiskt hantverk från massproducerade imitationer som säljs som souvenirer.',
    },
    {
      q: 'Vilka livsmedel från Lappland är populära att köpa?',
      aPlain:
        'Populära ätbara souvenirer är hjortron- och lingonsylt, björksirap, torkat och rökt renkött, arktiska örtteer, råg- och annat lokalt bröd samt choklad smaksatt med nordliga bär. De håller sig bra och tål resan, vilket gör dem till praktiska presenter att ta med hem.',
      aHtml:
        'Populära ätbara souvenirer är hjortron- och lingonsylt, björksirap, torkat och rökt renkött, arktiska örtteer, råg- och annat lokalt bröd samt choklad smaksatt med nordliga bär. De håller sig bra och tål resan, vilket gör dem till praktiska presenter att ta med hem.',
    },
    {
      q: 'Varför köpa av lokala tillverkare i Lappland i stället för i vanliga souvenirbutiker?',
      aPlain:
        'När du köper av lokala tillverkare stannar pengarna hos hantverkaren och i regionen, och du får ett föremål med känt ursprung i stället för en importerad imitation. Många vanliga souvenirer massproduceras utomlands. Varje butik på den här sidan är ett företag i Lappland, listat med sina källor sparade.',
      aHtml:
        'När du köper av lokala tillverkare stannar pengarna hos hantverkaren och i regionen, och du får ett föremål med känt ursprung i stället för en importerad imitation. Många vanliga souvenirer massproduceras utomlands. Varje butik på den här sidan är ett företag i Lappland, listat med sina källor sparade.',
    },
  ],
};

const HEADINGS: Record<Lang, { eyebrow: string; h2: string; lead: string }> = {
  en: { eyebrow: 'Good to know', h2: 'Questions about buying from Lapland', lead: 'What shoppers ask before ordering authentic Lapland products.' },
  fi: { eyebrow: 'Hyvä tietää', h2: 'Kysymyksiä Lapista ostamisesta', lead: 'Mitä ostajat kysyvät ennen aitojen Lapin tuotteiden tilaamista.' },
  de: { eyebrow: 'Gut zu wissen', h2: 'Fragen zum Einkauf aus Lappland', lead: 'Was Käuferinnen und Käufer vor der Bestellung echter Lappland-Produkte fragen.' },
  ja: { eyebrow: '知っておきたいこと', h2: 'ラップランドでの購入に関する質問', lead: '本物のラップランド製品を注文する前に、よく寄せられる質問。' },
  es: { eyebrow: 'Bueno saberlo', h2: 'Preguntas sobre comprar en Laponia', lead: 'Lo que preguntan los compradores antes de pedir productos auténticos de Laponia.' },
  'pt-BR': { eyebrow: 'Bom saber', h2: 'Perguntas sobre comprar na Lapônia', lead: 'O que os compradores perguntam antes de pedir produtos autênticos da Lapônia.' },
  'zh-CN': { eyebrow: '了解一下', h2: '关于在拉普兰购物的常见问题', lead: '购买正宗拉普兰产品前,买家常问的问题。' },
  ko: { eyebrow: '알아두면 좋아요', h2: '라플란드에서 구매하기에 관한 질문', lead: '정품 라플란드 제품을 주문하기 전에 구매자들이 자주 묻는 질문입니다.' },
  fr: { eyebrow: 'Bon à savoir', h2: 'Questions sur les achats en Laponie', lead: 'Ce que les acheteurs demandent avant de commander des produits authentiques de Laponie.' },
  it: { eyebrow: 'Utile da sapere', h2: 'Domande sull’acquisto dalla Lapponia', lead: 'Cosa chiedono gli acquirenti prima di ordinare prodotti autentici della Lapponia.' },
  nl: { eyebrow: 'Goed om te weten', h2: 'Vragen over kopen uit Lapland', lead: 'Wat kopers vragen voordat ze authentieke Lapland-producten bestellen.' },
  sv: { eyebrow: 'Bra att veta', h2: 'Frågor om att handla från Lappland', lead: 'Vad kunder undrar innan de beställer äkta produkter från Lappland.' },
};

// Per-question links to the on-page sections that back each answer
// (Vesa 2026-07-07: FAQ answers must point to our own supporting content).
// Section labels reuse the existing footer-pillar translations in App.tsx —
// no new translation keys. Duodji/Sámi content lives in LocalShops
// (#putiikit); food categories in #herkut; the maker ethos in #tarina.
const SECTION_LABELS: Record<Lang, { herkut: string; suosittelemme: string; putiikit: string; tarina: string }> = {
  en: { herkut: 'Categories', suosittelemme: 'We Recommend', putiikit: 'Boutiques', tarina: 'Story' },
  fi: { herkut: 'Kategoriat', suosittelemme: 'Suosittelemme', putiikit: 'Putiikit', tarina: 'Tarina' },
  de: { herkut: 'Kategorien', suosittelemme: 'Empfehlungen', putiikit: 'Boutiquen', tarina: 'Geschichte' },
  ja: { herkut: 'カテゴリー', suosittelemme: 'おすすめ', putiikit: 'ブティック', tarina: 'ストーリー' },
  es: { herkut: 'Categorías', suosittelemme: 'Recomendamos', putiikit: 'Boutiques', tarina: 'Historia' },
  'pt-BR': { herkut: 'Categorias', suosittelemme: 'Recomendamos', putiikit: 'Boutiques', tarina: 'História' },
  'zh-CN': { herkut: '分类', suosittelemme: '我们的推荐', putiikit: '精品店', tarina: '故事' },
  ko: { herkut: '카테고리', suosittelemme: '추천 상점', putiikit: '부티크', tarina: '이야기' },
  fr: { herkut: 'Catégories', suosittelemme: 'Nos recommandations', putiikit: 'Boutiques', tarina: 'Histoire' },
  it: { herkut: 'Categorie', suosittelemme: 'Le nostre raccomandazioni', putiikit: 'Boutique', tarina: 'Storia' },
  nl: { herkut: 'Categorieën', suosittelemme: 'Onze aanbevelingen', putiikit: 'Boutiques', tarina: 'Verhaal' },
  sv: { herkut: 'Kategorier', suosittelemme: 'Vi rekommenderar', putiikit: 'Butiker', tarina: 'Berättelse' },
};
type SectionKey = keyof (typeof SECTION_LABELS)['en'];
const FAQ_LINKS: SectionKey[][] = [
  ['putiikit', 'herkut'],  // 1 genuinely made in Lapland → verified boutiques + categories
  ['putiikit'],            // 2 international shipping → each boutique's own terms
  ['putiikit'],            // 3 what is Duodji → Duodji makers among the boutiques
  ['putiikit'],            // 4 Sámi Duodji mark → authorised sellers in the directory
  ['herkut'],              // 5 food products → delicacies category
  ['tarina', 'putiikit'],  // 6 why buy local → maker stories + boutiques
];

export default function FAQ() {
  const { lang } = useLang();
  const list = FAQ_BY_LANG[lang];
  const h = HEADINGS[lang];
  const labels = SECTION_LABELS[lang];

  return (
    <section id="faq" className="py-16 sm:py-20 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm tracking-[0.3em] uppercase text-amber font-bold">
            {h.eyebrow}
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl text-night mt-3 leading-tight [text-wrap:balance]">
            {h.h2}
          </h2>
          <p className="text-warm-gray text-base mt-4 leading-relaxed [text-wrap:pretty]">{h.lead}</p>
        </div>

        <div className="space-y-4">
          {list.map((faq, i) => (
            <details
              key={i}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-6 select-none">
                {/* 🔴 Kysymys on font-bodylla eikä font-headingilla: otsikkofontti
                    on 2026-08-07 alkaen Bebas Neue, joka on versaali, ja
                    kokonainen kysymyslause versaalina on lukukelvoton. Sama
                    päätös kuin giftsin tuotenimissä 1.8. */}
                <h3 className="font-body font-semibold text-lg sm:text-xl text-night leading-snug">
                  {faq.q}
                </h3>
                <span
                  className="shrink-0 text-amber text-2xl leading-none transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p
                  className="text-warm-gray text-[15px] sm:text-base leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.aHtml }}
                />
                {(FAQ_LINKS[i] ?? []).length > 0 && (
                  <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4">
                    {FAQ_LINKS[i].map((key) => (
                      <a
                        key={key}
                        href={`#${key}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wider text-amber hover:text-night transition-colors"
                      >
                        {labels[key]} <span aria-hidden="true">→</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
