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
  pl: "Cennik orientacyjny wynajmu | Busko-Zdrój",
  en: "Estimated rental pricing | Busko-Zdrój",
  de: "Orientierende Mietpreise | Busko-Zdrój",
  ru: "Ориентировочные цены аренды | Кельце",
  ar: "أسعار تأجير تقريبية | كيلتسه",
  es: "Precios orientativos de alquiler | Busko-Zdrój",
  fr: "Tarifs indicatifs de location | Busko-Zdrój",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Cennik zawiera widełki, nie sztywne kwoty. Zadzwoń po indywidualną wycenę dla swojej trasy i liczby osób.",
  en: "Pricing shows ranges, not fixed amounts. Call for an individual quote based on route and group size.",
  de: "Preise sind Richtwerte als Spannen. Fur ein individuelles Angebot bitte anrufen.",
  ru: "Цены указаны в диапазонах. Для точного расчета позвоните и сообщите маршрут.",
  ar: "الأسعار المعروضة نطاقات تقريبية وليست نهائية. اتصل بنا للحصول على عرض فردي.",
  es: "Los precios son rangos orientativos, no importes fijos. Llama para presupuesto individual.",
  fr: "Les tarifs sont indicatifs en fourchettes, pas fixes. Appelez pour un devis personnalise.",
};

const heroTitles: Record<Language, string> = {
  pl: "Cennik Orientacyjny Wynajmu",
  en: "Estimated Rental Pricing",
  de: "Orientierende Mietpreise",
  ru: "Ориентировочный прайс аренды",
  ar: "الأسعار التقريبية للتأجير",
  es: "Precios orientativos de alquiler",
  fr: "Tarifs indicatifs de location",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Widełki pomagają szybko zaplanować budżet, a finalną cenę dopasowujemy do trasy, czasu i liczby osób. 24 lata doświadczenia.",
  en: "Price ranges help estimate budget quickly, final quote is tailored to route, time and passenger count.",
  de: "Preisspannen helfen bei der Planung, das finale Angebot wird an Route, Zeit und Personenzahl angepasst.",
  ru: "Диапазоны помогают оценить бюджет, а итоговая цена рассчитывается под маршрут и количество пассажиров.",
  ar: "تساعدك نطاقات الأسعار في التخطيط السريع، بينما نعد السعر النهائي حسب المسار وعدد الأشخاص.",
  es: "Los rangos ayudan a planificar el presupuesto, y el precio final se ajusta a ruta y numero de personas.",
  fr: "Les fourchettes facilitent le budget, puis le prix final est ajuste selon trajet, temps et effectif.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zadzwoń po wycenę - +48 41 345 32 25 lub ",
  en: "Call for quote - +48 41 345 32 25 lub ",
  de: "Anrufen fur Angebot - +48 41 345 32 25 lub ",
  ru: "Позвонить за расчетом - +48 41 345 32 25 lub ",
  ar: "اتصل لطلب عرض السعر - +48 41 345 32 25 lub ",
  es: "Llamar para presupuesto - +48 41 345 32 25 lub ",
  fr: "Appeler pour devis - +48 41 345 32 25 lub ",
};

const featureHeadings: Record<Language, string> = {
  pl: "Dlaczego cennik jest w widełkach",
  en: "Why pricing is shown as ranges",
  de: "Warum Preise als Spannen",
  ru: "Почему цены указаны диапазонами",
  ar: "لماذا الأسعار ضمن نطاقات",
  es: "Por que mostramos rangos",
  fr: "Pourquoi des fourchettes de prix",
};

const featuresByLang: Record<Language, Array<{ icon: string; title: string; description: string }>> = {
  pl: [
    { icon: "📍", title: "Trasa i kilometry", description: "Cena zależy od dystansu, czasu przejazdu oraz opłat drogowych na danej trasie." },
    { icon: "👥", title: "Liczba osób i typ pojazdu", description: "Dobór pojazdu ma wpływ na koszt. Flota 180 pojazdów pozwala dobrać ekonomiczną opcję." },
    { icon: "🛡️", title: "Pewność i certyfikaty", description: "Wycena obejmuje bezpieczny transport z licencją przewozową oraz standardem ITD i WITD." },
  ],
  en: [
    { icon: "📍", title: "Route and mileage", description: "Price depends on distance, travel duration and road fees on selected route." },
    { icon: "👥", title: "Passenger count and vehicle", description: "Vehicle choice affects cost. 180-vehicle fleet allows efficient matching." },
    { icon: "🛡️", title: "Reliability and certificates", description: "Quote includes licensed transport with ITD/WITD compliance standards." },
  ],
  de: [
    { icon: "📍", title: "Route und Kilometer", description: "Preis hangt von Strecke, Fahrzeit und Mautkosten ab." },
    { icon: "👥", title: "Personenzahl und Fahrzeug", description: "Fahrzeugwahl beeinflusst den Preis. 180 Fahrzeuge fur passende Option." },
    { icon: "🛡️", title: "Sicherheit und Zertifikate", description: "Angebot umfasst lizenzierten Transport nach ITD/WITD Standard." },
  ],
  ru: [
    { icon: "📍", title: "Маршрут и километраж", description: "Цена зависит от расстояния, длительности и дорожных сборов." },
    { icon: "👥", title: "Количество людей и транспорт", description: "Тип транспорта влияет на цену. Флот 180 машин дает гибкий выбор." },
    { icon: "🛡️", title: "Надежность и сертификаты", description: "Расчет включает лицензированный транспорт по стандартам ITD/WITD." },
  ],
  ar: [
    { icon: "📍", title: "المسار وعدد الكيلومترات", description: "السعر يعتمد على المسافة ومدة الرحلة ورسوم الطرق." },
    { icon: "👥", title: "عدد الركاب ونوع المركبة", description: "اختيار المركبة يؤثر على السعر. أسطول 180 مركبة يتيح أفضل خيار." },
    { icon: "🛡️", title: "الموثوقية والشهادات", description: "العرض يشمل نقلًا مرخصًا وفق معايير ITD وWITD." },
  ],
  es: [
    { icon: "📍", title: "Ruta y kilometraje", description: "El precio depende de distancia, duracion y peajes en la ruta." },
    { icon: "👥", title: "Personas y tipo de vehiculo", description: "El vehiculo influye en coste. Flota de 180 vehiculos para ajustar opcion." },
    { icon: "🛡️", title: "Fiabilidad y certificados", description: "Incluye transporte con licencia y cumplimiento ITD/WITD." },
  ],
  fr: [
    { icon: "📍", title: "Trajet et kilometrage", description: "Le prix depend de la distance, duree et frais routiers." },
    { icon: "👥", title: "Effectif et type de vehicule", description: "Le choix du vehicule impacte le cout. Flotte de 180 vehicules." },
    { icon: "🛡️", title: "Fiabilite et certificats", description: "Le devis inclut transport licencie conforme ITD/WITD." },
  ],
};

const faqHeadings: Record<Language, string> = {
  pl: "FAQ - Cennik",
  en: "FAQ - Pricing",
  de: "FAQ - Preise",
  ru: "FAQ - Цены",
  ar: "الاسئلة - الأسعار",
  es: "FAQ - Precios",
  fr: "FAQ - Tarifs",
};

const faqItems = faqData.cennik.categories
  .flatMap((cat) => cat.questions)
  .map((q) => ({
    question: q.q,
    answer: q.a.replace(/<[^>]*>/g, ""),
  }));

const ctaSectionHeadings: Record<Language, string> = {
  pl: "To są widełki orientacyjne - zadzwoń po indywidualną wycenę",
  en: "These are estimate ranges - call for individual quote",
  de: "Das sind Richtspannen - bitte fur individuelles Angebot anrufen",
  ru: "Это ориентировочные диапазоны - звоните за точным расчетом",
  ar: "هذه نطاقات تقريبية - اتصل للحصول على عرض فردي",
  es: "Son rangos orientativos - llama para presupuesto individual",
  fr: "Ce sont des fourchettes indicatives - appelez pour un devis individuel",
};

const vehicleCards = [
  {
    icon: "🚗",
    name: "Bus 9-osobowy",
    capacity: "8 + kierowca",
    equipment: ["klimatyzacja", "USB"],
    pricePerKm: "3.50 zł/km",
    minPrice: "250 zł",
    dailyRate: "800 zł",
  },
  {
    icon: "🚐",
    name: "Minibus 17-osobowy",
    capacity: "16 + kierowca",
    equipment: ["klimatyzacja", "USB", "WiFi"],
    pricePerKm: "4.50 zł/km",
    minPrice: "350 zł",
    dailyRate: "1 100 zł",
  },
  {
    icon: "🚌",
    name: "Autokar 35-osobowy",
    capacity: "35 + kierowca",
    equipment: ["klimatyzacja", "toaleta", "USB", "TV"],
    pricePerKm: "6.00 zł/km",
    minPrice: "600 zł",
    dailyRate: "2 000 zł",
  },
  {
    icon: "🏎️",
    name: "Autokar 50-osobowy",
    capacity: "50 + kierowca",
    equipment: ["klimatyzacja", "toaleta", "WiFi", "TV"],
    pricePerKm: "7.50 zł/km",
    minPrice: "800 zł",
    dailyRate: "2 800 zł",
  },
];

const vehicleCardLabels: Record<Language, { capacity: string; equipment: string; perKm: string; min: string; day: string; cta: string; sectionTitle: string; sectionSub: string }> = {
  pl: { capacity: "Pojemność", equipment: "Wyposażenie", perKm: "Cena/km", min: "Minimum", day: "Dzień (8h)", cta: "Poproś wycenę", sectionTitle: "Pojazdy i cennik orientacyjny", sectionSub: "Ceny widełkowe. Finalna wycena zależy od trasy, czasu i opcji." },
  en: { capacity: "Capacity", equipment: "Equipment", perKm: "Price/km", min: "Minimum", day: "Day (8h)", cta: "Request a quote", sectionTitle: "Vehicles and estimated pricing", sectionSub: "Range pricing. Final quote depends on route, time and options." },
  de: { capacity: "Kapazitat", equipment: "Ausstattung", perKm: "Preis/km", min: "Minimum", day: "Tag (8h)", cta: "Angebot anfragen", sectionTitle: "Fahrzeuge und Richtpreise", sectionSub: "Preisspannen. Endpreis je nach Strecke, Zeit und Optionen." },
  ru: { capacity: "Вместимость", equipment: "Оснащение", perKm: "Цена/км", min: "Минимум", day: "День (8ч)", cta: "Запросить расчет", sectionTitle: "Транспорт и ориентировочные цены", sectionSub: "Ценовые диапазоны. Итоговая цена зависит от маршрута." },
  ar: { capacity: "السعة", equipment: "التجهيزات", perKm: "سعر/كم", min: "الحد الأدنى", day: "يوم (8 ساعات)", cta: "اطلب عرض سعر", sectionTitle: "المركبات والأسعار التقريبية", sectionSub: "أسعار نطاقية. السعر النهائي حسب المسار والوقت." },
  es: { capacity: "Capacidad", equipment: "Equipamiento", perKm: "Precio/km", min: "Mínimo", day: "Día (8h)", cta: "Pedir presupuesto", sectionTitle: "Vehículos y precios orientativos", sectionSub: "Precios en rango. El precio final depende de ruta y opciones." },
  fr: { capacity: "Capacité", equipment: "Équipement", perKm: "Prix/km", min: "Minimum", day: "Journée (8h)", cta: "Demander un devis", sectionTitle: "Véhicules et tarifs indicatifs", sectionSub: "Fourchettes de prix. Tarif final selon trajet, durée et options." },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  return { title: metaTitles[l], description: metaDescriptions[l] };
}

export default async function CennikPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);

  return (
    <>
      <HeroSection title={heroTitles[l]} subtitle={heroSubtitles[l]} ctaText={ctaTexts[l]} ctaHref="tel:413453225" backgroundImage="/images/flota/flota-autokar-5.jpg" />
      <FeatureBox features={featuresByLang[l]} heading={featureHeadings[l]} />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl font-black text-center text-[#1a1a1a] mb-3">{vehicleCardLabels[l].sectionTitle}</h2>
          <p className="text-center text-gray-500 mb-10">{vehicleCardLabels[l].sectionSub}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {vehicleCards.map((card) => (
              <div
                key={card.name}
                className="group flex flex-col rounded-xl border-2 border-[#e5e5e5] border-l-4 border-l-[#639922] bg-white p-[30px] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-4 text-[40px] leading-none text-[#639922]">{card.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-[#1a1a1a]">{card.name}</h3>
                <dl className="mb-5 space-y-1 text-sm text-gray-600">
                  <div className="flex gap-1">
                    <dt className="font-semibold text-gray-700">{vehicleCardLabels[l].capacity}:</dt>
                    <dd>{card.capacity}</dd>
                  </div>
                  <div className="flex gap-1">
                    <dt className="font-semibold text-gray-700">{vehicleCardLabels[l].equipment}:</dt>
                    <dd>{card.equipment.join(", ")}</dd>
                  </div>
                </dl>
                <div className="mb-6 rounded-lg bg-gray-50 px-4 py-3 font-mono text-sm text-[#1a1a1a]">
                  <div className="flex justify-between border-b border-gray-200 pb-2 mb-2">
                    <span className="text-gray-500">{vehicleCardLabels[l].perKm}</span>
                    <span className="font-bold text-[#639922]">{card.pricePerKm}</span>
                  </div>
                  <div className="flex justify-between text-xs py-1">
                    <span className="text-gray-500">{vehicleCardLabels[l].min}</span>
                    <span className="font-semibold">{card.minPrice}</span>
                  </div>
                  <div className="flex justify-between text-xs py-1">
                    <span className="text-gray-500">{vehicleCardLabels[l].day}</span>
                    <span className="font-semibold">{card.dailyRate}</span>
                  </div>
                </div>
                <CTAButton href="tel:413453225" variant="secondary" className="mt-auto w-full justify-center">
                  {vehicleCardLabels[l].cta}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {l === "pl" && <FAQAccordion items={faqItems} heading={faqHeadings[l]} />}
      <section className="py-12 px-4 bg-[#1D9E75] text-center">
        <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ctaSectionHeadings[l]}</h2>
        <CTAButton href="https://wa.me/48413453225" variant="secondary">💬 WhatsApp: +48 41 345 32 25 lub </CTAButton>
      </section>
    </>
  );
}
