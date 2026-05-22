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
    pl: 'Autokar Busko | Busy, Autokary, Transfer – Ponidzie',
    en: 'Coach Rental Busko-Zdrój | Buses, Coach Hire, Airport Transfer',
    de: 'Busmiete Busko-Zdrój | Reisebusse, Flughafentransfer',
    ru: 'Аренда автобусов Буско-Здруй | Автобусы, Трансфер в аэропорт',
    ar: 'تأجير الحافلات بوسكو-زدروي | حافلات، نقل المطار',
    es: 'Alquiler de autobuses Busko-Zdrój | Autobuses, Traslado al aeropuerto',
    fr: 'Location de bus Busko-Zdrój | Bus, Transfert aéroport',
  };
  const descs: Record<string, string> = {
    pl: 'Profesjonalny wynajem autokarów w Busku-Zdroju. Transport na wycieczki szkolne, wesela, pielgrzymki Ponidzie, transfer lotnisko.',
    en: 'Professional coach rental in Busko-Zdrój. School trips, weddings, pilgrimages, airport transfer.',
    de: 'Professionelle Busmiete in Busko-Zdrój. Schulausflüge, Hochzeiten, Pilgerfahrten, Flughafentransfer.',
    ru: 'Профессиональная аренда автобусов в Буско-Здруй. Школьные поездки, свадьбы, паломничества и трансфер в аэропорт.',
    ar: 'تأجير حافلات احترافي في بوسكو-زدروي. رحلات مدرسية، حفلات زفاف، حج، ونقل إلى المطار.',
    es: 'Alquiler profesional de autobuses en Busko-Zdrój. Excursiones escolares, bodas, peregrinaciones y traslado al aeropuerto.',
    fr: 'Location professionnelle de bus à Busko-Zdrój. Sorties scolaires, mariages, pèlerinages et transfert aéroport.',
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
  const pageUrl = `https://www.autokar-busko.pl/${activeLang}`;
  const ogImage = 'https://www.autokar-busko.pl/images/wesele.jpg';

  return {
    title,
    description,
    openGraph: {
      type: 'website',
      locale: ogLocaleByLang[activeLang] || 'pl_PL',
      url: pageUrl,
      siteName: 'Autokar Busko',
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Autokar Busko – wynajem autokarów Busko-Zdrój, Ponidzie',
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
        'pl-PL': 'https://www.autokar-busko.pl/pl',
        'en-US': 'https://www.autokar-busko.pl/en',
        'de-DE': 'https://www.autokar-busko.pl/de',
        'ru-RU': 'https://www.autokar-busko.pl/ru',
        'ar-SA': 'https://www.autokar-busko.pl/ar',
        'es-ES': 'https://www.autokar-busko.pl/es',
        'fr-FR': 'https://www.autokar-busko.pl/fr',
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
