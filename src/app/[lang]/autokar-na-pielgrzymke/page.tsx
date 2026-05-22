import type { Metadata } from "next";
import Script from "next/script";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const title = "Autokar na pielgrzymkę - Jasna Góra, Watykan, Medjugorje | MUSZKIETER";
const description = "Wynajem autokaru na pielgrzymkę krajową i zagraniczną. 200+ parafii obsłużonych od 2003, Jasna Góra, Licheń, Watykan, Medjugorje. Tel: 601 076 652 lub 41 345 32 25.";
const canonical = "https://www.autokar-busko.pl/pl/autokar-na-pielgrzymke";

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
      name: "Autokar na pielgrzymkę",
      item: canonical,
    },
  ],
};

const serviceSchema = {
  "@type": "Service",
  "@id": "https://www.autokar-busko.pl/pl/autokar-na-pielgrzymke#service",
  name: "Wynajem autokaru na pielgrzymkę",
  description:
    "Autokar na pielgrzymkę krajową i zagraniczną. 200+ parafii od 2003. Jasna Góra, Licheń, Watykan, Medjugorje. Kierowca rozumiejący tradycję, miejsce dla księdza, ołtarz polowy.",
  serviceType: "Religious pilgrimage transport",
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
  areaServed: [
    {
      "@type": "Country",
      name: "Polska",
    },
    {
      "@type": "Country",
      name: "Włochy",
    },
    {
      "@type": "Country",
      name: "Bośnia i Hercegowina",
    },
    {
      "@type": "Country",
      name: "Francja",
    },
    {
      "@type": "Country",
      name: "Portugalia",
    },
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "PLN",
    lowPrice: "1000",
    highPrice: "28000",
    offerCount: "4",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ile kosztuje pielgrzymka na Jasną Górę z Krakowa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pielgrzymka 1-dniowa autokarem 49-osobowym, trasa Krakow - Częstochowa - powrót, około 360 km i 10-12 godzin dyspozycyjności: 1000-1400 zł. Cena obejmuje paliwo, drogi, ubezpieczenie pojazdu, kierowcę.",
      },
    },
    {
      "@type": "Question",
      name: "Ile kosztuje pielgrzymka do Medjugorje autokarem?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pielgrzymka 8-dniowa do Medjugorje autokarem 49-osobowym z dwoma kierowcami, około 2300 km w obie strony: 14000-18000 zł. Cena obejmuje paliwo, winiety, noclegi kierowców, ubezpieczenie pojazdu.",
      },
    },
    {
      "@type": "Question",
      name: "Czy autokar może mieć miejsce dla księdza i ołtarz polowy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Pierwszy lub dwa pierwsze rzędy zarezerwowane dla księdza koordynatora i schola. Mikrofon, miejsce na nuty, instrumenty. Luk bagażowy ma miejsce na ołtarz polowy (rozkładany), monstrancję, świece, paramenty liturgiczne. Standard naszych pielgrzymek - bez dopłat.",
      },
    },
    {
      "@type": "Question",
      name: "Czy kierowcy szanują tradycję pielgrzymkową?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Większość naszych kierowców to praktykujący katolicy z Krakowa i okolic. Szanują różaniec, koronkę, śpiew - zachowują ciszę w czasie modlitwy. Modlą się z grupą jeśli czują się komfortowo. Dla pielgrzymek zagranicznych wybieramy kierowców z doświadczeniem w przewozach do sanktuariów.",
      },
    },
    {
      "@type": "Question",
      name: "Postoje przy sanktuariach po drodze - bez dopłat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Standardowo planujemy 1-2 postoje przy znaczących sanktuariach na trasie - w cenie zlecenia. Z Krakowa na Jasną Górę: postój w Częstochowie. Z Krakowa do Watykanu: Loreto, Asyż. Plan trasy uzgadniamy z księdzem koordynatorem 7 dni przed wyjazdem.",
      },
    },
    {
      "@type": "Question",
      name: "Jakie dokumenty na pielgrzymkę zagraniczną?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strefa Schengen (Włochy, Francja, Hiszpania, Niemcy, Austria): dowód osobisty wystarczy. Poza Schengen: Bośnia i Hercegowina (Medjugorje), Macedonia Północna, Albania - paszport ważny minimum 6 miesięcy. Weryfikacja dokumentów pielgrzymów 14 dni przed wyjazdem.",
      },
    },
    {
      "@type": "Question",
      name: "Czy obsługujecie pielgrzymki w sezonie majowym?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Maj to klasyczny miesiąc pielgrzymek na Jasną Górę (nabożeństwa majowe). Mamy duży zasób autokarów na ten okres, ale rezerwacje przyjmujemy najpóźniej 6-8 tygodni wcześniej - w maju 80% naszej floty jest zajęte parafiami z całej Diecezji Kieleckiej.",
      },
    },
    {
      "@type": "Question",
      name: "Faktura dla parafii - jak to działa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wystawiamy fakturę VAT na parafię (kościół katolicki ma osobowość prawną). Terminy płatności: 14 dni dla 1-3 dniowych, 21-30 dni dla zagranicznych. Zadatek 20-30% przy rezerwacji, reszta po pielgrzymce lub przed - do uzgodnienia z księdzem proboszczem.",
      },
    },
  ],
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [serviceSchema, faqSchema, breadcrumbSchema],
};

const trustBadges = ["24 lata", "200+ parafii", "kierowcy szanujący tradycję"];

const helpItems = [
  {
    title: "Kierowca rozumiejący rytm pielgrzymki",
    description:
      "Większość naszych kierowców to praktykujący katolicy - szanują różaniec w drodze, znają tradycję postojów przy mijanych sanktuariach, wiedzą kiedy zachować ciszę. To nie marketing - to po prostu nasi ludzie z Krakowa i okolic, w okolicy gdzie tradycja kościelna jest silna. Spokój kierowcy daje spokój pielgrzymom.",
  },
  {
    title: "Miejsce dla księdza i ołtarza polowego",
    description:
      "Pierwszy rząd autokaru rezerwowany dla księdza koordynatora i dla schola - miejsce na nuty, instrumenty, mikrofon. Luk bagażowy ma miejsce na ołtarz polowy (rozkładany, do mszy w czasie postoju), monstrancję, świece, paramenty liturgiczne. Dla pielgrzymek z procesją - kierowca pomaga rozłożyć ołtarz na MOP.",
  },
  {
    title: "Postoje przy sanktuariach po drodze",
    description:
      "Standardowo planujemy 1-2 postoje przy znaczących sanktuariach po drodze - bez dodatkowych opłat. Z Krakowa na Jasną Górę: postój w Częstochowie pod klasztorem na 20-30 minut. Z Krakowa do Watykanu: postoje w Loreto, Asyżu (zależnie od trasy). Plan trasy uzgadniamy z księdzem koordynatorem 7 dni przed wyjazdem.",
  },
  {
    title: "Pełna obsługa pielgrzymek 1-14 dniowych",
    description:
      "Krótkie 1-dniowe (Jasna Góra, Licheń, Łagiewniki - 1 dzień). Średnie 2-4 dniowe (klasyczne weekendowe pielgrzymki krajowe). Długie 7-14 dniowe (zagraniczne: Medjugorje 8 dni, Włochy 10 dni, Lourdes 7 dni). Dla zagranicznych: dwóch kierowców (wymóg ITD ponad 9h prowadzenia), nocleg kierowców w cenie.",
  },
];

const pricingRows = [
  {
    route: "Jasna Góra z Krakowa (1 dzień)",
    vehicle: "Autokar 49 os",
    days: "1",
    price: "1000-1400 zł",
  },
  {
    route: "Licheń z Krakowa (2 dni)",
    vehicle: "Autokar 49 os",
    days: "2",
    price: "2200-3000 zł",
  },
  {
    route: "Medjugorje BiH (8 dni)",
    vehicle: "Autokar 49 os, 2 kierowców",
    days: "8",
    price: "14000-18000 zł",
  },
  {
    route: "Watykan-Asyż (10 dni)",
    vehicle: "Autokar 49 os, 2 kierowców",
    days: "10",
    price: "20000-28000 zł",
  },
];

const reservationSteps = [
  "Zadzwoń lub wyślij formularz - liczba pielgrzymów, data, kierunek, długość. Kontakt: ksiądz koordynator albo organizator świecki (rada parafialna, grupa wiernych). Termin rezerwacji: 4-6 tygodni dla krajowej, 8-12 tygodni dla zagranicznej. Pielgrzymki w sezonie (maj, sierpień, październik) - dodatkowe 4 tygodnie.",
  "Wycena w 15 minut - telefon lub mail. Pojazd, kierowcy, plan trasy, cena rozbita.",
  "Zadatek 20-30% - przelewem na konto parafii lub bezpośrednio. Faktura VAT dla parafii (płatność z budżetu organizacji kościelnej, zwykle 14-30 dni).",
  "W dniu wyjazdu autokar pod kościołem 30 minut przed planowaną godziną. Ksiądz koordynator odbiera krótkie wprowadzenie od kierowcy - kontakt awaryjny, miejsce ładowania telefonów, plan postojów.",
];

const knowledgeItems = [
  {
    title: "Dokumenty na pielgrzymkę zagraniczną",
    description:
      "Strefa Schengen (Włochy, Francja, Hiszpania, Niemcy): dowód osobisty pielgrzyma wystarczy. Poza Schengen: Bośnia i Hercegowina (Medjugorje), Macedonia Pn., Albania - paszport ważny minimum 6 miesięcy. Dla pielgrzymki do Medjugorje proponujemy weryfikację dokumentów pielgrzymów 14 dni przed wyjazdem.",
  },
  {
    title: "Ubezpieczenie podróżne pielgrzymów",
    description:
      "Dla pielgrzymek zagranicznych obowiązkowe jest ubezpieczenie podróżne (NW + Koszty Leczenia) dla każdego pielgrzyma. Możemy załatwić przez naszego brokera - około 25 zł/os za 8 dni Medjugorje, 35-50 zł/os za 10 dni Włochy. Polisa wysyłana mailem 5 dni przed wyjazdem, kopia w autokarze.",
  },
  {
    title: "Pierwsze rzędy dla księdza i schola",
    description:
      "Pierwszy lub dwa pierwsze rzędy autokaru są zarezerwowane dla księdza koordynatora i dla schola (jeśli jest). Tam jest mikrofon do prowadzenia modlitwy, miejsce na nuty, instrumenty. Dla dłuższych pielgrzymek (5+ dni) miejsce dla księdza ma rozkładany stolik - możliwość pisania, czytania brewiarza, korespondencji.",
  },
  {
    title: "Nocleg kierowcy w cenie",
    description:
      "Dla pielgrzymek 2+ dniowych nocleg kierowcy zapewniamy w pakiecie - hotel klasy 2-3* w pobliżu sanktuarium lub miejsca noclegu pielgrzymów. Częsta praktyka: parafia załatwia nocleg w domu pielgrzyma przy sanktuarium - tańsze, kierowca też się dostosowuje. Drugi kierowca (na pielgrzymki zagraniczne) dojeżdża własnym autem.",
  },
  {
    title: "Faktura na parafię - VAT z terminem płatności",
    description:
      "Wystawiamy fakturę VAT na parafię (kościół katolicki ma statut wspólnoty kościelnej i osobowość prawną). Standardowe terminy płatności: 14 dni dla pielgrzymek 1-3 dniowych, 21-30 dni dla zagranicznych (dłuższych). Zadatek 20-30% przy rezerwacji, reszta po pielgrzymce lub przed (do uzgodnienia z księdzem proboszczem).",
  },
];

const testimonials = [
  {
    text: "Pielgrzymka parafialna na Jasną Górę, 47 osób, MUSZKIETER. Kierowca Pan Krzysztof zatrzymał się przy każdym sanktuarium, które wymieniłem w planie - bez dodatkowych opłat. Spokojny, kulturalny, modlił się z nami koronką. Polecam każdej parafii.",
    note: "[opinia 1 - placeholder, Rafał uzupełni z prawdziwych opinii Google]",
  },
  {
    text: "Medjugorje 8 dni, 49 pielgrzymów. Dwóch kierowców - Pan Andrzej i Pan Mariusz - znali trasę przez Bałkany jak własne podwórko. W Bośni parkowanie zorganizowali sami, my się nie martwiliśmy. Cena dokładnie taka jak w wycenie, bez niespodzianek.",
    note: "[opinia 2 - placeholder]",
  },
  {
    text: "Watykan-Asyż 10 dni, 47 osób. Ołtarz polowy w luku bagażowym, miejsce dla schola w pierwszym rzędzie, mikrofon dla mnie. Kierowca w pierwszą niedzielę pielgrzymki sam zaproponował, żebyśmy zatrzymali się w Loreto - dodatkowa godzina, bez dopłaty. Profesjonalnie.",
    note: "[opinia 3 - placeholder]",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje pielgrzymka na Jasną Górę z Krakowa?",
    answer:
      "Pielgrzymka 1-dniowa autokarem 49-osobowym, trasa Krakow - Częstochowa - powrót, około 360 km i 10-12 godzin dyspozycyjności: 1000-1400 zł. Cena obejmuje paliwo, drogi, ubezpieczenie pojazdu, kierowcę. Skontaktuj się - wycena w 15 minut.",
  },
  {
    question: "Ile kosztuje pielgrzymka do Medjugorje autokarem?",
    answer:
      "Pielgrzymka 8-dniowa do Medjugorje (BiH) autokarem 49-osobowym z dwoma kierowcami, około 2300 km w obie strony: 14 000-18 000 zł. Cena obejmuje paliwo, winiety (Słowenia, Chorwacja, BiH), noclegi kierowców, ubezpieczenie pojazdu. Nie obejmuje: noclegi pielgrzymów, ubezpieczenie podróżne grupy.",
  },
  {
    question: "Czy autokar może mieć miejsce dla księdza i ołtarz polowy?",
    answer:
      "Tak. Pierwszy lub dwa pierwsze rzędy zarezerwowane dla księdza koordynatora i schola. Mikrofon, miejsce na nuty, instrumenty. Luk bagażowy ma miejsce na ołtarz polowy (rozkładany), monstrancję, świece, paramenty liturgiczne. To standard naszych pielgrzymek - bez dopłat.",
  },
  {
    question: "Czy kierowcy szanują tradycję pielgrzymkową?",
    answer:
      "Większość naszych kierowców to praktykujący katolicy z Krakowa i okolic, gdzie tradycja kościelna jest silna. Szanują różaniec, koronkę, śpiew w autokarze - zachowują ciszę w czasie modlitwy. Modlą się z grupą jeśli czują się komfortowo. Dla pielgrzymek zagranicznych wybieramy kierowców z doświadczeniem w przewozach grupowych do sanktuariów.",
  },
  {
    question: "Postoje przy sanktuariach po drodze - bez dopłat?",
    answer:
      "Tak. Standardowo planujemy 1-2 postoje przy znaczących sanktuariach na trasie - w cenie zlecenia. Z Krakowa na Jasną Górę: postój w Częstochowie pod klasztorem. Z Krakowa do Watykanu: Loreto, Asyż. Plan trasy uzgadniamy z księdzem koordynatorem 7 dni przed wyjazdem.",
  },
  {
    question: "Jakie dokumenty na pielgrzymkę zagraniczną?",
    answer:
      "Strefa Schengen (Włochy, Francja, Hiszpania, Niemcy, Austria): dowód osobisty wystarczy. Poza Schengen: Bośnia i Hercegowina (Medjugorje), Macedonia Północna, Albania - paszport ważny minimum 6 miesięcy. Weryfikacja dokumentów pielgrzymów 14 dni przed wyjazdem.",
  },
  {
    question: "Czy obsługujecie pielgrzymki w sezonie majowym (na Jasną Górę)?",
    answer:
      "Tak. Maj to klasyczny miesiąc pielgrzymek na Jasną Górę (nabożeństwa majowe). Mamy duży zasób autokarów na ten okres, ale rezerwacje przyjmujemy najpóźniej 6-8 tygodni wcześniej - w maju 80% naszej floty jest zajęte parafiami z całej Diecezji Kieleckiej.",
  },
  {
    question: "Faktura dla parafii - jak to działa?",
    answer:
      "Wystawiamy fakturę VAT na parafię (kościół katolicki ma osobowość prawną). Terminy płatności: 14 dni dla 1-3 dniowych, 21-30 dni dla zagranicznych. Zadatek 20-30% przelewem przy rezerwacji, reszta po pielgrzymce lub przed - do uzgodnienia z księdzem proboszczem lub kierownikiem ekonomicznym parafii.",
  },
];

const relatedLinks = [
  {
    href: "/pl/pielgrzymki",
    title: "Pielgrzymki autokarem",
    description: "krótszy poradnik parafialny",
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
      images: ["/og-pielgrzymka.jpg"],
    },
  };
}

export default async function AutokarNaPielgrzymkePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  toLang(lang);

  return (
    <>
      <Script id="schema-pielgrzymka-pillar" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaJsonLd)}
      </Script>

      <main className="bg-gray-50 text-gray-900">
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-300">MUSZKIETER</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Autokar na pielgrzymkę - Jasna Góra, Licheń, Watykan, Medjugorje</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">200+ parafii obsłużonych od 2003 roku. Pielgrzymki krajowe i zagraniczne. Kierowca rozumiejący rytm pielgrzymki: postoje przy sanktuariach, miejsce na ołtarz polowy, cisza w czasie różańca.</p>

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

            <p className="mt-6 text-sm text-gray-300">24 lata · 200+ parafii · kierowcy szanujący tradycję</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6 text-lg leading-8 text-gray-800">
            <p>Pielgrzymka to nie wycieczka. Inny rytm dnia, inne tempo, inne potrzeby.</p>
            <p>Pielgrzymi modlą się w autokarze - różaniec, koronka do Bożego Miłosierdzia, śpiew. Zatrzymują się przy sanktuariach po drodze nawet jeśli to dodaje godzinę do trasy. Wożą ołtarz polowy, monstrancję, świece, instrument muzyczny dla schola. Ksiądz koordynator ma swoje miejsce z przodu, ma też dostęp do mikrofonu. Starsze osoby wymagają częstszych postojów - nawet 35 osób w autokarze może oznaczać 5 osób które potrzebują pomocy przy wsiadaniu.</p>
            <p>Obsługujemy pielgrzymki parafialne od 2003 roku. Ponad 200 parafii rocznie - z Diecezji Kieleckiej, Sandomierskiej, Radomskiej, Krakowskiej. Najczęstsze trasy krajowe: Jasna Góra (60% naszych pielgrzymek - klasyk), Licheń, Łagiewniki, Kalwaria Zebrzydowska, Niepokalanów. Zagraniczne: Medjugorje (BiH, 8 dni), Watykan i Asyż (Włochy, 10 dni), Lourdes (Francja, 7 dni), Fatima (Portugalia, 9 dni).</p>
            <p>Skontaktuj się - wycena w 15 minut. Wszystko, czego potrzebujemy, to: liczba pielgrzymów, data, kierunek, długość, kontakt do księdza koordynatora.</p>
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
              <article key={row.route} className="border border-gray-200 bg-white p-5">
                <h3 className="text-lg font-semibold text-gray-900">{row.route}</h3>
                <p className="mt-2 text-sm text-gray-700">Pojazd: {row.vehicle}</p>
                <p className="mt-2 text-sm text-gray-700">Dni: {row.days}</p>
                <p className="mt-2 text-sm font-semibold text-gray-900">Cena od: {row.price}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 hidden overflow-x-auto md:block">
            <table className="w-full border-collapse border border-gray-200 bg-white">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900">Trasa</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900">Pojazd</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900">Dni</th>
                  <th className="border-b border-gray-200 px-4 py-3 text-sm font-semibold text-gray-900">Cena od</th>
                </tr>
              </thead>
              <tbody>
                {pricingRows.map((row) => (
                  <tr key={row.route}>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm text-gray-800">{row.route}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm text-gray-800">{row.vehicle}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm text-gray-800">{row.days}</td>
                    <td className="border-b border-gray-200 px-4 py-4 text-sm font-semibold text-gray-900">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-700">Cena zawiera: paliwo, drogi/winiety, noclegi kierowców, ubezpieczenie pojazdu. Nie zawiera: noclegi pielgrzymów, ubezpieczenie podróżne grupy (możemy załatwić przez naszego brokera - około 25 zł/os za 8 dni). Skontaktuj się - wycena w 15 minut.</p>
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
            <h2 className="text-3xl font-bold text-gray-900">Opinie księży i organizatorów</h2>
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
            <h2 className="text-3xl font-bold">Pielgrzymka to nie wycieczka. Rozumiemy różnicę. Pomożemy.</h2>
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
