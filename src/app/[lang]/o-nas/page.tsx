import type { Metadata } from "next";
import HeroSection from "@/src/components/HeroSection";
import CTAButton from "@/src/components/CTAButton";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";
function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const metaTitles: Record<Language, string> = {
  pl: "O nas — Muszkieter Krakow | Alfa Bus | Wynajem Autokarow od 1997",
  en: "About Us — Muszkieter Krakow | Coach Hire Since 1997",
  de: "Uber uns — Muszkieter Krakow | Busmiete seit 1997",
  ru: "О нас — Muszkieter Krakow | Аренда автобусов с 1997",
  ar: "من نحن — Muszkieter Krakow | تأجير الحافلات منذ 1997",
  es: "Sobre nosotros — Muszkieter Krakow | Alquiler desde 1997",
  fr: "A propos — Muszkieter Krakow | Location depuis 1997",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Poznaj firme Muszkieter Krakow. 27 lat doswiadczenia, 180 pojazdow, zalozyciele Anna i Rafal Chmiel. Sprawdz nasze referencje i artykuly prasowe.",
  en: "Meet Muszkieter Krakow. 27 years of experience, 180 vehicles, founded by Anna and Rafal Chmiel. See references and press mentions.",
  de: "Lernen Sie Muszkieter Krakow kennen. 27 Jahre Erfahrung, 180 Fahrzeuge, gegrundet von Anna und Rafal Chmiel.",
  ru: "Познакомьтесь с Muszkieter Krakow: 27 лет опыта, 180 машин, основана Анной и Рафалом Хмель.",
  ar: "تعرّف على Muszkieter Krakow: 27 سنة خبرة و180 مركبة، أسسها آنا ورافاو خميل.",
  es: "Conoce Muszkieter Krakow: 27 anos de experiencia, 180 vehiculos, fundada por Anna y Rafal Chmiel.",
  fr: "Decouvrez Muszkieter Krakow: 27 ans d'experience, 180 vehicules, fondee par Anna et Rafal Chmiel.",
};

const heroTitles: Record<Language, string> = {
  pl: "O nas — Muszkieter / Alfa Bus Krakow",
  en: "About Us — Muszkieter / Alfa Bus Krakow",
  de: "Uber uns — Muszkieter / Alfa Bus Krakow",
  ru: "О нас — Muszkieter / Alfa Bus Krakow",
  ar: "من نحن — Muszkieter / Alfa Bus Krakow",
  es: "Sobre nosotros — Muszkieter / Alfa Bus Krakow",
  fr: "A propos — Muszkieter / Alfa Bus Krakow",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Od 1997 roku wozimy ludzi bezpiecznie po Polsce i Europie. 180 pojazdow, 100+ pracownikow, tysiace zadowolonych klientow.",
  en: "Since 1997 we have been transporting people safely across Poland and Europe. 180 vehicles, 100+ employees, thousands of happy clients.",
  de: "Seit 1997 befordern wir Menschen sicher in Polen und Europa. 180 Fahrzeuge, 100+ Mitarbeitende, tausende zufriedene Kunden.",
  ru: "С 1997 года мы безопасно перевозим людей по Польше и Европе. 180 машин, 100+ сотрудников, тысячи довольных клиентов.",
  ar: "منذ عام 1997 ننقل الناس بأمان في بولندا وأوروبا. 180 مركبة و100+ موظف وآلاف العملاء الراضين.",
  es: "Desde 1997 transportamos personas con seguridad por Polonia y Europa. 180 vehiculos, 100+ empleados y miles de clientes satisfechos.",
  fr: "Depuis 1997 nous transportons des personnes en toute securite en Pologne et en Europe. 180 vehicules, 100+ employes.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zadzwon do wlasciciela — +48 601 076 652 lub ",
  en: "Call the owner — +48 601 076 652 lub ",
  de: "Inhaber anrufen — +48 601 076 652 lub ",
  ru: "Позвонить владельцу — +48 601 076 652 lub ",
  ar: "اتصل بالمالك — +48 601 076 652 lub ",
  es: "Llamar al propietario — +48 601 076 652 lub ",
  fr: "Appeler le proprietaire — +48 601 076 652 lub ",
};

const sectionTitles = {
  history: {
    pl: "27 lat na rynku — historia Muszkietera",
    en: "27 years in the market — Muszkieter story",
    de: "27 Jahre am Markt — Geschichte von Muszkieter",
    ru: "27 лет на рынке — история Muszkieter",
    ar: "27 عامًا في السوق — قصة Muszkieter",
    es: "27 anos en el mercado — historia de Muszkieter",
    fr: "27 ans sur le marche — histoire de Muszkieter",
  },
  owner: {
    pl: "Rafal Chmiel — wspolzalozyciel i wlasciciel",
    en: "Rafal Chmiel — co-founder and owner",
    de: "Rafal Chmiel — Mitgrunder und Inhaber",
    ru: "Рафал Хмель — сооснователь и владелец",
    ar: "رافاو خميل — مؤسس مشارك ومالك",
    es: "Rafal Chmiel — cofundador y propietario",
    fr: "Rafal Chmiel — cofondateur et proprietaire",
  },
  numbers: {
    pl: "Liczby, ktore buduja zaufanie",
    en: "Numbers that build trust",
    de: "Zahlen, die Vertrauen schaffen",
    ru: "Цифры, которые вызывают доверие",
    ar: "أرقام تبني الثقة",
    es: "Numeros que generan confianza",
    fr: "Des chiffres qui inspirent confiance",
  },
  media: {
    pl: "Media o nas",
    en: "Media about us",
    de: "Medien uber uns",
    ru: "СМИ о нас",
    ar: "الإعلام يتحدث عنا",
    es: "Medios sobre nosotros",
    fr: "Les medias parlent de nous",
  },
  verify: {
    pl: "Zweryfikuj nasza firme",
    en: "Verify our company",
    de: "Prufen Sie unser Unternehmen",
    ru: "Проверьте нашу компанию",
    ar: "تحقق من شركتنا",
    es: "Verifica nuestra empresa",
    fr: "Verifiez notre societe",
  },
  reviews: {
    pl: "Co mowia nasi klienci",
    en: "What our clients say",
    de: "Was unsere Kunden sagen",
    ru: "Что говорят наши клиенты",
    ar: "ماذا يقول عملاؤنا",
    es: "Que dicen nuestros clientes",
    fr: "Ce que disent nos clients",
  },
  finalCta: {
    pl: "Zaufaj firmie z 27-letnim doswiadczeniem",
    en: "Trust a company with 27 years of experience",
    de: "Vertrauen Sie einem Unternehmen mit 27 Jahren Erfahrung",
    ru: "Доверьтесь компании с 27-летним опытом",
    ar: "ثق بشركة ذات خبرة 27 عامًا",
    es: "Confia en una empresa con 27 anos de experiencia",
    fr: "Faites confiance a une entreprise avec 27 ans d'experience",
  },
  readPress: {
    pl: "Czytaj artykul ->",
    en: "Read article ->",
    de: "Artikel lesen ->",
    ru: "Читать статью ->",
    ar: "اقرا المقال ->",
    es: "Leer articulo ->",
    fr: "Lire l'article ->",
  },
  verifyDesc: {
    pl: "Dzialamy legalnie i transparentnie od 1997 roku.",
    en: "We operate legally and transparently since 1997.",
    de: "Wir arbeiten seit 1997 legal und transparent.",
    ru: "Мы работаем легально и прозрачно с 1997 года.",
    ar: "نعمل بشكل قانوني وشفاف منذ عام 1997.",
    es: "Operamos legalmente y de forma transparente desde 1997.",
    fr: "Nous operons legalement et de facon transparente depuis 1997.",
  },
};

const historyText: Record<Language, string> = {
  pl: "Firma Muszkieter zostala zalozona w 1997 roku w Krakowie przez Anne i Rafala Chmiel. Zaczynalismy od malej lokalnej dzialalnosci i kilku kursow miesiecznie. Z roku na rok rosly wymagania klientow, a my inwestowalismy w ludzi, pojazdy i standard obslugi. Dzisiaj to stabilna marka transportowa z flota 180 pojazdow i zespolem ponad 100 pracownikow. Obslugujemy szkoly, firmy, biura podrozy, parafie i klientow indywidualnych w Polsce i Europie. Przez 27 lat najwazniejsze pozostalo niezmienne: bezpieczenstwo pasazerow, punktualnosc i uczciwa komunikacja. Posiadamy certyfikaty ITD i WITD oraz licencje przewozowa. Kazdy kurs traktujemy jak odpowiedzialnosc za ludzi, ktorzy chca po prostu spokojnie i na czas dotrzec do celu.",
  en: "Muszkieter was founded in 1997 in Krakow by Anna and Rafal Chmiel. We started as a small local transport business with only a few trips per month. As client expectations grew, we consistently invested in people, vehicles and service quality. Today we are a stable transport brand with a fleet of 180 vehicles and a team of 100+ employees. We serve schools, companies, travel agencies, parishes and private clients across Poland and Europe. Over 27 years one principle has stayed the same: passenger safety, punctuality and honest communication. We operate with ITD and WITD certificates and official transport license. Every trip is treated as responsibility for people who simply need to arrive safely and on time.",
  de: "Muszkieter wurde 1997 in Krakow von Anna und Rafal Chmiel gegrundet. Wir begannen als kleines lokales Unternehmen mit wenigen Fahrten pro Monat. Mit steigenden Kundenerwartungen investierten wir konsequent in Personal, Fahrzeuge und Servicequalitat. Heute sind wir eine stabile Transportmarke mit 180 Fahrzeugen und einem Team von mehr als 100 Mitarbeitenden. Wir bedienen Schulen, Unternehmen, Reiseburos, Pfarreien und Privatkunden in Polen und Europa. Seit 27 Jahren bleiben unsere Grundwerte gleich: Sicherheit, Punktlichkeit und ehrliche Kommunikation. Wir arbeiten mit ITD- und WITD-Zertifikaten sowie offizieller Transportlizenz.",
  ru: "Компания Muszkieter была основана в 1997 году в Кельце Анной и Рафалом Хмель. Мы начинали как небольшой локальный перевозчик с несколькими рейсами в месяц. С ростом ожиданий клиентов мы последовательно инвестировали в людей, транспорт и качество сервиса. Сегодня это стабильный бренд с автопарком 180 машин и командой из 100+ сотрудников. Мы обслуживаем школы, компании, турфирмы, приходы и частных клиентов в Польше и Европе. Уже 27 лет неизменны наши принципы: безопасность, пунктуальность и честная коммуникация. Работаем с сертификатами ITD/WITD и лицензией перевозчика.",
  ar: "تأسست شركة Muszkieter عام 1997 في كيلتسه على يد آنا ورافاو خميل. بدأنا كشركة محلية صغيرة بعدد محدود من الرحلات شهريًا. ومع نمو توقعات العملاء، استثمرنا باستمرار في الكوادر والمركبات وجودة الخدمة. اليوم نحن علامة نقل مستقرة بأسطول يضم 180 مركبة وفريق يزيد عن 100 موظف. نخدم المدارس والشركات ومكاتب السفر والرعايا والعملاء الأفراد في بولندا وأوروبا. طوال 27 عامًا بقيت مبادئنا ثابتة: السلامة والالتزام بالمواعيد والوضوح في التواصل. نعمل بشهادات ITD وWITD وترخيص نقل رسمي.",
  es: "La empresa Muszkieter fue fundada en 1997 en Krakow por Anna y Rafal Chmiel. Empezamos como una pequena operadora local con pocos viajes al mes. Con el tiempo crecieron las expectativas de los clientes y nosotros invertimos en personas, vehiculos y calidad de servicio. Hoy somos una marca estable con una flota de 180 vehiculos y un equipo de mas de 100 empleados. Atendemos escuelas, empresas, agencias de viaje, parroquias y clientes privados en Polonia y Europa. Tras 27 anos seguimos con los mismos principios: seguridad, puntualidad y comunicacion honesta. Operamos con certificados ITD/WITD y licencia oficial.",
  fr: "La societe Muszkieter a ete fondee en 1997 a Krakow par Anna et Rafal Chmiel. Nous avons commence comme petite entreprise locale avec peu de trajets mensuels. Avec l'evolution des attentes clients, nous avons investi dans les equipes, les vehicules et la qualite de service. Aujourd'hui, nous sommes une marque de transport stable avec 180 vehicules et plus de 100 employes. Nous servons ecoles, entreprises, agences, paroisses et clients prives en Pologne et en Europe. Depuis 27 ans, nos principes restent les memes: securite, ponctualite et communication honnete. Nous operons avec certificats ITD/WITD et licence officielle.",
};

const ownerText: Record<Language, string> = {
  pl: "Przedsiebiorca z Krakowa i wspolzalozyciel Muszkietera razem z Anna Chmiel. Wlasciciel Alfa Bus Sp. z o.o. i wieloletni dzialacz branzy transportowej w regionie swietokrzyskim. W 2021 roku zlozyl oferte zakupu udzialow w MPK Krakow — to wyraz skali i ambicji firmy.",
  en: "Entrepreneur from Krakow and co-founder of Muszkieter together with Anna Chmiel. Owner of Alfa Bus Sp. z o.o. and long-term transport sector leader in the region. In 2021 he submitted an offer to acquire shares in MPK Krakow.",
  de: "Unternehmer aus Krakow und Mitgrunder von Muszkieter zusammen mit Anna Chmiel. Inhaber von Alfa Bus Sp. z o.o. und seit Jahren in der regionalen Transportbranche aktiv. 2021 reichte er ein Angebot fur MPK Krakow ein.",
  ru: "Предприниматель из Кельце и сооснователь Muszkieter вместе с Анной Хмель. Владелец Alfa Bus Sp. z o.o. и многолетний участник транспортной отрасли региона. В 2021 году подал предложение по MPK Krakow.",
  ar: "رائد أعمال من كيلتسه ومؤسس مشارك لشركة Muszkieter مع آنا خميل. مالك Alfa Bus Sp. z o.o. وناشط منذ سنوات في قطاع النقل الإقليمي. في 2021 قدم عرضًا لشراء حصص في MPK Krakow.",
  es: "Empresario de Krakow y cofundador de Muszkieter junto con Anna Chmiel. Propietario de Alfa Bus Sp. z o.o. y activo durante anos en el sector transporte regional. En 2021 presento oferta para MPK Krakow.",
  fr: "Entrepreneur de Krakow et cofondateur de Muszkieter avec Anna Chmiel. Proprietaire de Alfa Bus Sp. z o.o. et acteur du transport regional depuis des annees. En 2021, il a soumis une offre pour MPK Krakow.",
};

const linkedinLabels: Record<Language, string> = {
  pl: "LinkedIn Rafala Chmiela ->",
  en: "Rafal Chmiel on LinkedIn ->",
  de: "Rafal Chmiel auf LinkedIn ->",
  ru: "Рафал Хмель в LinkedIn ->",
  ar: "LinkedIn رافاو خميل ->",
  es: "Rafal Chmiel en LinkedIn ->",
  fr: "Rafal Chmiel sur LinkedIn ->",
};

const statsByLang: Record<Language, Array<{ number: string; label: string }>> = {
  pl: [
    { number: "27", label: "lat doswiadczenia" },
    { number: "180", label: "pojazdow w flocie" },
    { number: "100+", label: "pracownikow" },
    { number: "1000+", label: "zadowolonych klientow rocznie" },
  ],
  en: [
    { number: "27", label: "years of experience" },
    { number: "180", label: "vehicles in fleet" },
    { number: "100+", label: "employees" },
    { number: "1000+", label: "happy clients per year" },
  ],
  de: [
    { number: "27", label: "Jahre Erfahrung" },
    { number: "180", label: "Fahrzeuge in der Flotte" },
    { number: "100+", label: "Mitarbeitende" },
    { number: "1000+", label: "zufriedene Kunden pro Jahr" },
  ],
  ru: [
    { number: "27", label: "лет опыта" },
    { number: "180", label: "машин в автопарке" },
    { number: "100+", label: "сотрудников" },
    { number: "1000+", label: "довольных клиентов в год" },
  ],
  ar: [
    { number: "27", label: "سنة خبرة" },
    { number: "180", label: "مركبة في الأسطول" },
    { number: "100+", label: "موظف" },
    { number: "1000+", label: "عميل راضٍ سنويًا" },
  ],
  es: [
    { number: "27", label: "anos de experiencia" },
    { number: "180", label: "vehiculos en flota" },
    { number: "100+", label: "empleados" },
    { number: "1000+", label: "clientes satisfechos al ano" },
  ],
  fr: [
    { number: "27", label: "ans d'experience" },
    { number: "180", label: "vehicules dans la flotte" },
    { number: "100+", label: "employes" },
    { number: "1000+", label: "clients satisfaits par an" },
  ],
};

const pressLinks = [
  {
    source: "Echo Dnia",
    title: "Muszkieter wznawia kursy — pierwsze polaczenia juz w majowke",
    url: "https://echodnia.eu/swietokrzyskie/muszkieter-wznawia-kursy-pierwsze-polaczenia-juz-w-majowke-zobacz-rozklad-jazdy/ar/c1-14945916",
    description: "Echo Dnia o wznowieniu polaczen regularnych Muszkietera po przerwie",
  },
  {
    source: "Echo Dnia",
    title: "Dramat firm transportowych ze Swietokrzyskiego",
    url: "https://echodnia.eu/swietokrzyskie/dramat-firm-transportowych-ze-swietokrzyskiego-brakuje-pieniedzy-na-pensje-zus-kredyty-leasingi/ar/c1-14933884",
    description: "Glos wlasciciela Muszkietera w trudnym czasie dla branzy transportowej",
  },
  {
    source: "Echo Dnia — archiwum",
    title: "Wszystkie artykuly o Muszkieter Krakow",
    url: "https://echodnia.eu/swietokrzyskie/tag/muszkieter-krakow",
    description: "Pelne archiwum artykulow prasowych o firmie Muszkieter w Echo Dnia",
  },
  {
    source: "wKrakowie.info",
    title: "Wspolwlasciciel firmy Muszkieter chce kupic udzialy w MPK",
    url: "https://wkielcach.info/aktualnosci/wspolwlasciciel-firmy-muszkieter-chce-kupic-udzialy-w-mpk/",
    description: "Rafal Chmiel zlozyl oferte zakupu udzialow w MPK Krakow — dowod na skale ambicji",
  },
  {
    source: "Gazeta Wyborcza Krakow",
    title: "Komercyjna konkurencja chce wejsc do MPK Krakow",
    url: "https://krakow.wyborcza.pl/krakow/7,47262,26957351,komercyjna-konkurencja-chce-wejsc-do-mpk-krakow-przez-odkupienie.html",
    description: "Gazeta Wyborcza o planach ekspansji Muszkietera na rynek komunikacji miejskiej",
  },
  {
    source: "Radio Krakow",
    title: "Muszkieter w Radio Krakow",
    url: "https://radiokrakow.pl/866558/post-3268/",
    description: "Wywiad z przedstawicielem firmy Muszkieter w regionalnym radiu",
  },
  {
    source: "Radio Krakow",
    title: "Muszkieter w Radio Krakow (2)",
    url: "https://radiokrakow.pl/771105/post-40317/",
    description: "Kolejny wywiad w Radio Krakow",
  },
];

const verificationLinks = [
  {
    label: "KRS / Rejestr.io — Alfa Bus Sp. z o.o.",
    url: "https://rejestr.io/krs/1200396/alfa-bus-26",
  },
  {
    label: "Aleo.com — Anna Chmiel Uslugi Handel Transport",
    url: "https://aleo.com/pl/firma/anna-chmiel-uslugi-handel-transport",
  },
  {
    label: "Panorama Firm",
    url: "https://panoramafirm.pl/%C5%9Bwi%C4%99tokrzyskie,kielecki,ch%C4%99ciny,char%C4%99%C5%BC%C3%B3w,6/us%C5%82ugi_handel_transport_anna_chmiel-sgkntd_sxf.html",
  },
  {
    label: "Rejestr.io — Anna Chmiel",
    url: "https://rejestr.io/firmy/anna-chmiel-uslugi-handel-transport",
  },
  {
    label: "Oferteo.pl — Muszkieter",
    url: "https://www.oferteo.pl/muszkieter/firma/3610294",
  },
  {
    label: "Przetargi.egospodarka.pl — wyniki przetargow",
    url: "https://www.przetargi.egospodarka.pl/kto-wygral/15704430%2Canna-chmiel-uslugi-handel-transport.html",
  },
  {
    label: "Oneplace Marketplanet — profil firmy",
    url: "https://oneplace.marketplanet.pl/baza-firm/-/bc/company/94413/uslugi-handel-transport-anna-chmiel",
  },
];

const placeholderReviews: Record<Language, Array<{ text: string; author: string; stars: number }>> = {
  pl: [
    { text: "Profesjonalna obsluga, kierowca punktualny, autokar czysty. Polecam dla firm.", author: "Klient korporacyjny, Krakow", stars: 5 },
    { text: "Juz po raz trzeci korzystamy z Muszkietera na wycieczke szkolna. Zawsze bez zarzutu.", author: "Nauczyciel, Szkola Podstawowa nr 14 Krakow", stars: 5 },
    { text: "Bus na wesele przyszedl punktualnie, kierowca bardzo uprzejmy. Goscie zadowoleni.", author: "Klient weselny, okolice Krakowa", stars: 5 },
  ],
  en: [
    { text: "Professional service, punctual driver, clean coach. Great option for business events.", author: "Corporate client, Krakow", stars: 5 },
    { text: "We already used Muszkieter three times for school trips. Always reliable.", author: "Teacher, Primary School No. 14 Krakow", stars: 5 },
    { text: "Wedding bus arrived on time, driver was very polite. Guests were happy.", author: "Wedding client, Krakow area", stars: 5 },
  ],
  de: [
    { text: "Professioneller Service, punktlicher Fahrer, sauberer Bus. Sehr gut fur Firmen.", author: "Firmenkunde, Krakow", stars: 5 },
    { text: "Wir haben Muszkieter bereits dreimal fur Schulausfluge gebucht. Immer zuverlassig.", author: "Lehrkraft, Grundschule Nr. 14 Krakow", stars: 5 },
    { text: "Der Hochzeitsbus war punktlich, der Fahrer sehr hoflich. Gaste zufrieden.", author: "Hochzeitskunde, Region Krakow", stars: 5 },
  ],
  ru: [
    { text: "Профессиональный сервис, пунктуальный водитель, чистый автобус. Отлично для компаний.", author: "Корпоративный клиент, Кельце", stars: 5 },
    { text: "Уже третий раз едем с Muszkieter на школьную поездку. Всегда без проблем.", author: "Учитель, школа №14 Кельце", stars: 5 },
    { text: "Автобус на свадьбу прибыл вовремя, водитель вежливый. Гости довольны.", author: "Свадебный клиент, окрестности Кельце", stars: 5 },
  ],
  ar: [
    { text: "خدمة احترافية وسائق ملتزم وحافلة نظيفة. خيار ممتاز للشركات.", author: "عميل شركات، كيلتسه", stars: 5 },
    { text: "هذه المرة الثالثة التي نستخدم فيها Muszkieter لرحلة مدرسية. دائمًا ممتاز.", author: "معلم، مدرسة ابتدائية رقم 14 كيلتسه", stars: 5 },
    { text: "حافلة الزفاف وصلت في الوقت المحدد والسائق كان مهذبًا جدًا.", author: "عميل زفاف، ضواحي كيلتسه", stars: 5 },
  ],
  es: [
    { text: "Servicio profesional, conductor puntual y autocar limpio. Recomendado para empresas.", author: "Cliente corporativo, Krakow", stars: 5 },
    { text: "Ya es la tercera vez que usamos Muszkieter para una salida escolar. Siempre perfecto.", author: "Docente, Escuela Primaria No. 14 Krakow", stars: 5 },
    { text: "El bus de boda llego puntual y el conductor fue muy amable.", author: "Cliente de boda, area de Krakow", stars: 5 },
  ],
  fr: [
    { text: "Service professionnel, chauffeur ponctuel, autocar propre. Recommande pour entreprises.", author: "Client entreprise, Krakow", stars: 5 },
    { text: "Troisieme fois avec Muszkieter pour une sortie scolaire. Toujours impeccable.", author: "Enseignant, Ecole Primaire No. 14 Krakow", stars: 5 },
    { text: "Le bus mariage est arrive a l'heure, chauffeur tres courtois. Invites satisfaits.", author: "Client mariage, region de Krakow", stars: 5 },
  ],
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  return { title: metaTitles[l], description: metaDescriptions[l] };
}

export default async function ONasPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);

  return (
    <>
      <HeroSection title={heroTitles[l]} subtitle={heroSubtitles[l]} ctaText={ctaTexts[l]} ctaHref="tel:601076652" />

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-6">{sectionTitles.history[l]}</h2>
        <p className="text-gray-700 leading-8 text-lg">{historyText[l]}</p>
      </section>

      <section className="py-16 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div>
            <h2 className="text-3xl font-black mb-4">{sectionTitles.owner[l]}</h2>
            <p className="text-gray-300 leading-8">{ownerText[l]}</p>
            <a
              href="https://pl.linkedin.com/in/rafa%C5%82-chmiel-57782436"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#f59e0b] mt-4 font-semibold"
            >
              {linkedinLabels[l]}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-center text-[#1a1a1a] mb-10">{sectionTitles.numbers[l]}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {statsByLang[l].map((item) => (
              <div key={item.label} className="rounded-2xl border border-gray-200 p-6 text-center bg-white shadow-sm">
                <div className="text-4xl font-black text-[#f59e0b] mb-2">{item.number}</div>
                <div className="text-sm md:text-base font-semibold text-[#1a1a1a]">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8">{sectionTitles.media[l]}</h2>
        <div className="grid grid-cols-1 gap-4">
          {pressLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block border border-gray-200 rounded-xl p-6 hover:border-[#f59e0b] hover:shadow-md transition-all"
            >
              <span className="text-sm font-bold text-[#f59e0b] uppercase">{link.source}</span>
              <h3 className="font-black text-lg mt-1 mb-2 text-[#1a1a1a]">{link.title}</h3>
              <p className="text-gray-600 text-sm">{link.description}</p>
              <span className="text-sm text-gray-400 mt-3 inline-block">{sectionTitles.readPress[l]}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black mb-2 text-[#1a1a1a]">{sectionTitles.verify[l]}</h2>
          <p className="text-gray-600 mb-8">{sectionTitles.verifyDesc[l]}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {verificationLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 bg-white rounded-lg border hover:border-[#f59e0b] text-sm transition-all"
              >
                <span className="text-[#f59e0b]">✓</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-8">{sectionTitles.reviews[l]}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {placeholderReviews[l].map((review, idx) => (
            <article key={`${review.author}-${idx}`} className="p-5 rounded-xl border border-gray-200 bg-white">
              <div className="text-[#f59e0b] mb-3">{"★".repeat(review.stars)}</div>
              <p className="text-gray-700 text-sm leading-6 mb-3">{review.text}</p>
              <p className="text-xs text-gray-500 font-medium">{review.author}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f59e0b] text-center">
        <h2 className="text-3xl font-black text-[#1a1a1a] mb-6">{sectionTitles.finalCta[l]}</h2>
        <CTAButton href="tel:601076652" variant="secondary">
          📞 +48 601 076 652 lub 
        </CTAButton>
      </section>
    </>
  );
}
