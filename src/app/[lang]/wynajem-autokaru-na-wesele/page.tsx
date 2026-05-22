import type { Metadata } from "next";
import Script from "next/script";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const title = "Wynajem autokaru na wesele - 500+ wesel, kursy nocne | MUSZKIETER";
const description = "Wynajem autokaru na wesele z kierowcą. 500+ wesel obsłużonych, bus 19 lub autokar 49-67 os, kursy nocne, biały autokar na życzenie. Tel: 601 076 652 lub 41 345 32 25.";
const canonical = "https://www.autokar-busko.pl/pl/wynajem-autokaru-na-wesele";

const breadcrumbSchema = {
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
      name: "Wynajem autokaru na wesele",
      item: canonical,
    },
  ],
};

const serviceSchema = {
  "@type": "Service",
  "@id": "https://www.autokar-busko.pl/pl/wynajem-autokaru-na-wesele#service",
  name: "Wynajem autokaru na wesele",
  description:
    "Transport gości weselnych. Bus 19-30 osób lub autokar 49-67 osób. Kursy nocne, biały autokar na życzenie, kierowca w odpowiednim stroju. 500+ wesel od 2003.",
  serviceType: "Wedding transport",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.autokar-busko.pl/#organization",
    name: "MUSZKIETER",
    legalName: "Alfa Bus Sp. z o.o.",
    telephone: "+48601076652",
    email: "biuro@muszkieter.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Kolberga 9",
      addressLocality: "Krakow",
      postalCode: "25-516",
      addressCountry: "PL",
    },
    url: "https://www.autokar-busko.pl",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+48601076652",
        contactType: "customer service",
        areaServed: "PL",
        availableLanguage: "pl",
      },
      {
        "@type": "ContactPoint",
        telephone: "+48413453225",
        contactType: "reservations",
        areaServed: "PL",
        availableLanguage: "pl",
      },
    ],
  },
  areaServed: {
    "@type": "Country",
    name: "Polska",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "500",
    bestRating: "5",
    worstRating: "1",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "PLN",
    lowPrice: "600",
    highPrice: "3000",
    offerCount: "4",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ile kosztuje wynajem autokaru na wesele 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cena zależy od pojazdu i czasu dyspozycyjności. Bus 19-osobowy dla bliskiej rodziny (6-8h, krótka trasa): 600-900 zł. Autokar 49-osobowy z pełną obsługą wesela (12-16h, kursy nocne): 1500-2200 zł. Autokar 53-67 os dla dużego wesela: 2000-3000 zł. Skontaktuj się - wycena dokładna w 15 minut.",
      },
    },
    {
      "@type": "Question",
      name: "Kiedy rezerwować autokar na wesele?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "W sezonie maj-wrzesień: 4-6 miesięcy wcześniej. Dla wesel w czerwcu i sierpniu (szczyt sezonu): 6-8 miesięcy wcześniej. Październik-marzec: 6-8 tygodni wystarczy. Im wcześniej rezerwacja, tym lepszy wybór pojazdu.",
      },
    },
    {
      "@type": "Question",
      name: "Czy autokar może mieć białe taśmy lub dekorację weselną?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Dekorację autokaru (taśmy, kwiaty na masce, balony) załatwia para młoda lub kwiaciarnia. Udostępniamy pojazd na 30-60 minut przed ceremonią do dekoracji. Mamy też w flocie biały autokar weselny (na życzenie, rezerwacja 4-6 tygodni wcześniej).",
      },
    },
    {
      "@type": "Question",
      name: "Czy kierowca wraca w nocy odwozić gości do domu?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, bez dopłat za godziny nocne. Standardowa weselna trasa obejmuje 2-3 kursy odwożące w nocy (około 22:00, 1:00, 4:00-5:00). Dwóch kierowców: dzienny do około 22:00, nocny do końca wesela. Pełne 12-18h dyspozycyjności w cenie zlecenia.",
      },
    },
    {
      "@type": "Question",
      name: "Ile osób mieści autokar weselny?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bus 19-osobowy: 19 gości + kierowca - dla małej rodziny. Bus 39-osobowy: 39 gości - dla średnich wesel. Autokar 49-osobowy: 49 gości - najpopularniejszy wybór dla pełnego wesela 40-60 osób. Autokar 53-67-osobowy: dla wesel 50-70 gości.",
      },
    },
    {
      "@type": "Question",
      name: "Co jeśli na weselu zostanie mniej gości niż planowaliśmy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zmiana pojazdu do 7 dni przed weselem jest możliwa bez kar. Jeśli rezerwowałaś autokar 49-osobowy, a okazuje się, że gości będzie 35, podstawimy bus 39-osobowy taniej. Poinformuj nas 7 dni wcześniej, dopasujemy pojazd.",
      },
    },
    {
      "@type": "Question",
      name: "Czy zapewniacie nocleg dla kierowcy przy weselu poza Krakowaami?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Dla wesel poza Krakowaami (>80 km) zapewniamy nocleg kierowcy w pobliżu sali weselnej - hotel klasy 2-3* w cenie zlecenia. Drugi kierowca (nocny) dojeżdża własnym autem.",
      },
    },
    {
      "@type": "Question",
      name: "Czy macie autokar z toaletą i klimatyzacją?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Wszystkie nasze autokary 49+ osobowe mają WC, klimatyzację strefową, miejsce na bagaż. Busy 19-30 osobowe mają klimatyzację, bez WC - postój co 1.5-2 godziny. Dla wesel z trasą >100 km zalecamy autokar z toaletą.",
      },
    },
  ],
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [serviceSchema, faqSchema, breadcrumbSchema],
};

const trustBadges = ["24 lata", "500+ wesel", "ocena 4.9/5", "kursy nocne bez dopłat"];

const helpItems = [
  {
    title: "Pełna trasa weselna w jednym zleceniu",
    description:
      "Kościół lub USC -> sala weselna -> hotel lub miejsce noclegowe gości późnym wieczorem -> rano powrót z noclegu. 12-18 godzin dyspozycyjności jednym pojazdem. Jeden kierowca dzienny + jeden nocny, jedna umowa, jedna faktura. Bez kombinowania z dopłatami za godziny nocne.",
  },
  {
    title: "Kursy nocne i wczesnoporanne bez problemu",
    description:
      "Wesele kończy się o 4-5 rano. Część gości wraca wcześniej (rodzice z dziećmi - około 22:00-23:00), część rano. Standardowo planujemy 2-3 kursy odwożące w trakcie nocy. Cena obejmuje pełne 12-18h dyspozycyjności od pierwszego kursu - bez dopłat za godziny nocne.",
  },
  {
    title: "Biały autokar lub klasyczny - twój wybór",
    description:
      "Mamy w flocie biały autokar weselny (na życzenie, do uzgodnienia 4-6 tygodni wcześniej - zwykle zajęty w sezonie). Klasyczne autokary turystyczne (Setra ComfortClass, MAN Lion's Coach) w kolorach złamana biel, grafit, kremowy - eleganckie bez kosztu ślubnego pakietu.",
  },
  {
    title: "Kierowca w stonowanym ubiorze",
    description:
      "Ciemny garnitur lub elegancki strój - na życzenie pary młodej. Kierowca rozumie wagę dnia: nie wchodzi w rozmowy poza koniecznymi, pomaga starszym gościom z bagażami i wsiadaniem, prowadzi spokojnie z perspektywy dzieci śpiących na powrocie.",
  },
];

const pricingRows = [
  {
    vehicle: "Bus 19-osobowy",
    seats: "19 + 1",
    availability: "6-8h (krótka trasa kościół-sala)",
    price: "600-900 zł",
  },
  {
    vehicle: "Bus 30-osobowy",
    seats: "30 + 1",
    availability: "8-10h (kościół-sala-2 kursy nocne)",
    price: "900-1300 zł",
  },
  {
    vehicle: "Autokar 49-osobowy",
    seats: "49 + 1",
    availability: "12-16h (pełne wesele z noclegiem)",
    price: "1500-2200 zł",
  },
  {
    vehicle: "Autokar 53-67 os",
    seats: "53-67 + 1",
    availability: "14-18h (duże wesele, wiele kursów)",
    price: "2000-3000 zł",
  },
];

const reservationSteps = [
  "Zadzwoń lub wyślij formularz. Data wesela, liczba gości, lokalizacje, godzina ślubu. Standardowy termin rezerwacji: 4-6 miesięcy przed weselem (w okresie maj-czerwiec nawet 6-8 miesięcy - sezon weselny).",
  "Wycena w 15 minut. Telefon lub mail. Pojazd, kierowca, plan kursów, cena rozbita.",
  "Zadatek 30% - przelewem przy rezerwacji. Reszta: 7 dni przed weselem lub gotówką w dniu wesela.",
  "W dniu wesela kierowca jest pod kościołem/USC 30 minut przed planowaną godziną. Kurs nocny: kierowca zmiennik dołącza około 22:00 dla bezpiecznej pracy zgodnie z tachografem.",
];

const knowledgeItems = [
  {
    title: "Rezerwacja autokaru weselnego - 4-6 miesięcy z wyprzedzeniem",
    description:
      "Wesela 80% odbywają się od maja do września. Najlepsze autokary z toaletą i klimatyzacją są zarezerwowane już w styczniu-lutym dla wesel czerwcowo-sierpniowych. Dla wesel w maju i czerwcu - rezerwacja minimum 6 miesięcy wcześniej. Październik-marzec - 6-8 tygodni wystarczy.",
  },
  {
    title: "Trasa to nie tylko kościół-sala",
    description:
      "Typowa weselna logistyka: zbiórka gości w jednym punkcie -> kościół lub USC -> sala weselna -> wieczorne odwozy do hoteli/noclegu (2-3 kursy) -> rano poranny zwrot z noclegu. Razem 12-18 godzin dyspozycyjności. Planujemy z parą młodą szczegółowo 7-14 dni przed weselem.",
  },
  {
    title: "Kierowca wraca w nocy bez dopłat",
    description:
      "To powtarzające się pytanie. Tak: kursy po 22:00, 24:00, 3:00 rano są w cenie dyspozycyjności. Dwóch kierowców (zmiana po 9h zgodnie z tachografem) - jeden dzienny, drugi nocny. Bez dopłat za godziny nocne, bez taryf weekendowych.",
  },
  {
    title: "Co jeśli na weselu zostanie mniej gości niż planowaliśmy",
    description:
      "Jeśli 7 dni przed weselem widzisz, że gości będzie mniej (np. 35 zamiast 50), możemy podstawić mniejszy pojazd - bus 39-osobowy zamiast autokaru 49-osobowego, taniej. Działa też odwrotnie: jeśli więcej gości, sprawdzamy dostępność większego pojazdu. Reguła: zmiana pojazdu do 7 dni przed - bez kar.",
  },
  {
    title: "Faktura na parę młodą lub na firmę",
    description:
      "Wystawiamy fakturę VAT 23% na osobę prywatną (para młoda) lub na firmę (np. firma teścia płaci za transport - to bywa). Standardowo: zadatek 30% przelewem przy rezerwacji, reszta 7 dni przed weselem lub gotówka w dniu wesela. Faktura wysyłana mailem w tym samym dniu lub na drugi dzień rano.",
  },
];

const testimonials = [
  {
    text: "Wesele 18 czerwca 2024 w Pałacu Strawczyn. 47 gości, autokar 49-osobowy, kursy nocne aż do 4:30 rano. Pan kierowca cierpliwy, kulturalny, dwa razy zawrócił dla zapomnianych torebek na sali. Polecam.",
    note: "[opinia 1 - placeholder, Rafał uzupełni z prawdziwych opinii Google]",
  },
  {
    text: "Bus 19-osobowy dla rodziny - kościół w Chęcinach, sala w Sitkówce, potem dwa kursy do hoteli w Krakowie. Wszystko punktualnie, kierowca w garniturze, bez najmniejszego problemu. Polecam każdej parze.",
    note: "[opinia 2 - placeholder]",
  },
  {
    text: "Para z drugiego końca Polski - babcia 84-letnia, mama z chorobą lokomocyjną. Autokar z klimatyzacją włączoną i często przerwami. Kierowca wiedział, kiedy się zatrzymać. Drobne rzeczy, ale dla tej babci dużo znaczyły.",
    note: "[opinia 3 - placeholder]",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje wynajem autokaru na wesele 2026?",
    answer:
      "Cena zależy od pojazdu i czasu dyspozycyjności. Bus 19-osobowy dla bliskiej rodziny (6-8h, krótka trasa): 600-900 zł. Autokar 49-osobowy z pełną obsługą wesela (12-16h, kursy nocne): 1500-2200 zł. Autokar 53-67 os dla dużego wesela: 2000-3000 zł. Skontaktuj się - wycena dokładna w 15 minut.",
  },
  {
    question: "Kiedy rezerwować autokar na wesele?",
    answer:
      "W sezonie maj-wrzesień: 4-6 miesięcy wcześniej. Dla wesel w czerwcu i sierpniu (szczyt sezonu): 6-8 miesięcy wcześniej - najlepsze autokary z toaletą i klimatyzacją idą jako pierwsze. Październik-marzec: 6-8 tygodni wystarczy. Im wcześniej rezerwacja, tym lepszy wybór pojazdu.",
  },
  {
    question: "Czy autokar może mieć białe taśmy lub dekorację weselną?",
    answer:
      "Tak. Dekoracja autokaru (taśmy, kwiaty na masce, balony) jest możliwa - załatwia ją para młoda lub kwiaciarnia. My udostępniamy pojazd na 30-60 minut przed ceremonią do dekoracji. Mamy też w flocie biały autokar weselny (na życzenie, rezerwacja 4-6 tygodni wcześniej - w sezonie zajęty).",
  },
  {
    question: "Czy kierowca wraca w nocy odwozić gości do domu?",
    answer:
      "Tak, bez dopłat za godziny nocne. Standardowa weselna trasa obejmuje 2-3 kursy odwożące w nocy (około 22:00 - rodzice z dziećmi, 1:00 - zmęczeni goście, 4:00-5:00 - reszta). Dwóch kierowców: dzienny do około 22:00, nocny do końca wesela. Pełne 12-18h dyspozycyjności w cenie zlecenia.",
  },
  {
    question: "Ile osób mieści autokar weselny?",
    answer:
      "Bus 19-osobowy: 19 gości + kierowca - dla małej rodziny. Bus 39-osobowy: 39 gości - dla średnich wesel. Autokar 49-osobowy: 49 gości - najpopularniejszy wybór dla pełnego wesela 40-60 osób. Autokar 53-67-osobowy: dla wesel 50-70 gości. Zostawiamy minimum 3-4 wolne miejsca na bagaże gości z innych miast.",
  },
  {
    question: "Co jeśli na weselu zostanie mniej gości niż planowaliśmy?",
    answer:
      "Zmiana pojazdu do 7 dni przed weselem jest możliwa bez kar. Jeśli rezerwowałaś autokar 49-osobowy, a okazuje się, że gości będzie 35, podstawimy bus 39-osobowy taniej. Reguła: poinformuj nas 7 dni wcześniej, dopasujemy pojazd.",
  },
  {
    question: "Czy zapewniacie nocleg dla kierowcy przy weselu poza Krakowaami?",
    answer:
      "Tak. Dla wesel poza Krakowaami (>80 km) zapewniamy nocleg kierowcy w pobliżu sali weselnej - hotel klasy 2-3* w cenie zlecenia. Albo można udostępnić nocleg w domu pary młodej (rzadziej, ale bywa). Drugi kierowca (nocny) dojeżdża własnym autem.",
  },
  {
    question: "Czy macie autokar z toaletą i klimatyzacją?",
    answer:
      "Tak. Wszystkie nasze autokary 49+ osobowe mają WC, klimatyzację strefową, miejsce na bagaż podręczny. Busy 19-30 osobowe mają klimatyzację, bez WC - postój co 1.5-2 godziny. Dla wesel z trasą >100 km zalecamy autokar z toaletą.",
  },
];

const relatedLinks = [
  {
    href: "/pl/blog/wesele/ile-kosztuje-autokar-na-wesele-2026",
    title: "Ile kosztuje autokar na wesele 2026",
    description: "pełny cennik 6 typów pojazdów, czynniki wpływające na cenę",
  },
  {
    href: "/pl/wesele",
    title: "Bus na wesele Krakow",
    description: "krótszy poradnik dla mniejszych wesel",
  },
  {
    href: "/pl/cennik",
    title: "Cennik wynajmu autokaru",
    description: "pełny cennik orientacyjny",
  },
  {
    href: "/pl/flota",
    title: "Nasza flota - 180 pojazdów",
    description: "busy 19 os, autokary 49-67 os, biały autokar weselny",
  },
];

const alternates = {
  pl: canonical,
  en: canonical,
  de: canonical,
  ru: canonical,
  ar: canonical,
  es: canonical,
  fr: canonical,
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  toLang(lang);

  return {
    metadataBase: new URL("https://www.autokar-busko.pl"),
    title,
    description,
    alternates: {
      canonical,
      languages: alternates,
    },
    openGraph: {
      title,
      description,
      images: ["/og-wesele.jpg"],
    },
  };
}

export default async function WynajemAutokaruNaWeselePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  toLang(lang);

  return (
    <>
      <Script id="schema-wesele-pillar" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaJsonLd)}
      </Script>

      <main className="bg-gray-50 text-gray-900">
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-300">MUSZKIETER</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Wynajem autokaru na wesele - transport gości, bez stresu, z klasą</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">500+ wesel obsłużonych od 2003 roku. Bus 19-osobowy dla bliskiej rodziny, autokar 49-67 miejsc dla pełnego wesela. Kursy nocne bez dopłat, biały autokar na życzenie, kierowca w odpowiednim stroju.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-amber-600">Sprawdź wycenę w 15 min</a>
              <a href="tel:+48601076652" className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-gray-900">+48 601 076 652</a>
              <a href="tel:+48413453225" className="inline-flex items-center justify-center rounded-md border border-gray-400 px-4 py-2 text-xs font-semibold text-gray-200 hover:border-white hover:text-white"></a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-200">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-gray-700 px-4 py-2">
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-300">24 lata · 500+ wesel · ocena 4.9/5 · kursy nocne bez dopłat</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6 text-lg leading-8 text-gray-800">
            <p>Wesele to jeden z największych dni w życiu pary młodej. I jeden z najbardziej skomplikowanych logistycznie dla rodziny i organizatora.</p>
            <p>Para młoda planuje od roku, ale transport gości zwykle ląduje na liście do zrobienia w ostatnich tygodniach. Babcia z drugiego końca Polski, kuzyni z trzech miast, przyjaciele którzy nie chcą pić i jechać samochodem, rodzice z dziećmi którzy wieczorem chcą wrócić wcześniej. Plus 80% wesel odbywa się w okresie maj-wrzesień - wtedy najlepsze autokary są zarezerwowane miesiące wcześniej.</p>
            <p>Obsługujemy wesela od 2003 roku. Ponad 500 wesel, średnia ocena 4.9/5 od par młodych w Google. Najczęstsze trasy: Krakow i okolice (Małogoszcz, Chęciny, Strawczyn, Sitkówka-Nowiny), ale też dojeżdżamy do Krakowa, Warszawy, Lublina, Rzeszowa. Bus 19-osobowy lub autokar 49-67 miejsc - dobieramy do liczby gości.</p>
            <p>Skontaktuj się - wycena w 15 minut. Wszystko, czego potrzebujemy, to: data wesela, liczba gości, lokalizacje (kościół lub USC, sala weselna, miejsce noclegowe gości), godzina rozpoczęcia.</p>
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">Jak pomagamy</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {helpItems.map((item) => (
                <article key={item.title} className="border border-gray-200 bg-white p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-gray-700">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Cennik orientacyjny</h2>

          <div className="mt-8 space-y-4 md:hidden">
            {pricingRows.map((row) => (
              <article key={row.vehicle} className="border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">{row.vehicle}</h3>
                <p className="mt-2 text-sm text-gray-700">Miejsca: {row.seats}</p>
                <p className="mt-2 text-sm text-gray-700">Czas dyspozycyjności: {row.availability}</p>
                <p className="mt-2 text-sm font-semibold text-gray-900">Cena od: {row.price}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 hidden overflow-x-auto md:block">
            <table className="w-full border-collapse border border-gray-200 bg-white">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900">Pojazd</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900">Miejsca</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900">Czas dyspozycyjności</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900">Cena od</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.vehicle}>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm text-gray-800">{row.vehicle}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm text-gray-800">{row.seats}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm text-gray-800">{row.availability}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm font-semibold text-gray-900">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-700">Cena obejmuje paliwo, postoje, kierowcę, ubezpieczenie pojazdu. Nie obejmuje: napiwek dla kierowcy (zwyczaj, 100-300 zł, do uznania pary młodej). Skontaktuj się - wycena dokładna w 15 minut.</p>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">Jak zarezerwować</h2>
            <ol className="mt-8 list-decimal space-y-4 pl-6 text-base leading-7 text-gray-800">
              {reservationSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Co warto wiedzieć</h2>
          <div className="mt-8 max-w-4xl space-y-8">
            {knowledgeItems.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">Opinie par młodych</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {testimonials.map((item) => (
                <blockquote key={item.note} className="border border-gray-200 bg-white p-6">
                  <p className="text-base leading-7 text-gray-800">{item.text}</p>
                  <footer className="mt-4 text-sm text-gray-500">{item.note}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900">Najczęstsze pytania</h2>
          <div className="mt-8 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer text-lg font-semibold text-gray-900">{item.question}</summary>
                <p className="mt-3 text-base leading-7 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900">Zobacz też</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {relatedLinks.map((item) => (
                <a key={item.href} href={item.href} className="border border-gray-200 bg-white p-6 hover:bg-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-gray-700">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold">Twoje wesele zasługuje na transport bez stresu. Pomożemy.</h2>
            <div className="mt-8 space-y-3 text-base leading-7 text-gray-200">
              <p><a href="tel:+48601076652" className="text-amber-500">Telefon główny: +48 601 076 652</a></p>
              <p><a href="tel:+48413453225" className="text-amber-500">Telefon zapasowy: </a></p>
              <p><a href="mailto:biuro@muszkieter.pl" className="text-amber-500">Email: biuro@muszkieter.pl</a></p>
              <p><a href="/pl/kontakt" className="text-amber-500">Formularz: Wyślij zapytanie</a></p>
              <p>MUSZKIETER · Alfa Bus Sp. z o.o. · ul. Kolberga 9, 25-516 Kielce</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
