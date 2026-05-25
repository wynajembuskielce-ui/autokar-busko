import type { Metadata } from "next";
import HeroSlider from "@/src/components/HeroSlider";
import PriceTable from "@/src/components/PriceTable";
import FAQAccordion from "@/src/components/FAQAccordion";
import CTAButton from "@/src/components/CTAButton";
import CardCategory from "@/src/components/CardCategory";
import TrustWall from "@/src/components/TrustWall";
import HowItWorks from "@/src/components/HowItWorks";
import pricingData from "@/src/data/pricing.json";
import { faqData } from "@/data/faq-seo-data";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

const metaTitles: Record<Language, string> = {
  pl: "Autokar Busko | Busy i Autokary na Wynajem – Ponidzie – +48 41 345 32 25",
  en: "Coach Rental Busko-Zdrój | Buses and Coaches for Hire – +48 41 345 32 25",
  de: "Busmiete Busko-Zdrój | Busse und Reisebusse zur Miete – +48 41 345 32 25",
  ru: "Аренда автобуса Буско-Здруй | Автобусы и микроавтобусы – +48 41 345 32 25",
  ar: "تأجير حافلات بوسكو-زدروي | حافلات وميني باص – +48 41 345 32 25",
  es: "Alquiler de autobús Busko-Zdrój | Autobuses y minibuses – +48 41 345 32 25",
  fr: "Location de bus Busko-Zdrój | Bus et minibus – +48 41 345 32 25",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Profesjonalny wynajem autokaru w Busku-Zdroju. Busy, autokary i minibusy na wesela, wycieczki, pielgrzymki i transfery lotniskowe.",
  en: "Professional coach rental in Busko-Zdrój for weddings, school trips, pilgrimages, corporate events and airport transfers.",
  de: "Professionelle Busmiete in Busko-Zdrój für Hochzeiten, Schulausflüge, Wallfahrten, Firmenevents und Flughafentransfers.",
  ru: "Профессиональная аренда автобусов в Буско-Здруй для свадеб, школьных поездок, паломничеств и трансферов в аэропорт.",
  ar: "تأجير حافلات احترافي في بوسكو-زدروي للأعراس والرحلات المدرسية والحج ونقل المطار.",
  es: "Alquiler profesional de autobuses en Busko-Zdrój para bodas, excursiones escolares, peregrinaciones, eventos y traslados al aeropuerto.",
  fr: "Location professionnelle de bus à Busko-Zdrój pour mariages, sorties scolaires, pèlerinages, événements et transferts aéroport.",
};

const quickHeading: Record<Language, string> = {
  pl: "Szybka wycena - zadzwoń teraz",
  en: "Quick quote - call now",
  de: "Schnelles Angebot - jetzt anrufen",
  ru: "Быстрый расчет - звоните сейчас",
  ar: "عرض سعر سريع - اتصل الآن",
  es: "Presupuesto rápido - llama ahora",
  fr: "Devis rapide - appelez maintenant",
};

const quickBody: Record<Language, string> = {
  pl: "Podaj trasę, liczbę osób i datę - przygotujemy ofertę w kilka minut.",
  en: "Share your route, group size and date - we will prepare an offer in minutes.",
  de: "Nennen Sie Strecke, Personenzahl und Datum - wir erstellen in Minuten ein Angebot.",
  ru: "Сообщите маршрут, количество людей и дату - подготовим предложение за несколько минут.",
  ar: "أرسل المسار وعدد الأشخاص والتاريخ - سنجهز العرض خلال دقائق.",
  es: "Comparte ruta, número de personas y fecha - prepararemos oferta en minutos.",
  fr: "Partagez itinéraire, nombre de personnes et date - nous préparons l'offre en quelques minutes.",
};

const contactFormCta: Record<Language, string> = {
  pl: "Formularz kontaktowy",
  en: "Contact form",
  de: "Kontaktformular",
  ru: "Контактная форма",
  ar: "نموذج التواصل",
  es: "Formulario de contacto",
  fr: "Formulaire de contact",
};

const pricingHeading: Record<Language, string> = {
  pl: "Orientacyjny cennik wynajmu",
  en: "Estimated rental pricing",
  de: "Orientierende Mietpreise",
  ru: "Ориентировочные цены аренды",
  ar: "أسعار تقديرية للتأجير",
  es: "Precios orientativos de alquiler",
  fr: "Tarifs indicatifs de location",
};

const faqHeading: Record<Language, string> = {
  pl: "Często zadawane pytania",
  en: "Frequently asked questions",
  de: "Häufig gestellte Fragen",
  ru: "Часто задаваемые вопросы",
  ar: "الأسئلة الشائعة",
  es: "Preguntas frecuentes",
  fr: "Questions fréquentes",
};

const finalHeading: Record<Language, string> = {
  pl: "Gotowy na rezerwację?",
  en: "Ready to book?",
  de: "Bereit zur Buchung?",
  ru: "Готовы бронировать?",
  ar: "جاهز للحجز؟",
  es: "¿Listo para reservar?",
  fr: "Prêt à réserver ?",
};

const finalBody: Record<Language, string> = {
  pl: "Zadzwoń lub napisz - odpowiemy błyskawicznie.",
  en: "Call or message us - we reply fast.",
  de: "Rufen Sie an oder schreiben Sie uns - wir antworten schnell.",
  ru: "Позвоните или напишите - ответим очень быстро.",
  ar: "اتصل أو راسلنا - نرد بسرعة.",
  es: "Llámanos o escríbenos - respondemos rápido.",
  fr: "Appelez-nous ou écrivez-nous - réponse rapide.",
};

const finalCta: Record<Language, string> = {
  pl: "📞 Zadzwoń: +48 41 345 32 25 lub +48 609 69 19 12",
  en: "📞 Call: +48 41 345 32 25 or +48 609 69 19 12",
  de: "📞 Anrufen: +48 41 345 32 25 oder +48 609 69 19 12",
  ru: "📞 Позвонить: +48 41 345 32 25 или +48 609 69 19 12",
  ar: "📞 اتصل: +48 41 345 32 25 أو +48 609 69 19 12",
  es: "📞 Llamar: +48 41 345 32 25 o +48 609 69 19 12",
  fr: "📞 Appeler: +48 41 345 32 25 ou +48 609 69 19 12",
};

const companyIntroByLang: Record<
  Language,
  {
    h2: string;
    sections: Array<{ h3: string; p: string }>;
  }
> = {
  pl: {
    h2: "Od linii autobusowych w Busku-Zdroju. Historia rodziny Chmiel.",
    sections: [
      {
        h3: "Skąd jesteśmy i dokąd zmierzamy",
        p: "Autokar Busko to rodzinna firma Anny i Rafała Chmiel, założona w 1997 roku. Przewozy pasażerskie rozpoczęliśmy w 2001 roku — wtedy otrzymaliśmy pierwszą licencję przewozową. Zaczęliśmy od regularnych linii autobusowych na Ponidziu: Busko-Zdrój – Kielce – Radom – Warszawa, Busko – Kielce – Piotrków – Łódź, Kielce – Sandomierz – Tarnobrzeg, Kielce – Busko-Zdrój – Kazimierza Wielka. Woziłem ludzi, którzy potrzebowali dojechać — nie turystów, nie korporacje. Zwykłych ludzi.",
      },
      {
        h3: "Jak rośliśmy",
        p: "Z czasem pojawiły się zlecenia na wycieczki, wesela, pielgrzymki. Flota rosła. Dziś dysponujemy 180 pojazdami — autokarami VDL, Scania, Mercedes-Benz, Irisbus, minibusami i pojazdami przystosowanymi do przewozu osób niepełnosprawnych. Mamy własny serwis techniczny, licencję krajową i międzynarodową WITD, potwierdzone referencje od gmin, szkół i instytucji.",
      },
      {
        h3: "Dlaczego Autokar Busko w Busku-Zdroju",
        p: "Busko-Zdrój to nasza baza od 2001 roku. Stąd zaczynaliśmy, tu jesteśmy.",
      },
    ],
  },
  en: {
    h2: "From scheduled bus lines in Busko-Zdrój. The Chmiel family story.",
    sections: [
      {
        h3: "Where we come from and where we are going",
        p: "Autokar Busko is a family business founded by Anna and Rafał Chmiel in 1997. We started passenger transport operations in 2001, when we received our first carrier licence. We began with scheduled bus routes across the Ponidzie region: Busko-Zdrój – Kielce – Radom – Warsaw, Busko – Kielce – Piotrków – Łódź, Kielce – Sandomierz – Tarnobrzeg, Kielce – Busko-Zdrój – Kazimierza Wielka. We carried ordinary people who needed to get somewhere — not tourists, not corporations.",
      },
      {
        h3: "How we grew",
        p: "Over time, bookings for day trips, weddings and pilgrimages started coming in. The fleet expanded. Today we operate 180 vehicles — VDL, Scania, Mercedes-Benz and Irisbus coaches, minibuses, and vehicles adapted for passengers with disabilities. We run our own service workshop, hold domestic and international WITD licences, and carry verified references from municipalities, schools and public institutions.",
      },
      {
        h3: "Why Autokar Busko in Busko-Zdrój",
        p: "Busko-Zdrój is our home base since 2001. This is where we started, this is where we are.",
      },
    ],
  },
  de: {
    h2: "Autokar Busko — Ihr Reisebusunternehmen in Busko-Zdrój, Ponidzie (Polen)",
    sections: [
      {
        h3: "Wer wir sind und über welche Flotte wir verfügen",
        p: "autokar-busko.pl ist die offizielle Website von Autokar Busko — einem familiengeführten Busreiseunternehmen aus Busko-Zdrój in Polen, das seit 1997 ununterbrochen tätig ist. Wir sind spezialisiert auf die Vermietung von Reisebussen, Bussen und Kleinbussen für Privatkunden, Unternehmen und Institutionen in Busko-Zdrój, der Region Ponidzie und in ganz Polen. Wir betreiben die größte Flotte der Region — 180 Fahrzeuge der Euro-6-Klasse, darunter Reisebusse mit 50 Sitzplätzen, Midibusse mit 35 Sitzplätzen, VIP-Kleinbusse für 17 Personen und 9-sitzige Transferfahrzeuge (Volkswagen Transporter). Wir betreiben eine eigene Werkstatt, was uns erlaubt, mehrere Gruppen gleichzeitig zu betreuen und jedes Fahrzeug in dauerhaft hohem Zustand zu halten.",
      },
      {
        h3: "Welche Transporte wir durchführen",
        p: "Jährlich vertrauen uns mehr als 500 Firmen und Familien. Wir bieten Busvermietung für Hochzeiten (Transport der Hochzeitsgäste in Busko-Zdrój und Umgebung), Klassenfahrten (im In- und Ausland), Wallfahrten (Tschenstochau, Licheń, Vatikan, Medjugorje, Lourdes, Fátima), Flughafentransfers (Warschau-Chopin, Warschau-Modlin, Krakau-Balice, Katowice-Pyrzowice, Breslau), Skifahrten ins Tatra-Gebirge nach Zakopane, Białka Tatrzańska und Bukowina Tatrzańska, Firmentransporte und Delegationsreisen sowie Fahrten zu Konzerten, Sportveranstaltungen und Konferenzen. Jedes Fahrzeug ist mit Klimaanlage, verstellbaren Sitzen und Multimedia-System ausgestattet, in ausgewählten Modellen auch mit Toilette und WLAN. Jede Reservierung umfasst einen erfahrenen Fahrer mit Führerschein der Klasse D — Fahrzeuge ohne Fahrer vermieten wir nicht.",
      },
      {
        h3: "Was uns auszeichnet",
        p: "Was uns auszeichnet: 28 Jahre ununterbrochene Erfahrung im Personenverkehr (seit 1997), eigene Werkstatt und Diagnosestation, ausgebildete Fahrer mit Führerschein der Klasse D und CPR-Zertifikaten, volle Insassenversicherung, nationale und internationale WITD-Lizenz sowie eine Bewertung von 4,8/5 bei Google auf Basis von über 250 verifizierten Kundenrezensionen. Die Buchung dauert 30 Minuten, und Sie erhalten Ihr Angebot noch am selben Tag. Rufen Sie an unter +48 41 345 32 25, schreiben Sie uns auf WhatsApp, füllen Sie das Kontaktformular aus oder besuchen Sie uns persönlich. Sitz: ul. Poprzeczna 1, 28-100 Busko-Zdrój, Polen, geöffnet Montag–Freitag 8:00–18:00 Uhr und Samstag 9:00–15:00 Uhr. E-Mail: biuro@autokar-busko.pl. Autokar Busko — Busvermietung in Busko-Zdrój, auf die Sie sich von der ersten Anfrage bis zum letzten Kilometer verlassen können.",
      },
    ],
  },
  ru: {
    h2: "Autokar Busko — ваш перевозчик в Буско-Здруй, Понидзе (Польша)",
    sections: [
      {
        h3: "Кто мы и каким автопарком располагаем",
        p: "autokar-busko.pl — официальный сайт Autokar Busko, семейного транспортного предприятия из Буско-Здруй (Польша), непрерывно работающего с 1997 года. Мы специализируемся на аренде туристических автобусов, автобусов и микроавтобусов для частных клиентов, фирм и организаций в Буско-Здруй, регионе Понидзе и по всей Польше. У нас самый большой автопарк в регионе — 180 автомобилей класса Евро 6, в том числе туристические автобусы на 50 мест, мидибусы на 35 мест, VIP-микроавтобусы на 17 пассажиров и 9-местные трансферные машины (Volkswagen Transporter). У нас собственный сервисный центр, что позволяет нам одновременно обслуживать несколько групп и поддерживать каждый автомобиль в неизменно высоком техническом состоянии.",
      },
      {
        h3: "Какие перевозки мы выполняем",
        p: "Нам ежегодно доверяют более 500 компаний и семей. Мы предоставляем аренду автобусов для свадеб (перевозка гостей по Буско-Здруй и окрестностям), школьных экскурсий (внутри страны и за рубежом), религиозных паломничеств (Ченстохова, Лихень, Ватикан, Меджугорье, Лурд, Фатима), трансферов в аэропорты (Варшава-Шопен, Варшава-Модлин, Краков-Балице, Катовице-Пыжовице, Вроцлав), горнолыжных поездок в Закопане, Бялку Татшаньску и Буковину Татшаньску в Татрах, корпоративных перевозок и служебных делегаций, а также поездок на концерты, спортивные мероприятия и конференции. Каждый автомобиль оснащён кондиционером, регулируемыми креслами и мультимедийной системой; в избранных моделях также есть туалет и Wi-Fi. Каждое бронирование включает опытного водителя категории D — автомобили без водителя мы не сдаём.",
      },
      {
        h3: "Что нас отличает",
        p: "Что нас отличает: 28 лет непрерывного опыта в пассажирских перевозках (с 1997 года), собственная станция технического обслуживания, сертифицированные водители категории D с подготовкой по СЛР, полное страхование пассажиров, национальная и международная лицензия WITD, рейтинг 4,8/5 в Google на основе более 250 проверенных отзывов клиентов. Бронирование занимает 30 минут, расчёт стоимости вы получите в тот же день. Позвоните по номеру +48 41 345 32 25 или +48 609 69 19 12, напишите в WhatsApp, заполните контактную форму или приезжайте лично. Офис: ul. Poprzeczna 1, 28-100 Busko-Zdrój, Польша, открыт с понедельника по пятницу с 8:00 до 18:00 и в субботу с 9:00 до 15:00. Электронная почта: biuro@autokar-busko.pl. Autokar Busko — аренда автобусов в Буско-Здруй, на которую вы можете положиться от первого запроса до последнего километра.",
      },
    ],
  },
  ar: {
    h2: "Autokar Busko — شركتكم للنقل في بوسكو-زدروي، بونيدزه (بولندا)",
    sections: [
      {
        h3: "من نحن وما هو أسطولنا",
        p: "autokar-busko.pl هو الموقع الرسمي لشركة Autokar Busko — شركة نقل عائلية من مدينة بوسكو-زدروي البولندية، تعمل بشكل مستمر منذ عام 1997. نحن متخصصون في تأجير الحافلات السياحية والحافلات الكبيرة والصغيرة للعملاء الأفراد والشركات والمؤسسات في بوسكو-زدروي وإقليم بونيدزه وجميع أنحاء بولندا. نمتلك أكبر أسطول في المنطقة — 180 مركبة من فئة Euro 6، بما في ذلك الحافلات السياحية بسعة 50 مقعدًا، والحافلات المتوسطة بسعة 35 مقعدًا، والحافلات الصغيرة VIP لـ 17 راكبًا، وحافلات النقل بسعة 9 مقاعد (فولكس فاجن ترانسبورتر). نحن نُشغّل ورشتنا الخاصة، مما يسمح لنا بخدمة عدة مجموعات في وقت واحد والحفاظ على كل مركبة في حالة فنية ممتازة باستمرار.",
      },
      {
        h3: "ما هي خدمات النقل التي نقدمها",
        p: "يثق بنا أكثر من 500 شركة وعائلة سنويًا. نقدم تأجير الحافلات لحفلات الزفاف (نقل ضيوف الزفاف في بوسكو-زدروي والمنطقة المحيطة)، والرحلات المدرسية (المحلية والدولية)، والحج الديني (تشينستوخوفا، الفاتيكان، ميدجوغوريه، لورد، فاطمة)، ونقل المطارات (وارسو شوبان، وارسو مودلين، كراكوف باليتسه، كاتوفيتسه بيجوفيتسه، فروتسواف)، ورحلات التزلج إلى زاكوباني وبيالكا تاترزانسكا وبوكوفينا تاترزانسكا في جبال تاترا، والنقل للشركات وسفر الموظفين، وكذلك الرحلات إلى الحفلات الموسيقية والأحداث الرياضية والمؤتمرات. كل مركبة مجهزة بمكيف هواء ومقاعد قابلة للتعديل ونظام وسائط متعددة، مع توفر المرحاض وشبكة Wi-Fi في الموديلات المختارة. يشمل كل حجز سائقًا متمرسًا حاصلًا على رخصة من الفئة D — لا نُؤجّر المركبات بدون سائق.",
      },
      {
        h3: "ما الذي يميزنا",
        p: "ما يميزنا: 28 عامًا من الخبرة المتواصلة في نقل الركاب (منذ 1997)، محطة فحص وصيانة خاصة بنا، سائقون معتمدون من الفئة D مع شهادات الإنعاش القلبي الرئوي، تأمين كامل على الركاب، تراخيص WITD المحلية والدولية، وتقييم 4.8/5 على Google بناءً على أكثر من 250 مراجعة موثقة من العملاء. يستغرق الحجز 30 دقيقة وستتلقى عرض الأسعار في نفس اليوم. اتصل على +48 41 345 32 25 أو +48 609 69 19 12، أو راسلنا عبر WhatsApp، أو املأ نموذج الاتصال، أو قم بزيارتنا شخصيًا. المكتب: ul. Poprzeczna 1, 28-100 Busko-Zdrój, بولندا، مفتوح من الاثنين إلى الجمعة من 8:00 إلى 18:00 والسبت من 9:00 إلى 15:00. البريد الإلكتروني: biuro@autokar-busko.pl. Autokar Busko — تأجير الحافلات في بوسكو-زدروي الذي يمكنك الاعتماد عليه من أول استفسار إلى آخر كيلومتر.",
      },
    ],
  },
  es: {
    h2: "Autokar Busko — su empresa de transporte en Busko-Zdrój, Ponidzie (Polonia)",
    sections: [
      {
        h3: "Quiénes somos y qué flota operamos",
        p: "autokar-busko.pl es la página web oficial de Autokar Busko — una empresa familiar de transporte de pasajeros con sede en Busko-Zdrój (Polonia), en funcionamiento ininterrumpido desde 1997. Estamos especializados en el alquiler de autocares, autobuses y minibuses para clientes particulares, empresas e instituciones en Busko-Zdrój, la región de Ponidzie y toda Polonia. Operamos la mayor flota de la región — 180 vehículos clase Euro 6, incluidos autocares turísticos de 50 plazas, midibuses de 35 plazas, minibuses VIP de 17 plazas y furgonetas de transfer de 9 plazas (Volkswagen Transporter). Disponemos de nuestro propio taller mecánico, lo que nos permite atender varios grupos simultáneamente y mantener cada vehículo en un estado técnico excelente.",
      },
      {
        h3: "Qué servicios de transporte ofrecemos",
        p: "Más de 500 empresas y familias confían en nosotros cada año. Ofrecemos alquiler de autocares para bodas (transporte de invitados en Busko-Zdrój y alrededores), excursiones escolares (nacionales e internacionales), peregrinaciones religiosas (Częstochowa, Vaticano, Medjugorje, Lourdes, Fátima), traslados al aeropuerto (Varsovia-Chopin, Varsovia-Modlin, Cracovia-Balice, Katowice-Pyrzowice, Wrocław), viajes de esquí a Zakopane, Białka Tatrzańska y Bukowina Tatrzańska en los Tatras, transporte corporativo y delegaciones de empleados, así como viajes a conciertos, eventos deportivos y conferencias. Cada vehículo está equipado con aire acondicionado, asientos reclinables y sistema multimedia; en modelos seleccionados también hay aseo y WiFi. Cada reserva incluye un conductor experimentado con permiso de categoría D — no alquilamos vehículos sin conductor.",
      },
      {
        h3: "Qué nos distingue",
        p: "Lo que nos distingue: 28 años de experiencia continua en transporte de pasajeros (desde 1997), taller propio de inspección y mantenimiento, conductores certificados con permiso categoría D y formación en RCP, seguro completo de pasajeros, licencia WITD nacional e internacional, y una valoración de 4,8/5 en Google con más de 250 reseñas verificadas. La reserva lleva 30 minutos y recibirá su presupuesto el mismo día. Llame al +48 41 345 32 25 o +48 609 69 19 12, escríbanos por WhatsApp, complete el formulario de contacto o visite nuestra oficina. Oficina: ul. Poprzeczna 1, 28-100 Busko-Zdrój, Polonia, abierta de lunes a viernes de 8:00 a 18:00 y sábados de 9:00 a 15:00. Email: biuro@autokar-busko.pl. Autokar Busko — alquiler de autocares en Busko-Zdrój con el que puede contar desde la primera consulta hasta el último kilómetro.",
      },
    ],
  },
  fr: {
    h2: "Autokar Busko — votre transporteur à Busko-Zdrój, Ponidzie (Pologne)",
    sections: [
      {
        h3: "Qui nous sommes et quelle flotte nous exploitons",
        p: "autokar-busko.pl est le site officiel d'Autokar Busko — une entreprise familiale de transport de passagers basée à Busko-Zdrój, en Pologne, en activité ininterrompue depuis 1997. Nous sommes spécialisés dans la location d'autocars, d'autobus et de minibus pour les particuliers, les entreprises et les institutions à Busko-Zdrój, dans la région de Ponidzie et dans toute la Pologne. Nous exploitons la plus grande flotte de la région — 180 véhicules de classe Euro 6, dont des autocars touristiques de 50 places, des midibus de 35 places, des minibus VIP de 17 places et des navettes de 9 places (Volkswagen Transporter). Nous disposons de notre propre atelier de service, ce qui nous permet de gérer plusieurs groupes simultanément tout en maintenant chaque véhicule dans un état technique constamment élevé.",
      },
      {
        h3: "Quels services de transport nous proposons",
        p: "Plus de 500 entreprises et familles nous font confiance chaque année. Nous proposons la location d'autocars pour les mariages (transport des invités à Busko-Zdrój et dans les environs), les voyages scolaires (nationaux et internationaux), les pèlerinages religieux (Częstochowa, Vatican, Medjugorje, Lourdes, Fátima), les transferts aéroport (Varsovie-Chopin, Varsovie-Modlin, Cracovie-Balice, Katowice-Pyrzowice, Wrocław), les séjours au ski à Zakopane, Białka Tatrzańska et Bukowina Tatrzańska dans les Tatras, le transport d'entreprise et les déplacements de délégations, ainsi que les trajets vers les concerts, événements sportifs et conférences. Chaque véhicule est équipé de climatisation, de sièges inclinables et d'un système multimédia ; certains modèles disposent également de toilettes et du WiFi. Chaque réservation inclut un chauffeur expérimenté titulaire du permis catégorie D — nous ne louons pas de véhicules sans chauffeur.",
      },
      {
        h3: "Ce qui nous distingue",
        p: "Ce qui nous distingue : 28 ans d'expérience continue dans le transport de passagers (depuis 1997), atelier et station de contrôle technique propres, chauffeurs certifiés permis D avec formation RCP, assurance passagers complète, licences WITD nationale et internationale, et une note de 4,8/5 sur Google fondée sur plus de 250 avis clients vérifiés. La réservation prend 30 minutes et vous recevrez votre devis le jour même. Appelez le +48 41 345 32 25 ou +48 609 69 19 12, écrivez-nous sur WhatsApp, remplissez le formulaire de contact ou rendez-vous à notre bureau. Bureau : ul. Poprzeczna 1, 28-100 Busko-Zdrój, Pologne, ouvert du lundi au vendredi de 8h00 à 18h00 et le samedi de 9h00 à 15h00. E-mail : biuro@autokar-busko.pl. Autokar Busko — location d'autocars à Busko-Zdrój sur laquelle vous pouvez compter de la première demande au dernier kilomètre.",
      },
    ],
  },
};

const landingFaqItemsPl = faqData.landing.categories
  .flatMap((cat) => cat.questions)
  .map((q) => ({
    question: q.q,
    answer: q.a.replace(/<[^>]*>/g, ""),
  }));

const faqByLang: Record<Language, Array<{ question: string; answer: string }>> = {
  pl: landingFaqItemsPl,
  en: [
    { question: "How do I book a coach?", answer: "Just call or send a message via form/WhatsApp. Provide your route, date and group size and we'll prepare an offer." },
    { question: "How many passengers can you transport?", answer: "We have minibuses and coaches for 9, 17, 35 and 50 people. For larger groups we combine multiple vehicles." },
    { question: "Do you offer airport transfers?", answer: "Yes. We operate transfers to airports in Warsaw, Krakow, Katowice and Wroclaw." },
    { question: "How much does coach rental cost?", answer: "The price depends on distance, duration and vehicle type. Indicative rates are on the pricing page; we calculate the final offer individually." },
    { question: "What equipment do the vehicles have?", answer: "Standard is air conditioning and comfortable seats. Depending on the model, USB, WiFi, toilet and multimedia are also available." },
    { question: "Are the vehicles safe?", answer: "Yes. The fleet is regularly serviced, has all required inspections and insurance, and drivers hold the relevant licences." },
    { question: "Can I change the booking date?", answer: "Yes, if you let us know in advance. We'll check availability and suggest the nearest possible date." },
    { question: "Is a driver included?", answer: "Yes, every service includes a professional driver. We do not rent vehicles without a driver." },
    { question: "Can passengers eat/drink on the coach?", answer: "Yes, light snacks and drinks are allowed, provided passengers keep the coach clean and observe safety rules." },
    { question: "What guarantees and insurance do you offer?", answer: "We provide licensed transport, OC liability insurance and safety standards compliant with regulations." },
  ],
  de: [
    { question: "Wie buche ich einen Reisebus?", answer: "Einfach anrufen oder per Formular/WhatsApp schreiben. Nennen Sie Strecke, Datum und Personenzahl — wir erstellen ein Angebot." },
    { question: "Für wie viele Personen haben Sie Fahrzeuge?", answer: "Wir bieten Minibusse und Reisebusse für 9, 17, 35 und 50 Personen. Bei größeren Gruppen kombinieren wir mehrere Fahrzeuge." },
    { question: "Bieten Sie Flughafentransfers an?", answer: "Ja. Wir fahren zu Flughäfen in Warschau, Krakau, Kattowitz und Breslau." },
    { question: "Was kostet die Busmiete?", answer: "Der Preis hängt von Entfernung, Dauer und Fahrzeugtyp ab. Orientierungspreise finden Sie auf der Preisseite." },
    { question: "Welche Ausstattung haben die Fahrzeuge?", answer: "Standard ist Klimaanlage und bequeme Sitze. Je nach Modell sind auch USB, WLAN, Toilette und Multimedia verfügbar." },
    { question: "Sind die Fahrzeuge sicher?", answer: "Ja. Die Flotte wird regelmäßig gewartet, hat alle Prüfungen und Versicherungen und die Fahrer haben die nötigen Lizenzen." },
    { question: "Kann ich das Buchungsdatum ändern?", answer: "Ja, wenn Sie uns rechtzeitig informieren. Wir prüfen die Verfügbarkeit und schlagen den nächstmöglichen Termin vor." },
    { question: "Ist ein Fahrer im Preis inbegriffen?", answer: "Ja, jede Leistung umfasst einen professionellen Fahrer. Fahrzeuge ohne Fahrer vermieten wir nicht." },
    { question: "Darf man im Bus essen/trinken?", answer: "Ja, leichte Snacks und Getränke sind erlaubt, solange Sauberkeit und Sicherheitsregeln eingehalten werden." },
    { question: "Welche Garantien und Versicherungen bieten Sie?", answer: "Wir bieten lizenzierten Transport, Haftpflichtversicherung und gesetzeskonforme Sicherheitsstandards." },
  ],
  ru: [
    { question: "Как забронировать автобус?", answer: "Просто позвоните или напишите через форму/WhatsApp. Укажите маршрут, дату и количество человек — мы подготовим предложение." },
    { question: "На сколько человек у вас есть автобусы?", answer: "У нас есть микроавтобусы и автобусы на 9, 17, 35 и 50 мест. Для больших групп объединяем несколько машин." },
    { question: "Предлагаете ли вы трансфер в аэропорт?", answer: "Да. Мы выполняем трансферы в аэропорты Варшавы, Кракова, Катовице и Вроцлава." },
    { question: "Сколько стоит аренда автобуса?", answer: "Цена зависит от расстояния, времени и типа автобуса. Ориентировочные тарифы на странице цен, итоговое предложение рассчитываем индивидуально." },
    { question: "Какое оборудование в автобусах?", answer: "Стандарт — кондиционер и удобные сиденья. В зависимости от модели доступны USB, WiFi, туалет и мультимедиа." },
    { question: "Безопасны ли автобусы?", answer: "Да. Парк регулярно обслуживается, имеет все необходимые проверки и страховки, а водители — соответствующие права." },
    { question: "Можно ли изменить дату бронирования?", answer: "Да, если вы сообщите заранее. Проверим наличие и предложим ближайшую возможную дату." },
    { question: "Водитель включён в стоимость?", answer: "Да, каждая услуга включает профессионального водителя. Автобусы без водителя не арендуем." },
    { question: "Можно ли есть и пить в автобусе?", answer: "Да, лёгкие закуски и напитки разрешены при соблюдении чистоты и правил безопасности." },
    { question: "Какие гарантии и страховка?", answer: "Мы предоставляем лицензированный транспорт, страхование OC и стандарты безопасности по законодательству." },
  ],
  ar: [
    { question: "كيف أحجز حافلة؟", answer: "فقط اتصل أو أرسل رسالة عبر النموذج/واتساب. أعطنا المسار والتاريخ وعدد الأشخاص وسنُعدّ عرضًا." },
    { question: "لكم شخصًا تتوفر لديكم مركبات؟", answer: "لدينا حافلات صغيرة وكبيرة تتسع لـ 9 و17 و35 و50 شخصًا. للمجموعات الكبيرة نُدمج عدة مركبات." },
    { question: "هل تقدمون خدمة نقل المطار؟", answer: "نعم. نُنفّذ نقلًا إلى مطارات وارسو وكراكوف وكاتوفيتسه وفروتسواف." },
    { question: "كم تكلفة استئجار حافلة؟", answer: "السعر يعتمد على المسافة والمدة ونوع المركبة. الأسعار التقريبية في صفحة التسعير؛ نحسب العرض النهائي بشكل فردي." },
    { question: "ما التجهيزات المتوفرة في المركبات؟", answer: "المعيار هو مكيف هواء ومقاعد مريحة. حسب الموديل تتوفر أيضًا USB وواي فاي ودورة مياه ووسائط متعددة." },
    { question: "هل المركبات آمنة؟", answer: "نعم. يتم صيانة الأسطول بانتظام وله جميع الفحوصات والتأمينات، والسائقون يحملون التراخيص اللازمة." },
    { question: "هل يمكن تغيير تاريخ الحجز؟", answer: "نعم، إذا أخطرتنا مسبقًا. سنتحقق من التوفر ونقترح أقرب تاريخ ممكن." },
    { question: "هل السائق مدرج في السعر؟", answer: "نعم، كل خدمة تشمل سائقًا محترفًا. لا نؤجر مركبات بدون سائق." },
    { question: "هل يُسمح بالأكل والشرب في الحافلة؟", answer: "نعم، يُسمح بالوجبات الخفيفة والمشروبات شرط المحافظة على النظافة واحترام قواعد السلامة." },
    { question: "ما الضمانات والتأمينات المتوفرة؟", answer: "نوفر نقلًا مرخصًا وتأمين مسؤولية مدنية ومعايير سلامة وفق اللوائح." },
  ],
  es: [
    { question: "¿Cómo reservo un autocar?", answer: "Simplemente llama o manda un mensaje por formulario/WhatsApp. Indica ruta, fecha y número de personas y prepararemos una oferta." },
    { question: "¿Para cuántas personas tenéis vehículos?", answer: "Disponemos de minibuses y autocares para 9, 17, 35 y 50 personas. Para grupos más grandes combinamos varios vehículos." },
    { question: "¿Ofrecéis transfer al aeropuerto?", answer: "Sí. Realizamos transfers a los aeropuertos de Varsovia, Cracovia, Katowice y Wrocław." },
    { question: "¿Cuánto cuesta el alquiler de autocar?", answer: "El precio depende de la distancia, duración y tipo de vehículo. Las tarifas orientativas están en la página de precios." },
    { question: "¿Qué equipamiento tienen los vehículos?", answer: "El estándar incluye aire acondicionado y asientos cómodos. Según el modelo también hay USB, WiFi, aseo y multimedia." },
    { question: "¿Son seguros los vehículos?", answer: "Sí. La flota recibe mantenimiento regular, tiene todas las inspecciones y seguros, y los conductores tienen las licencias necesarias." },
    { question: "¿Puedo cambiar la fecha de reserva?", answer: "Sí, si lo comunicas con antelación. Verificamos disponibilidad y proponemos la fecha más próxima posible." },
    { question: "¿Está incluido el conductor?", answer: "Sí, cada servicio incluye un conductor profesional. No alquilamos vehículos sin conductor." },
    { question: "¿Se puede comer y beber en el autocar?", answer: "Sí, se permiten aperitivos y bebidas ligeras siempre que se mantenga la limpieza y las normas de seguridad." },
    { question: "¿Qué garantías y seguros ofrecéis?", answer: "Ofrecemos transporte con licencia, seguro de responsabilidad civil y estándares de seguridad conforme a la normativa." },
  ],
  fr: [
    { question: "Comment réserver un autocar ?", answer: "Appelez ou envoyez un message via formulaire/WhatsApp. Indiquez l'itinéraire, la date et le nombre de personnes — nous préparerons une offre." },
    { question: "Pour combien de personnes avez-vous des véhicules ?", answer: "Nous avons des minibus et autocars pour 9, 17, 35 et 50 personnes. Pour les grands groupes, nous combinons plusieurs véhicules." },
    { question: "Proposez-vous des transferts aéroport ?", answer: "Oui. Nous assurons des transferts vers les aéroports de Varsovie, Cracovie, Katowice et Wrocław." },
    { question: "Combien coûte la location d'un autocar ?", answer: "Le prix dépend de la distance, de la durée et du type de véhicule. Les tarifs indicatifs sont sur la page tarifs." },
    { question: "Quel équipement ont les véhicules ?", answer: "La climatisation et des sièges confortables sont inclus. Selon le modèle, USB, WiFi, toilettes et multimédia sont disponibles." },
    { question: "Les véhicules sont-ils sûrs ?", answer: "Oui. La flotte est régulièrement entretenue, dispose de tous les contrôles et assurances, et les chauffeurs ont les licences requises." },
    { question: "Puis-je changer la date de réservation ?", answer: "Oui, si vous nous prévenez à l'avance. Nous vérifions la disponibilité et proposons la date la plus proche possible." },
    { question: "Un chauffeur est-il inclus ?", answer: "Oui, chaque prestation inclut un chauffeur professionnel. Nous ne louons pas de véhicules sans chauffeur." },
    { question: "Peut-on manger et boire dans l'autocar ?", answer: "Oui, les collations légères et boissons sont autorisées à condition de maintenir la propreté et de respecter les règles de sécurité." },
    { question: "Quelles garanties et assurances proposez-vous ?", answer: "Nous fournissons un transport licencié, une assurance responsabilité civile et des normes de sécurité conformes à la réglementation." },
  ],
};

function toLanguage(lang: string): Language {
  if (lang === "en" || lang === "de" || lang === "ru" || lang === "ar" || lang === "es" || lang === "fr") {
    return lang;
  }
  return "pl";
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const activeLang = toLanguage(lang);
  return {
    title: metaTitles[activeLang],
    description: metaDescriptions[activeLang],
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const activeLang = toLanguage(lang);
  const intro = companyIntroByLang[activeLang];

  return (
    <>
      <HeroSlider lang={activeLang} />

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-12" dir={activeLang === "ar" ? "rtl" : undefined}>
          <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] leading-tight">{intro.h2}</h2>

          <div className="mt-8 space-y-8 text-[#1a1a1a]">
            {intro.sections.map((section) => (
              <article className="space-y-3" key={section.h3}>
                <h3 className="text-xl md:text-2xl font-bold">{section.h3}</h3>
                <p className="text-base md:text-lg leading-relaxed text-gray-700">{section.p}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <TrustWall lang={activeLang} />

      <CardCategory lang={activeLang} />

      <HowItWorks lang={activeLang} />

      {activeLang === "pl" && <FAQAccordion items={faqByLang[activeLang]} heading={faqHeading[activeLang]} />}

      <section className="py-16 px-4 bg-[#1a1a1a] text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black mb-4">{quickHeading[activeLang]}</h2>
          <p className="text-gray-300 mb-8 text-lg">{quickBody[activeLang]}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="tel:413453225" variant="phone">
              📞 +48 41 345 32 25 lub +48 609 69 19 12
            </CTAButton>
            <CTAButton
              href={`/${activeLang}/kontakt`}
              variant="secondary"
              className="border-white text-white hover:bg-white hover:text-[#1a1a1a]"
            >
              {contactFormCta[activeLang]}
            </CTAButton>
          </div>
        </div>
      </section>

      <PriceTable rows={pricingData.vehicles} heading={pricingHeading[activeLang]} lang={activeLang} />

      {activeLang === "pl" && (
        <section className="bg-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-10 text-center">Nasze usługi</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Wesele</h3>
                <p className="text-gray-600 text-sm flex-1">Transport gości weselnych - 500+ wesel obsłużonych, ocena 4.9/5</p>
                <a href="/pl/wynajem-autokaru-na-wesele" className="mt-4 text-[#639922] font-semibold text-sm hover:underline">Sprawdź ofertę →</a>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Wycieczka licealna</h3>
                <p className="text-gray-600 text-sm flex-1">Wycieczki maturalne krajowe i zagraniczne - 40+ liceów rocznie</p>
                <a href="/pl/wycieczka-licealna" className="mt-4 text-[#639922] font-semibold text-sm hover:underline">Sprawdź ofertę →</a>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Wycieczka przedszkolna</h3>
                <p className="text-gray-600 text-sm flex-1">Bezpieczna podróż dla najmłodszych - 80+ przedszkoli rocznie</p>
                <a href="/pl/wycieczka-przedszkolna" className="mt-4 text-[#639922] font-semibold text-sm hover:underline">Sprawdź ofertę →</a>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Pielgrzymka</h3>
                <p className="text-gray-600 text-sm flex-1">Pielgrzymki krajowe i zagraniczne - 200+ parafii rocznie</p>
                <a href="/pl/autokar-na-pielgrzymke" className="mt-4 text-[#639922] font-semibold text-sm hover:underline">Sprawdź ofertę →</a>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Pogrzeb</h3>
                <p className="text-gray-600 text-sm flex-1">Dyskretny transport rodziny - 100+ pogrzebów obsłużonych</p>
                <a href="/pl/autokar-na-pogrzeb" className="mt-4 text-[#639922] font-semibold text-sm hover:underline">Sprawdź ofertę →</a>
              </div>
              <div className="border border-gray-200 rounded-lg p-6 flex flex-col">
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-2">Przysięga wojskowa</h3>
                <p className="text-gray-600 text-sm flex-1">Transport rodziny żołnierza - 30+ przysiąg rocznie</p>
                <a href="/pl/przysiega-wojskowa" className="mt-4 text-[#639922] font-semibold text-sm hover:underline">Sprawdź ofertę →</a>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 px-4 bg-[#1D9E75] text-[#1a1a1a] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-black mb-4">{finalHeading[activeLang]}</h2>
          <p className="text-lg mb-8 font-medium">{finalBody[activeLang]}</p>
          <CTAButton href="tel:413453225" variant="secondary">
            {finalCta[activeLang]}
          </CTAButton>
        </div>
      </section>
    </>
  );
}
