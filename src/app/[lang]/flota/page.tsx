import type { Metadata } from "next";
import HeroSection from "@/src/components/HeroSection";
import FeatureBox from "@/src/components/FeatureBox";
import FAQAccordion from "@/src/components/FAQAccordion";
import CTAButton from "@/src/components/CTAButton";
import { faqData } from "@/data/faq-seo-data";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";
function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const metaTitles: Record<Language, string> = {
  pl: "Flota pojazdów | Bus 9, minibus 17, autokary 35 i 50",
  en: "Fleet | 9-seat van, 17-seat minibus, 35/50-seat coaches",
  de: "Flotte | 9er Van, 17er Minibus, 35/50er Reisebus",
  ru: "Автопарк | 9, 17, 35 и 50 мест",
  ar: "الأسطول | 9 و17 و35 و50 مقعدًا",
  es: "Flota | 9, 17, 35 y 50 plazas",
  fr: "Flotte | 9, 17, 35 et 50 places",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Flota 180 pojazdów: Euro 6, klimatyzacja, wybrane pojazdy z WiFi i pojemnymi bagażnikami. 24 lata doświadczenia.",
  en: "180-vehicle fleet: Euro 6, air conditioning, selected WiFi vehicles and large luggage space. 24 years of experience.",
  de: "Flotte mit 180 Fahrzeugen: Euro 6, Klimaanlage, teilweise WiFi und grosse Gepackraume.",
  ru: "Флот 180 машин: Euro 6, кондиционер, в части авто WiFi и вместительные багажники.",
  ar: "أسطول من 180 مركبة: Euro 6 وتكييف وهوائي WiFi في مركبات مختارة ومساحات أمتعة كبيرة.",
  es: "Flota de 180 vehiculos: Euro 6, aire acondicionado, WiFi en unidades seleccionadas y gran maletero.",
  fr: "Flotte de 180 vehicules: Euro 6, climatisation, WiFi sur certains vehicules et grands coffres.",
};

const heroTitles: Record<Language, string> = {
  pl: "Nasza Flota Pojazdów",
  en: "Our Vehicle Fleet",
  de: "Unsere Fahrzeugflotte",
  ru: "Наш автопарк",
  ar: "أسطول مركباتنا",
  es: "Nuestra flota de vehiculos",
  fr: "Notre flotte de vehicules",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Dobieramy pojazd tak, aby Twoja grupa jechała wygodnie i bez przepłacania. 24 lata doświadczenia od 1997.",
  en: "We match vehicle to your group so you travel comfortably without overpaying. 24 years of experience.",
  de: "Wir wahlen das passende Fahrzeug, damit Ihre Gruppe komfortabel und wirtschaftlich reist.",
  ru: "Подбираем транспорт так, чтобы группа ехала комфортно и без переплат.",
  ar: "نختار المركبة المناسبة حتى تسافر مجموعتك براحة وبدون تكلفة زائدة.",
  es: "Elegimos el vehiculo adecuado para que tu grupo viaje comodo y sin sobrecostes.",
  fr: "Nous choisissons le vehicule adapte pour un trajet confortable et optimise en cout.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Sprawdź dostępność floty - +48 601 076 652 lub ",
  en: "Check fleet availability - +48 601 076 652 lub ",
  de: "Flottenverfugbarkeit prufen - +48 601 076 652 lub ",
  ru: "Проверить доступность - +48 601 076 652 lub ",
  ar: "تحقق من التوفر - +48 601 076 652 lub ",
  es: "Consultar disponibilidad - +48 601 076 652 lub ",
  fr: "Verifier disponibilite - +48 601 076 652 lub ",
};

const featureHeadings: Record<Language, string> = {
  pl: "Pojazdy dla każdego typu grupy",
  en: "Vehicles for every group type",
  de: "Fahrzeuge fur jede Gruppengrosse",
  ru: "Транспорт для любых групп",
  ar: "مركبات لكل نوع من المجموعات",
  es: "Vehiculos para cada tipo de grupo",
  fr: "Vehicules pour chaque type de groupe",
};

const featuresByLang: Record<Language, Array<{ icon: string; title: string; description: string }>> = {
  pl: [
    { icon: "🚐", title: "Bus 9-osobowy (Volkswagen Transporter)", description: "Idealny na transfery i małe grupy. Wygodny, szybki i ekonomiczny." },
    { icon: "🚌", title: "Minibus 17-miejscowy", description: "Świetny dla szkół i grup wycieczkowych. Dobra widoczność i komfort na trasie." },
    { icon: "🚍", title: "Autokar 35/50-osobowy", description: "Pełnowymiarowe autokary na wesela, pielgrzymki i duże grupy firmowe." },
    { icon: "🏆", title: "Standard jakości", description: "Euro 6, klimatyzacja, wybrane pojazdy z WiFi, duże bagażniki oraz certyfikaty ITD/WITD." },
  ],
  en: [
    { icon: "🚐", title: "9-seat van (Volkswagen Transporter)", description: "Best for transfers and small groups with efficient cost and comfort." },
    { icon: "🚌", title: "17-seat minibus", description: "Great for schools and tour groups with practical and comfortable layout." },
    { icon: "🚍", title: "35/50-seat coach", description: "Full-size coaches for weddings, pilgrimages and larger business groups." },
    { icon: "🏆", title: "Quality standard", description: "Euro 6, air conditioning, selected WiFi vehicles, large luggage and ITD/WITD certificates." },
  ],
  de: [
    { icon: "🚐", title: "9-Sitzer Van", description: "Ideal fur Transfers und kleine Gruppen mit guter Wirtschaftlichkeit." },
    { icon: "🚌", title: "17-Sitzer Minibus", description: "Geeignet fur Schulen und Reisegruppen mit komfortabler Ausstattung." },
    { icon: "🚍", title: "35/50-Sitzer Reisebus", description: "Vollwertige Reisebusse fur Hochzeiten, Pilgerfahrten und Firmen." },
    { icon: "🏆", title: "Qualitatsstandard", description: "Euro 6, Klimaanlage, teilweise WiFi, grosse Gepackraume und ITD/WITD Zertifikate." },
  ],
  ru: [
    { icon: "🚐", title: "Микроавтобус 9 мест", description: "Оптимален для трансферов и небольших групп." },
    { icon: "🚌", title: "Минибус 17 мест", description: "Удобен для школьных и туристических групп." },
    { icon: "🚍", title: "Автобусы 35/50 мест", description: "Для свадеб, паломничеств и крупных корпоративных выездов." },
    { icon: "🏆", title: "Стандарт качества", description: "Euro 6, кондиционер, часть авто с WiFi, большие багажники и сертификаты ITD/WITD." },
  ],
  ar: [
    { icon: "🚐", title: "حافلة صغيرة 9 مقاعد", description: "مثالية للتنقلات والمجموعات الصغيرة." },
    { icon: "🚌", title: "ميني باص 17 مقعدًا", description: "مناسب للمدارس والمجموعات السياحية." },
    { icon: "🚍", title: "حافلات 35/50 مقعدًا", description: "لحفلات الزفاف ورحلات الحج والمجموعات الكبيرة." },
    { icon: "🏆", title: "معيار الجودة", description: "Euro 6 وتكييف وWiFi في مركبات مختارة ومساحات أمتعة كبيرة وشهادات ITD/WITD." },
  ],
  es: [
    { icon: "🚐", title: "Van 9 plazas", description: "Ideal para traslados y grupos pequenos con buen coste." },
    { icon: "🚌", title: "Minibus 17 plazas", description: "Adecuado para escuelas y grupos turisticos." },
    { icon: "🚍", title: "Autocar 35/50 plazas", description: "Para bodas, peregrinaciones y grupos empresariales grandes." },
    { icon: "🏆", title: "Estandar de calidad", description: "Euro 6, aire acondicionado, WiFi en vehiculos seleccionados y certificados ITD/WITD." },
  ],
  fr: [
    { icon: "🚐", title: "Van 9 places", description: "Ideal pour transferts et petits groupes." },
    { icon: "🚌", title: "Minibus 17 places", description: "Adapte aux ecoles et groupes touristiques." },
    { icon: "🚍", title: "Autocar 35/50 places", description: "Pour mariages, pelerinages et grands groupes entreprise." },
    { icon: "🏆", title: "Standard qualite", description: "Euro 6, climatisation, WiFi sur certains vehicules, grands coffres et certificats ITD/WITD." },
  ],
};

const faqHeadings: Record<Language, string> = {
  pl: "FAQ - Flota",
  en: "FAQ - Fleet",
  de: "FAQ - Flotte",
  ru: "FAQ - Автопарк",
  ar: "الاسئلة - الأسطول",
  es: "FAQ - Flota",
  fr: "FAQ - Flotte",
};

const faqItemsPl = faqData.flota.categories
  .flatMap((cat) => cat.questions)
  .map((q) => ({
    question: q.q,
    answer: q.a.replace(/<[^>]*>/g, ""),
  }));

const faqByLang: Record<Language, Array<{ question: string; answer: string }>> = {
  pl: faqItemsPl,
  en: [
    { question: "How to choose right vehicle?", answer: "Share route and headcount, we propose optimal option with best cost-efficiency." },
    { question: "Do all vehicles have AC?", answer: "Yes, AC is standard. Selected vehicles also provide WiFi." },
    { question: "Do you have required certificates?", answer: "Yes, transport license and ITD/WITD certificates are in place." },
    { question: "Can you handle multiple groups at once?", answer: "Yes, with 180 vehicles and in-house technical service." },
  ],
  de: [
    { question: "Wie wahlen wir das richtige Fahrzeug?", answer: "Nach Route und Teilnehmerzahl empfehlen wir die wirtschaftlichste Option." },
    { question: "Haben alle Fahrzeuge Klimaanlage?", answer: "Ja, Klimaanlage ist Standard. Teilweise ist WiFi verfugbar." },
    { question: "Gibt es Zertifikate und Lizenz?", answer: "Ja, Transportlizenz sowie ITD/WITD Zertifikate sind vorhanden." },
    { question: "Mehrere Gruppen gleichzeitig moglich?", answer: "Ja, mit 180 Fahrzeugen und eigener Technikbasis." },
  ],
  ru: [
    { question: "Как выбрать подходящий транспорт?", answer: "После данных о маршруте и группе предложим оптимальный вариант по цене." },
    { question: "Есть ли кондиционер во всех авто?", answer: "Да, кондиционер стандарт. В части авто есть WiFi." },
    { question: "Есть ли лицензия и сертификаты?", answer: "Да, лицензия перевозчика и сертификаты ITD/WITD действуют." },
    { question: "Можно обслужить несколько групп одновременно?", answer: "Да, за счет флота 180 машин и собственной техбазы." },
  ],
  ar: [
    { question: "كيف نختار المركبة المناسبة؟", answer: "بعد معرفة المسار وعدد الأشخاص نقترح الخيار الأنسب تكلفة وراحة." },
    { question: "هل جميع المركبات مكيفة؟", answer: "نعم، التكييف قياسي، وWiFi متاح في مركبات مختارة." },
    { question: "هل لديكم الشهادات المطلوبة؟", answer: "نعم، لدينا رخصة نقل وشهادات ITD/WITD." },
    { question: "هل يمكن خدمة عدة مجموعات معًا؟", answer: "نعم، بفضل أسطول 180 مركبة وصيانة داخلية." },
  ],
  es: [
    { question: "Como elegir vehiculo adecuado?", answer: "Con ruta y numero de personas proponemos la opcion mas eficiente." },
    { question: "Todos tienen aire acondicionado?", answer: "Si, es estandar. Algunos vehiculos tienen WiFi." },
    { question: "Teneis licencia y certificados?", answer: "Si, contamos con licencia de transporte e ITD/WITD." },
    { question: "Podeis cubrir varios grupos a la vez?", answer: "Si, gracias a flota de 180 vehiculos y servicio tecnico propio." },
  ],
  fr: [
    { question: "Comment choisir le bon vehicule ?", answer: "Avec trajet et effectif, nous proposons l'option la plus efficace." },
    { question: "Tous les vehicules ont la climatisation ?", answer: "Oui, climatisation standard. WiFi sur certains vehicules." },
    { question: "Avez-vous licence et certificats ?", answer: "Oui, licence transport et certificats ITD/WITD." },
    { question: "Pouvez-vous gerer plusieurs groupes ?", answer: "Oui, grace a 180 vehicules et atelier technique interne." },
  ],
};

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Podaj datę i liczbę osób - dobierzemy najlepszy pojazd",
  en: "Share date and headcount - we match best vehicle",
  de: "Datum und Teilnehmerzahl senden - wir wahlen bestes Fahrzeug",
  ru: "Укажите дату и число людей - подберем лучший транспорт",
  ar: "أرسل التاريخ وعدد الأشخاص - نختار المركبة المناسبة",
  es: "Comparte fecha y grupo - elegimos el mejor vehiculo",
  fr: "Partagez date et effectif - nous choisissons le vehicule adapte",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  return { title: metaTitles[l], description: metaDescriptions[l] };
}

export default async function FlotaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);

  return (
    <>
      <HeroSection title={heroTitles[l]} subtitle={heroSubtitles[l]} ctaText={ctaTexts[l]} ctaHref="tel:601076652" backgroundImage="/images/flota/flota-autokar-1.jpg" />
      <FeatureBox features={featuresByLang[l]} heading={featureHeadings[l]} />
      {l === "pl" && <FAQAccordion items={faqByLang[l]} heading={faqHeadings[l]} />}
      <section className="py-12 px-4 bg-[#f59e0b] text-center">
        <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ctaSectionHeadings[l]}</h2>
        <CTAButton href="https://wa.me/48601076652" variant="secondary">💬 WhatsApp: +48 601 076 652 lub </CTAButton>
      </section>
    </>
  );
}
