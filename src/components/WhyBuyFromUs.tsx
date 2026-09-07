import { ShieldCheck, Truck, Heart, Gift } from 'lucide-react';
import { useLang } from '../lang';

/**
 * Neljä lupausta etusivun yläosassa.
 *
 * 🔴🔴 Miksi kortit 1 ja 3 sanotaan näin (Vesa 7.9.2026): "eikö nuo väitteet
 * tue paikallisia ole tässä vaiheessa aika väärin koska ohjaamme Haltiin jne."
 * Hän oli oikeassa, ja vika oli katteeton lupaus eikä sanamuoto:
 *
 *  - Kortti 3 lupasi "Ei välikäsiä" sivulla, jonka kaupallinen sisältö on
 *    pääosin provisiollisia merkkimainoksia (Halti, Sukkamestarit, Finlayson,
 *    Nanso, Kalevala, Nordic Buddies, Scandinavian Outdoor, Suomikauppa,
 *    IVALO). Niistä me OLEMME välikäsi: otamme komission. Väite oli siis
 *    epätosi juuri siinä kohtaa sivua, jossa raha liikkuu, ja se oli lisäksi
 *    ristiriidassa saman sivun oman AffiliateDisclosuren kanssa.
 *  - Kortti 1 lupasi että "mukaan pääsee vain lappilaisia yrityksiä", vaikka
 *    yksikään yllä luetelluista merkeistä ei ole lappilainen. Lupaus koski
 *    aina vain putiikkihakemistoa (18 putiikkia, kaikki Lapissa) — nyt se
 *    myös sanoo niin.
 *
 * Mikä on totta ja siksi jää: putiikkilinkit menevät giftsin hakemistoon ja
 * sieltä yrittäjän omaan kauppaan, eikä yhdellekään putiikille ole reittiä
 * Workerin PARTNERS-kartassa ⇒ niistä emme saa senttiäkään. Kortti 3 kertoo
 * nyt molemmat puolet: mistä emme ota provisiota ja mistä otamme.
 *
 * 🔴 Älä palauta ehdotonta muotoa ("suoraan käsityöläiselle", "ei välikäsiä")
 * niin kauan kuin sivulla on yksikin affiliate-CTA. Kuluttajansuojalain 2:6 §
 * ja UCPD kieltävät olennaisesti harhaanjohtavan tiedon myös silloin, kun se
 * on vain vanhentunut.
 */
const COPY = {
  fi: [
    {
      title: 'Aitoja tuotteita',
      body: 'Käymme jokaisen putiikin läpi käsin. Hakemistoon pääsee vain lappilaisia yrityksiä, ja lähteet ovat näkyvillä.',
    },
    {
      title: 'Tilaa kotiin',
      body: '9 putiikkia pitää verkkokauppaa. Tilaat suoraan kotiovellesi, monet myös ulkomaille.',
    },
    {
      title: 'Tue paikallisia',
      body: 'Putiikeista tilaat suoraan yrittäjältä, emmekä ota siitä provisiota. Merkkituotteiden mainoksista saamme komission, ja se kerrotaan jokaisen kohdalla.',
    },
    {
      title: 'Täydellinen lahja',
      body: 'Lapista tuotu lahja tai matkamuisto on aina erityinen. Moni putiikki tarjoaa lahjapakkauksen.',
    },
  ],
  en: [
    {
      title: 'Authentic products',
      body: 'We check every boutique by hand. Only Lapland-based businesses make the directory, and we keep the sources on file.',
    },
    {
      title: 'Order to your door',
      body: 'Nine boutiques run their own online store. You order direct, and several of them ship outside Finland too.',
    },
    {
      title: 'Support locals',
      body: 'Order from a boutique and you buy straight from the owner; we take no cut. On the brand ads we earn a commission, and we say so at every one.',
    },
    {
      title: 'A souvenir that lasts',
      body: 'A gift or souvenir from Lapland keeps telling its story. Many boutiques offer gift wrapping.',
    },
  ],
  de: [
    {
      title: 'Authentische Produkte',
      body: 'Jede Boutique wird redaktionell geprüft: Ins Verzeichnis kommen ausschließlich Betriebe aus Lappland, mit dokumentierten Quellen.',
    },
    {
      title: 'Lieferung nach Hause',
      body: 'Neun Boutiquen betreiben einen eigenen Online-Shop. Sie bestellen direkt, und mehrere versenden auch ins Ausland.',
    },
    {
      title: 'Regional einkaufen',
      body: 'In den Boutiquen bestellen Sie direkt beim Betrieb, ohne Provision für uns. Bei den Markenanzeigen erhalten wir eine Provision – das steht bei jeder dabei.',
    },
    {
      title: 'Geschenk und Souvenir',
      body: 'Ein Geschenk oder Souvenir aus Lappland erzählt weiter seine Geschichte. Viele Boutiquen bieten Geschenkverpackung an.',
    },
  ],

  ja: [
    {
      title: '本物の商品',
      body: '各ブティックは独立して検証済み。ガイドに掲載するのはラップランドに拠点を置く事業者のみで、出典も記録に残しています。',
    },
    {
      title: 'ご自宅まで配送',
      body: '9軒のブティックがオンラインショップを運営しています。直接ご注文でき、数軒はフィンランド国外へも発送します。',
    },
    {
      title: '地元を応援',
      body: 'ブティックへのご注文は事業者に直接届き、当サイトは手数料を受け取りません。ブランド広告経由のご購入では手数料を受け取り、その旨を各広告に明記しています。',
    },
    {
      title: '記憶に残る贈り物',
      body: 'ラップランド土産や贈り物は、その後も物語を語り続けます。多くのブティックでギフトラッピングをご用意しています。',
    },
  ],
  es: [
    { title: 'Productos auténticos', body: 'Cada boutique se verifica de forma independiente. Al directorio solo entran empresas de Laponia, con las fuentes documentadas.' },
    { title: 'Pida a domicilio', body: 'Nueve boutiques tienen tienda en línea: usted pide directamente, y varias envían también al extranjero.' },
    { title: 'Apoye lo local', body: 'En las boutiques compra directamente al negocio y nosotros no cobramos comisión. En los anuncios de marcas sí la recibimos, y lo indicamos en cada uno.' },
    { title: 'Un regalo que dura', body: 'Un regalo o recuerdo de Laponia sigue contando su historia. Muchas boutiques ofrecen empaquetado de regalo.' },
  ],
  'pt-BR': [
    { title: 'Produtos autênticos', body: 'Cada boutique é verificada de forma independente. No diretório entram somente empresas da Lapônia, com as fontes documentadas.' },
    { title: 'Peça para sua casa', body: 'Nove boutiques têm loja online: você pede direto, e várias também enviam para fora da Finlândia.' },
    { title: 'Apoie quem é local', body: 'Nas boutiques você compra direto do negócio e não ficamos com comissão. Nos anúncios de marcas recebemos comissão, e avisamos em cada um deles.' },
    { title: 'Uma lembrancinha que dura', body: 'Um presente ou lembrancinha da Lapônia continua contando sua história. Muitas boutiques oferecem embrulho para presente.' },
  ],
  'zh-CN': [
    { title: '正宗商品', body: '每家精品店都经过独立核实。指南只收录拉普兰本地企业，资料来源均有记录。' },
    { title: '送货到家', body: '九家精品店开设线上商店，可直接下单送到您家门口，其中数家也发往芬兰境外。' },
    { title: '支持本地', body: '在精品店下单，货款直接付给店家，我们不抽成。通过品牌广告购买时我们会获得佣金，每则广告都会注明。' },
    { title: '历久弥新的礼物', body: '来自拉普兰的礼物或纪念品会继续讲述它的故事。许多精品店提供礼品包装。' },
  ],
  ko: [
    { title: '정품 보장', body: '모든 부티크는 독립적으로 검증됩니다. 디렉터리에는 라플란드 사업자만 등재하며, 출처가 모두 기록되어 있습니다.' },
    { title: '자택으로 주문', body: '9개 부티크가 온라인 상점을 운영합니다. 직접 주문할 수 있고, 그중 몇 곳은 해외 배송도 합니다.' },
    { title: '현지인을 응원하세요', body: '부티크 주문은 사업자에게 바로 가고 저희는 수수료를 받지 않습니다. 브랜드 광고를 통한 구매에서는 수수료를 받으며, 광고마다 이를 밝힙니다.' },
    { title: '오래 남는 기념품', body: '라플란드에서 온 선물이나 기념품은 그 이야기를 계속 전해줍니다. 많은 부티크에서 선물 포장을 제공합니다.' },
  ],
  fr: [
    { title: 'Produits authentiques', body: 'Chaque boutique est vérifiée de façon indépendante. Seules des entreprises de Laponie entrent dans l\'annuaire, sources documentées.' },
    { title: 'Livraison à domicile', body: 'Neuf boutiques disposent d\'une boutique en ligne : vous commandez directement, et plusieurs expédient aussi à l\'étranger.' },
    { title: "Soutenir le local", body: 'Dans les boutiques, vous commandez directement auprès de l\'entreprise, sans commission pour nous. Sur les annonces de marques, nous en percevons une et nous l\'indiquons à chaque fois.' },
    { title: 'Un souvenir qui dure', body: 'Un cadeau ou un souvenir de Laponie continue de raconter son histoire. De nombreuses boutiques proposent un emballage cadeau.' },
  ],
  it: [
    { title: 'Prodotti autentici', body: 'Ogni boutique è verificata in modo indipendente. Nella guida entrano solo attività della Lapponia, con fonti documentate.' },
    { title: 'Consegna a domicilio', body: 'Nove boutique hanno un negozio online: ordina direttamente, e diverse spediscono anche all\'estero.' },
    { title: 'Sostenga il locale', body: 'Nelle boutique ordina direttamente dall\'attività, senza commissioni per noi. Sugli annunci dei marchi riceviamo una commissione e lo indichiamo ogni volta.' },
    { title: 'Un ricordo che dura', body: 'Un regalo o souvenir dalla Lapponia continua a raccontare la sua storia. Molte boutique offrono la confezione regalo.' },
  ],
  nl: [
    { title: 'Authentieke producten', body: 'Elke boutique wordt onafhankelijk geverifieerd. Alleen Laplandse ondernemingen komen in de gids, met bronnen gedocumenteerd.' },
    { title: 'Thuisbezorging', body: 'Negen boutiques hebben een online winkel: u bestelt direct, en verschillende verzenden ook naar het buitenland.' },
    { title: 'Steun lokale makers', body: 'Bij de boutiques bestelt u rechtstreeks bij de ondernemer, zonder commissie voor ons. Bij merkadvertenties krijgen we wel commissie, en dat vermelden we er telkens bij.' },
    { title: 'Een souvenir dat blijft', body: 'Een geschenk of souvenir uit Lapland blijft zijn verhaal vertellen. Veel boutiques bieden cadeauverpakking.' },
  ],
  sv: [
    { title: 'Äkta produkter', body: 'Vi går igenom varje butik för hand. Bara företag i Lappland kommer med i guiden, och vi sparar källorna.' },
    { title: 'Beställ hem till dörren', body: 'Nio butiker driver egen webbutik. Du beställer direkt, och flera av dem skickar även utanför Finland.' },
    { title: 'Stöd lokala', body: 'Hos butikerna beställer du direkt av företagaren, utan provision till oss. På varumärkesannonserna får vi provision, och det står vid varje annons.' },
    { title: 'En souvenir som håller', body: 'En present eller souvenir från Lappland fortsätter berätta sin historia. Många butiker erbjuder presentinslagning.' },
  ],
} as const;

const ICONS = [ShieldCheck, Truck, Heart, Gift] as const;
const COLORS = [
  'bg-amber/10 text-amber',
  'bg-forest/10 text-forest',
  'bg-rose-100 text-rose-600',
  'bg-violet-100 text-violet-600',
] as const;

export default function WhyBuyFromUs() {
  const { lang } = useLang();
  const reasons = COPY[lang];

  return (
    <section className="py-16 px-4 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {reasons.map((r, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={r.title}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center flex flex-col h-full"
              >
                <div className={`w-14 h-14 ${COLORS[i]} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl text-night mb-2 [text-wrap:balance]">{r.title}</h3>
                <p className="text-warm-gray text-sm leading-relaxed [text-wrap:pretty]">{r.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
