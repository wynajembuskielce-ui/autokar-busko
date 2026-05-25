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
  pl: "Transport na pielgrzymki | Częstochowa, Licheń, Kraków",
  en: "Pilgrimage transport | Czestochowa, Lichen, Krakow",
  de: "Pilgerfahrten Transport | Tschenstochau, Lichen, Krakau",
  ru: "Транспорт для паломничества | Ченстохова, Лихень, Краков",
  ar: "نقل رحلات الحج | تشينستوخوفا وليخين وكراكوف",
  es: "Transporte peregrinaciones | Czestochowa, Lichen, Cracovia",
  fr: "Transport pelerinage | Czestochowa, Lichen, Cracovie",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Pewny transport na pielgrzymki parafialne i grupowe. 24 lata doświadczenia, flota 180 pojazdów, certyfikaty ITD/WITD i licencja.",
  en: "Reliable transport for parish and group pilgrimages. 24 years of experience, 180-vehicle fleet, ITD/WITD certificates.",
  de: "Zuverlassiger Transport fur Pilgergruppen. 24 Jahre Erfahrung, 180 Fahrzeuge, ITD/WITD Zertifikate und Lizenz.",
  ru: "Надежный транспорт для паломничества приходов и групп. 24 года опыта, флот 180 машин, сертификаты ITD/WITD.",
  ar: "نقل موثوق لرحلات الحج الجماعية والرعوية. خبرة 23 سنة وأسطول 180 مركبة وشهادات ITD/WITD.",
  es: "Transporte fiable para peregrinaciones parroquiales y grupales. 23 anos de experiencia y flota de 180 vehiculos.",
  fr: "Transport fiable pour pelerinages paroissiaux et groupes. 24 ans d'experience et flotte de 180 vehicules.",
};

const heroTitles: Record<Language, string> = {
  pl: "Transport na Pielgrzymki - Krakow",
  en: "Pilgrimage Transport - Krakow",
  de: "Pilgerfahrt Transport - Krakow",
  ru: "Транспорт на паломничество - Кельце",
  ar: "نقل رحلات الحج - كيلتسه",
  es: "Transporte de peregrinacion - Krakow",
  fr: "Transport pelerinage - Krakow",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Twoja grupa modli się i jedzie spokojnie, a my dbamy o punktualność i postoje. 24 lata doświadczenia od 1997.",
  en: "Your group travels in peace while we handle timing and stops. 24 years of experience since 1997.",
  de: "Ihre Gruppe reist ruhig, wir sichern Prazision und Pausenplanung. 24 Jahre Erfahrung seit 1997.",
  ru: "Ваша группа едет спокойно, а мы обеспечиваем точность времени и удобные остановки.",
  ar: "تسافر مجموعتك براحة وطمأنينة بينما نتولى نحن التوقيت والتوقفات.",
  es: "Tu grupo viaja con tranquilidad y nosotros gestionamos tiempos y paradas.",
  fr: "Votre groupe voyage sereinement, nous gerons horaires et arrets.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zarezerwuj pielgrzymkę - +48 41 345 32 25 lub ",
  en: "Book pilgrimage transport - +48 41 345 32 25 lub ",
  de: "Pilgerfahrt buchen - +48 41 345 32 25 lub ",
  ru: "Забронировать транспорт - +48 41 345 32 25 lub ",
  ar: "احجز النقل - +48 41 345 32 25 lub ",
  es: "Reservar transporte - +48 41 345 32 25 lub ",
  fr: "Reserver transport - +48 41 345 32 25 lub ",
};

const featureHeadings: Record<Language, string> = {
  pl: "Najczęstsze kierunki pielgrzymek",
  en: "Most popular pilgrimage routes",
  de: "Haufigste Pilgerziele",
  ru: "Популярные направления",
  ar: "أشهر وجهات الحج",
  es: "Rutas de peregrinacion mas solicitadas",
  fr: "Destinations de pelerinage populaires",
};

const featuresByLang: Record<Language, Array<{ icon: string; title: string; description: string }>> = {
  pl: [
    { icon: "⛪", title: "Jasna Góra i Częstochowa", description: "Wyjazdy parafialne z Krakowa z dopasowanym harmonogramem mszy i postojów." },
    { icon: "🙏", title: "Licheń, Kraków, Kalwaria", description: "Obsługujemy Licheń, Kraków-Łagiewniki i Kalwarię Zebrzydowską z pełną koordynacją dnia." },
    { icon: "🗺️", title: "Trasa szyta pod grupę", description: "Dobieramy trasę, postoje i czas powrotu, aby pielgrzymi wrócili spokojnie i bez pośpiechu." },
  ],
  en: [
    { icon: "⛪", title: "Jasna Gora and Czestochowa", description: "Parish departures from Krakow with schedule aligned to prayer and service times." },
    { icon: "🙏", title: "Lichen, Krakow, Kalwaria", description: "We run routes to key shrines with full day coordination for group leaders." },
    { icon: "🗺️", title: "Tailored route planning", description: "Stops and return schedule are adjusted to group pace and comfort." },
  ],
  de: [
    { icon: "⛪", title: "Jasna Gora und Tschenstochau", description: "Pfarrei-Fahrten aus Krakow mit Zeitplan fur Gebet und Andacht." },
    { icon: "🙏", title: "Lichen, Krakau, Kalwaria", description: "Wir bedienen die wichtigsten Wallfahrtsorte mit Tageskoordination." },
    { icon: "🗺️", title: "Route nach Gruppenbedarf", description: "Pausen und Ruckkehr werden an Tempo und Komfort der Gruppe angepasst." },
  ],
  ru: [
    { icon: "⛪", title: "Ясная Гора и Ченстохова", description: "Паломнические выезды из Кельце с учетом расписания служб." },
    { icon: "🙏", title: "Лихень, Краков, Кальвария", description: "Организуем маршруты к главным святыням с полной координацией дня." },
    { icon: "🗺️", title: "Маршрут под вашу группу", description: "Остановки и время возвращения подбираются под темп группы." },
  ],
  ar: [
    { icon: "⛪", title: "ياسنا غورا وتشينستوخوفا", description: "رحلات رعية من كيلتسه مع جدول يتوافق مع أوقات الصلاة." },
    { icon: "🙏", title: "ليخين وكراكوف وكالفاريا", description: "نوفر رحلات إلى أهم المزارات مع تنسيق كامل ليوم المجموعة." },
    { icon: "🗺️", title: "مسار مخصص للمجموعة", description: "نضبط التوقفات ووقت العودة حسب راحة المجموعة." },
  ],
  es: [
    { icon: "⛪", title: "Jasna Gora y Czestochowa", description: "Salidas parroquiales desde Krakow con horario ajustado a celebraciones." },
    { icon: "🙏", title: "Lichen, Cracovia, Kalwaria", description: "Cubrimos los principales santuarios con coordinacion completa del dia." },
    { icon: "🗺️", title: "Ruta adaptada", description: "Ajustamos paradas y regreso al ritmo y comodidad del grupo." },
  ],
  fr: [
    { icon: "⛪", title: "Jasna Gora et Czestochowa", description: "Departs paroissiaux depuis Krakow avec horaires adaptes aux offices." },
    { icon: "🙏", title: "Lichen, Cracovie, Kalwaria", description: "Nous desservons les principaux sanctuaires avec coordination complete." },
    { icon: "🗺️", title: "Itineraire sur mesure", description: "Arrets et retour ajustes au rythme et au confort du groupe." },
  ],
};

const faqHeadings: Record<Language, string> = {
  pl: "FAQ - Pielgrzymki",
  en: "FAQ - Pilgrimages",
  de: "FAQ - Pilgerfahrten",
  ru: "FAQ - Паломничество",
  ar: "الاسئلة - رحلات الحج",
  es: "FAQ - Peregrinaciones",
  fr: "FAQ - Pelerinages",
};

const faqItems = faqData.pielgrzymki.categories
  .flatMap((cat) => cat.questions)
  .map((q) => ({
    question: q.q,
    answer: q.a.replace(/<[^>]*>/g, ""),
  }));

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Podaj trasę pielgrzymki i liczbę osób - przygotujemy bezpieczny plan",
  en: "Share pilgrimage route and group size - we prepare safe plan",
  de: "Route und Gruppengrosse senden - wir erstellen sicheren Plan",
  ru: "Укажите маршрут и размер группы - подготовим безопасный план",
  ar: "أرسل مسار الرحلة وعدد الأشخاص - نعد خطة آمنة",
  es: "Comparte ruta y numero de personas - preparamos plan seguro",
  fr: "Partagez itineraire et effectif - nous preparons un plan securise",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  return { title: metaTitles[l], description: metaDescriptions[l] };
}

export default async function PielgrzymkiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);

  return (
    <>
      <HeroSection title={heroTitles[l]} subtitle={heroSubtitles[l]} ctaText={ctaTexts[l]} ctaHref="tel:413453225" backgroundImage="/images/pielgrzymki/pielgrzymka-autokar-krakow-1.jpg" />
      <FeatureBox features={featuresByLang[l]} heading={featureHeadings[l]} />
      {l === "pl" && <FAQAccordion items={faqItems} heading={faqHeadings[l]} />}
      <section className="py-12 px-4 bg-[#1D9E75] text-center">
        <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ctaSectionHeadings[l]}</h2>
        <CTAButton href="https://wa.me/48413453225" variant="secondary">💬 WhatsApp: +48 41 345 32 25 lub </CTAButton>
      </section>
    </>
  );
}
