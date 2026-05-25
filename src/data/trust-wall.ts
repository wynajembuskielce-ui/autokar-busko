type TrustWallContent = {
  heading: string;
  subheading: string;
  stats: Array<{ icon: string; title: string; subtitle: string; small: string }>;
  guarantees: Array<{ icon: string; iconClassName: string; title: string; text: string }>;
  reviews: { stars: string; rating: string; count: string; cta: string; href: string };
};

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

const REVIEW_HREF = "https://www.google.com/search?q=Autokar+Busko+opinie+Google";

export const trustWallByLang: Record<Language, TrustWallContent> = {
  pl: {
    heading: "Zaufanie oparte na faktach",
    subheading: "Liczby, gwarancje i opinie, które klienci mogą sprawdzić przed rezerwacją.",
    stats: [
      { icon: "🏆", title: "24 LATA", subtitle: "DOŚWIADCZENIA", small: "(2001-2026)" },
      { icon: "🚌", title: "180", subtitle: "POJAZDÓW", small: "VDL, Scania, Mercedes, Irisbus" },
      { icon: "👥", title: "500+", subtitle: "FIRM I RODZIN", small: "Obsłużonych rocznie" },
    ],
    guarantees: [
      { icon: "✅", iconClassName: "text-green-600", title: "LICENCJA WITD", text: "Transport krajowy i międzynarodowy" },
      { icon: "🛡️", iconClassName: "text-teal-600", title: "UBEZPIECZENIE OC", text: "Pełne pokrycie dla wszystkich pasażerów" },
      { icon: "👨‍💼", iconClassName: "text-[#639922]", title: "KIEROWCY PRZESZKOLENI", text: "Kursy bezpieczeństwa i CPR" },
    ],
    reviews: { stars: "★★★★★", rating: "4.8/5 na Google", count: "(250+ opinii od klientów)", cta: "Czytaj opinie →", href: REVIEW_HREF },
  },
  en: {
    heading: "Trust built on facts",
    subheading: "Numbers, guarantees and reviews that clients can verify before booking.",
    stats: [
      { icon: "🏆", title: "24 YEARS", subtitle: "EXPERIENCE", small: "(2001-2026)" },
      { icon: "🚌", title: "180", subtitle: "VEHICLES", small: "VDL, Scania, Mercedes, Irisbus" },
      { icon: "👥", title: "500+", subtitle: "COMPANIES & FAMILIES", small: "Served annually" },
    ],
    guarantees: [
      { icon: "✅", iconClassName: "text-green-600", title: "WITD LICENSE", text: "Domestic and international transport" },
      { icon: "🛡️", iconClassName: "text-teal-600", title: "OC INSURANCE", text: "Full coverage for all passengers" },
      { icon: "👨‍💼", iconClassName: "text-[#639922]", title: "TRAINED DRIVERS", text: "Safety courses and CPR" },
    ],
    reviews: { stars: "★★★★★", rating: "4.8/5 on Google", count: "(250+ reviews from clients)", cta: "Read reviews →", href: REVIEW_HREF },
  },
  de: {
    heading: "Vertrauen auf Fakten basierend",
    subheading: "Zahlen, Garantien und Bewertungen, die Kunden vor der Buchung prüfen können.",
    stats: [
      { icon: "🏆", title: "24 JAHRE", subtitle: "ERFAHRUNG", small: "(2001-2026)" },
      { icon: "🚌", title: "180", subtitle: "FAHRZEUGE", small: "VDL, Scania, Mercedes, Irisbus" },
      { icon: "👥", title: "500+", subtitle: "FIRMEN & FAMILIEN", small: "Jährlich bedient" },
    ],
    guarantees: [
      { icon: "✅", iconClassName: "text-green-600", title: "WITD-LIZENZ", text: "Inlands- und Auslandstransport" },
      { icon: "🛡️", iconClassName: "text-teal-600", title: "HAFTPFLICHTVERSICHERUNG", text: "Vollständige Deckung für alle Fahrgäste" },
      { icon: "👨‍💼", iconClassName: "text-[#639922]", title: "AUSGEBILDETE FAHRER", text: "Sicherheitskurse und Erste Hilfe" },
    ],
    reviews: { stars: "★★★★★", rating: "4,8/5 bei Google", count: "(250+ Kundenbewertungen)", cta: "Bewertungen lesen →", href: REVIEW_HREF },
  },
  ru: {
    heading: "Доверие, основанное на фактах",
    subheading: "Цифры, гарантии и отзывы, которые клиенты могут проверить перед бронированием.",
    stats: [
      { icon: "🏆", title: "24 ГОДА", subtitle: "ОПЫТА", small: "(2001-2026)" },
      { icon: "🚌", title: "180", subtitle: "АВТОБУСОВ", small: "VDL, Scania, Mercedes, Irisbus" },
      { icon: "👥", title: "500+", subtitle: "КОМПАНИЙ И СЕМЕЙ", small: "Обслуживаем ежегодно" },
    ],
    guarantees: [
      { icon: "✅", iconClassName: "text-green-600", title: "ЛИЦЕНЗИЯ WITD", text: "Внутренние и международные перевозки" },
      { icon: "🛡️", iconClassName: "text-teal-600", title: "СТРАХОВАНИЕ OC", text: "Полное покрытие для всех пассажиров" },
      { icon: "👨‍💼", iconClassName: "text-[#639922]", title: "ОБУЧЕННЫЕ ВОДИТЕЛИ", text: "Курсы безопасности и первой помощи" },
    ],
    reviews: { stars: "★★★★★", rating: "4,8/5 в Google", count: "(более 250 отзывов клиентов)", cta: "Читать отзывы →", href: REVIEW_HREF },
  },
  ar: {
    heading: "ثقة مبنية على الحقائق",
    subheading: "أرقام وضمانات وتقييمات يمكن للعملاء التحقق منها قبل الحجز.",
    stats: [
      { icon: "🏆", title: "24 عامًا", subtitle: "من الخبرة", small: "(2001-2026)" },
      { icon: "🚌", title: "180", subtitle: "مركبة", small: "VDL, Scania, Mercedes, Irisbus" },
      { icon: "👥", title: "+500", subtitle: "شركة وعائلة", small: "نخدمها سنويًا" },
    ],
    guarantees: [
      { icon: "✅", iconClassName: "text-green-600", title: "ترخيص WITD", text: "النقل المحلي والدولي" },
      { icon: "🛡️", iconClassName: "text-teal-600", title: "تأمين المسؤولية", text: "تغطية كاملة لجميع الركاب" },
      { icon: "👨‍💼", iconClassName: "text-[#639922]", title: "سائقون مدرَّبون", text: "دورات السلامة والإسعافات الأولية" },
    ],
    reviews: { stars: "★★★★★", rating: "4.8/5 على Google", count: "(أكثر من 250 تقييم)", cta: "اقرأ التقييمات ←", href: REVIEW_HREF },
  },
  es: {
    heading: "Confianza basada en hechos",
    subheading: "Cifras, garantías y reseñas que los clientes pueden verificar antes de reservar.",
    stats: [
      { icon: "🏆", title: "24 AÑOS", subtitle: "DE EXPERIENCIA", small: "(2001-2026)" },
      { icon: "🚌", title: "180", subtitle: "VEHÍCULOS", small: "VDL, Scania, Mercedes, Irisbus" },
      { icon: "👥", title: "500+", subtitle: "EMPRESAS Y FAMILIAS", small: "Atendidas anualmente" },
    ],
    guarantees: [
      { icon: "✅", iconClassName: "text-green-600", title: "LICENCIA WITD", text: "Transporte nacional e internacional" },
      { icon: "🛡️", iconClassName: "text-teal-600", title: "SEGURO OC", text: "Cobertura total para todos los pasajeros" },
      { icon: "👨‍💼", iconClassName: "text-[#639922]", title: "CONDUCTORES FORMADOS", text: "Cursos de seguridad y RCP" },
    ],
    reviews: { stars: "★★★★★", rating: "4,8/5 en Google", count: "(más de 250 reseñas)", cta: "Leer reseñas →", href: REVIEW_HREF },
  },
  fr: {
    heading: "Confiance fondée sur des faits",
    subheading: "Chiffres, garanties et avis que les clients peuvent vérifier avant de réserver.",
    stats: [
      { icon: "🏆", title: "24 ANS", subtitle: "D'EXPÉRIENCE", small: "(2001-2026)" },
      { icon: "🚌", title: "180", subtitle: "VÉHICULES", small: "VDL, Scania, Mercedes, Irisbus" },
      { icon: "👥", title: "500+", subtitle: "ENTREPRISES & FAMILLES", small: "Servis chaque année" },
    ],
    guarantees: [
      { icon: "✅", iconClassName: "text-green-600", title: "LICENCE WITD", text: "Transport national et international" },
      { icon: "🛡️", iconClassName: "text-teal-600", title: "ASSURANCE RC", text: "Couverture totale pour tous les passagers" },
      { icon: "👨‍💼", iconClassName: "text-[#639922]", title: "CHAUFFEURS FORMÉS", text: "Cours de sécurité et secourisme" },
    ],
    reviews: { stars: "★★★★★", rating: "4,8/5 sur Google", count: "(plus de 250 avis clients)", cta: "Lire les avis →", href: REVIEW_HREF },
  },
};

/** @deprecated Use trustWallByLang[lang] instead */
export const trustWallPl = trustWallByLang.pl;
export type TrustWallPl = typeof trustWallByLang.pl;
