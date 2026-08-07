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
};

const DE_DICT: NewsletterPopupDict = {
  successHeadline: 'Willkommen an Bord.',
  successBody:
    'Bitte schauen Sie in Ihr Postfach. Die Begrüßungsnachricht ist unterwegs, weitere Briefe folgen.',
  alreadyHeadline: 'Bereits eingetragen',
  alreadyBody:
    'Sie sind bereits angemeldet. Die Lappland-Nachrichten kommen weiter zu Ihnen.',
  emailPlaceholder: 'Ihre E-Mail-Adresse',
  submit: 'Newsletter abonnieren',
  loading: 'Wird abonniert …',
  later: 'Später vielleicht',
  closeAria: 'Schließen',
  closeLabel: 'Schließen',
  trust:
    'Wir senden nur, wenn es etwas wirklich Mitteilenswertes gibt. Jederzeit kündbar. Ihre Adresse wird nicht weitergegeben.',
  errorGeneric: 'Anmeldung fehlgeschlagen. Bitte erneut versuchen.',
};

const KO_DICT: NewsletterPopupDict = {
  successHeadline: '구독이 완료되었습니다.',
  successBody:
    '받은편지함을 확인해 주세요. 환영 메일이 발송되었으며, 이후의 소식도 같은 주소로 도착합니다.',
  alreadyHeadline: '이미 구독자 명단에 있으십니다',
  alreadyBody:
    '이미 구독 중이십니다. 라플란드 소식이 계속 전달됩니다.',
  emailPlaceholder: '이메일 주소',
  submit: '뉴스레터 구독하기',
  loading: '등록 중…',
  later: '나중에',
  closeAria: '닫기',
  closeLabel: '닫기',
  trust:
    '정말 알려드릴 만한 내용이 있을 때만 보내드립니다. 언제든 구독을 해지하실 수 있으며, 이메일은 외부에 공유되지 않습니다.',
  errorGeneric: '구독에 실패했습니다. 다시 시도해 주세요.',
};

const FR_DICT: NewsletterPopupDict = {
  successHeadline: 'Bienvenue !',
  successBody:
    "Vérifiez votre boîte de réception. L'e-mail de bienvenue est en route et les prochaines lettres arriveront à la même adresse.",
  alreadyHeadline: 'Déjà sur la liste',
  alreadyBody:
    'Vous êtes déjà inscrit(e). Les actualités de Laponie continueront de vous parvenir.',
  emailPlaceholder: 'Votre adresse e-mail',
  submit: "S'abonner à la newsletter",
  loading: 'Inscription…',
  later: 'Peut-être plus tard',
  closeAria: 'Fermer',
  closeLabel: 'Fermer',
  trust:
    "Nous envoyons uniquement quand il y a vraiment quelque chose à dire. Désabonnement à tout moment. Votre adresse n'est jamais partagée.",
  errorGeneric: "L'inscription a échoué. Veuillez réessayer.",
};

const IT_DICT: NewsletterPopupDict = {
  successHeadline: 'È a bordo.',
  successBody:
    'Controlli la Sua casella di posta. L\'e-mail di benvenuto è in arrivo e le prossime newsletter arriveranno allo stesso indirizzo.',
  alreadyHeadline: 'Già nella lista',
  alreadyBody:
    'È già iscritto/a. Le notizie dalla Lapponia continueranno ad arrivare.',
  emailPlaceholder: 'Il Suo indirizzo e-mail',
  submit: 'Iscriviti alla newsletter',
  loading: 'Iscrizione…',
  later: 'Magari più tardi',
  closeAria: 'Chiudi',
  closeLabel: 'Chiudi',
  trust:
    "Inviamo solo quando c'è davvero qualcosa da raccontare. Si disiscriva quando vuole. Il Suo indirizzo non viene condiviso.",
  errorGeneric: 'Iscrizione non riuscita. Riprovi.',
};

const NL_DICT: NewsletterPopupDict = {
  successHeadline: 'U bent erbij.',
  successBody:
    'Bekijk uw inbox. De welkomstmail is onderweg en toekomstige brieven komen op hetzelfde adres aan.',
  alreadyHeadline: 'U staat al op de lijst',
  alreadyBody:
    'U bent al ingeschreven. De Lapland-updates blijven binnenkomen.',
  emailPlaceholder: 'Uw e-mailadres',
  submit: 'Schrijf in voor de nieuwsbrief',
  loading: 'Inschrijven…',
  later: 'Misschien later',
  closeAria: 'Sluiten',
  closeLabel: 'Sluiten',
  trust:
    'We sturen alleen als er echt iets te vertellen is. Op elk moment uit te schrijven. Uw adres wordt nooit gedeeld.',
  errorGeneric: 'Inschrijven mislukt. Probeer het opnieuw.',
};

const JA_DICT: NewsletterPopupDict = {
  successHeadline: 'ご登録ありがとうございます。',
  successBody:
    '受信トレイをご確認ください。ウェルカムメールをお送りしました。今後のお便りも同じアドレスに届きます。',
  alreadyHeadline: 'すでにご登録済みです',
  alreadyBody:
    'すでにご購読いただいています。ラップランドのお便りはこれからもお届けします。',
  emailPlaceholder: 'メールアドレス',
  submit: 'ニュースレターを購読する',
  loading: '登録中…',
  later: 'あとで',
  closeAria: '閉じる',
  closeLabel: '閉じる',
  trust:
    '本当にお伝えしたいことがあるときだけお送りします。いつでも配信を停止できます。メールアドレスを第三者に渡すことはありません。',
  errorGeneric: '登録に失敗しました。もう一度お試しください。',
};

const ES_DICT: NewsletterPopupDict = {
  successHeadline: 'Ya está dentro.',
  successBody:
    'Revise su bandeja de entrada. El correo de bienvenida está en camino y las próximas cartas llegarán a la misma dirección.',
  alreadyHeadline: 'Ya está en la lista',
  alreadyBody:
    'Ya está suscrito/a. Las novedades de Laponia seguirán llegándole.',
  emailPlaceholder: 'Su dirección de correo electrónico',
  submit: 'Suscribirse al boletín',
  loading: 'Suscribiendo…',
  later: 'Quizás más tarde',
  closeAria: 'Cerrar',
  closeLabel: 'Cerrar',
  trust:
    'Solo escribimos cuando hay algo que de verdad merece la pena contar. Puede darse de baja cuando quiera. Su correo nunca se comparte.',
  errorGeneric: 'La suscripción no se pudo completar. Inténtelo de nuevo.',
};

const PT_BR_DICT: NewsletterPopupDict = {
  successHeadline: 'Pronto, você está dentro.',
  successBody:
    'Confira sua caixa de entrada. O e-mail de boas-vindas está a caminho e as próximas mensagens chegarão no mesmo endereço.',
  alreadyHeadline: 'Você já está na lista',
  alreadyBody:
    'Você já é assinante. As novidades da Lapônia vão continuar chegando.',
  emailPlaceholder: 'Seu endereço de e-mail',
  submit: 'Assinar a newsletter',
  loading: 'Assinando…',
  later: 'Talvez mais tarde',
  closeAria: 'Fechar',
  closeLabel: 'Fechar',
  trust:
    'Só enviamos quando há algo que realmente vale a pena contar. Você pode cancelar a qualquer momento. Seu e-mail nunca é compartilhado.',
  errorGeneric: 'Não foi possível concluir a assinatura. Tente novamente.',
};

const ZH_CN_DICT: NewsletterPopupDict = {
  successHeadline: '订阅成功。',
  successBody:
    '请查收您的收件箱。欢迎邮件已经发出,今后的来信也会发送到同一地址。',
  alreadyHeadline: '您已在订阅名单中',
  alreadyBody:
    '您已经订阅。拉普兰的最新消息会持续送达。',
  emailPlaceholder: '您的电子邮箱地址',
  submit: '订阅新闻通讯',
  loading: '正在订阅…',
  later: '以后再说',
  closeAria: '关闭',
  closeLabel: '关闭',
  trust:
    '只有在确实有值得分享的内容时,我们才会发送。您可以随时取消订阅。我们绝不会将您的邮箱分享给任何人。',
  errorGeneric: '订阅未能完成。请重试。',
};

const SV_DICT: NewsletterPopupDict = {
  successHeadline: 'Du är med.',
  successBody:
    'Kolla din inkorg. Välkomstmejlet är på väg, och kommande brev landar på samma adress.',
  alreadyHeadline: 'Redan på listan',
  alreadyBody:
    'Du är redan prenumerant. Nyheterna från Lappland fortsätter att komma.',
  emailPlaceholder: 'Din e-postadress',
  submit: 'Prenumerera på nyhetsbrevet',
  loading: 'Prenumererar…',
  later: 'Kanske senare',
  closeAria: 'Stäng',
  closeLabel: 'Stäng',
  trust:
    'Vi skickar bara när det finns något som verkligen är värt att berätta. Avsluta när du vill. Din e-postadress delas aldrig.',
  errorGeneric: 'Prenumerationen misslyckades. Försök igen.',
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
    : lang === 'sv' ? SV_DICT
    : EN_DICT;
  const headline_MAP: Record<string, string> = {
    fi: 'Liity #LaplandVibes-listalle.',
    de: 'Werden Sie Teil der #LaplandVibes-Liste.',
    ko: '#LaplandVibes 리스트에 참여하세요.',
    fr: 'Rejoignez la liste #LaplandVibes.',
    it: 'Si iscriva alla lista #LaplandVibes.',
    nl: 'Schrijf u in voor de #LaplandVibes-lijst.',
    ja: '#LaplandVibes リストにご登録ください。',
    es: 'Únase a la lista #LaplandVibes.',
    'pt-BR': 'Entre para a lista #LaplandVibes.',
    'zh-CN': '加入 #LaplandVibes 名单。',
    sv: 'Gå med i #LaplandVibes-listan.',
    en: 'Join the #LaplandVibes list.',
  };
  const headline = headline_MAP[lang] ?? headline_MAP.en;
  const description_MAP: Record<string, string> = {
    fi: 'Kerromme kun hakemistoon tulee uusia lappilaisia putiikkeja, ja lähetämme kausivinkkejä sekä käsityöläisten tarinoita silloin kun on jotain oikeasti kerrottavaa.',
    de: 'Wir melden uns, wenn neue lappländische Boutiquen ins Verzeichnis kommen, und schicken saisonale Tipps sowie Geschichten von Handwerkerinnen und Handwerkern, wenn es wirklich etwas zu erzählen gibt.',
    ko: '라플란드의 새로운 부티크가 디렉터리에 추가되면 알려드리고, 정말 전할 이야기가 있을 때 계절 정보와 장인들의 이야기를 보내드립니다.',
    fr: 'Nous vous prévenons quand de nouvelles boutiques laponnes rejoignent l\'annuaire, et nous envoyons des conseils de saison et des portraits d\'artisans, uniquement quand il y a vraiment quelque chose à dire.',
    it: 'Vi avvisiamo quando nuove boutique lapponi entrano nella directory e inviamo consigli stagionali e storie di artigiani, solo quando c\'è davvero qualcosa da raccontare.',
    nl: 'We laten het weten wanneer er nieuwe Laplandse boetieks in de gids komen, en sturen seizoenstips en verhalen van ambachtslieden, alleen als er echt iets te vertellen is.',
    ja: 'ラップランドの新しいブティックがディレクトリに加わったらお知らせします。季節の情報や職人の物語も、本当にお伝えしたいことがあるときだけお届けします。',
    es: 'Le avisamos cuando nuevas boutiques laponas entran en el directorio, y enviamos consejos de temporada e historias de artesanos, solo cuando hay algo que de verdad merece la pena contar.',
    'pt-BR': 'Avisamos quando novas boutiques da Lapônia entram no diretório e enviamos dicas de estação e histórias de artesãos, só quando há algo que realmente vale a pena contar.',
    'zh-CN': '当有新的拉普兰精品店收录进名录时我们会通知您，并在确实有值得分享的内容时送上季节建议与手工艺人的故事。',
    sv: 'Vi hör av oss när nya lappländska butiker kommer in i katalogen, och skickar säsongstips och berättelser från hantverkare, bara när det finns något som verkligen är värt att berätta.',
    en: 'We let you know when new Lapland boutiques join the directory, and send seasonal tips and artisan stories only when there is genuinely something to tell.',
  };
  const description = description_MAP[lang] ?? description_MAP.en;
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
