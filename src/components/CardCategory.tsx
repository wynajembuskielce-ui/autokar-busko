import Link from "next/link";
import Image from "next/image";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

type CategoryCard = {
  icon: string;
  title: string;
  copy: string;
  cta: string;
  href: string;
  extras?: Array<{ label: string; href: string }>;
  backgroundImage: string;
  imageAlt: string;
};

const sectionHeading: Record<Language, string> = {
  pl: "Czego szukasz?",
  en: "What are you looking for?",
  de: "Was suchen Sie?",
  ru: "Что вы ищете?",
  ar: "ماذا تبحث عن؟",
  es: "¿Qué estás buscando?",
  fr: "Que cherchez-vous ?",
};

type CardData = {
  icon: string;
  title: Record<Language, string>;
  copy: Record<Language, string>;
  cta: Record<Language, string>;
  slug: string;
  extras: Array<{ label: Record<Language, string>; slug: string }>;
  backgroundImage: string;
  imageAlt: string;
};

const cardsData: CardData[] = [
  {
    icon: "💒",
    title: {
      pl: "Wesela & Eventy",
      en: "Weddings & Events",
      de: "Hochzeiten & Events",
      ru: "Свадьбы и мероприятия",
      ar: "حفلات الزفاف والفعاليات",
      es: "Bodas y Eventos",
      fr: "Mariages et Événements",
    },
    copy: {
      pl: "Elegancja i klasa dla Twojego dnia",
      en: "Elegance and class for your special day",
      de: "Eleganz und Klasse für Ihren besonderen Tag",
      ru: "Элегантность и стиль для вашего дня",
      ar: "الأناقة والراقي ليومك المميز",
      es: "Elegancia y clase para tu día especial",
      fr: "Élégance et classe pour votre journée spéciale",
    },
    cta: {
      pl: "Odkryj więcej",
      en: "Discover more",
      de: "Mehr entdecken",
      ru: "Узнать больше",
      ar: "اكتشف المزيد",
      es: "Descubrir más",
      fr: "Découvrir plus",
    },
    slug: "wesele",
    extras: [
      { label: { pl: "Impreza firmowa", en: "Corporate Event", de: "Firmenevent", ru: "Корпоратив", ar: "فعالية الشركة", es: "Evento corporativo", fr: "Événement d'entreprise" }, slug: "impreza-firmowa" },
      { label: { pl: "Hotel transfer", en: "Hotel Transfer", de: "Hoteltransfer", ru: "Трансфер в отель", ar: "نقل فندقي", es: "Transfer hotel", fr: "Transfert hôtel" }, slug: "hotel-transfer" },
    ],
    backgroundImage: "/images/wesele/wesele-autokar-elegancki-krakow-03.jpg",
    imageAlt: "Autokar na wesele Busko-Zdroj, elegancki transport gosci weselnych Autokar Busko",
  },
  {
    icon: "🏫",
    title: {
      pl: "Edukacja & Grupy",
      en: "Education & Groups",
      de: "Bildung & Gruppen",
      ru: "Образование и группы",
      ar: "التعليم والمجموعات",
      es: "Educación y Grupos",
      fr: "Éducation et Groupes",
    },
    copy: {
      pl: "Bezpieczne wyjazdy dla szkół, grup, pielgrzymów",
      en: "Safe trips for schools, groups and pilgrims",
      de: "Sichere Ausflüge für Schulen, Gruppen, Pilger",
      ru: "Безопасные поездки для школ, групп, паломников",
      ar: "رحلات آمنة للمدارس والمجموعات والحجاج",
      es: "Viajes seguros para escuelas, grupos y peregrinos",
      fr: "Voyages sécurisés pour écoles, groupes et pèlerins",
    },
    cta: {
      pl: "Zaplanuj wycieczkę",
      en: "Plan a trip",
      de: "Ausflug planen",
      ru: "Спланировать поездку",
      ar: "خطط لرحلة",
      es: "Planificar viaje",
      fr: "Planifier une sortie",
    },
    slug: "wycieczki-szkolne",
    extras: [
      { label: { pl: "Pielgrzymki", en: "Pilgrimages", de: "Pilgerfahrten", ru: "Паломничества", ar: "الحج والعمرة", es: "Peregrinaciones", fr: "Pèlerinages" }, slug: "pielgrzymki" },
      { label: { pl: "Narty Zakopane", en: "Ski Zakopane", de: "Ski Zakopane", ru: "Лыжи Закопане", ar: "تزلج زاكوباني", es: "Esquí Zakopane", fr: "Ski Zakopane" }, slug: "narty-zakopane" },
    ],
    backgroundImage: "/images/wycieczki/wycieczka-szkolna-autokar-krakow-12.jpg",
    imageAlt: "Autokar na wycieczki szkolne Krakow, bezpieczny transport grup dzieci i mlodziezy",
  },
  {
    icon: "🏢",
    title: {
      pl: "Biznes & Logistyka",
      en: "Business & Logistics",
      de: "Business & Logistik",
      ru: "Бизнес и логистика",
      ar: "الأعمال والخدمات اللوجستية",
      es: "Negocios y Logística",
      fr: "Business et Logistique",
    },
    copy: {
      pl: "Transport, konferencje, zakupy, delegacje",
      en: "Transport, conferences, shopping, delegations",
      de: "Transport, Konferenzen, Einkäufe, Delegationen",
      ru: "Транспорт, конференции, шоппинг, делегации",
      ar: "النقل والمؤتمرات والتسوق والوفود",
      es: "Transporte, conferencias, compras, delegaciones",
      fr: "Transport, conférences, achats, délégations",
    },
    cta: {
      pl: "Potrzebuję transportu",
      en: "I need transport",
      de: "Ich brauche Transport",
      ru: "Мне нужен транспорт",
      ar: "أحتاج إلى نقل",
      es: "Necesito transporte",
      fr: "J'ai besoin de transport",
    },
    slug: "lotnisko",
    extras: [
      { label: { pl: "Hotel transfer", en: "Hotel Transfer", de: "Hoteltransfer", ru: "Трансфер в отель", ar: "نقل فندقي", es: "Transfer hotel", fr: "Transfert hôtel" }, slug: "hotel-transfer" },
      { label: { pl: "Imprezy firmowe", en: "Corporate Events", de: "Firmenevents", ru: "Корпоративы", ar: "فعاليات الشركات", es: "Eventos corporativos", fr: "Événements d'entreprise" }, slug: "impreza-firmowa" },
    ],
    backgroundImage: "/images/transfer/transfer-autokar-krakow-6.jpg",
    imageAlt: "Transfer lotniskowy Krakow, autokar dla firm i grup biznesowych",
  },
  {
    icon: "🚌",
    title: {
      pl: "Flota & Planowanie",
      en: "Fleet & Planning",
      de: "Flotte & Planung",
      ru: "Автопарк и планирование",
      ar: "الأسطول والتخطيط",
      es: "Flota y Planificación",
      fr: "Flotte et Planification",
    },
    copy: {
      pl: "Sprawdź pojazdy, ceny i złożoność trasy",
      en: "Check vehicles, prices and route details",
      de: "Fahrzeuge, Preise und Routendetails prüfen",
      ru: "Проверьте автобусы, цены и маршруты",
      ar: "تحقق من المركبات والأسعار وتفاصيل المسار",
      es: "Consulta vehículos, precios y detalles de ruta",
      fr: "Consultez véhicules, tarifs et détails de route",
    },
    cta: {
      pl: "Wycena online",
      en: "Online quote",
      de: "Online-Angebot",
      ru: "Онлайн-расчёт",
      ar: "عرض سعر عبر الإنترنت",
      es: "Presupuesto online",
      fr: "Devis en ligne",
    },
    slug: "flota",
    extras: [
      { label: { pl: "Galeria", en: "Gallery", de: "Galerie", ru: "Галерея", ar: "معرض الصور", es: "Galería", fr: "Galerie" }, slug: "galeria" },
      { label: { pl: "Cennik", en: "Pricing", de: "Preise", ru: "Цены", ar: "الأسعار", es: "Precios", fr: "Tarifs" }, slug: "cennik" },
      { label: { pl: "Kalkulator", en: "Calculator", de: "Kalkulator", ru: "Калькулятор", ar: "الآلة الحاسبة", es: "Calculadora", fr: "Calculateur" }, slug: "kalkulator" },
    ],
    backgroundImage: "/images/flota/flota-autokar-14.jpg",
    imageAlt: "Flota autokarow i busow Busko-Zdroj, wynajem autokaru Autokar Busko",
  },
];

function buildCards(lang: Language): CategoryCard[] {
  return cardsData.map((card) => ({
    icon: card.icon,
    title: card.title[lang],
    copy: card.copy[lang],
    cta: card.cta[lang],
    href: `/${lang}/${card.slug}`,
    extras: card.extras.map((e) => ({ label: e.label[lang], href: `/${lang}/${e.slug}` })),
    backgroundImage: card.backgroundImage,
    imageAlt: card.imageAlt,
  }));
}

export default function CardCategory({ lang }: { lang: Language }) {
  const cards = buildCards(lang);

  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-8">{sectionHeading[lang] ?? sectionHeading.pl}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className="relative overflow-hidden rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.2)] min-h-[270px]"
            >
              <Image
                src={card.backgroundImage}
                alt={card.imageAlt}
                fill
                className="absolute inset-0 object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(26,26,26,0.92)] to-[rgba(45,45,45,0.86)]" />
              <div className="relative z-10 p-7 h-full flex flex-col">
                <div className="text-[40px] leading-none text-[#f59e0b] mb-4" aria-hidden="true">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                <p className="text-base text-gray-300 mb-5">{card.copy}</p>

                {card.extras?.length ? (
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.extras.map((extra) => (
                      <Link
                        key={extra.href}
                        href={extra.href}
                        className="text-xs text-white/90 border border-white/25 px-2 py-1 rounded-md hover:border-[#f59e0b] hover:text-[#f59e0b] transition-colors duration-200"
                      >
                        {extra.label}
                      </Link>
                    ))}
                  </div>
                ) : null}

                <Link
                  href={card.href}
                  className="mt-auto inline-flex w-fit rounded-lg border-2 border-[#f59e0b] px-6 py-3 text-base font-bold text-[#f59e0b] transition-all duration-200 hover:bg-[#f59e0b] hover:text-black"
                >
                  {card.cta} {"->"}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
