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
  pl: "Autokar Kielce → Energylandia (Zator) — cena od 900 zł, 155 km, 2h 10min",
  en: "Coach hire Krakow → Energylandia (Zator) — 155 km, from PLN 900",
  de: "Coach hire Krakow → Energylandia (Zator) — 155 km, from PLN 900",
  ru: "Coach hire Krakow → Energylandia (Zator) — 155 km, from PLN 900",
  ar: "Coach hire Krakow → Energylandia (Zator) — 155 km, from PLN 900",
  es: "Coach hire Krakow → Energylandia (Zator) — 155 km, from PLN 900",
  fr: "Coach hire Krakow → Energylandia (Zator) — 155 km, from PLN 900",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Wynajem autokaru z Krakowa do Energylandii: cennik dla 20/35/50 osób, parking autokarów GRATIS, ubezpieczenie szkolne, godziny otwarcia parku 2026. Tel. 41 345 32 25.",
  en: "Coach from Krakow to Energylandia with pricing tables for 20/35/50 passengers. Free coach parking. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  de: "Coach from Krakow to Energylandia with pricing tables for 20/35/50 passengers. Free coach parking. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  ru: "Coach from Krakow to Energylandia with pricing tables for 20/35/50 passengers. Free coach parking. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  ar: "Coach from Krakow to Energylandia with pricing tables for 20/35/50 passengers. Free coach parking. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  es: "Coach from Krakow to Energylandia with pricing tables for 20/35/50 passengers. Free coach parking. Fast quote in 15 minutes. Call +48 41 345 32 25.",
  fr: "Coach from Krakow to Energylandia with pricing tables for 20/35/50 passengers. Free coach parking. Fast quote in 15 minutes. Call +48 41 345 32 25.",
};

const heroTitles: Record<Language, string> = {
  pl: "Wynajem autokaru Krakow → Energylandia (Zator) — 155 km, od 900 zł, dojazd w 2h 10min",
  en: "Coach hire Krakow → Energylandia from PLN 900",
  de: "Coach hire Krakow → Energylandia from PLN 900",
  ru: "Coach hire Krakow → Energylandia from PLN 900",
  ar: "Coach hire Krakow → Energylandia from PLN 900",
  es: "Coach hire Krakow → Energylandia from PLN 900",
  fr: "Coach hire Krakow → Energylandia from PLN 900",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Energylandia to absolutny hit wycieczek szkolnych — w sezonie 2025 zawieźliśmy tam 47 grup z województwa świętokrzyskiego. 155 km autostradą A4 + ekspresową S52 w 2 godziny 10 minut. Parking autokarów w Energylandii DARMOWY, kierowca czeka cały dzień.",
  en: "Fast intercity coach service with fixed pricing and quick booking.",
  de: "Fast intercity coach service with fixed pricing and quick booking.",
  ru: "Fast intercity coach service with fixed pricing and quick booking.",
  ar: "Fast intercity coach service with fixed pricing and quick booking.",
  es: "Fast intercity coach service with fixed pricing and quick booking.",
  fr: "Fast intercity coach service with fixed pricing and quick booking.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zaplanuj wycieczkę — 41 345 32 25",
  en: "Check availability now",
  de: "Check availability now",
  ru: "Check availability now",
  ar: "Check availability now",
  es: "Check availability now",
  fr: "Check availability now",
};

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Zaplanuj wycieczkę do Energylandii",
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
    oneWay: "900 zł",
    excursion1day: "1 700 zł",
    excursion2day: "2 800 zł",
  },
  {
    vehicle: "Autokar Iveco Crossway 35",
    passengers: "30-35",
    oneWay: "1 250 zł",
    excursion1day: "2 300 zł",
    excursion2day: "3 700 zł",
  },
  {
    vehicle: "Autokar Setra ComfortClass 50",
    passengers: "45-50",
    oneWay: "1 550 zł",
    excursion1day: "2 800 zł",
    excursion2day: "4 500 zł",
  },
  {
    vehicle: "Autokar VIP 50 (skóra, fotele 2+1)",
    passengers: "40-45",
    oneWay: "1 900 zł",
    excursion1day: "3 400 zł",
    excursion2day: "5 400 zł",
  },
];

const travelTimeRows = [
  { timeOfDay: "5:00 – 7:00", duration: "2h 00min", note: "pusty A4, idealny dla wycieczek na otwarcie parku 9:00" },
  { timeOfDay: "7:00 – 9:00", duration: "2h 20min – 2h 40min", note: "wjazd do Krakowa może spowolnić" },
  { timeOfDay: "9:00 – 14:00", duration: "2h 10min", note: "typowy czas dla wycieczek startujących po 7:00" },
  { timeOfDay: "14:00 – 17:00", duration: "2h 30min – 3h 00min", note: "szczyt popołudniowy + korki wjazdowe do Krakowa" },
  { timeOfDay: "19:00 – 22:00", duration: "2h 00min", note: "typowy powrót z parku" },
];

const groupVehicleRows = [
  {
    groupSize: "15-25 osób (urodziny / pół klasy)",
    vehicle: "Mercedes Sprinter 19+2 lub Iveco Daily 24-os",
    reason: "komfortowo, mikrofon dla rodzica/opiekuna do ogłoszeń startowych",
  },
  {
    groupSize: "26-49 osób (klasa szkolna)",
    vehicle: "Iveco Crossway 49 lub Setra S 415 (klasa ★★★★, WC obowiązkowo)",
    reason: "WC krytyczne — dzieci pytają co 30 min, 2h 10min bez toalety to za długo",
  },
  {
    groupSize: "50+ osób (dwie klasy łączone)",
    vehicle: "Setra ComfortClass S 415 GT-HD (klasa ★★★★)",
    reason: "klimatyzacja strefowa — w lipcu dzieci wracają zmęczone i wymęczone słońcem, klimat ratuje życie",
  },
];

const pickupPoints = [
  "Szkoła (parking szkolny lub przed wejściem) — najwygodniejsza opcja dla dzieci i rodziców",
  "ul. Poprzeczna 1 (nasza baza)",
  "Galeria Echo — dla grup mieszanych z kilku szkół",
  "PKP Krakow — dla wycieczek rodzinnych z dziećmi przyjeżdżających z mniejszych miejscowości",
  "Plaza Krakow — popularna dla grup urodzinowych (rodzice z innych dzielnic dowożą dzieci)",
  "Kościół parafialny — dla grup parafialnych z dziećmi",
];

const includedItems = [
  "Paliwo ON Premium",
  "Kierowca z licencją D + aktualne badania psychotechniczne + świadectwo kwalifikacji",
  "Wszystkie opłaty A4 Krakow-Kraków-Wieliczka (~52 zł w obie strony)",
  "Ubezpieczenie OC/AC/NNW pasażerów z sumą 100 000 EUR",
  "Parking autokaru w Energylandii — DARMOWY dla zorganizowanych grup",
  "2 postoje kawowe (MOP Brzezie + ewentualnie Balice)",
  "Mikrofon kierowcy dla nauczyciela / opiekuna",
  "Faktura VAT 8% dla rady rodziców, szkoły, firmy lub paragon",
];

const excludedItems = [
  "Bilety do Energylandii (kupujecie sami — pomagamy z grupową rezerwacją gratis)",
  "Lunch w restauracjach w parku",
  "Bilet do Aqualantis (water park, osobny bilet, sezon czerwiec-sierpień)",
  "Nocleg w hotelu Energylandii dla 2-dniowej wycieczki",
  "Drugi kierowca (niepotrzebny dla typowego dnia 5:30-21:30, mieści się w limicie)",
];

const whyUsFeatures = [
  {
    icon: "🎡",
    title: "47 grup w sezonie 2025",
    description: "24 lata wycieczek szkolnych (od 2003 r.) — średnio raz w tygodniu w sezonie zawieźliśmy grupę do Energylandii. Kierowcy znają park, wiedzą gdzie jest parking autokarowy.",
  },
  {
    icon: "📋",
    title: "Dokumenty bezpieczeństwa na piśmie",
    description: "Wypis z KREPTD kierowcy, zaświadczenie o badaniach psychotechnicznych, polisa OC/AC/NNW 100 000 EUR — komplet dokumentów przed wyjazdem. Pomagamy w rejestracji w systemie SIO.",
  },
  {
    icon: "🎟️",
    title: "Pomagamy z grupową rezerwacją biletów",
    description: "Dla grup 25+ osób Energylandia oferuje rabaty 20-40%. Kontaktujemy się z parkiem w Waszym imieniu za darmo — oszczędność potrafi być większa niż cała marża transportu.",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje wynajem autokaru z Krakowa do Energylandii?",
    answer:
      "Dla autokaru 50-osobowego wycieczka 1-dniowa: 2 800 zł (wyjazd 5:30, powrót 21:30). Bus 20-osobowy: 1 700 zł. Wycieczka 2-dniowa z noclegiem kierowcy: 4 500 zł autokar 50-os. Ceny obejmują paliwo, kierowcę, opłaty A4, ubezpieczenie i darmowy parking w Energylandii. Bilety wstępu kupujecie osobno, ale pomagamy z rezerwacją grupową (zniżki -20-40%).",
  },
  {
    question: "Ile trwa przejazd Krakow-Energylandia autokarem?",
    answer:
      "Autostradą A4 i ekspresową S52: 2 godziny 10 minut (155 km) w typowych warunkach. Wczesnym rankiem (5:30-7:00) — 2h 00min. Sobota w lipcu z korkiem do parkingu Energylandii: do 2h 40min.",
  },
  {
    question: "O której wyjechać z Krakowa żeby zdążyć na otwarcie parku o 10:00?",
    answer:
      "Rekomendujemy 5:30 z Krakowa (z postojem 15 min w MOP Brzezie) → przyjazd 8:15 → wejście do parku 9:30 (zorganizowane grupy mają wcześniejsze wejście). To daje 9,5h pełnego programu zanim park się zamknie. Późniejsze wyjazdy (po 7:00) skracają czas w parku.",
  },
  {
    question: "Czy autokar może parkować w Energylandii?",
    answer:
      "Tak, parking autokarów w Energylandii jest darmowy dla zorganizowanych grup. Kierowca czeka przez cały dzień, pilnuje bagażu dzieci (kurtki, plecaki), jest dostępny w razie wcześniejszego powrotu. Parking jest 200 m od bramy głównej, kierowca podjeżdża bezpośrednio pod wejście.",
  },
  {
    question: "Czy są zniżki grupowe na bilety w Energylandii?",
    answer:
      "Tak. Dla grup 25+ osób Energylandia oferuje rabaty 20-40% (zależnie od sezonu i wielkości grupy). Trzeba zgłosić grupową rezerwację 14 dni przed wyjazdem na grupowy@energylandia.pl. Pomagamy klientom w tej rezerwacji za darmo — kontaktujemy się z parkiem w Waszym imieniu, otrzymujecie ostateczną cenę na piśmie przed wyjazdem.",
  },
  {
    question: "Jaki autokar dla 45-osobowej wycieczki szkolnej do Energylandii?",
    answer:
      "Standardowo Iveco Crossway 49 (klasa ★★★★, 49 fotelek, klimatyzacja strefowa, WC obowiązkowe, USB, mikrofon kierowcy dla nauczyciela). WC jest krytyczne — 2h 10min przejazdu bez toalety to za długo dla klas 4-7. Pasy bezpieczeństwa 3-punktowe w każdym fotelu (wymóg MEN). Ubezpieczenie 100 000 EUR/pasażer.",
  },
  {
    question: "Czy można zorganizować wycieczkę 2-dniową z noclegiem w Hotelu Energylandia?",
    answer:
      "Tak. Dzień 1 — Strefa Bajek + Smoków, nocleg w Hotelu Energylandia (250-380 zł/os w 2-os pokoju ze śniadaniem). Dzień 2 — Aqualantis water park + powrót. Cena autokaru 4 500 zł 50-os (wliczone: 2× przejazd + parking + nocleg kierowcy 220 zł). Bilety do parku i Aqualantis kupujecie osobno.",
  },
  {
    question: "Ile wcześniej rezerwować autokar do Energylandii?",
    answer:
      "W zwykłe dni 2-3 tygodnie wystarczą. Długie weekendy (1-3 maja, Boże Ciało, 11-15 sierpnia): minimum 6 tygodni. Wakacyjne soboty (lipiec-sierpień): 4 tygodnie. Dla wycieczek szkolnych rekomendujemy rezerwację po zatwierdzeniu programu w szkole — zwykle 4-6 tygodni przed wyjazdem.",
  },
];

const schemaObject = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.autokar-busko.pl/pl/trasy/krakow-energylandia-autokar#service",
      name: "Wynajem autokaru Krakow → Energylandia (Zator)",
      description:
        "Wynajem autokaru lub busa na wycieczkę szkolną lub urodziny do Energylandii w Zatorze. 155 km autostradą A4 i ekspresową S52, czas przejazdu 2h 10min. Pojazdy 16-50 osób z WC i mikrofonem dla nauczyciela. Parking autokarów w Energylandii darmowy. Pomoc z grupową rezerwacją biletów.",
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
        { "@type": "City", name: "Zator" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cennik trasy Krakow-Energylandia 2026",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Bus 20-osobowy Krakow-Energylandia wycieczka 1-dniowa",
            price: "1700",
            priceCurrency: "PLN",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Autokar 35-osobowy Krakow-Energylandia wycieczka 1-dniowa",
            price: "2300",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Energylandia wycieczka 1-dniowa",
            price: "2800",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Energylandia wycieczka 2-dniowa z Aqualantis",
            price: "4500",
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
        "@type": "Place",
        name: "Energylandia",
        address: {
          "@type": "PostalAddress",
          streetAddress: "ul. Parkowa 1",
          addressLocality: "Zator",
          postalCode: "32-640",
          addressCountry: "PL",
        },
      },
      distance: "155 km",
      expectedArrivalTime: "PT2H10M",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Ile kosztuje wynajem autokaru z Krakowa do Energylandii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dla autokaru 50-osobowego wycieczka 1-dniowa: 2 800 zł (wyjazd 5:30, powrót 21:30). Bus 20-osobowy: 1 700 zł. Wycieczka 2-dniowa z noclegiem kierowcy: 4 500 zł autokar 50-os. Ceny obejmują paliwo, kierowcę, opłaty A4, ubezpieczenie i darmowy parking w Energylandii.",
          },
        },
        {
          "@type": "Question",
          name: "Ile trwa przejazd Krakow-Energylandia autokarem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Autostradą A4 i ekspresową S52: 2 godziny 10 minut (155 km) w typowych warunkach. Wczesnym rankiem (5:30-7:00) — 2h 00min. Sobota w lipcu z korkiem do parkingu Energylandii: do 2h 40min.",
          },
        },
        {
          "@type": "Question",
          name: "O której wyjechać z Krakowa żeby zdążyć na otwarcie Energylandii o 10:00?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Rekomendujemy 5:30 z Krakowa (z postojem 15 min w MOP Brzezie) → przyjazd 8:15 → wejście do parku 9:30 (zorganizowane grupy mają wcześniejsze wejście). To daje 9,5h pełnego programu zanim park się zamknie.",
          },
        },
        {
          "@type": "Question",
          name: "Czy autokar może parkować w Energylandii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak, parking autokarów w Energylandii jest darmowy dla zorganizowanych grup. Kierowca czeka przez cały dzień, pilnuje bagażu dzieci, jest dostępny w razie wcześniejszego powrotu. Parking jest 200 m od bramy głównej.",
          },
        },
        {
          "@type": "Question",
          name: "Czy są zniżki grupowe na bilety w Energylandii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. Dla grup 25+ osób Energylandia oferuje rabaty 20-40%. Trzeba zgłosić grupową rezerwację 14 dni przed wyjazdem na grupowy@energylandia.pl. Pomagamy klientom w tej rezerwacji za darmo.",
          },
        },
        {
          "@type": "Question",
          name: "Jaki autokar dla 45-osobowej wycieczki szkolnej do Energylandii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standardowo Iveco Crossway 49 (klasa ★★★★, 49 fotelek, klimatyzacja strefowa, WC obowiązkowe, USB, mikrofon kierowcy). WC krytyczne — 2h 10min przejazdu bez toalety to za długo dla klas 4-7. Pasy bezpieczeństwa 3-punktowe w każdym fotelu (wymóg MEN). Ubezpieczenie 100 000 EUR/pasażer.",
          },
        },
        {
          "@type": "Question",
          name: "Czy można wycieczkę 2-dniową z noclegiem w Hotelu Energylandia?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. Dzień 1 — Strefa Bajek + Smoków, nocleg w Hotelu Energylandia (250-380 zł/os ze śniadaniem). Dzień 2 — Aqualantis water park + powrót. Cena autokaru 4 500 zł 50-os (wliczone: 2× przejazd + parking + nocleg kierowcy).",
          },
        },
        {
          "@type": "Question",
          name: "Ile wcześniej rezerwować autokar do Energylandii?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "W zwykłe dni 2-3 tygodnie wystarczą. Długie weekendy (1-3 maja, Boże Ciało, 15 sierpnia): minimum 6 tygodni. Wakacyjne soboty (lipiec-sierpień): 4 tygodnie. Dla wycieczek szkolnych — po zatwierdzeniu programu w szkole, zwykle 4-6 tygodni przed.",
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
          name: "Krakow → Energylandia",
          item: "https://www.autokar-busko.pl/pl/trasy/krakow-energylandia-autokar",
        },
      ],
    },
  ],
};

function ResponsivePricingTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-black text-[#639922]">Cena wynajmu autokaru Krakow-Energylandia (cennik 2026)</h2>
        <p className="mb-8 text-gray-300">
          Ceny brutto (8% VAT), zawierają: paliwo, kierowcę, opłaty A4 (~52 zł w obie strony), ubezpieczenie OC/AC/NNW 100 000 EUR, parking w Energylandii (darmowy), 2 postoje kawowe. Bilety do parku kupujecie osobno.
        </p>

        {/* Mobile cards */}
        <div className="space-y-4 md:hidden">
          {routePricingRows.map((row) => (
            <div key={row.vehicle} className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              <h3 className="text-lg font-bold text-[#639922]">{row.vehicle}</h3>
              <p className="mt-1 text-sm text-gray-300">Pasażerów: {row.passengers}</p>
              <dl className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between gap-3"><dt>One-way</dt><dd className="font-bold">{row.oneWay}</dd></div>
                <div className="flex justify-between gap-3"><dt>Wycieczka 1-dniowa</dt><dd className="font-bold">{row.excursion1day}</dd></div>
                <div className="flex justify-between gap-3"><dt>Wycieczka 2-dniowa z Aqualantis</dt><dd className="font-bold">{row.excursion2day}</dd></div>
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
                <th className="px-4 py-3">One-way (Krakow → Zator)</th>
                <th className="px-4 py-3">Wycieczka 1-dniowa (typowy schemat 6-19)</th>
                <th className="px-4 py-3">Wycieczka 2-dniowa z Aqualantis</th>
              </tr>
            </thead>
            <tbody>
              {routePricingRows.map((row) => (
                <tr key={row.vehicle} className="border-t border-[#2a2a2a] bg-[#141414]">
                  <td className="px-4 py-3 font-semibold">{row.vehicle}</td>
                  <td className="px-4 py-3">{row.passengers}</td>
                  <td className="px-4 py-3 font-bold">{row.oneWay}</td>
                  <td className="px-4 py-3 font-bold">{row.excursion1day}</td>
                  <td className="px-4 py-3 font-bold">{row.excursion2day}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 text-sm text-gray-300">
          <p className="font-semibold text-white mb-2">Co podnosi cenę:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>Długie weekendy</strong> (1-3 maja, Boże Ciało, 11-15 sierpnia): +15-20%</li>
            <li><strong>Sobota w lipcu / sierpniu</strong>: +10% (szczyt sezonowy, korki na S52)</li>
          </ul>
          <p className="font-semibold text-white mb-2">Co NIE podnosi ceny:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Parking autokaru w Energylandii — DARMOWY dla zorganizowanych grup</li>
            <li>Czekanie kierowcy 10-12h podczas pobytu dzieci w parku</li>
            <li>Opłaty A4 — wliczamy zawsze</li>
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
        <h2 className="mb-4 text-3xl font-black text-[#639922]">Czas przejazdu i trasa Krakow-Energylandia</h2>
        <p className="mb-6 text-gray-300">
          <strong className="text-white">Trasa standardowa:</strong> A4 Krakow → Kraków → S52 Wadowice → DW781 → Zator (ul. Parkowa 1). 155 km, typowy czas 2h 10min. Postój obowiązkowy: MOP Brzezie (Wieliczka, 92 km od Krakowa) — 15 min.
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
                <th className="px-4 py-3">Czas Krakow → Energylandia</th>
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

        <div className="mt-6 rounded-xl border border-[#639922]/30 bg-[#EAF3DE]0/10 p-5 text-sm">
          <p className="font-semibold text-[#97C459] mb-1">Zoptymalizowany dzień w Energylandii:</p>
          <ul className="space-y-1 text-gray-300">
            <li><strong className="text-white">05:30</strong> — odjazd z Krakowa</li>
            <li><strong className="text-white">06:30</strong> — postój MOP Brzezie (15 min)</li>
            <li><strong className="text-white">08:15</strong> — przyjazd Energylandia, oczekiwanie pod bramą</li>
            <li><strong className="text-white">09:30</strong> — wejście do parku (zorganizowane grupy mają wcześniejsze wejście)</li>
            <li><strong className="text-white">09:30 – 19:00</strong> — pobyt w parku (9,5h pełnego programu)</li>
            <li><strong className="text-white">19:15</strong> — odjazd</li>
            <li><strong className="text-white">21:30</strong> — powrót do Krakowa</li>
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
        <h2 className="mb-4 text-3xl font-black text-[#639922]">Jaki autokar dla wycieczki do Energylandii</h2>
        <p className="mb-6 text-gray-300">
          Wycieczki szkolne to 90% klas 4-8 — dzieci podekscytowane, organizacja kluczowa. <strong className="text-white">WC w autokarze jest obowiązkowe</strong> dla 2h 10min trasy. Pasy bezpieczeństwa 3-punktowe w każdym fotelu (wymóg MEN).
        </p>

        {/* Mobile cards */}
        <div className="space-y-4 md:hidden">
          {groupVehicleRows.map((row) => (
            <div key={row.groupSize} className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-4">
              <p className="font-bold text-[#639922]">{row.groupSize}</p>
              <p className="mt-1 font-semibold">{row.vehicle}</p>
              <p className="mt-2 text-sm text-gray-300">{row.reason}</p>
            </div>
          ))}
        </div>

        {/* Desktop table */}
        <div className="hidden overflow-x-auto md:block">
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
                  <td className="px-4 py-3 font-semibold text-[#639922]">{row.groupSize}</td>
                  <td className="px-4 py-3 font-semibold">{row.vehicle}</td>
                  <td className="px-4 py-3 text-gray-300">{row.reason}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
      canonical: "https://www.autokar-busko.pl/pl/trasy/krakow-energylandia-autokar",
    },
    openGraph: {
      title: "Wycieczka do Energylandii z Krakowa — autokar od 1 700 zł | Autokar Busko",
      description:
        "155 km A4+S52 w 2h 10min. Wycieczki szkolne, urodziny, grupy rodzinne. Parking autokarów GRATIS w parku. Ubezpieczenie szkolne na piśmie.",
      url: "https://www.autokar-busko.pl/pl/trasy/krakow-energylandia-autokar",
      type: "website",
      locale: l === "pl" ? "pl_PL" : "en_US",
    },
  };
}

export default async function KrakowEnergylandiaPage({
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
              Faktura proforma dla szkoły / rady rodziców bez zaliczki. Parking w parku gratis. Pomoc z rezerwacją biletów grupowych (-20-40%).
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
            <p className="mb-6 text-gray-300">
              Dla wycieczek szkolnych podstawiamy <strong className="text-white">bezpośrednio pod szkołę</strong> w obrębie 30 km od centrum Krakowa bez dopłaty.
            </p>
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

      {/* ENERGYLANDIA INFO */}
      {l === "pl" && (
        <section className="bg-[#111111] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-black text-[#639922]">Energylandia — co warto wiedzieć przed wyjazdem</h2>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
                <h3 className="mb-3 text-lg font-bold text-[#639922]">Godziny otwarcia 2026</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong className="text-white">Sezon główny (czerwiec-sierpień):</strong> 10:00 – 21:00 (Aqualantis: 10:00-19:00)</li>
                  <li><strong className="text-white">Pre/post sezon (kwiecień-maj, wrzesień-październik):</strong> 10:00 – 18:00 (niektóre dni 11:00–17:00)</li>
                  <li><strong className="text-white">Marzec:</strong> tylko weekendy 10:00 – 17:00</li>
                </ul>
                <p className="mt-3 text-xs text-gray-400">Sprawdź zawsze przed wyjazdem na energylandia.pl — godziny mogą się zmieniać.</p>
              </div>

              <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
                <h3 className="mb-3 text-lg font-bold text-[#639922]">Co warto rezerwować z wyprzedzeniem</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong className="text-white">Bilety grupowe</strong> — dla grup 25+ osób zniżki -40%. Zgłoszenie 14 dni przed: grupowy@energylandia.pl</li>
                  <li><strong className="text-white">Wejście do Aqualantis</strong> — w soboty wakacje limity, lepiej kupić online</li>
                  <li><strong className="text-white">Lunch grupowy</strong> — restauracja "Smacznego" przyjmuje rezerwacje grupowe (pizza, makaron, frytki)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* GROUP VEHICLE TABLE */}
      <GroupVehicleTable />

      {/* SAFETY DOCS */}
      {l === "pl" && (
        <section className="bg-[#111111] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-black text-[#639922]">Bezpieczeństwo dla dzieci — co dokumentujemy</h2>
            <p className="mb-6 text-gray-300">
              Wycieczki szkolne to nasz najbardziej wrażliwy segment. Co przekazujemy szkole <strong className="text-white">na piśmie przed wyjazdem</strong>:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-4 text-sm">
                <span className="text-green-400 text-base">✅</span>
                <span><strong className="text-white">Wypis z KREPTD</strong> kierowcy — potwierdza aktualną licencję D</span>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-4 text-sm">
                <span className="text-green-400 text-base">✅</span>
                <span><strong className="text-white">Zaświadczenie o badaniach psychotechnicznych</strong> kierowcy (badanie co 5 lat)</span>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-4 text-sm">
                <span className="text-green-400 text-base">✅</span>
                <span><strong className="text-white">Polisa OC/AC/NNW pasażerów</strong> z sumą 100 000 EUR / pasażer — kopia przed wyjazdem</span>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-4 text-sm">
                <span className="text-green-400 text-base">✅</span>
                <span><strong className="text-white">Protokół przeglądu autokaru</strong> — co 6 mies. i kontrola dnia wyjazdu</span>
              </li>
              <li className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-4 text-sm">
                <span className="text-green-400 text-base">✅</span>
                <span><strong className="text-white">Pomoc w rejestracji w systemie SIO</strong> (System Informacji Oświatowej) — pomagamy wypełnić dane przewoźnika</span>
              </li>
            </ul>
          </div>
        </section>
      )}

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

      {/* 2-DAY TRIP */}
      {l === "pl" && (
        <section className="bg-[#111111] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-black text-[#639922]">Wycieczka 2-dniowa z noclegiem w Energylandii</h2>
            <p className="mb-6 text-gray-300">
              Coraz częściej rodzice / szkoły wybierają wycieczkę 2-dniową — w 1 dzień nie zdąży się zobaczyć wszystkich 75+ atrakcji.
            </p>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
                <h3 className="mb-3 text-lg font-bold text-[#639922]">Standardowy schemat 2-dniowy</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><strong className="text-white">Dzień 1:</strong> odjazd Krakow 6:00 → przyjazd 8:30 → cały dzień w parku (Strefa Bajek + Smoków) → kolacja w hotelu 19:00 → nocleg</li>
                  <li><strong className="text-white">Dzień 2:</strong> śniadanie 8:00 → Aqualantis 10:00-15:00 → lunch 15:30 → odjazd 17:00 → Krakow 19:30</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
                <h3 className="mb-3 text-lg font-bold text-[#639922]">Cena i co jest w cenie</h3>
                <p className="text-sm text-gray-300 mb-3">
                  <strong className="text-white">4 500 zł autokar 50-os</strong> — wliczone: 2× przejazd + parking + nocleg kierowcy (220 zł/noc w hotelu parku).
                </p>
                <p className="text-sm text-gray-300">
                  Hotel Energylandia: 250-380 zł/osoba w pokoju 2-os ze śniadaniem. Bilety do parku i Aqualantis kupujecie osobno (pomagamy z grupową rezerwacją).
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BIRTHDAY PARTIES */}
      {l === "pl" && (
        <section className="bg-[#1a1a1a] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-black text-[#639922]">Imprezy urodzinowe w Energylandii</h2>
            <p className="mb-4 text-gray-300">
              Bardzo popularny scenariusz: rodzice rezerwują autokar dla 15-25 dzieci na urodziny. Wynajem <strong className="text-white">busa 20-os</strong> (Mercedes Sprinter 19+2): <strong className="text-white">1 700 zł na cały dzień</strong> — kierowca jedzie, czeka, wraca.
            </p>
            <div className="rounded-xl border border-[#639922]/30 bg-[#EAF3DE]0/10 p-5 text-sm">
              <p className="font-semibold text-[#97C459] mb-2">Przykładowy budżet dla 25 dzieci:</p>
              <ul className="space-y-1 text-gray-300">
                <li>Wynajem busa 20-os: <strong className="text-white">1 700 zł</strong></li>
                <li>Bilety do Energylandii 25 × ~169 zł: <strong className="text-white">~4 225 zł</strong></li>
                <li>Pizza w restauracji parku: <strong className="text-white">~750 zł</strong></li>
                <li className="border-t border-[#639922]/30 pt-1 font-bold text-white">Razem: ~6 700 zł → ~270 zł / dziecko za pełen dzień</li>
              </ul>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Dla rodzica organizatora urodzin: zaliczka 30% przy rezerwacji, reszta po przejeździe.
            </p>
          </div>
        </section>
      )}

      {/* BOOKING STEPS */}
      {l === "pl" && (
        <section className="bg-[#111111] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-black text-[#639922]">Jak rezerwować — wycieczka do Energylandii</h2>
            <ol className="space-y-4">
              {[
                { step: "1", text: "Zadzwoń (41 345 32 25) lub wyślij formularz z datą + liczbą dzieci/dorosłych + sygnałem czy chcecie wjazd na otwarcie 10:00, czy później." },
                { step: "2", text: "Otrzymujesz wycenę w 15-30 min + sugestie godzin wyjazdu z Krakowa (mamy doświadczenie z 47 wycieczek 2025)." },
                { step: "3", text: "Dla szkoły / rady rodziców: faktura proforma bez zaliczki — pismo z pieczęcią dyrektora wystarcza. Dla urodzin: zaliczka 30%." },
                { step: "4", text: "2 tygodnie przed wycieczką: my pomagamy zgłosić grupową rezerwację w Energylandii (zniżki -20-40%) — gratis dla naszych klientów." },
                { step: "5", text: "Przed wyjazdem: komplet dokumentów bezpieczeństwa (KREPTD, polisa, badania kierowcy) wysyłamy do szkoły mailem." },
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
                <li className="text-[#97C459] font-medium">Wyjątek pogodowy: zamknięcie parku z powodu burz — pełny zwrot, bez kosztów.</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* WHY US */}
      <FeatureBox
        heading={l === "pl" ? "Dlaczego Autokar Busko — konkretnie dla wycieczek dziecięcych" : undefined}
        features={whyUsFeatures}
      />

      {/* POPULAR ROUTE VARIANTS */}
      {l === "pl" && (
        <section className="bg-[#111111] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-black text-[#639922]">Popularne wariacje trasy</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "Krakow → Energylandia → Krakow (klasyk 1-dniowy)", detail: "310 km, 2 800 zł autokar 50-os" },
                { label: "Krakow → Energylandia + Zatorland (2 parki w 1 dzień)", detail: "320 km, 3 200 zł — Zatorland: park z dinozaurami, 5 km od Energylandii" },
                { label: "Krakow → Energylandia → Wadowice", detail: "340 km, 3 400 zł — popularne dla parafii (dom Jana Pawła II)" },
                { label: "Wycieczka 2-dniowa (Energylandia + Aqualantis + nocleg)", detail: "4 500 zł autokar 50-os" },
                { label: "Krakow → Energylandia → Auschwitz (klasy 7-8)", detail: "380 km z noclegiem, 5 800 zł — łączy rozrywkę z lekcją historii" },
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
                { href: "/pl/wycieczki-szkolne", label: "Wycieczki szkolne", detail: "Pełna oferta dla szkół" },
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
              Faktura proforma dla szkoły bez zaliczki. Parking autokarów GRATIS. Pomagamy z grupową rezerwacją biletów (-20-40%). Wycena w 15 min.
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="tel:+48413453225" variant="primary">
              {l === "pl" ? "Zadzwoń: 41 345 32 25" : "Call +48 41 345 32 25"}
            </CTAButton>
            <CTAButton href={`/${l}/wycieczki-szkolne`} variant="secondary">
              {l === "pl" ? "Wycieczki szkolne — pełna oferta" : "School trips"}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
