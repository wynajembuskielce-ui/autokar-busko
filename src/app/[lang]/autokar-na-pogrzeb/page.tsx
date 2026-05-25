import type { Metadata } from "next";
import Script from "next/script";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const title = "Autokar na pogrzeb - dyskretny transport rodziny | Autokar Busko";
const description = "Wynajem autokaru i busa na pogrzeb. 100+ pogrzebów obsłużonych dyskretnie. Bus 19 os lub autokar 49 os. Pomoc w 24h. Tel: 41 345 32 25.";
const canonical = "https://www.autokar-busko.pl/pl/autokar-na-pogrzeb";

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
      name: "Autokar na pogrzeb",
      item: canonical,
    },
  ],
};

const serviceSchema = {
  "@type": "Service",
  "@id": "https://www.autokar-busko.pl/pl/autokar-na-pogrzeb#service",
  name: "Wynajem autokaru na pogrzeb",
  description:
    "Dyskretny transport rodziny i przyjaciół na pogrzeb oraz stypę. Bus 19-30 osób lub autokar 49-67 osób. Pomoc w 24 godziny.",
  serviceType: "Funeral transport",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://www.autokar-busko.pl/#organization",
    name: "Autokar Busko",
    legalName: "Alfa Bus 26 Sp. z o.o.",
    telephone: "+48413453225",
    email: "biuro@autokar-busko.pl",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Poprzeczna 1",
      addressLocality: "Busko-Zdrój",
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
    lowPrice: "400",
    highPrice: "1500",
    offerCount: "4",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ile kosztuje autokar na pogrzeb?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cena zależy od pojazdu i trasy. Bus 19-osobowy dla najbliższej rodziny: 400-700 zł. Autokar 49-osobowy z trasą do 100 km i postojem w trakcie mszy: 800-1200 zł. Skontaktuj się - wycena w 24 godziny, bez zobowiązań.",
      },
    },
    {
      "@type": "Question",
      name: "Jak szybko można zarezerwować autokar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pomagamy w 24-48 godzin od pierwszego kontaktu. W pilnych przypadkach - do 12 godzin, jeśli mamy wolny pojazd na daną datę. Zadzwoń pod 41 345 32 25 albo wyślij formularz - odzywamy się w ciągu godziny.",
      },
    },
    {
      "@type": "Question",
      name: "Czy macie pojazdy bez agresywnej reklamy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Nasze autokary standardowo mają minimalne, dyskretne logo na boku. Na życzenie podstawiamy pojazd zupełnie bez reklam - informuj o tym przy rezerwacji. W przypadku pogrzebów to nasza standardowa praktyka.",
      },
    },
    {
      "@type": "Question",
      name: "W jakim stroju przyjeżdża kierowca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ciemna koszula, ciemne spodnie. Bez napisów firmowych. Kierowca rozumie wagę sytuacji - zachowuje ciszę, nie wchodzi w rozmowy poza tymi koniecznymi z organizatorem transportu.",
      },
    },
    {
      "@type": "Question",
      name: "Czy autokar czeka pod kościołem w trakcie mszy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Postój 2-3 godziny w trakcie mszy i ceremonii pogrzebowej jest standardem, wliczony w cenę dyspozycyjności. Jeśli ceremonia przedłuży się, dopłata: 50-80 zł za każdą dodatkową godzinę.",
      },
    },
    {
      "@type": "Question",
      name: "Trasa dom-kościół-cmentarz-stypa - ile to kosztuje?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Standardowo wszystkie 3-4 punkty są w jednym zleceniu. Kalkulacja: 4-6 godzin dyspozycyjności plus przejechane kilometry (2-4 zł/km). Dla trasy do 100 km łącznie: 800-1200 zł autokar 49-osobowy.",
      },
    },
    {
      "@type": "Question",
      name: "Czy autokar dojeżdża pod sam kościół?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zwykle tak - autokar zatrzymuje się na parkingu kościelnym lub w pobliżu (50-100 m od wejścia). W ścisłym centrum miast - Krakow, Sandomierz, stare miasto - zatrzymujemy się na najbliższym legalnym parkingu, rodzina dochodzi pieszo.",
      },
    },
    {
      "@type": "Question",
      name: "Czy można zapłacić po pogrzebie - fakturą?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Dla pogrzebów wystawiamy fakturę VAT z 14-dniowym terminem płatności. Rodzina nie musi płacić w dniu pogrzebu. Zadatek nie jest wymagany. Wszystko regulujemy po, fakturą.",
      },
    },
  ],
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [serviceSchema, faqSchema, breadcrumbSchema],
};

const trustBadges = ["24 lata", "100+ pogrzebów", "pomoc w 24h"];

const helpItems = [
  {
    title: "Dyskretne pojazdy",
    description:
      "Nasze autokary mają minimalne, boczne logo. Na życzenie podstawiamy pojazd bez żadnego oznakowania firmowego - informuj o tym przy rezerwacji. W przypadku pogrzebów to nasza standardowa praktyka.",
  },
  {
    title: "Kierowca w stonowanym ubiorze",
    description:
      "Ciemna koszula, ciemne spodnie. Bez napisów firmowych, bez plakietek. Kierowca rozumie wagę sytuacji - zachowuje ciszę, nie wchodzi w rozmowy poza tymi koniecznymi z organizatorem transportu.",
  },
  {
    title: "Pełna trasa w jednym zleceniu",
    description:
      "Dom rodziny -> kościół -> cmentarz -> restauracja na stypę -> odwóz do domów. Standardowo wszystkie 3-5 punktów obsługujemy jednym pojazdem przez 4-6 godzin dyspozycyjności. Jeden kierowca, jedna umowa, jedna faktura.",
  },
  {
    title: "Pomoc w 24 godziny",
    description:
      "Pogrzeb nie ma sześciomiesięcznego wyprzedzenia, jak wesele. Odzywamy się do godziny od pierwszego kontaktu. Wycena w 24 godziny. W pilnych przypadkach - do 12 godzin, jeśli mamy wolny pojazd na daną datę.",
  },
];

const pricingRows = [
  {
    vehicle: "Bus 19-osobowy",
    seats: "19 + 1",
    route: "Krakow + okolice 60 km, 4h dyspozycyjności",
    price: "400-700 zł",
  },
  {
    vehicle: "Bus 30-osobowy",
    seats: "30 + 1",
    route: "Krakow -> cmentarz w okolicy (50 km) + stypa",
    price: "600-900 zł",
  },
  {
    vehicle: "Autokar 49-osobowy",
    seats: "49 + 1",
    route: "Trasa do 100 km z postojem w trakcie mszy",
    price: "800-1200 zł",
  },
  {
    vehicle: "Autokar 53-67 os",
    seats: "53-67 + 1",
    route: "Trasa do 100 km, 5-6h dyspozycyjności",
    price: "1000-1500 zł",
  },
];

const reservationSteps = [
  "Zadzwoń lub wyślij formularz. Zostaw kontakt, opisz krótko: liczbę osób, datę pogrzebu, adresy trzech punktów (dom, kościół, cmentarz).",
  "Wycena w 24 godziny. Odzywamy się telefonicznie lub mailem. Wszystko jasno: pojazd, kierowca, cena, godziny.",
  "Zadatek nie jest wymagany. Płacisz po, fakturą z 14-dniowym terminem. Rodzina nie musi płacić w dniu pogrzebu.",
  "W dniu pogrzebu kierowca jest gotowy 30 minut przed wyjazdem, w miejscu uzgodnionym z organizatorem.",
];

const knowledgeItems = [
  {
    title: "Trasa to nie tylko kościół -> cmentarz",
    description:
      "Najczęściej obsługujemy 3-4 punkty: dom rodziny rano, kościół na mszę, cmentarz po ceremonii, restauracja na stypę. Czas autokaru: 4-6 godzin dyspozycyjności. Dłużej? Dopłata 50-80 zł za każdą dodatkową godzinę.",
  },
  {
    title: "Wymagamy informacji 24 godziny wcześniej",
    description:
      "Minimum: liczba osób, adresy trzech punktów, godzina mszy. Im wcześniej masz dane, tym lepiej dobierzemy pojazd - bus 19-osobowy dla najbliższej rodziny czy autokar 49-osobowy dla rodziny rozszerzonej i znajomych.",
  },
  {
    title: "Autokar bez agresywnej reklamy",
    description:
      "Nasze pojazdy standardowo mają minimalne logo na boku. Dla pogrzebów na życzenie podstawiamy pojazd bez żadnego brandingu. Wystarczy, że napiszesz \"bez reklamy\" w rezerwacji.",
  },
  {
    title: "Kierowca zna procedurę pogrzebową",
    description:
      "Wie, kiedy ustępuje pierwszeństwa konduktowi pogrzebowemu, gdzie się zatrzymuje przed kościołem (zwykle 50-100 m od wejścia, na legalnym parkingu), jak prowadzi przy cmentarzu. Nasi kierowcy mają średnio 12-18 lat doświadczenia w przewozach.",
  },
  {
    title: "Płatność po pogrzebie, fakturą VAT",
    description:
      "Dla pogrzebów wystawiamy fakturę z 14-dniowym terminem płatności. Zadatek nie jest wymagany. Rodzina ma w dniu pogrzebu inne sprawy niż przelew bankowy - regulujemy wszystko po.",
  },
];

const testimonials = [
  {
    text: "Pan Marek, kierowca, był bardzo dyskretny. Wiedział, kiedy się odsunąć, kiedy pomóc starszej cioci wsiąść do autokaru. Cała trasa od kościoła do cmentarza i potem do restauracji - bez stresu. Dziękujemy.",
    note: "[opinia 1 - placeholder, Rafał uzupełni z prawdziwych opinii Google]",
  },
  {
    text: "Skontaktowałem się w czwartek wieczorem, pogrzeb był w sobotę. W ciągu godziny dostałem wycenę, w sobotę autokar był 20 minut przed planowaną zbiórką. Profesjonalnie.",
    note: "[opinia 2 - placeholder]",
  },
  {
    text: "Wystawili fakturę z 14-dniowym terminem płatności. W dniu pogrzebu nie musieliśmy nawet myśleć o pieniądzach. Mała rzecz, ale dla rodziny w żałobie - duża sprawa.",
    note: "[opinia 3 - placeholder]",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje autokar na pogrzeb?",
    answer:
      "Cena zależy od pojazdu i trasy. Bus 19-osobowy dla najbliższej rodziny: 400-700 zł. Autokar 49-osobowy z trasą do 100 km i postojem w trakcie mszy: 800-1200 zł. Skontaktuj się - wycena w 24 godziny, bez zobowiązań.",
  },
  {
    question: "Jak szybko można zarezerwować autokar?",
    answer:
      "Pomagamy w 24-48 godzin od pierwszego kontaktu. W pilnych przypadkach - do 12 godzin, jeśli mamy wolny pojazd na daną datę. Zadzwoń pod 41 345 32 25 albo wyślij formularz - odzywamy się w ciągu godziny.",
  },
  {
    question: "Czy macie pojazdy bez agresywnej reklamy?",
    answer:
      "Tak. Nasze autokary standardowo mają minimalne, dyskretne logo na boku. Na życzenie podstawiamy pojazd zupełnie bez reklam - informuj o tym przy rezerwacji. W przypadku pogrzebów to nasza standardowa praktyka.",
  },
  {
    question: "W jakim stroju przyjeżdża kierowca?",
    answer:
      "Ciemna koszula, ciemne spodnie. Bez napisów firmowych. Kierowca rozumie wagę sytuacji - zachowuje ciszę, nie wchodzi w rozmowy poza tymi koniecznymi z organizatorem transportu.",
  },
  {
    question: "Czy autokar czeka pod kościołem w trakcie mszy?",
    answer:
      "Tak. Postój 2-3 godziny w trakcie mszy i ceremonii pogrzebowej jest standardem, wliczony w cenę dyspozycyjności. Jeśli ceremonia przedłuży się, dopłata: 50-80 zł za każdą dodatkową godzinę.",
  },
  {
    question: "Trasa dom-kościół-cmentarz-stypa - ile to kosztuje?",
    answer:
      "Standardowo wszystkie 3-4 punkty są w jednym zleceniu. Kalkulacja: 4-6 godzin dyspozycyjności plus przejechane kilometry (2-4 zł/km). Dla trasy do 100 km łącznie: 800-1200 zł autokar 49-osobowy.",
  },
  {
    question: "Czy autokar dojeżdża pod sam kościół?",
    answer:
      "Zwykle tak - autokar zatrzymuje się na parkingu kościelnym lub w pobliżu (50-100 m od wejścia). W ścisłym centrum miast - Krakow, Sandomierz, stare miasto - zatrzymujemy się na najbliższym legalnym parkingu, rodzina dochodzi pieszo.",
  },
  {
    question: "Czy można zapłacić po pogrzebie - fakturą?",
    answer:
      "Tak. Dla pogrzebów wystawiamy fakturę VAT z 14-dniowym terminem płatności. Rodzina nie musi płacić w dniu pogrzebu. Zadatek nie jest wymagany. Wszystko regulujemy po, fakturą.",
  },
];

const relatedLinks = [
  {
    href: "/pl/blog/pogrzeb/transport-rodziny-na-pogrzeb-jak-zorganizowac",
    title: "Transport rodziny na pogrzeb - jak zorganizować",
    description: "praktyczny przewodnik krok po kroku dla rodziny",
  },
  {
    href: "/pl/pielgrzymki",
    title: "Autokar na pielgrzymkę",
    description: "transport parafialny, sanktuaria w Polsce i za granicą",
  },
  {
    href: "/pl/cennik",
    title: "Cennik wynajmu autokaru",
    description: "pełny cennik orientacyjny dla wszystkich usług",
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
  await params;

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
      images: ["/og-pogrzeb.jpg"],
    },
  };
}

export default async function AutokarNaPogrzebPage({ params }: { params: Promise<{ lang: string }> }) {
  await params;

  return (
    <>
      <Script id="schema-pogrzeb" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaJsonLd)}
      </Script>

      <main className="bg-gray-50 text-gray-900">
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-300">Autokar Busko</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Autokar na pogrzeb - dyskretny, godny transport rodziny</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">Pomagamy zorganizować transport dla rodziny i przyjaciół w trudnym czasie. Bez stresu, w 24 godziny.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-md bg-[#EAF3DE]0 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-[#5DCAA5]">Skontaktuj się - pomożemy w 24h</a>
              <a href="tel:+48413453225" className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-gray-900">tel:+48413453225</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-200">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-gray-700 px-4 py-2">
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-300">24 lata · 100+ pogrzebów · pomoc w 24h</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6 text-lg leading-8 text-gray-800">
            <p>Pogrzeb to ostatnia rzecz, którą chce się planować logistycznie.</p>
            <p>Wiemy, jak wygląda ten dzień od strony rodziny - telefony, formalności, ksiądz, kwiaciarnia, restauracja, lista gości. Transport spada na koniec, choć dotyka wszystkich naraz: kto zabierze ciotki ze wsi, jak dojedziemy na cmentarz, czy autokar zaczeka pod kościołem.</p>
            <p>Przewozimy rodziny na pogrzeby od 2003 roku. Obsłużyliśmy ponad 100 pogrzebów - dyskretnie, bez agresywnej reklamy na pojazdach, z kierowcami, którzy wiedzą, kiedy zachować ciszę.</p>
            <p>Skontaktuj się - pomożemy zorganizować transport w 24 godziny. Wszystko, czego potrzebujemy, to liczba osób, adresy trzech punktów (zwykle: dom rodziny, kościół, cmentarz lub stypa) i godzina mszy.</p>
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

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-700">Cena zależy od daty, długości trasy i czasu postoju. Skontaktuj się - wycena w 24 godziny, bez zobowiązań.</p>
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
            <h2 className="text-3xl font-bold">Pogrzeb wymaga spokoju, nie organizacji. Pomożemy.</h2>
            <div className="mt-8 space-y-3 text-base leading-7 text-gray-200">
              <p><a href="tel:+48413453225" className="text-[#639922]">Telefon: +48 41 345 32 25</a></p>
              <p><a href="mailto:biuro@autokar-busko.pl" className="text-[#639922]">Email: biuro@autokar-busko.pl</a></p>
              <p><a href="/pl/kontakt" className="text-[#639922]">Formularz: Wyślij zapytanie -&gt;</a></p>
              <p>Autokar Busko · Alfa Bus 26 Sp. z o.o. · ul. Poprzeczna 1, 28-100 Busko-Zdrój</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}