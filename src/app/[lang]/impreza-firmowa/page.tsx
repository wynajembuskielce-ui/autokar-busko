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
  pl: "Transport na imprezy firmowe Busko-Zdrój | B2B",
  en: "Corporate event transport Busko-Zdrój | B2B",
  de: "Firmenevent Transport Busko-Zdrój | B2B",
  ru: "Транспорт для корпоративных мероприятий Кельце",
  ar: "نقل الفعاليات للشركات كيلتسه",
  es: "Transporte para eventos corporativos Busko-Zdrój",
  fr: "Transport evenements entreprise Busko-Zdrój",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Twoi pracownicy i goście docierają na czas. 24 lata doświadczenia, 100+ firm, faktury VAT, własny serwis i flota 180 pojazdów.",
  en: "Your staff and guests arrive on time. 24 years of experience, 100+ companies served, VAT invoices and own service base.",
  de: "Ihre Mitarbeiter und Gaste kommen punktlich an. 24 Jahre Erfahrung, 100+ Firmenkunden, VAT Rechnungen und eigener Service.",
  ru: "Сотрудники и гости приезжают вовремя. 24 года опыта, 100+ компаний, счета VAT и собственный сервис.",
  ar: "موظفوك وضيوفك يصلون في الوقت المحدد. خبرة 23 سنة، أكثر من 100 شركة، وفواتير VAT وصيانة داخلية.",
  es: "Tus empleados e invitados llegan a tiempo. 23 anos de experiencia, 100+ empresas, facturas VAT y servicio propio.",
  fr: "Vos employes et invites arrivent a l'heure. 24 ans d'experience, 100+ entreprises, factures VAT et service interne.",
};

const heroTitles: Record<Language, string> = {
  pl: "Transport na Imprezy Firmowe i Integracje",
  en: "Transport for Corporate Events and Team Trips",
  de: "Transport fur Firmenevents und Integrationen",
  ru: "Транспорт для корпоративных и тимбилдинг-мероприятий",
  ar: "نقل الفعاليات والرحلات للشركات",
  es: "Transporte para eventos e integraciones empresariales",
  fr: "Transport pour evenements et sorties d'entreprise",
};

const heroSubtitles: Record<Language, string> = {
  pl: "B2B bez chaosu: zespół dojeżdża punktualnie, a Ty masz jednego partnera od logistyki. 24 lata doświadczenia od 1997.",
  en: "B2B without chaos: your team arrives on time while you work with one logistics partner. 24 years since 1997.",
  de: "B2B ohne Chaos: Ihr Team kommt punktlich an und Sie haben einen Partner fur die gesamte Logistik.",
  ru: "B2B без хаоса: команда приезжает вовремя, а вы работаете с одним логистическим партнером.",
  ar: "خدمة B2B بلا فوضى: فريقك يصل في الوقت المحدد مع شريك لوجستي واحد.",
  es: "B2B sin caos: tu equipo llega a tiempo con un solo socio logistico.",
  fr: "B2B sans chaos: votre equipe arrive a l'heure avec un seul partenaire logistique.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Poproś o wycenę B2B - +48 41 345 32 25 lub ",
  en: "Get B2B quote - +48 41 345 32 25 lub ",
  de: "B2B Angebot anfragen - +48 41 345 32 25 lub ",
  ru: "Запросить B2B расчет - +48 41 345 32 25 lub ",
  ar: "اطلب عرض B2B - +48 41 345 32 25 lub ",
  es: "Pedir presupuesto B2B - +48 41 345 32 25 lub ",
  fr: "Demander devis B2B - +48 41 345 32 25 lub ",
};

const featureHeadings: Record<Language, string> = {
  pl: "Wynik biznesowy dla Twojej firmy",
  en: "Business outcome for your company",
  de: "Geschaftsergebnis fur Ihr Unternehmen",
  ru: "Бизнес-результат для вашей компании",
  ar: "نتيجة عملية لشركتك",
  es: "Resultado de negocio para tu empresa",
  fr: "Resultat business pour votre entreprise",
};

const featuresByLang: Record<Language, Array<{ icon: string; title: string; description: string }>> = {
  pl: [
    { icon: "🏢", title: "100+ firm w portfolio", description: "Zarządy i działy HR powierzają nam transport, bo Twoi ludzie docierają na czas i bez stresu." },
    { icon: "📋", title: "Faktury VAT i rozliczenia", description: "Otrzymujesz pełną dokumentację B2B, jasne warunki i sprawny obieg faktur dla księgowości." },
    { icon: "🕐", title: "Punktualność i własny serwis", description: "Własne zaplecze techniczne i flota 180 pojazdów oznaczają stabilność nawet przy dużych eventach." },
  ],
  en: [
    { icon: "🏢", title: "100+ companies served", description: "Boards and HR teams choose us because your people arrive on time and focused." },
    { icon: "📋", title: "VAT invoices and reporting", description: "You get full B2B documentation, clear terms and smooth accounting workflow." },
    { icon: "🕐", title: "Punctuality and own service", description: "Our technical base and 180-vehicle fleet keep operations stable for large events." },
  ],
  de: [
    { icon: "🏢", title: "100+ Firmenkunden", description: "Management und HR wahlen uns, weil Ihre Teams punktlich und stressfrei ankommen." },
    { icon: "📋", title: "VAT Rechnungen", description: "Sie erhalten vollstandige B2B Unterlagen, klare Bedingungen und schnellen Rechnungsfluss." },
    { icon: "🕐", title: "Punktlichkeit und eigener Service", description: "Eigenes Technikzentrum und 180 Fahrzeuge sichern auch grosse Events ab." },
  ],
  ru: [
    { icon: "🏢", title: "100+ компаний в портфеле", description: "Руководители и HR выбирают нас, потому что команда приезжает вовремя и без стресса." },
    { icon: "📋", title: "Счета VAT и документы", description: "Вы получаете полный пакет B2B документов и понятные условия сотрудничества." },
    { icon: "🕐", title: "Пунктуальность и свой сервис", description: "Собственная техбаза и флот 180 машин гарантируют стабильность на больших событиях." },
  ],
  ar: [
    { icon: "🏢", title: "أكثر من 100 شركة", description: "تختارنا إدارات الشركات لأن موظفيك يصلون في الوقت المحدد وبدون ضغط." },
    { icon: "📋", title: "فواتير VAT وتقارير", description: "تحصل على وثائق B2B كاملة وشروط واضحة وسير عمل محاسبي منظم." },
    { icon: "🕐", title: "الالتزام بالوقت وصيانة داخلية", description: "وجود صيانة خاصة وأسطول 180 مركبة يضمن الاستقرار حتى في الفعاليات الكبيرة." },
  ],
  es: [
    { icon: "🏢", title: "100+ empresas atendidas", description: "Direccion y RRHH nos eligen porque tu equipo llega puntual y sin friccion." },
    { icon: "📋", title: "Facturas VAT y control", description: "Recibes documentacion B2B completa, condiciones claras y flujo contable rapido." },
    { icon: "🕐", title: "Puntualidad y servicio propio", description: "Base tecnica propia y 180 vehiculos para operaciones estables en eventos grandes." },
  ],
  fr: [
    { icon: "🏢", title: "100+ entreprises clientes", description: "Directions et RH nous choisissent car vos equipes arrivent a l'heure et sans stress." },
    { icon: "📋", title: "Factures VAT", description: "Vous recevez une documentation B2B complete et des conditions claires." },
    { icon: "🕐", title: "Ponctualite et service interne", description: "Notre base technique et 180 vehicules assurent la fiabilite des grands evenements." },
  ],
};

const faqHeadings: Record<Language, string> = {
  pl: "FAQ - Imprezy firmowe",
  en: "FAQ - Corporate events",
  de: "FAQ - Firmenevents",
  ru: "FAQ - Корпоративные мероприятия",
  ar: "الاسئلة - فعاليات الشركات",
  es: "FAQ - Eventos corporativos",
  fr: "FAQ - Evenements entreprise",
};

const faqItems = faqData.impreza_firmowa.categories
  .flatMap((cat) => cat.questions)
  .map((q) => ({
    question: q.q,
    answer: q.a.replace(/<[^>]*>/g, ""),
  }));

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Podaj trasę i liczbę osób - przygotujemy plan B2B",
  en: "Share route and headcount - we prepare B2B plan",
  de: "Route und Teilnehmerzahl angeben - wir erstellen den B2B Plan",
  ru: "Укажите маршрут и число людей - подготовим B2B план",
  ar: "أرسل المسار وعدد الأشخاص - نعد لك خطة B2B",
  es: "Comparte ruta y numero de personas - preparamos plan B2B",
  fr: "Partagez trajet et effectif - nous preparons le plan B2B",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  return { title: metaTitles[l], description: metaDescriptions[l] };
}

export default async function ImprezaFirmowaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);

  return (
    <>
      <HeroSection title={heroTitles[l]} subtitle={heroSubtitles[l]} ctaText={ctaTexts[l]} ctaHref="tel:413453225" backgroundImage="/images/flota/flota-bus-1.jpg" />
      <FeatureBox features={featuresByLang[l]} heading={featureHeadings[l]} />
      {l === "pl" && <FAQAccordion items={faqItems} heading={faqHeadings[l]} />}
      <section className="py-12 px-4 bg-[#1D9E75] text-center">
        <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ctaSectionHeadings[l]}</h2>
        <CTAButton href="https://wa.me/48413453225" variant="secondary">💬 WhatsApp: +48 41 345 32 25 lub </CTAButton>
      </section>
    </>
  );
}
