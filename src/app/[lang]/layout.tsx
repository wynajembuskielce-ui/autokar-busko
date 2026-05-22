import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LocalBusinessSchema } from '@/components/StructuredData';
import '../globals.css';

const VALID = ['pl', 'en', 'de', 'ru', 'ar', 'es', 'fr'];

export function generateStaticParams() {
  return VALID.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const activeLang = VALID.includes(lang) ? lang : 'pl';
  const titles: Record<string, string> = {
    pl: 'Wynajem Autokarów Kielce | Busy, Autokary, Transfer',
    en: 'Coach Rental Kielce | Buses, Coach Hire, Airport Transfer',
    de: 'Busmiete Kielce | Reisebusse, Flughafentransfer',
    ru: 'Аренда автобусов Кельце | Автобусы, Трансфер в аэропорт',
    ar: 'تأجير الحافلات كيلتسه | حافلات، نقل المطار',
    es: 'Alquiler de autobuses Kielce | Autobuses, Traslado al aeropuerto',
    fr: 'Location de bus Kielce | Bus, Transfert aéroport',
  };
  const descs: Record<string, string> = {
    pl: 'Profesjonalny wynajem autokarów w Kielcach. Transport na wycieczki szkolne, wesela, targi MSPO, transfer lotnisko.',
    en: 'Professional coach rental in Kielce. School trips, weddings, MSPO trade fairs, airport transfer.',
    de: 'Professionelle Busmiete in Kielce. Schulausflüge, Hochzeiten, MSPO Messe, Flughafentransfer.',
    ru: 'Профессиональная аренда автобусов в Кельце. Школьные поездки, свадьбы, выставки MSPO и трансфер в аэропорт.',
    ar: 'تأجير حافلات احترافي في كيلتسه. رحلات مدرسية، حفلات زفاف، معارض MSPO، ونقل إلى المطار.',
    es: 'Alquiler profesional de autobuses en Kielce. Excursiones escolares, bodas, ferias MSPO y traslado al aeropuerto.',
    fr: 'Location professionnelle de bus à Kielce. Sorties scolaires, mariages, salons MSPO et transfert aéroport.',
  };

  const ogLocaleByLang: Record<string, string> = {
    pl: 'pl_PL',
    en: 'en_US',
    de: 'de_DE',
    ru: 'ru_RU',
    ar: 'ar_SA',
    es: 'es_ES',
    fr: 'fr_FR',
  };

  const title = titles[activeLang] || titles.pl;
  const description = descs[activeLang] || descs.pl;
  const pageUrl = `https://wynajem-autobus.pl/${activeLang}`;
  const ogImage = 'https://wynajem-autobus.pl/images/wesele.jpg';

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: ogLocaleByLang[activeLang] || 'pl_PL',
      url: pageUrl,
      siteName: 'Wynajem Autokar Kielce',
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Wynajem Autokar Kielce - 23 lata doswiadczenia, 180 pojazdow',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: pageUrl,
      languages: {
        'pl-PL': 'https://wynajem-autobus.pl/pl',
        'en-US': 'https://wynajem-autobus.pl/en',
        'de-DE': 'https://wynajem-autobus.pl/de',
        'ru-RU': 'https://wynajem-autobus.pl/ru',
        'ar-SA': 'https://wynajem-autobus.pl/ar',
        'es-ES': 'https://wynajem-autobus.pl/es',
        'fr-FR': 'https://wynajem-autobus.pl/fr',
      },
    },
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!VALID.includes(lang)) notFound();
  return (
    <>
      <LocalBusinessSchema />
      <Header lang={lang as 'pl' | 'en' | 'de' | 'ru' | 'ar' | 'es' | 'fr'} />
      {children}
      <Footer lang={lang as 'pl' | 'en' | 'de' | 'ru' | 'ar' | 'es' | 'fr'} />
    </>
  );
}
