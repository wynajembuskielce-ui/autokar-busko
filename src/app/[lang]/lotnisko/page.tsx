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
  pl: "Transfer na lotnisko z Krakowa | Chopin, Balice, Pyrzowice, Wrocław",
  en: "Airport transfer from Krakow | Chopin, Balice, Pyrzowice, Wroclaw",
  de: "Flughafentransfer ab Krakow | Chopin, Balice, Pyrzowice, Breslau",
  ru: "Трансфер в аэропорт из Кельце | Варшава, Краков, Катовице, Вроцлав",
  ar: "نقل إلى المطار من كيلتسه | وارسو وكراكوف وكاتوفيتسه وفروتسواف",
  es: "Transfer aeropuerto desde Krakow | Varsovia, Cracovia, Katowice, Wroclaw",
  fr: "Transfert aeroport depuis Krakow | Varsovie, Cracovie, Katowice, Wroclaw",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Transfer grupowy na lotnisko: Chopin 170 km, Balice 110 km, Pyrzowice 130 km, Wrocław 210 km. 24 lata doświadczenia.",
  en: "Group airport transfer: Chopin 170 km, Balice 110 km, Pyrzowice 130 km, Wroclaw 210 km. 24 years of experience.",
  de: "Gruppen-Flughafentransfer: Chopin 170 km, Balice 110 km, Pyrzowice 130 km, Breslau 210 km. 24 Jahre Erfahrung.",
  ru: "Групповой трансфер в аэропорт: Шопен 170 км, Балице 110 км, Пыжовице 130 км, Вроцлав 210 км.",
  ar: "نقل جماعي إلى المطار: شوبان 170 كم، باليتسه 110 كم، بيرجوفيتسه 130 كم، فروتسواف 210 كم.",
  es: "Transfer grupal al aeropuerto: Chopin 170 km, Balice 110 km, Pyrzowice 130 km, Wroclaw 210 km.",
  fr: "Transfert groupe aeroport: Chopin 170 km, Balice 110 km, Pyrzowice 130 km, Wroclaw 210 km.",
};

const heroTitles: Record<Language, string> = {
  pl: "Transfer Grupowy na Lotnisko",
  en: "Group Airport Transfer",
  de: "Gruppen-Flughafentransfer",
  ru: "Групповой трансфер в аэропорт",
  ar: "نقل جماعي إلى المطار",
  es: "Transfer grupal al aeropuerto",
  fr: "Transfert groupe aeroport",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Twoja grupa dociera na lot bez stresu i z zapasem czasu. 24 lata doświadczenia i koordynacja od drzwi do terminala.",
  en: "Your group reaches airport stress-free and with time buffer. 24 years of experience from door to terminal.",
  de: "Ihre Gruppe erreicht den Flughafen stressfrei und mit Zeitreserve. 24 Jahre Erfahrung von Tur zu Terminal.",
  ru: "Группа прибывает в аэропорт без стресса и с запасом времени. 24 года опыта от двери до терминала.",
  ar: "تصل المجموعة إلى المطار بدون توتر ومع هامش زمني مريح. خبرة 23 سنة من الباب إلى المحطة.",
  es: "Tu grupo llega al aeropuerto sin estres y con margen de tiempo. 23 anos de experiencia puerta a terminal.",
  fr: "Votre groupe arrive a l'aeroport sans stress et avec marge de temps. 24 ans d'experience porte a terminal.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zamów transfer lotniskowy - +48 41 345 32 25 lub ",
  en: "Book airport transfer - +48 41 345 32 25 lub ",
  de: "Flughafentransfer buchen - +48 41 345 32 25 lub ",
  ru: "Заказать трансфер - +48 41 345 32 25 lub ",
  ar: "احجز النقل - +48 41 345 32 25 lub ",
  es: "Reservar transfer - +48 41 345 32 25 lub ",
  fr: "Reserver transfert - +48 41 345 32 25 lub ",
};

const featureHeadings: Record<Language, string> = {
  pl: "Najczęstsze lotniska z Krakowa",
  en: "Most used airports from Krakow",
  de: "Haufigste Flughafen ab Krakow",
  ru: "Популярные аэропорты из Кельце",
  ar: "أكثر المطارات استخدامًا من كيلتسه",
  es: "Aeropuertos mas usados desde Krakow",
  fr: "Aeroports les plus frequents depuis Krakow",
};

const featuresByLang: Record<Language, Array<{ icon: string; title: string; description: string }>> = {
  pl: [
    { icon: "✈️", title: "Chopin, Balice, Pyrzowice, Wrocław", description: "Stałe trasy grupowe: Warszawa Chopin 170 km, Kraków Balice 110 km, Katowice 130 km, Wrocław 210 km." },
    { icon: "⏱️", title: "Zapas czasowy i punktualność", description: "Wyjazd planujemy tak, aby Twoja grupa miała bufor na odprawę i spokojne wejście na terminal." },
    { icon: "🧳", title: "Bagaż i różne terminale", description: "Koordynujemy odbiory i wysadzenia pod właściwym terminalem, także przy podziale grupy." },
  ],
  en: [
    { icon: "✈️", title: "Chopin, Balice, Pyrzowice, Wroclaw", description: "Regular group routes from Krakow with fixed distance planning and transfer timing." },
    { icon: "⏱️", title: "Time buffer and punctuality", description: "Departure is planned with check-in buffer so your group avoids rush and stress." },
    { icon: "🧳", title: "Luggage and terminal split", description: "We coordinate luggage handling and drop-off at correct terminals, even for split groups." },
  ],
  de: [
    { icon: "✈️", title: "Chopin, Balice, Pyrzowice, Breslau", description: "Regelmassige Gruppenrouten ab Krakow mit klarer Distanz- und Zeitplanung." },
    { icon: "⏱️", title: "Zeitreserve und Punktlichkeit", description: "Abfahrt mit ausreichender Reserve fur Check-in und Sicherheitskontrolle." },
    { icon: "🧳", title: "Gepack und Terminalaufteilung", description: "Absetzen am richtigen Terminal auch bei aufgeteilter Gruppe." },
  ],
  ru: [
    { icon: "✈️", title: "Шопен, Балице, Пыжовице, Вроцлав", description: "Регулярные групповые маршруты из Кельце с точным расчетом времени и расстояния." },
    { icon: "⏱️", title: "Запас времени", description: "Планируем выезд с учетом регистрации и контроля, чтобы группа не спешила." },
    { icon: "🧳", title: "Багаж и разные терминалы", description: "Координируем посадку и высадку у нужного терминала, даже при разделении группы." },
  ],
  ar: [
    { icon: "✈️", title: "شوبان وباليتسه وبيرجوفيتسه وفروتسواف", description: "مسارات جماعية منتظمة من كيلتسه مع تخطيط دقيق للمسافة والوقت." },
    { icon: "⏱️", title: "هامش زمني آمن", description: "نخطط الانطلاق مع وقت احتياطي لتسجيل السفر والتفتيش." },
    { icon: "🧳", title: "الأمتعة والمحطات المختلفة", description: "تنسيق الإنزال عند المحطة الصحيحة حتى عند تقسيم المجموعة." },
  ],
  es: [
    { icon: "✈️", title: "Chopin, Balice, Pyrzowice, Wroclaw", description: "Rutas grupales regulares desde Krakow con plan claro de distancia y tiempo." },
    { icon: "⏱️", title: "Margen de tiempo", description: "Salida planificada con buffer para check-in y control de seguridad." },
    { icon: "🧳", title: "Equipaje y terminales", description: "Coordinamos acceso al terminal correcto incluso con grupo dividido." },
  ],
  fr: [
    { icon: "✈️", title: "Chopin, Balice, Pyrzowice, Wroclaw", description: "Liaisons groupes regulieres depuis Krakow avec plan distance/temps precise." },
    { icon: "⏱️", title: "Marge de temps", description: "Depart planifie avec reserve pour enregistrement et controle securite." },
    { icon: "🧳", title: "Bagages et terminaux", description: "Coordination depose au bon terminal, meme pour groupes fractionnes." },
  ],
};

const faqHeadings: Record<Language, string> = {
  pl: "FAQ - Transfer lotniskowy",
  en: "FAQ - Airport transfer",
  de: "FAQ - Flughafentransfer",
  ru: "FAQ - Трансфер в аэропорт",
  ar: "الاسئلة - نقل المطار",
  es: "FAQ - Transfer aeropuerto",
  fr: "FAQ - Transfert aeroport",
};

const faqByLang: Record<Language, Array<{ question: string; answer: string }>> = {
  pl: [
    { question: "Które lotnisko jest najbliższe Krakowa?", answer: "Najbliżej jest Radom (ok. 90 km), a najczęściej wybierane przez grupy są także Kraków Balice (ok. 120 km), Katowice Pyrzowice (ok. 160 km) oraz Warszawa Chopina (ok. 180 km)." },
    { question: "Ile kosztuje transfer z lotniska Kraków Balice do centrum?", answer: "Orientacyjnie od ok. 800 PLN za bus i od ok. 1200 PLN za autokar. Finalna cena zależy od liczby osób, terminu i godzin oczekiwania." },
    { question: "Czy organizujecie transport na targi i imprezy masowe w sezonie letnim?", answer: "Tak. Obsługujemy delegacje, wystawców i gości targowych na trasach lotnisko-hotel-obiekt w całej Polsce." },
    { question: "Jak dojechać z lotniska do Targów Kraków?", answer: "Najwygodniej bezpośrednim transferem grupowym pod halę targową, bez przesiadek i bez ryzyka opóźnień." },
    { question: "Czy jest transport z Pyrzowic do Krakowa?", answer: "Tak. Trasa z Katowice Pyrzowice do Krakowa zajmuje zwykle ok. 2 godzin, w zależności od ruchu." },
    { question: "Czy możecie odebrać grupę z dworca PKP Kraków?", answer: "Tak. Realizujemy odbiory z PKP i PKS oraz dowozy do hoteli, targów i na lotniska." },
    { question: "Ile osób mieści bus na transfer lotniskowy?", answer: "Obsługujemy transfery od 8 do 80+ osób: minibusy, midibusy i autokary pełnowymiarowe." },
    { question: "Czy kierowca będzie czekać z tabliczką na lotnisku?", answer: "Tak. Kierowca może oczekiwać przy wyjściu z tabliczką z nazwą firmy lub imieniem grupy." },
  ],
  en: [
    { question: "Which airport is closest to Krakow, Poland?", answer: "The most practical airports are Krakow KRK (about 120 km), Katowice KTW (about 160 km), Warsaw Chopin WAW (about 180 km) and Radom RDO (about 90 km)." },
    { question: "How to get from Krakow Airport to Krakow?", answer: "The best group option is a direct private minibus or coach transfer. Typical travel time is around 1.5 to 2 hours." },
    { question: "Is there a shuttle bus from Krakow airport to Krakow?", answer: "There is no reliable direct public shuttle for groups. Private transfer is the safest and most time-efficient choice." },
    { question: "How much is a bus transfer from Krakow Airport to Krakow Trade Fair Centre?", answer: "Typical rates start from around EUR 280 for minibus service and around EUR 400+ for a full-size coach." },
    { question: "How to arrange group transport for trade fairs and events in Kraków?", answer: "We provide dedicated transport for exhibitors, delegations and VIP teams: airport pick-up, hotel shuttles and fairground runs." },
    { question: "Can you pick up our group at Warsaw Chopin Airport?", answer: "Yes. Warsaw Chopin to Krakow usually takes around 2.5 hours depending on traffic." },
    { question: "Do you provide transport for Krakow Trade Fair visitors?", answer: "Yes. We run airport transfers, hotel shuttles and fixed daily routes during fairs and events." },
    { question: "What size buses are available for airport transfer?", answer: "We offer minibus (8-20), midibus (20-35) and full coach (40-57) options depending on group size." },
  ],
  de: [
    { question: "Welcher Flughafen liegt am nachsten zu Krakow?", answer: "Am haufigsten genutzt werden Krakau KRK (ca. 120 km), Kattowitz KTW (ca. 160 km) und Warschau WAW (ca. 180 km)." },
    { question: "Transfer vom Flughafen Krakau nach Krakow - Kosten und Dauer?", answer: "Die Fahrt dauert in der Regel ca. 1,5 bis 2 Stunden. Preise beginnen ab etwa 280 EUR je nach Fahrzeuggroesse." },
    { question: "Bustransfer zu Messen und Veranstaltungen in Krakow?", answer: "Ja. Wir organisieren Transfers fur Aussteller, Delegationen und Fachbesucher inklusive Hotelshuttles." },
    { question: "Wie komme ich vom Flughafen Kattowitz nach Krakow?", answer: "Am bequemsten mit privatem Gruppentransfer direkt zum Hotel oder Messegelande. Fahrzeit meist rund 2 Stunden." },
    { question: "Gruppentransfer fur Messen in Krakow?", answer: "Ja, wir planen komplette Shuttle-Logistik fur Messetage inklusive fester Zeitfenster." },
  ],
  ru: [
    { question: "Какой аэропорт ближе всего к Кельце?", answer: "Чаще всего используют Краков (около 120 км), Катовице (около 160 км), Варшаву (около 180 км) и Радом (около 90 км)." },
    { question: "Трансфер из аэропорта Кракова в Кельце - цена?", answer: "Ориентировочно от 1200 злотых за автобус, в зависимости от числа пассажиров и времени ожидания." },
    { question: "Транспорт на выставки и ярмарки в Кракове?", answer: "Да. Организуем логистику для делегаций и участников: аэропорт, отель, выставочный центр." },
    { question: "Как добраться из аэропорта Варшавы в Кельце?", answer: "Удобнее всего частным трансфером. Поездка обычно занимает около 2,5 часа." },
    { question: "Можно ли заказать автобус с русскоговорящим водителем?", answer: "Да, по запросу можем подобрать обслуживание с водителем, который говорит по-русски." },
  ],
  ar: [
    { question: "ما هو اقرب مطار الى كيلتسه في بولندا؟", answer: "الخيارات الاكثر استخداما هي مطار كراكوف (حوالي 120 كم)، كاتوفيتسه (حوالي 160 كم)، وارسو (حوالي 180 كم)، ورادوم (حوالي 90 كم)." },
    { question: "كم تكلفة النقل من مطار كراكوف الى كيلتسه؟", answer: "تبدأ الاسعار عادة من حوالي 280 يورو للميني باص، حسب عدد الركاب وتفاصيل الرحلة." },
    { question: "هل تتوفر خدمة نقل للمعارض والفعاليات في كراكوف؟", answer: "نعم. ننظم نقل المجموعات والوفود بين المطار والفندق ومركز المعارض." },
    { question: "هل يوجد طعام حلال متاح خلال الرحلة؟", answer: "نعم، يمكن ترتيب توقف مناسب في مطعم حلال اثناء الطريق عند التخطيط المسبق." },
    { question: "هل السائق يتحدث الانجليزية؟", answer: "نعم، يتوفر سائقون يتحدثون الانجليزية لراحة المجموعات الدولية." },
  ],
  es: [
    { question: "Cual es el aeropuerto mas cercano a Krakow?", answer: "Los mas usados son Cracovia (aprox. 120 km), Katowice (aprox. 160 km) y Varsovia (aprox. 180 km)." },
    { question: "Cuanto cuesta un traslado del aeropuerto de Cracovia a Krakow?", answer: "Los precios suelen empezar alrededor de 280 EUR, segun tamano del grupo y tipo de vehiculo." },
    { question: "Organizan transporte para ferias en Krakow?", answer: "Si. Atendemos ferias y eventos con traslados aeropuerto-hotel-recinto ferial." },
  ],
  fr: [
    { question: "Quel aeroport est le plus proche de Krakow?", answer: "Les options les plus frequentes sont Cracovie (env. 120 km), Katowice (env. 160 km) et Varsovie (env. 180 km)." },
    { question: "Combien coute un transfert de l'aeroport de Cracovie a Krakow?", answer: "En general, a partir d'environ 280 EUR selon la taille du groupe et le vehicule." },
    { question: "Transport pour les salons et evenements a Krakow?", answer: "Oui. Nous organisons les transferts pour exposants et delegations pendant les salons." },
  ],
};

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Podaj lotnisko, terminal i liczbę osób - przygotujemy plan przejazdu",
  en: "Share airport, terminal and headcount - we prepare transfer plan",
  de: "Flughafen, Terminal und Gruppengrosse senden - wir planen Transfer",
  ru: "Укажите аэропорт, терминал и число людей - подготовим план",
  ar: "أرسل المطار والمحطة وعدد الأشخاص - نعد خطة النقل",
  es: "Comparte aeropuerto, terminal y grupo - preparamos el plan",
  fr: "Partagez aeroport, terminal et effectif - plan de transfert prepare",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  return { title: metaTitles[l], description: metaDescriptions[l] };
}

export default async function LotniskoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);

  return (
    <>
      <HeroSection title={heroTitles[l]} subtitle={heroSubtitles[l]} ctaText={ctaTexts[l]} ctaHref="tel:413453225" backgroundImage="/images/transfer/transfer-autokar-krakow-1.jpg" />
      <FeatureBox features={featuresByLang[l]} heading={featureHeadings[l]} />
      <FAQAccordion items={faqByLang[l]} heading={faqHeadings[l]} />
      <section className="py-12 px-4 bg-[#1D9E75] text-center">
        <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ctaSectionHeadings[l]}</h2>
        <CTAButton href="https://wa.me/48413453225" variant="secondary">💬 WhatsApp: +48 41 345 32 25 lub </CTAButton>
      </section>
    </>
  );
}
