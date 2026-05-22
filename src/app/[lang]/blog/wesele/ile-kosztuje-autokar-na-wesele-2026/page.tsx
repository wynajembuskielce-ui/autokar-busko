import type { Metadata } from "next";
import Script from "next/script";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const slug = "ile-kosztuje-autokar-na-wesele-2026";
const title = "Ile kosztuje autokar na wesele 2026? Pełny cennik | MUSZKIETER";
const description =
  "Ile kosztuje autokar na wesele 2026: bus 19 os od 600 zł, autokar 49 os od 1500 zł, autokar 67 os do 3000 zł. Czynniki ceny, kursy nocne, sezon weselny.";

function getUrl(lang: Language) {
  return `https://www.wynajem-autobus.pl/${lang}/blog/wesele/${slug}`;
}

const personSchema = {
  "@type": "Person",
  "@id": "https://www.wynajem-autobus.pl/#rafal-chmiel",
  name: "Rafał Chmiel",
  jobTitle: "Właściciel MUSZKIETER",
  description: "Właściciel MUSZKIETER, 24 lata w branży transportowej.",
  worksFor: {
    "@type": "LocalBusiness",
    name: "MUSZKIETER",
    url: "https://www.wynajem-autobus.pl",
  },
};

const articleSchema = {
  "@type": "Article",
  "@id": "https://www.wynajem-autobus.pl/pl/blog/wesele/ile-kosztuje-autokar-na-wesele-2026#article",
  headline: "Ile kosztuje autokar na wesele 2026? Pełny cennik",
  description:
    "Cennik autokarów i busów weselnych 2026: konkretne widełki cenowe, czynniki wpływające na koszt, sezon i kursy nocne.",
  author: {
    "@id": "https://www.wynajem-autobus.pl/#rafal-chmiel",
  },
  publisher: {
    "@type": "LocalBusiness",
    name: "MUSZKIETER",
    logo: {
      "@type": "ImageObject",
      url: "https://www.wynajem-autobus.pl/logo.png",
    },
  },
  datePublished: "2026-05-14",
  dateModified: "2026-05-14",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.wynajem-autobus.pl/pl/blog/wesele/ile-kosztuje-autokar-na-wesele-2026",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy cena obejmuje napiwek dla kierowcy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie. Napiwek 100-300 zł, jeśli para młoda chce go przekazać, płaci się zwykle gotówką pod koniec wesela bezpośrednio kierowcy.",
      },
    },
    {
      "@type": "Question",
      name: "Co jeśli wesele się przedłuży?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Przy realnym przedłużeniu o 2+ godziny standardowa dopłata wynosi 50-80 zł za godzinę. W większości zleceń planujemy zapas 2-3 godzin.",
      },
    },
    {
      "@type": "Question",
      name: "Czy mogę zapłacić w ratach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Najczęściej 30% zadatku przy rezerwacji i pozostała część 7 dni przed weselem lub w dniu usługi.",
      },
    },
    {
      "@type": "Question",
      name: "Czy autokar zostaje na sali weselnej do końca?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie zawsze. Typowy scenariusz to powrót kierowcy na kursy nocne około 1:00 i 4:00, zgodnie z planem ustalonym wcześniej.",
      },
    },
    {
      "@type": "Question",
      name: "Czy mogę dekorować autokar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Pojazd zwykle udostępniamy 30-60 minut przed ceremonią. Najczęściej stosowane są taśmy i dekoracje kwiatowe.",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Strona główna",
      item: "https://www.wynajem-autobus.pl/pl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Wynajem autokaru na wesele",
      item: "https://www.wynajem-autobus.pl/pl/wynajem-autokaru-na-wesele",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Ile kosztuje autokar na wesele 2026",
      item: "https://www.wynajem-autobus.pl/pl/blog/wesele/ile-kosztuje-autokar-na-wesele-2026",
    },
  ],
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [articleSchema, faqSchema, breadcrumbSchema, personSchema],
};

const faqItems = [
  {
    question: "Czy cena obejmuje napiwek dla kierowcy?",
    answer:
      "Nie. Napiwek zwyczajowo wynosi 100-300 zł i jest dobrowolny. Najczęściej para młoda przekazuje go gotówką pod koniec wesela.",
  },
  {
    question: "Co jeśli wesele się przedłuży?",
    answer:
      "W standardowych pakietach jest zapas 2-3 godzin. Jeśli realnie potrzeba dłuższej dyspozycyjności, dopłata to zwykle 50-80 zł za godzinę.",
  },
  {
    question: "Czy mogę zapłacić w ratach?",
    answer:
      "Tak. Najczęściej 30% zadatku przy rezerwacji i pozostała kwota 7 dni przed weselem albo w dniu wydarzenia.",
  },
  {
    question: "Czy autokar zostaje na sali weselnej do końca?",
    answer:
      "Nie zawsze. Częsty scenariusz to przerwa i powrót na kursy nocne, na przykład około 1:00 i 4:00. Harmonogram ustalamy z parą młodą wcześniej.",
  },
  {
    question: "Czy mogę dekorować autokar?",
    answer:
      "Tak. Pojazd udostępniamy zwykle 30-60 minut przed ceremonią. Najpopularniejsze są białe taśmy i dekoracje kwiatowe bez trwałych naklejek.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const selectedLang = toLang(lang);

  return {
    metadataBase: new URL("https://www.wynajem-autobus.pl"),
    title,
    description,
    alternates: {
      canonical: getUrl(selectedLang),
      languages: {
        pl: getUrl("pl"),
        en: getUrl("en"),
        de: getUrl("de"),
        ru: getUrl("ru"),
        ar: getUrl("ar"),
        es: getUrl("es"),
        fr: getUrl("fr"),
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      images: ["/og-wesele-cennik-2026.jpg"],
    },
  };
}

export default async function IleKosztujeAutokarNaWesele2026Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  toLang(lang);

  return (
    <>
      <Script id="schema-article-wesele-cennik-2026" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaJsonLd)}
      </Script>

      <main className="bg-white text-gray-900">
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-black leading-tight sm:text-4xl">Ile kosztuje autokar na wesele 2026? Pełny cennik</h1>
            <div className="mt-6 rounded-md border border-gray-700 bg-gray-800 p-5 text-base leading-7 text-gray-100">
              <p>
                <strong>Krótko:</strong> W 2026 roku bus 19-osobowy na wesele kosztuje zwykle 600-900 zł, autokar 49-osobowy 1500-2200 zł,
                a autokar 67-osobowy 2200-3000 zł. Na cenę wpływa przede wszystkim wielkość pojazdu, czas dyspozycyjności, dystans i termin.
                W sezonie maj-wrzesień ceny są zwykle wyższe o 10-20%.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+48601076652" className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-amber-600">
                +48 601 076 652
              </a>
              <a href="tel:+48413453225" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-gray-900">
                
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-amber-700">
            <p>
              Jedno z pierwszych pytań przy planowaniu wesela brzmi: ile kosztuje autokar dla gości? Wiele ofert podaje tylko hasło od
              konkretnej kwoty, bez wskazania czasu, kursów nocnych i limitu kilometrów. Dlatego w tym materiale masz konkretne widełki na
              2026 rok oraz czynniki, które realnie wpływają na końcowy koszt.
            </p>
            <p>
              Jeśli chcesz od razu przejść do pełnej usługi z organizacją transportu gości krok po kroku, zobacz stronę
              <a href="/pl/wynajem-autokaru-na-wesele"> Wynajem autokaru na wesele</a>. Ten artykuł to krótszy przewodnik cenowy.
            </p>

            <h2>Cennik autokaru na wesele 2026</h2>
            <p>
              Poniższa tabela pokazuje orientacyjne ceny dla najczęściej wybieranych pojazdów. To realne widełki dla obsługi wesela wraz z
              postojami i kursami nocnymi, a nie tylko pojedynczego przejazdu punkt-punkt.
            </p>

            <div className="not-prose mt-6 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Pojazd</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Miejsca</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Czas</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Cena 2026</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">Bus 19-osobowy</td>
                    <td className="border-b border-gray-200 px-4 py-3">19 + 1</td>
                    <td className="border-b border-gray-200 px-4 py-3">6-8 h</td>
                    <td className="border-b border-gray-200 px-4 py-3">600-900 zł</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">Bus 30-osobowy</td>
                    <td className="border-b border-gray-200 px-4 py-3">30 + 1</td>
                    <td className="border-b border-gray-200 px-4 py-3">8-10 h</td>
                    <td className="border-b border-gray-200 px-4 py-3">900-1300 zł</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">Bus 39-osobowy</td>
                    <td className="border-b border-gray-200 px-4 py-3">39 + 1</td>
                    <td className="border-b border-gray-200 px-4 py-3">10-12 h</td>
                    <td className="border-b border-gray-200 px-4 py-3">1200-1700 zł</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">Autokar 49-osobowy</td>
                    <td className="border-b border-gray-200 px-4 py-3">49 + 1</td>
                    <td className="border-b border-gray-200 px-4 py-3">12-16 h</td>
                    <td className="border-b border-gray-200 px-4 py-3">1500-2200 zł</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">Autokar 53-osobowy</td>
                    <td className="border-b border-gray-200 px-4 py-3">53 + 1</td>
                    <td className="border-b border-gray-200 px-4 py-3">14-18 h</td>
                    <td className="border-b border-gray-200 px-4 py-3">1800-2600 zł</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Autokar 67-osobowy</td>
                    <td className="px-4 py-3">67 + 1</td>
                    <td className="px-4 py-3">14-18 h</td>
                    <td className="px-4 py-3">2200-3000 zł</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              W cenie zazwyczaj zawiera się paliwo, kierowca, ubezpieczenie pasażerów, postoje pod kościołem i salą oraz kursy nocne.
              Najczęstsze dopłaty dotyczą kilometrów powyżej ustalonego limitu i nietypowo długiej dyspozycyjności.
            </p>

            <h2>Co najbardziej wpływa na cenę</h2>
            <p>
              Największy udział w cenie ma wielkość pojazdu, a zaraz po niej czas dyspozycyjności. Wesele obsługiwane przez 6-8 godzin będzie
              wyraźnie tańsze niż obsługa trwająca 14-18 godzin z kursami nocnymi i porannym odwiezieniem gości z hoteli.
            </p>
            <p>
              Znaczenie ma też termin. W miesiącach maj-wrzesień, czyli szczycie sezonu ślubnego, ceny bywają wyższe o 10-20%, a dostępność
              najlepszych pojazdów spada szybciej. Przy weselach poza sezonem łatwiej o korzystniejszą stawkę i większy wybór.
            </p>

            <h2>Jak oszczędzić bez ryzyka organizacyjnego</h2>
            <p>
              Najlepiej dobrać pojazd do realnej liczby gości i planu kursów. Zbyt mały bus do dużej grupy może wymusić dodatkowe przejazdy,
              które finalnie podnoszą koszt i komplikują logistykę. Często jeden właściwie dobrany autokar okazuje się tańszy niż dwa mniejsze
              kursujące w kilku turach.
            </p>
            <p>
              Dobrą praktyką jest też podanie przewoźnikowi pełnego planu dnia: godzina ceremonii, lokalizacja sali, orientacyjne kursy nocne,
              lista hoteli i miejscowości. Im dokładniejszy brief, tym mniej ryzyka dopłat i zmian w ostatniej chwili.
            </p>

            <h2>Kiedy autokar jest najtańszy</h2>
            <p>
              Najtańsze są zwykle wesela poza sezonem, od października do kwietnia. Dodatkowo oszczędność daje wybór mniejszego, ale dobrze
              dopasowanego pojazdu oraz ograniczenie dyspozycyjności do faktycznie potrzebnego zakresu, bez porannych kursów hotelowych.
            </p>
            <p>
              Czasami to właśnie uproszczenie harmonogramu, a nie agresywne cięcie jakości, daje najbardziej odczuwalny efekt dla budżetu.
              Warto porównać dwa warianty: pełny pakiet z kursem porannym i wariant tylko z kursami nocnymi.
            </p>

            <h2>Czego unikać przy wyborze transportu</h2>
            <p>
              Najczęstszy błąd to wybór najtańszej oferty bez sprawdzenia, co dokładnie obejmuje cena. Warto upewnić się, czy oferta zawiera
              ubezpieczenie pasażerów, kursy nocne i realny limit kilometrów. Drugi błąd to rezerwacja bardzo późno, zwłaszcza na czerwiec
              i sierpień, kiedy dostępność jest najbardziej ograniczona.
            </p>
            <p>
              Trzeci błąd to brak zapasu miejsc. W praktyce dobrze mieć kilka wolnych siedzeń, bo na etapie finalnych potwierdzeń często
              dochodzą kolejni goście. Mały margines poprawia komfort i ogranicza nerwową reorganizację planu dzień przed weselem.
            </p>
          </article>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">Ciekawostka</h2>
            <p className="mt-4 text-lg italic leading-8 text-gray-700">
              Tradycja ozdabiania pojazdów weselnych białymi taśmami upowszechniła się w Polsce w latach 80. XX wieku. Wraz z popularyzacją
              transportu zbiorowego na wesela zwykły autokar zaczął pełnić także funkcję symbolicznego pojazdu uroczystości. Dziś ta dekoracja
              to nie tylko estetyka, ale też szybka identyfikacja transportu dla gości.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900">Mini FAQ</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <details key={item.question} className="border border-gray-200 bg-white p-5">
                <summary className="cursor-pointer text-base font-semibold text-gray-900">{item.question}</summary>
                <p className="mt-3 text-base leading-7 text-gray-700">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black">Sprawdź wycenę dla swojego wesela</h2>
            <p className="mt-4 text-base leading-7 text-gray-200">
              Pełna oferta i scenariusze transportu gości: <a href="/pl/wynajem-autokaru-na-wesele" className="text-amber-400">Wynajem autokaru na wesele</a>.
            </p>
            <div className="mt-6 space-y-2 text-base">
              <p>
                Telefon główny: <a href="tel:+48601076652" className="text-amber-400">+48 601 076 652</a>
              </p>
              <p>
                Telefon zapasowy: <a href="tel:+48413453225" className="text-amber-400"></a>
              </p>
              <p>
                Email: <a href="mailto:biuro@muszkieter.pl" className="text-amber-400">biuro@muszkieter.pl</a>
              </p>
            </div>
            <p className="mt-6 text-sm text-gray-400">Autor: Rafał Chmiel, MUSZKIETER. 500+ wesel obsłużonych.</p>
          </div>
        </section>
      </main>
    </>
  );
}
