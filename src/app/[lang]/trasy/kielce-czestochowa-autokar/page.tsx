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
  pl: "Autokar Kielce → Częstochowa (Jasna Góra) — cena od 700 zł, 130 km, 1h 50min",
  en: "Coach hire Krakow → Częstochowa (Jasna Góra) — 130 km, from PLN 700",
  de: "Coach hire Krakow → Częstochowa (Jasna Góra) — 130 km, from PLN 700",
  ru: "Coach hire Krakow → Częstochowa (Jasna Góra) — 130 km, from PLN 700",
  ar: "Coach hire Krakow → Częstochowa (Jasna Góra) — 130 km, from PLN 700",
  es: "Coach hire Krakow → Częstochowa (Jasna Góra) — 130 km, from PLN 700",
  fr: "Coach hire Krakow → Częstochowa (Jasna Góra) — 130 km, from PLN 700",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Wynajem autokaru z Krakowa do Częstochowy: cennik dla 20/35/50 osób, parking Jasna Góra, msze święte, Apel Jasnogórski 21:00. Faktura na parafię. Tel. 601 076 652.",
  en: "Coach from Krakow to Częstochowa with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
  de: "Coach from Krakow to Częstochowa with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
  ru: "Coach from Krakow to Częstochowa with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
  ar: "Coach from Krakow to Częstochowa with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
  es: "Coach from Krakow to Częstochowa with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
  fr: "Coach from Krakow to Częstochowa with pricing tables for 20/35/50 passengers. Fast quote in 15 minutes. Call +48 601 076 652.",
};

const heroTitles: Record<Language, string> = {
  pl: "Wynajem autokaru Krakow → Częstochowa (Jasna Góra) — 130 km, od 700 zł, dojazd w 1h 50min",
  en: "Coach hire Krakow → Częstochowa from PLN 700",
  de: "Coach hire Krakow → Częstochowa from PLN 700",
  ru: "Coach hire Krakow → Częstochowa from PLN 700",
  ar: "Coach hire Krakow → Częstochowa from PLN 700",
  es: "Coach hire Krakow → Częstochowa from PLN 700",
  fr: "Coach hire Krakow → Częstochowa from PLN 700",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Trasa Krakow → Częstochowa to dla nas trasa serca — od 2003 roku obsłużyliśmy ponad 500 pielgrzymek na Jasną Górę. 130 km drogą DK78 w 1 godzinę 50 minut. Faktura proforma dla parafii, bez zaliczki.",
  en: "Fast intercity coach service with fixed pricing and quick booking.",
  de: "Fast intercity coach service with fixed pricing and quick booking.",
  ru: "Fast intercity coach service with fixed pricing and quick booking.",
  ar: "Fast intercity coach service with fixed pricing and quick booking.",
  es: "Fast intercity coach service with fixed pricing and quick booking.",
  fr: "Fast intercity coach service with fixed pricing and quick booking.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zaplanuj pielgrzymkę — 601 076 652",
  en: "Check availability now",
  de: "Check availability now",
  ru: "Check availability now",
  ar: "Check availability now",
  es: "Check availability now",
  fr: "Check availability now",
};

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Zaplanuj pielgrzymkę na Jasną Górę",
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
    oneWay: "700 zł",
    pilgrimageDay: "1 000 zł",
    withApel: "1 350 zł",
  },
  {
    vehicle: "Autokar Iveco Crossway 35",
    passengers: "30-35",
    oneWay: "950 zł",
    pilgrimageDay: "1 400 zł",
    withApel: "1 800 zł",
  },
  {
    vehicle: "Autokar Setra ComfortClass 50",
    passengers: "45-50",
    oneWay: "1 200 zł",
    pilgrimageDay: "1 700 zł",
    withApel: "2 200 zł",
  },
  {
    vehicle: "Autokar VIP 50 (skóra, fotele 2+1)",
    passengers: "40-45",
    oneWay: "1 450 zł",
    pilgrimageDay: "2 050 zł",
    withApel: "2 600 zł",
  },
];

const travelTimeRows = [
  { timeOfDay: "5:00 – 7:00", duration: "1h 45min", note: "najszybciej, pusta DK78" },
  { timeOfDay: "7:00 – 9:00", duration: "1h 55min – 2h 10min", note: "korek przy wjeździe do Częstochowy (ul. Warszawska)" },
  { timeOfDay: "9:00 – 14:00", duration: "1h 50min", note: "typowy czas pielgrzymek mszalnych" },
  { timeOfDay: "14:00 – 17:00", duration: "2h – 2h 20min", note: "szczyt popołudniowy, wjazd do Częstochowy zatłoczony" },
  { timeOfDay: "18:00 – 21:00", duration: "1h 45min", note: "spokojnie" },
  { timeOfDay: "22:00 – 4:00", duration: "1h 40min", note: "po nocnej adoracji" },
];

const groupVehicleRows = [
  {
    groupSize: "2-8 osób",
    vehicle: "Mercedes Vito / VW Caravelle",
    reason: "rodzinne pielgrzymki, łatwe parkowanie pod Jasną Górą",
  },
  {
    groupSize: "9-16 osób",
    vehicle: "Mercedes Sprinter 19+2",
    reason: "małe parafie / wspólnoty modlitewne / KSM",
  },
  {
    groupSize: "17-30 osób",
    vehicle: "Iveco Daily 24-os",
    reason: "grupy parafialne średnie, klasy bierzmowania",
  },
  {
    groupSize: "31-49 osób",
    vehicle: "Iveco Crossway 49 ★★★★",
    reason: "standardowa parafialna pielgrzymka — najczęściej zamawiane; mikrofon do różańca",
  },
  {
    groupSize: "50+ osób",
    vehicle: "Setra ComfortClass S 415 / TopClass 50",
    reason: "duże parafie miejskie; mikrofon dla kapłana w trakcie różańca",
  },
  {
    groupSize: "80+ osób",
    vehicle: "2× autokar w konwoju",
    reason: "parafie diecezjalne, organizacja dwóch zbiórek",
  },
];

const pickupPoints = [
  "ul. Kolberga 9 (nasza baza)",
  "Katedra Wniebowzięcia NMP w Krakowie (pl. NMP)",
  "Bazylika Mniejsza w Wiślicy (40 km na południe)",
  "Sanktuarium na Świętym Krzyżu (24 km na wschód)",
  "Galeria Echo",
  "PKP Krakow",
];

const includedItems = [
  "Paliwo ON Premium",
  "Kierowca z licencją D + aktualne badania psychotechniczne + świadectwo kwalifikacji",
  "Brak opłat drogowych — DK78 jest w pełni bezpłatna",
  "Ubezpieczenie OC/AC/NNW pasażerów z sumą 100 000 EUR",
  "Parking u Jasnej Góry do 3 godzin (10 zł/h × 3h = 30 zł — wliczone)",
  "1-2 postoje kawowe po drodze (MOP Włoszczowa, MOP Koniecpol)",
  "Mikrofon kierowcy z głośnikami w autokarze (dla różańca i animacji księdza)",
  "Faktura VAT 8% dla parafii lub paragon dla grup mieszanych",
];

const excludedItems = [
  "Parking u Jasnej Góry powyżej 3h (10 zł/h × dodatkowe godziny)",
  "Drugi kierowca przy powrocie po nocnej adoracji (>00:00): +400 zł",
  "Nocleg kierowcy przy pielgrzymce 2-dniowej: 180-260 zł/noc",
  "Wjazd autokaru na teren klasztorny (ten teren jest dla pieszych — standard, bez dopłat)",
];

const whyUsFeatures = [
  {
    icon: "🕊️",
    title: "24 lata pielgrzymek na Jasną Górę",
    description: "Od 2003 roku obsłużyliśmy ponad 500 pielgrzymek parafialnych. Kierowcy znają wszystkich administratorów parkingu klasztornego z imienia.",
  },
  {
    icon: "🎙️",
    title: "Mikrofon do różańca w każdym autokarze ★★★★",
    description: "Kapłan prowadzi różaniec do mikrofonu — słychać go w całym autokarze bez krzyczenia. Stała współpraca z 40+ parafiami diecezji kieleckiej i sandomierskiej.",
  },
  {
    icon: "📄",
    title: "Faktura proforma dla parafii — bez zaliczki",
    description: "Wystarczy pismo z pieczęcią proboszcza. Płatność przed lub po pielgrzymce z odroczeniem 14 dni. Faktura VAT zwolniona dla parafii.",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje wynajem autokaru na pielgrzymkę z Krakowa do Częstochowy?",
    answer:
      "Dla autokaru 50-osobowego pielgrzymka 1-dniowa: 1 700 zł (wyjazd rano, powrót wieczorem). Z Apelem Jasnogórskim 21:00 (powrót 23:00): 2 200 zł. Bus 20-osobowy odpowiednio: 1 000 / 1 350 zł. Ceny obejmują paliwo, kierowcę, parking u Jasnej Góry do 3h, ubezpieczenie i mikrofon do różańca.",
  },
  {
    question: "Ile trwa przejazd Krakow → Jasna Góra autokarem?",
    answer:
      "Drogą krajową DK78 przez Włoszczowę: 1 godzina 50 minut (130 km) w typowych warunkach. Rano przed 7:00 — 1h 45min. W odpustach (3 maja, 15 sierpnia) — do 2h 30min, bo wjazd do Częstochowy zatłoczony.",
  },
  {
    question: "Czy można zarezerwować autokar na pielgrzymkę z Apelem Jasnogórskim?",
    answer:
      "Tak. Standardowy schemat: wyjazd 13:00 z Krakowa, msza popołudniowa 14:00, droga krzyżowa, Apel 21:00, powrót 23:00 do Krakowa. Cena 2 200 zł autokar 50-os. Kierowca zostaje w autokarze podczas Apelu (parking opłacony), nie wymagamy drugiego kierowcy bo łączny czas pracy mieści się w 9h.",
  },
  {
    question: "Czy parafia może zapłacić po pielgrzymce?",
    answer:
      "Tak. Dla parafii oferujemy fakturę z odroczeniem 14 dni po przejeździe. Wystarczy pismo z pieczęcią proboszcza wysłane przed wyjazdem. Nie wymagamy zaliczki. Stała współpraca z 40+ parafiami diecezji kieleckiej i sandomierskiej.",
  },
  {
    question: "Ile wcześniej rezerwować autokar do Częstochowy?",
    answer:
      "W zwykłe tygodnie wystarczy 2-3 tygodnie. W wielkie odpusty Jasnej Góry (3 maja, 15 sierpnia, 26 sierpnia, 8 września) — minimum 8 tygodni, bo parking pod klasztorem wymaga wcześniejszej rezerwacji. Dla dorocznych pielgrzymek parafialnych zachęcamy do rezerwacji na cały rok z góry — daje to rabat -10%.",
  },
  {
    question: "Jaki autokar dla 45-osobowej pielgrzymki parafialnej?",
    answer:
      "Standardowo Iveco Crossway 49 (klasa ★★★★, 49 fotelek, mikrofon kierowcy z głośnikami w salonie, klimatyzacja, WC) — to nasz najczęstszy wybór dla parafii. Dla grup powyżej 50 osób — Setra ComfortClass S 415. Wszystkie pojazdy ★★★★ mają mikrofon, kapłan prowadzi różaniec do mikrofonu.",
  },
  {
    question: "Czy w autokarze można odprawić różaniec?",
    answer:
      "Oczywiście. Każdy nasz autokar klasy ★★★★ i wyższej ma mikrofon kierowcy z głośnikami w salonie pasażerskim. Kapłan bierze mikrofon, prowadzi modlitwę — słychać go bez krzyczenia. Standardowo na trasie Krakow-Częstochowa odprawiamy: różaniec święty (50 min), Koronkę do Bożego Miłosierdzia (15 min), modlitwy poranne. Kierowca utrzymuje ciszę w kabinie.",
  },
  {
    question: "Czy organizujecie pielgrzymki łączone (np. Święty Krzyż + Jasna Góra)?",
    answer:
      "Tak. Najczęstsze warianty: (1) Święty Krzyż → Jasna Góra → Krakow — 1 dzień, 290 km, 2 200 zł autokar 50-os. (2) Jasna Góra → Wadowice → Kalwaria Zebrzydowska — 2 dni z noclegiem, 4 600 zł. (3) Wielka pielgrzymka diecezjalna z 5-6 autokarami w konwoju — cena indywidualna.",
  },
];

const schemaObject = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.autokar-busko.pl/pl/trasy/krakow-czestochowa-autokar#service",
      name: "Wynajem autokaru Krakow → Częstochowa (Jasna Góra)",
      description:
        "Wynajem autokaru lub busa na pielgrzymkę z Krakowa do Częstochowy na Jasną Górę. 130 km, czas przejazdu 1h 50min drogą krajową DK78. Pojazdy 16-50 osób z mikrofonem dla różańca. Faktura proforma dla parafii. Stałe ceny od 700 zł.",
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
        { "@type": "City", name: "Częstochowa" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cennik trasy Krakow-Częstochowa 2026",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Bus 20-osobowy Krakow-Częstochowa pielgrzymka 1-dniowa",
            price: "1000",
            priceCurrency: "PLN",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Autokar 35-osobowy Krakow-Częstochowa pielgrzymka 1-dniowa",
            price: "1400",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Częstochowa pielgrzymka 1-dniowa",
            price: "1700",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Częstochowa z Apelem Jasnogórskim",
            price: "2200",
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
        name: "Częstochowa",
        address: "Polska, województwo śląskie",
      },
      distance: "130 km",
      expectedArrivalTime: "PT1H50M",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Ile kosztuje wynajem autokaru na pielgrzymkę z Krakowa do Częstochowy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dla autokaru 50-osobowego pielgrzymka 1-dniowa: 1 700 zł (wyjazd rano, powrót wieczorem). Z Apelem Jasnogórskim 21:00 (powrót 23:00): 2 200 zł. Bus 20-osobowy odpowiednio: 1 000 / 1 350 zł. Ceny obejmują paliwo, kierowcę, parking u Jasnej Góry do 3h, ubezpieczenie i mikrofon do różańca.",
          },
        },
        {
          "@type": "Question",
          name: "Ile trwa przejazd Krakow-Częstochowa autokarem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Drogą krajową DK78 przez Włoszczowę: 1 godzina 50 minut (130 km) w typowych warunkach. Rano przed 7:00 — 1h 45min. W odpustach (3 maja, 15 sierpnia) — do 2h 30min.",
          },
        },
        {
          "@type": "Question",
          name: "Czy można zarezerwować autokar na pielgrzymkę z Apelem Jasnogórskim?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. Schemat: wyjazd 13:00 z Krakowa, msza popołudniowa, Apel 21:00, powrót 23:00 do Krakowa. Cena 2 200 zł autokar 50-os. Nie wymagamy drugiego kierowcy bo łączny czas pracy mieści się w 9h.",
          },
        },
        {
          "@type": "Question",
          name: "Czy parafia może zapłacić po pielgrzymce?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. Faktura z odroczeniem 14 dni po przejeździe. Wystarczy pismo z pieczęcią proboszcza. Nie wymagamy zaliczki. Stała współpraca z 40+ parafiami diecezji kieleckiej i sandomierskiej.",
          },
        },
        {
          "@type": "Question",
          name: "Ile wcześniej rezerwować autokar do Częstochowy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "W zwykłe tygodnie 2-3 tygodnie wystarczą. W wielkie odpusty (3 maja, 15 sierpnia, 26 sierpnia, 8 września) minimum 8 tygodni — parking pod klasztorem wymaga wcześniejszej rezerwacji. Doroczne pielgrzymki — rezerwacja na cały rok z góry, rabat -10%.",
          },
        },
        {
          "@type": "Question",
          name: "Jaki autokar dla 45-osobowej pielgrzymki parafialnej?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standardowo Iveco Crossway 49 (klasa ★★★★, 49 fotelek, mikrofon kierowcy z głośnikami, klimatyzacja, WC). Dla grup powyżej 50 osób — Setra ComfortClass S 415. Wszystkie pojazdy ★★★★ mają mikrofon do prowadzenia różańca.",
          },
        },
        {
          "@type": "Question",
          name: "Czy w autokarze można odprawić różaniec?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. Każdy autokar klasy ★★★★ i wyższej ma mikrofon kierowcy z głośnikami w salonie. Kapłan prowadzi modlitwę do mikrofonu — słychać go bez krzyczenia. Standardowo: różaniec święty (50 min), Koronka do Bożego Miłosierdzia (15 min), modlitwy poranne.",
          },
        },
        {
          "@type": "Question",
          name: "Czy organizujecie pielgrzymki łączone Święty Krzyż + Jasna Góra?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. Święty Krzyż → Jasna Góra → Krakow (1 dzień, 290 km, 2 200 zł autokar 50-os). Jasna Góra → Wadowice → Kalwaria Zebrzydowska (2 dni z noclegiem, 4 600 zł). Wielka pielgrzymka diecezjalna z 5-6 autokarami — cena indywidualna.",
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
          name: "Krakow → Częstochowa",
          item: "https://www.autokar-busko.pl/pl/trasy/krakow-czestochowa-autokar",
        },
      ],
    },
  ],
};

function ResponsivePricingTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-black text-[#f59e0b]">Cena wynajmu autokaru Krakow-Częstochowa (cennik 2026)</h2>
        <p className="mb-8 text-gray-300">
          Ceny brutto (8% VAT), zawierają: paliwo, kierowcę, brak opłat drogowych (DK78 bezpłatna), ubezpieczenie OC/AC/NNW 100 000 EUR, parking u Jasnej Góry do 3h, mikrofon do różańca.
        </p>

        {/* Mobile cards */}
        <div className="space-y-4 md:hidden">
          {routePricingRows.map((row) => (
            <div key={row.vehicle} className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              <h3 className="text-lg font-bold text-[#f59e0b]">{row.vehicle}</h3>
              <p className="mt-1 text-sm text-gray-300">Pasażerów: {row.passengers}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-3"><dt>One-way</dt><dd className="font-bold">{row.oneWay}</dd></div>
                <div className="flex justify-between gap-3"><dt>Pielgrzymka 1-dniowa</dt><dd className="font-bold">{row.pilgrimageDay}</dd></div>
                <div className="flex justify-between gap-3"><dt>Z Apelem Jasnogórskim</dt><dd className="font-bold">{row.withApel}</dd></div>
              </dl>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full overflow-hidden rounded-xl border border-[#2a2a2a] text-sm">
            <thead className="bg-[#111111] text-left text-[#f59e0b]">
              <tr>
                <th className="px-4 py-3">Pojazd</th>
                <th className="px-4 py-3">Pasażerów</th>
                <th className="px-4 py-3">One-way</th>
                <th className="px-4 py-3">Pielgrzymka 1-dniowa</th>
                <th className="px-4 py-3">Z Apelem Jasnogórskim (do 23:00)</th>
              </tr>
            </thead>
            <tbody>
              {routePricingRows.map((row) => (
                <tr key={row.vehicle} className="border-t border-[#2a2a2a] bg-[#141414]">
                  <td className="px-4 py-3 font-semibold">{row.vehicle}</td>
                  <td className="px-4 py-3">{row.passengers}</td>
                  <td className="px-4 py-3 font-bold">{row.oneWay}</td>
                  <td className="px-4 py-3 font-bold">{row.pilgrimageDay}</td>
                  <td className="px-4 py-3 font-bold">{row.withApel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 space-y-2 text-sm text-gray-400">
          <p>⚠️ <strong className="text-gray-200">Co podnosi cenę:</strong> wielkie odpusty Jasnej Góry (3 maja, 15 sierpnia, 26 sierpnia, 8 września) +20%, powrót po nocnej adoracji (&gt;00:00) drugi kierowca +400 zł, sezon szkolny +10-15%.</p>
          <p>✅ <strong className="text-gray-200">Co nie podnosi:</strong> postoje MOP Włoszczowa i Koniecpol, czekanie podczas mszy świętej, płatność rozłożona na raty dla pielgrzymek wielodniowych.</p>
          <p>🔄 <strong className="text-gray-200">Powrót pusty</strong> (zostawiamy grupę na weekend rekolekcyjny): -30% od ceny pielgrzymki 1-dniowej.</p>
        </div>
      </div>
    </section>
  );
}

function ResponsiveTravelTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-black text-[#f59e0b]">Czas przejazdu i trasa</h2>
        <p className="mb-6 text-gray-300">
          Trasa standardowa to <strong>DK78</strong> przez Włoszczowę i Koniecpol — dwupasmowa droga krajowa, bez opłat, 130 km. Czas typowy: 1 godzina 50 minut.
        </p>

        {/* Mobile cards */}
        <div className="space-y-4 md:hidden">
          {travelTimeRows.map((row) => (
            <div key={row.timeOfDay} className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              <p className="text-sm text-gray-300">{row.timeOfDay}</p>
              <p className="mt-1 text-lg font-black text-[#f59e0b]">{row.duration}</p>
              <p className="mt-2 text-sm text-gray-300">{row.note}</p>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
          <table className="min-w-full overflow-hidden rounded-xl border border-[#2a2a2a] text-sm">
            <thead className="bg-[#111111] text-left text-[#f59e0b]">
              <tr>
                <th className="px-4 py-3">Pora dnia</th>
                <th className="px-4 py-3">Czas Krakow → Częstochowa</th>
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
          <h3 className="mb-3 text-lg font-bold text-[#f59e0b]">Postoje pielgrzymkowe</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>🛑 <strong>MOP Włoszczowa</strong> (43 km od Krakowa) — 15 min, modlitwa różańcowa, toaleta, kawa. Dla pielgrzymek z dziećmi — obowiązkowy.</li>
            <li>🛑 <strong>MOP Koniecpol</strong> (88 km od Krakowa) — przed wjazdem do Częstochowy, ostatnia szansa przed mszą.</li>
          </ul>
          <p className="mt-3 text-sm text-gray-400">
            Trasa alternatywna A4 + DK1 (przez Pilicę, Lubliniec): 145 km, czas 2h 5min — wybieramy gdy program obejmuje też inne miejsca w Częstochowie.
          </p>
        </div>
      </div>
    </section>
  );
}

function GroupVehicleTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-black text-[#f59e0b]">Jaki autokar dla jakiej pielgrzymki</h2>
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
        <p className="mt-4 text-sm text-gray-400">
          🎙️ <strong className="text-gray-200">Mikrofon do różańca</strong> — wszystkie nasze autokary klasy ★★★★ i ★★★★★ mają mikrofon kierowcy z głośnikami w salonie pasażerskim. Kapłan prowadzi modlitwę bez krzyczenia. To standard, który parafie bardzo doceniają.
        </p>
      </div>
    </section>
  );
}

function CTABlock() {
  return (
    <section className="bg-[#f59e0b] px-4 py-12 text-center">
      <h3 className="mb-2 text-2xl font-black text-[#1a1a1a]">Zaplanuj pielgrzymkę na Jasną Górę</h3>
      <p className="mb-6 text-[#1a1a1a]">Faktura proforma dla parafii, bez zaliczki. Odpowiadamy w 15-30 min w godzinach biurowych.</p>
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
  const currentUrl = `https://www.autokar-busko.pl/${l}/trasy/krakow-czestochowa-autokar`;

  return {
    title: metaTitles[l],
    description: metaDescriptions[l],
    alternates: {
      canonical: currentUrl,
    },
    openGraph: {
      title: l === "pl" ? "Autokar Kielce → Jasna Góra od 1 200 zł | MUSZKIETER" : metaTitles[l],
      description:
        l === "pl"
          ? "130 km, 1h 50min. Pielgrzymki parafialne, wycieczki szkolne. 500+ pielgrzymek od 2003 r. Faktura na parafię, bez zaliczki."
          : metaDescriptions[l],
      url: currentUrl,
      type: "website",
      locale: l === "pl" ? "pl_PL" : "en_US",
    },
  };
}

export default async function KrakowCzestochowaRoutePage({
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

      {/* Pickup points */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-4 text-3xl font-black text-[#f59e0b]">Miejsca odbioru w Krakowie i okolicach</h2>
          <p className="mb-4 text-gray-300">
            Dla pielgrzymek parafialnych podstawiamy <strong>bezpośrednio pod kościół</strong> w obrębie 35 km od centrum Krakowa bez dopłaty. Standardowe punkty zbiórki:
          </p>
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

      {/* Jasna Góra info */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl space-y-8">
          <h2 className="text-3xl font-black text-[#f59e0b]">Jasna Góra — co warto wiedzieć przed wyjazdem</h2>

          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Parking dla autokarów</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li><strong>Parking główny</strong> — ul. Klasztorna, naprzeciw bramy lubomirskiego. Opłata 10 zł/h dla autokaru, pojemność 25 autokarów. W odpustach rezerwujemy z 8-tygodniowym wyprzedzeniem.</li>
              <li><strong>Parking zapasowy</strong> — ul. Świętej Barbary (przy zachodnich wałach). Bezpłatny do 6h, ale 800 m pieszo do bazyliki.</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Godziny mszy świętych w bazylice</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>06:00 — msza poranna (dla pielgrzymek z noclegiem dnia poprzedniego)</li>
              <li>09:30, 11:00, 12:00 — msze przedpołudniowe, popularne dla pielgrzymek 1-dniowych</li>
              <li>14:00 — msza popołudniowa</li>
              <li>18:30 — msza wieczorna</li>
              <li><strong>21:00 — Apel Jasnogórski</strong> (codziennie, wieczorne pożegnanie z Cudownym Obrazem)</li>
            </ul>
            <p className="mt-3 text-sm text-gray-400">
              Dla pielgrzymek z wcześniejszym zgłoszeniem organizujemy mszę grupową w kaplicy bocznej — kontaktujemy się z kurią klasztorną w Waszym imieniu.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-xl font-bold text-white">Inne miejsca w Częstochowie</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-300">
              <li>Aleja Najświętszej Maryi Panny — deptak od dworca do Jasnej Góry, obiad i spacer</li>
              <li>Park 3-go Maja — postój dla grup przed mszą</li>
              <li>Muzeum 600-lecia Jasnej Góry (8:00-17:00) — bilet 12 zł, wycieczki szkolne -50%</li>
              <li>Sanktuarium NMP Zwycięskiej w Częstochowie-Stradomiu — dla grup z dodatkową stacją</li>
            </ul>
          </div>
        </div>
      </section>

      <GroupVehicleTable />

      {/* Included / excluded */}
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

      {/* Multi-day pilgrimages */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-black text-[#f59e0b]">Pielgrzymki 2-dniowe i wielodniowe</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6">
              <h3 className="mb-3 text-lg font-bold text-[#f59e0b]">Wariant A — weekend rekolekcyjny</h3>
              <ul className="space-y-1 text-sm text-gray-300">
                <li>Sob 7:00 — wyjazd z Krakowa</li>
                <li>9:00 — Jasna Góra, msza</li>
                <li>9:00–21:00 — program parafii, Apel</li>
                <li>Noc w Domu Pielgrzyma</li>
                <li>Niedz 9:30 — msza zamykająca</li>
                <li>14:00 — powrót do Krakowa</li>
              </ul>
              <p className="mt-4 font-bold text-[#f59e0b]">3 500 zł (autokar 50-os)</p>
              <p className="text-xs text-gray-400">Z noclegiem kierowcy w Domu Pielgrzyma (220 zł).</p>
            </div>

            <div className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6">
              <h3 className="mb-3 text-lg font-bold text-[#f59e0b]">Wariant B — Święty Krzyż + Jasna Góra</h3>
              <p className="text-sm text-gray-300">Pielgrzymka 2-stacjowa: Święty Krzyż (24 km od Krakowa) → Jasna Góra → Krakow. 290 km łącznie, 1 dzień, 2 200 zł autokar 50-os.</p>
              <p className="mt-3 text-sm text-gray-300">Najczęstszy wybór parafii z diecezji kieleckiej łączących oba sanktuaria.</p>
            </div>

            <div className="rounded-2xl border border-[#2a2a2a] bg-[#111111] p-6">
              <h3 className="mb-3 text-lg font-bold text-[#f59e0b]">Wariant C — Jasna Góra + Wadowice + Kalwaria</h3>
              <p className="text-sm text-gray-300">3 dni, 380 km łącznie. Autokar 50-os: 5 800 zł. Dla parafii z silnym duszpasterstwem dorosłych.</p>
              <p className="mt-3 text-sm text-gray-300">Wielkie pielgrzymki diecezjalne (200-300 osób, 4-6 autokarów w konwoju) — cena indywidualna po rozmowie z duszpasterzem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to book — parish */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-5xl rounded-2xl border border-[#2a2a2a] bg-[#111111] p-8">
          <h2 className="mb-6 text-3xl font-black text-[#f59e0b]">Jak rezerwować — pielgrzymka parafialna</h2>
          <ol className="space-y-3 text-gray-300">
            <li>1. Zadzwoń (601 076 652) lub wyślij e-mail z datą, liczbą osób i opisem programu (msza, Apel, dodatkowe stacje).</li>
            <li>2. Wycena pisemna w 15-30 minut (pn-pt 7:00-18:00, sob 8:00-14:00) — e-mail lub WhatsApp.</li>
            <li>3. Pismo z parafii z pieczęcią proboszcza — <strong>wystarczy zamiast zaliczki</strong>.</li>
            <li>4. Faktura proforma wysyłana e-mailem, płatność na konto parafii przed lub po pielgrzymce (do uzgodnienia, odroczenie do 14 dni).</li>
            <li>5. Potwierdzenie tygodnia przed wyjazdem — przypominamy SMS-em o godzinie wyjazdu.</li>
          </ol>
          <div className="mt-5 space-y-2 text-sm text-gray-400">
            <p>📋 Dla szkół i parafii: faktura proforma na konto rady rodziców / parafii bez zaliczki — wystarczy pismo z pieczęcią. Współpracujemy z 40+ parafiami diecezji kieleckiej i sandomierskiej od 2003 r.</p>
            <p>🔄 <strong className="text-gray-200">Anulowanie:</strong> 30+ dni przed — 0% kosztów | 7-29 dni — 50% zaliczki | &lt;7 dni — 100% zaliczki. Dla parafii (bez zaliczki) warunki ustalamy indywidualnie.</p>
          </div>
        </div>
      </section>

      <FeatureBox features={whyUsFeatures} heading="Dlaczego MUSZKIETER — konkretnie na trasie Częstochowa" />

      <FAQAccordion items={faqItems} heading="Najczęściej zadawane pytania" />
      <CTABlock />

      {/* Popular route variations */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-black text-[#f59e0b]">Popularne wariacje trasy</h2>
          <ul className="space-y-3 text-gray-300">
            <li className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              ✝️ <strong>Krakow → Jasna Góra → Krakow</strong> (klasyk parafialny, 1 dzień) — 260 km łącznie, 1 700 zł autokar 50-os
            </li>
            <li className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              🌄 <strong>Krakow → Święty Krzyż → Jasna Góra → Krakow</strong> (pielgrzymka 2-stacjowa) — 290 km, 2 200 zł
            </li>
            <li className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              🕊️ <strong>Krakow → Jasna Góra → Wadowice → Kalwaria Zebrzydowska</strong> (2 dni z noclegiem) — 4 600 zł autokar 50-os
            </li>
            <li className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              ⛪ <strong>Wielka pielgrzymka diecezjalna</strong> (200-300 osób, 4-6 autokarów) — cena indywidualna po rozmowie z duszpasterzem
            </li>
          </ul>
        </div>
      </section>

      {/* Related routes */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-white">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-6 text-3xl font-black text-[#f59e0b]">Inne popularne trasy z Krakowa</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href="/pl/trasy/krakow-krakow-autokar"
              className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 transition-colors hover:border-[#f59e0b]"
            >
              <p className="text-lg font-black text-[#f59e0b]">Krakow → Kraków</p>
              <p className="mt-1 text-sm text-gray-400">115 km · 1h 40min · A4</p>
              <p className="mt-2 text-sm text-gray-300">od 1 050 zł</p>
            </a>
            <a
              href="/pl/trasy/krakow-warszawa-autokar"
              className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 transition-colors hover:border-[#f59e0b]"
            >
              <p className="text-lg font-black text-[#f59e0b]">Krakow → Warszawa</p>
              <p className="mt-1 text-sm text-gray-400">180 km · 2h 30min · S7</p>
              <p className="mt-2 text-sm text-gray-300">od 1 050 zł</p>
            </a>
            <a
              href="/pl/trasy/krakow-zakopane-autokar"
              className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 transition-colors hover:border-[#f59e0b]"
            >
              <p className="text-lg font-black text-[#f59e0b]">Krakow → Zakopane</p>
              <p className="mt-1 text-sm text-gray-400">210 km · 3h · przez Kraków</p>
              <p className="mt-2 text-sm text-gray-300">od 1 600 zł</p>
            </a>
            <a
              href="/pl/trasy/krakow-wroclaw-autokar"
              className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 transition-colors hover:border-[#f59e0b]"
            >
              <p className="text-lg font-black text-[#f59e0b]">Krakow → Wrocław</p>
              <p className="mt-1 text-sm text-gray-400">330 km · 3h 45min</p>
              <p className="mt-2 text-sm text-gray-300">od 2 200 zł</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#1a1a1a] px-4 py-12 text-center text-white">
        <h2 className="mb-3 text-3xl font-black text-[#f59e0b]">Gotowi na pielgrzymkę Krakow → Jasna Góra?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-gray-300">
          Wybierz dogodny kanał kontaktu i otrzymaj pisemną wycenę bez zobowiązań. Faktura proforma dla parafii, bez zaliczki.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <CTAButton href="tel:+48601076652">📞 601 076 652</CTAButton>
          <CTAButton href="https://wa.me/48693440585" variant="secondary">💬 WhatsApp</CTAButton>
          <CTAButton href="/pl/pielgrzymki" variant="secondary">Zobacz ofertę pielgrzymkową</CTAButton>
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
