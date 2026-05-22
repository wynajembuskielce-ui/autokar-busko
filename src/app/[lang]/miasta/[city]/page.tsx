import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import citiesData from '@/data/cities.json';

// ────────────────────────────────────────────────────────────────────
// TYPY I STAŁE
// ────────────────────────────────────────────────────────────────────

type City = {
  slug: string;
  name: string;
  region: string;
  lat: number;
  lng: number;
};

const SUPPORTED_LANGS = ['pl', 'en', 'de', 'ru', 'ar', 'es', 'fr'] as const;
type Lang = (typeof SUPPORTED_LANGS)[number];

const HREFLANG_MAP: Record<Lang, string> = {
  pl: 'pl-PL',
  en: 'en-US',
  de: 'de-DE',
  ru: 'ru-RU',
  ar: 'ar-SA',
  es: 'es-ES',
  fr: 'fr-FR',
};

const SITE_URL = 'https://www.autokar-busko.pl';
const PHONE = '+48 601 076 652';
const PHONE_HREF = 'tel:+48601076652';
const EMAIL = 'biuro@muszkieter.pl';

const cities = citiesData as City[];

// ────────────────────────────────────────────────────────────────────
// STATIC PARAMS — wszystkie kombinacje lang × city = 7 × 20 = 140 stron
// ────────────────────────────────────────────────────────────────────

export async function generateStaticParams(): Promise<
  Array<{ lang: string; city: string }>
> {
  const params: Array<{ lang: string; city: string }> = [];
  for (const lang of SUPPORTED_LANGS) {
    for (const city of cities) {
      params.push({ lang, city: city.slug });
    }
  }
  return params;
}

// nieznane miasto / język = 404, bez ICR (Incremental Static Regeneration)
export const dynamicParams = false;

// ────────────────────────────────────────────────────────────────────
// METADATA — unikalne per miasto + hreflang dla 7 języków
// ────────────────────────────────────────────────────────────────────

type PageProps = {
  params: Promise<{ lang: string; city: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang, city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    return {
      title: 'Strona nie znaleziona — MUSZKIETER Group',
    };
  }

  const title = `Wynajem autokaru ${city.name} — MUSZKIETER Group | Kielce`;
  const description = `Profesjonalny wynajem autokarów z Kielc do ${city.name}. Obsługujemy trasy w województwie ${city.region} i całej Polsce. 23 lata doświadczenia, 180 pojazdów. Tel. ${PHONE}.`;

  const canonical = `${SITE_URL}/${lang}/miasta/${city.slug}`;
  const languageAlternates: Record<string, string> = {};
  for (const l of SUPPORTED_LANGS) {
    languageAlternates[HREFLANG_MAP[l]] = `${SITE_URL}/${l}/miasta/${city.slug}`;
  }
  languageAlternates['x-default'] = `${SITE_URL}/pl/miasta/${city.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'MUSZKIETER Group — wynajem autokaru Kielce',
      locale: HREFLANG_MAP[lang as Lang] ?? 'pl_PL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// ────────────────────────────────────────────────────────────────────
// PAGE
// ────────────────────────────────────────────────────────────────────

export default async function MiastoPage({ params }: PageProps) {
  const { lang, city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city || !SUPPORTED_LANGS.includes(lang as Lang)) {
    notFound();
  }

  // Schema.org LocalBusiness z koordynatami miasta docelowego (areaServed)
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/${lang}/miasta/${city.slug}#business`,
    name: `MUSZKIETER Group — wynajem autokaru ${city.name}`,
    description: `Profesjonalny wynajem autokarów z Kielc do ${city.name}. Województwo ${city.region}.`,
    url: `${SITE_URL}/${lang}/miasta/${city.slug}`,
    telephone: PHONE,
    email: EMAIL,
    priceRange: 'PLN',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ul. Kolberga 9',
      addressLocality: 'Kielce',
      postalCode: '25-516',
      addressRegion: 'świętokrzyskie',
      addressCountry: 'PL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 50.8661,
      longitude: 20.6286,
    },
    areaServed: [
      {
        '@type': 'City',
        name: city.name,
        geo: {
          '@type': 'GeoCoordinates',
          latitude: city.lat,
          longitude: city.lng,
        },
      },
      {
        '@type': 'AdministrativeArea',
        name: `województwo ${city.region}`,
      },
    ],
    serviceType: 'Wynajem autokarów',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: `${SITE_URL}/${lang}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Miasta',
        item: `${SITE_URL}/${lang}/miasta`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: city.name,
        item: `${SITE_URL}/${lang}/miasta/${city.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 text-sm text-gray-400"
        >
          <a href={`/${lang}`} className="hover:text-[#f59e0b]">
            Strona główna
          </a>
          <span className="mx-2">/</span>
          <a
            href={`/${lang}/miasta`}
            className="hover:text-[#f59e0b]"
          >
            Miasta
          </a>
          <span className="mx-2">/</span>
          <span className="text-white">{city.name}</span>
        </nav>

        {/* H1 */}
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Wynajem autokaru{' '}
          <span className="text-[#f59e0b]">{city.name}</span> —{' '}
          MUSZKIETER&nbsp;Group
        </h1>

        {/* Opis */}
        <p className="mt-6 text-lg leading-relaxed text-gray-300">
          Profesjonalny wynajem autokarów z Kielc do{' '}
          <strong className="text-white">{city.name}</strong>. Obsługujemy
          trasy w województwie{' '}
          <strong className="text-white">{city.region}</strong> i całej
          Polsce. 23 lata doświadczenia, 180 pojazdów, kierowcy z
          uprawnieniami międzynarodowymi.
        </p>

        {/* CTA */}
        <div className="mt-10 rounded-2xl border border-[#f59e0b]/30 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#f59e0b]">
            Zamów wycenę trasy Kielce → {city.name}
          </h2>
          <p className="mt-3 text-gray-300">
            Zadzwoń lub wyślij zapytanie — odpowiadamy w ciągu 60 minut w
            godzinach pracy biura.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f59e0b] px-6 py-3 font-semibold text-black transition-colors hover:bg-[#e0890a]"
              aria-label={`Zadzwoń pod numer ${PHONE}`}
            >
              <span aria-hidden="true">📞</span> {PHONE}
            </a>
            <a
              href={`/${lang}/kontakt`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#f59e0b] bg-transparent px-6 py-3 font-semibold text-[#f59e0b] transition-colors hover:bg-[#f59e0b]/10"
            >
              Formularz zapytania
            </a>
            <a
              href={`/${lang}/kalkulator`}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 bg-transparent px-6 py-3 font-semibold text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
            >
              Kalkulator ceny
            </a>
          </div>
        </div>

        {/* Dane techniczne miasta */}
        <dl className="mt-10 grid gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-lg border border-gray-800 bg-[#222] p-4">
            <dt className="text-gray-500">Miasto docelowe</dt>
            <dd className="mt-1 text-white">{city.name}</dd>
          </div>
          <div className="rounded-lg border border-gray-800 bg-[#222] p-4">
            <dt className="text-gray-500">Województwo</dt>
            <dd className="mt-1 text-white">{city.region}</dd>
          </div>
          <div className="rounded-lg border border-gray-800 bg-[#222] p-4">
            <dt className="text-gray-500">Koordynaty</dt>
            <dd className="mt-1 font-mono text-xs text-white">
              {city.lat.toFixed(4)}, {city.lng.toFixed(4)}
            </dd>
          </div>
        </dl>

        {/* Trust signals */}
        <div className="mt-12 border-t border-gray-800 pt-8 text-sm text-gray-400">
          <p>
            <strong className="text-white">MUSZKIETER Group</strong> ·
            Alfa Bus Sp. z o.o. · ul. Kolberga 9, 25-516 Kielce ·
            licencja transport krajowy i międzynarodowy WITD ·{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-[#f59e0b] hover:underline"
            >
              {EMAIL}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
