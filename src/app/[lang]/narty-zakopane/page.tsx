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
  pl: "Bus na narty z Krakowa | Zakopane, Białka, Szczyrk",
  en: "Ski bus from Krakow | Zakopane, Bialka, Szczyrk",
  de: "Skibus ab Krakow | Zakopane, Bialka, Szczyrk",
  ru: "Автобус на лыжи из Кельце | Закопане, Бялка, Щирк",
  ar: "حافلة تزلج من كيلتسه | زاكوبانه وبيالكا",
  es: "Bus de esqui desde Krakow | Zakopane, Bialka",
  fr: "Bus ski depuis Krakow | Zakopane, Bialka",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Wyjazdy narciarskie dla grup do Białki Tatrzańskiej, Zakopanego, Wisły, Szczyrku i Krynicy-Zdroju. 24 lata doświadczenia.",
  en: "Group ski transport to Bialka Tatrzanska, Zakopane, Wisla, Szczyrk and Krynica-Zdroj. 24 years of experience.",
  de: "Gruppen-Skitransport nach Bialka, Zakopane, Wisla, Szczyrk und Krynica-Zdroj. 24 Jahre Erfahrung.",
  ru: "Групповые лыжные выезды в Бялку, Закопане, Вислу, Щирк и Крыницу-Здруй. 24 года опыта.",
  ar: "نقل جماعي للتزلج إلى بيالكا وزاكوبانه وفيسوا وشتشيرك وكرينيца. خبرة 23 سنة.",
  es: "Transporte grupal de esqui a Bialka, Zakopane, Wisla, Szczyrk y Krynica-Zdroj. 23 anos de experiencia.",
  fr: "Transport groupe ski vers Bialka, Zakopane, Wisla, Szczyrk et Krynica-Zdroj. 24 ans d'experience.",
};

const heroTitles: Record<Language, string> = {
  pl: "Bus na Narty z Krakowa",
  en: "Ski Bus from Krakow",
  de: "Skibus ab Krakow",
  ru: "Автобус на лыжи из Кельце",
  ar: "حافلة تزلج من كيلتسه",
  es: "Bus para esqui desde Krakow",
  fr: "Bus ski depuis Krakow",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Ekipa dojeżdża na stok punktualnie i wraca bezpiecznie. 24 lata doświadczenia i 180 pojazdów gotowych na sezon zimowy.",
  en: "Your group reaches slopes on time and returns safely. 24 years of experience and 180 vehicles ready for winter season.",
  de: "Ihre Gruppe erreicht die Pisten punktlich und kehrt sicher zuruck. 24 Jahre Erfahrung und 180 Fahrzeuge im Wintereinsatz.",
  ru: "Группа приезжает на склон вовремя и безопасно возвращается. 24 года опыта и 180 машин в зимнем сезоне.",
  ar: "تصل المجموعة إلى المنحدر في الوقت المحدد وتعود بأمان. خبرة 23 سنة وأسطول 180 مركبة للموسم الشتوي.",
  es: "El grupo llega puntual a las pistas y vuelve con seguridad. 23 anos de experiencia y 180 vehiculos para invierno.",
  fr: "Le groupe arrive a l'heure sur les pistes et revient en securite. 24 ans d'experience et 180 vehicules en hiver.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zarezerwuj wyjazd narciarski - +48 41 345 32 25 lub ",
  en: "Book ski trip - +48 41 345 32 25 lub ",
  de: "Skifahrt buchen - +48 41 345 32 25 lub ",
  ru: "Забронировать выезд - +48 41 345 32 25 lub ",
  ar: "احجز رحلة التزلج - +48 41 345 32 25 lub ",
  es: "Reservar viaje de esqui - +48 41 345 32 25 lub ",
  fr: "Reserver sortie ski - +48 41 345 32 25 lub ",
};

const featureHeadings: Record<Language, string> = {
  pl: "Najpopularniejsze kierunki zimowe",
  en: "Top winter destinations",
  de: "Top Winterziele",
  ru: "Популярные зимние направления",
  ar: "أهم وجهات الشتاء",
  es: "Destinos de invierno mas populares",
  fr: "Destinations hiver les plus demandees",
};

const featuresByLang: Record<Language, Array<{ icon: string; title: string; description: string }>> = {
  pl: [
    { icon: "⛷️", title: "Białka, Zakopane, Wisła", description: "Obsługujemy najpopularniejsze kierunki narciarskie dla grup z Krakowa i regionu." },
    { icon: "🎿", title: "Szczyrk i Krynica-Zdrój", description: "Dobieramy trasę i godziny tak, by Twoja grupa maksymalnie wykorzystała czas na stoku." },
    { icon: "❄️", title: "Sezon zimowy bez chaosu", description: "Plan wyjazdu, postoje, powrót i kontakt z opiekunem grupy - wszystko w jednym miejscu." },
  ],
  en: [
    { icon: "⛷️", title: "Bialka, Zakopane, Wisla", description: "We serve the most popular ski destinations for groups from Krakow region." },
    { icon: "🎿", title: "Szczyrk and Krynica-Zdroj", description: "Route and timing are optimized so your team can spend more time on slopes." },
    { icon: "❄️", title: "Smooth winter operations", description: "Departure plan, stops, return and coordinator contact in one clear process." },
  ],
  de: [
    { icon: "⛷️", title: "Bialka, Zakopane, Wisla", description: "Wir bedienen die beliebtesten Skiorte fur Gruppen aus Krakow." },
    { icon: "🎿", title: "Szczyrk und Krynica-Zdroj", description: "Route und Zeiten werden so geplant, dass mehr Zeit auf der Piste bleibt." },
    { icon: "❄️", title: "Winterbetrieb ohne Chaos", description: "Abfahrtsplan, Pausen, Ruckfahrt und Ansprechpartner aus einer Hand." },
  ],
  ru: [
    { icon: "⛷️", title: "Бялка, Закопане, Висла", description: "Работаем по самым популярным горнолыжным направлениям для групп из Кельце." },
    { icon: "🎿", title: "Щирк и Крыница-Здруй", description: "Маршрут и время подбираем так, чтобы группа дольше каталась." },
    { icon: "❄️", title: "Сезон без хаоса", description: "План поездки, остановки, возвращение и связь с координатором в одном процессе." },
  ],
  ar: [
    { icon: "⛷️", title: "بيالكا وزاكوبانه وفيسوا", description: "نوفر النقل إلى أشهر وجهات التزلج للمجموعات من كيلتسه والمنطقة." },
    { icon: "🎿", title: "شتشيرك وكرينيца-زدروي", description: "نضبط المسار والتوقيت ليحصل فريقك على وقت أطول على المنحدرات." },
    { icon: "❄️", title: "موسم شتوي منظم", description: "خطة انطلاق وتوقفات وعودة وتواصل مباشر مع منسق المجموعة." },
  ],
  es: [
    { icon: "⛷️", title: "Bialka, Zakopane, Wisla", description: "Cubrimos los destinos de esqui mas demandados para grupos de Krakow." },
    { icon: "🎿", title: "Szczyrk y Krynica-Zdroj", description: "Ajustamos ruta y horarios para aprovechar mas tiempo en pista." },
    { icon: "❄️", title: "Temporada invernal ordenada", description: "Plan de salida, paradas, regreso y coordinacion clara en un solo flujo." },
  ],
  fr: [
    { icon: "⛷️", title: "Bialka, Zakopane, Wisla", description: "Nous desservons les stations les plus demandees pour les groupes de Krakow." },
    { icon: "🎿", title: "Szczyrk et Krynica-Zdroj", description: "Nous optimisons route et horaires pour maximiser le temps sur les pistes." },
    { icon: "❄️", title: "Saison hiver bien organisee", description: "Plan de depart, pauses, retour et coordination centralisee." },
  ],
};

const faqHeadings: Record<Language, string> = {
  pl: "FAQ - Wyjazdy na narty",
  en: "FAQ - Ski trips",
  de: "FAQ - Skifahrten",
  ru: "FAQ - Лыжные поездки",
  ar: "الاسئلة - رحلات التزلج",
  es: "FAQ - Viajes de esqui",
  fr: "FAQ - Sorties ski",
};

const faqItems = faqData.narty.categories
  .flatMap((cat) => cat.questions)
  .map((q) => ({
    question: q.q,
    answer: q.a.replace(/<[^>]*>/g, ""),
  }));

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Podaj kierunek i liczbę osób - przygotujemy zimowy plan wyjazdu",
  en: "Share destination and headcount - we prepare winter trip plan",
  de: "Ziel und Gruppengrosse senden - wir erstellen Winterplan",
  ru: "Укажите направление и число людей - подготовим зимний план",
  ar: "أرسل الوجهة وعدد الأشخاص - نعد خطة رحلة شتوية",
  es: "Comparte destino y grupo - preparamos plan de invierno",
  fr: "Partagez destination et effectif - plan hiver prepare",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  return { title: metaTitles[l], description: metaDescriptions[l] };
}

export default async function NartyZakopanePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);

  return (
    <>
      <HeroSection title={heroTitles[l]} subtitle={heroSubtitles[l]} ctaText={ctaTexts[l]} ctaHref="tel:413453225" backgroundImage="/images/narty/narty-bus-krakow-zakopane-1.jpg" />
      <FeatureBox features={featuresByLang[l]} heading={featureHeadings[l]} />
      {l === "pl" && <FAQAccordion items={faqItems} heading={faqHeadings[l]} />}
      <section className="py-12 px-4 bg-[#1D9E75] text-center">
        <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ctaSectionHeadings[l]}</h2>
        <CTAButton href="https://wa.me/48413453225" variant="secondary">💬 WhatsApp: +48 41 345 32 25 lub </CTAButton>
      </section>
    </>
  );
}
