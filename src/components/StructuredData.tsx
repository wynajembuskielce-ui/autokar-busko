export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://wynajem-autobus.pl/#organization',
    name: 'Muszkieter',
    alternateName: ['Muszkieter Kielce', 'Grupa Muszkieter'],
    image: 'https://wynajem-autobus.pl/images/wesele.jpg',
    url: 'https://wynajem-autobus.pl',
    telephone: '+48601076652',
    email: 'biuro@muszkieter.pl',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Kolberga 9',
      addressLocality: 'Kielce',
      postalCode: '25-516',
      addressCountry: 'PL',
    },
    subOrganization: [
      {
        '@type': 'Organization',
        name: 'Uslugi Handel Transport Anna Chmiel',
        alternateName: 'UHT Anna Chmiel',
        legalName: 'Uslugi Handel Transport Anna Chmiel',
        identifier: 'CEIDG',
      },
      {
        '@type': 'Corporation',
        name: 'Alfa Bus Sp. z o.o.',
        legalName: 'Alfa Bus Spolka z ograniczona odpowiedzialnoscia',
        identifier: 'KRS:1200396',
      },
    ],
    mainEntityOfPage: 'https://wynajem-autobus.pl/o-grupie-muszkieter',
    subjectOf: {
      '@type': 'AboutPage',
      url: 'https://wynajem-autobus.pl/o-grupie-muszkieter',
    },
    foundingDate: '1997',
    numberOfEmployees: '20-50',
    sameAs: [
      'https://muszkieter.pl',
      'https://busykrakow.pl',
      'https://snowbus.pl',
      'https://coachhirepoland.pl',
      'https://rejestr.io/krs/1200396/alfa-bus-26',
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
