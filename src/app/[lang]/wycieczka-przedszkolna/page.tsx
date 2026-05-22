import type { Metadata } from "next";
import Script from "next/script";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const title = "Autokar na wycieczkę przedszkolną - bezpieczna podróż | Autokar Busko";
const description = "Wynajem autokaru na wycieczkę przedszkolną. 80+ przedszkoli rocznie, kierowcy z psychotechniką, ubezpieczenie OC+NW każdego pasażera. Tel: 41 345 32 25.";
const canonical = "https://www.autokar-busko.pl/pl/wycieczka-przedszkolna";

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
      name: "Autokar na wycieczkę przedszkolną",
      item: canonical,
    },
  ],
};

const serviceSchema = {
  "@type": "Service",
  "@id": "https://www.autokar-busko.pl/pl/wycieczka-przedszkolna#service",
  name: "Wynajem autokaru na wycieczkę przedszkolną",
  description:
    "Bezpieczny transport dzieci w wieku 3-6 lat na wycieczki przedszkolne. Kierowcy z psychotechniką, ITD co 6 miesięcy, ubezpieczenie OC + NW każdego pasażera.",
  serviceType: "Kindergarten field trip transport",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.autokar-busko.pl/#organization",
    name: "Autokar Busko",
    legalName: "Alfa Bus Sp. z o.o.",
    telephone: "+48413453225",
    email: "biuro@autokar-busko.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "ul. Poprzeczna 1",
      addressLocality: "Krakow",
      postalCode: "28-100",
      addressCountry: "PL",
    },
    url: "https://www.autokar-busko.pl",
  },
  areaServed: {
    "@type": "Country",
    name: "Polska",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "PLN",
    lowPrice: "800",
    highPrice: "2500",
    offerCount: "4",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ile kosztuje autokar na wycieczkę przedszkolną?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cena zależy od pojazdu i trasy. Bus 19-osobowy dla małej grupy do Bałtowa (60 km z Krakowa): 800-1100 zł. Autokar 49-osobowy z trasą Krakow - Sandomierz (100 km) - powrót: 1500-2000 zł. Skontaktuj się - wycena w 15 minut.",
      },
    },
    {
      "@type": "Question",
      name: "Jakie wymagania bezpieczeństwa spełniają wasze autokary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Każdy pojazd: badanie techniczne ITD co 6 miesięcy, pasy bezpieczeństwa na każdym siedzeniu (wymóg 2018), gaśnica, apteczka PN-EN 1789, młotek bezpieczeństwa, drogi ewakuacyjne oznaczone. Kierowca: badanie psychotechniczne co 5 lat, badanie lekarskie co 2 lata dla osób 60+. OC pojazdu plus NW każdego pasażera w cenie usługi.",
      },
    },
    {
      "@type": "Question",
      name: "Czy zapewniacie foteliki dla dzieci do 150 cm?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie. Foteliki to obowiązek organizatora wycieczki (przedszkole lub rodzice), zgodnie z rozporządzeniem MSWiA. Nasz autokar zapewnia pasy bezpieczeństwa na każdym siedzeniu - to wymóg po stronie przewoźnika.",
      },
    },
    {
      "@type": "Question",
      name: "Ile postojów na trasie 150 km?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dla wycieczki przedszkolnej rekomendujemy 1-2 postoje na trasę 150 km - co 1.5-2 godziny, 15-20 minut, najlepiej w miejscu z toaletą (stacja paliw, MOP). Dla dzieci 3-6 lat dłuższe odcinki bez postoju są męczące.",
      },
    },
    {
      "@type": "Question",
      name: "Co jeśli dziecko zwymiotuje albo zachoruje w trasie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "W każdym autokarze jest apteczka PN-EN 1789, worki na śmieci, ręczniki papierowe. Kierowca może się zatrzymać natychmiast, gdy opiekun zgłosi problem. Jeśli sytuacja wymaga lekarza - dzwonimy 112 i jedziemy do najbliższej przychodni/szpitala (nieskutkuje to dopłatą).",
      },
    },
    {
      "@type": "Question",
      name: "Czy autokary mają klimatyzację?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Wszystkie nasze busy 19+ osobowe i wszystkie autokary mają klimatyzację. To standard od 2010 r. - bez tego latem nie da się przewozić ludzi, a tym bardziej dzieci.",
      },
    },
    {
      "@type": "Question",
      name: "Jak płaci przedszkole - faktura, gotówka, zaliczka?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wystawiamy fakturę VAT 23% na przedszkole (publiczne lub niepubliczne) lub na Radę Rodziców (jeśli ma NIP). Standardowo: zadatek 30% przelewem przy rezerwacji, reszta - fakturą z 14-dniowym terminem po wycieczce. Możliwa też faktura pro forma do zapłaty przed wyjazdem.",
      },
    },
    {
      "@type": "Question",
      name: "Jak dawno przed wycieczką trzeba rezerwować?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standardowo 4-6 tygodni przed wyjazdem. W okresie maj-czerwiec (szczyt sezonu wycieczek przedszkolnych) - 8-10 tygodni. Im później, tym mniej wyboru pojazdów. Dla październik-marzec - 2-3 tygodnie wystarczy.",
      },
    },
  ],
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [serviceSchema, faqSchema, breadcrumbSchema],
};

const trustBadges = ["24 lata", "80+ przedszkoli rocznie", "zero wypadków"];

const helpItems = [
  {
    title: "Kierowca z badaniem psychotechnicznym",
    description:
      "Każdy nasz kierowca ma aktualne badanie psychotechniczne (wymóg co 5 lat dla kategorii D) oraz badanie lekarskie (co 2 lata dla kierowców 60+). To są wymogi ITD, nie nasz dobry uczynek - ale nadzorujemy je systemowo, nie jak ktoś sobie przypomni.",
  },
  {
    title: "Autokar po świeżym przeglądzie ITD",
    description:
      "Każdy pojazd przechodzi kontrolę techniczną ITD co 6 miesięcy. Plus codzienny check kierowcy przed wyjazdem: hamulce, opony, pasy, gaśnica, apteczka, młotek bezpieczeństwa, drogi ewakuacyjne. Karta kontroli w pojeździe.",
  },
  {
    title: "Pasy bezpieczeństwa na każdym siedzeniu",
    description:
      "Wszystkie nasze autokary mają pasy 3-punktowe lub 2-punktowe na każdym siedzeniu - wymóg od 2018 r. Nauczyciel i opiekunowie pilnują, żeby dzieci były zapięte przed startem.",
  },
  {
    title: "Ubezpieczenie OC + NW dla każdego pasażera",
    description:
      "W cenie usługi jest pełne ubezpieczenie: OC pojazdu (obowiązkowe) plus NW (Następstw Nieszczęśliwych Wypadków) dla każdego pasażera - kierowca, dzieci, opiekunowie. Karta z numerem polisy w autokarze, do wglądu dla pani dyrektor.",
  },
];

const pricingRows = [
  {
    vehicle: "Bus 19-osobowy",
    seats: "19 + 1",
    route: "Krakow - Bałtów (60 km) - powrót, 8h",
    price: "800-1100 zł",
  },
  {
    vehicle: "Bus 39-osobowy",
    seats: "39 + 1",
    route: "Krakow - Sandomierz (100 km) - powrót, 9h",
    price: "1100-1500 zł",
  },
  {
    vehicle: "Autokar 49-osobowy",
    seats: "49 + 1",
    route: "Krakow - Bałtów - lunch w okolicy, 10h",
    price: "1500-2000 zł",
  },
  {
    vehicle: "Autokar 53-osobowy z WC",
    seats: "53 + 1",
    route: "Trasy 150+ km, dłuższe wycieczki",
    price: "1800-2500 zł",
  },
];

const reservationSteps = [
  "Zadzwoń lub wyślij formularz. Liczba dzieci, liczba opiekunów, data, kierunek, planowany czas. Standardowy termin rezerwacji dla przedszkoli: 4-6 tygodni przed wyjazdem (w maju-czerwcu nawet 8-10 tygodni - sezon).",
  "Wycena w 15 minut. Telefon lub mail. Pojazd, kierowca, cena, plan trasy.",
  "Zadatek 30% - przelewem na fakturę dla przedszkola. Reszta: po wycieczce, fakturą z 14-dniowym terminem.",
  "W dniu wycieczki kierowca jest pod przedszkolem 15 minut przed planowanym wyjazdem. Sprawdzamy listę dzieci, opiekunów, dokumenty (zezwolenie nauczyciela na wyjazd).",
];

const knowledgeItems = [
  {
    title: "Foteliki są obowiązkiem przedszkola, nie przewoźnika",
    description:
      "Według rozporządzenia MSWiA dzieci do 150 cm wzrostu muszą mieć fotelik lub podstawkę w autokarze. Foteliki zapewnia organizator wycieczki (przedszkole/rodzice), nie przewoźnik. To powtarzające się pytanie - mówimy to wprost, żeby nie było niespodzianki dzień przed wyjazdem.",
  },
  {
    title: "Postoje co 1.5-2 godziny",
    description:
      "Dla dzieci 3-6 lat planujemy postoje krótsze i częściej niż dla dorosłych - co 1.5-2 godziny, 15-20 minut, najlepiej w miejscu z toaletą (stacja paliw, parking przy MOP). Przy trasach do 150 km zwykle wystarcza 1 postój w jedną stronę.",
  },
  {
    title: "Czas dla przedszkolaka = 4-6 godzin, nie więcej",
    description:
      "Doświadczenie 23 lat: wycieczki dłuższe niż 6 godzin są dla 3-4-latków za męczące. Płaczą, marudzą, niedobrze im. Rekomendujemy trasy do 80-100 km w jedną stronę, z 3-4 godzinami atrakcji na miejscu, łącznie 6-7 godzin od wyjazdu do powrotu pod przedszkole.",
  },
  {
    title: "Pierwsza pomoc w autokarze",
    description:
      "Apteczka pierwszej pomocy zgodna z PN-EN 1789 - w każdym pojeździe. Plus: gaśnica, młotek bezpieczeństwa do wybicia szyby (1 na każdy odcinek 4 m autokaru), worki na śmieci i ewentualne wymioty (dzieci czasem chorują w trasie - to normalne), ręczniki papierowe.",
  },
  {
    title: "Faktura dla przedszkola publicznego lub niepublicznego",
    description:
      "Wystawiamy fakturę VAT 23% na: przedszkole publiczne (płatność z budżetu gminy/miasta - 14 lub 21 dni), przedszkole niepubliczne (płatność standardowa - 14 dni), Radę Rodziców (jako stowarzyszenie - jeśli mają NIP). Możemy też wystawić fakturę pro forma do zapłaty przed wycieczką, jeśli wymaga tego procedura księgowa.",
  },
];

const testimonials = [
  {
    text: "Trzecia wycieczka z Autokar Busko w tym roku przedszkolnym. Pan kierowca Krzysztof zawsze ten sam - dzieci go znają, nie boją się. Apteczka pełna, autokar czysty, klimatyzacja działa. Polecam.",
    note: "[opinia 1 - placeholder, Rafał uzupełni z prawdziwych opinii Google]",
  },
  {
    text: "Wycieczka do Bałtowa, 28 dzieci, 4 opiekunów. Autokar pod przedszkolem 15 minut przed czasem. Wracaliśmy o godzinę później niż plan - park był pełen - bez najmniejszego problemu, bez dopłaty. Profesjonalnie.",
    note: "[opinia 2 - placeholder]",
  },
  {
    text: "Dziecko zwymiotowało w trasie. Kierowca natychmiast się zatrzymał, dał ręczniki papierowe i worki, woda była pod ręką (rodzice zabrali, autokar miał klimatyzację - to wystarczyło). Drobne sprawy, ale w sumie się liczą.",
    note: "[opinia 3 - placeholder]",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje autokar na wycieczkę przedszkolną?",
    answer:
      "Cena zależy od pojazdu i trasy. Bus 19-osobowy dla małej grupy do Bałtowa (60 km z Krakowa): 800-1100 zł. Autokar 49-osobowy z trasą Krakow - Sandomierz (100 km) - powrót: 1500-2000 zł. Skontaktuj się - wycena w 15 minut.",
  },
  {
    question: "Jakie wymagania bezpieczeństwa spełniają wasze autokary?",
    answer:
      "Każdy pojazd: badanie techniczne ITD co 6 miesięcy, pasy bezpieczeństwa na każdym siedzeniu (wymóg 2018), gaśnica, apteczka PN-EN 1789, młotek bezpieczeństwa, drogi ewakuacyjne oznaczone. Kierowca: badanie psychotechniczne co 5 lat, badanie lekarskie co 2 lata dla osób 60+. OC pojazdu plus NW każdego pasażera w cenie usługi.",
  },
  {
    question: "Czy zapewniacie foteliki dla dzieci do 150 cm?",
    answer:
      "Nie. Foteliki to obowiązek organizatora wycieczki (przedszkole lub rodzice), zgodnie z rozporządzeniem MSWiA. Nasz autokar zapewnia pasy bezpieczeństwa na każdym siedzeniu - to wymóg po stronie przewoźnika.",
  },
  {
    question: "Ile postojów na trasie 150 km?",
    answer:
      "Dla wycieczki przedszkolnej rekomendujemy 1-2 postoje na trasę 150 km - co 1.5-2 godziny, 15-20 minut, najlepiej w miejscu z toaletą (stacja paliw, MOP). Dla dzieci 3-6 lat dłuższe odcinki bez postoju są męczące.",
  },
  {
    question: "Co jeśli dziecko zwymiotuje albo zachoruje w trasie?",
    answer:
      "W każdym autokarze jest apteczka PN-EN 1789, worki na śmieci, ręczniki papierowe. Kierowca może się zatrzymać natychmiast, gdy opiekun zgłosi problem. Jeśli sytuacja wymaga lekarza - dzwonimy 112 i jedziemy do najbliższej przychodni/szpitala (nieskutkuje to dopłatą).",
  },
  {
    question: "Czy autokary mają klimatyzację?",
    answer:
      "Tak. Wszystkie nasze busy 19+ osobowe i wszystkie autokary mają klimatyzację. To standard od 2010 r. - bez tego latem nie da się przewozić ludzi, a tym bardziej dzieci.",
  },
  {
    question: "Jak płaci przedszkole - faktura, gotówka, zaliczka?",
    answer:
      "Wystawiamy fakturę VAT 23% na przedszkole (publiczne lub niepubliczne) lub na Radę Rodziców (jeśli ma NIP). Standardowo: zadatek 30% przelewem przy rezerwacji, reszta - fakturą z 14-dniowym terminem po wycieczce. Możliwa też faktura pro forma do zapłaty przed wyjazdem.",
  },
  {
    question: "Jak dawno przed wycieczką trzeba rezerwować?",
    answer:
      "Standardowo 4-6 tygodni przed wyjazdem. W okresie maj-czerwiec (szczyt sezonu wycieczek przedszkolnych) - 8-10 tygodni. Im później, tym mniej wyboru pojazdów. Dla październik-marzec - 2-3 tygodnie wystarczy.",
  },
];

const relatedLinks = [
  {
    href: "/pl/wycieczki-szkolne",
    title: "Wycieczka szkolna autokar",
    description: "dla podstawówki, gimnazjum, liceum",
  },
  {
    href: "/pl/cennik",
    title: "Cennik wynajmu autokaru",
    description: "pełny cennik orientacyjny",
  },
  {
    href: "/pl/flota",
    title: "Nasza flota - 180 pojazdów",
    description: "busy 19 os, autokary 49-67 os",
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
      images: ["/og-przedszkole.jpg"],
    },
  };
}

export default async function WycieczkaPrzedszkolnaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  toLang(lang);

  return (
    <>
      <Script id="schema-przedszkole" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaJsonLd)}
      </Script>

      <main className="bg-gray-50 text-gray-900">
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Autokar Busko</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Autokar na wycieczkę przedszkolną - bezpieczna podróż dla najmłodszych</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">Wiesz, kogo nam powierzasz. Stąd 24 lata bez wypadku, kierowcy z psychotechniką i pełne ubezpieczenie każdego pasażera.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-amber-600">Sprawdź wycenę w 15 min</a>
              <a href="tel:+48413453225" className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-gray-900">tel:+48413453225</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-200">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-gray-700 px-4 py-2">
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-300">24 lata · 80+ przedszkoli rocznie · zero wypadków</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6 text-lg leading-8 text-gray-800">
            <p>Wycieczka przedszkolna to dla wielu dzieci pierwsza dłuższa podróż w życiu.</p>
            <p>Dla pani dyrektor i nauczycieli to też ciężka odpowiedzialność: 30 maluchów w jednym pojeździe, rodzice którzy zostawili dziecko po raz pierwszy "tak daleko", godzina drogi w jedną stronę. Pytania powtarzają się: czy kierowca jest doświadczony, czy autokar przejdzie kontrolę ITD, czy w razie czego jest pierwsza pomoc, czy dzieci nie będą się dusić bez klimatyzacji w czerwcu.</p>
            <p>Obsługujemy przedszkola od 2003 roku. Ponad 80 przedszkoli rocznie - z Krakowa, Buska-Zdroju, Skarżyska, Pińczowa, Jędrzejowa. Najczęstsze trasy: Bałtowski Park Jurajski (450 000 zwiedzających rocznie - to numer jeden dla przedszkoli świętokrzyskich), Sandomierz, Park Trampolin Krakow, Pacanów.</p>
            <p>Skontaktuj się - wycena w 15 minut. Wszystko, czego potrzebujemy, to liczba dzieci i opiekunów, data wyjazdu, kierunek, planowany czas trwania.</p>
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
                <p className="mt-2 text-sm text-gray-700">Trasa przykładowa: {row.route}</p>
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
                  <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900">Trasa przykładowa</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900">Cena od</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.vehicle}>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm text-gray-800">{row.vehicle}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm text-gray-800">{row.seats}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm text-gray-800">{row.route}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm font-semibold text-gray-900">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-700">Cena zależy od daty, dystansu, długości dyspozycyjności. Skontaktuj się - wycena w 15 minut.</p>
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
            <h2 className="text-3xl font-bold text-gray-900">Opinie pań dyrektorek</h2>
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
            <h2 className="text-3xl font-bold">Wiesz, kogo nam powierzasz. Stąd nasze standardy.</h2>
            <div className="mt-8 space-y-3 text-base leading-7 text-gray-200">
              <p><a href="tel:+48413453225" className="text-amber-500">Telefon: +48 41 345 32 25</a></p>
              <p><a href="mailto:biuro@autokar-busko.pl" className="text-amber-500">Email: biuro@autokar-busko.pl</a></p>
              <p><a href="/pl/kontakt" className="text-amber-500">Formularz: Wyślij zapytanie</a></p>
              <p>Autokar Busko · Alfa Bus Sp. z o.o. · ul. Poprzeczna 1, 28-100 Busko-Zdrój</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
