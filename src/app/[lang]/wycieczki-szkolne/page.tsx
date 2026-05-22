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
  pl: "Wycieczki szkolne Krakow | Bezpieczny transport dzieci",
  en: "School trips Krakow | Safe children transport",
  de: "Schulausflug Krakow | Sicherer Kindertransport",
  ru: "Школьные поездки Кельце | Безопасный транспорт детей",
  ar: "رحلات مدرسية كيلتسه | نقل آمن للأطفال",
  es: "Excursiones escolares Krakow | Transporte seguro",
  fr: "Sorties scolaires Krakow | Transport securise",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Bezpieczny transport na wycieczki szkolne 1-dniowe i wielodniowe. 24 lata doświadczenia, 180 pojazdów i komplet dokumentów dla szkoły.",
  en: "Safe transport for one-day and multi-day school trips. 24 years of experience, 180 vehicles and full school documentation.",
  de: "Sicherer Transport fur eintagige und mehrtagige Schulausfluge. 24 Jahre Erfahrung, 180 Fahrzeuge und komplette Schuldokumente.",
  ru: "Безопасный транспорт для однодневных и многодневных школьных поездок. 24 года опыта, 180 машин и полный пакет документов.",
  ar: "نقل آمن للرحلات المدرسية اليومية والمتعددة الأيام. 23 سنة خبرة و180 مركبة ووثائق كاملة للمدرسة.",
  es: "Transporte seguro para excursiones escolares de uno o varios dias. 23 anos de experiencia, 180 vehiculos y documentacion completa.",
  fr: "Transport securise pour sorties scolaires d'un ou plusieurs jours. 24 ans d'experience, 180 vehicules et documents complets.",
};

const heroTitles: Record<Language, string> = {
  pl: "Transport na Wycieczki Szkolne - Krakow",
  en: "School Trip Transport - Krakow",
  de: "Transport fur Schulausfluge - Krakow",
  ru: "Транспорт для школьных поездок - Кельце",
  ar: "نقل الرحلات المدرسية - كيلتسه",
  es: "Transporte para excursiones escolares - Krakow",
  fr: "Transport sorties scolaires - Krakow",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Dzieci dojeżdżają bezpiecznie i punktualnie, a szkoła dostaje pełną dokumentację. 24 lata doświadczenia od 1997 roku.",
  en: "Children arrive safely and on time, while school receives full documentation. 24 years of experience since 1997.",
  de: "Kinder kommen sicher und punktlich an, die Schule erhalt vollstandige Unterlagen. 24 Jahre Erfahrung seit 1997.",
  ru: "Дети приезжают безопасно и вовремя, а школа получает полный пакет документов. 24 года опыта с 1997 года.",
  ar: "يصل الأطفال بأمان وفي الوقت المحدد، وتحصل المدرسة على جميع الوثائق. خبرة 23 عامًا منذ 1997.",
  es: "Los ninos llegan seguros y puntuales, y la escuela recibe toda la documentacion. 23 anos de experiencia desde 1997.",
  fr: "Les enfants arrivent en securite et a l'heure, et l'ecole recoit tous les documents. 24 ans d'experience depuis 1997.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zarezerwuj autobus szkolny - +48 41 345 32 25 lub ",
  en: "Book school coach - +48 41 345 32 25 lub ",
  de: "Schulbus buchen - +48 41 345 32 25 lub ",
  ru: "Забронировать автобус - +48 41 345 32 25 lub ",
  ar: "احجز حافلة مدرسية - +48 41 345 32 25 lub ",
  es: "Reservar autobus escolar - +48 41 345 32 25 lub ",
  fr: "Reserver autocar scolaire - +48 41 345 32 25 lub ",
};

const featureHeadings: Record<Language, string> = {
  pl: "Bezpieczna przygoda dla uczniów",
  en: "Safe adventure for students",
  de: "Sicheres Abenteuer fur Schuler",
  ru: "Безопасное приключение для учеников",
  ar: "مغامرة آمنة للطلاب",
  es: "Aventura segura para estudiantes",
  fr: "Aventure securisee pour les eleves",
};

const featuresByLang: Record<Language, Array<{ icon: string; title: string; description: string }>> = {
  pl: [
    { icon: "🎒", title: "Wycieczki 1-dniowe i wielodniowe", description: "Organizujemy przejazdy po całej Polsce. Klasa skupia się na przygodzie, a my na logistyce i punktualności." },
    { icon: "🛡️", title: "Bezpieczeństwo dzieci", description: "Twoi uczniowie jadą sprawdzonymi pojazdami z certyfikatami ITD i WITD oraz licencją przewozową." },
    { icon: "📄", title: "Dokumentacja dla szkoły", description: "Przekazujemy komplet dokumentów i polis. Dzięki temu wychowawca oszczędza czas i stres." },
  ],
  en: [
    { icon: "🎒", title: "One-day and multi-day trips", description: "We organize routes across Poland. Students enjoy the trip while we handle timing and logistics." },
    { icon: "🛡️", title: "Children safety first", description: "Your students travel in verified vehicles with ITD/WITD certificates and transport license." },
    { icon: "📄", title: "School documentation", description: "We provide full documents and insurance papers, so teachers save time and avoid stress." },
  ],
  de: [
    { icon: "🎒", title: "Ein- und mehrtagige Reisen", description: "Wir organisieren Fahrten in ganz Polen. Schuler erleben die Reise, wir sichern die Logistik." },
    { icon: "🛡️", title: "Sicherheit der Kinder", description: "Ihre Schuler fahren mit gepruften Fahrzeugen mit ITD/WITD Zertifikaten und Lizenz." },
    { icon: "📄", title: "Schuldokumente", description: "Wir liefern komplette Unterlagen und Versicherungen fur die Schule." },
  ],
  ru: [
    { icon: "🎒", title: "Поездки на 1 и несколько дней", description: "Организуем маршруты по всей Польше. Дети наслаждаются поездкой, а мы ведем логистику." },
    { icon: "🛡️", title: "Безопасность детей", description: "Поездка проходит на проверенных автобусах с сертификатами ITD/WITD и лицензией." },
    { icon: "📄", title: "Документы для школы", description: "Передаем полный пакет документов и страховых данных для администрации." },
  ],
  ar: [
    { icon: "🎒", title: "رحلات يومية ومتعددة الأيام", description: "ننظم الرحلات في جميع أنحاء بولندا. يستمتع الطلاب بالرحلة ونحن ندير اللوجستيات." },
    { icon: "🛡️", title: "سلامة الأطفال أولًا", description: "ينتقل الطلاب بمركبات معتمدة بشهادات ITD وWITD وترخيص نقل رسمي." },
    { icon: "📄", title: "وثائق المدرسة", description: "نوفر جميع الوثائق والتأمينات المطلوبة لتقليل الوقت والضغط على المعلمين." },
  ],
  es: [
    { icon: "🎒", title: "Excursiones de 1 y varios dias", description: "Organizamos rutas por toda Polonia. Los alumnos disfrutan y nosotros gestionamos la logistica." },
    { icon: "🛡️", title: "Seguridad infantil", description: "Tus estudiantes viajan en vehiculos verificados con certificados ITD/WITD y licencia oficial." },
    { icon: "📄", title: "Documentacion escolar", description: "Entregamos toda la documentacion y polizas para que el centro tenga todo en orden." },
  ],
  fr: [
    { icon: "🎒", title: "Sorties 1 jour et plusieurs jours", description: "Nous organisons des trajets dans toute la Pologne. Les eleves profitent, nous gerons la logistique." },
    { icon: "🛡️", title: "Securite des enfants", description: "Vos eleves voyagent dans des vehicules verifies avec certificats ITD/WITD et licence transport." },
    { icon: "📄", title: "Documents pour l'ecole", description: "Nous fournissons l'ensemble des documents et assurances necessaires." },
  ],
};

const faqHeadings: Record<Language, string> = {
  pl: "FAQ - Wycieczki szkolne",
  en: "FAQ - School trips",
  de: "FAQ - Schulausfluge",
  ru: "FAQ - Школьные поездки",
  ar: "الاسئلة - الرحلات المدرسية",
  es: "FAQ - Excursiones escolares",
  fr: "FAQ - Sorties scolaires",
};

const faqItems = faqData.wycieczki_szkolne.categories
  .flatMap((cat) => cat.questions)
  .map((q) => ({
    question: q.q,
    answer: q.a.replace(/<[^>]*>/g, ""),
  }));

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Zaplanuj wycieczkę i podaj liczbę uczniów",
  en: "Plan your trip and share group size",
  de: "Planen Sie die Reise und nennen Sie die Gruppengrosse",
  ru: "Запланируйте поездку и укажите размер группы",
  ar: "خطط الرحلة وأرسل عدد الطلاب",
  es: "Planifica la salida y comparte el numero de alumnos",
  fr: "Planifiez la sortie et indiquez la taille du groupe",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  return { title: metaTitles[l], description: metaDescriptions[l] };
}

export default async function WycieczkiSzkolnePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);

  return (
    <>
      <HeroSection title={heroTitles[l]} subtitle={heroSubtitles[l]} ctaText={ctaTexts[l]} ctaHref="tel:413453225" backgroundImage="/images/wycieczki/wycieczka-szkolna-autokar-krakow-1.jpg" />
      <FeatureBox features={featuresByLang[l]} heading={featureHeadings[l]} />
      {l === "pl" && <FAQAccordion items={faqItems} heading={faqHeadings[l]} />}
      <section className="py-12 px-4 bg-[#f59e0b] text-center">
        <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ctaSectionHeadings[l]}</h2>
        <CTAButton href="https://wa.me/48413453225" variant="secondary">💬 WhatsApp: +48 41 345 32 25 lub </CTAButton>
      </section>
    </>
  );
}
