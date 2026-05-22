import type { Metadata } from "next";
import Script from "next/script";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const slug = "transport-rodziny-na-pogrzeb-jak-zorganizowac";
const title = "Transport rodziny na pogrzeb - jak zorganizować bez stresu | MUSZKIETER";
const description =
  "Praktyczny przewodnik dla rodziny: jak zorganizować transport na pogrzeb w 24-48h, ile kosztuje bus lub autokar, kogo wozimy, jak zaplanować trasę dom-kościół-cmentarz-stypa.";

function getUrl(lang: Language) {
  return `https://www.wynajem-autobus.pl/${lang}/blog/pogrzeb/${slug}`;
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
  "@id": "https://www.wynajem-autobus.pl/pl/blog/pogrzeb/transport-rodziny-na-pogrzeb-jak-zorganizowac#article",
  headline: "Transport rodziny na pogrzeb - jak zorganizować bez stresu",
  description:
    "Praktyczny przewodnik dla rodziny: jak zorganizować transport na pogrzeb w 24-48h, ile kosztuje, kogo wozimy, jak zaplanować trasę.",
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
    "@id": "https://www.wynajem-autobus.pl/pl/blog/pogrzeb/transport-rodziny-na-pogrzeb-jak-zorganizowac",
  },
};

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Czy autokar może czekać na cmentarzu w trakcie ceremonii?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak. Standardowo planujemy 30-60 minut postoju na cmentarzu. Pojazd parkuje przed bramą cmentarza lub na pobliskim parkingu. Wszystko w cenie dyspozycyjności.",
      },
    },
    {
      "@type": "Question",
      name: "Co jeśli pogrzeb jest w niedzielę albo święto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Obsługujemy pogrzeby w niedziele i święta bez dopłat weekendowych. Pogrzeb nie zna kalendarza. Cena ta sama co w środku tygodnia.",
      },
    },
    {
      "@type": "Question",
      name: "Czy autokar dojeżdża pod sam kościół?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Zwykle tak - autokar zatrzymuje się na parkingu kościelnym lub w pobliżu (50-100 m). W ścisłym centrum miast zatrzymujemy się na najbliższym legalnym parkingu.",
      },
    },
    {
      "@type": "Question",
      name: "Czy pomagacie z transportem trumny?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nie. Trumną zajmuje się zakład pogrzebowy. My przewozimy tylko rodzinę i gości.",
      },
    },
    {
      "@type": "Question",
      name: "Czy mogę odwołać rezerwację bez kary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tak, do 48 godzin przed pogrzebem - bez kary. Dla pogrzebów rozumiemy, że plany mogą się zmienić.",
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
      name: "Autokar na pogrzeb",
      item: "https://www.wynajem-autobus.pl/pl/autokar-na-pogrzeb",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Transport rodziny na pogrzeb - jak zorganizować",
      item: "https://www.wynajem-autobus.pl/pl/blog/pogrzeb/transport-rodziny-na-pogrzeb-jak-zorganizowac",
    },
  ],
};

const schemaJsonLd = {
  "@context": "https://schema.org",
  "@graph": [articleSchema, faqSchema, breadcrumbSchema, personSchema],
};

const faqItems = [
  {
    question: "Czy autokar może czekać na cmentarzu w trakcie ceremonii?",
    answer:
      "Tak. Standardowo planujemy 30-60 minut postoju na cmentarzu (ceremonia złożenia ciała). Pojazd parkuje przed bramą cmentarza lub na pobliskim parkingu. Wszystko w cenie dyspozycyjności.",
  },
  {
    question: "Co jeśli pogrzeb jest w niedzielę albo święto?",
    answer:
      "Obsługujemy pogrzeby w niedziele i święta bez dopłat weekendowych. Pogrzeb nie zna kalendarza. Cena ta sama co w środku tygodnia.",
  },
  {
    question: "Czy autokar dojeżdża pod sam kościół?",
    answer:
      "Zwykle tak - autokar zatrzymuje się na parkingu kościelnym lub w pobliżu (50-100 m). W ścisłym centrum miast zatrzymujemy się na najbliższym legalnym parkingu, a rodzina dochodzi pieszo.",
  },
  {
    question: "Czy pomagacie z transportem trumny?",
    answer:
      "Nie. Trumną zajmuje się zakład pogrzebowy (karawan, wniesienie do kościoła i na cmentarz). My przewozimy tylko rodzinę i gości.",
  },
  {
    question: "Czy mogę odwołać rezerwację bez kary?",
    answer:
      "Tak, do 48 godzin przed pogrzebem - bez kary. Dla pogrzebów rozumiemy, że plany mogą się zmienić (przesunięcie daty, zmiana kościoła, zmiana godziny).",
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
      images: ["/og-pogrzeb-transport-rodziny.jpg"],
    },
  };
}

export default async function TransportRodzinyNaPogrzebJakZorganizowacPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  toLang(lang);

  return (
    <>
      <Script id="schema-article-pogrzeb-transport-rodziny" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schemaJsonLd)}
      </Script>

      <main className="bg-white text-gray-900">
        <section className="bg-gray-900 text-white">
          <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-black leading-tight sm:text-4xl">Transport rodziny na pogrzeb - jak zorganizować bez stresu</h1>
            <div className="mt-6 rounded-md border border-gray-700 bg-gray-800 p-5 text-base leading-7 text-gray-100">
              <p>
                <strong>Krótko:</strong> Transport rodziny na pogrzeb dla 15-30 osób to najczęściej bus 19-30 osobowy w cenie 400-900 zł i pomoc
                w 24-48 godzin od pierwszego kontaktu. Dla 30-50 osób zwykle wybierany jest autokar 49-osobowy, orientacyjnie 800-1200 zł.
                Standardowa trasa: dom, kościół, cmentarz, stypa, odwóz.
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
              Pogrzeb to ostatnia rzecz, którą chce się planować logistycznie. Zarazem transport rodziny i przyjaciół jest jedną z pierwszych
              spraw do załatwienia po ustaleniu daty ceremonii z zakładem pogrzebowym. Ten artykuł pomaga uporządkować decyzje krok po kroku,
              tak by rodzina miała mniej stresu i mniej improwizacji w dniu pogrzebu.
            </p>
            <p>
              Jeśli szukasz pełnej oferty usługi wraz z dodatkowymi scenariuszami, przejdź do strony <a href="/pl/autokar-na-pogrzeb">Autokar na pogrzeb</a>.
              Tu znajdziesz praktyczny, krótszy przewodnik: kiedy zamawiać, jaki pojazd wybrać, kogo zabrać wspólnym transportem i jak zaplanować
              trasę dom-kościół-cmentarz-stypa.
            </p>

            <h2>Kiedy zamawiać transport na pogrzeb</h2>
            <p>
              Najczęściej rodzina zgłasza potrzebę transportu dzień lub dwa po śmierci bliskiego, gdy termin ceremonii jest już potwierdzony.
              W praktyce oznacza to zwykle 2-7 dni do pogrzebu. Taki termin jest wystarczający, ale wymaga szybkiej decyzji: liczba osób,
              punkty trasy i orientacyjne godziny.
            </p>
            <p>
              Realny czas reakcji przewoźnika to najczęściej 24 godziny na wycenę i do 48 godzin na zamknięcie rezerwacji. W pilnych przypadkach,
              gdy pogrzeb jest za 2-3 dni, obsługa bywa możliwa nawet tego samego dnia, jeśli pojazd i kierowca są dostępni. Najtrudniejsze
              terminy to piątki i soboty, dlatego telefon wykonany wcześniej daje zwykle większy wybór i spokojniejszy przebieg dnia ceremonii.
            </p>

            <h2>Bus czy autokar - jaki pojazd wybrać</h2>
            <p>
              Wybór pojazdu powinien wynikać z liczby pasażerów i długości trasy. Dla mniejszych grup wystarcza bus, dla większych rodzin
              i gości wygodniejszy jest autokar. Poniżej orientacyjne widełki, które pomagają oszacować budżet.
            </p>

            <div className="not-prose mt-6 overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Liczba osób</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Pojazd</th>
                    <th className="border-b border-gray-200 px-4 py-3 font-semibold text-gray-900">Cena orientacyjna</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">5-15</td>
                    <td className="border-b border-gray-200 px-4 py-3">Bus 19-osobowy</td>
                    <td className="border-b border-gray-200 px-4 py-3">400-700 zł</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">15-25</td>
                    <td className="border-b border-gray-200 px-4 py-3">Bus 30-osobowy</td>
                    <td className="border-b border-gray-200 px-4 py-3">600-900 zł</td>
                  </tr>
                  <tr>
                    <td className="border-b border-gray-200 px-4 py-3">25-45</td>
                    <td className="border-b border-gray-200 px-4 py-3">Autokar 49-osobowy</td>
                    <td className="border-b border-gray-200 px-4 py-3">800-1200 zł</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">45-65</td>
                    <td className="px-4 py-3">Autokar 53-67 osobowy</td>
                    <td className="px-4 py-3">1000-1500 zł</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              W cenie zwykle mieszczą się paliwo, kierowca, ubezpieczenie pojazdu i postój pod kościołem na czas mszy. Dobra praktyka to wybór
              pojazdu o 5-10 miejsc większego niż obecna deklaracja. W dniu pogrzebu często dołączają dalsi krewni lub goście, którzy wcześniej
              nie potwierdzili obecności.
            </p>

            <h2>Trasa dnia pogrzebu: więcej niż dwa punkty</h2>
            <p>
              Wiele osób zakłada trasę kościół-cmentarz, ale rzeczywisty plan jest zwykle dłuższy. Najczęściej obejmuje zbiórkę rodziny, dojazd
              do kościoła, przejazd na cmentarz, następnie stypę i odwóz gości. Łącznie to 4-6 godzin dyspozycyjności pojazdu, czasem dłużej,
              jeśli msza rozpoczyna się późnym popołudniem.
            </p>
            <p>
              Przed kontaktem warto przygotować krótką listę punktów z adresami i orientacyjnymi godzinami. Dzięki temu wycena jest dokładniejsza,
              a kierowca może zaplanować postoje i dojazdy bez pośpiechu. Taki prosty dokument bardzo ułatwia dzień ceremonii.
            </p>

            <h2>Kto powinien jechać autokarem</h2>
            <p>
              Najczęściej autokarem jadą najbliżsi, seniorzy, osoby z ograniczoną mobilnością i goście przyjezdni. Dalsza rodzina oraz znajomi
              zwykle dojeżdżają własnymi samochodami bezpośrednio do kościoła i na cmentarz.
            </p>

            <ul>
              <li>Najbliższa rodzina: wspólny przejazd, mniej stresu z parkowaniem i koordynacją.</li>
              <li>Seniorzy i osoby wymagające wsparcia: bezpieczniej, opiekun jedzie obok.</li>
              <li>Dzieci i młodzież: jedna grupa pod opieką, mniej ryzyka spóźnień.</li>
              <li>Goście z innych miast: odbiór z dworca i odwóz po stypie.</li>
              <li>Dalsza rodzina i znajomi: zwykle własny dojazd, gdy liczba osób jest większa.</li>
            </ul>

            <h2>Dyskrecja i formalności</h2>
            <p>
              W praktyce dyskrecja oznacza stonowany pojazd, spokojną pracę kierowcy i brak elementów, które mogłyby rozpraszać rodzinę.
              Warto jasno zaznaczyć przy zamówieniu, że zależy Ci na neutralnym wyglądzie pojazdu i cichym przebiegu transportu.
            </p>
            <p>
              Druga ważna sprawa to płatność. Dla pogrzebów standardem jest faktura z 14-dniowym terminem i rozliczenie po ceremonii.
              W wielu sytuacjach nie wymaga się zadatku, bo to szczególny typ zlecenia, w którym liczy się szybka pomoc i zaufanie.
            </p>
            <p>
              Podsumowując: dobry transport pogrzebowy nie polega na rozbudowanej logistyce, tylko na prostym planie, rzetelnym kierowcy
              i przewidywalnej organizacji. To właśnie te elementy sprawiają, że rodzina może skupić się na pożegnaniu bliskiej osoby,
              a nie na telefonach i improwizacji między punktami trasy.
            </p>
          </article>
        </section>

        <section className="bg-gray-50">
          <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900">Ciekawostka</h2>
            <p className="mt-4 text-lg italic leading-8 text-gray-700">
              Tradycja konduktu pogrzebowego ma w Polsce długą historię. Jeszcze w XX wieku rodziny pokonywały znaczące odcinki pieszo,
              a transport zbiorowy dopiero z czasem stał się standardem miejskim. Dziś autokar najczęściej nie zastępuje tradycji,
              tylko porządkuje logistykę dnia pogrzebu: pozwala bezpiecznie przewieźć bliskich między punktami ceremonii.
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
            <h2 className="text-3xl font-black">Potrzebujesz autokaru na pogrzeb?</h2>
            <p className="mt-4 text-base leading-7 text-gray-200">
              Sprawdź pełną ofertę usługi i scenariusze organizacji transportu: <a href="/pl/autokar-na-pogrzeb" className="text-amber-400">Autokar na pogrzeb</a>.
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
            <p className="mt-6 text-sm text-gray-400">
              Autor: Rafał Chmiel, właściciel MUSZKIETER. 24 lata w branży, ponad 100 pogrzebów obsłużonych dyskretnie.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
