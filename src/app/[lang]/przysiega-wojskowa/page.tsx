import type { Metadata } from "next";
import Script from "next/script";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const title = "Autokar na przysięgę wojskową - transport rodzin | Autokar Busko";
const description = "Wynajem autokaru na przysięgę wojskową. 30+ przysięg obsłużonych, pełna trasa: dom - jednostka - restauracja - odwóz. Bus 19 lub autokar 49-67 os. Tel: 41 345 32 25.";
const canonical = "https://www.autokar-busko.pl/pl/przysiega-wojskowa";

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
      name: "Autokar na przysięgę wojskową",
      item: canonical,
    },
  ],
};

const serviceSchema = {
  "@type": "Service",
  "@id": "https://www.autokar-busko.pl/pl/przysiega-wojskowa#service",
  name: "Wynajem autokaru na przysięgę wojskową",
  description:
    "Transport rodziny żołnierza na przysięgę wojskową. Pełna trasa: dom - jednostka - restauracja - odwóz. Bus 19-30 osób lub autokar 49-67 osób.",
  serviceType: "Military oath ceremony transport",
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
    lowPrice: "600",
    highPrice: "1800",
    offerCount: "4",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ile kosztuje autokar na przysięgę wojskową?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cena zależy od pojazdu i dystansu. Bus 19-osobowy dla bliższej rodziny: 600-900 zł. Autokar 49-osobowy z trasą do 150 km i postojem pod jednostką: 1000-1500 zł. Skontaktuj się - wycena w 15 minut, bez zobowiązań.",
      },
    },
    {
      "@type": "Question",
      name: "Czy autokar czeka pod jednostką w trakcie ceremonii?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Postój 2-4 godziny w trakcie ceremonii jest standardem, wliczony w cenę dyspozycyjności. Klimatyzacja włączona dla osób, które wolą zaczekać w pojeździe. Jeśli ceremonia przedłuży się powyżej 4 godzin - dopłata 50-80 zł za każdą dodatkową godzinę.",
      },
    },
    {
      "@type": "Question",
      name: "Czy autokar wjedzie do jednostki wojskowej?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie. Pojazdy cywilne zatrzymują się na parkingu zewnętrznym, zwykle 100-300 m od bramy jednostki. Goście dochodzą pieszo. Sprawdzamy z góry, gdzie dokładnie jest parking dla cywilów - każda jednostka ma swoje zasady.",
      },
    },
    {
      "@type": "Question",
      name: "Jak zorganizować transport dla rodziny z różnych miast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ustalamy jeden punkt zborny w mieście, najczęściej Dworzec PKP albo PKS - tam zabieramy wszystkich. Po obiedzie odwóz w różne kierunki, jednym kursem. Trasa do 200 km łączna - bez dopłaty za kilkukrotne kursowanie.",
      },
    },
    {
      "@type": "Question",
      name: "Czy obsługujecie przysięgi w soboty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. 80% przysięg odbywa się właśnie w soboty rano - dla nas to standardowy dzień pracy. Bez dopłaty weekendowej. Cena ta sama co w środku tygodnia.",
      },
    },
    {
      "@type": "Question",
      name: "Restauracja po przysiędze - jak to organizujemy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Po ceremonii zawozimy do uzgodnionej restauracji, czekamy na obiad rodzinny (zwykle 2-3 godziny), potem odwóz do domów. Wszystko w jednym zleceniu, jedna faktura. W okresie maj-czerwiec i wrzesień-październik prosimy rezerwować restaurację 3-4 tygodnie wcześniej.",
      },
    },
    {
      "@type": "Question",
      name: "Ile osób z rodziny zwykle jedzie na przysięgę?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Średnio 8-15 osób z rodziny na jednego żołnierza. Bus 19-osobowy zwykle wystarcza. Jeśli na jednej przysiędze są dwie rodziny - łączymy je w autokarze 49-osobowym, oszczędność 30-40% w stosunku do dwóch busów.",
      },
    },
    {
      "@type": "Question",
      name: "Czy można zapłacić fakturą z odroczonym terminem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Zadatek 30% przy rezerwacji (przelew lub gotówka), reszta - fakturą VAT z 14-dniowym terminem płatności po przysiędze. Możliwa też płatność w całości gotówką w dniu przysięgi - z rabatem 5%.",
      },
    },
  ],
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [serviceSchema, faqSchema, breadcrumbSchema],
};

const trustBadges = ["24 lata", "30+ przysięg", "soboty bez dopłat"];

const helpItems = [
  {
    title: "Pełna trasa w jednym zleceniu",
    description:
      "Dom rodziny - jednostka wojskowa - restauracja na obiad rodzinny - odwóz każdego do domu. Standardowo 8-10 godzin dyspozycyjności jednym pojazdem. Jeden kierowca, jedna umowa, jedna faktura.",
  },
  {
    title: "Postój pod jednostką w trakcie ceremonii",
    description:
      "Ceremonia trwa zwykle 2-3 godziny. Autokar czeka na parkingu zewnętrznym jednostki przez cały ten czas - postój wliczony w cenę dyspozycyjności. Klimatyzacja w autokarze włączona dla osób, które wolą zaczekać w środku.",
  },
  {
    title: "Pasażerowie z różnych miejscowości",
    description:
      "Babcia z Końskich, ciotka ze Skarżyska, rodzeństwo z Krakowa - wszyscy w jedno miejsce. Podstawiamy autokar w jednym punkcie zbornym (zwykle dworzec PKP lub miejsce uzgodnione), zabieramy wszystkich, jedziemy razem. Po obiedzie - odwóz w trzy różne kierunki, też jednym kursem.",
  },
  {
    title: "Soboty bez dopłat",
    description:
      "80% przysięg odbywa się w soboty rano. Dla nas to standardowy dzień pracy - bez weekendowych dopłat, bez \"dziś jest święto\". Cena ta sama co w środku tygodnia.",
  },
];

const pricingRows = [
  {
    vehicle: "Bus 19-osobowy",
    seats: "19 + 1",
    route: "Krakow - jednostka 60 km - restauracja - odwóz",
    price: "600-900 zł",
  },
  {
    vehicle: "Bus 30-osobowy",
    seats: "30 + 1",
    route: "Krakow - jednostka 100 km - restauracja - odwóz",
    price: "900-1300 zł",
  },
  {
    vehicle: "Autokar 49-osobowy",
    seats: "49 + 1",
    route: "Krakow - jednostka do 150 km - restauracja - odwóz",
    price: "1000-1500 zł",
  },
  {
    vehicle: "Autokar 53-67 os",
    seats: "53-67 + 1",
    route: "Dwóch lub więcej żołnierzy z jednej rodziny",
    price: "1200-1800 zł",
  },
];

const reservationSteps = [
  "Zadzwoń lub wyślij formularz. Zostaw kontakt, opisz krótko: liczbę osób, datę przysięgi, jednostkę, punkt zborny, lokalizację restauracji.",
  "Wycena w 15 minut. Odzywamy się telefonicznie lub mailem. Pojazd, kierowca, cena, godziny - wszystko jasno.",
  "Zadatek 30% - przelewem lub gotówką. Pozostała kwota: w dniu przysięgi lub fakturą z 14-dniowym terminem.",
  "W dniu przysięgi kierowca jest gotowy 30 minut przed wyjazdem, w uzgodnionym punkcie zbornym.",
];

const knowledgeItems = [
  {
    title: "Autokar nie wjeżdża do jednostki wojskowej",
    description:
      "Pojazdy cywilne zatrzymują się na parkingu zewnętrznym jednostki - zwykle 100-300 m od bramy. Goście dochodzą pieszo. Sprawdzamy z góry, gdzie dokładnie jest parking dla cywilów - każda jednostka ma swoje zasady.",
  },
  {
    title: "Punkt zborny w mieście oszczędza pieniądze",
    description:
      "Zamiast zbierać każdego pasażera spod jego domu, ustalamy jeden punkt w mieście (najczęściej dworzec PKP lub PKS). Każdy dojeżdża tam swoim autem albo komunikacją. Autokar startuje pełny - taniej i punktualniej.",
  },
  {
    title: "Ceremonia może się przedłużyć",
    description:
      "Plan ceremonii to 2-3 godziny, ale defilada, błogosławieństwo, indywidualne fotografie - bywa, że robi się 4 godziny. Kalkulujemy 5-6h dyspozycyjności pod samą jednostką, żeby nie było stresu. Jeśli skończy się szybciej, ruszamy wcześniej.",
  },
  {
    title: "Restauracja po przysiędze - zaplanuj z wyprzedzeniem",
    description:
      "Sobota w okolicach jednostki = restauracje pełne. W okresie maj-czerwiec i wrzesień-październik rezerwacja restauracji 3-4 tygodnie wcześniej. Wozimy do uzgodnionego miejsca, czekamy na obiad (2-3h), potem odwóz.",
  },
  {
    title: "Faktura na firmę żołnierza lub rodziny",
    description:
      "Wystawiamy fakturę VAT na dowolny podmiot - osobę prywatną, firmę żołnierza, firmę kogoś z rodziny. Termin płatności 14 dni od daty wystawienia. Jeśli płaci się gotówką w dniu przysięgi - rabat 5%.",
  },
];

const testimonials = [
  {
    text: "Przysięga w Wesołej, mieliśmy 40 osób z całej rodziny - rozrzuconych po pół Polsce. Autokar zebrał wszystkich na Dworcu Centralnym, zawiózł do jednostki, czekał całą ceremonię, potem restauracja i odwóz w trzy strony. Wszystko spięte w jedno zlecenie.",
    note: "[opinia 1 - placeholder, Rafał uzupełni z prawdziwych opinii Google]",
  },
  {
    text: "Pan kierowca dał gratis ojcu dziadka miejsce w pierwszym rzędzie. Małe rzeczy, ale dziadek miał 84 lata i każdy krok się liczył. Polecam.",
    note: "[opinia 2 - placeholder]",
  },
  {
    text: "2 PBOT Krakow, przysięga 18 maja. Wycena w 15 minut przez telefon. W dniu przysięgi autokar pod domem 30 min przed czasem. Profesjonalnie.",
    note: "[opinia 3 - placeholder]",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje autokar na przysięgę wojskową?",
    answer:
      "Cena zależy od pojazdu i dystansu. Bus 19-osobowy dla bliższej rodziny: 600-900 zł. Autokar 49-osobowy z trasą do 150 km i postojem pod jednostką: 1000-1500 zł. Skontaktuj się - wycena w 15 minut, bez zobowiązań.",
  },
  {
    question: "Czy autokar czeka pod jednostką w trakcie ceremonii?",
    answer:
      "Tak. Postój 2-4 godziny w trakcie ceremonii jest standardem, wliczony w cenę dyspozycyjności. Klimatyzacja włączona dla osób, które wolą zaczekać w pojeździe. Jeśli ceremonia przedłuży się powyżej 4 godzin - dopłata 50-80 zł za każdą dodatkową godzinę.",
  },
  {
    question: "Czy autokar wjedzie do jednostki wojskowej?",
    answer:
      "Nie. Pojazdy cywilne zatrzymują się na parkingu zewnętrznym, zwykle 100-300 m od bramy jednostki. Goście dochodzą pieszo. Sprawdzamy z góry, gdzie dokładnie jest parking dla cywilów - każda jednostka ma swoje zasady.",
  },
  {
    question: "Jak zorganizować transport dla rodziny z różnych miast?",
    answer:
      "Ustalamy jeden punkt zborny w mieście, najczęściej Dworzec PKP albo PKS - tam zabieramy wszystkich. Po obiedzie odwóz w różne kierunki, jednym kursem. Trasa do 200 km łączna - bez dopłaty za kilkukrotne kursowanie.",
  },
  {
    question: "Czy obsługujecie przysięgi w soboty?",
    answer:
      "Tak. 80% przysięg odbywa się właśnie w soboty rano - dla nas to standardowy dzień pracy. Bez dopłaty weekendowej. Cena ta sama co w środku tygodnia.",
  },
  {
    question: "Restauracja po przysiędze - jak to organizujemy?",
    answer:
      "Po ceremonii zawozimy do uzgodnionej restauracji, czekamy na obiad rodzinny (zwykle 2-3 godziny), potem odwóz do domów. Wszystko w jednym zleceniu, jedna faktura. W okresie maj-czerwiec i wrzesień-październik prosimy rezerwować restaurację 3-4 tygodnie wcześniej - okolice jednostek są oblegane.",
  },
  {
    question: "Ile osób z rodziny zwykle jedzie na przysięgę?",
    answer:
      "Średnio 8-15 osób z rodziny na jednego żołnierza. Bus 19-osobowy zwykle wystarcza. Jeśli na jednej przysiędze są dwie rodziny (np. dwóch żołnierzy z jednej miejscowości) - łączymy je w autokarze 49-osobowym, oszczędność 30-40% w stosunku do dwóch busów.",
  },
  {
    question: "Czy można zapłacić fakturą z odroczonym terminem?",
    answer:
      "Tak. Zadatek 30% przy rezerwacji (przelew lub gotówka), reszta - fakturą VAT z 14-dniowym terminem płatności po przysiędze. Możliwa też płatność w całości gotówką w dniu przysięgi - z rabatem 5%.",
  },
];

const relatedLinks = [
  {
    href: "/pl/wycieczki-szkolne",
    title: "Wycieczka klasowa autokar",
    description: "dla klas wojskowych i mundurowych",
  },
  {
    href: "/pl/cennik",
    title: "Cennik wynajmu autokaru",
    description: "pełny cennik orientacyjny",
  },
  {
    href: "/pl/flota",
    title: "Nasza flota - 180 pojazdów",
    description: "busy 19 os, autokary 49-67 os, pojazdy VIP",
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
      images: ["/og-przysiega.jpg"],
    },
  };
}

export default async function PrzysiegaWojskowaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  toLang(lang);

  return (
    <>
      <Script id="schema-przysiega" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaJsonLd)}
      </Script>

      <main className="bg-gray-50 text-gray-900">
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Autokar Busko</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Autokar na przysięgę wojskową - bezpieczny transport rodzin</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">Sprawnie zaplanowany dzień dla rodziny żołnierza. Dom, jednostka, restauracja, odwóz - jedno zlecenie, jeden kierowca, jedna faktura.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-md bg-[#EAF3DE]0 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-[#5DCAA5]">Sprawdź wycenę w 15 min</a>
              <a href="tel:+48413453225" className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-gray-900">tel:+48413453225</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-200">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-gray-700 px-4 py-2">
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-300">24 lata · 30+ przysięg · soboty bez dopłat</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6 text-lg leading-8 text-gray-800">
            <p>Przysięga wojskowa to jeden dzień, na który czeka cała rodzina.</p>
            <p>Rodzice, rodzeństwo, babcia z dziadkiem, czasem narzeczona z dziećmi - wszyscy chcą być przy żołnierzu, kiedy wypowiada rotę. Logistycznie wygląda to tak: dom rano, długa droga do jednostki, parking pod jednostką, ceremonia 2-3 godziny, potem restauracja na obiad rodzinny, w końcu odwóz wszystkich z powrotem - czasem do różnych miejscowości.</p>
            <p>Obsługujemy przysięgi wojskowe od 2003 roku. Ponad 30 ceremonii rocznie - 2 PBOT Krakow najczęściej, ale też Sandomierz, Tomaszów Mazowiecki, Skierniewice, Wesoła, Lublin.</p>
            <p>Skontaktuj się - wycena w 15 minut. Wszystko, czego potrzebujemy, to liczba osób, data przysięgi, jednostka i lokalizacje do odwozu.</p>
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

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-700">Cena zależy od daty, dystansu i liczby godzin dyspozycyjności. Skontaktuj się - wycena w 15 minut.</p>
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
            <h2 className="text-3xl font-bold text-gray-900">Opinie rodzin</h2>
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
            <h2 className="text-3xl font-bold">Rodzina żołnierza zasługuje na sprawnie zaplanowany dzień. Pomożemy.</h2>
            <div className="mt-8 space-y-3 text-base leading-7 text-gray-200">
              <p><a href="tel:+48413453225" className="text-[#639922]">Telefon: +48 41 345 32 25</a></p>
              <p><a href="mailto:biuro@autokar-busko.pl" className="text-[#639922]">Email: biuro@autokar-busko.pl</a></p>
              <p><a href="/pl/kontakt" className="text-[#639922]">Formularz: Wyślij zapytanie</a></p>
              <p>Autokar Busko · Alfa Bus Sp. z o.o. · ul. Poprzeczna 1, 28-100 Busko-Zdrój</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
