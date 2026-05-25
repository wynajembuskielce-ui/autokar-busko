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
  pl: "Wynajem autokaru Krakow → Warszawa — cena od 1 450 zł, 180 km, 2h 30min",
  en: "Coach hire Krakow → Warsaw — 180 km, from PLN 1,450",
  de: "Coach hire Krakow → Warsaw — 180 km, from PLN 1,450",
  ru: "Coach hire Krakow → Warsaw — 180 km, from PLN 1,450",
  ar: "Coach hire Krakow → Warsaw — 180 km, from PLN 1,450",
  es: "Coach hire Krakow → Warsaw — 180 km, from PLN 1,450",
  fr: "Coach hire Krakow → Warsaw — 180 km, from PLN 1,450",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Autokar Kielce-Warszawa: cennik dla 20/35/50 osób, dojazd do PGE Narodowego, Pałacu Kultury, Lotniska Chopina i Modlin. Trasa S7. Wycena 15 min. Tel. 41 345 32 25.",
  en: "Coach from Krakow to Warsaw with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  de: "Coach from Krakow to Warsaw with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  ru: "Coach from Krakow to Warsaw with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  ar: "Coach from Krakow to Warsaw with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  es: "Coach from Krakow to Warsaw with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  fr: "Coach from Krakow to Warsaw with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 41 345 32 25.",
};

const heroTitles: Record<Language, string> = {
  pl: "Wynajem autokaru Krakow → Warszawa — 180 km, od 1 050 zł, dojazd S7 w 2h 30min",
  en: "Coach hire Krakow → Warsaw from PLN 1,450",
  de: "Coach hire Krakow → Warsaw from PLN 1,450",
  ru: "Coach hire Krakow → Warsaw from PLN 1,450",
  ar: "Coach hire Krakow → Warsaw from PLN 1,450",
  es: "Coach hire Krakow → Warsaw from PLN 1,450",
  fr: "Coach hire Krakow → Warsaw from PLN 1,450",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Trasa Krakow → Warszawa to dla nas chleb powszedni — w 2025 roku wykonaliśmy ją 412 razy. Pełną ekspresówką S7 pokonujemy 180 km w 2 godziny 30 minut. Wycenę dostajesz w 15 minut.",
  en: "Fast intercity coach service with fixed pricing and quick booking.",
  de: "Fast intercity coach service with fixed pricing and quick booking.",
  ru: "Fast intercity coach service with fixed pricing and quick booking.",
  ar: "Fast intercity coach service with fixed pricing and quick booking.",
  es: "Fast intercity coach service with fixed pricing and quick booking.",
  fr: "Fast intercity coach service with fixed pricing and quick booking.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Sprawdź dostępność — 41 345 32 25",
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
    oneWay: "1 050 zł",
    sameDayReturn: "1 500 zł",
    oneDayTrip: "1 900 zł",
    overnight: "2 500 zł",
  },
  {
    vehicle: "Autokar Iveco Crossway 35",
    passengers: "30-35",
    oneWay: "1 450 zł",
    sameDayReturn: "2 050 zł",
    oneDayTrip: "2 550 zł",
    overnight: "3 300 zł",
  },
  {
    vehicle: "Autokar Setra ComfortClass 50",
    passengers: "45-50",
    oneWay: "1 800 zł",
    sameDayReturn: "2 550 zł",
    oneDayTrip: "3 200 zł",
    overnight: "4 000 zł",
  },
  {
    vehicle: "Autokar VIP 50 (skóra, fotele 2+1)",
    passengers: "40-45",
    oneWay: "2 200 zł",
    sameDayReturn: "3 100 zł",
    oneDayTrip: "3 850 zł",
    overnight: "4 700 zł",
  },
];

const travelTimeRows = [
  { timeOfDay: "4:00 – 6:00", duration: "2h 20min", note: "najszybciej, pusta S7, idealne dla samolotów rano" },
  { timeOfDay: "7:00 – 9:00", duration: "2h 50min – 3h 15min", note: "wąskie gardło Janki/Raszyn" },
  { timeOfDay: "10:00 – 14:00", duration: "2h 30min", note: "typowy czas, średni ruch" },
  { timeOfDay: "14:00 – 18:00", duration: "3h – 3h 45min", note: "szczyt popołudniowy, S2 Południowa korkuje" },
  { timeOfDay: "18:00 – 21:00", duration: "2h 40min", note: "umiarkowanie" },
  { timeOfDay: "21:00 – 4:00", duration: "2h 15min", note: "nocą najszybciej" },
];

const groupVehicleRows = [
  {
    groupSize: "2-8 osób",
    vehicle: "Mercedes Vito / VW Caravelle",
    reason: "szybkie parkowanie w centrum, wjazd do SCT bez problemów",
  },
  {
    groupSize: "9-16 osób",
    vehicle: "Mercedes Sprinter 19+2",
    reason: "klimatyzacja, miejsce na bagaż lotniskowy",
  },
  {
    groupSize: "17-30 osób",
    vehicle: "Iveco Daily 24-os / MAN Lion's Coach M 30",
    reason: "autokar ★★★, łatwiej w korku niż 50-os",
  },
  {
    groupSize: "31-49 osób",
    vehicle: "Iveco Crossway 49 / Setra S 415 GT-HD",
    reason: "standard ★★★★ dla wycieczek szkolnych i kościelnych",
  },
  {
    groupSize: "50+ osób",
    vehicle: "Setra TopClass 50 / Neoplan Cityliner 53",
    reason: "klasa ★★★★★ dla wesel i delegacji firmowych",
  },
  {
    groupSize: "80+ osób",
    vehicle: "2× autokar w konwoju",
    reason: "zsynchronizowane pojazdy, jeden kierowca prowadzący",
  },
];

const pickupPoints = [
  "ul. Poprzeczna 1 (nasza baza)",
  "Galeria Echo",
  "PKP Krakow",
  "Plaza Krakow",
  "Galeria Korona",
  "Hotel Kongresowy / Targi Krakow",
];

const includedItems = [
  "Paliwo ON Premium",
  "Kierowca z licencją D + badania psychotechniczne + świadectwo kwalifikacji",
  "Brak opłat autostradowych — S7 i S8 na tej trasie są bezpłatne",
  "Ubezpieczenie OC/AC/NNW pasażerów 100 000 EUR / pasażer",
  "Parking u celu do 3 godzin",
  "2 postoje kawowe (MOP Borucza + MOP Płońsk) po 15 min",
  "Faktura VAT 8% (B2B i B2C)",
];

const excludedItems = [
  "Parking powyżej 3h u celu (centrum Warszawy: 18-25 zł/h dla autokaru)",
  "Drugi kierowca przy łącznym czasie pracy >9h: +500 zł",
  "Wjazd do SCT Warszawa pojazdem poniżej Euro 6: +120 zł",
  "Nocleg kierowcy (powrót następnego dnia): 200-280 zł/noc",
];

const whyUsFeatures = [
  {
    icon: "🛣️",
    title: "24 lata na trasie Krakow-Warszawa",
    description: "Obsługujemy tę relację od 2003 roku. W 2025 wykonaliśmy ją 412 razy — średnio 8 kursów tygodniowo. Kierowcy znają każdy zjazd S7 na pamięć.",
  },
  {
    icon: "🚌",
    title: "Flota 180 pojazdów",
    description: "W razie awarii podstawiamy pojazd zastępczy w około 45 minut. Średnia wieku autokaru w naszej flocie: 4,2 roku (rynek polski: 11 lat).",
  },
  {
    icon: "✅",
    title: "Euro 6 i SCT Warszawa",
    description: "31 z 38 dużych autokarów spełnia normę Euro 6 i wjeżdża do SCT Warszawa bez dopłat. Informujemy z góry, jakim pojazdem jedziemy.",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje wynajem autokaru z Krakowa do Warszawy w 2026 roku?",
    answer:
      "Dla autokaru 50-osobowego: 1 800 zł one-way, 2 550 zł tam-i-z-powrotem tego samego dnia, 3 200 zł na wycieczkę 12h. Dla busa 20-osobowego: 1 050 / 1 500 / 1 900 zł. Ceny obejmują paliwo, kierowcę, ubezpieczenie, parking u celu do 3h. S7 na tej trasie jest bezpłatna.",
  },
  {
    question: "Ile trwa przejazd Krakow-Warszawa autokarem?",
    answer:
      "Ekspresową S7: 2 godziny 30 minut (180 km) w typowych warunkach. W godzinach szczytu 14:00-18:00 wąskie gardło Janki/Raszyn dodaje 30-60 min. Rano przed 7:00 lub nocą po 21:00 — 2h 15min.",
  },
  {
    question: "Jaki autokar dla 50 osób na trasę Krakow-Warszawa?",
    answer:
      "Standardowo Setra ComfortClass S 415 GT-HD (klasa ★★★★, 49 fotelek, klimatyzacja strefowa, WC, USB). Dla wesel premium i delegacji firmowych — Setra TopClass S 517 HDH (★★★★★, fotele 2+1 ze skóry). Dla wycieczek szkolnych — Iveco Crossway 49 (★★★).",
  },
  {
    question: "Czy można zarezerwować autokar Kielce-Warszawa na powrót tego samego dnia?",
    answer:
      "Tak. Standardowo: wyjazd 6:00, pobyt 9:00-19:00, powrót 21:30. Cena 2 550 zł za autokar 50-os. Przy powrocie po koncertach z PGE Narodowego po 23:00 wymagany drugi kierowca — dopłata 500 zł, łącznie 3 050 zł.",
  },
  {
    question: "Ile wcześniej rezerwować autokar do Warszawy?",
    answer:
      "W sezonie minimum 6-8 tygodni, zwłaszcza weekendy. Dla koncertów na PGE Narodowym (Taylor Swift, Coldplay, Ed Sheeran) minimum 12 tygodni przed eventem — parking P2 wypełnia się błyskawicznie. Poza sezonem 2-3 tygodnie wystarczą.",
  },
  {
    question: "Czy wjeżdżacie do Strefy Czystego Transportu w Warszawie?",
    answer:
      "Tak. 31 z 38 naszych dużych autokarów spełnia normę Euro 6, wjeżdżamy do SCT Warszawa bez opłat. Starszym autokarem — dopłata 120 zł za jednorazową opłatę SCT. Informujemy z góry, jakim pojazdem jedziemy.",
  },
  {
    question: "Wycieczka szkolna do Centrum Nauki Kopernik — co potrzeba?",
    answer:
      "Standardowo 1 autokar 50-os (Iveco Crossway lub Setra ★★★★) + 1 opiekun na 15 uczniów. Cena 2 700-3 200 zł za pełny dzień. CNK ma własny parking dla autokarów (ul. Wybrzeże Kościuszkowskie) — darmowy dla grup szkolnych po wcześniejszej rezerwacji. Ubezpieczenie szkolne potwierdzamy na piśmie zgodnie z wymaganiami MEN.",
  },
  {
    question: "Lotnisko Chopina czy Modlin — które tańsze z Krakowa?",
    answer:
      "Chopina (WAW): 175 km, 2h 25min, transfer od 850 zł. Modlin (WMI): 215 km, 2h 50min, od 950 zł. Radom (RDO): 80 km, 1h 20min, od 550 zł — najtańsza opcja jeśli linia obsługuje to lotnisko (Ryanair). Wybieraj według ceny biletu lotniczego, nie według dystansu.",
  },
];

const schemaObject = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.autokar-busko.pl/pl/trasy/krakow-warszawa-autokar#service",
      name: "Wynajem autokaru Krakow → Warszawa",
      description:
        "Wynajem autokaru lub busa na trasie Krakow-Warszawa. 180 km, czas przejazdu 2h 30min ekspresową S7. Pojazdy 16-50 osób. Stałe ceny od 1 050 zł.",
      provider: {
        "@type": "LocalBusiness",
        name: "Autokar Busko",
        telephone: "+48413453225",
        email: "biuro@autokar-busko.pl",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Poprzeczna 1",
          addressLocality: "Krakow",
          postalCode: "25-516",
          addressCountry: "PL",
        },
      },
      areaServed: [
        { "@type": "City", name: "Krakow" },
        { "@type": "City", name: "Warszawa" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cennik trasy Krakow-Warszawa 2026",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Bus 20-osobowy Krakow-Warszawa one-way",
            price: "1050",
            priceCurrency: "PLN",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Autokar 35-osobowy Krakow-Warszawa one-way",
            price: "1450",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Warszawa one-way",
            price: "1800",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Warszawa tam i z powrotem",
            price: "2550",
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
        name: "Warszawa",
        address: "Polska, województwo mazowieckie",
      },
      distance: "180 km",
      expectedArrivalTime: "PT2H30M",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Ile kosztuje wynajem autokaru z Krakowa do Warszawy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dla autokaru 50-osobowego: 1 800 zł one-way, 2 550 zł tam-i-z-powrotem tego samego dnia, 3 200 zł na wycieczkę 12h. Dla busa 20-osobowego: 1 050 / 1 500 / 1 900 zł. S7 na tej trasie jest bezpłatna.",
          },
        },
        {
          "@type": "Question",
          name: "Ile trwa przejazd Krakow-Warszawa autokarem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Ekspresową S7: 2 godziny 30 minut (180 km). W szczycie 14:00-18:00 Janki/Raszyn dodają 30-60 min. Nocą po 21:00 — 2h 15min.",
          },
        },
        {
          "@type": "Question",
          name: "Jaki autokar dla 50 osób na trasę Krakow-Warszawa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Setra ComfortClass S 415 GT-HD (★★★★, 49 miejsc, WC, USB). Dla wesel premium — Setra TopClass S 517 HDH (★★★★★, fotele 2+1 ze skóry). Dla wycieczek szkolnych — Iveco Crossway 49 (★★★).",
          },
        },
        {
          "@type": "Question",
          name: "Czy można zarezerwować autokar Kielce-Warszawa na powrót tego samego dnia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. Standardowo: wyjazd 6:00, pobyt 9:00-19:00, powrót 21:30. Cena 2 550 zł za autokar 50-os. Przy powrocie po koncertach po 23:00 wymagany drugi kierowca — dopłata 500 zł.",
          },
        },
        {
          "@type": "Question",
          name: "Ile wcześniej rezerwować autokar do Warszawy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "W sezonie minimum 6-8 tygodni. Dla koncertów na PGE Narodowym minimum 12 tygodni — parking P2 wypełnia się błyskawicznie. Poza sezonem 2-3 tygodnie.",
          },
        },
        {
          "@type": "Question",
          name: "Czy wjeżdżacie do Strefy Czystego Transportu w Warszawie?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. 31 z 38 naszych dużych autokarów spełnia normę Euro 6, wjeżdżamy do SCT Warszawa bez opłat. Starszym autokarem — dopłata 120 zł.",
          },
        },
        {
          "@type": "Question",
          name: "Wycieczka szkolna do Centrum Nauki Kopernik — co potrzeba?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1 autokar 50-os + 1 opiekun na 15 uczniów. Cena 2 700-3 200 zł za pełny dzień. Parking dla autokarów przy CNK (ul. Wybrzeże Kościuszkowskie) darmowy dla grup szkolnych po rezerwacji.",
          },
        },
        {
          "@type": "Question",
          name: "Lotnisko Chopina czy Modlin z Krakowa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Chopina (WAW): 175 km, 2h 25min, od 850 zł. Modlin (WMI): 215 km, 2h 50min, od 950 zł. Radom (RDO): 80 km, 1h 20min, od 550 zł — najtańsza opcja dla tanich linii.",
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
          name: "Krakow → Warszawa",
          item: "https://www.autokar-busko.pl/pl/trasy/krakow-warszawa-autokar",
        },
      ],
    },
  ],
};

function ResponsivePricingTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-black text-[#639922]">Cena wynajmu autokaru Krakow-Warszawa (cennik 2026)</h2>
        <p className="mb-8 text-gray-300">
          Cennik orientacyjny dla rezerwacji 30-90 dni przed wyjazdem. Wszystkie ceny brutto (8% VAT), zawierają paliwo, kierowcę, ubezpieczenie, parking u celu do 3h. S7 na tej trasie jest bezpłatna.
        </p>

        {/* Mobile cards */}
        <div className="space-y-4 md:hidden">
          {routePricingRows.map((row) => (
            <div key={row.vehicle} className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              <h3 className="text-lg font-bold text-[#639922]">{row.vehicle}</h3>
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

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full overflow-hidden rounded-xl border border-[#2a2a2a] text-sm">
            <thead className="bg-[#111111] text-left text-[#639922]">
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

        <div className="mt-6 space-y-2 text-sm text-gray-400">
          <p>⚠️ <strong className="text-gray-200">Co podnosi cenę:</strong> weekendy z dużym koncertem na PGE Narodowym +20-25%, powrót po 22:00 (drugi kierowca) +500 zł, SCT pojazdem poniżej Euro 6 +120 zł, sezon szkolny (V-VI, IX-X) +10-15%.</p>
          <p>✅ <strong className="text-gray-200">Co nie podnosi:</strong> dojazdy wewnątrz Warszawy do 80 km, postoje w MOP Borucza i Płońsk, wjazd do strefy ŚPPN (mamy abonament miesięczny).</p>
        </div>
      </div>
    </section>
  );
}

function ResponsiveTravelTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-black text-[#639922]">Czas przejazdu i trasa</h2>
        <p className="mb-6 text-gray-300">
          Trasa standardowa to <strong>S7 Krakow-Warszawa</strong> — droga ekspresowa, bez opłat, ukończona w 2023 r. Jedziemy całą trasą bez świateł, średnia prędkość autokaru 85 km/h.
        </p>

        {/* Mobile cards */}
        <div className="space-y-4 md:hidden">
          {travelTimeRows.map((row) => (
            <div key={row.timeOfDay} className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              <p className="text-sm text-gray-300">{row.timeOfDay}</p>
              <p className="mt-1 text-lg font-black text-[#639922]">{row.duration}</p>
              <p className="mt-2 text-sm text-gray-300">{row.note}</p>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full overflow-hidden rounded-xl border border-[#2a2a2a] text-sm">
            <thead className="bg-[#111111] text-left text-[#639922]">
              <tr>
                <th className="px-4 py-3">Pora dnia</th>
                <th className="px-4 py-3">Czas Krakow → Warszawa</th>
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

        <div className="mt-6 rounded-xl border border-[#2a2a2a] bg-[#111111] p-5">
          <h3 className="mb-3 text-lg font-bold text-[#639922]">Wąskie gardła trasy</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>🚧 <strong>Janki / Raszyn</strong> — wjazd do Warszawy od południa. W piątki po 14:00 i niedziele po 16:00 korek na 12-18 km.</li>
            <li>☕ <strong>MOP Borucza</strong> (110 km od Krakowa) — standardowy postój kawowy, parking dla 40 autokarów.</li>
            <li>🅿️ <strong>MOP Płońsk</strong> (50 km od Warszawy) — ostatni postój, popularny przed lotniskiem Modlin.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function GroupVehicleTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-black text-[#639922]">Jaki autokar dla jakiej grupy — trasa Warszawa</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full overflow-hidden rounded-xl border border-[#2a2a2a] text-sm">
            <thead className="bg-[#111111] text-left text-[#639922]">
              <tr>
                <th className="px-4 py-3">Wielkość grupy</th>
                <th className="px-4 py-3">Rekomendowany pojazd</th>
                <th className="px-4 py-3">Dlaczego akurat ten</th>
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
        <div className="mt-5 space-y-2 text-sm text-gray-400">
          <p>🎵 <strong className="text-gray-200">Dla koncertu w PGE Narodowym</strong> rekomendujemy autokar VIP (★★★★★) — pasażerowie wracają po 23:00, fotele 2+1 ze skóry i klimatyzacja strefowa są warte dopłaty 400 zł.</p>
          <p>🏫 <strong className="text-gray-200">Dla wycieczki szkolnej</strong> wystarczy klasa ★★★ — WC w autokarze jest mile widziane (dzieci pytają co 30 min na trasie 2,5h).</p>
        </div>
      </div>
    </section>
  );
}

function CTABlock() {
  return (
    <section className="bg-[#1D9E75] px-4 py-12 text-center">
      <h3 className="mb-2 text-2xl font-black text-[#1a1a1a]">Sprawdź dostępność na Twoją datę</h3>
      <p className="mb-6 text-[#1a1a1a]">Odpowiadamy w 15-30 min w godzinach biurowych. Wycena pisemna, bez zobowiązań.</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <CTAButton href="tel:+48413453225">📞 Zadzwoń: 41 345 32 25</CTAButton>
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
  const currentUrl = `https://www.autokar-busko.pl/${l}/trasy/krakow-warszawa-autokar`;

  return {
    title: metaTitles[l],
    description: metaDescriptions[l],
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      title: l === "pl" ? "Autokar Kielce → Warszawa od 1 050 zł | Autokar Busko" : metaTitles[l],
      description:
        l === "pl"
          ? "180 km S7 w 2h 30min. Busy 20-os i autokary 50-os. Stałe ceny, bez opłat autostradowych."
          : metaDescriptions[l],
      url: currentUrl,
      type: "website",
      locale: l === "pl" ? "pl_PL" : "en_US",
    },
  };
}

export default async function KrakowWarszawaRoutePage({
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
          ctaHref="tel:+48413453225"
          backgroundImage="/images/transfer/transfer-autokar-krakow-6.jpg"
        />
        <section className="bg-[#1a1a1a] px-4 py-12 text-white">
          <div className="mx-auto max-w-3xl rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6 text-center">
            <p className="text-lg leading-relaxed text-gray-300">
              This route page is available in full only in Polish. For English-language booking, please call +48 41 345 32 25,
              WhatsApp +48 693 440 585, or email biuro@autokar-busko.pl.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <CTAButton href="tel:+48413453225">Call now</CTAButton>
              <CTAButton href="https://wa.me/48693440585" variant="secondary">WhatsApp</CTAButton>
              <CTAButton href="mailto:biuro@autokar-busko.pl" variant="secondary">Email</CTAButton>
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
        ctaHref="tel:+48413453225"
        backgroundImage="/images/transfer/transfer-autokar-krakow-6.jpg"
      />

      <ResponsivePricingTable />
      <CTABlock />

      <ResponsiveTravelTable />

      {/* Pickup points */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-black text-[#639922]">Miejsca odbioru w Krakowie</h2>
          <p className="mb-4 text-gray-300">6 punktów standardowych bez dopłat:</p>
          <ol className="grid gap-3 md:grid-cols-2">
            {pickupPoints.map((point, index) => (
              <li key={point} className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4 text-gray-200">
                <span className="mr-2 font-black text-[#639922]">{index + 1}.</span>
                {point}
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-gray-400">
            Dla wesel, pielgrzymek i wycieczek szkolnych podstawiamy pod adres (kościół, szkoła, dom weselny) bez dopłaty w obrębie 25 km od centrum Krakowa.
          </p>
        </div>
      </section>

      {/* Destinations in Warsaw */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl space-y-8">
          <h2 className="text-3xl font-black text-[#639922]">Miejsca docelowe w Warszawie</h2>

          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Centrum</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>Pałac Kultury i Nauki — postój autokarów od ul. Świętokrzyskiej (zatoka)</li>
              <li>Złote Tarasy — parking podziemny (wjazd 4,1 m), opłata 12 zł/h</li>
              <li>Stare Miasto / Plac Zamkowy — wjazd od ul. Miodowej, podwóz do Krakowskiego Przedmieścia</li>
              <li>Centrum Nauki Kopernik — własny parking dla autokarów (ul. Wybrzeże Kościuszkowskie), darmowy dla grup szkolnych</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Stadiony i koncerty</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>PGE Narodowy — parking P2 (ul. Sokola), pojemność 60 autokarów; przy dużym evencie rezerwujemy 4 tygodnie wcześniej</li>
              <li>Stadion Legii (ul. Łazienkowska) — postój przy bramie 1</li>
              <li>COS Torwar — ul. Łazienkowska, parking dla 12 autokarów</li>
              <li>EXPO XXI Warszawa (ul. Prądzyńskiego) — parking własny dla wystawców i grup</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Wycieczki szkolne — najczęstsze adresy</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>Muzeum Powstania Warszawskiego (ul. Grzybowska 79) — postój: ul. Towarowa</li>
              <li>Centrum Nauki Kopernik</li>
              <li>Muzeum Historii Żydów Polskich POLIN</li>
              <li>ZOO Warszawskie (Praga)</li>
              <li>Łazienki Królewskie (ul. Agrykola 1) — postój ul. Parkowa</li>
              <li>Pałac w Wilanowie — parking dla autokarów, opłata 25 zł/dzień</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Lotniska</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li><strong>Lotnisko Chopina (WAW)</strong> — 175 km z Krakowa, czas 2h 25min. Parking autokarów: P3 strefa odjazdów.</li>
              <li><strong>Lotnisko Modlin (WMI)</strong> — 215 km z Krakowa, czas 2h 50min. Parking przy terminalu, bez opłat do 30 min.</li>
              <li><strong>Lotnisko Radom (RDO)</strong> — 80 km z Krakowa (po drodze!), czas 1h 20min. Najtańsza opcja dla tanich linii.</li>
            </ul>
            <p className="mt-3 text-sm text-gray-400">
              Transfer Krakow → lotnisko to osobna usługa z osobnym cennikiem —{" "}
              <a href="/pl/lotnisko" className="text-[#639922] underline hover:no-underline">
                zobacz /pl/lotnisko
              </a>.
            </p>
          </div>
        </div>
      </section>

      <GroupVehicleTable />

      {/* Included / excluded */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6">
            <h2 className="mb-4 text-2xl font-black text-[#639922]">Co jest w cenie</h2>
            <ul className="space-y-2 text-gray-300">
              {includedItems.map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6">
            <h2 className="mb-4 text-2xl font-black text-[#639922]">Czego nie obejmuje cena</h2>
            <ul className="space-y-2 text-gray-300">
              {excludedItems.map((item) => (
                <li key={item}>❌ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Same-day return section */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-3xl font-black text-[#639922]">Powrót tego samego dnia — czy to się opłaca?</h2>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6">
              <h3 className="mb-4 text-lg font-bold text-white">Schemat standardowy</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><span className="font-bold text-[#639922]">06:30</span> — odjazd z Krakowa</li>
                <li><span className="font-bold text-[#639922]">09:00</span> — przyjazd Warszawa</li>
                <li><span className="font-bold text-[#639922]">09:00 – 19:00</span> — 10h pobytu, kierowca czeka</li>
                <li><span className="font-bold text-[#639922]">19:00</span> — odjazd z Warszawy</li>
                <li><span className="font-bold text-[#639922]">21:30</span> — powrót do Krakowa</li>
              </ul>
              <p className="mt-4 text-sm text-[#639922] font-bold">Cena: 2 550 zł (autokar 50-os)</p>
              <p className="mt-1 text-xs text-gray-400">Jeden kierowca, wszystko w limicie 15h czasu pracy.</p>
            </div>

            <div className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6">
              <h3 className="mb-4 text-lg font-bold text-white">Schemat powrót po koncercie</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><span className="font-bold text-[#639922]">16:00</span> — odjazd z Krakowa</li>
                <li><span className="font-bold text-[#639922]">18:30</span> — przyjazd PGE Narodowy</li>
                <li><span className="font-bold text-[#639922]">22:00–23:30</span> — koniec eventu, zbiórka grupy</li>
                <li><span className="font-bold text-[#639922]">23:30</span> — odjazd z Warszawy</li>
                <li><span className="font-bold text-[#639922]">02:00</span> — powrót do Krakowa</li>
              </ul>
              <p className="mt-4 text-sm text-[#639922] font-bold">Cena: 3 050 zł (+ 500 zł drugi kierowca)</p>
              <p className="mt-1 text-xs text-gray-400">Wymagany drugi kierowca (rozp. WE 561/2006) — 0% ryzyka mandatu ITD.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCT Warsaw section */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="mb-4 text-3xl font-black text-[#639922]">Strefa Czystego Transportu Warszawa — co zmieniło się od 2024 r.</h2>
          <p className="mb-4 text-gray-300">
            Od <strong>1 lipca 2024</strong> w centrum Warszawy (obwodnica śródmiejska) obowiązuje SCT. Wymóg dla pojazdów ciężkich: norma <strong>Euro 6</strong>.
          </p>
          <ul className="space-y-3 text-gray-300">
            <li>✅ <strong>31 z 38 dużych autokarów</strong> spełnia Euro 6 (roczniki 2018+) — wjeżdżamy bez dopłat.</li>
            <li>⚠️ 7 pozostałych autokarów (klasa ★★★ dla wycieczek z niższym budżetem) — wjazd do SCT: dopłata <strong>120 zł</strong>.</li>
          </ul>
          <div className="mt-5 space-y-2 text-sm text-gray-400">
            <p>💼 Dla wesela / firmy / delegacji premium — wjeżdżamy bez problemu, bez dopłat.</p>
            <p>🏫 Dla wycieczki szkolnej z niższym budżetem — albo dopłacasz 120 zł, albo pasażerów wysadzamy przed strefą (ul. Towarowa, 1-2 km do centrum metrem).</p>
            <p>ℹ️ W każdej ofercie podajemy z góry rocznik i normę pojazdu. Bez niespodzianek na bramie.</p>
          </div>
        </div>
      </section>

      {/* How to book */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="mb-6 text-3xl font-black text-[#639922]">Jak rezerwować</h2>
          <ol className="space-y-3 text-gray-300">
            <li>1. Zadzwoń (41 345 32 25) lub wyślij formularz z trasą, datą i liczbą osób.</li>
            <li>2. Otrzymujesz wycenę w 15-30 minut (pn-pt 7:00-18:00, sob 8:00-14:00) — e-mail lub WhatsApp.</li>
            <li>3. Zaliczka 20-30% potwierdza rezerwację.</li>
            <li>4. Pełna płatność dzień przed wyjazdem lub po przejeździe (B2B odroczenie 7 dni).</li>
          </ol>
          <p className="mt-4 text-sm text-gray-400">
            Dla <strong className="text-gray-200">szkół i parafii</strong>: faktura proforma na konto rady rodziców / parafii bez zaliczki — wystarcza pismo z pieczęcią. Współpracujemy z 60+ szkołami z województwa świętokrzyskiego od 2010 r.
          </p>
        </div>
      </section>

      <FeatureBox features={whyUsFeatures} heading="Dlaczego Autokar Busko" />

      <FAQAccordion items={faqItems} heading="Najczęściej zadawane pytania" />
      <CTABlock />

      {/* Popular route variations */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-black text-[#639922]">Popularne wariacje trasy</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              ✈️ <strong>Krakow → Warszawa → Lotnisko Chopina</strong> — 195 km, cena od 2 200 zł (autokar 50-os)
            </li>
            <li className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              🏛️ <strong>Krakow → Warszawa Stare Miasto + Łazienki + Wilanów</strong> — wycieczka szkolna 1-dniowa, 3 stopy, cena od 3 400 zł
            </li>
            <li className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              🎵 <strong>Krakow → PGE Narodowy → Krakow</strong> — koncert + powrót w nocy, z drugim kierowcą 3 050 zł
            </li>
            <li className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              💼 <strong>Krakow → Warszawa → Łódź</strong> — konferencja B2B 2-dniowa, 340 km łącznie, nocleg kierowcy, ok. 4 800 zł
            </li>
          </ul>
        </div>
      </section>

      {/* Related routes */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-black text-[#639922]">Inne popularne trasy z Krakowa</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/pl/trasy/krakow-krakow-autokar"
              className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 transition-colors hover:border-[#639922]"
            >
              <p className="text-lg font-black text-[#639922]">Krakow → Kraków</p>
              <p className="mt-1 text-sm text-gray-400">115 km · 1h 40min · A4</p>
              <p className="mt-2 text-sm text-gray-300">od 1 050 zł</p>
            </a>
            <a
              href="/pl/trasy/krakow-zakopane-autokar"
              className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 transition-colors hover:border-[#639922]"
            >
              <p className="text-lg font-black text-[#639922]">Krakow → Zakopane</p>
              <p className="mt-1 text-sm text-gray-400">210 km · 3h · przez Kraków</p>
              <p className="mt-2 text-sm text-gray-300">od 1 600 zł</p>
            </a>
            <a
              href="/pl/trasy/krakow-czestochowa-autokar"
              className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 transition-colors hover:border-[#639922]"
            >
              <p className="text-lg font-black text-[#639922]">Krakow → Częstochowa</p>
              <p className="mt-1 text-sm text-gray-400">120 km · 1h 50min</p>
              <p className="mt-2 text-sm text-gray-300">od 900 zł</p>
            </a>
            <a
              href="/pl/trasy/krakow-wroclaw-autokar"
              className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 transition-colors hover:border-[#639922]"
            >
              <p className="text-lg font-black text-[#639922]">Krakow → Wrocław</p>
              <p className="mt-1 text-sm text-gray-400">330 km · 3h 45min</p>
              <p className="mt-2 text-sm text-gray-300">od 2 200 zł</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-center text-white">
        <h2 className="mb-3 text-3xl font-black text-[#639922]">Gotowi na trasę Krakow → Warszawa?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-300">
          Wybierz dogodny kanał kontaktu i otrzymaj pisemną wycenę bez zobowiązań.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="tel:+48413453225">📞 41 345 32 25</CTAButton>
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
