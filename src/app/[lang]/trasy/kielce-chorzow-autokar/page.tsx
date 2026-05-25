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
  pl: "Autokar Kielce → Chorzów (Park Śląski, Legendia, Stadion) — od 1 900 zł, 170 km, 2h 15min",
  en: "Coach hire Krakow → Chorzów — 170 km, from PLN 1900",
  de: "Coach hire Krakow → Chorzów — 170 km, from PLN 1900",
  ru: "Coach hire Krakow → Chorzów — 170 km, from PLN 1900",
  ar: "Coach hire Krakow → Chorzów — 170 km, from PLN 1900",
  es: "Coach hire Krakow → Chorzów — 170 km, from PLN 1900",
  fr: "Coach hire Krakow → Chorzów — 170 km, from PLN 1900",
};

const metaDescriptions: Record<Language, string> = {
  pl: "Autokar Kielce-Chorzów: Park Śląski (parking gratis 12h), Legendia, Stadion Śląski (mecze, koncerty), ZOO, Planetarium. Wycieczki szkolne, imprezy firmowe. Tel. 41 345 32 25.",
  en: "Coach from Krakow to Chorzów with pricing for 20/35/50 passengers. Silesian Park (free parking 12h), Legendia, Stadium. School trips, corporate events. Call +48 41 345 32 25.",
  de: "Coach from Krakow to Chorzów with pricing for 20/35/50 passengers. Silesian Park (free parking 12h), Legendia, Stadium. School trips, corporate events. Call +48 41 345 32 25.",
  ru: "Coach from Krakow to Chorzów with pricing for 20/35/50 passengers. Silesian Park (free parking 12h), Legendia, Stadium. School trips, corporate events. Call +48 41 345 32 25.",
  ar: "Coach from Krakow to Chorzów with pricing for 20/35/50 passengers. Silesian Park (free parking 12h), Legendia, Stadium. School trips, corporate events. Call +48 41 345 32 25.",
  es: "Coach from Krakow to Chorzów with pricing for 20/35/50 passengers. Silesian Park (free parking 12h), Legendia, Stadium. School trips, corporate events. Call +48 41 345 32 25.",
  fr: "Coach from Krakow to Chorzów with pricing for 20/35/50 passengers. Silesian Park (free parking 12h), Legendia, Stadium. School trips, corporate events. Call +48 41 345 32 25.",
};

const heroTitles: Record<Language, string> = {
  pl: "Wynajem autokaru Krakow → Chorzów (Park Śląski + Legendia + Stadion) — 170 km, od 1 900 zł, 2h 15min",
  en: "Coach hire Krakow → Chorzów from PLN 1900",
  de: "Coach hire Krakow → Chorzów from PLN 1900",
  ru: "Coach hire Krakow → Chorzów from PLN 1900",
  ar: "Coach hire Krakow → Chorzów from PLN 1900",
  es: "Coach hire Krakow → Chorzów from PLN 1900",
  fr: "Coach hire Krakow → Chorzów from PLN 1900",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Chorzów to nasza najpopularniejsza wycieczka szkolna — w jednym miejscu masz 4 atrakcje: Park Śląski (5 km², wstęp gratis, jeden z największych parków miejskich Europy), Legendię (parka rozrywki, klasa europejska), Stadion Śląski (mecze reprezentacji, koncerty) i ZOO. W 2025 roku zawieźliśmy tu 62 wycieczki szkolne — najczęstsze pytanie: 'czy da się jedno dzień Park + Legendia + ZOO?'. Odp: tak, jeśli wyjedziesz o 5:30. A4 + DK86 = 2h 15min. Parking w Parku darmowy do 12h.",
  en: "Popular school trip destination with 4 attractions in one location: Silesian Park (free entry, largest park in Poland), Legendia amusement park, Silesian Stadium, Zoo. 170 km from Krakow.",
  de: "Popular school trip destination with 4 attractions in one location: Silesian Park (free entry, largest park in Poland), Legendia amusement park, Silesian Stadium, Zoo. 170 km from Krakow.",
  ru: "Popular school trip destination with 4 attractions in one location: Silesian Park (free entry, largest park in Poland), Legendia amusement park, Silesian Stadium, Zoo. 170 km from Krakow.",
  ar: "Popular school trip destination with 4 attractions in one location: Silesian Park (free entry, largest park in Poland), Legendia amusement park, Silesian Stadium, Zoo. 170 km from Krakow.",
  es: "Popular school trip destination with 4 attractions in one location: Silesian Park (free entry, largest park in Poland), Legendia amusement park, Silesian Stadium, Zoo. 170 km from Krakow.",
  fr: "Popular school trip destination with 4 attractions in one location: Silesian Park (free entry, largest park in Poland), Legendia amusement park, Silesian Stadium, Zoo. 170 km from Krakow.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zaplanuj wycieczkę — 41 345 32 25",
  en: "Plan your trip now",
  de: "Plan your trip now",
  ru: "Plan your trip now",
  ar: "Plan your trip now",
  es: "Plan your trip now",
  fr: "Plan your trip now",
};

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Zaplanuj wycieczkę do Chorzowa",
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
    oneWay: "1 000 zł",
    excursion1day: "1 900 zł",
    matchOrConcert: "2 300 zł",
  },
  {
    vehicle: "Autokar Iveco Crossway 35",
    passengers: "30-35",
    oneWay: "1 350 zł",
    excursion1day: "2 500 zł",
    matchOrConcert: "3 000 zł",
  },
  {
    vehicle: "Autokar Setra ComfortClass 50",
    passengers: "45-50",
    oneWay: "1 700 zł",
    excursion1day: "3 000 zł",
    matchOrConcert: "3 600 zł",
  },
  {
    vehicle: "Autokar VIP 50 (skóra, fotele 2+1)",
    passengers: "40-45",
    oneWay: "2 050 zł",
    excursion1day: "3 600 zł",
    matchOrConcert: "4 300 zł",
  },
];

const travelTimeRows = [
  { timeOfDay: "5:00 – 7:00", duration: "2h 05min", note: "najszybciej, pusty A4" },
  { timeOfDay: "7:00 – 9:00", duration: "2h 20min – 2h 45min", note: "korek na wjeździe do aglomeracji śląskiej" },
  { timeOfDay: "10:00 – 14:00", duration: "2h 15min", note: "typowy czas wycieczek" },
  { timeOfDay: "14:00 – 18:00", duration: "2h 30min – 3h 00min", note: "szczyt śląski, węzeł Katowice wąskie gardło" },
  { timeOfDay: "19:00 – 22:00", duration: "2h 10min", note: "spokojnie" },
  { timeOfDay: "22:00 – 4:00", duration: "2h 00min", note: "nocą najszybciej — powrót z meczu/koncertu bez opóźnień" },
];

const groupVehicleRows = [
  {
    groupSize: "15-25 osób",
    vehicle: "Mercedes Sprinter 19+2 / Iveco Daily 24",
    reason: "komfortowo dla urodzin, pół klasy, pielgrzymki — mikrofon dla opiekuna",
  },
  {
    groupSize: "26-49 osób",
    vehicle: "Iveco Crossway 49 / Setra S 415 (★★★★, WC obowiązkowo)",
    reason: "WC obowiązkowe na 2h 15min — dla klas szkolnych wymóg MEN. Klimatyzacja strefowa.",
  },
  {
    groupSize: "50+ osób",
    vehicle: "Setra TopClass 50 / Neoplan Cityliner 53 (★★★★★, fotele 2+1)",
    reason: "dla dużych grup lub koncertów na Stadionie — komfort dla powrotu nocą",
  },
];

const pickupPoints = [
  "Szkoła — dla wycieczek szkolnych, w obrębie 30 km bez dopłaty",
  "ul. Poprzeczna 1 (nasza baza)",
  "Galeria Echo — dla grup 40+",
  "PKP Krakow — Plac Niepodległości",
  "Plaza Krakow",
  "Galeria Korona",
];

const includedItems = [
  "Paliwo ON Premium",
  "Kierowca z licencją D + badania psychotechniczne + świadectwo kwalifikacji",
  "Wszystkie opłaty A4 Krakow-Katowice (~52 zł w obie strony)",
  "Ubezpieczenie OC/AC/NNW pasażerów z sumą 100 000 EUR / pasażer",
  "Parking w Parku Śląskim do 12h (gratis dla autokarów grupowych)",
  "2 postoje kawowe (MOP Brzezie + Wojkowice)",
  "Mikrofon kierowcy dla nauczyciela / opiekuna",
];

const excludedItems = [
  "Bilety wstępu do Legendii, ZOO, Planetarium, Stadionu",
  "Parking na Stadionie Śląskim P1 w dni meczowe (35 zł/dzień)",
  "Drugi kierowca dla powrotu po koncertach po 24:00 (opcjonalnie +500 zł)",
  "Nocleg kierowcy w hotelu pod Katowicami (200-250 zł, alternatywa dla 2 kierowców)",
];

const whyUsFeatures = [
  {
    icon: "🎢",
    title: "62 wycieczki do Chorzowa w 2025",
    description: "Średnio 2 tygodniowo w sezonie szkolnym. Kierowcy znają każde wejście do Parku, parking Legendii, Stadion. Zastępczy autokar pod Chorzowem w 60 minut.",
  },
  {
    icon: "🅿️",
    title: "Parking w Parku Śląskim — darmowy 12h",
    description: "Wjeżdżamy na ul. Chorzowską 99 (główne wejście). Kierowca pilnuje bagażu, dzieci przychodzą 'się przebrać' między atrakcjami. Nieporównywalne z konkurencją płacącą 5 zł/h.",
  },
  {
    icon: "🎫",
    title: "Pomagamy z grupowymi biletami Legendii",
    description: "Rezerwujemy dla Was rabat szkolny od 65 zł/osoba (norma 99 zł). Oszczędzacie 30 zł/dziecko × grupa = łatwo 1 500 zł na autokarze 50-os.",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje wynajem autokaru z Krakowa do Chorzowa?",
    answer:
      "Dla autokaru 50-osobowego wycieczka 1-dniowa 'Park + Legendia': 3 000 zł (wyjazd 6:00, powrót 19:45). Bus 20-osobowy: 1 900 zł. Dla wyjazdu na mecz/koncert na Stadionie Śląskim z powrotem nocnym: 3 600 zł autokar 50-os. Ceny obejmują paliwo, kierowcę, wszystkie opłaty A4, ubezpieczenie i DARMOWY parking w Parku Śląskim do 12h. Bilety wstępu kupujecie osobno.",
  },
  {
    question: "Ile trwa przejazd Krakow-Chorzów autokarem?",
    answer:
      "Autostradą A4 + DK86: 2 godziny 15 minut (170 km) w typowych warunkach. Rano przed 7:00 – 2h 05min. W godzinach szczytu z korkiem na węźle Katowice-Murckowska: do 3h 00min.",
  },
  {
    question: "Czy w jeden dzień da się zwiedzić Park Śląski, Legendię i ZOO?",
    answer:
      "Realistycznie nie wszystkie 4 jednocześnie. Możliwe schematy: (1) Park + Legendia — typowy dla klas 4-8, (2) Park + ZOO + Planetarium — dla klas młodszych, (3) Park + Legendia krótka (3-4h) — dla aktywnych klas. Pomagamy w wycenie wybrać wariant na podstawie wieku grupy i czasu na poszczególne atrakcje.",
  },
  {
    question: "Jaki autokar dla 50-osobowej wycieczki szkolnej do Chorzowa?",
    answer:
      "Iveco Crossway 49 lub Setra ComfortClass S 415 GT-HD (★★★★, 49 fotelek, WC obowiązkowe, klimatyzacja strefowa, mikrofon kierowcy). WC to wymóg MEN — dla klas 4-8 to 2h 15min jazdy bez możliwości zatrzymania. Pasy bezpieczeństwa 3-punktowe w każdym fotelu.",
  },
  {
    question: "Czy autokar musi parkowaćgdzieś, czy może czekać?",
    answer:
      "Autokar parkuje przy ul. Chorzowskiej 99 w Parku Śląskim — DARMOWO do 12h dla autokarów grupowych. Kierowca czeka cały dzień, pilnuje bagażu. Dzieci mogą wrócić 'się przebrać' po Legendii, zostawić mokre rzeczy, zmienić się przed ZOO. To coś, co konkurencja nie oferuje — bo muszą płacić za parking.",
  },
  {
    question: "Ile wcześniej rezerwować autokar do Chorzowa?",
    answer:
      "W zwykłe dni 2-3 tygodnie wystarczą. Dla MECZU REPREZENTACJI POLSKI na Stadionie Śląskim lub dużych koncertów (Coldplay, Imagine Dragons): minimum 10 tygodni — parking P1 wypeł nia się błyskawicznie. Dla wycieczek szkolnych w sezonie wiosennym (maj-czerwiec): 6-8 tygodni przed.",
  },
  {
    question: "Ile kosztuje bilet do Legendii dla grupy szkolnej?",
    answer:
      "Bilet standardowy 99 zł (dorosły), 79 zł (dziecko 3-13 lat). BILET GRUPOWY SZKOLNY od 65 zł/osoba dla grup 25+ — oszczędzacie 30 zł/dziecko. Pomagamy Wam zrobić rezerwację — kontaktujemy się z Legendią w Waszym imieniu, dostajecie ostateczną cenę przed wyjazdem.",
  },
  {
    question: "Czy autokar Kielce-Chorzów jest dostępny na mecz reprezentacji Polski?",
    answer:
      "Tak. Schemat: wyjazd 14:00 Krakow, parking P1 Stadion Śląski 16:30, mecz 20:45-22:30, powrót 23:00, Krakow 01:15. Cena 3 600 zł autokar 50-os (mieści się w limicie jednego kierowcy 11h). Dla powrotu po koncertach kończących się o 23:30 — opcja z 2 kierowcami za 4 100 zł albo nocleg w hotelu pod Katowicami za 200 zł i powrót następnego dnia.",
  },
];

const schemaObject = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.autokar-busko.pl/pl/trasy/krakow-chorzow-autokar#service",
      name: "Wynajem autokaru Krakow → Chorzów (Park Śląski, Legendia, Stadion Śląski)",
      description:
        "Wynajem autokaru lub busa na wycieczkę do Chorzowa: Park Śląski (wstęp gratis, 5 km², największy park miejski w Polsce), Legendia (wesołe miasteczko, klasa europejska), Stadion Śląski (mecze reprezentacji Polski, koncerty), ZOO Śląskie, Planetarium. 170 km autostradą A4 + DK86, czas przejazdu 2h 15min. Parking w Parku DARMOWY do 12h. Pojazdy 16-50 osób z WC i mikrofonem kierowcy. Wycieczki szkolne, imprezy firmowe, mecze, koncerty.",
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
        { "@type": "City", name: "Chorzów" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Cennik trasy Krakow-Chorzów 2026",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Bus 20-osobowy Krakow-Chorzów wycieczka 1-dniowa",
            price: "1900",
            priceCurrency: "PLN",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Autokar 35-osobowy Krakow-Chorzów wycieczka 1-dniowa",
            price: "2500",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Chorzów wycieczka 1-dniowa",
            price: "3000",
            priceCurrency: "PLN",
          },
          {
            "@type": "Offer",
            name: "Autokar 50-osobowy Krakow-Stadion Śląski mecz/koncert",
            price: "3600",
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
        name: "Chorzów",
        address: "Polska, województwo śląskie",
      },
      distance: "170 km",
      expectedArrivalTime: "PT2H15M",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Ile kosztuje wynajem autokaru z Krakowa do Chorzowa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dla autokaru 50-osobowego wycieczka 1-dniowa 'Park + Legendia': 3 000 zł (wyjazd 6:00, powrót 19:45). Bus 20-osobowy: 1 900 zł. Dla wyjazdu na mecz/koncert na Stadionie Śląskim z powrotem nocnym: 3 600 zł autokar 50-os. Ceny obejmują paliwo, kierowcę, wszystkie opłaty A4, ubezpieczenie i DARMOWY parking w Parku Śląskim do 12h.",
          },
        },
        {
          "@type": "Question",
          name: "Ile trwa przejazd Krakow-Chorzów autokarem?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Autostradą A4 + DK86: 2 godziny 15 minut (170 km) w typowych warunkach. Rano przed 7:00 – 2h 05min. W szczycie: do 3h 00min.",
          },
        },
        {
          "@type": "Question",
          name: "Czy w jeden dzień da się zwiedzić Park Śląski, Legendię i ZOO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Realistycznie nie wszystkie 4 jednocześnie. Możliwe schematy: Park + Legendia (typowy dla klas 4-8), Park + ZOO + Planetarium (dla młodszych), Park + Legendia krótka (dla aktywnych). Pomagamy wybrać wariant.",
          },
        },
        {
          "@type": "Question",
          name: "Jaki autokar dla 50-osobowej wycieczki szkolnej do Chorzowa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Iveco Crossway 49 lub Setra ComfortClass S 415 GT-HD (★★★★, WC obowiązkowe, klimatyzacja, mikrofon). WC to wymóg MEN — na 2h 15min jazdy bez możliwości zatrzymania.",
          },
        },
        {
          "@type": "Question",
          name: "Czy autokar musi parkowaćgdzieś, czy może czekać?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Autokar parkuje przy ul. Chorzowskiej 99 w Parku Śląskim — DARMOWO do 12h dla autokarów grupowych. Kierowca czeka cały dzień, pilnuje bagażu. Dzieci mogą wrócić się przebrać między atrakcjami.",
          },
        },
        {
          "@type": "Question",
          name: "Ile wcześniej rezerwować autokar do Chorzowa?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "W zwykłe dni 2-3 tygodnie. Dla MECZU REPREZENTACJI na Stadionie Śląskim: minimum 10 tygodni — parking P1 wypeł nia się błyskawicznie. Dla wycieczek szkolnych: 6-8 tygodni.",
          },
        },
        {
          "@type": "Question",
          name: "Ile kosztuje bilet do Legendii dla grupy szkolnej?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Standard 99 zł. Bilet grupowy szkolny od 65 zł/osoba dla grup 25+ — oszczędzacie 30 zł/dziecko. Pomagamy zrobić rezerwację, dostajecie ostateczną cenę przed wyjazdem.",
          },
        },
        {
          "@type": "Question",
          name: "Czy autokar Kielce-Chorzów jest dostępny na mecz reprezentacji Polski?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tak. Wyjazd 14:00, mecz 20:45-22:30, powrót 23:00, Krakow 01:15. Cena 3 600 zł autokar 50-os (mieści się w limicie jednego kierowcy 11h).",
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
          name: "Krakow → Chorzów",
          item: "https://www.autokar-busko.pl/pl/trasy/krakow-chorzow-autokar",
        },
      ],
    },
  ],
};

function ResponsivePricingTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-black text-[#639922]">Cena wynajmu autokaru Krakow-Chorzów (cennik 2026)</h2>
        <p className="mb-8 text-gray-300">
          Ceny brutto (8% VAT), zawierają: paliwo, kierowcę z licencją D, <strong className="text-white">wszystkie opłaty A4 (~52 zł w obie strony)</strong>, ubezpieczenie OC/AC/NNW 100 000 EUR, <strong className="text-[#97C459]">parking w Parku Śląskim do 12h (gratis!)</strong>, 2 postoje kawowe.
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
                <div className="flex justify-between gap-3"><dt>Mecz/koncert Stadion</dt><dd className="font-bold">{row.matchOrConcert}</dd></div>
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
                <th className="px-4 py-3">One-way (Krakow → Chorzów)</th>
                <th className="px-4 py-3">Wycieczka 1-dniowa (Park+Legendia/ZOO)</th>
                <th className="px-4 py-3">Mecz / koncert na Stadionie Śląskim</th>
              </tr>
            </thead>
            <tbody>
              {routePricingRows.map((row) => (
                <tr key={row.vehicle} className="border-t border-[#2a2a2a] bg-[#141414]">
                  <td className="px-4 py-3 font-semibold">{row.vehicle}</td>
                  <td className="px-4 py-3">{row.passengers}</td>
                  <td className="px-4 py-3 font-bold">{row.oneWay}</td>
                  <td className="px-4 py-3 font-bold">{row.excursion1day}</td>
                  <td className="px-4 py-3 font-bold">{row.matchOrConcert}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Parking highlight */}
        <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-5 text-sm">
          <p className="font-semibold text-green-400 mb-2">🅿️ PARKING W PARKU ŚLĄSKIM — DARMOWY DO 12H</p>
          <p className="text-gray-300">
            Ul. Chorzowska 99, główne wejście. <strong className="text-white">Nie płacisz nic</strong> za parking autokarów grupowych przez pierwsze 12 godzin. Kierowca czeka przy autokarze, dzieci mogą wrócić „się przebrać" po Legendii, zostawić mokre rzeczy, zmienić się przed ZOO. To duża różnica vs konkurencja, która wymusza zaparkowanie za miastem i płacenie 5-10 zł/h.
          </p>
        </div>

        <div className="mt-4 rounded-xl border border-[#2a2a2a] bg-[#111111] p-5 text-sm text-gray-300">
          <p className="font-semibold text-white mb-2">Co podnosi cenę:</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li><strong>Mecz reprezentacji Polski na Stadionie Śląskim:</strong> +500-600 zł vs wycieczka do Parku (parking P1, późny powrót)</li>
            <li><strong>Weekendy długie w Legendii (sezon):</strong> +10%</li>
          </ul>
          <p className="font-semibold text-white mb-2">Co NIE podnosi ceny:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Opłaty A4 — wliczamy zawsze (~52 zł w obie strony)</li>
            <li>Parking w Parku Śląskim — do 12h gratis</li>
            <li>Postoje w MOP</li>
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
        <h2 className="mb-4 text-3xl font-black text-[#639922]">Czas przejazdu i trasa Krakow-Chorzów</h2>
        <p className="mb-6 text-gray-300">
          <strong className="text-white">Trasa standardowa:</strong> A4 Krakow → Katowice → DK86 do Chorzowa. 170 km, pełna autostrada + droga krajowa. Obowiązkowa przerwa kierowcy: MOP Brzezie (92 km, pierwsza kawa) lub MOP Wojkowice (155 km, przed celem).
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
                <th className="px-4 py-3">Czas Krakow → Chorzów</th>
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
          <p className="font-semibold text-white mb-2">Wąskie gardło — węzeł Katowice-Murckowska:</p>
          <p>
            Codziennie w godz. 15:00-18:00 trwa cofający się korek 3-5 km na A4. Dla wycieczek szkolnych (zazwyczaj 6:00-7:00 odjazd) — to nie jest problem. Dla powrotu po meczu na Stadionie Śląskim (mecze zazwyczaj 20:45-22:30) — A4 o 23:00 jest pusta.
          </p>
        </div>
      </div>
    </section>
  );
}

function AttractionsSection() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-black text-[#639922]">4 atrakcje w jednym Chorzowie</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5">
            <h3 className="mb-3 text-base font-bold text-[#639922]">🌳 Park Śląski (WSTĘP GRATIS)</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">5 km² zieleni</strong> — 6. największy park miejski w Europie</li>
              <li><strong className="text-white">Parking autokarów:</strong> ul. Chorzowska 99 — GRATIS do 12h</li>
              <li><strong className="text-white">W środku:</strong> Legendia, ZOO, Planetarium, Stadion, Muzeum Górnosląskie, kolejka Elka</li>
              <li><strong className="text-white">Czas minimum:</strong> 3-4h na spacer + 1 atrakcja</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5">
            <h3 className="mb-3 text-base font-bold text-[#639922]">🎢 Legendia</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">38 atrakcji,</strong> w tym największa kolejka "Lech" (40 m)</li>
              <li><strong className="text-white">Bilet standard:</strong> 99 zł | <strong className="text-white">Grupowy szkolny:</strong> od 65 zł/os (rabat dla 25+)</li>
              <li><strong className="text-white">Otwarte:</strong> maj-wrzesień (weekendy + wakacje), 11:00-19:00</li>
              <li><strong className="text-white">Czas potrzebny:</strong> 4-5h dla pełnego programu</li>
              <li className="text-[#97C459]"><strong>Pomagamy z rezerwacją grupową — oszczędzacie 30 zł/dziecko!</strong></li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5">
            <h3 className="mb-3 text-base font-bold text-[#639922]">⚽ Stadion Śląski</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">35 000 miejsc</strong> — drugi największy stadion w Polsce</li>
              <li><strong className="text-white">Mecze reprezentacji Polski,</strong> koncerty (Coldplay, Imagine Dragons)</li>
              <li><strong className="text-white">Parking P1:</strong> 35 zł/dzień w dni meczowe (rezerwacja 8-10 tygodni)</li>
              <li><strong className="text-white">Uwaga:</strong> stadion jest w obrębie Parku — jedna grupa na mecz + druga do Parku, wspólny autokar!</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#111111] p-5">
            <h3 className="mb-3 text-base font-bold text-[#639922]">🦁 ZOO i Planetarium</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">ZOO Śląskie:</strong> 1 600 zwierząt, bilet 30 zł dorosły / 20 zł dziecko</li>
              <li><strong className="text-white">Planetarium Śląskie:</strong> nowoczesne (remont 2022), bilet 28 zł, pokazy co godzinę</li>
              <li><strong className="text-white">Razem:</strong> 3-4h w jednym kompleksie</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TripSchemesSection() {
  return (
    <section className="bg-[#111111] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-3xl font-black text-[#639922]">4 najpopularniejsze schematy wycieczek do Chorzowa</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
            <h3 className="mb-1 text-lg font-bold text-[#639922]">Schemat A — Klasy 4-8: Park + Legendia</h3>
            <p className="text-xs text-gray-400 mb-3">najpopularniejszy, 62 razy w 2025</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">06:00</strong> — odjazd z Krakowa</li>
              <li><strong className="text-white">08:15</strong> — przyjazd, śniadanie w Parku</li>
              <li><strong className="text-white">09:00 – 11:00</strong> — spacer po Parku, kolejka Elka, sezonowo ZOO</li>
              <li><strong className="text-white">11:00 – 17:00</strong> — Legendia (otwarcie 11:00)</li>
              <li><strong className="text-white">17:30</strong> — odjazd</li>
              <li><strong className="text-white">19:45</strong> — powrót Krakow</li>
            </ul>
            <p className="mt-4 text-sm font-bold text-[#639922]">Autokar 50-os: 3 000 zł + bilety Legendia (65 zł × 25 dzieci = 1 625 zł osobno)</p>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
            <h3 className="mb-1 text-lg font-bold text-[#639922]">Schemat B — Klasy młodsze: Park + ZOO + Planetarium</h3>
            <p className="text-xs text-gray-400 mb-3">dla klas 1-3, bez Legendii</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">07:00</strong> — odjazd z Krakowa</li>
              <li><strong className="text-white">09:15</strong> — Park Śląski</li>
              <li><strong className="text-white">09:30 – 12:30</strong> — ZOO + lunch</li>
              <li><strong className="text-white">13:00 – 15:00</strong> — Planetarium (pokaz + lekcja)</li>
              <li><strong className="text-white">15:00 – 17:00</strong> — spacer po Parku, kolejka Elka</li>
              <li><strong className="text-white">17:30</strong> — odjazd</li>
              <li><strong className="text-white">19:45</strong> — powrót Krakow</li>
            </ul>
            <p className="mt-4 text-sm font-bold text-[#639922]">Autokar 50-os: 3 000 zł + bilety (ZOO ~25 zł, Planetarium ~25 zł/dziecko)</p>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
            <h3 className="mb-1 text-lg font-bold text-[#639922]">Schemat C — Mecz reprezentacji Polski</h3>
            <p className="text-xs text-gray-400 mb-3">pojedynczy kierowca, mieści się w limicie 11h</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">14:00</strong> — odjazd z Krakowa</li>
              <li><strong className="text-white">16:30</strong> — parking P1 Stadion Śląski</li>
              <li><strong className="text-white">17:00 – 20:45</strong> — wstęp na stadion, pokaz pre-match</li>
              <li><strong className="text-white">20:45 – 22:30</strong> — mecz</li>
              <li><strong className="text-white">23:00</strong> — odjazd</li>
              <li><strong className="text-white">01:15</strong> — powrót Krakow</li>
            </ul>
            <p className="mt-4 text-sm font-bold text-[#639922]">Autokar 50-os: 3 600 zł (1 kierowca, fit w 11h limicie)</p>
          </div>

          <div className="rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-6">
            <h3 className="mb-1 text-lg font-bold text-[#639922]">Schemat D — Koncert na Stadionie Śląskim</h3>
            <p className="text-xs text-gray-400 mb-3">Coldplay, Imagine Dragons, Taylor Swift</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong className="text-white">14:00</strong> — odjazd z Krakowa</li>
              <li><strong className="text-white">16:30</strong> — Chorzów</li>
              <li><strong className="text-white">19:30 – 23:30</strong> — koncert</li>
              <li><strong className="text-white">23:30</strong> — odjazd</li>
              <li><strong className="text-white">02:00</strong> — powrót Krakow</li>
            </ul>
            <p className="mt-4 text-sm font-bold text-[#639922]">Autokar 50-os: 3 600 zł (granicznie 1 kierowca) lub 4 100 zł z 2 kierowcami (bezpieczniej)</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GroupVehicleTable() {
  return (
    <section className="bg-[#1a1a1a] px-4 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-3xl font-black text-[#639922]">Jaki autokar dla jakiej grupy — trasa 170 km</h2>
        <p className="mb-6 text-gray-300">
          2h 15min jazdy — dla wycieczek szkolnych <strong className="text-white">WC w autokarze obowiązkowe</strong> (wymóg MEN). Dla klas mniejszych mikrofon kierowcy jest standard w klasie ★★★★.
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
      canonical: "https://www.autokar-busko.pl/pl/trasy/krakow-chorzow-autokar",
    },
    openGraph: {
      title: "Autokar Kielce → Chorzów od 1 900 zł | Park Śląski, Legendia, Stadion",
      description:
        "170 km autostradą A4 w 2h 15min. Park Śląski (parking gratis 12h), Legendia, Stadion Śląski, ZOO. Wycieczki szkolne, imprezy, mecze.",
      url: "https://www.autokar-busko.pl/pl/trasy/krakow-chorzow-autokar",
      type: "website",
      locale: l === "pl" ? "pl_PL" : "en_US",
    },
  };
}

export default async function KrakowChorzowPage({
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
              Wycena pisemna w 15-30 min. Park Śląski darmowy do 12h. Pomagamy z biletami Legendii (rabat 30 zł/dziecko). Bez ukrytych kosztów.
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

      {/* ATTRACTIONS */}
      <AttractionsSection />

      {/* TRIP SCHEMES */}
      {l === "pl" && <TripSchemesSection />}

      {/* PICKUP POINTS */}
      {l === "pl" && (
        <section className="bg-[#111111] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-4 text-3xl font-black text-[#639922]">Miejsca odbioru w Krakowie</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {pickupPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] p-4 text-sm">
                  <span className="mt-0.5 text-[#639922] font-bold">{idx + 1}.</span>
                  <span className="text-gray-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

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

      {/* BOOKING STEPS */}
      {l === "pl" && (
        <section className="bg-[#111111] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-black text-[#639922]">Jak rezerwować</h2>
            <ol className="space-y-4">
              {[
                { step: "1", text: "Zadzwoń (41 345 32 25) lub wyślij formularz z datą + liczbą osób + sygna ł em atrakcji (Park / Legendia / ZOO / Stadion). Pn-pt 7-18, sob 8-14." },
                { step: "2", text: "Otrzymujesz wycenę w 15-30 min z sugestią godzin wyjazdu i propozycją schematu wycieczki." },
                { step: "3", text: "Dla szkoły: faktura proforma bez zaliczki (pismo z pieczęcią dyrektora). Dla rodziców: zaliczka 30% przelewem." },
                { step: "4", text: "2 tygodnie przed: pomagamy z grupową rezerwacją biletów Legendii (rabat szkolny 65 zł/osoba, oszczędzacie 30 zł/dziecko)." },
                { step: "5", text: "Dzień przed wyjazdem: pełna płatność + potwierdzenie liczby osób. Komplet dokumentów (KREPTD, badania, polisa) na życzenie." },
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
        heading={l === "pl" ? "Dlaczego Autokar Busko — konkretnie dla Chorzowa" : undefined}
        features={whyUsFeatures}
      />

      {/* RELATED ROUTES */}
      {l === "pl" && (
        <section className="bg-[#1a1a1a] px-4 py-12 text-white">
          <div className="mx-auto max-w-7xl">
            <h2 className="mb-6 text-3xl font-black text-[#639922]">Popularne trasy z Krakowa</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { href: "/pl/trasy/krakow-krakow-autokar", label: "Kraków", detail: "115 km / 1h 40min" },
                { href: "/pl/trasy/krakow-warszawa-autokar", label: "Warszawa", detail: "180 km / 2h 30min" },
                { href: "/pl/trasy/krakow-energylandia-autokar", label: "Energylandia", detail: "155 km / 2h 10min" },
                { href: "/pl/trasy/krakow-wroclaw-autokar", label: "Wrocław", detail: "330 km / 3h 45min" },
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
              Park Śląski + Legendia + Stadion w jednej wyciecze. Parking gratis 12h. Pomagamy z biletami. Rezerwacja 2-3 tygodnie (mecze: 10 tygodni).
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="tel:+48413453225" variant="primary">
              {l === "pl" ? "Zadzwoń: 41 345 32 25" : "Call +48 41 345 32 25"}
            </CTAButton>
            <CTAButton href={`/${l}/wycieczki-szkolne`} variant="secondary">
              {l === "pl" ? "Wycieczki szkolne — pełna oferta" : "School trips"}
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
