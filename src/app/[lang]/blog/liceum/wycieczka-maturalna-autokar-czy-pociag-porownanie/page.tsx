import type { Metadata } from "next";
import Script from "next/script";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const slug = "wycieczka-maturalna-autokar-czy-pociag-porownanie";
const title = "Wycieczka maturalna: autokar czy pociąg? Porównanie 2026 | Autokar Busko";
const description =
  "Wycieczka maturalna - autokar czy pociąg? Porównanie kosztów, czasu i elastyczności na trasach Trójmiasto, Tatry i Praga dla grupy 43 osób.";

function getUrl(lang: Language) {
  return `https://www.autokar-busko.pl/${lang}/blog/liceum/${slug}`;
}

const personSchema = {
  "@type": "Person",
  "@id": "https://www.autokar-busko.pl/#rafal-chmiel",
  name: "Rafał Chmiel",
  jobTitle: "Właściciel Autokar Busko",
  description: "Właściciel Autokar Busko, 24 lata w branży transportowej.",
  worksFor: {
    "@type": "LocalBusiness",
    name: "Autokar Busko",
    url: "https://www.autokar-busko.pl",
  },
};

const articleSchema = {
  "@type": "Article",
  "@id": "https://www.autokar-busko.pl/pl/blog/liceum/wycieczka-maturalna-autokar-czy-pociag-porownanie#article",
  headline: "Wycieczka maturalna: autokar czy pociąg? Porównanie kosztów i czasu",
  description:
    "Porównanie autokaru i pociągu dla wycieczki maturalnej: koszty, czas, bagaż i elastyczność na trzech popularnych trasach.",
  author: {
    "@id": "https://www.autokar-busko.pl/#rafal-chmiel",
  },
  publisher: {
    "@type": "LocalBusiness",
    name: "Autokar Busko",
    logo: {
      "@type": "ImageObject",
      url: "https://www.autokar-busko.pl/logo.png",
    },
  },
  datePublished: "2026-05-14",
  dateModified: "2026-05-14",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.autokar-busko.pl/pl/blog/liceum/wycieczka-maturalna-autokar-czy-pociag-porownanie",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy autokar z Krakowa do Trójmiasta dla 43 osób to zwykle 8 000-12 000 zł?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, przy wycieczce 4-dniowej to typowe widełki dla autokaru 49-osobowego. Dla tej samej grupy pociąg to zwykle około 17 200 zł w dwie strony.",
      },
    },
    {
      "@type": "Question",
      name: "Ile kosztuje trasa Krakow-Zakopane dla maturzystów?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Autokar 49-osobowy na 3-dniowy wyjazd to zwykle 6 000-8 500 zł. Wariant pociąg + dojazd lokalny wychodzi najczęściej 14 000-14 500 zł dla 43 osób.",
      },
    },
    {
      "@type": "Question",
      name: "Czy na Pragę potrzebnych jest dwóch kierowców?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najczęściej tak. Dla dłuższych tras zagranicznych planuje się dwóch kierowców, aby zachować wymogi czasu pracy i bezpieczny harmonogram.",
      },
    },
    {
      "@type": "Question",
      name: "Jaka jest dopłata za dodatkowy dzień autokaru?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Najczęściej 800-1200 zł za dodatkowy dzień, zależnie od trasy, noclegu kierowcy i realnej dyspozycyjności pojazdu.",
      },
    },
    {
      "@type": "Question",
      name: "Czy autokar jest tańszy od pociągu dla klasy 40-45 osób?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "W większości scenariuszy tak. Dla popularnych tras różnica to zwykle 30-50% na korzyść autokaru, przy lepszej elastyczności trasy i bagażu.",
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
      item: "https://www.autokar-busko.pl/pl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Wycieczka licealna",
      item: "https://www.autokar-busko.pl/pl/wycieczka-licealna",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Wycieczka maturalna: autokar czy pociąg",
      item: "https://www.autokar-busko.pl/pl/blog/liceum/wycieczka-maturalna-autokar-czy-pociag-porownanie",
    },
  ],
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [articleSchema, faqSchema, breadcrumbSchema, personSchema],
};

const faqItems = [
  {
    question: "Czy autokar na Trójmiasto dla 43 osób to zwykle 8 000-12 000 zł?",
    answer:
      "Tak, dla 4 dni i autokaru 49-osobowego to typowy przedział. W tym samym wariancie pociąg często kosztuje około 17 200 zł.",
  },
  {
    question: "Ile wynosi koszt trasy Krakow-Zakopane dla klasy maturalnej?",
    answer:
      "Autokar najczęściej 6 000-8 500 zł przy 3-dniowym planie. Pociąg z przesiadką i dojazdem lokalnym to zwykle ponad 14 000 zł.",
  },
  {
    question: "Jaka dopłata pojawia się przy dodatkowym dniu wyjazdu?",
    answer:
      "Najczęściej 800-1200 zł za dodatkowy dzień. Finalna kwota zależy od dyspozycyjności kierowcy, noclegu i trasy.",
  },
  {
    question: "Czy przy trasie do Pragi potrzebnych jest dwóch kierowców?",
    answer:
      "W praktyce bardzo często tak, aby zachować przepisy czasu pracy i bezpiecznie obsłużyć trasę 7-8 godzin w jedną stronę.",
  },
  {
    question: "Czy autokar jest realnie tańszy od pociągu dla 40-45 uczniów?",
    answer:
      "Najczęściej tak, różnica wynosi zwykle 30-50% na korzyść autokaru. Dodatkowo grupa ma transport bez przesiadek i większą swobodę planu.",
  },
];

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const selectedLang = toLang(lang);

  return {
    metadataBase: new URL("https://www.autokar-busko.pl"),
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
      images: ["/og-liceum-autokar-czy-pociag-2026.jpg"],
    },
  };
}

export default async function WycieczkaMaturalnaAutokarCzyPociagPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  toLang(lang);

  return (
    <>
      <Script id="schema-article-liceum-autokar-czy-pociag" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaJsonLd)}
      </Script>

      <main className="bg-white text-gray-900">
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-black leading-tight sm:text-4xl">Wycieczka maturalna: autokar czy pociąg? Porównanie 2026</h1>
            <div className="mt-6 rounded-md border border-gray-700 bg-gray-800 p-5 text-base leading-7 text-gray-100">
              <p>
                <strong>Krótko:</strong> Dla grupy 40-45 uczniów autokar bywa zwykle 30-50% tańszy od pociągu na trasach typu Trójmiasto,
                Tatry i Praga. Do tego daje dojazd spod szkoły, bagaż bez limitu i elastyczne postoje po drodze.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:+48413453225" className="inline-flex items-center justify-center rounded-md bg-[#EAF3DE]0 px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-[#5DCAA5]">
                +48 41 345 32 25
              </a>
              <a href="tel:+48413453225" className="inline-flex items-center justify-center rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-white hover:bg-white hover:text-gray-900">
                
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-[#639922]">
            <p>
              Przy wycieczce maturalnej koordynator zwykle porównuje dwie opcje: autokar i pociąg. Tu liczą się nie tylko bilety, ale też
              czas dojazdu na dworzec, przesiadki, bagaż i przemieszczanie grupy po miejscu docelowym.
            </p>
            <p>
              Ten materiał podsumowuje trzy popularne kierunki i konkretne liczby. Jeśli chcesz pełny zakres organizacji, przejdź do strony
              <a href="/pl/wycieczka-licealna"> wycieczka licealna</a>.
            </p>

            <h2>Porównanie kosztów i czasu</h2>
            <p>Przykład kalkulacji: 40 maturzystów + 3 opiekunów, czyli 43 osoby.</p>

            <h3>Trasa Krakow - Trójmiasto, 4 dni</h3>
            <div className="not-prose mt-4 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Aspekt</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Autokar 49-osobowy</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Pociąg IC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">Koszt transportu grupy</td>
                    <td className="border-b border-gray-200 px-4 py-3">8 000-12 000 zł</td>
                    <td className="border-b border-gray-200 px-4 py-3">około 17 200 zł</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">Koszt na osobę</td>
                    <td className="border-b border-gray-200 px-4 py-3">186-279 zł</td>
                    <td className="border-b border-gray-200 px-4 py-3">około 400 zł</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Czas jedna strona</td>
                    <td className="px-4 py-3">około 6 h</td>
                    <td className="px-4 py-3">około 6 h z dojazdem i przesiadkami</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Trasa Krakow - Tatry, 3 dni</h3>
            <div className="not-prose mt-4 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Aspekt</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Autokar 49-osobowy</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Pociąg + dojazd lokalny</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">Koszt transportu grupy</td>
                    <td className="border-b border-gray-200 px-4 py-3">6 000-8 500 zł</td>
                    <td className="border-b border-gray-200 px-4 py-3">około 14 400 zł</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">Czas jedna strona</td>
                    <td className="border-b border-gray-200 px-4 py-3">około 4 h bezpośrednio</td>
                    <td className="border-b border-gray-200 px-4 py-3">około 5.5 h z przesiadką</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Bagaż</td>
                    <td className="px-4 py-3">Luk bez limitu praktycznego</td>
                    <td className="px-4 py-3">Ograniczenia i trudniejsza logistyka</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>Trasa Krakow - Praga, 5 dni</h3>
            <div className="not-prose mt-4 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Aspekt</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Autokar 49-osobowy</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Pociąg międzynarodowy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">Koszt transportu grupy</td>
                    <td className="border-b border-gray-200 px-4 py-3">14 000-18 000 zł</td>
                    <td className="border-b border-gray-200 px-4 py-3">około 24 080 zł</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">Czas jedna strona</td>
                    <td className="border-b border-gray-200 px-4 py-3">7-8 h</td>
                    <td className="border-b border-gray-200 px-4 py-3">9-12 h i 2 przesiadki</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Elastyczność planu</td>
                    <td className="px-4 py-3">Pełna, wraz z postojami</td>
                    <td className="px-4 py-3">Ograniczona rozkładem</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Co zwykle przemawia za autokarem</h2>
            <p>
              Autokar daje przejazd spod szkoły pod hotel i z powrotem bez przesiadek. W praktyce to mniej punktów ryzyka organizacyjnego,
              szczególnie przy dużej grupie i bagażu.
            </p>
            <p>
              Dodatkowa przewaga to elastyczna trasa, na przykład postój edukacyjny po drodze. W pociągu taki manewr zwykle oznacza zakup
              kolejnych biletów i reorganizację planu dnia.
            </p>

            <h2>Kiedy pociąg może być lepszy</h2>
            <p>
              Pociąg bywa sensowny głównie przy bardzo szybkich odcinkach między dużymi miastami i małej grupie. Przy klasie maturalnej 40+
              osób decyduje najczęściej suma kosztów i logistyki, gdzie autokar wypada stabilniej.
            </p>
          </article>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">Ciekawostka</h2>
            <p className="mt-4 text-lg italic leading-8 text-gray-700">
              Według badań POT najczęściej wybierane kierunki maturalne to Trójmiasto, Tatry i Praga. W tych trzech scenariuszach transport
              stanowi zwykle 30-40% budżetu całej wycieczki, dlatego wybór środka przejazdu realnie decyduje o koszcie na ucznia.
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
            <h2 className="text-3xl font-black">Sprawdź wycenę dla swojej klasy</h2>
            <p className="mt-4 text-base leading-7 text-gray-200">
              Pełna oferta i warianty tras: <a href="/pl/wycieczka-licealna" className="text-[#97C459]">Autokar na wycieczkę licealną</a>.
            </p>
            <div className="mt-6 space-y-2 text-base">
              <p>
                Telefon główny: <a href="tel:+48413453225" className="text-[#97C459]">+48 41 345 32 25</a>
              </p>
              <p>
                Telefon zapasowy: <a href="tel:+48413453225" className="text-[#97C459]"></a>
              </p>
              <p>
                Email: <a href="mailto:biuro@autokar-busko.pl" className="text-[#97C459]">biuro@autokar-busko.pl</a>
              </p>
            </div>
            <p className="mt-6 text-sm text-gray-400">Autor: Rafał Chmiel, Autokar Busko. 40+ liceów rocznie.</p>
          </div>
        </section>
      </main>
    </>
  );
}
