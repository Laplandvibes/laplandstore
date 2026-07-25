import { ArrowRight } from 'lucide-react';
import { useLang } from '../lang';
import GradientPlaceholder, { type PlaceholderTheme } from './GradientPlaceholder';

const THEMES: PlaceholderTheme[] = [
  'knives',
  'silver',
  'berries',
  'wool',
  'design',
  'souvenirs',
];

const IMG_SLUGS = [
  '/img/cat-knives.jpg',
  '/img/cat-silver.jpg',
  '/img/cat-berries.jpg',
  '/img/cat-wool.jpg',
  '/img/cat-design.jpg',
  '/img/cat-souvenirs.jpg',
];

const COPY = {
  fi: {
    eyebrow: 'Mitä etsit?',
    heading: 'Löydä oma suosikkisi',
    cta: 'Katso putiikit',
    cats: [
      { name: 'Puukot & käsityöt', tagline: 'Suomalaista terästä, visakoivua ja poronsarvea' },
      { name: 'Saamelaiskäsityö hopeasta', tagline: 'Tuhansia vuosia vanha perinne, kädessäsi' },
      { name: 'Lapin herkut', tagline: 'Lakka, poro ja mustikka. Pohjoisen puhtaat maut.' },
      { name: 'Villa & neuleet', tagline: 'Lämmintä ja kaunista, tehty kestämään.' },
      { name: 'Design & sisustus', tagline: 'Pentik-keramiikkaa, puuesineitä, kynttilöitä' },
      { name: 'Matkamuistot', tagline: 'Poroaiheiset, revontulet, joulupukki' },
    ],
  },
  en: {
    eyebrow: 'What are you looking for?',
    heading: 'Find your favourite',
    cta: 'View boutiques',
    cats: [
      { name: 'Knives & crafts', tagline: 'Finnish steel, curly birch and reindeer antler' },
      { name: 'Sámi silver', tagline: 'A craft tradition thousands of years old' },
      { name: 'Lapland delicacies', tagline: 'Cloudberry, reindeer and blueberry. The clean flavours of the north.' },
      { name: 'Wool & knitwear', tagline: 'Warm and well made, built to last.' },
      { name: 'Design & home', tagline: 'Pentik ceramics, woodwork, candles' },
      { name: 'Souvenirs', tagline: 'Reindeer motifs, aurora, Santa Claus' },
    ],
  },
  de: {
    eyebrow: 'Wonach suchen Sie?',
    heading: 'Finden Sie Ihren Favoriten',
    cta: 'Zu den Boutiquen',
    cats: [
      { name: 'Puukko & Handwerk', tagline: 'Finnischer Stahl, Maserbirke und Rentierhorn' },
      { name: 'Sámi-Silber', tagline: 'Eine jahrtausendealte Handwerkstradition' },
      { name: 'Lappland-Delikatessen', tagline: 'Moltebeere, Rentier, Blaubeere. Aromen des Nordens' },
      { name: 'Wolle & Strick', tagline: 'Warm und sorgfältig verarbeitet, für viele Winter' },
      { name: 'Design & Wohnen', tagline: 'Pentik-Keramik, Holzarbeiten, Kerzen' },
      { name: 'Souvenirs', tagline: 'Rentier-Motive, Polarlicht, Weihnachtsmann' },
    ],
  },

  ja: {
    eyebrow: '何をお探しですか?',
    heading: 'お気に入りを見つける',
    cta: 'ブティックを見る',
    cats: [
      { name: 'ナイフ & 工芸品', tagline: 'フィンランドの鋼、カーリーバーチ、トナカイの角' },
      { name: 'サーミの銀細工', tagline: '数千年の歴史を持つ工芸の伝統' },
      { name: 'ラップランドの味覚', tagline: 'クラウドベリー、トナカイ、ブルーベリー。北欧の風味' },
      { name: 'ウール & ニット', tagline: '温かく、丁寧に作られ、長く使える品質' },
      { name: 'デザイン & 暮らし', tagline: 'Pentikの陶器、木工品、キャンドル' },
      { name: '北欧グッズ', tagline: 'トナカイモチーフ、オーロラ、サンタクロース' },
    ],
  },
  es: {
    eyebrow: '¿Qué está buscando?',
    heading: 'Encuentre su favorito',
    cta: 'Ver boutiques',
    cats: [
      { name: 'Cuchillos y artesanía', tagline: 'Acero finlandés, abedul rizado y asta de reno' },
      { name: 'Plata sami', tagline: 'Una tradición artesanal de miles de años' },
      { name: 'Sabores de Laponia', tagline: 'Mora ártica, reno, arándano. Sabores del norte' },
      { name: 'Lana y punto', tagline: 'Cálido y bien hecho, para durar' },
      { name: 'Diseño y hogar', tagline: 'Cerámica Pentik, piezas de madera, velas' },
      { name: 'Recuerdos', tagline: 'Motivos de reno, auroras, Papá Noel' },
    ],
  },
  'pt-BR': {
    eyebrow: 'O que você procura?',
    heading: 'Encontre seu favorito',
    cta: 'Ver boutiques',
    cats: [
      { name: 'Facas e artesanato', tagline: 'Aço finlandês, bétula crespa e chifre de rena' },
      { name: 'Prata sámi', tagline: 'Uma tradição artesanal de milhares de anos' },
      { name: 'Sabores da Lapônia', tagline: 'Amora-ártica, rena, mirtilo. Sabores do norte' },
      { name: 'Lã e tricô', tagline: 'Quente e bem-feito, para durar' },
      { name: 'Design e casa', tagline: 'Cerâmica Pentik, peças em madeira, velas' },
      { name: 'Lembrancinhas', tagline: 'Motivos de rena, aurora, Papai Noel' },
    ],
  },
  'zh-CN': {
    eyebrow: '您在寻找什么?',
    heading: '找到您的心头好',
    cta: '浏览精品店',
    cats: [
      { name: '刀具与工艺品', tagline: '芬兰钢、卷纹桦木、驯鹿角' },
      { name: '萨米银饰', tagline: '数千年的工艺传统' },
      { name: '拉普兰风味', tagline: '云莓、驯鹿肉、蓝莓。北欧的味道' },
      { name: '羊毛与针织', tagline: '温暖耐穿,精工细作' },
      { name: '设计与家居', tagline: 'Pentik 陶瓷、木艺、蜡烛' },
      { name: '北欧商品', tagline: '驯鹿主题、极光、圣诞老人' },
    ],
  },
  ko: {
    eyebrow: '무엇을 찾고 계신가요?',
    heading: '나만의 즐겨찾기를 찾아보세요',
    cta: '부티크 보기',
    cats: [
      { name: '푸코 & 공예품', tagline: '핀란드 강철, 컬리 자작나무, 순록 뿔' },
      { name: '사미 은세공', tagline: '수천 년의 공예 전통' },
      { name: '라플란드의 별미', tagline: '클라우드베리, 순록, 블루베리. 북유럽의 맛' },
      { name: '울 & 니트', tagline: '따뜻하고 정성껏 만들어져, 오래 사용할 수 있는 품질' },
      { name: '디자인 & 홈', tagline: 'Pentik 도자기, 목공예, 캔들' },
      { name: '기념품', tagline: '순록 모티프, 오로라, 산타클로스' },
    ],
  },
  fr: {
    eyebrow: 'Que recherchez-vous ?',
    heading: 'Trouvez votre favori',
    cta: 'Voir les boutiques',
    cats: [
      { name: 'Couteaux & artisanat', tagline: 'Acier finlandais, bouleau ronceux et bois de renne' },
      { name: 'Argent sami', tagline: "Une tradition d'artisanat vieille de milliers d'années" },
      { name: 'Saveurs de Laponie', tagline: 'Chicouté, renne, myrtille. Saveurs du Nord' },
      { name: 'Laine et tricots', tagline: 'Chaud et bien fait, pour durer' },
      { name: 'Design & maison', tagline: 'Céramique Pentik, objets en bois, bougies' },
      { name: 'Souvenirs', tagline: 'Motifs de renne, aurore boréale, Père Noël' },
    ],
  },
  it: {
    eyebrow: 'Cosa sta cercando?',
    heading: 'Trovi il Suo preferito',
    cta: 'Vedi le boutique',
    cats: [
      { name: 'Coltelli & artigianato', tagline: 'Acciaio finlandese, betulla riccia, corno di renna' },
      { name: 'Argento sami', tagline: 'Una tradizione artigianale millenaria' },
      { name: 'Sapori di Lapponia', tagline: 'Camemoro, renna, mirtillo. Sapori del nord' },
      { name: 'Lana e maglieria', tagline: 'Calda e ben fatta, per durare' },
      { name: 'Design e casa', tagline: 'Ceramiche Pentik, oggetti in legno, candele' },
      { name: 'Souvenir', tagline: 'Motivi di renna, aurora boreale, Babbo Natale' },
    ],
  },
  nl: {
    eyebrow: 'Waar bent u naar op zoek?',
    heading: 'Vind uw favoriet',
    cta: 'Bekijk boutiques',
    cats: [
      { name: 'Messen & ambacht', tagline: 'Fins staal, gevlamde berk en rendiergewei' },
      { name: 'Sami-zilver', tagline: 'Een ambachtelijke traditie van duizenden jaren oud' },
      { name: 'Smaken van Lapland', tagline: 'Kruipbraam, rendier, bosbes. Smaken uit het noorden' },
      { name: 'Wol & gebreid', tagline: 'Warm en goed gemaakt, om lang te dragen' },
      { name: 'Design & wonen', tagline: 'Pentik-keramiek, houtwerk, kaarsen' },
      { name: 'Souvenirs', tagline: 'Rendiermotieven, noorderlicht, Kerstman' },
    ],
  },
  sv: {
    eyebrow: 'Vad letar du efter?',
    heading: 'Hitta din favorit',
    cta: 'Se butikerna',
    cats: [
      { name: 'Knivar & hantverk', tagline: 'Finskt stål, masurbjörk och renhorn' },
      { name: 'Samiskt silver', tagline: 'En hantverkstradition som är tusentals år gammal' },
      { name: 'Smaker från Lappland', tagline: 'Hjortron, ren och blåbär. Nordens rena smaker.' },
      { name: 'Ull & stickat', tagline: 'Varmt och välgjort, byggt för att hålla.' },
      { name: 'Design & inredning', tagline: 'Pentik-keramik, träföremål, ljus' },
      { name: 'Souvenirer', tagline: 'Renmotiv, norrsken, jultomten' },
    ],
  },
} as const;

export default function Categories() {
  const { lang } = useLang();
  const t = COPY[lang];

  return (
    <section id="herkut" className="py-20 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-sm tracking-[0.2em] uppercase text-amber font-body font-bold">
            {t.eyebrow}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl mt-2 text-night [text-wrap:balance]">
            {t.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.cats.map((cat, i) => (
            <a
              key={cat.name}
              href="#putiikit"
              className="group relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <GradientPlaceholder theme={THEMES[i]} imgSrc={IMG_SLUGS[i]} ariaLabel={cat.name} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading text-2xl text-white mb-1">{cat.name}</h3>
                <p className="text-white/70 text-sm">{cat.tagline}</p>
                <span className="inline-flex items-center gap-1 text-amber-light text-sm font-bold mt-3 group-hover:gap-2 transition-all">
                  {t.cta} <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
