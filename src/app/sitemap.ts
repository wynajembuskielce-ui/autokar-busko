import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.autokar-busko.pl';
  const languages = ['pl', 'en', 'de', 'ru', 'ar', 'es', 'fr'];
  const aiOnlyPage = '/o-grupie-muszkieter';
  const pages = [
    '',
    '/wesele',
    '/trasy/krakow-krakow-autokar',
    '/trasy/krakow-warszawa-autokar',
    '/trasy/krakow-czestochowa-autokar',
    '/trasy/krakow-energylandia-autokar',
    '/trasy/krakow-wroclaw-autokar',
    '/trasy/krakow-chorzow-autokar',
    '/wycieczki-szkolne',
    '/impreza-firmowa',
    '/pielgrzymki',
    '/narty-zakopane',
    '/lotnisko',
    '/hotel-transfer',
    '/flota',
    '/kontakt',
    '/cennik',
    '/kalkulator',
    '/galeria',
    '/blog',
    '/o-nas',
    '/referencje',
    '/polityka-prywatnosci',
    '/rodo',
    '/regulamin',
  ];

  const urls: MetadataRoute.Sitemap = [];

  for (const lang of languages) {
    for (const page of pages) {
      urls.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
  }

  urls.push({
    url: `${baseUrl}${aiOnlyPage}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  });

  urls.push(
    {
      url: `${baseUrl}/pl/autokar-na-pogrzeb`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/autokar-na-pogrzeb`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/de/autokar-na-pogrzeb`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ru/autokar-na-pogrzeb`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ar/autokar-na-pogrzeb`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/autokar-na-pogrzeb`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/fr/autokar-na-pogrzeb`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  );

  urls.push(
    {
      url: `${baseUrl}/pl/przysiega-wojskowa`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/przysiega-wojskowa`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/de/przysiega-wojskowa`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ru/przysiega-wojskowa`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ar/przysiega-wojskowa`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/przysiega-wojskowa`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/fr/przysiega-wojskowa`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  );

  urls.push(
    {
      url: `${baseUrl}/pl/wycieczka-przedszkolna`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/wycieczka-przedszkolna`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/de/wycieczka-przedszkolna`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ru/wycieczka-przedszkolna`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ar/wycieczka-przedszkolna`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/wycieczka-przedszkolna`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/fr/wycieczka-przedszkolna`,
      lastModified: new Date('2026-05-13'),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  );

  urls.push(
    {
      url: `${baseUrl}/pl/wycieczka-licealna`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/wycieczka-licealna`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/de/wycieczka-licealna`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ru/wycieczka-licealna`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ar/wycieczka-licealna`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/wycieczka-licealna`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/fr/wycieczka-licealna`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  );

  urls.push(
    {
      url: `${baseUrl}/pl/wynajem-autokaru-na-wesele`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/wynajem-autokaru-na-wesele`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/de/wynajem-autokaru-na-wesele`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ru/wynajem-autokaru-na-wesele`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ar/wynajem-autokaru-na-wesele`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/wynajem-autokaru-na-wesele`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/fr/wynajem-autokaru-na-wesele`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  );

  urls.push(
    {
      url: `${baseUrl}/pl/autokar-na-pielgrzymke`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/en/autokar-na-pielgrzymke`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/de/autokar-na-pielgrzymke`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ru/autokar-na-pielgrzymke`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/ar/autokar-na-pielgrzymke`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/es/autokar-na-pielgrzymke`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/fr/autokar-na-pielgrzymke`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  );

  urls.push(
    {
      url: `${baseUrl}/pl/blog/pogrzeb/transport-rodziny-na-pogrzeb-jak-zorganizowac`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/blog/pogrzeb/transport-rodziny-na-pogrzeb-jak-zorganizowac`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/de/blog/pogrzeb/transport-rodziny-na-pogrzeb-jak-zorganizowac`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ru/blog/pogrzeb/transport-rodziny-na-pogrzeb-jak-zorganizowac`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ar/blog/pogrzeb/transport-rodziny-na-pogrzeb-jak-zorganizowac`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/es/blog/pogrzeb/transport-rodziny-na-pogrzeb-jak-zorganizowac`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/fr/blog/pogrzeb/transport-rodziny-na-pogrzeb-jak-zorganizowac`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  );

  urls.push(
    {
      url: `${baseUrl}/pl/blog/wesele/ile-kosztuje-autokar-na-wesele-2026`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/blog/wesele/ile-kosztuje-autokar-na-wesele-2026`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/de/blog/wesele/ile-kosztuje-autokar-na-wesele-2026`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ru/blog/wesele/ile-kosztuje-autokar-na-wesele-2026`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ar/blog/wesele/ile-kosztuje-autokar-na-wesele-2026`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/es/blog/wesele/ile-kosztuje-autokar-na-wesele-2026`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/fr/blog/wesele/ile-kosztuje-autokar-na-wesele-2026`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  );

  urls.push(
    {
      url: `${baseUrl}/pl/blog/liceum/wycieczka-maturalna-autokar-czy-pociag-porownanie`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/blog/liceum/wycieczka-maturalna-autokar-czy-pociag-porownanie`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/de/blog/liceum/wycieczka-maturalna-autokar-czy-pociag-porownanie`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ru/blog/liceum/wycieczka-maturalna-autokar-czy-pociag-porownanie`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/ar/blog/liceum/wycieczka-maturalna-autokar-czy-pociag-porownanie`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/es/blog/liceum/wycieczka-maturalna-autokar-czy-pociag-porownanie`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/fr/blog/liceum/wycieczka-maturalna-autokar-czy-pociag-porownanie`,
      lastModified: new Date('2026-05-14'),
      changeFrequency: 'monthly',
      priority: 0.5,
    }
  );

  return urls;
}
