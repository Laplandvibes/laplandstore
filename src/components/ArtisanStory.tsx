import { useLang } from '../lang';
import GradientPlaceholder from './GradientPlaceholder';

const COPY = {
  fi: {
    eyebrow: 'Tarinat tuotteiden takana',
    titleA: 'Kun ostat Lapista,',
    titleB: 'tuet elämäntapaa.',
    body:
      'Jokaisella puukolla, korulla ja hillopurkilla on tarina. Tekijä, joka oppi taidon isovanhemmiltaan. Paja napapiirin pohjoispuolella. Yritys, jolle Lappi on koti eikä lavaste. Joka putiikki tällä sivulla on lappilainen, ja lähteet ovat näkyvillä.',
    statA: 'vuotta käsityöperinnettä',
    statB: 'putiikkia, kaikki kivijalassa',
    statC: 'tarjoaa myös verkkokaupan',
  },
  en: {
    eyebrow: 'Stories behind the products',
    titleA: 'When you buy from Lapland,',
    titleB: 'you support a way of life.',
    body:
      'Every knife, piece of jewellery and jar of preserve carries a story. A maker who learned the craft from their grandparents. A workshop north of the Arctic Circle. A business that treats Lapland as home, not as a backdrop. Every boutique on this page is a real Lapland business, and we keep the sources on file.',
    statA: 'years of craft tradition',
    statB: 'boutiques, all with physical shops',
    statC: 'also offer an online store',
  },
  de: {
    eyebrow: 'Geschichten hinter den Produkten',
    titleA: 'Wer in Lappland einkauft,',
    titleB: 'stützt eine Lebensweise.',
    body:
      'Jedes Messer, jedes Schmuckstück, jedes Glas Konfitüre erzählt eine Geschichte: von einer Handwerkerin, die das Handwerk von den Großeltern gelernt hat, von einer Werkstatt nördlich des Polarkreises, von einem Betrieb, für den Lappland Alltag ist und keine Kulisse. Alle Boutiquen auf dieser Seite werden redaktionell geprüft, die Quellen sind dokumentiert.',
    statA: 'Jahre Handwerkstradition',
    statB: 'Boutiquen, alle mit Ladengeschäft',
    statC: 'mit eigenem Online-Shop',
  },

  ja: {
    eyebrow: '商品の背景にある物語',
    titleA: 'ラップランドでお買い物をすることは、',
    titleB: 'ここでの暮らしを支えることです。',
    body:
      'すべてのナイフ、すべての装飾品、すべての保存食の瓶には物語があります — 祖父母から技を受け継いだ職人、北極圏より北の工房、ラップランドを背景ではなく日常の家として扱う事業者の物語です。このページの各ブティックは独立して検証され、出典も記録に残しています。',
    statA: '年に及ぶ工芸の伝統',
    statB: 'ブティック、すべて実店舗あり',
    statC: 'がオンラインショップも併設',
  },
  es: {
    eyebrow: 'Historias detrás de los productos',
    titleA: 'Cuando usted compra en Laponia,',
    titleB: 'sostiene una forma de vida.',
    body:
      'Cada cuchillo, cada joya y cada tarro de mermelada llevan una historia — la de un artesano que aprendió el oficio de sus abuelos, la de un taller al norte del Círculo Polar, la de una empresa para la que Laponia es hogar y no decorado. Cada boutique de esta página se verifica de forma independiente, con las fuentes documentadas.',
    statA: 'años de tradición artesanal',
    statB: 'boutiques, todas con tienda física',
    statC: 'ofrecen también tienda en línea',
  },
  'pt-BR': {
    eyebrow: 'As histórias por trás dos produtos',
    titleA: 'Quando você compra na Lapônia,',
    titleB: 'você sustenta um modo de vida.',
    body:
      'Cada faca, cada joia, cada vidro de geleia carrega uma história — a do artesão que aprendeu o ofício com os avós, a da oficina ao norte do Círculo Polar, a do negócio para o qual a Lapônia é casa, não cenário. Cada boutique desta página é verificada de forma independente, com as fontes documentadas.',
    statA: 'anos de tradição artesanal',
    statB: 'boutiques, todas com loja física',
    statC: 'oferecem também loja online',
  },
  'zh-CN': {
    eyebrow: '产品背后的故事',
    titleA: '当您在拉普兰购物时,',
    titleB: '您支持的是一种生活方式。',
    body:
      '每一把刀、每一件饰品、每一罐果酱都承载着故事 — 从祖辈传承手艺的工匠、北极圈以北的工作坊,以及把拉普兰当作家园而非背景板的小企业。本页面的每家精品店都经过独立核实,资料来源均有记录。',
    statA: '年的工艺传承',
    statB: '家精品店,均设实体店',
    statC: '家同时经营线上商店',
  },
  ko: {
    eyebrow: '상품 뒤에 숨겨진 이야기',
    titleA: '라플란드에서 구매하실 때,',
    titleB: '하나의 삶의 방식을 지원하시는 것입니다.',
    body:
      '모든 칼, 모든 장신구, 모든 잼 한 병에는 이야기가 담겨 있습니다 — 조부모로부터 기술을 배운 장인, 북극권 이북의 공방, 라플란드를 배경이 아닌 일상의 터전으로 여기는 사업체. 이 페이지의 모든 부티크는 독립적으로 검증되었으며 출처가 기록되어 있습니다.',
    statA: '년의 공예 전통',
    statB: '개의 부티크, 모두 오프라인 매장 보유',
    statC: '곳은 온라인 상점도 운영',
  },
  fr: {
    eyebrow: 'Les histoires derrière les produits',
    titleA: 'Quand vous achetez en Laponie,',
    titleB: 'vous soutenez un mode de vie.',
    body:
      "Chaque couteau, chaque bijou, chaque pot de confiture porte une histoire — celle d'un artisan qui a appris le métier de ses grands-parents, celle d'un atelier au nord du cercle polaire, celle d'une entreprise pour qui la Laponie est un chez-soi et non un décor. Chaque boutique de cette page est vérifiée de façon indépendante, sources documentées.",
    statA: "années de tradition artisanale",
    statB: 'boutiques, toutes avec un magasin physique',
    statC: 'proposent également une boutique en ligne',
  },
  it: {
    eyebrow: 'Le storie dietro i prodotti',
    titleA: 'Quando acquista in Lapponia,',
    titleB: 'sostiene un modo di vivere.',
    body:
      "Ogni coltello, ogni gioiello, ogni vasetto di marmellata porta una storia — quella di un artigiano che ha imparato il mestiere dai nonni, di un laboratorio a nord del Circolo Polare, di un'attività per cui la Lapponia è casa, non scenografia. Ogni boutique di questa pagina è verificata in modo indipendente, con le fonti documentate.",
    statA: 'anni di tradizione artigianale',
    statB: 'boutique, tutte con negozio fisico',
    statC: 'offrono anche un negozio online',
  },
  nl: {
    eyebrow: 'De verhalen achter de producten',
    titleA: 'Wanneer u in Lapland koopt,',
    titleB: 'steunt u een manier van leven.',
    body:
      'Elk mes, elk sieraad, elke pot jam draagt een verhaal — van een maker die het ambacht leerde van zijn grootouders, van een werkplaats ten noorden van de poolcirkel, van een bedrijf dat Lapland als thuis ziet en niet als decor. Elke boutique op deze pagina is onafhankelijk geverifieerd, met de bronnen gedocumenteerd.',
    statA: 'jaar ambachtelijke traditie',
    statB: 'boutiques, allemaal met fysieke winkel',
    statC: 'bieden ook een online winkel',
  },
} as const;

export default function ArtisanStory() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section id="tarina" className="relative py-28 overflow-hidden">
      <GradientPlaceholder
        theme="wood"
        showIcon={false}
        imgSrc="/img/artisan-hands.jpg"
        ariaLabel={
          lang === 'fi'
            ? 'Lappilainen käsityöläinen työssään'
            : lang === 'de'
            ? 'Eine Handwerkerin aus Lappland bei der Arbeit'
            : lang === 'ja'
            ? '工房で働くラップランドの職人'
            : lang === 'es'
            ? 'Un artesano de Laponia en su taller'
            : lang === 'pt-BR'
            ? 'Um artesão da Lapônia em seu trabalho'
            : lang === 'zh-CN'
            ? '正在工作的拉普兰工匠'
            : lang === 'ko'
            ? '작업 중인 라플란드 장인'
            : lang === 'fr'
            ? "Un artisan de Laponie au travail"
            : lang === 'it'
            ? 'Un artigiano della Lapponia al lavoro'
            : lang === 'nl'
            ? 'Een Laplandse ambachtsman aan het werk'
            : 'A Lapland artisan at work'
        }
      />
      {/* Side-vignette: dark on left where text sits, lets the image breathe on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/50 to-night/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-night/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-white">
        <div className="max-w-2xl">
          <span className="text-sm tracking-[0.3em] uppercase text-amber-light font-bold">
            {t.eyebrow}
          </span>

          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mt-4 leading-tight [text-wrap:balance]">
            {t.titleA}
            <br />
            <span className="text-amber-light">{t.titleB}</span>
          </h2>

          <p className="text-white/85 text-lg mt-8 leading-relaxed [text-wrap:pretty]">
            {t.body}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 max-w-3xl">
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <p className="text-4xl font-heading font-bold text-amber-light">100+</p>
            <p className="text-white/60 text-sm mt-1">{t.statA}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <p className="text-4xl font-heading font-bold text-amber-light">16</p>
            <p className="text-white/60 text-sm mt-1">{t.statB}</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <p className="text-4xl font-heading font-bold text-amber-light">9</p>
            <p className="text-white/60 text-sm mt-1">{t.statC}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
