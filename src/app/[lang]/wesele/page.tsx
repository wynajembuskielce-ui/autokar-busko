import type { Metadata } from "next";
import HeroSection from "@/src/components/HeroSection";
import FeatureBox from "@/src/components/FeatureBox";
import FAQAccordion from "@/src/components/FAQAccordion";
import CTAButton from "@/src/components/CTAButton";
import { faqData } from "@/data/faq-seo-data";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  if (["en", "de", "ru", "ar", "es", "fr"].includes(lang)) return lang as Language;
  return "pl";
}

const metaTitles: Record<Language, string> = {
  pl: "Bus na Wesele Krakow | Wynajem Autokaru na Wesele",
  en: "Wedding Bus Krakow | Coach Hire for Weddings",
  de: "Hochzeitsbus Krakow | Busmiete für Hochzeiten",
  ru: "Автобус на свадьбу Кельце | Аренда автобуса",
  ar: "حافلة حفل زفاف كيلتسه | تأجير حافلات",
  es: "Bus para bodas Krakow | Alquiler de autobús",
  fr: "Bus mariage Krakow | Location bus pour mariage",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Wynajem busa lub autokaru na wesele w Krakowie. Bezpieczny transport gości weselnych. Tel: +48 601 076 652 lub ",
  en: "Wedding bus and coach hire in Krakow. Safe transport for wedding guests. Tel: +48 601 076 652 lub ",
  de: "Hochzeitsbus- und Reisebusmiete in Krakow. Sicherer Transport für Hochzeitsgäste. Tel: +48 601 076 652 lub ",
  ru: "Аренда автобуса на свадьбу в Кельце. Безопасный транспорт для гостей. Тел: +48 601 076 652 lub ",
  ar: "تأجير حافلات لحفلات الزفاف في كيلتسه. نقل آمن للضيوف. هاتف: +48 601 076 652 lub  48+",
  es: "Alquiler de autobús para bodas en Krakow. Transporte seguro para invitados. Tel: +48 601 076 652 lub ",
  fr: "Location de bus pour mariage à Krakow. Transport sûr des invités. Tél: +48 601 076 652 lub ",
};

const heroTitles: Record<Language, string> = {
  pl: "Bus i Autokar na Wesele — Krakow i Okolice",
  en: "Wedding Bus & Coach — Krakow and Region",
  de: "Hochzeitsbus & Reisebus — Krakow und Umgebung",
  ru: "Автобус на свадьбу — Кельце и окрестности",
  ar: "حافلة لحفل الزفاف — كيلتسه والمنطقة",
  es: "Bus y autocar para bodas — Krakow y alrededores",
  fr: "Bus et car pour mariage — Krakow et région",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Bezpieczny i elegancki transport gości weselnych. Busy od 9 do 50 osób. Rezerwuj z wyprzedzeniem.",
  en: "Safe and elegant transport for wedding guests. Vehicles from 9 to 50 seats. Book in advance.",
  de: "Sicherer und eleganter Transport für Hochzeitsgäste. Fahrzeuge von 9 bis 50 Sitzplätzen.",
  ru: "Безопасный транспорт для гостей. Автобусы от 9 до 50 мест. Бронируйте заранее.",
  ar: "نقل آمن وأنيق لضيوف حفل الزفاف. مركبات من 9 إلى 50 مقعدًا.",
  es: "Transporte seguro y elegante para invitados. Vehículos de 9 a 50 plazas.",
  fr: "Transport sûr et élégant pour les invités. Véhicules de 9 à 50 places.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zarezerwuj bus na wesele — +48 601 076 652 lub ",
  en: "Book wedding bus — +48 601 076 652 lub ",
  de: "Hochzeitsbus buchen — +48 601 076 652 lub ",
  ru: "Забронировать автобус — +48 601 076 652 lub ",
  ar: "احجز الحافلة — +48 601 076 652 lub  48+",
  es: "Reservar bus boda — +48 601 076 652 lub ",
  fr: "Réserver bus mariage — +48 601 076 652 lub ",
};

const featureHeadings: Record<Language, string> = {
  pl: "Transport na wesele",
  en: "Wedding transport",
  de: "Hochzeitstransport",
  ru: "Транспорт на свадьбу",
  ar: "نقل حفل الزفاف",
  es: "Transporte para boda",
  fr: "Transport mariage",
};

const featuresByLang: Record<Language, Array<{ icon: string; title: string; description: string }>> = {
  pl: [
    { icon: "💍", title: "Transport gości weselnych", description: "Busy i autokary na dowóz gości z różnych miejsc na salę weselną i z powrotem. Bezpieczny powrót po weselu." },
    { icon: "🚌", title: "Pojazdy od 9 do 50 osób", description: "Dobieramy wielkość pojazdu do liczby gości. Jeden lub kilka kursów — jak potrzebujesz." },
    { icon: "🌙", title: "Nocne kursy", description: "Realizujemy kursy o każdej porze. Bezpieczny powrót gości do domu po weselu." },
  ],
  en: [
    { icon: "💍", title: "Wedding guest transport", description: "Buses and coaches picking up guests from various locations. Safe return after the wedding." },
    { icon: "🚌", title: "Vehicles for 9 to 50 people", description: "We match vehicle size to your guest count. Single or multiple runs as needed." },
    { icon: "🌙", title: "Night-time service", description: "We operate at any hour. Safe ride home for all guests after the celebration." },
  ],
  de: [
    { icon: "💍", title: "Hochzeitsgästetransport", description: "Busse und Reisebusse für Gäste von verschiedenen Standorten. Sichere Rückfahrt nach der Feier." },
    { icon: "🚌", title: "Fahrzeuge für 9 bis 50 Personen", description: "Wir passen die Fahrzeuggröße an Ihre Gästezahl an." },
    { icon: "🌙", title: "Nachtfahrten", description: "Wir fahren zu jeder Stunde. Sichere Heimfahrt für alle Gäste." },
  ],
  ru: [
    { icon: "💍", title: "Перевозка гостей", description: "Автобусы для гостей из разных мест. Безопасное возвращение после свадьбы." },
    { icon: "🚌", title: "Транспорт на 9–50 мест", description: "Подбираем размер автобуса под количество гостей." },
    { icon: "🌙", title: "Ночные рейсы", description: "Работаем в любое время. Безопасный довоз гостей домой." },
  ],
  ar: [
    { icon: "💍", title: "نقل ضيوف حفل الزفاف", description: "حافلات لاصطحاب الضيوف من أماكن مختلفة. عودة آمنة بعد الحفل." },
    { icon: "🚌", title: "مركبات من 9 إلى 50 شخصًا", description: "نختار حجم المركبة حسب عدد الضيوف." },
    { icon: "🌙", title: "رحلات ليلية", description: "نعمل في أي وقت. عودة آمنة للمنزل لجميع الضيوف." },
  ],
  es: [
    { icon: "💍", title: "Transporte de invitados", description: "Buses y autocares para recoger invitados de distintos puntos. Regreso seguro tras la boda." },
    { icon: "🚌", title: "Vehículos de 9 a 50 personas", description: "Adaptamos el vehículo al número de invitados." },
    { icon: "🌙", title: "Servicio nocturno", description: "Operamos a cualquier hora. Regreso seguro para todos." },
  ],
  fr: [
    { icon: "💍", title: "Transport des invités", description: "Bus et cars pour emmener les invités depuis différents endroits. Retour sûr après la fête." },
    { icon: "🚌", title: "Véhicules de 9 à 50 personnes", description: "Nous adaptons le véhicule au nombre d'invités." },
    { icon: "🌙", title: "Service de nuit", description: "Nous opérons à toute heure. Retour sûr pour tous." },
  ],
};

const faqHeadings: Record<Language, string> = {
  pl: "FAQ — Bus na wesele",
  en: "FAQ — Wedding bus",
  de: "FAQ — Hochzeitsbus",
  ru: "Вопросы — Автобус на свадьбу",
  ar: "أسئلة — حافلة الزفاف",
  es: "FAQ — Bus boda",
  fr: "FAQ — Bus mariage",
};

const faqItems = faqData.wesele.categories
  .flatMap((cat) => cat.questions)
  .map((q) => ({
    question: q.q,
    answer: q.a.replace(/<[^>]*>/g, ""),
  }));

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Sprawdź dostępność na Twój termin",
  en: "Check availability for your date",
  de: "Verfügbarkeit für Ihren Termin prüfen",
  ru: "Проверить доступность на вашу дату",
  ar: "تحقق من التوفر لتاريخك",
  es: "Consulta disponibilidad para tu fecha",
  fr: "Vérifiez la disponibilité pour votre date",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  return { title: metaTitles[l], description: metaDescriptions[l] };
}

export default async function WeselePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = toLang(lang);

  return (
    <>
      <HeroSection
        title={heroTitles[l]}
        subtitle={heroSubtitles[l]}
        ctaText={ctaTexts[l]}
        ctaHref="tel:601076652"
        backgroundImage="/images/wesele/wesele-autokar-elegancki-krakow-01.jpg"
      />
      <FeatureBox features={featuresByLang[l]} heading={featureHeadings[l]} />
      {l === "pl" && <FAQAccordion items={faqItems} heading={faqHeadings[l]} />}
      <section className="py-12 px-4 bg-[#f59e0b] text-center">
        <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ctaSectionHeadings[l]}</h2>
        <CTAButton href="tel:601076652" variant="secondary">📞 +48 601 076 652 lub </CTAButton>
      </section>
    </>
  );
}
