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
  pl: "Wynajem autokaru Krakow → Wrocław — cena od 1 700 zł, 330 km, 3h 45min",
  en: "Coach hire Krakow → Wrocław — 330 km, from PLN 1700",
  de: "Coach hire Krakow → Wrocław — 330 km, from PLN 1700",
  ru: "Coach hire Krakow → Wrocław — 330 km, from PLN 1700",
  ar: "Coach hire Krakow → Wrocław — 330 km, from PLN 1700",
  es: "Coach hire Krakow → Wrocław — 330 km, from PLN 1700",
  fr: "Coach hire Krakow → Wrocław — 330 km, from PLN 1700",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Autokar Kielce-Wrocław: cennik dla 20/35/50 osób, dojazd do Stadionu Wrocław, Hali Stulecia, Rynku, lotniska Strachowice. Trasa A4. Tel. 41 345 32 25.",
  en: "Coach from Krakow to Wrocław with pricing tables for 20/35/50 passengers. Motorway A4. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  de: "Coach from Krakow to Wrocław with pricing tables for 20/35/50 passengers. Motorway A4. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  ru: "Coach from Krakow to Wrocław with pricing tables for 20/35/50 passengers. Motorway A4. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  ar: "Coach from Krakow to Wrocław with pricing tables for 20/35/50 passengers. Motorway A4. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  es: "Coach from Krakow to Wrocław with pricing tables for 20/35/50 passengers. Motorway A4. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  fr: "Coach from Krakow to Wrocław with pricing tables for 20/35/50 passengers. Motorway A4. Fast quote in 15 minutes. Call +48 41 345 32 25.",
};

const heroTitles: Record<Language, string> = {
  pl: "Wynajem autokaru Krakow → Wrocław — 330 km, od 1 700 zł, dojazd A4 w 3h 45min",
  en: "Coach hire Krakow → Wrocław from PLN 1700",
  de: "Coach hire Krakow → Wrocław from PLN 1700",
  ru: "Coach hire Krakow → Wrocław from PLN 1700",
  ar: "Coach hire Krakow → Wrocław from PLN 1700",
  es: "Coach hire Krakow → Wrocław from PLN 1700",
  fr: "Coach hire Krakow → Wrocław from PLN 1700",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Wrocław to nasza najdłuższa popularna trasa zachodnia — 330 km autostradą A4 w 3 godziny 45 minut. W 2025 roku zrobiliśmy ją 78 razy — dla koncertów, meczów reprezentacji na Stadionie Wrocław, konferencji w Hali Stulecia i wyjazdów korporacyjnych. Wszystkie opłaty A4 (~156 zł) wliczone w cenę, bez ukrytych kosztów.",
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
    oneWay: "1 700 zł",
    roundTrip1day: "2 800 zł",
    excursion2day: "3 600 zł",
  },
  {
    vehicle: "Autokar Iveco Crossway 35",
    passengers: "30-35",
    oneWay: "2 100 zł",
    roundTrip1day: "3 400 zł",
    excursion2day: "4 500 zł",
  },
  {
    vehicle: "Autokar Setra ComfortClass 50",
    passengers: "45-50",
    oneWay: "2 600 zł",
    roundTrip1day: "4 100 zł",
    excursion2day: "5 500 zł",
  },
  {
    vehicle: "Autokar VIP 50 (skóra, fotele 2+1)",
    passengers: "40-45",
    oneWay: "3 100 zł",
    roundTrip1day: "4 900 zł",
    excursion2day: "6 400 zł",
  },
];

const travelTimeRows = [
  { timeOfDay: "4:00 – 6:00", duration: "3h 30min", note: "najszybciej, pusta A4" },
  { timeOfDay: "7:00 – 9:00", duration: "3h 50min – 4h 15min", note: "wjazd do Wrocławia (Brzeg-Wrocław) zatłoczony" },
  { timeOfDay: "10:00 – 14:00", duration: "3h 45min", note: "typowy czas" },
  { timeOfDay: "14:00 – 18:00", duration: "4h – 4h 30min", note: "szczyt popołudniowy + objazdy remontów" },
  { timeOfDay: "19:00 – 22:00", duration: "3h 40min", note: "umiarkowanie" },
  { timeOfDay: "22:00 – 4:00", duration: "3h 25min", note: "nocą najszybciej, ale dwóch kierowców obowiązkowych" },
];

const groupVehicleRows = [
  {
    groupSize: "2-8 osób",
    vehicle: "Mercedes Vito / VW Caravelle",
    reason: "dla grup małych szybciej autem — oszczędność 1 500-2 000 zł vs autokar",
  },
  {
    groupSize: "9-16 osób",
    vehicle: "Mercedes Sprinter 19+2",
    reason: "jedyna ekonomiczna opcja, klimatyzacja na 4h jazdy obowiązkowa",
  },
  {
    groupSize: "17-30 osób",
    vehicle: "MAN Lion's Coach M 30 / Iveco Daily 24-os",
    reason: "autokar turystyczny ★★★, fotele turystyczne, WC w autokarach klasy ★★★",
  },
  {
    groupSize: "31-49 osób",
    vehicle: "Setra S 415 GT-HD / Iveco Crossway 49 (klasa ★★★★)",
    reason: "klimatyzacja strefowa, WC, USB, fotele rozkładane — 4h jazdy wymaga komfortu",
  },
  {
    groupSize: "50+ osób",
    vehicle: "Setra TopClass 50 / Neoplan Cityliner 53 (klasa ★★★★★)",
    reason: "fotele 2+1, monitory — długa trasa znacznie przyjemniejsza",
  },
];

const pickupPoints = [
  "ul. Poprzeczna 1 (nasza baza)",
  "Galeria Echo — dla grup 40+",
  "PKP Krakow — Plac Niepodległości",
  "Plaza Krakow",
  "Galeria Korona",
  "Hotel Kongresowy / Targi Krakow — dla delegacji biznesowych",
];

const includedItems = [
  "Paliwo ON Premium",
  "Kierowca (lub dwóch kierowców na pełnym dniu) z licencją D + aktualne badania psychotechniczne + świadectwo kwalifikacji",
  "Wszystkie opłaty autostradowe A4 Krakow-Wrocław w obie strony (ok. 156 zł) — bez ukrytych dopłat",
  "Ubezpieczenie OC/AC/NNW pasażerów z sumą 100 000 EUR / pasażer",
  "Parking u celu do 3h",
  "2-3 postoje kawowe (MOP Brzezie + MOP Brzeg lub Balice)",
  "Faktura VAT 8% lub paragon z NIP",
];

const excludedItems = [
  "Parking u celu powyżej 3h (Stadion Wrocław: 35 zł/dzień powyżej darmowych 3h)",
  "Nocleg kierowcy przy wycieczce 2-dniowej: 220-280 zł/noc",
  "Wjazd do strefy centrum starszym niż Euro 6 pojazdem (jeśli SCT zostanie wprowadzona — na 13.05.2026 jeszcze nie, ale ustawa procedowana: rezerwa +120 zł)",
];

const whyUsFeatures = [
  {
    icon: "🛣️",
    title: "78 kursów Krakow-Wrocław w 2025",
    description: "24 lata obsługi tras długodystansowych. Kierowcy znają każdy MOP i objazdowy wariant A4. Zastępczy autokar pod Wrocławiem w 60 minut (partner w Krakowie).",
  },
  {
    icon: "💶",
    title: "Opłaty A4 wliczone — zawsze",
    description: "~156 zł za przejazd A4 w obie strony dla autokaru — zawsze w cenie. Nie ukrywamy tego w gwiazdkach 'cena od'. Pokazujemy końcową kwotę z góry.",
  },
  {
    icon: "🌿",
    title: "31 z 38 dużych autokarów Euro 6",
    description: "Gotowi na potencjalną SCT Wrocław w 2026 r. (ustawa w toku). Żaden nasz duży autokar nie zostanie zablokowany przez ograniczenia emisji.",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje wynajem autokaru z Krakowa do Wrocławia?",
    answer:
      "Dla autokaru 50-osobowego: 2 600 zł one-way, 4 100 zł tam-i-z-powrotem tego samego dnia (z dwoma kierowcami w cenie), 5 500 zł wycieczka 2-dniowa z noclegiem. Dla busa 20-osobowego: 1 700 / 2 800 / 3 600 zł. Ceny obejmują paliwo, kierowców, wszystkie opłaty A4 (~156 zł), ubezpieczenie i parking u celu do 3h.",
  },
  {
    question: "Ile trwa przejazd Krakow-Wrocław autokarem?",
    answer:
      "Autostradą A4: 3 godziny 45 minut (330 km) w typowych warunkach. Najszybciej rano przed 7:00 lub nocą po 22:00: 3h 30min. W godzinach szczytu z korkiem wjazdowym do Wrocławia: do 4h 30min.",
  },
  {
    question: "Dlaczego tam i z powrotem kosztuje więcej niż 2× one-way?",
    answer:
      "Na pełnym dniu Krakow-Wrocław-Krakow wymagamy 2 kierowców prawnie. Łączny czas pracy 16-18h przekracza limit jednego kierowcy (rozp. WE 561/2006: max 9h jazdy + 6h innej pracy + wymagana 11h przerwa dobowa). Drugi kierowca to dodatkowy koszt ~700 zł. Wszystko wliczamy w cenę bez ukrytych dopłat.",
  },
  {
    question: "Jaki autokar dla 50 osób na trasę 330 km?",
    answer:
      "Dla 3h 45min jazdy rekomendujemy klasę ★★★★ minimum — fotele rozkładane, klimatyzacja strefowa, WC, USB. Setra ComfortClass S 415 GT-HD jest standardem. Dla wesel premium i delegacji biznesowych — Setra TopClass S 517 HDH (★★★★★, fotele 2+1 ze skóry, monitory). Dla wycieczek szkolnych — Iveco Crossway 49 (★★★★) z WC obowiązkowo.",
  },
  {
    question: "Czy można powrócić tego samego dnia po koncercie na Stadionie Wrocław?",
    answer:
      "Tak. Schemat: wyjazd Krakow 13:00, koncert 20:00-23:30, powrót 23:45 (+1h korek wyjazdowy = 00:45), Krakow 04:30. Cena 4 600 zł autokar 50-os z 2 kierowcami (jeden śpi w autokarze podczas koncertu). Robimy regularnie po koncertach Coldplay, Ed Sheeran, Taylor Swift.",
  },
  {
    question: "Ile wcześniej rezerwować autokar do Wrocławia?",
    answer:
      "W zwykłe tygodnie 4 tygodnie wystarczą. Dla koncertów na Stadionie Wrocław (Coldplay, Taylor Swift, mecze UEFA) minimum 10 tygodni — parking P1 dla autokarów grupowych wypełnia się szybko. Dla wycieczek szkolnych — 6-8 tygodni przed.",
  },
  {
    question: "Czy w cenie są opłaty za autostradę A4?",
    answer:
      "Tak. Opłata A4 Krakow-Wrocław w obie strony to ok. 156 zł dla autokaru — wliczamy zawsze, bez ukrytych dopłat. Konkurencja czasem ukrywa to w gwiazdkach 'ceny od' — my pokazujemy końcową kwotę z góry.",
  },
  {
    question: "Wycieczka szkolna 1-dniowa do Wrocławia — co potrzeba?",
    answer:
      "1 autokar 50-os klasy ★★★★ z WC + 2 opiekunów na 50 dzieci. Cena 4 100 zł za pełny dzień z 2 kierowcami. Wyjazd 5:30, program w Wrocławiu 9:30-17:00 (np. ZOO+Afrykarium+Hala Stulecia), powrót 20:45. Ubezpieczenie szkolne potwierdzamy na piśmie zgodnie z wymaganiami MEN.",
  },
];

const schemaObject = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.autokar-busko.pl/pl/trasy/krakow-wroclaw-autokar#service",
      name: "Wynajem autokaru Krakow → Wrocław",
      description:
        "Wynajem autokaru lub busa na trasie Krakow-Wrocław. 330 km autostradą A4, czas przejazdu 3h 45min. Pojazdy 16-50 osób. Dwóch kierowców obowiązkowych na pełnym dniu (rozp. WE 561/2006). Wszystkie opłaty A4 wliczone w cenę.",
      provider: {
        "@type": "LocalBusiness",
        name: "Autokar Busko",
        telephone: "+48413453225",
        email: "biuro@autokar-busko.pl",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Poprzeczna 1",
          addressLocality: "Busko-Zdrój",
          postalCode: "25-516",
          addressCountry: "PL",
        },
      },
      areaServed: [
        { "@type": "City", name: "Krakow" },
        { "@type": "City", name: "Wrocław" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cennik trasy Krakow-Wrocław 2026",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Bus 20-osobowy Krakow-Wrocław one-way",
            price: "1700",
            priceCurrency: "PLN",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Autokar 35-osobowy Krakow-Wrocław one-way",
            price: "2100",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Wrocław one-way",
            price: "2600",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Wrocław tam i z powrotem z 2 kierowcami",
            price: "4100",
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
        name: "Wrocław",
        address: "Polska, województwo dolnośląskie",
      },
      distance: "330 km",
      expectedArrivalTime: "PT3H45M",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Ile kosztuje wynajem autokaru z Krakowa do Wrocławia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dla autokaru 50-osobowego: 2 600 zł one-way, 4 100 zł tam-i-z-powrotem tego samego dnia (z dwoma kierowcami w cenie), 5 500 zł wycieczka 2-dniowa z noclegiem. Dla busa 20-osobowego: 1 700 / 2 800 / 3 600 zł. Ceny obejmują paliwo, kierowców, wszystkie opłaty A4 (~156 zł), ubezpieczenie i parking u celu do 3h.",
          },
        },
        {
          "@type": "Question",
          name: "Ile trwa przejazd Krakow-Wrocław autokarem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Autostradą A4: 3 godziny 45 minut (330 km) w typowych warunkach. Najszybciej rano przed 7:00 lub nocą po 22:00: 3h 30min. W godzinach szczytu: do 4h 30min.",
          },
        },
        {
          "@type": "Question",
          name: "Dlaczego tam i z powrotem kosztuje więcej niż 2× one-way?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Na pełnym dniu Krakow-Wrocław-Krakow wymagamy 2 kierowców prawnie. Łączny czas pracy 16-18h przekracza limit jednego kierowcy (rozp. WE 561/2006). Drugi kierowca to dodatkowy koszt ~700 zł. Wszystko wliczamy w cenę bez ukrytych dopłat.",
          },
        },
        {
          "@type": "Question",
          name: "Jaki autokar dla 50 osób na trasę 330 km?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dla 3h 45min jazdy rekomendujemy klasę ★★★★ minimum. Setra ComfortClass S 415 GT-HD jest standardem. Dla delegacji biznesowych — Setra TopClass S 517 HDH (★★★★★, fotele 2+1 ze skóry). Dla wycieczek szkolnych — Iveco Crossway 49 z WC obowiązkowo.",
          },
        },
        {
          "@type": "Question",
          name: "Czy można powrócić tego samego dnia po koncercie na Stadionie Wrocław?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. Schemat: wyjazd Krakow 13:00, koncert 20:00-23:30, powrót 23:45, Krakow 04:30. Cena 4 600 zł autokar 50-os z 2 kierowcami. Robimy regularnie po koncertach Coldplay, Ed Sheeran, Taylor Swift.",
          },
        },
        {
          "@type": "Question",
          name: "Ile wcześniej rezerwować autokar do Wrocławia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "W zwykłe tygodnie 4 tygodnie wystarczą. Dla koncertów na Stadionie Wrocław minimum 10 tygodni — parking P1 dla autokarów grupowych wypełnia się szybko. Dla wycieczek szkolnych — 6-8 tygodni przed.",
          },
        },
        {
          "@type": "Question",
          name: "Czy w cenie są opłaty za autostradę A4?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. Opłata A4 Krakow-Wrocław w obie strony to ok. 156 zł dla autokaru — wliczamy zawsze, bez ukrytych dopłat.",
          },
        },
        {
          "@type": "Question",
          name: "Wycieczka szkolna 1-dniowa do Wrocławia — co potrzeba?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "1 autokar 50-os klasy ★★★★ z WC + 2 opiekunów. Cena 4 100 zł za pełny dzień z 2 kierowcami. Wyjazd 5:30, program 9:30-17:00 (ZOO+Afrykarium+Hala Stulecia), powrót 20:45. Ubezpieczenie szkolne na piśmie zgodnie z wymaganiami MEN.",
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
          name: "Krakow → Wrocław",
          item: "https://www.autokar-busko.pl/pl/trasy/krakow-wroclaw-autokar",
        },
      ],
    },
  ],
};

function ResponsivePricingTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-black text-[#639922]">Cena wynajmu autokaru Krakow-Wrocław (cennik 2026)</h2>
        <p className="mb-8 text-gray-300">
          Ceny brutto (8% VAT), zawierają: paliwo, kierowcę (lub dwóch na pełnym dniu), <strong className="text-white">wszystkie opłaty A4 (~156 zł w obie strony)</strong>, ubezpieczenie OC/AC/NNW 100 000 EUR, parking u celu do 3h.
        </p>

        {/* Mobile cards */}
        <div className="space-y-4 md:hidden">
          {routePricingRows.map((row) => (
            <div key={row.vehicle} className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              <h3 className="text-lg font-bold text-[#639922]">{row.vehicle}</h3>
              <p className="mt-1 text-sm text-gray-300">Pasażerów: {row.passengers}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-3"><dt>One-way</dt><dd className="font-bold">{row.oneWay}</dd></div>
                <div className="flex justify-between gap-3"><dt>Tam i z powrotem (2 kier.)</dt><dd className="font-bold">{row.roundTrip1day}</dd></div>
                <div className="flex justify-between gap-3"><dt>Wycieczka 2-dniowa</dt><dd className="font-bold">{row.excursion2day}</dd></div>
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
                <th className="px-4 py-3">One-way (Krakow → Wrocław)</th>
                <th className="px-4 py-3">Tam i z powrotem — 1 dzień (2 kierowców w cenie)</th>
                <th className="px-4 py-3">Wycieczka 2-dniowa z noclegiem</th>
              </tr>
            </thead>
            <tbody>
              {routePricingRows.map((row) => (
                <tr key={row.vehicle} className="border-t border-[#2a2a2a] bg-[#141414]">
                  <td className="px-4 py-3 font-semibold">{row.vehicle}</td>
                  <td className="px-4 py-3">{row.passengers}</td>
                  <td className="px-4 py-3 font-bold">{row.oneWay}</td>
                  <td className="px-4 py-3 font-bold">{row.roundTrip1day}</td>
                  <td className="px-4 py-3 font-bold">{row.excursion2day}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2-driver explanation */}
        <div className="mt-6 rounded-xl border border-[#639922]/30 bg-[#EAF3DE]0/10 p-5 text-sm">
          <p className="font-semibold text-[#97C459] mb-2">Dlaczego "tam i z powrotem" kosztuje więcej niż 2× one-way?</p>
          <p className="text-gray-300">
            Na pełnym dniu Krakow-Wrocław-Krakow łączny czas pracy kierowcy to 16-18h (8h jazdy + 8-10h czekania), co przekracza limit jednego kierowcy według rozp. WE 561/2006 (max 9h jazdy + wymagana 11h przerwa dobowa). <strong className="text-white">Drugi kierowca = +700 zł</strong> — wliczamy to w cenę tam-i-z-powrotem wprost, bez ukrywania w gwiazdkach.
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 text-sm text-gray-300">
          <p className="font-semibold text-white mb-2">Co podnosi cenę:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>Weekendy z meczem reprezentacji lub UEFA na Stadionie Wrocław:</strong> +20%</li>
            <li><strong>Koncert ze "wracaniem po północy":</strong> drugi kierowca obowiązkowy (wliczony w cenę nocną)</li>
            <li><strong>SCT Wrocław (jeśli wprowadzona w 2026 r.):</strong> rezerwa +120 zł — na 13.05.2026 jeszcze nie obowiązuje</li>
          </ul>
          <p className="font-semibold text-white mb-2">Co NIE podnosi ceny:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Opłaty A4 — wliczamy zawsze (~156 zł w obie strony)</li>
            <li>Postoje w MOP Brzezie, Balice, Brzeg</li>
            <li>Parking u celu do 3h</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function TravelTimeTable() {
  return (
    <section className="bg-[#111111] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-black text-[#639922]">Czas przejazdu i trasa Krakow-Wrocław</h2>
        <p className="mb-6 text-gray-300">
          <strong className="text-white">Trasa standardowa:</strong> A4 Krakow → Kraków → Wrocław (Bielany Wrocławskie). 330 km, pełna autostrada płatna od Krakowa do Wrocławia. Obowiązkowa 45-min przerwa kierowcy: MOP Brzeg (260 km, 70 km przed Wrocławiem).
        </p>
        <p className="mb-6 text-sm text-gray-400">
          <strong className="text-gray-300">Trasa alternatywna</strong> (A1 → A4): 350 km, czas 4h. Wybieramy gdy A4 ma zamknięcie pasa za Brzegiem.
        </p>

        {/* Mobile cards */}
        <div className="space-y-3 md:hidden">
          {travelTimeRows.map((row) => (
            <div key={row.timeOfDay} className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-4">
              <p className="font-bold text-[#639922]">{row.timeOfDay}</p>
              <p className="text-lg font-black">{row.duration}</p>
              <p className="text-sm text-gray-400">{row.note}</p>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full overflow-hidden rounded-xl border border-[#2a2a2a] text-sm">
            <thead className="bg-[#1a1a1a] text-left text-[#639922]">
              <tr>
                <th className="px-4 py-3">Pora dnia</th>
                <th className="px-4 py-3">Czas Krakow → Wrocław</th>
                <th className="px-4 py-3">Komentarz</th>
              </tr>
            </thead>
            <tbody>
              {travelTimeRows.map((row) => (
                <tr key={row.timeOfDay} className="border-t border-[#2a2a2a] bg-[#141414]">
                  <td className="px-4 py-3 font-semibold">{row.timeOfDay}</td>
                  <td className="px-4 py-3 font-bold">{row.duration}</td>
                  <td className="px-4 py-3 text-gray-300">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 text-sm text-gray-300">
          <p className="font-semibold text-white mb-2">Krytyczne postoje (rozp. WE 561/2006):</p>
          <ul className="space-y-1">
            <li><strong className="text-white">MOP Brzezie</strong> (Wieliczka, 92 km) — pierwsza przerwa kawowa, 15 min</li>
            <li><strong className="text-white">MOP Balice</strong> (Kraków-zachód, 130 km) — alternatywa</li>
            <li><strong className="text-white">MOP Brzeg</strong> (260 km) — <span className="text-[#97C459] font-medium">obowiązkowa 45-min przerwa</span> kierowcy przed wjazdem do Wrocławia</li>
            <li><strong className="text-white">MOP Bielany Wrocławskie</strong> (320 km) — ostatnia toaleta przed centrum</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function DestinationsSection() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-black text-[#639922]">Miejsca docelowe we Wrocławiu</h2>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5">
            <h3 className="mb-3 text-base font-bold text-[#639922]">Centrum i kultura</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">Rynek Wrocławski</strong> — parking autokarów ul. Kazimierza Wielkiego (6 zł/h), zatoka od ul. Świdnickiej</li>
              <li><strong className="text-white">Hala Stulecia (UNESCO)</strong> — własny parking ul. Wystawowa, darmowy dla wystawców i grup</li>
              <li><strong className="text-white">Ostrów Tumski</strong> — dla pielgrzymek do katedry, postój ul. Katedralnej</li>
              <li><strong className="text-white">Panorama Racławicka</strong> — dla wycieczek szkolnych (patriotyzm kl. 7-8)</li>
              <li><strong className="text-white">Hydropolis</strong> — Muzeum Wody, bardzo popularne kl. 4-7</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5">
            <h3 className="mb-3 text-base font-bold text-[#639922]">Stadiony i koncerty</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">Stadion Wrocław</strong> (ul. Królewska) — UEFA Euro 2012, koncerty, mecze. Parking P1 dla autokarów: pierwsze 3h gratis, potem 35 zł/dzień. Przy dużym evencie rezerwujemy 6 tygodni wcześniej</li>
              <li><strong className="text-white">Hala Stulecia / Centennial Hall</strong> — koncerty kameralne i konferencje do 6 tys. osób</li>
              <li><strong className="text-white">Hala Orbita</strong> — sport halowy</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5">
            <h3 className="mb-3 text-base font-bold text-[#639922]">Wycieczki szkolne i biznes</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">ZOO Wrocław + Afrykarium</strong> — kl. 1-6, parking własny</li>
              <li><strong className="text-white">Centrum Historii Zajezdnia</strong></li>
              <li><strong className="text-white">Muzeum Narodowe</strong></li>
              <li><strong className="text-white">Lotnisko Wrocław-Strachowice (WRO)</strong> — 320 km z Krakowa, 3h 40min, parking P4</li>
              <li><strong className="text-white">EXPO Wrocław</strong> — targi przemysłowe dla grup B2B</li>
              <li><strong className="text-white">Wrocławskie Centrum Kongresowe</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupVehicleTable() {
  return (
    <section className="bg-[#111111] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-black text-[#639922]">Jaki autokar dla jakiej grupy — trasa 330 km</h2>
        <p className="mb-6 text-gray-300">
          Trasa długa — <strong className="text-white">komfort liczy się bardziej</strong> niż na krótszych dystansach. Dla wycieczek szkolnych <strong className="text-white">WC w autokarze jest obowiązkowe</strong>. Pasy bezpieczeństwa 3-punktowe w każdym fotelu (wymóg MEN).
        </p>

        {/* Mobile cards */}
        <div className="space-y-4 md:hidden">
          {groupVehicleRows.map((row) => (
            <div key={row.groupSize} className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-4">
              <p className="font-bold text-[#639922]">{row.groupSize}</p>
              <p className="mt-1 font-semibold">{row.vehicle}</p>
              <p className="mt-2 text-sm text-gray-300">{row.reason}</p>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full overflow-hidden rounded-xl border border-[#2a2a2a] text-sm">
            <thead className="bg-[#1a1a1a] text-left text-[#639922]">
              <tr>
                <th className="px-4 py-3">Wielkość grupy</th>
                <th className="px-4 py-3">Rekomendowany pojazd</th>
                <th className="px-4 py-3">Dlaczego akurat ten</th>
              </tr>
            </thead>
            <tbody>
              {groupVehicleRows.map((row) => (
                <tr key={row.groupSize} className="border-t border-[#2a2a2a] bg-[#141414]">
                  <td className="px-4 py-3 font-semibold text-[#639922]">{row.groupSize}</td>
                  <td className="px-4 py-3 font-semibold">{row.vehicle}</td>
                  <td className="px-4 py-3 text-gray-300">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-sm text-gray-400">
          Dla grup biznesowych: autokar VIP (★★★★★) — 4h w jedną stronę to dobre miejsce na przygotowanie prezentacji w komforcie skórzanych foteli z indywidualnym oświetleniem. Dopłata ~500 zł vs ★★★★.
        </p>
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
  return {
    title: metaTitles[l],
    description: metaDescriptions[l],
    alternates: {
      canonical: "https://www.autokar-busko.pl/pl/trasy/krakow-wroclaw-autokar",
    },
    openGraph: {
      title: "Autokar Kielce → Wrocław od 1 700 zł | Autokar Busko",
      description:
        "330 km autostradą A4 w 3h 45min. Busy 20-os i autokary 50-os. Transfer koncertowy, mecze UEFA, lotnisko Strachowice, wyjazdy biznesowe.",
      url: "https://www.autokar-busko.pl/pl/trasy/krakow-wroclaw-autokar",
      type: "website",
      locale: l === "pl" ? "pl_PL" : "en_US",
    },
  };
}

export default async function KrakowWroclawPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const l = toLang(lang);

  return (
    <>
      {l === "pl" && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaObject) }}
        />
      )}

      {/* HERO */}
      <HeroSection
        title={heroTitles[l]}
        subtitle={heroSubtitles[l]}
        ctaText={ctaTexts[l]}
        ctaHref="tel:+48413453225"
      />

      {/* PRICING TABLE */}
      <ResponsivePricingTable />

      {/* CTA #1 */}
      {l === "pl" && (
        <section className="bg-[#1D9E75] px-4 py-10 text-black">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="mb-2 text-2xl font-black">{ctaSectionHeadings[l]}</h3>
            <p className="mb-6 text-sm">
              Wycena pisemna w 15-30 min. Wszystkie opłaty A4 wliczone, dwóch kierowców w cenie pełnego dnia. Bez ukrytych kosztów.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <CTAButton href="tel:+48413453225" variant="primary">
                Zadzwoń: 41 345 32 25
              </CTAButton>
              <CTAButton href="https://wa.me/48693440585" variant="secondary">
                WhatsApp
              </CTAButton>
              <CTAButton href={`/${l}/kontakt`} variant="tertiary">
                Formularz wyceny
              </CTAButton>
            </div>
          </div>
        </section>
      )}

      {/* TRAVEL TIME TABLE */}
      <TravelTimeTable />

      {/* PICKUP POINTS */}
      {l === "pl" && (
        <section className="bg-[#1a1a1a] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-black text-[#639922]">Miejsca odbioru w Krakowie</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pickupPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#111111] p-4 text-sm">
                  <span className="mt-0.5 text-[#639922] font-bold">{idx + 1}.</span>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* DESTINATIONS */}
      <DestinationsSection />

      {/* GROUP VEHICLE TABLE */}
      <GroupVehicleTable />

      {/* INCLUDED ITEMS */}
      {l === "pl" && (
        <section className="bg-[#1a1a1a] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-black text-[#639922]">Co jest w cenie — bez ukrytych kosztów</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="mb-3 font-bold text-green-400">W cenie:</h3>
                <ul className="space-y-2">
                  {includedItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-green-400">✅</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 font-bold text-red-400">Nie jest w cenie:</h3>
                <ul className="space-y-2">
                  {excludedItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="text-red-400">❌</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* DAY SCHEMES */}
      {l === "pl" && (
        <section className="bg-[#111111] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-black text-[#639922]">Pełen dzień we Wrocławiu — typowe schematy</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
                <h3 className="mb-3 text-base font-bold text-[#639922]">Wycieczka szkolna 1-dniowa</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong className="text-white">05:30</strong> — odjazd z Krakowa</li>
                  <li><strong className="text-white">09:15</strong> — przyjazd Wrocław (przerwa MOP Brzeg)</li>
                  <li><strong className="text-white">09:30 – 17:00</strong> — ZOO+Afrykarium + Hala Stulecia+Fontanna</li>
                  <li><strong className="text-white">17:00</strong> — odjazd</li>
                  <li><strong className="text-white">20:45</strong> — powrót Krakow</li>
                </ul>
                <p className="mt-3 text-xs text-[#97C459]">2 kierowców obowiązkowych — łączny czas jazdy 7,5h. Cena: <strong>4 100 zł autokar 50-os.</strong></p>
              </div>

              <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
                <h3 className="mb-3 text-base font-bold text-[#639922]">Delegacja firmowa 1-dniowa</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong className="text-white">06:00</strong> — odjazd</li>
                  <li><strong className="text-white">10:00</strong> — Wrocław, spotkanie (4h)</li>
                  <li><strong className="text-white">14:00</strong> — centrum, obiad</li>
                  <li><strong className="text-white">16:00</strong> — drugie spotkanie / wizyta w fabryce</li>
                  <li><strong className="text-white">18:00</strong> — odjazd</li>
                  <li><strong className="text-white">22:00</strong> — Krakow</li>
                </ul>
                <p className="mt-3 text-xs text-[#97C459]">2 kierowców obowiązkowych. Cena: <strong>4 100 zł autokar 50-os.</strong></p>
              </div>

              <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5">
                <h3 className="mb-3 text-base font-bold text-[#639922]">Koncert na Stadionie Wrocław</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong className="text-white">13:00</strong> — odjazd z Krakowa</li>
                  <li><strong className="text-white">17:00</strong> — Wrocław, postój pod stadionem, kolacja</li>
                  <li><strong className="text-white">20:00 – 23:30</strong> — koncert</li>
                  <li><strong className="text-white">23:45</strong> — odjazd (+1h korek wyjazdowy)</li>
                  <li><strong className="text-white">04:30</strong> — powrót Krakow</li>
                </ul>
                <p className="mt-3 text-xs text-[#97C459]">Coldplay, Taylor Swift, mecze UEFA. Cena: <strong>4 600 zł autokar 50-os</strong> (nocny dodatek).</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2-DAY BUSINESS SCHEMES */}
      {l === "pl" && (
        <section className="bg-[#1a1a1a] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-black text-[#639922]">Wyjazd 2-dniowy — schematy biznesowe</h2>
            <p className="mb-6 text-gray-300">
              Dla konferencji 2-dniowych i wyjazdów integracyjnych mamy dwa warianty — wybierasz po obejrzeniu obu wycen.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-6">
                <h3 className="mb-1 text-lg font-bold text-[#639922]">Wariant A — Drop-off + powrót pusty</h3>
                <p className="text-xs text-gray-400 mb-3">Tańszy o ~300 zł, ale kierowca nie nocuje we Wrocławiu</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong className="text-white">Dzień 1:</strong> 6:00 odjazd Krakow → 10:00 Wrocław, zostawiamy grupę w hotelu → 11:00 powrót pusty (Krakow 14:45)</li>
                  <li><strong className="text-white">Dzień 2:</strong> 8:00 kierowca wyjeżdża do Wrocławia (sam, pusty autokar) → 11:45 odbiera grupę → 15:30 Krakow</li>
                </ul>
                <p className="mt-4 text-sm font-bold text-[#639922]">Cena: 5 500 zł autokar 50-os</p>
                <p className="text-xs text-gray-400">(2× 2 600 zł trasy − 25% zniżki za pustą stronę)</p>
              </div>

              <div className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-6">
                <h3 className="mb-1 text-lg font-bold text-[#639922]">Wariant B — Kierowca nocuje na miejscu</h3>
                <p className="text-xs text-gray-400 mb-3">Jeden kierowca przez cały wyjazd, wyższy komfort organizacyjny</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong className="text-white">Dzień 1:</strong> odjazd + dotarcie do Wrocławia, kierowca nocuje przy hotelu grupy</li>
                  <li><strong className="text-white">Nocleg kierowcy:</strong> 220-280 zł/noc (hotel pod Wrocławiem) — wliczone w cenę</li>
                  <li><strong className="text-white">Dzień 2:</strong> powrót z grupą do Krakowa</li>
                </ul>
                <p className="mt-4 text-sm font-bold text-[#639922]">Cena: 5 200 zł autokar 50-os</p>
                <p className="text-xs text-gray-400">(1× kierowca cały czas + nocleg)</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BOOKING STEPS */}
      {l === "pl" && (
        <section className="bg-[#111111] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-black text-[#639922]">Jak rezerwować</h2>
            <ol className="space-y-4">
              {[
                { step: "1", text: "Zadzwoń (41 345 32 25) lub wyślij formularz z trasą + datą + liczbą osób. Pn-pt 7-18, sob 8-14." },
                { step: "2", text: "Otrzymujesz wycenę w 15-30 min z uwzględnieniem wariantu (1-dniowy / 2-dniowy A lub B) oraz szacunkiem opłat A4." },
                { step: "3", text: "Zaliczka 20-30% przelewem (dla firm z odroczeniem 7 dni po wystawieniu faktury). Dla wycieczek szkolnych — faktura proforma z pieczęcią dyrektora, bez zaliczki." },
                { step: "4", text: "Pełna płatność dzień przed lub po przejeździe (B2B z odroczeniem 14 dni)." },
                { step: "5", text: "Przed wyjazdem: komplet dokumentów (KREPTD, polisa, badania kierowcy) na życzenie." },
              ].map((item) => (
                <li key={item.step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1D9E75] font-black text-black text-sm">
                    {item.step}
                  </span>
                  <p className="text-gray-300 text-sm pt-1">{item.text}</p>
                </li>
              ))}
            </ol>
            <div className="mt-6 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-5 text-sm text-gray-300">
              <p className="font-semibold text-white mb-2">Warunki anulowania:</p>
              <ul className="space-y-1">
                <li>30+ dni przed: 0% kosztów</li>
                <li>7-29 dni: 50% zaliczki</li>
                <li>48h-7 dni: 100% zaliczki</li>
                <li>&lt;48h: 100% wartości zlecenia</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* WHY US */}
      <FeatureBox
        heading={l === "pl" ? "Dlaczego Autokar Busko — konkretnie" : undefined}
        features={whyUsFeatures}
      />

      {/* POPULAR ROUTE VARIANTS */}
      {l === "pl" && (
        <section className="bg-[#111111] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-black text-[#639922]">Popularne wariacje trasy</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Krakow → Wrocław → Krakow (1 dzień, 2 kierowców)", detail: "660 km, 4 100 zł autokar 50-os" },
                { label: "Krakow → Wrocław → Karpacz (wycieczka 2-dniowa)", detail: "400 km, 5 800 zł z noclegiem kierowcy — popularny cel ferii zimowych" },
                { label: "Krakow → Wrocław (lotnisko Strachowice)", detail: "320 km, 3h 40min, 2 800 zł — transfer grupowy na tanie linie" },
                { label: "Krakow → Wrocław → Praga / Berlin (3 dni za granicą)", detail: "cena indywidualna po rozmowie, śr. 8 500-12 000 zł" },
              ].map((item, idx) => (
                <li key={idx} className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-4">
                  <p className="font-semibold text-sm">{item.label}</p>
                  <p className="text-sm text-[#639922] mt-1">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* RELATED ROUTES */}
      {l === "pl" && (
        <section className="bg-[#1a1a1a] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-black text-[#639922]">Popularne trasy z Krakowa</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { href: "/pl/trasy/krakow-krakow-autokar", label: "Kraków", detail: "115 km / 1h 40min" },
                { href: "/pl/trasy/krakow-warszawa-autokar", label: "Warszawa", detail: "180 km / 2h 30min" },
                { href: "/pl/trasy/krakow-czestochowa-autokar", label: "Częstochowa", detail: "130 km / 1h 50min" },
                { href: "/pl/impreza-firmowa", label: "Wyjazdy firmowe", detail: "Delegacje, konferencje, integracje" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 hover:border-[#639922] transition-colors"
                >
                  <p className="font-bold text-[#639922]">{item.label}</p>
                  <p className="text-sm text-gray-400 mt-1">{item.detail}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <FAQAccordion
        heading={l === "pl" ? "Najczęściej zadawane pytania" : undefined}
        items={faqItems}
      />

      {/* CTA FINAL */}
      <section className="bg-[#1D9E75] px-4 py-12 text-black">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-2 text-3xl font-black">{ctaSectionHeadings[l]}</h2>
          {l === "pl" && (
            <p className="mb-6 text-sm">
              Wycena pisemna w 15-30 min. Wszystkie opłaty A4 wliczone. Dwóch kierowców w cenie pełnego dnia. Bez ukrytych kosztów.
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="tel:+48413453225" variant="primary">
              {l === "pl" ? "Zadzwoń: 41 345 32 25" : "Call +48 41 345 32 25"}
            </CTAButton>
            <CTAButton href={`/${l}/impreza-firmowa`} variant="secondary">
              {l === "pl" ? "Wyjazdy firmowe — pełna oferta" : "Corporate trips"}
            </CTAButton>
            <CTAButton href={`/${l}/cennik`} variant="tertiary">
              {l === "pl" ? "Cennik" : "Pricing"}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
