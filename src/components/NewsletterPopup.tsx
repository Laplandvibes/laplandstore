import SharedNewsletterPopup, {
  type NewsletterPopupDict,
} from '../../../shared/NewsletterPopup';
import { useLang } from '../lang';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY as string | undefined;

const FI_DICT: NewsletterPopupDict = {
  successHeadline: 'Tervetuloa mukaan!',
  successBody:
    'Tervetuloviesti tulee kohta sähköpostiisi, ja seuraavatkin kirjeet samaan osoitteeseen.',
  alreadyHeadline: 'Olet jo listalla',
  alreadyBody:
    'Sähköpostisi on jo mukana, kiitos että pysyt mukana. Lapin kuulumiset jatkavat kulkuaan postilaatikkoosi.',
  emailPlaceholder: 'Sähköpostiosoite',
  submit: 'Tilaa Lapin uutiskirje',
  loading: 'Tilataan…',
  later: 'Ehkä myöhemmin',
  closeAria: 'Sulje',
  closeLabel: 'Sulje',
  trust:
    'Lähetämme vain kun on jotain oikeasti kerrottavaa. Tilauksen voi perua koska tahansa. Sähköpostia ei jaeta kenellekään.',
  errorGeneric: 'Tilaus ei mennyt läpi. Kokeile vielä kerran.',
  codeLabel: 'Sinun koodisi',
  codeFootnote:
    'Laita koodi talteen, se on sinun. Sillä saat alennuksen omasta verkkokaupasta heti kun se avataan, ja kumppaniliikkeissä sitä mukaa kun yhteistyödiilit aukeavat.',
  codeCopied: 'Kopioitu!',
  codeCopyAria: 'Kopioi koodi leikepöydälle',
};

const EN_DICT: NewsletterPopupDict = {
  successHeadline: "You're in.",
  successBody:
    'Check your inbox. The welcome email is on its way, and future letters will land there too.',
  alreadyHeadline: 'Already on the list',
  alreadyBody:
    "You're already subscribed, so the Lapland updates will keep coming.",
  emailPlaceholder: 'Your email address',
  submit: 'Subscribe',
  loading: 'Subscribing…',
  later: 'Maybe later',
  closeAria: 'Close',
  closeLabel: 'Close',
  trust:
    "We only send when there's something actually worth telling you about. Unsubscribe anytime. Your email is never shared.",
  errorGeneric: 'Subscription failed. Please try again.',
  codeLabel: 'Your subscriber code',
  codeFootnote:
    'Save this code. It is reserved for you across the #LaplandVibes network. It works on the LaplandVibes webshop the moment it opens, and on partner deals as they are negotiated.',
  codeCopied: 'Copied!',
  codeCopyAria: 'Copy code to clipboard',
};

const DE_DICT: NewsletterPopupDict = {
  successHeadline: 'Willkommen an Bord.',
  successBody:
    'Bitte schauen Sie in Ihr Postfach — die Begrüßungsnachricht ist unterwegs, weitere Briefe folgen.',
  alreadyHeadline: 'Bereits eingetragen',
  alreadyBody:
    'Sie sind bereits angemeldet — die Lappland-Nachrichten kommen weiter zu Ihnen.',
  emailPlaceholder: 'Ihre E-Mail-Adresse',
  submit: 'Newsletter abonnieren',
  loading: 'Wird abonniert …',
  later: 'Später vielleicht',
  closeAria: 'Schließen',
  closeLabel: 'Schließen',
  trust:
    'Wir senden nur, wenn es etwas wirklich Mitteilenswertes gibt. Jederzeit kündbar. Ihre Adresse wird nicht weitergegeben.',
  errorGeneric: 'Anmeldung fehlgeschlagen. Bitte erneut versuchen.',
  codeLabel: 'Ihr Abo-Code',
  codeFootnote:
    'Bitte bewahren Sie diesen Code auf. Er ist im gesamten #LaplandVibes-Netzwerk reserviert — gültig im LaplandVibes-Shop ab dem ersten Tag und bei Partnern, sobald die Kooperationen vereinbart sind.',
  codeCopied: 'Kopiert!',
  codeCopyAria: 'Code in die Zwischenablage kopieren',
};

const KO_DICT: NewsletterPopupDict = {
  successHeadline: '구독이 완료되었습니다.',
  successBody:
    '받은편지함을 확인해 주세요 — 환영 메일이 발송되었으며, 이후의 소식도 같은 주소로 도착합니다.',
  alreadyHeadline: '이미 구독자 명단에 있으십니다',
  alreadyBody:
    '이미 구독 중이십니다 — 라플란드 소식이 계속 전달됩니다.',
  emailPlaceholder: '이메일 주소',
  submit: '뉴스레터 구독하기',
  loading: '등록 중…',
  later: '나중에',
  closeAria: '닫기',
  closeLabel: '닫기',
  trust:
    '정말 알려드릴 만한 내용이 있을 때만 보내드립니다. 언제든 구독을 해지하실 수 있으며, 이메일은 외부에 공유되지 않습니다.',
  errorGeneric: '구독에 실패했습니다. 다시 시도해 주세요.',
  codeLabel: '구독자 코드',
  codeFootnote:
    '이 코드를 보관해 주세요. #LaplandVibes 네트워크 전체에서 회원님 전용으로 예약되어 있습니다 — LaplandVibes 온라인 상점이 오픈하는 날부터 사용 가능하며, 파트너 매장에서도 협업이 체결되는 대로 적용됩니다.',
  codeCopied: '복사됨!',
  codeCopyAria: '코드를 클립보드에 복사',
};

const FR_DICT: NewsletterPopupDict = {
  successHeadline: 'Bienvenue !',
  successBody:
    "Vérifiez votre boîte de réception — l'e-mail de bienvenue est en route et les prochaines lettres arriveront à la même adresse.",
  alreadyHeadline: 'Déjà sur la liste',
  alreadyBody:
    'Vous êtes déjà inscrit(e) — les actualités de Laponie continueront de vous parvenir.',
  emailPlaceholder: 'Votre adresse e-mail',
  submit: "S'abonner à la newsletter",
  loading: 'Inscription…',
  later: 'Peut-être plus tard',
  closeAria: 'Fermer',
  closeLabel: 'Fermer',
  trust:
    "Nous envoyons uniquement quand il y a vraiment quelque chose à dire. Désabonnement à tout moment. Votre adresse n'est jamais partagée.",
  errorGeneric: "L'inscription a échoué. Veuillez réessayer.",
  codeLabel: "Votre code d'abonné(e)",
  codeFootnote:
    "Conservez ce code. Il vous est réservé sur tout le réseau #LaplandVibes — valable sur la boutique LaplandVibes dès son ouverture, et chez les partenaires au fur et à mesure des accords.",
  codeCopied: 'Copié !',
  codeCopyAria: 'Copier le code dans le presse-papiers',
};

const IT_DICT: NewsletterPopupDict = {
  successHeadline: 'È a bordo.',
  successBody:
    'Controlli la Sua casella di posta — l\'e-mail di benvenuto è in arrivo e le prossime newsletter arriveranno allo stesso indirizzo.',
  alreadyHeadline: 'Già nella lista',
  alreadyBody:
    'È già iscritto/a — le notizie dalla Lapponia continueranno ad arrivare.',
  emailPlaceholder: 'Il Suo indirizzo e-mail',
  submit: 'Iscriviti alla newsletter',
  loading: 'Iscrizione…',
  later: 'Magari più tardi',
  closeAria: 'Chiudi',
  closeLabel: 'Chiudi',
  trust:
    "Inviamo solo quando c'è davvero qualcosa da raccontare. Si disiscriva quando vuole. Il Suo indirizzo non viene condiviso.",
  errorGeneric: 'Iscrizione non riuscita. Riprovi.',
  codeLabel: 'Il Suo codice da iscritto',
  codeFootnote:
    "Conservi questo codice. È riservato a Lei sull'intera rete #LaplandVibes — valido sul negozio LaplandVibes dal giorno dell'apertura, e presso i partner man mano che gli accordi vengono chiusi.",
  codeCopied: 'Copiato!',
  codeCopyAria: 'Copia il codice negli appunti',
};

const NL_DICT: NewsletterPopupDict = {
  successHeadline: 'U bent erbij.',
  successBody:
    'Bekijk uw inbox — de welkomstmail is onderweg en toekomstige brieven komen op hetzelfde adres aan.',
  alreadyHeadline: 'U staat al op de lijst',
  alreadyBody:
    'U bent al ingeschreven — de Lapland-updates blijven binnenkomen.',
  emailPlaceholder: 'Uw e-mailadres',
  submit: 'Schrijf in voor de nieuwsbrief',
  loading: 'Inschrijven…',
  later: 'Misschien later',
  closeAria: 'Sluiten',
  closeLabel: 'Sluiten',
  trust:
    'We sturen alleen als er echt iets te vertellen is. Op elk moment uit te schrijven. Uw adres wordt nooit gedeeld.',
  errorGeneric: 'Inschrijven mislukt. Probeer het opnieuw.',
  codeLabel: 'Uw abonneecode',
  codeFootnote:
    'Bewaar deze code. Hij is voor u gereserveerd binnen het hele #LaplandVibes-netwerk — geldig in de LaplandVibes-winkel zodra deze opent, en bij partners zodra de samenwerkingen rond zijn.',
  codeCopied: 'Gekopieerd!',
  codeCopyAria: 'Kopieer code naar klembord',
};

const JA_DICT: NewsletterPopupDict = {
  successHeadline: 'ご登録ありがとうございます。',
  successBody:
    '受信トレイをご確認ください — ウェルカムメールをお送りしました。今後のお便りも同じアドレスに届きます。',
  alreadyHeadline: 'すでにご登録済みです',
  alreadyBody:
    'すでにご購読いただいています — ラップランドのお便りはこれからもお届けします。',
  emailPlaceholder: 'メールアドレス',
  submit: 'ニュースレターを購読する',
  loading: '登録中…',
  later: 'あとで',
  closeAria: '閉じる',
  closeLabel: '閉じる',
  trust:
    '本当にお伝えしたいことがあるときだけお送りします。いつでも配信を停止できます。メールアドレスを第三者に渡すことはありません。',
  errorGeneric: '登録に失敗しました。もう一度お試しください。',
  codeLabel: 'あなたの購読者コード',
  codeFootnote:
    'このコードを保管してください。#LaplandVibes ネットワーク全体であなた専用に確保されています — LaplandVibes ウェブショップのオープン初日からご利用いただけ、提携店でも提携が成立し次第ご利用いただけます。',
  codeCopied: 'コピーしました！',
  codeCopyAria: 'コードをクリップボードにコピー',
};

const ES_DICT: NewsletterPopupDict = {
  successHeadline: 'Ya está dentro.',
  successBody:
    'Revise su bandeja de entrada — el correo de bienvenida está en camino y las próximas cartas llegarán a la misma dirección.',
  alreadyHeadline: 'Ya está en la lista',
  alreadyBody:
    'Ya está suscrito/a — las novedades de Laponia seguirán llegándole.',
  emailPlaceholder: 'Su dirección de correo electrónico',
  submit: 'Suscribirse al boletín',
  loading: 'Suscribiendo…',
  later: 'Quizás más tarde',
  closeAria: 'Cerrar',
  closeLabel: 'Cerrar',
  trust:
    'Solo escribimos cuando hay algo que de verdad merece la pena contar. Puede darse de baja cuando quiera. Su correo nunca se comparte.',
  errorGeneric: 'La suscripción no se pudo completar. Inténtelo de nuevo.',
  codeLabel: 'Su código de suscriptor/a',
  codeFootnote:
    'Guarde este código. Está reservado para usted en toda la red #LaplandVibes — válido en la tienda LaplandVibes desde el día de su apertura, y en los socios a medida que se cierran las colaboraciones.',
  codeCopied: '¡Copiado!',
  codeCopyAria: 'Copiar el código al portapapeles',
};

const PT_BR_DICT: NewsletterPopupDict = {
  successHeadline: 'Pronto, você está dentro.',
  successBody:
    'Confira sua caixa de entrada — o e-mail de boas-vindas está a caminho e as próximas mensagens chegarão no mesmo endereço.',
  alreadyHeadline: 'Você já está na lista',
  alreadyBody:
    'Você já é assinante — as novidades da Lapônia vão continuar chegando.',
  emailPlaceholder: 'Seu endereço de e-mail',
  submit: 'Assinar a newsletter',
  loading: 'Assinando…',
  later: 'Talvez mais tarde',
  closeAria: 'Fechar',
  closeLabel: 'Fechar',
  trust:
    'Só enviamos quando há algo que realmente vale a pena contar. Você pode cancelar a qualquer momento. Seu e-mail nunca é compartilhado.',
  errorGeneric: 'Não foi possível concluir a assinatura. Tente novamente.',
  codeLabel: 'Seu código de assinante',
  codeFootnote:
    'Guarde este código. Ele está reservado para você em toda a rede #LaplandVibes — válido na loja LaplandVibes desde o dia da inauguração e nos parceiros à medida que as colaborações são fechadas.',
  codeCopied: 'Copiado!',
  codeCopyAria: 'Copiar o código para a área de transferência',
};

const ZH_CN_DICT: NewsletterPopupDict = {
  successHeadline: '订阅成功。',
  successBody:
    '请查收您的收件箱 — 欢迎邮件已经发出,今后的来信也会发送到同一地址。',
  alreadyHeadline: '您已在订阅名单中',
  alreadyBody:
    '您已经订阅 — 拉普兰的最新消息会持续送达。',
  emailPlaceholder: '您的电子邮箱地址',
  submit: '订阅新闻通讯',
  loading: '正在订阅…',
  later: '以后再说',
  closeAria: '关闭',
  closeLabel: '关闭',
  trust:
    '只有在确实有值得分享的内容时,我们才会发送。您可以随时取消订阅。我们绝不会将您的邮箱分享给任何人。',
  errorGeneric: '订阅未能完成。请重试。',
  codeLabel: '您的订阅者专属代码',
  codeFootnote:
    '请保存好这个代码。它已在整个 #LaplandVibes 网络中为您专属保留 — 自 LaplandVibes 网店开业当天起即可使用,合作店铺也将在合作达成后陆续支持。',
  codeCopied: '已复制!',
  codeCopyAria: '将代码复制到剪贴板',
};

export default function NewsletterPopup() {
  const { lang } = useLang();
  const dict =
    lang === 'fi' ? FI_DICT
    : lang === 'de' ? DE_DICT
    : lang === 'ko' ? KO_DICT
    : lang === 'fr' ? FR_DICT
    : lang === 'it' ? IT_DICT
    : lang === 'nl' ? NL_DICT
    : lang === 'ja' ? JA_DICT
    : lang === 'es' ? ES_DICT
    : lang === 'pt-BR' ? PT_BR_DICT
    : lang === 'zh-CN' ? ZH_CN_DICT
    : EN_DICT;
  const headline =
    lang === 'fi'
      ? 'Liity #LaplandVibes-listalle. Oma koodi tervetulolahjaksi.'
      : lang === 'de'
      ? 'Auf die #LaplandVibes-Liste — Ihr persönlicher Code als Willkommensgeschenk.'
      : lang === 'ko'
      ? '#LaplandVibes 리스트에 가입하세요 — 환영 선물로 전용 코드를 드립니다.'
      : lang === 'fr'
      ? "Rejoignez la liste #LaplandVibes — votre code d'abonné(e) est notre cadeau de bienvenue."
      : lang === 'it'
      ? 'Si iscriva alla lista #LaplandVibes — il Suo codice è il regalo di benvenuto.'
      : lang === 'nl'
      ? 'Schrijf u in voor de #LaplandVibes-lijst — uw abonneecode is uw welkomstgeschenk.'
      : lang === 'ja'
      ? '#LaplandVibes リストに登録 — あなた専用のコードをウェルカムギフトとしてお贈りします。'
      : lang === 'es'
      ? 'Únase a la lista #LaplandVibes — su código de suscriptor/a es nuestro regalo de bienvenida.'
      : lang === 'pt-BR'
      ? 'Entre para a lista #LaplandVibes — seu código de assinante é o nosso presente de boas-vindas.'
      : lang === 'zh-CN'
      ? '加入 #LaplandVibes 名单 — 您的专属订阅者代码就是我们的欢迎礼物。'
      : 'Join the #LaplandVibes list. Your subscriber code is your welcome gift.';
  const description =
    lang === 'fi'
      ? 'Tilaajille oma alennuskoodi, joka käy LaplandStoressa avajaisista alkaen ja kumppaniliikkeissä sitä mukaa kun yhteistyöt aukeavat. Lisäksi Lapin tarinoita ja käsityöläisten haastatteluja silloin kun on jotain oikeasti kerrottavaa.'
      : lang === 'de'
      ? 'Abonnenten erhalten einen persönlichen Rabattcode, der ab Eröffnung im LaplandVibes-Shop gilt und bei Partnern, sobald die Kooperationen vereinbart sind. Dazu Geschichten aus Lappland und Handwerker-Interviews — nur wenn es wirklich etwas zu erzählen gibt.'
      : lang === 'ko'
      ? '구독자에게 LaplandStore 오픈 첫날부터 유효한 전용 할인 코드를 드립니다. 파트너 매장에서도 협업 체결과 함께 사용 가능. 또한 진짜 들려드릴 만한 라플란드 이야기와 장인 인터뷰를 전합니다.'
      : lang === 'fr'
      ? "Les abonnés reçoivent un code de réduction personnel, valable sur la boutique LaplandVibes dès l'ouverture et chez les partenaires au fur et à mesure. Plus des histoires de Laponie et des interviews d'artisans — uniquement quand il y a vraiment quelque chose à dire."
      : lang === 'it'
      ? "Gli iscritti ricevono un codice sconto personale, valido sul negozio LaplandVibes dal primo giorno e presso i partner man mano che gli accordi si chiudono. Più storie dalla Lapponia e interviste agli artigiani — solo quando c'è davvero qualcosa da raccontare."
      : lang === 'nl'
      ? 'Abonnees ontvangen een persoonlijke kortingscode, geldig in de LaplandVibes-winkel vanaf dag één en bij partners zodra de samenwerkingen rond zijn. Plus Lapland-verhalen en interviews met ambachtslieden — alleen als er echt iets te vertellen is.'
      : lang === 'ja'
      ? '購読者の方には、LaplandStore のオープン初日からご利用いただける専用の割引コードをお贈りします。提携店でも提携が成立し次第ご利用いただけます。さらに、本当にお伝えしたいことがあるときだけ、ラップランドの物語や職人へのインタビューをお届けします。'
      : lang === 'es'
      ? 'Quienes se suscriban reciben un código de descuento personal, válido en la tienda LaplandVibes desde el primer día y en los socios a medida que se cierran las colaboraciones. Además, historias de Laponia y entrevistas a artesanos — solo cuando hay algo que de verdad merece la pena contar.'
      : lang === 'pt-BR'
      ? 'Quem assina recebe um código de desconto pessoal, válido na loja LaplandVibes desde o primeiro dia e nos parceiros à medida que as colaborações são fechadas. Além disso, histórias da Lapônia e entrevistas com artesãos — só quando há algo que realmente vale a pena contar.'
      : lang === 'zh-CN'
      ? '订阅者将获得一个专属折扣代码,自 LaplandStore 开业当天起即可使用,合作店铺也将在合作达成后陆续支持。此外,只有在确实有值得分享的内容时,我们才会送上拉普兰的故事和手工艺人的访谈。'
      : "Subscribers get a personal discount code, valid in the LaplandVibes shop from day one and at partner shops as deals are negotiated. Plus real Lapland stories and artisan interviews, only when there's actually something to tell.";
  return (
    <SharedNewsletterPopup
      siteId="laplandstore"
      brandWord="STORE"
      headline={headline}
      description={description}
      dict={dict}
      supabaseUrl={SUPABASE_URL}
      supabaseAnonKey={SUPABASE_KEY}
    />
  );
}
