import type { Metadata } from "next";
import Script from "next/script";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const title = "Autokar na wycieczkę liceum - 3-7 dni, krajowa i zagraniczna | MUSZKIETER";
const description = "Wynajem autokaru na wycieczkę liceum: maturalną, integracyjną, językową. 40+ szkół rocznie, 2 kierowcy na trasy >9h, cała Europa. Tel: 601 076 652.";
const canonical = "https://www.autokar-busko.pl/pl/wycieczka-licealna";

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
      name: "Autokar na wycieczkę liceum",
      item: canonical,
    },
  ],
};

const serviceSchema = {
  "@type": "Service",
  "@id": "https://www.autokar-busko.pl/pl/wycieczka-licealna#service",
  name: "Wynajem autokaru na wycieczkę liceum",
  description:
    "Autokary 49-67 miejsc na wycieczki licealne krajowe i zagraniczne. Maturalna, integracyjna, językowa. 2 kierowców na trasy ponad 9h. Cała Europa.",
  serviceType: "High school field trip transport",
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
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Polska",
    },
    {
      "@type": "Country",
      name: "Niemcy",
    },
    {
      "@type": "Country",
      name: "Czechy",
    },
    {
      "@type": "Country",
      name: "Austria",
    },
    {
      "@type": "Country",
      name: "Włochy",
    },
  ],
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "PLN",
    lowPrice: "6000",
    highPrice: "28000",
    offerCount: "4",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Ile kosztuje autokar na wycieczkę 4-dniową do Trójmiasta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Autokar 49-osobowy z dwoma kierowcami, trasa Krakow - Trójmiasto - powrót, 4 dni dyspozycyjności: 8 000-12 000 zł. Cena obejmuje paliwo, drogi, ubezpieczenie pojazdu, noclegi kierowców. Nie obejmuje: noclegi grupy, wstępy do atrakcji, ubezpieczenie podróżne.",
      },
    },
    {
      "@type": "Question",
      name: "Czy kierowca może prowadzić 12 godzin dziennie?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie. Wymóg ITD: 9 godzin prowadzenia dziennie (10 godzin dwa razy w tygodniu), przerwa 11 godzin między dniami pracy. Trasy dłuższe niż 9h prowadzenia = drugi kierowca obowiązkowy. Dla wycieczek zagranicznych zawsze proponujemy dwóch kierowców.",
      },
    },
    {
      "@type": "Question",
      name: "Czy autokar ma WiFi i gniazdka 220V?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Część naszych autokarów ma WiFi przez router 5G oraz gniazdka 220V przy siedzeniach. Nie wszystkie - to nie jest standard. Jeśli WiFi i gniazdka są dla Was ważne, zgłoś przy rezerwacji - dobierzemy odpowiedni pojazd. Wszystkie autokary mają USB 5V przy każdym siedzeniu.",
      },
    },
    {
      "@type": "Question",
      name: "Co z bagażem na wycieczce 5-dniowej zagranicznej?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Luk bagażowy 5-7 m³. Praktycznie: 1 walizka średnia (do 60 cm) + plecak podręczny na osobę. Większe bagaże - zgłoś z góry, zmieścimy lub doliczamy zewnętrzny boks dachowy (dopłata 200-400 zł na wycieczkę).",
      },
    },
    {
      "@type": "Question",
      name: "Co jeśli kierowca zachoruje w trakcie wycieczki?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mamy 5 kierowców na stałe + 3 podwykonawców. Zastępstwo w ciągu 12-24 godzin, niezależnie od lokalizacji w Europie. Dla wycieczek zagranicznych zawsze startujemy z dwoma kierowcami.",
      },
    },
    {
      "@type": "Question",
      name: "Jakie dokumenty - dowód czy paszport?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strefa Schengen (Niemcy, Czechy, Austria, Włochy, Francja, Hiszpania): dowód osobisty wystarczy. Poza Schengen (Wielka Brytania, Bośnia, Macedonia, Albania): paszport. Sprawdzamy listę uczestników z dokumentami 7 dni przed wyjazdem.",
      },
    },
    {
      "@type": "Question",
      name: "Ile osób = jaki autokar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Klasa 28-30 osób + opiekuni: autokar 39-osobowy lub 49-osobowy. Klasa 40-45 osób + opiekuni: autokar 49-osobowy. Wycieczka międzyklasowa 50-60 osób: autokar 53 lub 67-osobowy. Zostawiamy minimum 4-5 wolnych miejsc na bagaże podręczne.",
      },
    },
    {
      "@type": "Question",
      name: "Jak dawno przed wycieczką trzeba rezerwować?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wycieczka krajowa: 4-6 tygodni przed wyjazdem. Zagraniczna: 8-12 tygodni. W szczycie sezonu (kwiecień-czerwiec, wrzesień-październik): plus 4 tygodnie. Wycieczki maturalne w maju-czerwcu rezerwujemy często już w styczniu.",
      },
    },
  ],
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [serviceSchema, faqSchema, breadcrumbSchema],
};

const trustBadges = ["24 lata", "40+ liceów rocznie", "krajowe i zagraniczne"];

const helpItems = [
  {
    title: "Dwóch kierowców na trasy ponad 9 godzin",
    description:
      "Wymóg ITD: kierowca może prowadzić maksymalnie 9 godzin dziennie (10 godzin dwa razy w tygodniu) z 11-godzinną przerwą. Trasy zagraniczne lub kilkudniowe = drugi kierowca obowiązkowy. U nas to standard, nie luksus - 5 kierowców na stałe plus 3 podwykonawców na wezwanie.",
  },
  {
    title: "Autokary 49-67 miejsc z toaletą i klimatyzacją",
    description:
      "Wszystkie nasze autokary klasy turystycznej (Setra ComfortClass, MAN Lion's Coach) mają: WC, klimatyzację strefową, monitory LCD, mikrofon dla pilota, luk bagażowy 5-7 m³ (1 walizka + plecak na osobę). Wybrane modele - gniazdka 220V przy siedzeniu (na życzenie - zgłoś przy rezerwacji).",
  },
  {
    title: "Postój na atrakcjach po drodze - bez dopłat",
    description:
      "Trójmiasto z Krakowa to 6h jazdy. Na trasie: Toruń, Gdańsk, Sopot - możemy zaplanować 30-minutowe stopy, każdy wliczony w stawkę dzienną. Kalkulujemy całe dni dyspozycyjności, nie kilometrówkę z karą za zatrzymanie.",
  },
  {
    title: "Wymiana 24h jeśli kierowca zachoruje",
    description:
      "5 kierowców na stałe + 3 podwykonawców = jeśli kierowca dostanie grypy w środku Pragi, zastępstwo w ciągu 12-24 godzin. Wycieczka nie zostaje uwięziona za granicą. To rzadkie, ale przydaje się raz na 50 wycieczek.",
  },
];

const pricingRows = [
  {
    route: "Krajowa: Tatry 3 dni",
    vehicle: "Autokar 49 os",
    days: "3",
    price: "6 000-8 500 zł",
  },
  {
    route: "Krajowa: Trójmiasto 4 dni",
    vehicle: "Autokar 49 os",
    days: "4",
    price: "8 000-12 000 zł",
  },
  {
    route: "Zagraniczna: Praga 5 dni",
    vehicle: "Autokar 49 os, 2 kierowców",
    days: "5",
    price: "14 000-18 000 zł",
  },
  {
    route: "Zagraniczna: Włochy 7 dni",
    vehicle: "Autokar 53 os, 2 kierowców",
    days: "7",
    price: "20 000-28 000 zł",
  },
];

const reservationSteps = [
  "Zadzwoń lub wyślij formularz. Liczba uczestników, data, kierunek, długość, czy potrzebny drugi kierowca (zwykle tak - sprawdzamy). Standardowy termin rezerwacji: 8-12 tygodni przed wyjazdem dla zagranicznej, 4-6 tygodni dla krajowej.",
  "Wycena w 15 minut. Telefon lub mail. Pojazd, kierowcy, plan trasy, cena rozbita: dni × stawka dzienna + kilometry + winiety.",
  "Zadatek 20-30% - przelewem na fakturę dla szkoły. Reszta: 7 dni przed wyjazdem lub fakturą z 14-dniowym terminem po wycieczce (do uzgodnienia z księgową szkoły).",
  "W dniu wyjazdu autokar pod szkołą 30 minut przed planowanym startem. Drugi kierowca dołącza na trasie zgodnie z planem tachografu, w uzgodnionym MOP.",
];

const knowledgeItems = [
  {
    title: "Dokumenty na wycieczkę zagraniczną - dowód czy paszport",
    description:
      "Strefa Schengen (Niemcy, Austria, Czechy, Słowacja, Włochy, Francja itd.): dowód osobisty wystarczy. Poza Schengen (np. Wielka Brytania, Bośnia, Macedonia, Albania): paszport. Sprawdzamy z góry dokumenty na liście uczestników - nauczyciel-koordynator dostaje listę kontrolną przed wyjazdem.",
  },
  {
    title: "Bagaż - 1 walizka + plecak na osobę",
    description:
      "Luk bagażowy autokaru 53-67 osobowego ma 5-7 m³. Praktycznie: 1 walizka średnia (do 60 cm) + plecak/torba podręczna na osobę. Większe bagaże (np. instrumenty muzyczne) - zgłoś z góry, zmieścimy lub doliczamy zewnętrzny boks dachowy.",
  },
  {
    title: "Plan trasy = my wozimy, wy zwiedzacie",
    description:
      "Nasi kierowcy znają standardowe trasy do Pragi, Berlina, Włoch - wiemy gdzie się zatrzymać na MOP (dobre toalety, jedzenie), gdzie unikać korków, gdzie są pułapki radarowe. Plan trasy uzgadniamy 7 dni przed wyjazdem, można w nim wprowadzać zmiany do 24h przed startem.",
  },
  {
    title: "WiFi w autokarze - na życzenie",
    description:
      "Część naszych autokarów ma router 5G z WiFi dla pasażerów. Nie wszystkie - jeśli WiFi jest dla Was ważne, zgłoś przy rezerwacji, dobierzemy odpowiedni pojazd. Dla wycieczki zagranicznej WiFi działa zwykle na zasadach roamingu (czasem wolniej, koszt po naszej stronie).",
  },
  {
    title: "Faktura dla szkoły publicznej lub niepublicznej",
    description:
      "Wystawiamy fakturę VAT na: szkołę publiczną (płatność z budżetu organu prowadzącego, 14-21 dni), szkołę niepubliczną (14 dni), Radę Rodziców z NIP-em, lub na osoby prywatne (rodziców) jako stowarzyszenie. Zadatek 20-30% przy rezerwacji, reszta w jednym z dwóch trybów: przedpłata 7 dni przed wyjazdem lub odroczona faktura po wycieczce.",
  },
];

const testimonials = [
  {
    text: "Wycieczka maturalna do Pragi, 47 uczniów + 4 opiekunów. Dwóch kierowców - Pan Andrzej i Pan Mariusz - znali trasę jak własne podwórko. W Pradze parkowanie zorganizowali sami, my się tym nie martwiliśmy. Polecam każdej szkole.",
    note: "[opinia 1 - placeholder, Rafał uzupełni z prawdziwych opinii Google]",
  },
  {
    text: "Wycieczka integracyjna 1 klasy do Bieszczad, 3 dni. Autokar pod szkołą 25 minut przed czasem. WiFi działało aż za dobrze - uczniowie nie chcieli wysiadać oglądać Połoniny. Profesjonalnie.",
    note: "[opinia 2 - placeholder]",
  },
  {
    text: "Wycieczka językowa do Wiednia, 6 dni. W trakcie wyjazdu drugi kierowca dostał temperaturę. W 16 godzin podstawili zastępcę w Brnie. Bez dyskusji, bez dopłat. Drobiazg, ale w sumie się liczy.",
    note: "[opinia 3 - placeholder]",
  },
];

const faqItems = [
  {
    question: "Ile kosztuje autokar na wycieczkę 4-dniową do Trójmiasta?",
    answer:
      "Autokar 49-osobowy z dwoma kierowcami, trasa Krakow - Trójmiasto - powrót, 4 dni dyspozycyjności: 8 000-12 000 zł. Cena obejmuje paliwo, drogi, ubezpieczenie pojazdu, noclegi kierowców. Nie obejmuje: noclegi grupy, wstępy do atrakcji, ubezpieczenie podróżne. Skontaktuj się - wycena dokładna w 15 minut.",
  },
  {
    question: "Czy kierowca może prowadzić 12 godzin dziennie?",
    answer:
      "Nie. Wymóg ITD: 9 godzin prowadzenia dziennie (10 godzin dwa razy w tygodniu), przerwa 11 godzin między dniami pracy. Trasy dłuższe niż 9h prowadzenia = drugi kierowca obowiązkowy. Dla wycieczek zagranicznych zawsze proponujemy dwóch kierowców.",
  },
  {
    question: "Czy autokar ma WiFi i gniazdka 220V?",
    answer:
      "Część naszych autokarów ma WiFi przez router 5G oraz gniazdka 220V przy siedzeniach. Nie wszystkie - to nie jest standard. Jeśli WiFi i gniazdka są dla Was ważne, zgłoś przy rezerwacji - dobierzemy odpowiedni pojazd. Wszystkie autokary mają USB 5V przy każdym siedzeniu (do ładowania telefonów).",
  },
  {
    question: "Co z bagażem na wycieczce 5-dniowej zagranicznej?",
    answer:
      "Luk bagażowy 5-7 m³. Praktycznie: 1 walizka średnia (do 60 cm) + plecak podręczny na osobę. Większe bagaże (np. instrumenty muzyczne, sprzęt sportowy) - zgłoś z góry, zmieścimy lub doliczamy zewnętrzny boks dachowy (dopłata 200-400 zł na wycieczkę).",
  },
  {
    question: "Co jeśli kierowca zachoruje w trakcie wycieczki?",
    answer:
      "Mamy 5 kierowców na stałe + 3 podwykonawców. Zastępstwo w ciągu 12-24 godzin, niezależnie od lokalizacji w Europie. Dla wycieczek zagranicznych zawsze startujemy z dwoma kierowcami - jeden zachoruje, drugi prowadzi do najbliższego miejsca, gdzie dostarczamy trzeciego.",
  },
  {
    question: "Jakie dokumenty - dowód czy paszport?",
    answer:
      "Strefa Schengen (większość kierunków: Niemcy, Czechy, Austria, Włochy, Francja, Hiszpania): dowód osobisty wystarczy. Poza Schengen (Wielka Brytania, Bośnia, Macedonia, Albania, kraje wschodnie): paszport. Sprawdzamy listę uczestników z dokumentami 7 dni przed wyjazdem.",
  },
  {
    question: "Ile osób = jaki autokar?",
    answer:
      "Klasa 28-30 osób + 2-3 opiekunów: autokar 39-osobowy lub mały 49-osobowy. Klasa 40-45 osób + 3-4 opiekunów: autokar 49-osobowy. Wycieczka międzyklasowa 50-60 osób: autokar 53 lub 67-osobowy. Dla bezpieczeństwa zostawiamy minimum 4-5 wolnych miejsc na bagaże podręczne i przesiadki.",
  },
  {
    question: "Jak dawno przed wycieczką trzeba rezerwować?",
    answer:
      "Wycieczka krajowa: 4-6 tygodni przed wyjazdem. Zagraniczna: 8-12 tygodni (im więcej, tym lepszy wybór pojazdów i kierowców). W szczycie sezonu (kwiecień-czerwiec, wrzesień-październik): plus 4 tygodnie. Wycieczki maturalne w maju-czerwcu rezerwujemy często w styczniu.",
  },
];

const relatedLinks = [
  {
    href: "/pl/blog/liceum/wycieczka-maturalna-autokar-czy-pociag-porownanie",
    title: "Wycieczka maturalna: autokar czy pociąg?",
    description: "porównanie kosztów i czasu - 3 trasy (Trójmiasto, Tatry, Praga)",
  },
  {
    href: "/pl/wycieczka-przedszkolna",
    title: "Wycieczka przedszkolna autokar",
    description: "dla najmłodszych",
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
      images: ["/og-liceum.jpg"],
    },
  };
}

export default async function WycieczkaLicealnaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  toLang(lang);

  return (
    <>
      <Script id="schema-licealna" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaJsonLd)}
      </Script>

      <main className="bg-gray-50 text-gray-900">
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.25em] text-gray-300">MUSZKIETER</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">Autokar na wycieczkę liceum - krajowa i zagraniczna</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-200">40+ szkół średnich rocznie, wycieczki maturalne, integracyjne, językowe. Autokary 49-67 miejsc, 2 kierowców na trasy ponad 9 godzin. Cała Europa.</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#kontakt" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-amber-600">Sprawdź wycenę w 15 min</a>
              <a href="tel:+48601076652" className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-semibold text-white hover:bg-white hover:text-gray-900">tel:+48601076652</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-gray-200">
              {trustBadges.map((badge) => (
                <span key={badge} className="rounded-full border border-gray-700 px-4 py-2">
                  {badge}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm text-gray-300">24 lata · 40+ liceów rocznie · krajowe i zagraniczne</p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-6 text-lg leading-8 text-gray-800">
            <p>Wycieczka licealna to nie 6 godzin do Bałtowa. To 3-7 dni, często zagranica, czasem 1500 km w jedną stronę.</p>
            <p>Inna logistyka, inne wymogi prawne (drugi kierowca po 9h prowadzenia, tachograf, karta kierowcy międzynarodowego), inne pieniądze (8 000-20 000 zł na grupę zamiast 1 500 zł na jednodniówkę). Nauczyciel-koordynator dostaje na głowę: rezerwacja noclegów, ubezpieczenie grupowe, regulamin wycieczki, zgody rodziców, lista uczestników z PESEL-ami, czasem paszporty.</p>
            <p>Obsługujemy szkoły średnie od 2003 roku. Ponad 40 liceów rocznie - z Krakowa, Skarżyska, Ostrowca, Sandomierza, Tarnobrzega. Najczęstsze trasy krajowe: Trójmiasto (4 dni), Tatry (3 dni), Bieszczady (4 dni). Zagraniczne: Praga (5 dni), Berlin (5 dni), Wiedeń-Budapeszt (6 dni), Włochy (7 dni - Rzym, Florencja, Wenecja).</p>
            <p>Skontaktuj się - wycena w 15 minut. Wszystko, czego potrzebujemy, to: liczba uczniów + opiekunów, data, kierunek, długość.</p>
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

          <p className="mt-6 max-w-3xl text-base leading-7 text-gray-700">Cena zawiera: paliwo, drogi/winiety, noclegi kierowców, ubezpieczenie pojazdu. Nie zawiera: wstępy, noclegi grupy, ubezpieczenie podróżne uczestników. Skontaktuj się - wycena w 15 minut.</p>
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
            <h2 className="text-3xl font-bold text-gray-900">Opinie nauczycieli-koordynatorów</h2>
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
            <h2 className="text-3xl font-bold">4 dni w Trójmieście. Plan ma trzymać. Pomożemy.</h2>
            <div className="mt-8 space-y-3 text-base leading-7 text-gray-200">
              <p><a href="tel:+48601076652" className="text-amber-500">Telefon: +48 601 076 652</a></p>
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
