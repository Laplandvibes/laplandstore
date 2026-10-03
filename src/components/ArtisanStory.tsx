import { useLang } from '../lang';
import { BOUTIQUES } from '../data/boutiques.generated';
import GradientPlaceholder from './GradientPlaceholder';

const COPY = {
  fi: {
    eyebrow: 'Tarinat tuotteiden takana',
    titleA: 'Kun ostat Lapista,',
    titleB: 'tuet elämäntapaa.',
    body:
      'Jokaisella puukolla, korulla ja hillopurkilla on tarina. Tekijä, joka oppi taidon isovanhemmiltaan. Paja napapiirin pohjoispuolella. Yritys, jolle Lappi on koti eikä lavaste. Joka putiikki tällä sivulla on lappilainen, ja lähteet ovat näkyvillä.',
    facts: 'Hakemistossa on {n} lappilaista putiikkia, ja {m} niistä toimittaa myös verkkokaupasta.',
    browse: 'Selaa putiikkeja',
  },
  en: {
    eyebrow: 'Stories behind the products',
    titleA: 'When you buy from Lapland,',
    titleB: 'you support a way of life.',
    body:
      'Every knife, piece of jewellery and jar of preserve carries a story. A maker who learned the craft from their grandparents. A workshop north of the Arctic Circle. A business that treats Lapland as home, not as a backdrop. Every boutique on this page is a real Lapland business, and we keep the sources on file.',
    facts: 'The directory lists {n} Lapland boutiques, and {m} of them also ship from an online store.',
    browse: 'Browse the boutiques',
  },
  de: {
    eyebrow: 'Geschichten hinter den Produkten',
    titleA: 'Wer in Lappland einkauft,',
    titleB: 'unterstützt eine Lebensweise.',
    body:
      'Jedes Messer, jedes Schmuckstück, jedes Glas Konfitüre erzählt eine Geschichte: von einer Handwerkerin, die das Handwerk von den Großeltern gelernt hat, von einer Werkstatt nördlich des Polarkreises, von einem Betrieb, für den Lappland Alltag ist und keine Kulisse. Alle Boutiquen auf dieser Seite werden redaktionell geprüft, die Quellen sind dokumentiert.',
    facts: 'Das Verzeichnis führt {n} Boutiquen aus Lappland, {m} davon mit eigenem Online-Shop.',
    browse: 'Boutiquen ansehen',
  },

  ja: {
    eyebrow: '商品の背景にある物語',
    titleA: 'ラップランドでお買い物をすることは、',
    titleB: 'ここでの暮らしを支えることです。',
    body:
      'すべてのナイフ、すべての装飾品、すべての保存食の瓶には物語があります：祖父母から技を受け継いだ職人、北極圏より北の工房、ラップランドを背景ではなく日常の家として扱う事業者の物語です。このページの各ブティックは独立して検証され、出典も記録に残しています。',
    facts: 'ディレクトリには{n}軒のラップランドのブティックを掲載しており、そのうち{m}軒はオンラインショップも運営しています。',
    browse: 'ブティックを見る',
  },
  es: {
    eyebrow: 'Historias detrás de los productos',
    titleA: 'Cuando usted compra en Laponia,',
    titleB: 'sostiene una forma de vida.',
    body:
      'Cada cuchillo, cada joya y cada tarro de mermelada llevan una historia: la de un artesano que aprendió el oficio de sus abuelos, la de un taller al norte del Círculo Polar Ártico, la de una empresa para la que Laponia es hogar y no decorado. Cada boutique de esta página se verifica de forma independiente, con las fuentes documentadas.',
    facts: 'El directorio reúne {n} boutiques de Laponia, y {m} de ellas también envían desde su tienda en línea.',
    browse: 'Ver las boutiques',
  },
  'pt-BR': {
    eyebrow: 'As histórias por trás dos produtos',
    titleA: 'Quando você compra na Lapônia,',
    titleB: 'você sustenta um modo de vida.',
    body:
      'Cada faca, cada joia, cada vidro de geleia carrega uma história: a do artesão que aprendeu o ofício com os avós, a da oficina ao norte do Círculo Polar, a do negócio para o qual a Lapônia é casa, não cenário. Cada boutique desta página é verificada de forma independente, com as fontes documentadas.',
    facts: 'O diretório reúne {n} boutiques da Lapônia, e {m} delas também vendem em loja on-line.',
    browse: 'Ver as boutiques',
  },
  'zh-CN': {
    eyebrow: '产品背后的故事',
    titleA: '当您在拉普兰购物时，',
    titleB: '您支持的是一种生活方式。',
    body:
      '每一把刀、每一件饰品、每一罐果酱都承载着故事：从祖辈传承手艺的工匠、北极圈以北的工作坊，以及把拉普兰当作家园而非背景板的小企业。本页面的每家精品店都经过独立核实，资料来源均有记录。',
    facts: '目录收录了 {n} 家拉普兰精品店，其中 {m} 家也提供网上商店。',
    browse: '浏览精品店',
  },
  ko: {
    eyebrow: '상품 뒤에 숨겨진 이야기',
    titleA: '라플란드에서 구매하실 때,',
    titleB: '하나의 삶의 방식을 지켜 나가는 데 힘을 보태는 것입니다.',
    body:
      '칼 한 자루, 장신구 하나, 잼 한 병마다 이야기가 담겨 있습니다: 조부모로부터 기술을 배운 장인, 북극권 이북의 공방, 라플란드를 배경이 아닌 일상의 터전으로 여기는 사업체. 이 페이지의 모든 부티크는 독립적으로 검증되었으며 출처가 기록되어 있습니다.',
    facts: '디렉터리에는 라플란드 부티크 {n}곳이 실려 있으며, 그중 {m}곳은 온라인 상점도 운영합니다.',
    browse: '부티크 보기',
  },
  fr: {
    eyebrow: 'Les histoires derrière les produits',
    titleA: 'Quand vous achetez en Laponie,',
    titleB: 'vous soutenez un mode de vie.',
    body:
      "Chaque couteau, chaque bijou, chaque pot de confiture porte une histoire : celle d'un artisan qui a appris le métier de ses grands-parents, celle d'un atelier au nord du cercle polaire, celle d'une entreprise pour qui la Laponie est un chez-soi et non un décor. Chaque boutique de cette page est vérifiée de façon indépendante, avec ses sources documentées.",
    facts: 'L’annuaire recense {n} boutiques de Laponie, dont {m} disposent aussi d’une boutique en ligne.',
    browse: 'Voir les boutiques',
  },
  it: {
    eyebrow: 'Le storie dietro i prodotti',
    titleA: 'Quando acquista in Lapponia,',
    titleB: 'sostiene un modo di vivere.',
    body:
      "Ogni coltello, ogni gioiello, ogni vasetto di marmellata porta una storia: quella di un artigiano che ha imparato il mestiere dai nonni, di un laboratorio a nord del Circolo Polare, di un'attività per cui la Lapponia è casa, non scenografia. Ogni boutique di questa pagina è verificata in modo indipendente, con le fonti documentate.",
    facts: 'L’elenco raccoglie {n} boutique della Lapponia, {m} delle quali hanno anche un negozio online.',
    browse: 'Vedi le boutique',
  },
  nl: {
    eyebrow: 'De verhalen achter de producten',
    titleA: 'Wanneer u in Lapland koopt,',
    titleB: 'steunt u een manier van leven.',
    body:
      'Elk mes, elk sieraad, elke pot jam draagt een verhaal: van een maker die het ambacht leerde van zijn grootouders, van een werkplaats ten noorden van de poolcirkel, van een bedrijf dat Lapland als thuis ziet en niet als decor. Elke boutique op deze pagina is onafhankelijk geverifieerd, met de bronnen gedocumenteerd.',
    facts: 'De gids bevat {n} Laplandse boetieks, waarvan er {m} ook een webshop hebben.',
    browse: 'Bekijk de boetieks',
  },
  sv: {
    eyebrow: 'Berättelserna bakom produkterna',
    titleA: 'När du köper från Lappland',
    titleB: 'stödjer du ett sätt att leva.',
    body:
      'Varje kniv, varje smycke och varje burk sylt bär en berättelse. En hantverkare som lärde sig yrket av sina mor- och farföräldrar. En verkstad norr om polcirkeln. Ett företag som har Lappland som hem, inte som kuliss. Varje butik på den här sidan är ett verkligt Lappland-företag, och vi sparar källorna.',
    facts: 'Katalogen listar {n} butiker i Lappland, och {m} av dem har även en webbutik.',
    browse: 'Se butikerna',
  },
} as const;

/* ja/zh/ko: otsikon kaksi lausetta ovat 2–3 kertaa latinalaisten kielten mittaisia, joten 60 px:n otsikko 672 px:n
 * palstassa jatkui 3–5 riville ja katkesi kesken sanan ("ラップランドでお買 / い物をすることは、", mitattu 3.10.2026).
 * sm+: koko = clamp(2rem, palstaan mahtuva, suunniteltu), keep-all. Latinalaiset kielet ennallaan (mahtuvat jo).
 * ko:n jälkimmäinen lause (26 em) mahtuisi riville vasta 25 px:llä, joten se saa kaksi tasattua riviä (~45 px) —
 * kolme riviä yhteensä, kunnes lyhyempi natiiviteksti on tarkistettu. */
const CJK_CHAR = /[　-ヿ㐀-鿿가-힯＀-￯]/;
/** Rivin leveysarvio em-yksiköinä: CJK-merkki ja -välimerkki (、。) 1,05 em, välilyönti 0,25, muu 0,4. */
const emWidth = (s: string): number =>
  [...s].reduce((w, ch) => w + (CJK_CHAR.test(ch) ? 1.05 : ch === ' ' ? 0.25 : 0.4), 0);
/** Tätä pidempi lause jaetaan kahdelle riville: 672 px / 21 em = 32 px, pienin sallittu koko. */
const ONE_LINE_MAX_EM = 21;

export default function ArtisanStory() {
  // 🔴 Luvut luetaan datasta. Kovakoodattuna ne ajautuivat erilleen:
  // sivu lupasi 16 putiikkia kun niitä oli 15.
  const onlineCount = BOUTIQUES.filter((b) => b.hasOnlineStore).length;
  const { lang } = useLang();
  const t = COPY[lang];
  const cjk = CJK_CHAR.test(t.titleA);
  const emB = emWidth(t.titleB);
  // 1,5 em varaa: kahden rivin katko osuu sanaväliin, ei tasan puoliväliin.
  const h2Em = Math.max(emWidth(t.titleA), emB > ONE_LINE_MAX_EM ? emB / 2 + 1.5 : emB);
  const facts = t.facts.replace('{n}', String(BOUTIQUES.length)).replace('{m}', String(onlineCount));

  return (
    <section id="tarina" className="relative py-28 overflow-hidden">
      <GradientPlaceholder
        theme="wood"
        showIcon={false}
        imgSrc="/img/artisan-hands.jpg"
        aiGenerated
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
            : lang === 'sv'
            ? 'En hantverkare från Lappland i arbete'
            : 'A Lapland artisan at work'
        }
      />
      {/* Side-vignette: dark on left where text sits, lets the image breathe on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-night/85 via-night/50 to-night/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-night/20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 text-white">
        {/* @container: CJK-otsikon koko lasketaan tämän palstan leveydestä (100cqi). */}
        <div className="@container max-w-2xl">
          <span className="text-sm tracking-[0.3em] uppercase text-amber-light font-bold">
            {t.eyebrow}
          </span>

          <h2
            className={`font-heading text-4xl mt-4 leading-tight [text-wrap:balance] ${cjk ? `${lang === 'ko' ? '[word-break:keep-all]' : 'sm:[word-break:keep-all]'} [overflow-wrap:anywhere] sm:[--h2-max:3rem] md:[--h2-max:3.75rem] sm:[font-size:clamp(2rem,calc(100cqi/var(--h2-em)),var(--h2-max))]` : 'sm:text-5xl md:text-6xl'}`}
            style={cjk ? { ['--h2-em' as string]: h2Em.toFixed(2) } : undefined}
          >
            {/* Puhelimessa (kiinteä 36 px) ja/zh-lause ei mahdu riville, ja keep-all jättäisi välimerkin yksin
                ("购物时 / ，"); ko katkeaa sanavälistä kaikilla leveyksillä. */}
            {/* block (ei <br> + inline): jälkimmäinen lause tasataan omana lohkonaan, jos se rivittyy. */}
            {t.titleA}
            <span className="block text-amber-light">{t.titleB}</span>
          </h2>

          <p className="text-white/85 text-lg mt-8 leading-relaxed [text-wrap:pretty]">
            {t.body}
          </p>
          {/* Luvut yhtenä virkkeenä tekstin jatkona, ei kolmena lasilaattana. Vesa 6.9.:
              "tämä osio on lukujen osalta visuaalisesti todella AI slop". Laatat olivat
              geneerinen laskeutumissivun kuvio, ja niiden ensimmäinen luku ("100+ vuotta
              käsityöperinnettä") oli väite, jolle ei ole lähdettä — se on pudotettu
              (CLAUDE.md: ei keksittyjä tilastoja). Jäljelle jäävät kaksi lukua tulevat
              datasta ja johtavat hakemistoon, jossa ne voi tarkistaa. */}
          <p className="text-white/85 text-lg mt-6 leading-relaxed [text-wrap:pretty]">
            {facts.split(/(\d+)/).map((part, i) =>
              /^\d+$/.test(part) ? (
                <b key={i} className="font-semibold text-amber-light">{part}</b>
              ) : (
                part
              ),
            )}
          </p>
          <a
            href="#putiikit"
            className="mt-7 inline-flex min-h-[44px] items-center gap-2 rounded-full border border-amber-light/70 bg-night/30 px-5 text-sm font-semibold text-amber-light shadow-[0_12px_28px_-14px_rgba(0,0,0,0.7)] backdrop-blur-sm transition-[background-color,color,transform] duration-150 hover:-translate-y-0.5 hover:bg-amber-light hover:text-night active:scale-[0.97]"
          >
            {t.browse}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
