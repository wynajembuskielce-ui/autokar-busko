import type { Metadata } from "next";
import HeroSection from "@/src/components/HeroSection";
import FeatureBox from "@/src/components/FeatureBox";
import FAQAccordion from "@/src/components/FAQAccordion";
import CTAButton from "@/src/components/CTAButton";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  if (["en", "de", "ru", "ar", "es", "fr"].includes(lang)) return lang as Language;
  return "pl";
}

const metaTitles: Record<Language, string> = {
  pl: "Wynajem autokaru Krakow → Kraków — cena od 1 050 zł, 115 km, 1h 40min",
  en: "Coach hire Krakow → Krakow — 115 km, from PLN 1,050",
  de: "Coach hire Krakow → Krakow — 115 km, from PLN 1,050",
  ru: "Coach hire Krakow → Krakow — 115 km, from PLN 1,050",
  ar: "Coach hire Krakow → Krakow — 115 km, from PLN 1,050",
  es: "Coach hire Krakow → Krakow — 115 km, from PLN 1,050",
  fr: "Coach hire Krakow → Krakow — 115 km, from PLN 1,050",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Autokar z Krakowa do Krakowa: tabela cen dla 20/35/50 osób, 6 miejsc odbioru w Krakowie, dojazd do Tauron Areny, Wawelu i Balic. Wycena w 15 min. Tel. 601 076 652.",
  en: "Coach from Krakow to Krakow with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
  de: "Coach from Krakow to Krakow with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
  ru: "Coach from Krakow to Krakow with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
  ar: "Coach from Krakow to Krakow with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
  es: "Coach from Krakow to Krakow with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
  fr: "Coach from Krakow to Krakow with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
};

const heroTitles: Record<Language, string> = {
  pl: "Wynajem autokaru Krakow → Kraków — 115 km, od 1 050 zł, dojazd w 1h 40min",
  en: "Coach hire Krakow → Krakow from PLN 1,050",
  de: "Coach hire Krakow → Krakow from PLN 1,050",
  ru: "Coach hire Krakow → Krakow from PLN 1,050",
  ar: "Coach hire Krakow → Krakow from PLN 1,050",
  es: "Coach hire Krakow → Krakow from PLN 1,050",
  fr: "Coach hire Krakow → Krakow from PLN 1,050",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Trasa Krakow → Kraków to nasza najczęściej obsługiwana relacja. W 2025 roku przejechaliśmy ją ponad 740 razy. Wycenę dostajesz w 15 minut.",
  en: "Fast intercity coach service with fixed pricing and quick booking.",
  de: "Fast intercity coach service with fixed pricing and quick booking.",
  ru: "Fast intercity coach service with fixed pricing and quick booking.",
  ar: "Fast intercity coach service with fixed pricing and quick booking.",
  es: "Fast intercity coach service with fixed pricing and quick booking.",
  fr: "Fast intercity coach service with fixed pricing and quick booking.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Sprawdź dostępność — 601 076 652",
  en: "Check availability now",
  de: "Check availability now",
  ru: "Check availability now",
  ar: "Check availability now",
  es: "Check availability now",
  fr: "Check availability now",
};

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Sprawdź dostępność na Twoją datę",
  en: "Book this route now",
  de: "Book this route now",
  ru: "Book this route now",
  ar: "Book this route now",
  es: "Book this route now",
  fr: "Book this route now",
};

const routePricingRows = [
  {
    vehicle: "Bus Mercedes Sprinter 20",
    passengers: "16-20",
    oneWay: "750 zł",
    sameDayReturn: "1 100 zł",
    oneDayTrip: "1 400 zł",
    overnight: "1 900 zł",
  },
  {
    vehicle: "Autokar Iveco Crossway 35",
    passengers: "30-35",
    oneWay: "1 050 zł",
    sameDayReturn: "1 500 zł",
    oneDayTrip: "1 900 zł",
    overnight: "2 500 zł",
  },
  {
    vehicle: "Autokar Setra ComfortClass 50",
    passengers: "45-50",
    oneWay: "1 300 zł",
    sameDayReturn: "1 850 zł",
    oneDayTrip: "2 300 zł",
    overnight: "2 950 zł",
  },
  {
    vehicle: "Autokar VIP 50 (skóra, fotele 2+1)",
    passengers: "40-45",
    oneWay: "1 600 zł",
    sameDayReturn: "2 200 zł",
    oneDayTrip: "2 800 zł",
    overnight: "3 600 zł",
  },
];

const travelTimeRows = [
  { timeOfDay: "5:00 - 6:30", duration: "1h 35min", note: "najszybciej, pusty A4" },
  { timeOfDay: "7:00 - 9:00", duration: "1h 50min - 2h 15min", note: "korek wjazd do Krakowa" },
  { timeOfDay: "10:00 - 14:00", duration: "1h 40min", note: "typowy czas, średni ruch" },
  { timeOfDay: "15:00 - 18:00", duration: "2h - 2h 30min", note: "szczyt popołudniowy" },
  { timeOfDay: "19:00 - 22:00", duration: "1h 45min", note: "spokojnie" },
  { timeOfDay: "22:00 - 5:00", duration: "1h 30min", note: "nocą najszybciej" },
];

const groupVehicleRows = [
  {
    groupSize: "2-8 osób",
    vehicle: "Mercedes Vito / VW Caravelle",
    reason: "tańszy niż autokar, łatwiej parkować",
  },
  {
    groupSize: "9-16 osób",
    vehicle: "Mercedes Sprinter 19 + 2",
    reason: "komfort i miejsce na bagaż",
  },
  {
    groupSize: "17-30 osób",
    vehicle: "Iveco Daily 24-os / MAN Lion's Coach M 30",
    reason: "turystyczny standard średni",
  },
  {
    groupSize: "31-49 osób",
    vehicle: "Iveco Crossway 49 / Setra ComfortClass",
    reason: "klasa premium na trasę do Krakowa",
  },
  {
    groupSize: "50+ osób",
    vehicle: "Setra TopClass / Neoplan Cityliner",
    reason: "komfort premium lub konwój",
  },
];

const pickupPoints = [
  "ul. Kolberga 9 (nasza baza)",
  "Galeria Echo",
  "PKP Krakow",
  "Plaza Krakow",
  "Galeria Korona",
  "Hotel Kongresowy / Targi Krakow",
];

const includedItems = [
  "Paliwo i kierowca z licencją D",
  "Opłaty autostradowe A4",
  "Ubezpieczenie OC/AC/NNW pasażerów",
  "Parking u celu do 3 godzin",
  "Postój kawowy i faktura VAT 8%",
];

const excludedItems = [
  "Parking powyżej 3h u celu",
  "Drugi kierowca przy trasie nocnej po 22:00",
  "Dopłata SCT dla pojazdów poniżej Euro 6",
  "Nocleg kierowcy przy wyjeździe wielodniowym",
];

const whyUsFeatures = [
  {
    icon: "🛣️",
    title: "24 lata na trasie Krakow-Kraków",
    description: "Obsługujemy tę relację od 2003 roku i znamy każdy wariant dojazdu.",
  },
  {
    icon: "🚌",
    title: "Flota 180 pojazdów",
    description: "W razie awarii podstawiamy pojazd zastępczy w około 45 minut.",
  },
  {
    icon: "✅",
    title: "Euro 6 i SCT Kraków",
    description: "31 z 38 dużych autokarów spełnia normę Euro 6 i wjeżdża do SCT bez dopłat.",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje wynajem autokaru z Krakowa do Krakowa w 2026 roku?",
    answer:
      "Dla autokaru 50-osobowego: 1 300 zł one-way, 1 850 zł tam i z powrotem tego samego dnia, 2 300 zł na wycieczkę do 10h. Dla busa 20-os: 750 / 1 100 / 1 400 zł.",
  },
  {
    question: "Ile trwa przejazd Krakow → Kraków autokarem?",
    answer:
      "Autostradą A4 około 1h 40min (115 km). W szczycie popołudniowym dolicz 15-30 minut. Trasą DK7 + S7 zwykle 2h-2h 20min.",
  },
  {
    question: "Jaki autokar dla 50 osób na trasę Krakow-Kraków?",
    answer:
      "Najczęściej Setra ComfortClass (klasa turystyczna, klimatyzacja strefowa, WC, USB). Dla premium używamy Setra TopClass.",
  },
  {
    question: "Czy można zarezerwować autokar na powrót tego samego dnia?",
    answer:
      "Tak. Typowy scenariusz: wyjazd rano 6:00-8:00, pobyt 8-10h w Krakowie i powrót 18:00-20:00. Cena dla autokaru 50-os to 1 850 zł.",
  },
  {
    question: "Ile wcześniej rezerwować autokar do Krakowa?",
    answer:
      "W sezonie rekomendujemy minimum 6-8 tygodni, poza sezonem zwykle wystarczy 2-3 tygodnie.",
  },
  {
    question: "Czy można jechać do Krakowa nocą?",
    answer:
      "Tak. Po 22:00 wymagany jest drugi kierowca zgodnie z przepisami czasu pracy kierowców, co podnosi koszt o 400 zł.",
  },
  {
    question: "Czy wjeżdżacie do Strefy Czystego Transportu w Krakowie?",
    answer:
      "Tak. Większość naszej floty spełnia normę Euro 6 i wjeżdża do SCT bez dopłaty.",
  },
  {
    question: "Czy autokar ma WC, klimatyzację i WiFi?",
    answer:
      "Tak, w pojazdach klasy turystycznej i wyższej zapewniamy klimatyzację, a w większości także WC i WiFi.",
  },
];

const schemaObject = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.autokar-busko.pl/pl/trasy/krakow-krakow-autokar#service",
      name: "Wynajem autokaru Krakow → Kraków",
      description:
        "Wynajem autokaru lub busa na trasie Krakow-Kraków. 115 km, czas przejazdu 1h 40min autostradą A4. Pojazdy 16-50 osób. Stałe ceny od 750 zł.",
      provider: {
        "@type": "LocalBusiness",
        name: "MUSZKIETER — Wynajem Autobus",
        telephone: "+48601076652",
        email: "biuro@muszkieter.pl",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Kolberga 9",
          addressLocality: "Krakow",
          postalCode: "25-516",
          addressCountry: "PL",
        },
      },
      areaServed: [
        { "@type": "City", name: "Krakow" },
        { "@type": "City", name: "Kraków" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cennik trasy Krakow-Kraków 2026",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Bus 20-osobowy Krakow-Kraków one-way",
            price: "750",
            priceCurrency: "PLN",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Autokar 35-osobowy Krakow-Kraków one-way",
            price: "1050",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Kraków one-way",
            price: "1300",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Kraków tam i z powrotem",
            price: "1850",
            priceCurrency: "PLN",
          },
        ],
      },
    },
    {
      "@type": "TripAction",
      fromLocation: {
        "@type": "City",
        name: "Krakow",
        address: "Polska, województwo świętokrzyskie",
      },
      toLocation: {
        "@type": "City",
        name: "Kraków",
        address: "Polska, województwo małopolskie",
      },
      distance: "115 km",
      expectedArrivalTime: "PT1H40M",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Ile kosztuje wynajem autokaru z Krakowa do Krakowa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dla autokaru 50-osobowego: 1 300 zł one-way, 1 850 zł tam-i-z-powrotem tego samego dnia, 2 300 zł na całą wycieczkę 10h. Dla busa 20-osobowego: 750 / 1 100 / 1 400 zł. Ceny obejmują paliwo, kierowcę, opłaty A4, ubezpieczenie i parking u celu do 3h.",
          },
        },
        {
          "@type": "Question",
          name: "Ile trwa przejazd Krakow-Kraków autokarem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Autostradą A4: 1 godzina 40 minut (115 km). W godzinach szczytu 15:00-18:00 dodatkowe 15-30 min. Trasą krajową DK7+S7 bez opłat: 2h-2h 20min, 130 km.",
          },
        },
        {
          "@type": "Question",
          name: "Jaki autokar dla 50 osób na trasę Krakow-Kraków?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standardowo Setra ComfortClass S 415 GT-HD (klasa turystyczna ★★★★, 49 fotelek, klimatyzacja strefowa, WC, USB). Dla wesel premium — Setra TopClass S 517 HDH (klasa ★★★★★, fotele 2+1 ze skóry). Dla wycieczek szkolnych — Iveco Crossway 49 (klasa ★★★).",
          },
        },
        {
          "@type": "Question",
          name: "Czy można zarezerwować autokar Kielce-Kraków na powrót tego samego dnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. Standardowo: wyjazd 6:00-8:00, dzień w Krakowie (8-10h), powrót 18:00-20:00. Cena 1 850 zł za autokar 50-os.",
          },
        },
        {
          "@type": "Question",
          name: "Ile wcześniej rezerwować autokar do Krakowa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "W sezonie (V-IX) minimum 6-8 tygodni, zwłaszcza weekendy. Poza sezonem 2-3 tygodnie wystarczą. W ostatniej chwili dostępność w ok. 60% przypadków, ceny rosną o 15-25%.",
          },
        },
        {
          "@type": "Question",
          name: "Czy można jechać do Krakowa nocą autokarem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak, do 22:00 bez dodatkowych kosztów. Po 22:00 wymagany drugi kierowca (rozp. WE 561/2006) — dopłata 400 zł. Powrót z koncertu z Tauron Areny obsługujemy regularnie.",
          },
        },
        {
          "@type": "Question",
          name: "Czy wjeżdżacie do Strefy Czystego Transportu w Krakowie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. 31 z 38 naszych dużych autokarów spełnia normę Euro 6, wjeżdżamy do SCT Kraków bez opłat. Starszym autokarem — dopłata 120 zł za jednorazową opłatę SCT.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Strona główna",
          item: "https://www.autokar-busko.pl/pl",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Trasy",
          item: "https://www.autokar-busko.pl/pl/trasy",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Krakow → Kraków",
          item: "https://www.autokar-busko.pl/pl/trasy/krakow-krakow-autokar",
        },
      ],
    },
  ],
};

function ResponsivePricingTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-black text-[#f59e0b]">Cena wynajmu autokaru Krakow-Kraków (cennik 2026)</h2>
        <p className="mb-8 text-gray-300">
          Cennik orientacyjny przy zapytaniach poniżej 30 dni przed wyjazdem. Wszystkie ceny brutto i bez ukrytych dopłat.
        </p>

        <div className="space-y-4 md:hidden">
          {routePricingRows.map((row) => (
            <div key={row.vehicle} className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              <h3 className="text-lg font-bold text-[#f59e0b]">{row.vehicle}</h3>
              <p className="mt-1 text-sm text-gray-300">Pasażerów: {row.passengers}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-3"><dt>One-way</dt><dd className="font-bold">{row.oneWay}</dd></div>
                <div className="flex justify-between gap-3"><dt>Tam i z powrotem</dt><dd className="font-bold">{row.sameDayReturn}</dd></div>
                <div className="flex justify-between gap-3"><dt>Wycieczka 1-dniowa</dt><dd className="font-bold">{row.oneDayTrip}</dd></div>
                <div className="flex justify-between gap-3"><dt>Dzień z noclegiem</dt><dd className="font-bold">{row.overnight}</dd></div>
              </dl>
            </div>
          ))}
        </div>

        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full overflow-hidden rounded-xl border border-[#2a2a2a] text-sm">
            <thead className="bg-[#111111] text-left text-[#f59e0b]">
              <tr>
                <th className="px-4 py-3">Pojazd</th>
                <th className="px-4 py-3">Pasażerów</th>
                <th className="px-4 py-3">One-way</th>
                <th className="px-4 py-3">Tam i z powrotem</th>
                <th className="px-4 py-3">Wycieczka 1-dniowa</th>
                <th className="px-4 py-3">Dzień z noclegiem</th>
              </tr>
            </thead>
            <tbody>
              {routePricingRows.map((row) => (
                <tr key={row.vehicle} className="border-t border-[#2a2a2a] bg-[#141414]">
                  <td className="px-4 py-3 font-semibold">{row.vehicle}</td>
                  <td className="px-4 py-3">{row.passengers}</td>
                  <td className="px-4 py-3 font-bold">{row.oneWay}</td>
                  <td className="px-4 py-3 font-bold">{row.sameDayReturn}</td>
                  <td className="px-4 py-3 font-bold">{row.oneDayTrip}</td>
                  <td className="px-4 py-3">{row.overnight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ResponsiveTravelTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-black text-[#f59e0b]">Czas przejazdu i trasa</h2>

        <div className="space-y-4 md:hidden">
          {travelTimeRows.map((row) => (
            <div key={row.timeOfDay} className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              <p className="text-sm text-gray-300">{row.timeOfDay}</p>
              <p className="mt-1 text-lg font-black text-[#f59e0b]">{row.duration}</p>
              <p className="mt-2 text-sm text-gray-300">{row.note}</p>
            </div>
          ))}
        </div>

        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full overflow-hidden rounded-xl border border-[#2a2a2a] text-sm">
            <thead className="bg-[#111111] text-left text-[#f59e0b]">
              <tr>
                <th className="px-4 py-3">Pora dnia</th>
                <th className="px-4 py-3">Czas Krakow → Kraków</th>
                <th className="px-4 py-3">Komentarz</th>
              </tr>
            </thead>
            <tbody>
              {travelTimeRows.map((row) => (
                <tr key={row.timeOfDay} className="border-t border-[#2a2a2a] bg-[#141414]">
                  <td className="px-4 py-3">{row.timeOfDay}</td>
                  <td className="px-4 py-3 font-bold">{row.duration}</td>
                  <td className="px-4 py-3">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function GroupVehicleTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-black text-[#f59e0b]">Jaki autokar dla jakiej grupy</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full overflow-hidden rounded-xl border border-[#2a2a2a] text-sm">
            <thead className="bg-[#111111] text-left text-[#f59e0b]">
              <tr>
                <th className="px-4 py-3">Wielkość grupy</th>
                <th className="px-4 py-3">Rekomendowany pojazd</th>
                <th className="px-4 py-3">Dlaczego</th>
              </tr>
            </thead>
            <tbody>
              {groupVehicleRows.map((row) => (
                <tr key={row.groupSize} className="border-t border-[#2a2a2a] bg-[#141414]">
                  <td className="px-4 py-3 font-bold">{row.groupSize}</td>
                  <td className="px-4 py-3">{row.vehicle}</td>
                  <td className="px-4 py-3">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CTABlock() {
  return (
    <section className="bg-[#f59e0b] px-4 py-12 text-center">
      <h3 className="mb-2 text-2xl font-black text-[#1a1a1a]">Sprawdź dostępność na Twoją datę</h3>
      <p className="mb-6 text-[#1a1a1a]">Odpowiadamy w 15-30 min w godzinach biurowych. Wycena pisemna, bez zobowiązań.</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <CTAButton href="tel:+48601076652">📞 Zadzwoń: 601 076 652</CTAButton>
        <CTAButton href="https://wa.me/48693440585" variant="secondary">💬 WhatsApp</CTAButton>
        <CTAButton href="/pl/kontakt" variant="secondary">✉️ Formularz wyceny</CTAButton>
      </div>
    </section>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  const currentUrl = `https://www.autokar-busko.pl/${l}/trasy/krakow-krakow-autokar`;

  return {
    title: metaTitles[l],
    description: metaDescriptions[l],
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      title: l === "pl" ? "Autokar Kielce → Kraków od 1 050 zł | MUSZKIETER" : metaTitles[l],
      description:
        l === "pl"
          ? "115 km, 1h 40min autostradą A4. Busy 20-os i autokary 50-os. Stałe ceny, bez ukrytych dopłat."
          : metaDescriptions[l],
      url: currentUrl,
      type: "website",
      locale: l === "pl" ? "pl_PL" : "en_US",
    },
  };
}

export default async function KrakowKrakowRoutePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = toLang(lang);

  if (l !== "pl") {
    return (
      <>
        <HeroSection
          title={heroTitles[l]}
          subtitle={heroSubtitles[l]}
          ctaText={ctaTexts[l]}
          ctaHref="tel:+48601076652"
          backgroundImage="/images/transfer/transfer-autokar-krakow-6.jpg"
        />
        <section className="bg-[#1a1a1a] px-4 py-12 text-white">
          <div className="mx-auto max-w-3xl rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6 text-center">
            <p className="text-lg leading-relaxed text-gray-300">
              This route page is available in full only in Polish. For English-language booking, please call +48 601 076 652,
              WhatsApp +48 693 440 585, or email biuro@muszkieter.pl.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <CTAButton href="tel:+48601076652">Call now</CTAButton>
              <CTAButton href="https://wa.me/48693440585" variant="secondary">WhatsApp</CTAButton>
              <CTAButton href="mailto:biuro@muszkieter.pl" variant="secondary">Email</CTAButton>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <HeroSection
        title={heroTitles[l]}
        subtitle={heroSubtitles[l]}
        ctaText={ctaSectionHeadings[l]}
        ctaHref="tel:+48601076652"
        backgroundImage="/images/transfer/transfer-autokar-krakow-6.jpg"
      />

      <ResponsivePricingTable />
      <CTABlock />

      <ResponsiveTravelTable />

      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-black text-[#f59e0b]">Miejsca odbioru w Krakowie</h2>
          <ol className="grid gap-3 md:grid-cols-2">
            {pickupPoints.map((point, index) => (
              <li key={point} className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4 text-gray-200">
                <span className="mr-2 font-black text-[#f59e0b]">{index + 1}.</span>
                {point}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl space-y-8">
          <h2 className="text-3xl font-black text-[#f59e0b]">Miejsca docelowe w Krakowie</h2>

          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Centrum / Stare Miasto</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>Wawel i okolice ul. Powiśle</li>
              <li>Rynek Główny (drop-off przy ul. Straszewskiego)</li>
              <li>Galeria Krakowska i ICE Kraków</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Atrakcje i wydarzenia</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>Tauron Arena, Stadion Wisły, Stadion Cracovii</li>
              <li>Kazimierz, ZOO Kraków, Kopiec Kościuszki</li>
              <li>Transfery koncertowe i eventowe</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Hotele i lotnisko</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>Sheraton, Hilton, Qubus, Mercure, Park Inn</li>
              <li>Lotnisko Kraków-Balice (KRK)</li>
              <li>Obsługa grup biznesowych i konferencyjnych</li>
            </ul>
          </div>
        </div>
      </section>

      <GroupVehicleTable />

      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6">
            <h2 className="mb-4 text-2xl font-black text-[#f59e0b]">Co jest w cenie</h2>
            <ul className="space-y-2 text-gray-300">
              {includedItems.map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6">
            <h2 className="mb-4 text-2xl font-black text-[#f59e0b]">Czego nie obejmuje cena</h2>
            <ul className="space-y-2 text-gray-300">
              {excludedItems.map((item) => (
                <li key={item}>❌ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="mb-6 text-3xl font-black text-[#f59e0b]">Jak rezerwować</h2>
          <ol className="space-y-3 text-gray-300">
            <li>1. Zadzwoń lub wyślij formularz z datą, trasą i liczbą osób.</li>
            <li>2. Otrzymasz wycenę w 15-30 minut.</li>
            <li>3. Rezerwację potwierdza zaliczka 20-30%.</li>
            <li>4. Pełna płatność dzień przed wyjazdem lub po przejeździe.</li>
          </ol>
        </div>
      </section>

      <FeatureBox features={whyUsFeatures} heading="Dlaczego MUSZKIETER" />

      <FAQAccordion items={faqItems} heading="Najczęściej zadawane pytania" />
      <CTABlock />

      <section className="bg-[#1a1a1a] px-4 py-12 text-center text-white">
        <h2 className="mb-3 text-3xl font-black text-[#f59e0b]">Gotowi na trasę Krakow → Kraków?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-300">
          Wybierz dogodny kanał kontaktu i otrzymaj pisemną wycenę bez zobowiązań.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="tel:+48601076652">📞 601 076 652</CTAButton>
          <CTAButton href="https://wa.me/48693440585" variant="secondary">💬 WhatsApp</CTAButton>
          <CTAButton href="/pl/cennik" variant="secondary">Zobacz pełen cennik</CTAButton>
        </div>
      </section>
      <CTABlock />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
      />
    </>
  );
}
