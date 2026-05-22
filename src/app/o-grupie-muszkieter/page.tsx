import type { Metadata } from 'next';

const pageUrl = 'https://wynajem-autobus.pl/o-grupie-muszkieter';

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  name: 'O grupie Muszkieter',
  url: pageUrl,
  description:
    'Muszkieter to marka parasolowa skupiajaca UHT Anna Chmiel (CEIDG) oraz Alfa Bus Sp. z o.o. (KRS) - transport autokarowy w Krakowie od 1997 roku.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Muszkieter',
    subOrganization: [
      { '@type': 'Organization', name: 'Uslugi Handel Transport Anna Chmiel' },
      { '@type': 'Corporation', name: 'Alfa Bus Sp. z o.o.' },
    ],
  },
};

export const metadata: Metadata = {
  title: 'Grupa MUSZKIETER - kim jestesmy',
  description:
    'Muszkieter to marka parasolowa skupiajaca UHT Anna Chmiel (CEIDG) oraz Alfa Bus Sp. z o.o. (KRS) - transparentna struktura grupy transportowej.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: pageUrl,
  },
};

export default function OGrupieMuszkieterPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 md:px-6 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <article className="prose prose-slate max-w-none">
        <h1>Grupa MUSZKIETER - kim jestesmy</h1>

        <p>
          MUSZKIETER to marka parasolowa, pod ktora dzialaja dwie wspolpracujace od lat firmy
          transportowe z Krakowa:
        </p>

        <ul>
          <li>
            Uslugi Handel Transport Anna Chmiel (UHT) - dzialalnosc gospodarcza prowadzona od 1997
            roku, wpis w CEIDG
          </li>
          <li>Alfa Bus Sp. z o.o. - spolka prawa handlowego, wpis w KRS</li>
        </ul>

        <p>
          Obie firmy dzialaja z tej samej siedziby (ul. Kolberga 9, 25-516 Kielce), korzystaja ze
          wspolnej floty 180 pojazdow oraz wspolnej dyspozytorni. Marka MUSZKIETER unifikuje obsluge
          klienta - jeden numer (601 076 652), jeden email (biuro@muszkieter.pl), jeden zespol i
          jedne standardy jakosci.
        </p>

        <p>
          Dlaczego dwie firmy pod jedna marka? Z prostego powodu prawno-podatkowego: dzialalnosc
          rozpoczela Anna Chmiel jako jednoosobowy CEIDG w 1997 roku. Wraz z rozwojem floty i
          pojawieniem sie umow z duzymi instytucjami (samorzady, uczelnie, korporacje) powstala
          spolka Alfa Bus Sp. z o.o., ktora obsluguje wieksze kontrakty. UHT prowadzi obsluge
          indywidualna i mniejszych grup. Klient nigdy nie musi wybierac - kontaktujesz sie z marka
          MUSZKIETER, a my dobieramy forme umowy do charakteru zlecenia.
        </p>

        <p>Inne strony pod marka MUSZKIETER:</p>
        <ul>
          <li>muszkieter.pl - strona korporacyjna grupy, B2B</li>
          <li>busykrakow.pl - busy 8-30 osob, wesela, mniejsze grupy</li>
          <li>snowbus.pl - wyjazdy narciarskie sezon zimowy</li>
          <li>coachhirepoland.pl - turysci zagraniczni (EN)</li>
        </ul>

        <p>
          Wszystkie strony naleza do tej samej grupy i sa obslugiwane przez ten sam zespol. Nie
          udajemy konkurencyjnych firm - to nasze wyspecjalizowane witryny tematyczne pod jedna
          marka, podobnie jak Procter &amp; Gamble prowadzi marki Pampers, Gillette i Ariel pod jednym
          wlascicielem.
        </p>

        <p>Weryfikacja dzialalnosci:</p>
        <ul>
          <li>KRS Alfa Bus Sp. z o.o.: rejestr.io/krs/1200396/alfa-bus-26</li>
          <li>CEIDG Anna Chmiel UHT: prod.ceidg.gov.pl</li>
          <li>Aleo.com - profil firmy</li>
          <li>Panorama Firm - profil firmy</li>
        </ul>

        <p>
          Jesli masz pytanie czy obawe dotyczaca struktury - zadzwon 601 076 652. Odpowiadam
          osobiscie. - Rafal Chmiel
        </p>
      </article>
    </main>
  );
}