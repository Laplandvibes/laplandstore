import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLang, type Lang } from '../lang';

/**
 * Valmis kori — koko kerrasto yhdellä klikillä kumppanin ostoskoriin.
 *
 * 🔴 Miksi (Vesa 5.9.2026): "eikö siellä pitäisi olla sellaisia täkyjä ja
 * paketteja luotu, osta tästä koko setti mitä tarvitset lappiin, olisimme
 * keränneet ne valmiiksi ostoskoriin."
 *
 * 🔴🔴 Miksi tarina ensin (Vesa 5.9. ilta, ensimmäisestä versiosta): "ai tämä
 * on taso? ketä tämä houkuttaa? mikset tässä ole tarinan kerrontaa ympärillä,
 * ei mitään tällästä paljasta gridiä, ensin pitää saada asiakas haluamaan
 * ostamaan tämä paketti ja sitten on se mainos sinne" ja "jopa artikkelin
 * omaista pehmeää tarinan kerrontaa, mielikuvien luontia". Ensimmäinen versio
 * oli hintataulukko. Nyt osio avautuu kuin artikkeli (ovi aukeaa, lumi
 * narisee), jokainen kori alkaa kohtauksesta kahdessa kappaleessa (aamu
 * husky-tarhalla, revontulten odotus, kuva paljain sormin, viikko jaloille),
 * kuvat ovat kumppanin omia tuotekuvia, ja hinta, koko ja nappi tulevat vasta
 * tarinan jälkeen. Rivit vuorottelevat kuva vasen / kuva oikea, jotta sivu
 * lukee kertomuksena eikä ruudukkona.
 *
 * Miten: Shopify-kaupat hyväksyvät koripermalinkin /cart/<variantId>:<määrä>,…
 * ja linkki kulkee Workerin (go.laplandvibes.com) ja Adtractionin läpi, joten
 * komissio säilyy. Mitattu 5.9.2026 selaimessa: Halti ja Sukkamestarit, 3
 * riviä → kassa, at_gd-eväste. Halti toimittaa vain Suomeen (halti.fi:n
 * toimitusehdot 4.8.2026), mikä sanotaan jokaisessa Halti-korissa.
 *
 * Koko: kerrasto ja sukat ovat kokoriippuvaisia, joten korissa on yksi
 * kokovalitsin, joka vaihtaa KAIKKIEN rivien variantit kerralla.
 *
 * Kuvat: public/img/baskets/*.webp = kumppanin omat tuotekuvat (Shopify
 * products/<handle>.js, varianttikohtainen kuva kun korin väri ei ole
 * oletusväri), ei stockia eikä AI:ta (CLAUDE.md: kumppanin tuote on aina
 * kumppanin oma tiedosto). Kohtauskuvia ei ole: heinäkuun matkakuvat ovat
 * kesältä, eikä talvikohtausta keksitä kuvalla — mielikuva tehdään tekstillä.
 * 🔴 Ei Umami-eventtiä CTA:lle: affiliate-klikit mitataan Worker-D1:ssä.
 * Variantti-id:t ja hinnat luettu 5.9.2026. Tarinoissa ei ole lukuja, joita
 * ei voi todentaa: "reilut parikymmentä astetta pakkasta" on Lapin talven
 * tavallinen aamu, ei mittaus.
 */

const PRICES_AS_OF = '2026-09-05';

interface BasketItem {
  /** Kaupan oma tuotenimi, ei käännetä. */
  name: string;
  price: number;
  /** Kumppanin tuotekuva public/img/baskets/<image>.webp */
  image: string;
  /** kokoavain → variantId; '*' = sama variantti joka koolle (esim. pipo). */
  variants: Record<string, string>;
}

interface Basket {
  key: string;
  shop: 'halti' | 'sukkamestarit';
  shopName: string;
  cartBase: string;
  sizes: string[];
  /** Oletuskoko prerenderissä ja ennen valintaa. */
  defaultSize: string;
  items: BasketItem[];
}

const BASKETS: Basket[] = [
  {
    key: 'merino_men',
    shop: 'halti',
    shopName: 'Halti',
    cartBase: 'https://www.halti.fi',
    sizes: ['S', 'M', 'L', 'XXL', 'XXXL'],
    defaultSize: 'M',
    items: [
      { name: 'Hossa II Merino Kerrasto, miesten', price: 120, image: 'hossa-men', variants: { S: '55373603668293', M: '55373603701061', L: '55373603733829', XXL: '55373603799365', XXXL: '55373603832133' } },
      { name: 'Merinovillasukat, 2 paria', price: 30, image: 'merino-socks', variants: { S: '54332035793221', M: '54332035825989', L: '54332035858757', XXL: '54332035891525', XXXL: '54332035891525' } },
      { name: 'Pehmee Merinopipo', price: 50, image: 'pehmee-beanie-blue', variants: { '*': '56543933727045' } },
    ],
  },
  {
    key: 'merino_women',
    shop: 'halti',
    shopName: 'Halti',
    cartBase: 'https://www.halti.fi',
    sizes: ['38', '40', '42', '44', '46', '48'],
    defaultSize: '40',
    items: [
      { name: 'Hossa II Merino Kerrasto, naisten', price: 120, image: 'hossa-women', variants: { 38: '55623370015045', 40: '55623370047813', 42: '55623370080581', 44: '55623370113349', 46: '55623370146117', 48: '55623370178885' } },
      { name: 'Merinovillasukat, 2 paria', price: 30, image: 'merino-socks-maroon', variants: { 38: '55741659119941', 40: '55741659152709', 42: '55741659152709', 44: '55741659185477', 46: '55741659185477', 48: '55741659218245' } },
      { name: 'Pehmee Merinopipo', price: 50, image: 'pehmee-beanie-pink', variants: { '*': '56543933759813' } },
    ],
  },
  {
    key: 'hands_feet',
    shop: 'halti',
    shopName: 'Halti',
    cartBase: 'https://www.halti.fi',
    sizes: ['S', 'M', 'L', 'XL'],
    defaultSize: 'M',
    items: [
      { name: 'Viiri Fleece Hanskat', price: 35, image: 'viiri-gloves', variants: { S: '55438357922117', M: '55438357954885', L: '55438357987653', XL: '55438358020421' } },
      { name: 'Tunturit Laskettelusukat', price: 25, image: 'tunturit-socks', variants: { S: '56047354020165', M: '56047354052933', L: '56047354085701', XL: '56047354118469' } },
      { name: 'Pehmee Merinopipo', price: 50, image: 'pehmee-beanie-olive', variants: { '*': '56543933792581' } },
    ],
  },
  {
    key: 'socks_week',
    shop: 'sukkamestarit',
    shopName: 'Sukkamestarit',
    cartBase: 'https://sukkamestarit.com',
    sizes: ['35-38', '39-42', '43-46'],
    defaultSize: '39-42',
    items: [
      { name: 'Napa, merinovillasukat vaellukseen', price: 24.9, image: 'napa', variants: { '35-38': '45185635221760', '39-42': '45185635254528', '43-46': '45185635287296' } },
      { name: 'Rakka, tencel-merinovillasukat', price: 16.9, image: 'rakka', variants: { '35-38': '56536355471738', '39-42': '56536355504506', '43-46': '56536355537274' } },
      { name: 'Vuori, merinovillasukat pukeutumiseen', price: 10.43, image: 'vuori', variants: { '35-38': '45185676247296', '39-42': '45185676280064', '43-46': '45185676312832' } },
    ],
  },
];

interface BasketCopy {
  /** Kohtauksen otsikko, ei tuotenimi. */
  scene: string;
  /** Kaksi kappaletta: ensin tilanne ja tunne, sitten miksi juuri nämä kolme. */
  story: [string, string];
  /** Korin lyhyt nimi rivilistan yläpuolelle. */
  name: string;
  shipping: string;
}

interface Copy {
  eyebrow: string;
  title: string;
  /** Artikkelin avaus: yksi kappale, joka vie lukijan ovelle. */
  lead: string;
  contents: string;
  size: string;
  cta: (shop: string) => string;
  total: string;
  fine: string;
  baskets: Record<string, BasketCopy>;
}

const HALTI_FI = 'Toimitus vain Suomeen (Posti, Matkahuolto, PostNord).';
const HALTI_EN = 'Delivers within Finland only (Posti, Matkahuolto, PostNord).';
// Sukkamestarit.com/policies/shipping-policy 5.9.2026: Suomessa veloituksetta,
// kun tilaus on vähintään 50 €; muut maat kassalla ("riippuen toimitusmaasta").
const SUKKA_FI = 'Suomeen veloituksetta, kun tilaus on vähintään 50 €; muihin maihin hinta näkyy kassalla.';
const SUKKA_EN = 'Free delivery within Finland on orders of 50 € or more; other countries priced at checkout.';

const COPY: Record<Lang, Copy> = {
  fi: {
    eyebrow: 'Valmis kori',
    title: 'Pakkanen ei kysy, mitä pakkasit',
    lead: 'Lapin talvessa on hetki, jonka jokainen muistaa: ovi aukeaa, ilma on niin kuivaa ja kirkasta että sen tuntee nenässä, ja lumi narisee kengän alla. Sen jälkeen kaikki riippuu siitä, mitä on ihoa vasten. Puuvilla kastuu ja jäähtyy, merino pysyy lämpimänä märkänäkin, ja käsineet ratkaisevat, kuinka kauan jaksat katsoa taivasta. Kokosimme neljä koria valmiiksi kaupan ostoskoriin. Valitse koko ja avaa kori, jäljellä on osoite ja maksu.',
    contents: 'Korissa',
    size: 'Koko',
    cta: (s) => (s === 'Halti' ? 'Avaa kori Haltilla' : 'Avaa kori Sukkamestareilla'),
    total: 'Yhteensä',
    fine: 'Kori aukeaa kumppanin kassalle uudessa välilehdessä. Hinta ja saatavuus ovat kaupan omia, ja saatamme saada ostoksesta palkkion. Hinnat luettu kauppojen tuotetiedoista 5.9.2026.',
    baskets: {
      merino_men: {
        scene: 'Aamu husky-tarhalla',
        story: [
          'Tarhalle tullaan, kun on vielä hämärää. Koirat kuulevat auton ennen kuin näet ne, ja sata ääntä nousee kerralla: ne haluavat lähteä. Reki on matala, vauhti tulee ensimmäisessä mäessä, ja reilut parikymmentä astetta pakkasta valuu kasvoille kuin vesi.',
          'Tunnin päästä tiedät, mitä puit alle. Puuvilla kastui jo ensimmäisessä nousussa ja on nyt kylmä kalvo ihoa vasten. Merino sitoo kosteuden kuituun ja lämmittää märkänäkin, sukat samasta syystä. Tämä kori on se kerros, jota ei näe kuvissa, mutta jonka ansiosta kuvissa hymyillään.',
        ],
        name: 'Merinokerrasto, miehet',
        shipping: HALTI_FI,
      },
      merino_women: {
        scene: 'Revontulten odotus',
        story: [
          'Revontulet eivät tule sovittuun aikaan. Ne tulevat yhdentoista jälkeen tai puoli yhdeltä, tai jättävät tulematta, ja sillä välin seisotaan hangella katsomassa pohjoiseen. Ensin puhutaan, sitten hiljennytään, ja lopulta kuulee vain oman hengityksensä ja ihmettelee, miten hiljaista voi olla.',
          'Silloin ratkaisee, mitä on iholla. Paikallaan seisovassa ihmisessä ei synny lämpöä, ja merino on se kuitu, joka lämmittää silti. Kaksi paria sukkia tarkoittaa, että toinen pari on aamulla kuiva. Sama kerrasto naisten mitoituksella ja pipo sävyyn, jotta odotus kestää sen, mitä taivas vaatii.',
        ],
        name: 'Merinokerrasto, naiset',
        shipping: HALTI_FI,
      },
      hands_feet: {
        scene: 'Kuva, joka otetaan paljain sormin',
        story: [
          'Juuri kun vihreä kaari alkaa liikkua, hanska lähtee kädestä, koska puhelin ei tottele sen läpi. Kolme kuvaa, ja sormet ovat puuta. Se on retken hiljainen totuus: kylmä ei tule takin läpi vaan sormista ja varpaista, koska keho vetää veren keskelle ja jättää reunat oman onnensa nojaan.',
          'Fleecehanskat, joiden peukalo ja etusormi toimivat näytöllä, laskettelusukat ja merinopipo. Kolme pientä esinettä, jotka ratkaisevat, kestääkö ilta koko kaaren vai vain sen alun.',
        ],
        name: 'Kädet ja jalat pakkasessa',
        shipping: HALTI_FI,
      },
      socks_week: {
        scene: 'Mökissä on lattialämmitys, tunturissa ei',
        story: [
          'Lapin viikko on oikeasti viikko jaloille. Aamulla ne kävelevät tunturiin, päivällä seisovat kahvilan jonossa märissä kengissä, illalla hakevat saunan jälkeen lämmintä lattiaa. Sukat, joita pakkaa yhden parin per päivä, loppuvat tiistaina.',
          'Kolme paria merinoa: paksut vaellukselle, kuivana pysyvät tencel-merinot päivään, ohuemmat iltaan ja kotimatkalle. Halvin koreista, ja se, jota jää kaipaamaan ensimmäisenä.',
        ],
        name: 'Villasukat viikoksi',
        shipping: SUKKA_FI,
      },
    },
  },
  en: {
    eyebrow: 'Ready basket',
    title: 'The cold does not ask what you packed',
    lead: 'There is a moment in a Lapland winter that everyone remembers: the door opens, the air is so dry and clear that you feel it in your nose, and the snow squeaks under your boots. After that, everything depends on what is against your skin. Cotton gets wet and turns cold, merino stays warm even when damp, and gloves decide how long you can stand looking at the sky. We put four baskets straight into the shop\'s cart. Pick a size and open the basket, only the address and payment are left.',
    contents: 'In the basket',
    size: 'Size',
    cta: (s) => `Open the basket at ${s}`,
    total: 'Total',
    fine: 'The basket opens at the partner\'s checkout in a new tab. Price and availability are the shop\'s own, and we may earn a commission on the purchase. Prices read from the shops\' product data on 5 September 2026.',
    baskets: {
      merino_men: {
        scene: 'The morning at the husky farm',
        story: [
          'You arrive while it is still dark. The dogs hear the car before you see them, and a hundred voices rise at once: they want to go. The sled sits low, the speed comes on the first hill, and twenty-odd degrees of frost pours over your face like water.',
          'An hour later you know what you put on underneath. Cotton got wet on the first climb and is now a cold film against the skin. Merino holds the moisture in the fibre and keeps warming even damp, and the socks do the same. This basket is the layer no photo shows, and the reason the people in the photos are smiling.',
        ],
        name: 'Merino base layers, men',
        shipping: HALTI_EN,
      },
      merino_women: {
        scene: 'Waiting for the aurora',
        story: [
          'The northern lights do not keep appointments. They come after eleven, or at half past midnight, or not at all, and in the meantime you stand in the snow facing north. First people talk, then they go quiet, and in the end you hear only your own breathing and wonder how silent a place can be.',
          'That is when what is against the skin decides. A body standing still makes no heat, and merino is the fibre that warms anyway. Two pairs of socks mean one pair is dry in the morning. The same set in women\'s sizing, beanie to match, so the wait lasts as long as the sky asks.',
        ],
        name: 'Merino base layers, women',
        shipping: HALTI_EN,
      },
      hands_feet: {
        scene: 'The photo you take bare-fingered',
        story: [
          'Just as the green arc starts to move, the glove comes off, because the phone will not answer through it. Three photos, and the fingers are wood. That is the quiet truth of the trip: the cold does not come through the jacket but through fingers and toes, because the body pulls blood to the core and leaves the edges to fend for themselves.',
          'Fleece gloves whose thumb and index finger work the screen, ski socks and a merino beanie. Three small things that decide whether the evening lasts the whole arc or only its beginning.',
        ],
        name: 'Hands and feet in the cold',
        shipping: HALTI_EN,
      },
      socks_week: {
        scene: 'The cabin has underfloor heating, the fell does not',
        story: [
          'A week in Lapland is really a week for your feet. In the morning they walk up the fell, at noon they queue in a café in wet boots, in the evening they look for a warm floor after the sauna. Socks packed at one pair a day run out on Tuesday.',
          'Three pairs of merino: thick ones for the hike, tencel merino that stays dry for the day, thinner ones for the evening and the journey home. The cheapest of the baskets, and the one you miss first.',
        ],
        name: 'Wool socks for a week',
        shipping: SUKKA_EN,
      },
    },
  },
  de: {
    eyebrow: 'Fertiger Warenkorb',
    title: 'Die Kälte fragt nicht, was Sie eingepackt haben',
    lead: 'Es gibt einen Moment im lappländischen Winter, den jeder behält: Die Tür geht auf, die Luft ist so trocken und klar, dass man sie in der Nase spürt, und der Schnee knirscht unter den Stiefeln. Danach hängt alles davon ab, was auf der Haut liegt. Baumwolle wird nass und kalt, Merino bleibt auch feucht warm, und die Handschuhe entscheiden, wie lange man in den Himmel schauen kann. Wir haben vier Warenkörbe direkt in den Warenkorb des Shops gelegt. Größe wählen und Warenkorb öffnen, es bleiben Adresse und Zahlung.',
    contents: 'Im Warenkorb',
    size: 'Größe',
    cta: (s) => `Warenkorb bei ${s} öffnen`,
    total: 'Gesamt',
    fine: 'Der Warenkorb öffnet sich an der Kasse des Partners in einem neuen Tab. Preis und Verfügbarkeit sind die des Shops, und wir erhalten möglicherweise eine Provision. Preise am 5. September 2026 aus den Produktdaten der Shops gelesen.',
    baskets: {
      merino_men: { scene: 'Der Morgen auf der Huskyfarm', story: ['Man kommt an, während es noch dunkel ist. Die Hunde hören das Auto, bevor man sie sieht, und hundert Stimmen steigen auf einmal auf: Sie wollen los. Der Schlitten liegt tief, die Geschwindigkeit kommt am ersten Hügel, und gut zwanzig Grad Frost laufen einem übers Gesicht wie Wasser.', 'Eine Stunde später weiß man, was man darunter angezogen hat. Baumwolle wurde beim ersten Anstieg nass und ist jetzt ein kalter Film auf der Haut. Merino hält die Feuchtigkeit in der Faser und wärmt auch feucht weiter, die Socken genauso. Dieser Warenkorb ist die Schicht, die kein Foto zeigt, und der Grund, warum die Leute auf den Fotos lächeln.'], name: 'Merino-Unterwäsche, Herren', shipping: 'Lieferung nur innerhalb Finnlands (Posti, Matkahuolto, PostNord).' },
      merino_women: { scene: 'Das Warten auf das Polarlicht', story: ['Das Nordlicht hält keine Termine ein. Es kommt nach elf oder um halb eins oder gar nicht, und solange steht man im Schnee und schaut nach Norden. Erst redet man, dann wird es still, und am Ende hört man nur den eigenen Atem und wundert sich, wie leise ein Ort sein kann.', 'Dann entscheidet, was auf der Haut liegt. Ein stillstehender Körper macht keine Wärme, und Merino ist die Faser, die trotzdem wärmt. Zwei Paar Socken heißen, dass eines am Morgen trocken ist. Dasselbe Set in Damengrößen, Mütze passend dazu, damit das Warten so lange hält, wie der Himmel es verlangt.'], name: 'Merino-Unterwäsche, Damen', shipping: 'Lieferung nur innerhalb Finnlands (Posti, Matkahuolto, PostNord).' },
      hands_feet: { scene: 'Das Foto, das man mit bloßen Fingern macht', story: ['Gerade wenn der grüne Bogen sich zu bewegen beginnt, geht der Handschuh ab, weil das Telefon durch ihn nicht reagiert. Drei Fotos, und die Finger sind Holz. Das ist die stille Wahrheit der Reise: Die Kälte kommt nicht durch die Jacke, sondern durch Finger und Zehen, weil der Körper das Blut zur Mitte zieht und die Ränder sich selbst überlässt.', 'Fleecehandschuhe, deren Daumen und Zeigefinger den Bildschirm bedienen, Skisocken und eine Merinomütze. Drei kleine Dinge, die entscheiden, ob der Abend den ganzen Bogen dauert oder nur seinen Anfang.'], name: 'Hände und Füße in der Kälte', shipping: 'Lieferung nur innerhalb Finnlands (Posti, Matkahuolto, PostNord).' },
      socks_week: { scene: 'Die Hütte hat Fußbodenheizung, das Fjell nicht', story: ['Eine Woche in Lappland ist in Wahrheit eine Woche für die Füße. Morgens gehen sie aufs Fjell, mittags stehen sie in nassen Stiefeln in der Schlange im Café, abends suchen sie nach der Sauna einen warmen Boden. Socken, die man mit einem Paar pro Tag packt, sind am Dienstag aus.', 'Drei Paar Merino: dicke für die Wanderung, Tencel-Merino, das tagsüber trocken bleibt, dünnere für den Abend und die Heimreise. Der günstigste der Warenkörbe, und der, den man zuerst vermisst.'], name: 'Wollsocken für eine Woche', shipping: 'Versand innerhalb Finnlands ab 50 € kostenlos, andere Länder an der Kasse.' },
    },
  },
  sv: {
    eyebrow: 'Färdig varukorg',
    title: 'Kylan frågar inte vad du packade',
    lead: 'Det finns ett ögonblick i den lappländska vintern som alla minns: dörren öppnas, luften är så torr och klar att man känner den i näsan, och snön knarrar under kängorna. Efter det hänger allt på vad som ligger mot huden. Bomull blir våt och kall, merino håller värmen även fuktig, och handskarna avgör hur länge man orkar titta på himlen. Vi la fyra korgar direkt i butikens varukorg. Välj storlek och öppna korgen, kvar är adress och betalning.',
    contents: 'I korgen',
    size: 'Storlek',
    cta: (s) => `Öppna korgen hos ${s}`,
    total: 'Totalt',
    fine: 'Korgen öppnas i partnerns kassa i en ny flik. Pris och tillgänglighet är butikens egna, och vi kan få provision på köpet. Priserna lästa ur butikernas produktdata den 5 september 2026.',
    baskets: {
      merino_men: { scene: 'Morgonen på huskygården', story: ['Man kommer fram medan det ännu är mörkt. Hundarna hör bilen innan man ser dem, och hundra röster stiger på en gång: de vill iväg. Släden ligger lågt, farten kommer i första backen, och drygt tjugo grader kallt rinner över ansiktet som vatten.', 'En timme senare vet man vad man tog på sig under. Bomullen blev våt redan i första stigningen och är nu en kall hinna mot huden. Merino binder fukten i fibern och fortsätter värma även våt, strumporna av samma skäl. Den här korgen är lagret som inte syns på bilderna, och anledningen till att människorna på bilderna ler.'], name: 'Merinounderställ, herr', shipping: 'Levererar endast inom Finland (Posti, Matkahuolto, PostNord).' },
      merino_women: { scene: 'Väntan på norrskenet', story: ['Norrskenet håller inga tider. Det kommer efter elva, eller halv ett, eller inte alls, och under tiden står man i snön och tittar norrut. Först pratar man, sedan tystnar man, och till slut hör man bara sin egen andning och undrar hur tyst en plats kan vara.', 'Då avgör det som ligger mot huden. En kropp som står stilla skapar ingen värme, och merino är fibern som värmer ändå. Två par strumpor betyder att ett par är torrt på morgonen. Samma set i damstorlekar, mössa i ton, så att väntan varar så länge himlen kräver.'], name: 'Merinounderställ, dam', shipping: 'Levererar endast inom Finland (Posti, Matkahuolto, PostNord).' },
      hands_feet: { scene: 'Bilden man tar med bara fingrar', story: ['Just när den gröna bågen börjar röra sig åker handsken av, för telefonen lyder inte genom den. Tre bilder, och fingrarna är trä. Det är resans tysta sanning: kylan kommer inte genom jackan utan genom fingrar och tår, eftersom kroppen drar blodet till mitten och lämnar kanterna åt sitt öde.', 'Fleecehandskar vars tumme och pekfinger fungerar på skärmen, skidstrumpor och en merinomössa. Tre små saker som avgör om kvällen räcker hela bågen eller bara dess början.'], name: 'Händer och fötter i kylan', shipping: 'Levererar endast inom Finland (Posti, Matkahuolto, PostNord).' },
      socks_week: { scene: 'Stugan har golvvärme, fjället har det inte', story: ['En vecka i Lappland är egentligen en vecka för fötterna. På morgonen går de upp på fjället, mitt på dagen står de i kafékön i blöta kängor, på kvällen letar de efter ett varmt golv efter bastun. Strumpor packade ett par per dag tar slut på tisdagen.', 'Tre par merino: tjocka till vandringen, tencel-merino som håller sig torra till dagen, tunnare till kvällen och hemresan. Den billigaste av korgarna, och den man saknar först.'], name: 'Ullstrumpor för en vecka', shipping: 'Fri frakt inom Finland från 50 €, andra länder i kassan.' },
    },
  },
  fr: {
    eyebrow: 'Panier prêt',
    title: 'Le froid ne demande pas ce que vous avez emporté',
    lead: 'Il y a un moment de l\'hiver lapon dont tout le monde se souvient : la porte s\'ouvre, l\'air est si sec et si clair qu\'on le sent dans le nez, et la neige crisse sous les bottes. Après cela, tout dépend de ce qui touche la peau. Le coton se mouille et refroidit, le mérinos tient chaud même humide, et les gants décident du temps qu\'on peut passer à regarder le ciel. Nous avons mis quatre paniers directement dans le panier de la boutique. Choisissez une taille et ouvrez le panier, il ne reste que l\'adresse et le paiement.',
    contents: 'Dans le panier',
    size: 'Taille',
    cta: (s) => `Ouvrir le panier chez ${s}`,
    total: 'Total',
    fine: 'Le panier s\'ouvre à la caisse du partenaire dans un nouvel onglet. Le prix et la disponibilité sont ceux de la boutique, et nous pouvons toucher une commission sur l\'achat. Prix relevés dans les données produit des boutiques le 5 septembre 2026.',
    baskets: {
      merino_men: { scene: 'Le matin au chenil de huskies', story: ['On arrive quand il fait encore nuit. Les chiens entendent la voiture avant qu\'on les voie, et cent voix montent d\'un coup : ils veulent partir. Le traîneau est bas, la vitesse arrive à la première côte, et vingt et quelques degrés de gel coulent sur le visage comme de l\'eau.', 'Une heure plus tard, on sait ce qu\'on a mis dessous. Le coton s\'est mouillé dès la première montée et forme maintenant un film froid sur la peau. Le mérinos retient l\'humidité dans la fibre et continue de chauffer même humide, les chaussettes aussi. Ce panier, c\'est la couche qu\'aucune photo ne montre, et la raison pour laquelle les gens sourient sur les photos.'], name: 'Sous-vêtements mérinos, homme', shipping: 'Livraison en Finlande uniquement (Posti, Matkahuolto, PostNord).' },
      merino_women: { scene: 'L\'attente des aurores', story: ['Les aurores ne prennent pas rendez-vous. Elles arrivent après onze heures, ou à minuit et demi, ou pas du tout, et en attendant on reste debout dans la neige, tourné vers le nord. D\'abord on parle, puis on se tait, et à la fin on n\'entend plus que sa propre respiration en se demandant à quel point un endroit peut être silencieux.', 'C\'est là que ce qui touche la peau décide. Un corps immobile ne produit pas de chaleur, et le mérinos est la fibre qui chauffe quand même. Deux paires de chaussettes signifient qu\'une paire est sèche le matin. Le même ensemble en tailles femme, bonnet assorti, pour que l\'attente dure aussi longtemps que le ciel l\'exige.'], name: 'Sous-vêtements mérinos, femme', shipping: 'Livraison en Finlande uniquement (Posti, Matkahuolto, PostNord).' },
      hands_feet: { scene: 'La photo qu\'on prend à doigts nus', story: ['Juste quand l\'arc vert commence à bouger, le gant part, parce que le téléphone n\'obéit pas à travers. Trois photos, et les doigts sont du bois. C\'est la vérité discrète du voyage : le froid ne passe pas par la veste mais par les doigts et les orteils, parce que le corps ramène le sang vers le centre et laisse les extrémités se débrouiller.', 'Des gants en polaire dont le pouce et l\'index commandent l\'écran, des chaussettes de ski et un bonnet en mérinos. Trois petites choses qui décident si la soirée dure tout l\'arc ou seulement son début.'], name: 'Mains et pieds dans le froid', shipping: 'Livraison en Finlande uniquement (Posti, Matkahuolto, PostNord).' },
      socks_week: { scene: 'Le chalet a le chauffage au sol, le fjell non', story: ['Une semaine en Laponie, c\'est en vérité une semaine pour les pieds. Le matin ils montent sur le fjell, à midi ils font la queue au café dans des bottes mouillées, le soir ils cherchent un sol chaud après le sauna. Des chaussettes emportées à raison d\'une paire par jour s\'épuisent le mardi.', 'Trois paires de mérinos : des épaisses pour la randonnée, du tencel-mérinos qui reste sec pour la journée, des plus fines pour le soir et le retour. Le moins cher des paniers, et celui qui manque en premier.'], name: 'Chaussettes en laine pour une semaine', shipping: 'Livraison gratuite en Finlande dès 50 €, autres pays au prix affiché à la caisse.' },
    },
  },
  es: {
    eyebrow: 'Cesta lista',
    title: 'El frío no pregunta qué metiste en la maleta',
    lead: 'Hay un momento del invierno lapón que todo el mundo recuerda: se abre la puerta, el aire es tan seco y tan claro que se nota en la nariz, y la nieve cruje bajo las botas. A partir de ahí, todo depende de lo que va pegado a la piel. El algodón se moja y se enfría, la merina se mantiene caliente incluso húmeda, y los guantes deciden cuánto tiempo aguantas mirando al cielo. Pusimos cuatro cestas directamente en el carrito de la tienda. Elija una talla y abra la cesta, solo quedan la dirección y el pago.',
    contents: 'En la cesta',
    size: 'Talla',
    cta: (s) => `Abrir la cesta en ${s}`,
    total: 'Total',
    fine: 'La cesta se abre en la caja del socio en una pestaña nueva. El precio y la disponibilidad son los de la tienda, y podemos recibir una comisión por la compra. Precios leídos de los datos de producto de las tiendas el 5 de septiembre de 2026.',
    baskets: {
      merino_men: { scene: 'La mañana en la granja de huskies', story: ['Se llega cuando todavía está oscuro. Los perros oyen el coche antes de que los veas, y cien voces se levantan a la vez: quieren salir. El trineo va bajo, la velocidad llega en la primera cuesta, y veintitantos grados bajo cero corren por la cara como agua.', 'Una hora después sabes qué te pusiste debajo. El algodón se mojó en la primera subida y ahora es una película fría contra la piel. La merina retiene la humedad en la fibra y sigue dando calor incluso húmeda, y los calcetines hacen lo mismo. Esta cesta es la capa que ninguna foto muestra, y la razón de que la gente de las fotos sonría.'], name: 'Ropa interior de merino, hombre', shipping: 'Envío solo dentro de Finlandia (Posti, Matkahuolto, PostNord).' },
      merino_women: { scene: 'La espera de la aurora', story: ['La aurora no tiene hora. Llega después de las once, o a las doce y media, o no llega, y mientras tanto se está de pie en la nieve mirando al norte. Primero se habla, luego se calla, y al final solo se oye la propia respiración y uno se pregunta cuánto silencio puede haber en un sitio.', 'Entonces decide lo que va pegado a la piel. Un cuerpo quieto no genera calor, y la merina es la fibra que calienta de todos modos. Dos pares de calcetines significan que uno está seco por la mañana. El mismo conjunto en tallas de mujer, gorro a juego, para que la espera dure lo que el cielo pida.'], name: 'Ropa interior de merino, mujer', shipping: 'Envío solo dentro de Finlandia (Posti, Matkahuolto, PostNord).' },
      hands_feet: { scene: 'La foto que se hace con los dedos desnudos', story: ['Justo cuando el arco verde empieza a moverse, el guante se quita, porque el móvil no obedece a través de él. Tres fotos, y los dedos son de madera. Esa es la verdad callada del viaje: el frío no entra por la chaqueta sino por los dedos de manos y pies, porque el cuerpo lleva la sangre al centro y deja los bordes a su suerte.', 'Guantes de forro polar cuyo pulgar e índice manejan la pantalla, calcetines de esquí y gorro de merino. Tres cosas pequeñas que deciden si la noche dura el arco entero o solo su principio.'], name: 'Manos y pies en el frío', shipping: 'Envío solo dentro de Finlandia (Posti, Matkahuolto, PostNord).' },
      socks_week: { scene: 'La cabaña tiene suelo radiante, el fjell no', story: ['Una semana en Laponia es en realidad una semana para los pies. Por la mañana suben al fjell, a mediodía hacen cola en una cafetería con las botas mojadas, por la noche buscan un suelo caliente después de la sauna. Los calcetines que se meten a un par por día se acaban el martes.', 'Tres pares de merino: gruesos para la caminata, tencel-merino que se mantiene seco para el día, más finos para la noche y el viaje de vuelta. La más barata de las cestas, y la primera que se echa de menos.'], name: 'Calcetines de lana para una semana', shipping: 'Envío gratis en Finlandia a partir de 50 €, otros países en la caja.' },
    },
  },
  it: {
    eyebrow: 'Carrello pronto',
    title: 'Il freddo non chiede cosa avete messo in valigia',
    lead: 'C\'è un momento dell\'inverno lappone che tutti ricordano: la porta si apre, l\'aria è così secca e limpida che la si sente nel naso, e la neve scricchiola sotto gli scarponi. Da lì in poi tutto dipende da ciò che sta sulla pelle. Il cotone si bagna e si raffredda, il merino resta caldo anche umido, e i guanti decidono per quanto si riesce a guardare il cielo. Abbiamo messo quattro carrelli direttamente nel carrello del negozio. Scegliete la taglia e aprite il carrello, restano solo indirizzo e pagamento.',
    contents: 'Nel carrello',
    size: 'Taglia',
    cta: (s) => `Apri il carrello da ${s}`,
    total: 'Totale',
    fine: 'Il carrello si apre alla cassa del partner in una nuova scheda. Prezzo e disponibilità sono quelli del negozio, e potremmo ricevere una commissione sull\'acquisto. Prezzi letti dai dati prodotto dei negozi il 5 settembre 2026.',
    baskets: {
      merino_men: { scene: 'La mattina all\'allevamento di husky', story: ['Si arriva che è ancora buio. I cani sentono l\'auto prima che li si veda, e cento voci si alzano insieme: vogliono partire. La slitta è bassa, la velocità arriva alla prima discesa, e venti gradi e passa sotto zero scorrono sul viso come acqua.', 'Un\'ora dopo sai cosa hai messo sotto. Il cotone si è bagnato alla prima salita e ora è una pellicola fredda sulla pelle. Il merino trattiene l\'umidità nella fibra e continua a scaldare anche umido, e le calze fanno lo stesso. Questo carrello è lo strato che nessuna foto mostra, e il motivo per cui nelle foto si sorride.'], name: 'Intimo in merino, uomo', shipping: 'Consegna solo in Finlandia (Posti, Matkahuolto, PostNord).' },
      merino_women: { scene: 'L\'attesa dell\'aurora', story: ['L\'aurora non rispetta gli appuntamenti. Arriva dopo le undici, o a mezzanotte e mezza, o non arriva, e nel frattempo si sta in piedi nella neve rivolti a nord. Prima si parla, poi si tace, e alla fine si sente solo il proprio respiro e ci si chiede quanto possa essere silenzioso un posto.', 'È allora che decide ciò che sta sulla pelle. Un corpo fermo non produce calore, e il merino è la fibra che scalda comunque. Due paia di calze vogliono dire che un paio è asciutto al mattino. Lo stesso set nelle taglie da donna, berretto in tinta, perché l\'attesa duri quanto il cielo chiede.'], name: 'Intimo in merino, donna', shipping: 'Consegna solo in Finlandia (Posti, Matkahuolto, PostNord).' },
      hands_feet: { scene: 'La foto che si scatta a dita nude', story: ['Proprio quando l\'arco verde comincia a muoversi, il guanto viene via, perché il telefono non risponde attraverso di esso. Tre foto, e le dita sono legno. È la verità silenziosa del viaggio: il freddo non entra dalla giacca ma da dita e piedi, perché il corpo richiama il sangue al centro e lascia i bordi a se stessi.', 'Guanti in pile con pollice e indice che comandano lo schermo, calze da sci e un berretto in merino. Tre piccole cose che decidono se la serata dura l\'intero arco o solo il suo inizio.'], name: 'Mani e piedi al freddo', shipping: 'Consegna solo in Finlandia (Posti, Matkahuolto, PostNord).' },
      socks_week: { scene: 'La baita ha il riscaldamento a pavimento, il fjell no', story: ['Una settimana in Lapponia è in realtà una settimana per i piedi. Al mattino salgono sul fjell, a mezzogiorno fanno la fila al bar con gli scarponi bagnati, la sera cercano un pavimento caldo dopo la sauna. Le calze messe in valigia a un paio al giorno finiscono martedì.', 'Tre paia di merino: spesse per l\'escursione, tencel-merino che resta asciutto per il giorno, più sottili per la sera e il viaggio di ritorno. Il più economico dei carrelli, e quello di cui si sente la mancanza per primo.'], name: 'Calze di lana per una settimana', shipping: 'Spedizione gratuita in Finlandia da 50 €, altri paesi alla cassa.' },
    },
  },
  nl: {
    eyebrow: 'Kant-en-klaar mandje',
    title: 'De kou vraagt niet wat je hebt ingepakt',
    lead: 'Er is een moment in een Laplandse winter dat iedereen onthoudt: de deur gaat open, de lucht is zo droog en helder dat je hem in je neus voelt, en de sneeuw knerpt onder je laarzen. Daarna hangt alles af van wat er tegen je huid ligt. Katoen wordt nat en koud, merino blijft warm ook als het vochtig is, en handschoenen bepalen hoe lang je naar de hemel kunt blijven kijken. We hebben vier mandjes rechtstreeks in de winkelwagen van de shop gezet. Kies een maat en open het mandje, alleen adres en betaling blijven over.',
    contents: 'In het mandje',
    size: 'Maat',
    cta: (s) => `Mandje openen bij ${s}`,
    total: 'Totaal',
    fine: 'Het mandje opent bij de kassa van de partner in een nieuw tabblad. Prijs en beschikbaarheid zijn die van de shop, en wij kunnen commissie ontvangen over de aankoop. Prijzen gelezen uit de productgegevens van de shops op 5 september 2026.',
    baskets: {
      merino_men: { scene: 'De ochtend op de huskyfarm', story: ['Je komt aan terwijl het nog donker is. De honden horen de auto voor je ze ziet, en honderd stemmen gaan tegelijk omhoog: ze willen vertrekken. De slee ligt laag, de snelheid komt op de eerste heuvel, en ruim twintig graden vorst stroomt over je gezicht als water.', 'Een uur later weet je wat je eronder hebt aangetrokken. Katoen werd nat op de eerste klim en is nu een koude film op de huid. Merino houdt het vocht in de vezel en blijft verwarmen, ook vochtig, en de sokken doen hetzelfde. Dit mandje is de laag die geen foto laat zien, en de reden dat de mensen op de foto\'s lachen.'], name: 'Merino-onderkleding, heren', shipping: 'Levert alleen binnen Finland (Posti, Matkahuolto, PostNord).' },
      merino_women: { scene: 'Het wachten op het noorderlicht', story: ['Het noorderlicht houdt zich niet aan afspraken. Het komt na elven, of om half een, of helemaal niet, en intussen sta je in de sneeuw naar het noorden te kijken. Eerst praat je, dan word je stil, en uiteindelijk hoor je alleen je eigen ademhaling en vraag je je af hoe stil een plek kan zijn.', 'Dan beslist wat er tegen de huid ligt. Een lichaam dat stilstaat maakt geen warmte, en merino is de vezel die toch verwarmt. Twee paar sokken betekent dat er \'s ochtends één paar droog is. Dezelfde set in damesmaten, muts erbij, zodat het wachten zo lang duurt als de hemel vraagt.'], name: 'Merino-onderkleding, dames', shipping: 'Levert alleen binnen Finland (Posti, Matkahuolto, PostNord).' },
      hands_feet: { scene: 'De foto die je met blote vingers maakt', story: ['Net als de groene boog begint te bewegen, gaat de handschoen uit, omdat de telefoon er niet doorheen luistert. Drie foto\'s, en de vingers zijn hout. Dat is de stille waarheid van de reis: de kou komt niet door de jas maar door vingers en tenen, omdat het lichaam het bloed naar de kern trekt en de randen aan hun lot overlaat.', 'Fleecehandschoenen waarvan duim en wijsvinger het scherm bedienen, skisokken en een merinomuts. Drie kleine dingen die bepalen of de avond de hele boog duurt of alleen het begin.'], name: 'Handen en voeten in de kou', shipping: 'Levert alleen binnen Finland (Posti, Matkahuolto, PostNord).' },
      socks_week: { scene: 'De hut heeft vloerverwarming, het fjell niet', story: ['Een week Lapland is eigenlijk een week voor je voeten. \'s Ochtends lopen ze het fjell op, \'s middags staan ze in natte laarzen in de rij bij een café, \'s avonds zoeken ze na de sauna een warme vloer. Sokken, ingepakt met één paar per dag, zijn dinsdag op.', 'Drie paar merino: dikke voor de wandeling, tencel-merino dat overdag droog blijft, dunnere voor de avond en de terugreis. Het goedkoopste mandje, en het eerste dat je mist.'], name: 'Wollen sokken voor een week', shipping: 'Gratis verzending binnen Finland vanaf 50 €, andere landen bij de kassa.' },
    },
  },
  'pt-BR': {
    eyebrow: 'Carrinho pronto',
    title: 'O frio não pergunta o que você trouxe na mala',
    lead: 'Há um momento do inverno da Lapônia de que todo mundo se lembra: a porta se abre, o ar é tão seco e tão limpo que se sente no nariz, e a neve range sob as botas. Depois disso, tudo depende do que está junto à pele. O algodão molha e esfria, a merino continua quente mesmo úmida, e as luvas decidem por quanto tempo você aguenta olhar o céu. Colocamos quatro carrinhos direto no carrinho da loja. Escolha o tamanho e abra o carrinho, só faltam endereço e pagamento.',
    contents: 'No carrinho',
    size: 'Tamanho',
    cta: (s) => `Abrir o carrinho na ${s}`,
    total: 'Total',
    fine: 'O carrinho abre no checkout do parceiro em uma nova aba. Preço e disponibilidade são da loja, e podemos receber comissão pela compra. Preços lidos dos dados de produto das lojas em 5 de setembro de 2026.',
    baskets: {
      merino_men: { scene: 'A manhã na fazenda de huskies', story: ['Chega-se ainda no escuro. Os cães ouvem o carro antes de você vê-los, e cem vozes sobem de uma vez: eles querem partir. O trenó é baixo, a velocidade vem na primeira descida, e uns vinte e tantos graus negativos escorrem pelo rosto como água.', 'Uma hora depois você sabe o que vestiu por baixo. O algodão molhou na primeira subida e agora é uma película fria contra a pele. A merino prende a umidade na fibra e continua aquecendo mesmo úmida, e as meias fazem o mesmo. Este carrinho é a camada que nenhuma foto mostra, e o motivo de as pessoas nas fotos estarem sorrindo.'], name: 'Segunda pele de merino, masculina', shipping: 'Entrega apenas na Finlândia (Posti, Matkahuolto, PostNord).' },
      merino_women: { scene: 'A espera pela aurora', story: ['A aurora não marca hora. Ela vem depois das onze, ou à meia-noite e meia, ou não vem, e enquanto isso fica-se de pé na neve olhando para o norte. Primeiro se conversa, depois se cala, e no fim só se ouve a própria respiração, perguntando-se como um lugar pode ser tão silencioso.', 'É aí que decide o que está junto à pele. Um corpo parado não produz calor, e a merino é a fibra que aquece mesmo assim. Dois pares de meias significam que um está seco de manhã. O mesmo conjunto em tamanhos femininos, gorro combinando, para que a espera dure o que o céu pedir.'], name: 'Segunda pele de merino, feminina', shipping: 'Entrega apenas na Finlândia (Posti, Matkahuolto, PostNord).' },
      hands_feet: { scene: 'A foto que se tira com os dedos nus', story: ['Bem quando o arco verde começa a se mover, a luva sai, porque o celular não obedece através dela. Três fotos, e os dedos viram madeira. Essa é a verdade silenciosa da viagem: o frio não entra pela jaqueta, mas pelos dedos das mãos e dos pés, porque o corpo puxa o sangue para o centro e deixa as bordas por conta própria.', 'Luvas de fleece cujo polegar e indicador funcionam na tela, meias de esqui e um gorro de merino. Três coisas pequenas que decidem se a noite dura o arco inteiro ou só o começo dele.'], name: 'Mãos e pés no frio', shipping: 'Entrega apenas na Finlândia (Posti, Matkahuolto, PostNord).' },
      socks_week: { scene: 'A cabana tem piso aquecido, a montanha não', story: ['Uma semana na Lapônia é, na verdade, uma semana para os pés. De manhã eles sobem a montanha, ao meio-dia ficam na fila do café com as botas molhadas, à noite procuram um piso quente depois da sauna. Meias colocadas na mala à razão de um par por dia acabam na terça.', 'Três pares de merino: grossas para a caminhada, tencel-merino que fica seca para o dia, mais finas para a noite e a viagem de volta. O mais barato dos carrinhos, e o primeiro que faz falta.'], name: 'Meias de lã para uma semana', shipping: 'Frete grátis na Finlândia a partir de 50 €, outros países no checkout.' },
    },
  },
  ja: {
    eyebrow: '準備済みカート',
    title: '寒さは、何を持ってきたか尋ねない',
    lead: 'ラップランドの冬には、誰もが覚えている瞬間があります。ドアが開き、空気は乾いて澄みきって鼻の奥に届き、雪がブーツの下できしむ。そのあとは、肌に触れているものがすべてを決めます。綿は濡れて冷たくなり、メリノは湿っても暖かく、手袋は空を見上げていられる時間を決めます。四つのカートをショップのカートに直接入れておきました。サイズを選んでカートを開けば、残るのは住所と支払いだけです。',
    contents: 'カートの中身',
    size: 'サイズ',
    cta: (s) => `${s}でカートを開く`,
    total: '合計',
    fine: 'カートは新しいタブでパートナーのレジに開きます。価格と在庫はショップのものであり、購入により当サイトが手数料を受け取ることがあります。価格は2026年9月5日にショップの商品データから読み取りました。',
    baskets: {
      merino_men: { scene: 'ハスキー農場の朝', story: ['まだ暗いうちに着きます。犬たちは姿が見えるより先に車の音を聞きつけ、百の声が一斉に上がる。行きたくてたまらないのです。ソリは低く、最初の坂でスピードが乗り、氷点下20度あまりの寒気が水のように顔を流れていきます。', '一時間後には、下に何を着たかが分かります。綿は最初の登りで濡れ、いまは肌の上の冷たい膜になっている。メリノは水分を繊維に閉じ込め、湿っても暖め続け、ソックスも同じです。このカートはどの写真にも写らない層であり、写真の中の人が笑っている理由です。'], name: 'メリノベースレイヤー メンズ', shipping: '配送はフィンランド国内のみ（Posti、Matkahuolto、PostNord）。' },
      merino_women: { scene: 'オーロラを待つ', story: ['オーロラは約束の時間を守りません。11時過ぎに来るか、0時半に来るか、来ないか。そのあいだ雪の上に立って北を見ています。はじめは話し、やがて黙り、最後には自分の呼吸だけが聞こえて、場所というものがこれほど静かになれるのかと思う。', 'そのとき決め手になるのは肌に触れているもの。じっと立っている体は熱を生まず、それでも暖めてくれる繊維がメリノです。ソックス2足なら、朝には片方が乾いている。同じセットをレディースサイズで、ビーニーは色を合わせて。空が求めるだけ待てるように。'], name: 'メリノベースレイヤー レディース', shipping: '配送はフィンランド国内のみ（Posti、Matkahuolto、PostNord）。' },
      hands_feet: { scene: '素手で撮ることになる一枚', story: ['緑の弧が動き出したまさにそのとき、手袋を外すことになります。スマホが手袋越しには反応しないから。写真3枚で、指は木のよう。それがツアーの静かな真実です。寒さは上着からではなく指先と足先から入る。体が血液を中心に集め、端を置き去りにするからです。', '親指と人差し指が画面に効くフリースグローブ、スキーソックス、メリノビーニー。夜が弧の全部まで続くか、はじまりだけで終わるかを決める、小さな三つの品です。'], name: '寒さの中の手と足', shipping: '配送はフィンランド国内のみ（Posti、Matkahuolto、PostNord）。' },
      socks_week: { scene: 'コテージには床暖房がある、山にはない', story: ['ラップランドの一週間は、実のところ足の一週間です。朝は山へ歩き、昼は濡れたブーツでカフェの列に並び、夜はサウナのあと暖かい床を探す。一日一足で詰めたソックスは火曜日に尽きます。', 'メリノ3足。ハイキングには厚手、日中は乾いたまま保てるテンセルメリノ、夜と帰り道には薄手。いちばん安いカートで、いちばん先に恋しくなるものです。'], name: '一週間分のウールソックス', shipping: 'フィンランド国内は50 €以上で送料無料、その他の国はレジで表示。' },
    },
  },
  'zh-CN': {
    eyebrow: '现成购物车',
    title: '寒冷不会问你带了什么',
    lead: '拉普兰的冬天有一个人人都记得的瞬间：门一开，空气干冷清澈得直冲鼻腔，雪在靴子下吱吱作响。从那一刻起，一切取决于贴着皮肤的是什么。棉会湿透变冷，美利奴受潮也保暖，而手套决定你能仰望天空多久。我们把四个购物车直接放进了店铺的购物车。选好尺码打开购物车，只剩地址和付款。',
    contents: '购物车内容',
    size: '尺码',
    cta: (s) => `在 ${s} 打开购物车`,
    total: '合计',
    fine: '购物车会在新标签页中打开合作店铺的结账页。价格和库存以店铺为准，我们可能从购买中获得佣金。价格于2026年9月5日读取自店铺的商品数据。',
    baskets: {
      merino_men: { scene: '哈士奇农场的早晨', story: ['到达时天还没亮。狗先于你的眼睛听见了车，一百个声音同时扬起：它们想出发。雪橇贴着地，速度在第一个坡上来，零下二十多度的寒气像水一样淌过脸颊。', '一小时后，你就知道自己里面穿了什么。棉在第一个坡就湿了，此刻成了皮肤上一层冷膜。美利奴把水分锁在纤维里，受潮也继续保暖，袜子同理。这个购物车是照片里看不见的那一层，也是照片里的人在笑的原因。'], name: '美利奴内层套装，男款', shipping: '仅限芬兰境内配送（Posti、Matkahuolto、PostNord）。' },
      merino_women: { scene: '等极光', story: ['极光不守约。它十一点以后来，或者十二点半来，或者根本不来，而这期间你站在雪地里朝北望。先是说话，然后安静下来，最后只听见自己的呼吸，惊讶一个地方竟能这样静。', '这时贴着皮肤的东西决定一切。静止的身体不产热，而美利奴是即便如此仍能保暖的纤维。两双袜子意味着早上还有一双是干的。同一套装的女款尺码，毛线帽配色，好让等待撑到天空所要求的那一刻。'], name: '美利奴内层套装，女款', shipping: '仅限芬兰境内配送（Posti、Matkahuolto、PostNord）。' },
      hands_feet: { scene: '光着手指拍的那张照片', story: ['绿色的光弧刚开始动，手套就得摘下来，因为手机隔着它不听使唤。三张照片，手指就成了木头。这是这趟旅程沉默的真相：寒冷不是从外套进来，而是从手指和脚趾，因为身体把血液收回核心，任由末端自生自灭。', '拇指和食指能操作屏幕的抓绒手套、滑雪袜和美利奴毛线帽。三件小东西，决定这一晚是看完整道光弧，还是只看到开头。'], name: '寒冷中的手和脚', shipping: '仅限芬兰境内配送（Posti、Matkahuolto、PostNord）。' },
      socks_week: { scene: '木屋有地暖，山上没有', story: ['在拉普兰的一周，其实是双脚的一周。早上它们走上山，中午穿着湿靴子在咖啡馆排队，晚上桑拿之后寻找一块温暖的地板。按一天一双打包的袜子，周二就用完了。', '三双美利奴：徒步穿厚的，白天穿保持干爽的天丝美利奴，晚上和回程穿薄的。最便宜的购物车，也是最先想念的那个。'], name: '一周的羊毛袜', shipping: '芬兰境内满50 €免运费，其他国家运费在结账时显示。' },
    },
  },
  ko: {
    eyebrow: '준비된 장바구니',
    title: '추위는 무엇을 챙겼는지 묻지 않는다',
    lead: '라플란드의 겨울에는 누구나 기억하는 순간이 있습니다. 문이 열리고, 공기는 코끝에 느껴질 만큼 건조하고 맑으며, 눈이 부츠 밑에서 뽀득거립니다. 그다음부터는 피부에 닿은 것이 모든 것을 결정합니다. 면은 젖어서 차가워지고, 메리노는 젖어도 따뜻하며, 장갑은 하늘을 얼마나 오래 올려다볼 수 있는지를 정합니다. 네 개의 장바구니를 상점 장바구니에 바로 넣어 두었습니다. 사이즈를 고르고 장바구니를 열면 주소와 결제만 남습니다.',
    contents: '장바구니 구성',
    size: '사이즈',
    cta: (s) => `${s}에서 장바구니 열기`,
    total: '합계',
    fine: '장바구니는 새 탭에서 파트너의 결제 페이지로 열립니다. 가격과 재고는 상점 기준이며, 구매 시 저희가 수수료를 받을 수 있습니다. 가격은 2026년 9월 5일 상점의 상품 데이터에서 읽었습니다.',
    baskets: {
      merino_men: { scene: '허스키 농장의 아침', story: ['아직 어두울 때 도착합니다. 개들은 모습이 보이기 전에 차 소리를 듣고, 백 개의 목소리가 한꺼번에 일어납니다. 떠나고 싶은 것입니다. 썰매는 낮고, 첫 언덕에서 속도가 붙으며, 영하 20도가 넘는 냉기가 물처럼 얼굴 위를 흐릅니다.', '한 시간이 지나면 안에 무엇을 입었는지 알게 됩니다. 면은 첫 오르막에서 이미 젖어 지금은 피부 위의 차가운 막이 되어 있습니다. 메리노는 수분을 섬유 안에 붙잡아 젖어도 계속 따뜻하고, 양말도 마찬가지입니다. 이 장바구니는 어떤 사진에도 보이지 않는 층이자, 사진 속 사람들이 웃고 있는 이유입니다.'], name: '메리노 베이스레이어, 남성', shipping: '핀란드 국내 배송만 가능 (Posti, Matkahuolto, PostNord).' },
      merino_women: { scene: '오로라를 기다리며', story: ['오로라는 약속을 지키지 않습니다. 열한 시 이후에 오거나, 열두 시 반에 오거나, 아예 오지 않고, 그동안 눈 위에 서서 북쪽을 바라봅니다. 처음에는 이야기를 나누고, 그다음에는 조용해지고, 마지막에는 자신의 숨소리만 들리며 한 장소가 이토록 고요할 수 있는지 놀라게 됩니다.', '그때 피부에 닿은 것이 결정합니다. 가만히 서 있는 몸은 열을 만들지 않고, 메리노는 그래도 따뜻하게 해 주는 섬유입니다. 양말 두 켤레는 아침에 한 켤레가 말라 있다는 뜻입니다. 같은 세트를 여성 사이즈로, 비니는 색을 맞춰, 하늘이 요구하는 만큼 기다릴 수 있도록.'], name: '메리노 베이스레이어, 여성', shipping: '핀란드 국내 배송만 가능 (Posti, Matkahuolto, PostNord).' },
      hands_feet: { scene: '맨손가락으로 찍게 되는 사진', story: ['초록 띠가 움직이기 시작하는 바로 그때 장갑을 벗게 됩니다. 휴대폰이 장갑 너머로는 말을 듣지 않기 때문입니다. 사진 세 장이면 손가락은 나무가 됩니다. 그것이 여행의 조용한 진실입니다. 추위는 재킷을 통해서가 아니라 손가락과 발가락으로 들어옵니다. 몸이 피를 중심으로 모으고 가장자리는 알아서 하라고 내버려 두기 때문입니다.', '엄지와 검지로 화면을 다룰 수 있는 플리스 장갑, 스키 양말, 메리노 비니. 저녁이 띠 전체를 볼 때까지 이어질지, 시작만 보고 끝날지를 정하는 작은 세 가지입니다.'], name: '추위 속의 손과 발', shipping: '핀란드 국내 배송만 가능 (Posti, Matkahuolto, PostNord).' },
      socks_week: { scene: '오두막에는 바닥 난방이 있고, 산에는 없다', story: ['라플란드의 일주일은 사실 발을 위한 일주일입니다. 아침에는 산을 오르고, 낮에는 젖은 부츠로 카페 줄에 서고, 저녁에는 사우나 뒤에 따뜻한 바닥을 찾습니다. 하루 한 켤레로 챙긴 양말은 화요일에 바닥납니다.', '메리노 세 켤레. 하이킹에는 두꺼운 것, 낮에는 보송하게 유지되는 텐셀 메리노, 저녁과 돌아가는 길에는 얇은 것. 가장 싼 장바구니이고, 가장 먼저 아쉬워지는 것입니다.'], name: '일주일치 울 양말', shipping: '핀란드 국내 50 € 이상 무료 배송, 다른 나라는 결제 시 표시.' },
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

function BasketStory({ basket, lang, flip }: { basket: Basket; lang: Lang; flip: boolean }) {
  const t = COPY[lang];
  const c = t.baskets[basket.key];
  const [size, setSize] = useState(basket.defaultSize);
  const total = basket.items.reduce((s, it) => s + it.price, 0);
  return (
    <article className="grid gap-6 rounded-[32px] bg-white p-5 shadow-[0_28px_56px_-32px_rgba(15,23,42,0.35)] sm:p-7 md:grid-cols-12 md:items-center md:gap-10 md:p-9">
      {/* Kumppanin tuotekuvat: iso pääkuva + kaksi pientä, ei stockia. Vuorottelu vasen/oikea. */}
      <div className={`md:col-span-5 ${flip ? 'md:order-2' : ''}`}>
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          {basket.items.map((it, i) => (
            <figure key={it.name} className={`overflow-hidden rounded-2xl bg-[#F6F7FA] ${i === 0 ? 'col-span-2 aspect-[4/3]' : 'aspect-square'}`}>
              <img
                src={`/img/baskets/${it.image}.webp`}
                srcSet={`/img/baskets/${it.image}-400.webp 400w, /img/baskets/${it.image}.webp 800w`}
                sizes={i === 0 ? '(min-width: 768px) 34vw, 90vw' : '(min-width: 768px) 16vw, 44vw'}
                alt={it.name}
                loading="lazy"
                decoding="async"
                width={800}
                height={800}
                className="h-full w-full object-contain p-3 mix-blend-multiply"
              />
            </figure>
          ))}
        </div>
      </div>
      <div className={`md:col-span-7 ${flip ? 'md:order-1' : ''}`}>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-vibe-pink">{basket.shopName}</p>
        <h3 className="mt-2 font-heading text-4xl leading-[0.95] text-night sm:text-5xl [text-wrap:balance]">{c.scene}</h3>
        {/* Tarina ennen tuotetta: kaksi kappaletta artikkelin tapaan. */}
        <div className="mt-4 max-w-prose space-y-3 text-[15px] leading-relaxed text-slate-700 sm:text-base">
          <p className="first-letter:float-left first-letter:mr-2 first-letter:font-heading first-letter:text-5xl first-letter:leading-[0.8] first-letter:text-night">{c.story[0]}</p>
          <p>{c.story[1]}</p>
        </div>
        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">{t.contents}: {c.name}</p>
        <ul className="mt-2 divide-y divide-slate-100 border-y border-slate-100 text-sm">
          {basket.items.map((it) => (
            <li key={it.name} className="flex items-baseline justify-between gap-4 py-2">
              <span className="text-slate-700">{it.name}</span>
              <span className="shrink-0 tabular-nums text-slate-500">{money(it.price, lang)}</span>
            </li>
          ))}
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
          <span className="text-sm font-semibold text-night">{t.total} {money(total, lang)}</span>
        </div>
        <p className="mt-3 text-xs text-slate-500">{c.shipping}</p>
      </div>
    </article>
  );
}

export default function ReadyBaskets() {
  const { lang } = useLang();
  const t = COPY[lang];
  return (
    <section className="bg-cream px-4 py-14 sm:py-20" aria-labelledby="ready-baskets-title">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-vibe-pink">{t.eyebrow}</p>
        <h2 id="ready-baskets-title" className="mt-1 font-heading text-5xl leading-[0.95] text-night sm:text-6xl [text-wrap:balance]">{t.title}</h2>
        <p className="mt-5 max-w-prose text-base leading-relaxed text-slate-700 sm:text-lg">{t.lead}</p>
        <div className="mt-10 flex flex-col gap-6 sm:gap-8">
          {BASKETS.map((b, i) => (
            <BasketStory key={b.key} basket={b} lang={lang} flip={i % 2 === 1} />
          ))}
        </div>
        <p className="mt-6 text-xs text-slate-500">
          {t.fine} ({PRICES_AS_OF})
        </p>
      </div>
    </section>
  );
}
