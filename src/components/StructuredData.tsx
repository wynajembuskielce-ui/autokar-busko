export function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://autokar-busko.pl/#organization',
    name: 'Autokar Busko',
    alternateName: ['Autokar Busko-Zdrój', 'Autokar Ponidzie'],
    image: 'https://autokar-busko.pl/images/wesele.jpg',
    url: 'https://autokar-busko.pl',
    telephone: '+48413453225',
    email: 'biuro@autokar-busko.pl',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Poprzeczna 1',
      addressLocality: 'Busko-Zdrój',
      postalCode: '28-100',
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
    mainEntityOfPage: 'https://autokar-busko.pl/o-autokar-busko',
    subjectOf: {
      '@type': 'AboutPage',
      url: 'https://autokar-busko.pl/o-autokar-busko',
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
