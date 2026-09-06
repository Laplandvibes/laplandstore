import { ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { HUB_PICKS, GYG_PRICE_AS_OF, gygHref } from '../shared/gyg/picks';
import { useLang, type Lang } from '../lang';
import AiDisclosure from './AiDisclosure';

/**
 * Aktiviteetit hakemistosivulla.
 *
 * 🔴 Miksi (Vesa 5.9.2026): "sitten voisi olla juuri ne aktiviteetit siellä
 * laplandstoressa, että aidosti mietittäisiin mitä se asiakas etsii ja
 * koitetaan helpottaa kaikkea." Lukija, joka etsii Lapin putiikkeja, on
 * matkalla Lappiin; retki on sama päätös kuin lahja, vain toinen kauppa.
 *
 * 🔴🔴 UUSIKSI 6.9.2026 (Vesa: "eikö tämä osio ole aivan perseestä, ja ei
 * mainosteta GetYourGuidea vaan mitä asiakas haluaa tehdä! haloo"). Ensimmäinen
 * versio oli GetYourGuiden tuoteluettelo: englanninkieliset tuotenimet
 * suomenkielisellä sivulla, ingressi mainitsi välittäjän kahdesti, kortti oli
 * pelkkää tekstiä. Nyt jokainen kortti on KOKEMUS lukijan omalla kielellä ja
 * omalla tekstillä (mitä siellä tapahtuu, ei mitä tuote on nimeltään), ja
 * välittäjä mainitaan vain pienellä hinnan lähteenä. Kortin yläosa on
 * typografinen juliste kokemuksen omalla värillä (revontulivihreä, jäänsininen,
 * nuotion amber, jään vaaleansininen) — ei AI-kuvaa (Vesa 6.9.: "AI slop"),
 * ei GYG:n kuvia (kuuluvat järjestäjille), eikä heinäkuun kesäkuvia talviretkiin.
 *
 * Tekstit eivät väitä mitään, mitä tuotesivu ei sano: kesto ja lähtöpaikka
 * tulevat datasta, kokemuskuvaus on lajin yleinen kulku (opas ajaa selkeän
 * taivaan alle, laiva murtaa jäätä, valjakko kulkee metsässä, kanjonin putoukset
 * jäätyvät), ei järjestäjän lupaus.
 *
 * Neljä verkoston verifioitua GetYourGuide-tuotetta (shared/gyg/picks.ts,
 * HUB_PICKS: revontulet, Sampo, husky, Korouoma). Linkki kulkee Workerin
 * kautta gygHref():llä omalla sid:llä, jotta klikit kirjautuvat tälle
 * sivustolle eivätkä hubille. Hinta on GetYourGuiden oma lukupäivänä, ja
 * päivä sanotaan aina hinnan vieressä.
 */

type Exp = 'aurora' | 'icebreaker' | 'husky' | 'korouoma';

interface ExpCopy {
  title: string;
  hook: string;
}

interface Copy {
  eyebrow: string;
  title: string;
  intro: string;
  from: (price: string) => string;
  cta: string;
  fine: (date: string) => string;
  exp: Record<Exp, ExpCopy>;
}

/** Kokemus tunnistetaan tuotepolusta, ei rivin järjestyksestä. */
function expOf(path: string): Exp {
  if (path.includes('northern-lights')) return 'aurora';
  if (path.includes('sampo')) return 'icebreaker';
  if (path.includes('husky')) return 'husky';
  return 'korouoma';
}

/** Julisteen väri kokemuksen mukaan: pohja deep-night, yksi hehku. */
const POSTER: Record<Exp, string> = {
  aurora:
    'radial-gradient(120% 90% at 85% 10%, rgba(52,211,153,0.55), transparent 60%), radial-gradient(90% 70% at 10% 100%, rgba(139,92,246,0.35), transparent 60%), linear-gradient(160deg, #0F172A 0%, #0b1f2a 60%, #0f2f2a 100%)',
  icebreaker:
    'radial-gradient(120% 90% at 80% 0%, rgba(6,182,212,0.5), transparent 60%), radial-gradient(90% 60% at 0% 100%, rgba(255,255,255,0.18), transparent 55%), linear-gradient(160deg, #0F172A 0%, #0c2440 60%, #0e4f6e 100%)',
  husky:
    'radial-gradient(110% 90% at 85% 15%, rgba(245,158,11,0.5), transparent 60%), radial-gradient(90% 60% at 0% 100%, rgba(236,72,153,0.22), transparent 55%), linear-gradient(160deg, #0F172A 0%, #241a1a 60%, #4a2a12 100%)',
  korouoma:
    'radial-gradient(120% 90% at 80% 0%, rgba(125,211,252,0.5), transparent 60%), radial-gradient(90% 60% at 0% 100%, rgba(255,255,255,0.14), transparent 55%), linear-gradient(160deg, #0F172A 0%, #16233a 60%, #1e3a5f 100%)',
};

const COPY: Record<Lang, Copy> = {
  fi: {
    eyebrow: 'Kun olet perillä',
    title: 'Mitä Lapissa tehdään',
    intro: 'Kun putiikit on kierretty, Lappi on vielä koettava. Neljä retkeä, jotka kannattaa varata jo ennen matkaa.',
    from: (p) => `alk. ${p}`,
    cta: 'Varaa retki',
    fine: (d) => `Varaus tehdään GetYourGuiden sivulla uudessa välilehdessä. Hinnat ovat GetYourGuiden omia, luettu ${d}, ja saatamme saada varauksesta palkkion.`,
    exp: {
      aurora: { title: 'Revontulet Rovaniemen taivaalla', hook: 'Opas seuraa pilvikarttoja ja ajaa sinne, missä taivas on selkeä. Ilta kuluu nuotiolla odottaen, ja kun vihreä kaari syttyy, kaikki hiljenevät.' },
      icebreaker: { title: 'Jäänmurtaja Sampo ja kellunta jäissä', hook: 'Laiva murtaa Perämeren jäätä Kemin edustalla, ja railossa kellutaan pelastuspuvussa. Sampo on yksi harvoista matkustajia kuljettavista jäänmurtajista.' },
      husky: { title: 'Huskyvaljakolla Levin metsässä', hook: 'Viisi kilometriä omaa valjakkoa ohjaten. Koirat tietävät reitin, sinä pidät jarrusta ja kuuntelet, miten hiljaista metsässä on.' },
      korouoma: { title: 'Korouoman jäätyneet vesiputoukset', hook: 'Päiväretki kanjoniin, jossa putoukset jäätyvät seiniksi. Opastettu talvikävely ja tulistelu nuotiolla.' },
    },
  },
  en: {
    eyebrow: 'Once you are there',
    title: 'What to do in Lapland',
    intro: 'Once the boutiques are done, Lapland still has to be experienced. Four tours worth booking before you travel.',
    from: (p) => `from ${p}`,
    cta: 'Book the tour',
    fine: (d) => `Booking opens on GetYourGuide in a new tab. Prices are GetYourGuide's own, read on ${d}, and we may earn a commission on a booking.`,
    exp: {
      aurora: { title: 'Northern lights over Rovaniemi', hook: 'A guide reads the cloud maps and drives to where the sky is clear. The evening passes by a campfire, and when the green arc lights up, everyone goes quiet.' },
      icebreaker: { title: 'Icebreaker Sampo and ice floating', hook: 'The ship breaks the sea ice off Kemi, and you float in the open channel in a survival suit. Sampo is one of the few icebreakers that carry passengers.' },
      husky: { title: 'A husky team through the forest of Levi', hook: 'Five kilometres steering your own team. The dogs know the trail; you hold the brake and listen to how quiet the forest is.' },
      korouoma: { title: 'The frozen waterfalls of Korouoma', hook: 'A day trip into a canyon where the falls freeze into walls. A guided winter walk and a fire to warm up by.' },
    },
  },
  de: {
    eyebrow: 'Wenn Sie dort sind',
    title: 'Was man in Lappland unternimmt',
    intro: 'Wenn die Boutiquen besucht sind, will Lappland noch erlebt werden. Vier Touren, die man vor der Reise buchen sollte.',
    from: (p) => `ab ${p}`,
    cta: 'Tour buchen',
    fine: (d) => `Die Buchung öffnet sich bei GetYourGuide in einem neuen Tab. Die Preise sind die von GetYourGuide, gelesen am ${d}; für eine Buchung erhalten wir möglicherweise eine Provision.`,
    exp: {
      aurora: { title: 'Nordlichter über Rovaniemi', hook: 'Ein Guide liest die Wolkenkarten und fährt dorthin, wo der Himmel klar ist. Der Abend vergeht am Lagerfeuer, und wenn der grüne Bogen aufleuchtet, wird es still.' },
      icebreaker: { title: 'Eisbrecher Sampo und Eisschwimmen', hook: 'Das Schiff bricht das Meereis vor Kemi, und Sie treiben im Überlebensanzug in der offenen Rinne. Die Sampo ist einer der wenigen Eisbrecher, die Passagiere mitnehmen.' },
      husky: { title: 'Mit dem Huskygespann durch Levis Wald', hook: 'Fünf Kilometer mit dem eigenen Gespann. Die Hunde kennen den Weg, Sie halten die Bremse und hören, wie still der Wald ist.' },
      korouoma: { title: 'Die gefrorenen Wasserfälle von Korouoma', hook: 'Ein Tagesausflug in eine Schlucht, in der die Wasserfälle zu Wänden gefrieren. Geführte Winterwanderung und ein Feuer zum Aufwärmen.' },
    },
  },
  sv: {
    eyebrow: 'När du är framme',
    title: 'Vad man gör i Lappland',
    intro: 'När butikerna är avklarade återstår att uppleva Lappland. Fyra turer som är värda att boka före resan.',
    from: (p) => `från ${p}`,
    cta: 'Boka turen',
    fine: (d) => `Bokningen öppnas hos GetYourGuide i en ny flik. Priserna är GetYourGuides egna, lästa ${d}, och vi kan få provision på en bokning.`,
    exp: {
      aurora: { title: 'Norrsken över Rovaniemi', hook: 'En guide läser molnkartorna och kör dit himlen är klar. Kvällen går vid lägerelden, och när den gröna bågen tänds blir alla tysta.' },
      icebreaker: { title: 'Isbrytaren Sampo och isflytning', hook: 'Fartyget bryter havsisen utanför Kemi, och du flyter i räddningsdräkt i den öppna rännan. Sampo är en av få isbrytare som tar passagerare.' },
      husky: { title: 'Med huskyspann genom Levis skog', hook: 'Fem kilometer med eget spann. Hundarna kan leden, du håller i bromsen och lyssnar på hur tyst skogen är.' },
      korouoma: { title: 'Korouomas frusna vattenfall', hook: 'En dagstur till en kanjon där fallen fryser till väggar. Guidad vintervandring och en eld att värma sig vid.' },
    },
  },
  fr: {
    eyebrow: 'Une fois sur place',
    title: 'Que faire en Laponie',
    intro: 'Une fois les boutiques faites, il reste la Laponie à vivre. Quatre excursions à réserver avant le départ.',
    from: (p) => `dès ${p}`,
    cta: 'Réserver l’excursion',
    fine: (d) => `La réservation s’ouvre sur GetYourGuide dans un nouvel onglet. Les prix sont ceux de GetYourGuide, relevés le ${d}, et nous pouvons percevoir une commission sur une réservation.`,
    exp: {
      aurora: { title: 'Aurores boréales au-dessus de Rovaniemi', hook: 'Un guide lit les cartes de nuages et roule jusqu’à un ciel dégagé. La soirée passe autour d’un feu, et quand l’arc vert s’allume, tout le monde se tait.' },
      icebreaker: { title: 'Brise-glace Sampo et flottaison sur la glace', hook: 'Le navire brise la banquise au large de Kemi, et vous flottez dans le chenal en combinaison de survie. Le Sampo est l’un des rares brise-glaces ouverts aux passagers.' },
      husky: { title: 'En traîneau à chiens dans la forêt de Levi', hook: 'Cinq kilomètres aux commandes de votre propre attelage. Les chiens connaissent la piste ; vous tenez le frein et écoutez le silence de la forêt.' },
      korouoma: { title: 'Les cascades gelées de Korouoma', hook: 'Une journée dans un canyon où les chutes gèlent en murs de glace. Randonnée hivernale guidée et feu de camp pour se réchauffer.' },
    },
  },
  es: {
    eyebrow: 'Una vez allí',
    title: 'Qué hacer en Laponia',
    intro: 'Cuando las boutiques ya están vistas, aún queda vivir Laponia. Cuatro excursiones que conviene reservar antes del viaje.',
    from: (p) => `desde ${p}`,
    cta: 'Reservar la excursión',
    fine: (d) => `La reserva se abre en GetYourGuide en una pestaña nueva. Los precios son los de GetYourGuide, leídos el ${d}, y podemos recibir una comisión por una reserva.`,
    exp: {
      aurora: { title: 'Auroras boreales sobre Rovaniemi', hook: 'Un guía lee los mapas de nubes y conduce hasta donde el cielo está despejado. La noche pasa junto a una hoguera, y cuando se enciende el arco verde, todos callan.' },
      icebreaker: { title: 'Rompehielos Sampo y flotación en el hielo', hook: 'El barco rompe el hielo marino frente a Kemi y usted flota en el canal abierto con un traje de supervivencia. El Sampo es uno de los pocos rompehielos abiertos a pasajeros.' },
      husky: { title: 'En trineo de huskies por el bosque de Levi', hook: 'Cinco kilómetros guiando su propio tiro. Los perros conocen la ruta; usted sujeta el freno y escucha el silencio del bosque.' },
      korouoma: { title: 'Las cascadas heladas de Korouoma', hook: 'Una excursión de un día a un cañón donde las cascadas se congelan en paredes. Caminata invernal guiada y fuego para entrar en calor.' },
    },
  },
  it: {
    eyebrow: 'Una volta arrivati',
    title: 'Cosa fare in Lapponia',
    intro: 'Finite le boutique, resta la Lapponia da vivere. Quattro escursioni da prenotare prima di partire.',
    from: (p) => `da ${p}`,
    cta: 'Prenota l’escursione',
    fine: (d) => `La prenotazione si apre su GetYourGuide in una nuova scheda. I prezzi sono quelli di GetYourGuide, letti il ${d}, e potremmo ricevere una commissione su una prenotazione.`,
    exp: {
      aurora: { title: 'Aurora boreale sopra Rovaniemi', hook: 'Una guida legge le mappe delle nuvole e guida fin dove il cielo è sereno. La serata passa accanto al fuoco e, quando si accende l’arco verde, tutti tacciono.' },
      icebreaker: { title: 'Rompighiaccio Sampo e bagno tra i ghiacci', hook: 'La nave rompe il ghiaccio marino al largo di Kemi e Lei galleggia nel canale aperto con una tuta di sopravvivenza. Il Sampo è uno dei pochi rompighiaccio aperti ai passeggeri.' },
      husky: { title: 'In slitta con gli husky nella foresta di Levi', hook: 'Cinque chilometri alla guida della propria muta. I cani conoscono il percorso; Lei tiene il freno e ascolta il silenzio della foresta.' },
      korouoma: { title: 'Le cascate ghiacciate di Korouoma', hook: 'Una gita di un giorno in un canyon dove le cascate gelano in pareti. Camminata invernale guidata e un fuoco per scaldarsi.' },
    },
  },
  nl: {
    eyebrow: 'Eenmaal daar',
    title: 'Wat te doen in Lapland',
    intro: 'Als de boetieks gedaan zijn, moet Lapland nog beleefd worden. Vier tochten die u het best vóór de reis boekt.',
    from: (p) => `vanaf ${p}`,
    cta: 'Tocht boeken',
    fine: (d) => `De boeking opent bij GetYourGuide in een nieuw tabblad. De prijzen zijn die van GetYourGuide, gelezen op ${d}, en wij kunnen commissie ontvangen op een boeking.`,
    exp: {
      aurora: { title: 'Noorderlicht boven Rovaniemi', hook: 'Een gids leest de wolkenkaarten en rijdt naar waar de hemel helder is. De avond verstrijkt bij een kampvuur, en als de groene boog oplicht, wordt iedereen stil.' },
      icebreaker: { title: 'IJsbreker Sampo en drijven in het ijs', hook: 'Het schip breekt het zee-ijs voor de kust van Kemi, en u drijft in een overlevingspak in de open geul. De Sampo is een van de weinige ijsbrekers die passagiers meenemen.' },
      husky: { title: 'Met een huskyspan door het bos van Levi', hook: 'Vijf kilometer met uw eigen span. De honden kennen de route; u houdt de rem vast en hoort hoe stil het bos is.' },
      korouoma: { title: 'De bevroren watervallen van Korouoma', hook: 'Een dagtocht naar een kloof waar de watervallen tot wanden bevriezen. Begeleide winterwandeling en een vuur om op te warmen.' },
    },
  },
  'pt-BR': {
    eyebrow: 'Quando chegar lá',
    title: 'O que fazer na Lapônia',
    intro: 'Depois das boutiques, ainda falta viver a Lapônia. Quatro passeios que vale a pena reservar antes da viagem.',
    from: (p) => `a partir de ${p}`,
    cta: 'Reservar o passeio',
    fine: (d) => `A reserva abre no GetYourGuide em uma nova aba. Os preços são do GetYourGuide, lidos em ${d}, e podemos receber comissão por uma reserva.`,
    exp: {
      aurora: { title: 'Aurora boreal sobre Rovaniemi', hook: 'Um guia lê os mapas de nuvens e dirige até onde o céu está limpo. A noite passa ao redor de uma fogueira e, quando o arco verde acende, todos ficam em silêncio.' },
      icebreaker: { title: 'Quebra-gelo Sampo e flutuação no gelo', hook: 'O navio quebra o gelo do mar em frente a Kemi, e você flutua no canal aberto com uma roupa de sobrevivência. O Sampo é um dos poucos quebra-gelos abertos a passageiros.' },
      husky: { title: 'De trenó com huskies pela floresta de Levi', hook: 'Cinco quilômetros conduzindo sua própria matilha. Os cães conhecem a trilha; você segura o freio e escuta o silêncio da floresta.' },
      korouoma: { title: 'As cachoeiras congeladas de Korouoma', hook: 'Um passeio de um dia a um cânion onde as quedas congelam em paredes. Caminhada de inverno guiada e uma fogueira para se aquecer.' },
    },
  },
  ja: {
    eyebrow: '現地に着いたら',
    title: 'ラップランドでできること',
    intro: 'ブティックを巡ったあとは、ラップランドを体験する番です。出発前に予約しておきたい4つのツアー。',
    from: (p) => `${p}から`,
    cta: 'ツアーを予約',
    fine: (d) => `予約はGetYourGuideのページが新しいタブで開きます。価格はGetYourGuideのもので、${d}に確認したものです。予約により当サイトが手数料を受け取ることがあります。`,
    exp: {
      aurora: { title: 'ロヴァニエミの空にオーロラ', hook: 'ガイドが雲の地図を読み、空が晴れている場所まで車で向かいます。焚き火のそばで夜が更け、緑の弧が光ると皆が静かになります。' },
      icebreaker: { title: '砕氷船サンポ号と氷上浮遊', hook: '船がケミ沖の海氷を砕き、サバイバルスーツを着て開いた水路に浮かびます。サンポ号は乗客を乗せる数少ない砕氷船のひとつです。' },
      husky: { title: 'レヴィの森をハスキー犬ぞりで', hook: '自分のそりを操って5キロ。犬たちはコースを知っていて、あなたはブレーキを握り、森の静けさに耳を澄ませます。' },
      korouoma: { title: 'コロウオマの凍った滝', hook: '滝が氷の壁になる峡谷への日帰りツアー。ガイド付きの冬のハイキングと、体を温める焚き火。' },
    },
  },
  'zh-CN': {
    eyebrow: '到达之后',
    title: '在拉普兰做什么',
    intro: '逛完精品店，拉普兰还要亲身体验。四条值得在出发前预订的行程。',
    from: (p) => `${p}起`,
    cta: '预订行程',
    fine: (d) => `预订会在新标签页中打开 GetYourGuide 页面。价格以 GetYourGuide 为准，读取于 ${d}，我们可能从预订中获得佣金。`,
    exp: {
      aurora: { title: '罗瓦涅米上空的极光', hook: '向导查看云图，开车前往天空晴朗的地方。夜晚在篝火旁度过，当绿色的光弧亮起，所有人都安静下来。' },
      icebreaker: { title: '桑波号破冰船与冰上漂浮', hook: '船在凯米外海破开海冰，您穿着救生服漂浮在开出的航道中。桑波号是少数搭载游客的破冰船之一。' },
      husky: { title: '驾哈士奇雪橇穿越莱维森林', hook: '亲自驾驶雪橇五公里。狗知道路线，您握住刹车，聆听森林的寂静。' },
      korouoma: { title: '科罗乌马的冰冻瀑布', hook: '一日游前往瀑布冻成冰墙的峡谷。有向导带领的冬季徒步，并在篝火旁取暖。' },
    },
  },
  ko: {
    eyebrow: '도착한 뒤에는',
    title: '라플란드에서 할 것',
    intro: '부티크를 둘러본 뒤에는 라플란드를 직접 체험할 차례입니다. 여행 전에 예약해 둘 만한 네 가지 투어.',
    from: (p) => `${p}부터`,
    cta: '투어 예약',
    fine: (d) => `예약은 새 탭에서 GetYourGuide 페이지로 열립니다. 가격은 GetYourGuide 기준이며 ${d}에 확인했습니다. 예약 시 저희가 수수료를 받을 수 있습니다.`,
    exp: {
      aurora: { title: '로바니에미 하늘의 오로라', hook: '가이드가 구름 지도를 읽고 하늘이 맑은 곳까지 차로 이동합니다. 저녁은 모닥불 곁에서 흐르고, 초록 빛의 띠가 켜지면 모두가 조용해집니다.' },
      icebreaker: { title: '쇄빙선 삼포호와 얼음 위 수영', hook: '배가 케미 앞바다의 해빙을 깨고, 생존복을 입은 채 열린 물길에 떠 있습니다. 삼포호는 승객을 태우는 몇 안 되는 쇄빙선 중 하나입니다.' },
      husky: { title: '허스키 썰매로 레비의 숲을 달리다', hook: '직접 썰매를 몰며 5km를 달립니다. 개들은 길을 알고 있고, 브레이크를 잡은 채 숲이 얼마나 고요한지 듣게 됩니다.' },
      korouoma: { title: '코로우오마의 얼어붙은 폭포', hook: '폭포가 얼음 벽이 되는 협곡으로 떠나는 당일 투어. 가이드와 함께하는 겨울 트레킹과 몸을 녹이는 모닥불.' },
    },
  },
};

const REL = 'sponsored nofollow noopener';

export default function ActivitiesRail() {
  const { lang } = useLang();
  const t = COPY[lang];
  return (
    <section className="bg-cream px-4 py-12 sm:py-16" aria-labelledby="activities-title">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-vibe-pink">{t.eyebrow}</p>
        <h2 id="activities-title" className="mt-1 font-heading text-4xl text-night sm:text-5xl">{t.title}</h2>
        <p className="mt-3 max-w-2xl text-slate-700 [text-wrap:pretty]">{t.intro}</p>
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {HUB_PICKS.map((p, i) => {
            const e = expOf(p.path);
            const c = t.exp[e];
            return (
              <li key={p.path} className="group flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_18px_40px_-26px_rgba(15,23,42,0.35)] ring-1 ring-night/5">
                {/* Juliste: kokemuksen AI-kuva (Vesa 6.9.: "eikö näihin vaikka AI-kuvat saada"),
                    värigradientti pohjalla siltä varalta ettei kuva lataudu, ja scrim
                    eksplisiittisillä stopeilla otsikon alle. Kuvat: Picsart seedream-4.5,
                    kohdekohtainen kehote (ei tyyppikehote), public/img/activities/<key>.webp
                    1200×800 + 600×400. Art. 50 -merkintä <AiDisclosure />, koska kuva esittää
                    oikeaa paikkaa valokuvamaisesti. */}
                <div className="relative flex aspect-[16/10] min-h-[184px] flex-col justify-end overflow-hidden p-5 text-white" style={{ background: POSTER[e] }}>
                  <img
                    src={`/img/activities/${e}.webp`}
                    srcSet={`/img/activities/${e}-600.webp 600w, /img/activities/${e}.webp 1200w`}
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 46vw, 92vw"
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={800}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div aria-hidden="true" className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0F172A 0%, rgba(15,23,42,0.72) 42%, rgba(15,23,42,0.18) 70%, rgba(15,23,42,0.05) 100%)' }} />
                  <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/90 ring-1 ring-white/20 backdrop-blur-sm">
                    <MapPin className="h-3 w-3" aria-hidden="true" />
                    {p.place}
                  </span>
                  {/* lg = neljä saraketta, kortin sisäleveys ~200 px: 30 px:n Bebas katkoi
                      "Huskyvaljakolla" ja "vesiputoukset" kesken sanan (mitattu 1280 px:ssä),
                      joten siellä 26 px. AI-merkintä ylös oikealle, jotta otsikko saa koko leveyden. */}
                  <h3 className="relative font-heading text-[28px] leading-[0.95] tracking-wide [text-wrap:balance] drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] sm:text-3xl lg:text-[26px]">{c.title}</h3>
                  <AiDisclosure className="!bottom-auto !top-3" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-[14px] leading-relaxed text-slate-700 [text-wrap:pretty]">{c.hook}</p>
                  {/* Neljän sarakkeen kortti (lg) on ~230 px: hinta ja nappi eivät mahdu samalle riville,
                      joten siellä nappi on koko kortin levyinen omalla rivillään. Mitattu 1280 px:ssä:
                      "alk. 198 €" katkesi kahdelle riville napin viereen. */}
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-night/10 pt-4">
                    <div className="min-w-0 whitespace-nowrap">
                      {p.price && <p className="text-[15px] font-semibold tabular-nums text-night">{t.from(p.price)}</p>}
                      {p.duration && (
                        <p className="mt-0.5 inline-flex items-center gap-1 text-xs text-slate-500">
                          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                          {p.duration}
                        </p>
                      )}
                    </div>
                    <a
                      href={gygHref(p, lang, `store_home_activity_${i + 1}`)}
                      target="_blank"
                      rel={REL}
                      className="ml-auto inline-flex shrink-0 items-center justify-center gap-1.5 rounded-full bg-[#DB2777] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_12px_26px_-12px_rgba(219,39,119,0.7)] transition-[transform,background-color] duration-150 hover:-translate-y-0.5 hover:bg-[#BE185D] active:scale-[0.97] lg:w-full"
                    >
                      {t.cta}
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-5 text-xs text-slate-500">{t.fine(GYG_PRICE_AS_OF)}</p>
      </div>
    </section>
  );
}
