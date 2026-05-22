import type { Metadata } from "next";
import HeroSection from "@/src/components/HeroSection";
import FeatureBox from "@/src/components/FeatureBox";
import FAQAccordion from "@/src/components/FAQAccordion";
import CTAButton from "@/src/components/CTAButton";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";
function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const metaTitles: Record<Language, string> = {
  pl: "Transfer hotelowy Krakow | Grupy 10-300 osób",
  en: "Hotel transfer Krakow | Groups 10-300",
  de: "Hoteltransfer Krakow | Gruppen 10-300",
  ru: "Трансфер отель Кельце | Группы 10-300",
  ar: "نقل فندقي كيلتسه | مجموعات 10-300",
  es: "Transfer hotel Krakow | Grupos 10-300",
  fr: "Transfert hotel Krakow | Groupes 10-300",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Punktualna obsługa transferów hotelowych i grupowych. Kierowca z tabliczką, monitoring lotów i koordynacja 10-300 osób.",
  en: "Punctual hotel and group transfers. Driver with name board, flight monitoring and coordination for 10-300 passengers.",
  de: "Punktliche Hotel- und Gruppentransfers mit Namensschild, Flugmonitoring und Koordination fur 10-300 Personen.",
  ru: "Пунктуальные трансферы из отелей и для групп. Водитель с табличкой, мониторинг рейсов, координация 10-300 человек.",
  ar: "خدمة نقل فندقي وجماعي دقيقة. سائق بلافتة اسمية ومتابعة الرحلات وتنسيق 10-300 شخص.",
  es: "Transfers hoteleros y grupales puntuales. Conductor con cartel, monitoreo de vuelos y coordinacion para 10-300 personas.",
  fr: "Transferts hotel et groupes ponctuels. Chauffeur avec pancarte, suivi des vols et coordination pour 10-300 personnes.",
};

const heroTitles: Record<Language, string> = {
  pl: "Transfer Hotelowy i Grupowy - Krakow",
  en: "Hotel and Group Transfer - Krakow",
  de: "Hotel- und Gruppentransfer - Krakow",
  ru: "Групповой и отельный трансфер - Кельце",
  ar: "نقل فندقي وجماعي - كيلتسه",
  es: "Transfer hotelero y grupal - Krakow",
  fr: "Transfert hotelier et groupe - Krakow",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Goście docierają bez stresu i na czas: od odbioru z tabliczką po koordynację terminali. 24 lata doświadczenia od 1997.",
  en: "Guests arrive stress-free and on time, from name-board pickup to terminal coordination. 24 years of experience.",
  de: "Gaste kommen stressfrei und punktlich an, von Abholung mit Namensschild bis Terminal-Koordination.",
  ru: "Гости прибывают вовремя и без стресса: от встречи с табличкой до координации терминалов.",
  ar: "يصل الضيوف في الوقت المحدد وبدون توتر، من الاستقبال بلافتة حتى تنسيق المحطات.",
  es: "Tus invitados llegan puntuales y sin estres, desde recogida con cartel hasta coordinacion de terminales.",
  fr: "Vos invites arrivent a l'heure et sans stress, de l'accueil avec pancarte a la coordination des terminaux.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zamów transfer - +48 41 345 32 25 lub ",
  en: "Book transfer - +48 41 345 32 25 lub ",
  de: "Transfer buchen - +48 41 345 32 25 lub ",
  ru: "Заказать трансфер - +48 41 345 32 25 lub ",
  ar: "احجز النقل - +48 41 345 32 25 lub ",
  es: "Reservar transfer - +48 41 345 32 25 lub ",
  fr: "Reserver transfert - +48 41 345 32 25 lub ",
};

const featureHeadings: Record<Language, string> = {
  pl: "Profesjonalna koordynacja transferu",
  en: "Professional transfer coordination",
  de: "Professionelle Transferkoordination",
  ru: "Профессиональная координация трансфера",
  ar: "تنسيق نقل احترافي",
  es: "Coordinacion profesional del transfer",
  fr: "Coordination professionnelle du transfert",
};

const featuresByLang: Record<Language, Array<{ icon: string; title: string; description: string }>> = {
  pl: [
    { icon: "🏨", title: "Kierowca z tabliczką", description: "Gość od razu widzi kierowcę i bez błądzenia trafia do pojazdu. Idealne dla grup zagranicznych i VIP." },
    { icon: "🎪", title: "Eventy i grupy 10-300", description: "Koordynujemy transfery konferencyjne, hotelowe i targowe, nawet gdy grupa przyjeżdża falami." },
    { icon: "🚉", title: "Monitoring lotów i terminali", description: "Śledzimy opóźnienia lotów i zmiany terminali, aby grupa zawsze miała aktualny plan odbioru." },
  ],
  en: [
    { icon: "🏨", title: "Driver with name board", description: "Guests identify driver instantly and board quickly, ideal for international and VIP groups." },
    { icon: "🎪", title: "Events and groups 10-300", description: "We coordinate conference, hotel and trade-fair transfers even for staggered arrivals." },
    { icon: "🚉", title: "Flight and terminal monitoring", description: "We track delays and terminal changes so your pickup plan stays current." },
  ],
  de: [
    { icon: "🏨", title: "Fahrer mit Namensschild", description: "Gaste finden den Fahrer sofort und steigen ohne Wartezeit ein." },
    { icon: "🎪", title: "Events und Gruppen 10-300", description: "Wir koordinieren Konferenz-, Hotel- und Messe-Transfers auch bei gestaffelten Ankunften." },
    { icon: "🚉", title: "Flug- und Terminalmonitoring", description: "Wir verfolgen Verspatungen und Terminalanderungen in Echtzeit." },
  ],
  ru: [
    { icon: "🏨", title: "Водитель с табличкой", description: "Гости сразу находят водителя и быстро садятся в транспорт без ожидания." },
    { icon: "🎪", title: "Мероприятия и группы 10-300", description: "Координируем трансферы для конференций, отелей и выставок, даже при поэтапном прибытии." },
    { icon: "🚉", title: "Мониторинг рейсов и терминалов", description: "Отслеживаем задержки и смену терминалов, чтобы план встречи оставался точным." },
  ],
  ar: [
    { icon: "🏨", title: "سائق بلافتة اسمية", description: "يجد الضيوف السائق فورًا ويصعدون بسرعة دون انتظار." },
    { icon: "🎪", title: "فعاليات ومجموعات 10-300", description: "ننسق النقل للمؤتمرات والفنادق والمعارض حتى عند وصول المجموعات على دفعات." },
    { icon: "🚉", title: "متابعة الرحلات والمحطات", description: "نراقب تأخيرات الرحلات وتغييرات المحطات للحفاظ على خطة استقبال دقيقة." },
  ],
  es: [
    { icon: "🏨", title: "Conductor con cartel", description: "Los invitados identifican al conductor al instante y suben sin demoras." },
    { icon: "🎪", title: "Eventos y grupos 10-300", description: "Coordinamos transfers para congresos, hoteles y ferias, incluso con llegadas escalonadas." },
    { icon: "🚉", title: "Monitoreo de vuelos y terminales", description: "Seguimos retrasos y cambios de terminal para mantener el plan de recogida." },
  ],
  fr: [
    { icon: "🏨", title: "Chauffeur avec pancarte", description: "Les invites identifient le chauffeur immediatement et montent sans attente." },
    { icon: "🎪", title: "Evenements et groupes 10-300", description: "Nous coordonnons transferts conference, hotel et salon, meme en arrivees fractionnees." },
    { icon: "🚉", title: "Suivi vols et terminaux", description: "Nous suivons retards et changements de terminal pour garder un plan fiable." },
  ],
};

const faqHeadings: Record<Language, string> = {
  pl: "FAQ - Transfer hotelowy",
  en: "FAQ - Hotel transfer",
  de: "FAQ - Hoteltransfer",
  ru: "FAQ - Отельный трансфер",
  ar: "الاسئلة - النقل الفندقي",
  es: "FAQ - Transfer hotel",
  fr: "FAQ - Transfert hotel",
};

const faqByLang: Record<Language, Array<{ question: string; answer: string }>> = {
  pl: [
    { question: "Czy kierowca czeka przy hotelu?", answer: "Tak, czeka o ustalonej godzinie z tabliczką. Dla grup VIP przygotowujemy dedykowany punkt zbiórki." },
    { question: "Ile osób możecie przewieźć?", answer: "Od 10 do 300+ osób jednocześnie. Dla większych grup uruchamiamy kilka pojazdów z jednym koordynatorem." },
    { question: "Czy obsługujecie grupy zagraniczne?", answer: "Tak. Standardem jest komunikacja po angielsku, a briefing wysyłamy wcześniej do opiekuna grupy." },
    { question: "Co z różnymi terminalami?", answer: "Rozdzielamy odbiory po terminalach i monitorujemy loty, aby nikt nie czekał niepotrzebnie." },
  ],
  en: [
    { question: "Does driver wait at the hotel?", answer: "Yes, at agreed time with name board. For VIP groups we set dedicated meeting point." },
    { question: "How many people can you transport?", answer: "From 10 to 300+ at once. For larger groups we dispatch multiple vehicles with one coordinator." },
    { question: "Do you handle international groups?", answer: "Yes, English communication is standard and briefing is sent before arrival." },
    { question: "What about different terminals?", answer: "We split pickups by terminal and monitor flights to avoid unnecessary waiting." },
  ],
  de: [
    { question: "Wartet der Fahrer am Hotel?", answer: "Ja, zur vereinbarten Zeit mit Namensschild. Fur VIP Gruppen mit separatem Treffpunkt." },
    { question: "Wie viele Personen sind moglich?", answer: "Von 10 bis 300+ gleichzeitig. Fur grosse Gruppen mit mehreren Fahrzeugen und Koordinator." },
    { question: "Bedienen Sie internationale Gruppen?", answer: "Ja, Englischkommunikation ist Standard und Briefing erfolgt vor Anreise." },
    { question: "Was bei mehreren Terminals?", answer: "Wir teilen die Abholung nach Terminals auf und verfolgen die Fluge in Echtzeit." },
  ],
  ru: [
    { question: "Водитель ждет у отеля?", answer: "Да, в согласованное время с табличкой. Для VIP готовим отдельную точку встречи." },
    { question: "Сколько человек можно перевезти?", answer: "От 10 до 300+ одновременно. Для больших групп запускаем несколько машин с координатором." },
    { question: "Работаете с иностранными группами?", answer: "Да, коммуникация на английском входит в стандарт услуги." },
    { question: "Что если разные терминалы?", answer: "Разделяем встречи по терминалам и отслеживаем рейсы в реальном времени." },
  ],
  ar: [
    { question: "هل ينتظر السائق عند الفندق؟", answer: "نعم، في الوقت المتفق عليه مع لافتة اسمية. ولمجموعات VIP نحدد نقطة تجمع خاصة." },
    { question: "كم شخصًا يمكن نقله؟", answer: "من 10 إلى أكثر من 300 شخص في نفس الوقت مع تنسيق مركبات متعددة." },
    { question: "هل تخدمون المجموعات الأجنبية؟", answer: "نعم، التواصل بالإنجليزية ضمن الخدمة القياسية مع إرسال تعليمات مسبقة." },
    { question: "ماذا عن اختلاف المحطات؟", answer: "نقسم الاستقبال حسب كل محطة ونتابع الرحلات مباشرة لتقليل الانتظار." },
  ],
  es: [
    { question: "El conductor espera en el hotel?", answer: "Si, a la hora acordada con cartel identificativo. Para VIP definimos punto dedicado." },
    { question: "Cuantas personas podeis mover?", answer: "De 10 a 300+ personas a la vez con coordinacion de varios vehiculos." },
    { question: "Atendeis grupos internacionales?", answer: "Si, la comunicacion en ingles es estandar y enviamos briefing previo." },
    { question: "Y si hay distintos terminales?", answer: "Dividimos recogidas por terminal y monitorizamos vuelos en tiempo real." },
  ],
  fr: [
    { question: "Le chauffeur attend-il a l'hotel ?", answer: "Oui, a l'heure convenue avec pancarte. Pour VIP, point de rencontre dedie." },
    { question: "Combien de personnes pouvez-vous transporter ?", answer: "De 10 a 300+ personnes simultanement avec coordination multi-vehicules." },
    { question: "Servez-vous des groupes internationaux ?", answer: "Oui, communication en anglais standard et briefing envoye en amont." },
    { question: "Et si les terminaux sont differents ?", answer: "Nous separons les prises en charge par terminal et suivons les vols en direct." },
  ],
};

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Podaj hotel, terminal i liczbę osób - resztę koordynujemy",
  en: "Share hotel, terminal and headcount - we coordinate the rest",
  de: "Hotel, Terminal und Gruppengrosse senden - wir koordinieren den Rest",
  ru: "Укажите отель, терминал и число людей - остальное координируем мы",
  ar: "أرسل الفندق والمحطة وعدد الأشخاص - وسنتولى الباقي",
  es: "Comparte hotel, terminal y numero de personas - coordinamos todo",
  fr: "Partagez hotel, terminal et effectif - nous coordonnons le reste",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  return { title: metaTitles[l], description: metaDescriptions[l] };
}

export default async function HotelTransferPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);

  return (
    <>
      <HeroSection title={heroTitles[l]} subtitle={heroSubtitles[l]} ctaText={ctaTexts[l]} ctaHref="tel:413453225" backgroundImage="/images/transfer/transfer-autokar-krakow-2.jpg" />
      <FeatureBox features={featuresByLang[l]} heading={featureHeadings[l]} />
      <FAQAccordion items={faqByLang[l]} heading={faqHeadings[l]} />
      <section className="py-12 px-4 bg-[#f59e0b] text-center">
        <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ctaSectionHeadings[l]}</h2>
        <CTAButton href="https://wa.me/48413453225" variant="secondary">💬 WhatsApp: +48 41 345 32 25 lub </CTAButton>
      </section>
    </>
  );
}
