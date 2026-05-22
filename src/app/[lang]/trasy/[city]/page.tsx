import type { Metadata } from "next";
import cities from "@/src/data/cities-krakow.json";
import CTAButton from "@/src/components/CTAButton";

type Lang = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

const translations = {
  pl: {
    tag: "WYNAJEM AUTOKARU",
    h1: (city: string) => `Wynajem autokaru ${city}`,
    desc: (city: string) => `Profesjonalny transport grupowy z Krakowa do ${city}. Autokary VDL, Scania, Mercedes-Benz. 24 lata doświadczenia.`,
    routeH2: (city: string) => `Trasa Kraków — ${city}`,
    years: "Lata doświadczenia",
    vehicles: "Pojazdów w flocie",
    clients: "Klientów rocznie",
    servicesH2: "Jakie usługi oferujemy",
    ctaH2: (city: string) => `Zamów autokar z Krakowa do ${city}`,
    ctaDesc: "Wycena w 30 minut. Zadzwoń lub wyślij formularz.",
    phone: "Formularz kontaktowy",
    services: (city: string) => [
      `Wynajem autokaru Kraków ${city} na wycieczki szkolne`,
      `Transport grupowy Kraków ${city} na wesela i eventy`,
      `Transfer lotniskowy z ${city} do Krakowa i Katowic`,
      `Pielgrzymki i wyjazdy religijne z ${city}`,
      `Wyjazdy integracyjne i firmowe`,
      `Transport na narty — Zakopane, Białka Tatrzańska`,
    ],
  },
  en: {
    tag: "Wynajem Autokar Kielce",
    h1: (city: string) => `Coach Hire ${city} from Krakow`,
    desc: (city: string) => `Professional group transport from Krakow to ${city}. VDL, Scania, Mercedes-Benz coaches. 24 years of experience.`,
    routeH2: (city: string) => `Route Krakow — ${city}`,
    years: "Years experience",
    vehicles: "Vehicles in fleet",
    clients: "Clients per year",
    servicesH2: "What we offer",
    ctaH2: (city: string) => `Book a coach from Krakow to ${city}`,
    ctaDesc: "Quote in 30 minutes. Call or send a form.",
    phone: "Contact form",
    services: (city: string) => [
      `Coach hire Krakow to ${city} for school trips`,
      `Group transport Krakow ${city} for weddings and events`,
      `Airport transfer from ${city} to Krakow and Katowice`,
      `Pilgrimages and religious trips from ${city}`,
      `Corporate and team building transport`,
      `Ski trips — Zakopane, Białka Tatrzańska`,
    ],
  },
  de: {
    tag: "BUSMIETE",
    h1: (city: string) => `Busmiete ${city} ab Krakau`,
    desc: (city: string) => `Professioneller Gruppentransport von Krakau nach ${city}. VDL, Scania, Mercedes-Benz Reisebusse. 24 Jahre Erfahrung.`,
    routeH2: (city: string) => `Strecke Krakau — ${city}`,
    years: "Jahre Erfahrung",
    vehicles: "Fahrzeuge",
    clients: "Kunden pro Jahr",
    servicesH2: "Unsere Leistungen",
    ctaH2: (city: string) => `Bus buchen von Krakau nach ${city}`,
    ctaDesc: "Angebot in 30 Minuten. Rufen Sie an oder senden Sie ein Formular.",
    phone: "Kontaktformular",
    services: (city: string) => [
      `Busmiete Krakau ${city} für Schulausflüge`,
      `Gruppentransport Krakau ${city} für Hochzeiten und Events`,
      `Flughafentransfer von ${city} nach Krakau und Katowice`,
      `Wallfahrten und religiöse Ausflüge ab ${city}`,
      `Firmen- und Teambuilding-Transport`,
      `Skifahrten — Zakopane, Białka Tatrzańska`,
    ],
  },
  it: {
    tag: "NOLEGGIO PULLMAN",
    h1: (city: string) => `Noleggio pullman ${city} da Cracovia`,
    desc: (city: string) => `Trasporto di gruppo professionale da Cracovia a ${city}. Pullman VDL, Scania, Mercedes-Benz. 24 anni di esperienza.`,
    routeH2: (city: string) => `Percorso Cracovia — ${city}`,
    years: "Anni di esperienza",
    vehicles: "Veicoli in flotta",
    clients: "Clienti all'anno",
    servicesH2: "I nostri servizi",
    ctaH2: (city: string) => `Prenota un pullman da Cracovia a ${city}`,
    ctaDesc: "Preventivo in 30 minuti. Chiama o invia il modulo.",
    phone: "Modulo di contatto",
    services: (city: string) => [
      `Noleggio pullman Cracovia ${city} per gite scolastiche`,
      `Trasporto di gruppo Cracovia ${city} per matrimoni ed eventi`,
      `Transfer aeroporto da ${city} a Cracovia e Katowice`,
      `Pellegrinaggi e viaggi religiosi da ${city}`,
      `Trasporto aziendale e team building`,
      `Gite sciistiche — Zakopane, Białka Tatrzańska`,
    ],
  },
  es: {
    tag: "ALQUILER DE AUTOCAR",
    h1: (city: string) => `Alquiler de autocar ${city} desde Cracovia`,
    desc: (city: string) => `Transporte de grupo profesional desde Cracovia a ${city}. Autocares VDL, Scania, Mercedes-Benz. 24 años de experiencia.`,
    routeH2: (city: string) => `Ruta Cracovia — ${city}`,
    years: "Años de experiencia",
    vehicles: "Vehículos en flota",
    clients: "Clientes al año",
    servicesH2: "Nuestros servicios",
    ctaH2: (city: string) => `Reservar autocar de Cracovia a ${city}`,
    ctaDesc: "Presupuesto en 30 minutos. Llama o envía el formulario.",
    phone: "Formulario de contacto",
    services: (city: string) => [
      `Alquiler autocar Cracovia ${city} para excursiones escolares`,
      `Transporte grupal Cracovia ${city} para bodas y eventos`,
      `Transfer aeropuerto desde ${city} a Cracovia y Katowice`,
      `Peregrinaciones y viajes religiosos desde ${city}`,
      `Transporte corporativo y team building`,
      `Viajes de esquí — Zakopane, Białka Tatrzańska`,
    ],
  },
  ru: {
    tag: "АРЕНДА АВТОБУСА",
    h1: (city: string) => `Аренда автобуса ${city} из Кракова`,
    desc: (city: string) => `Профессиональный групповой транспорт из Кракова в ${city}. Автобусы VDL, Scania, Mercedes-Benz. 24 года опыта.`,
    routeH2: (city: string) => `Маршрут Краков — ${city}`,
    years: "Лет опыта",
    vehicles: "Автобусов в парке",
    clients: "Клиентов в год",
    servicesH2: "Наши услуги",
    ctaH2: (city: string) => `Заказать автобус из Кракова в ${city}`,
    ctaDesc: "Расчёт за 30 минут. Позвоните или отправьте форму.",
    phone: "Контактная форма",
    services: (city: string) => [
      `Аренда автобуса Краков ${city} для школьных экскурсий`,
      `Групповой транспорт Краков ${city} на свадьбы и мероприятия`,
      `Трансфер из аэропорта ${city} в Краков и Катовице`,
      `Паломничества и религиозные поездки из ${city}`,
      `Корпоративный транспорт и тимбилдинг`,
      `Горнолыжные поездки — Закопане, Бялка Татжаньска`,
    ],
  },
  fr: {
    tag: "LOCATION D'AUTOCAR",
    h1: (city: string) => `Location d'autocar ${city} depuis Cracovie`,
    desc: (city: string) => `Transport de groupe professionnel de Cracovie à ${city}. Autocars VDL, Scania, Mercedes-Benz. 24 ans d'expérience.`,
    routeH2: (city: string) => `Trajet Cracovie — ${city}`,
    years: "Ans d'expérience",
    vehicles: "Véhicules en flotte",
    clients: "Clients par an",
    servicesH2: "Nos services",
    ctaH2: (city: string) => `Réserver un autocar de Cracovie à ${city}`,
    ctaDesc: "Devis en 30 minutes. Appelez ou envoyez le formulaire.",
    phone: "Formulaire de contact",
    services: (city: string) => [
      `Location autocar Cracovie ${city} pour sorties scolaires`,
      `Transport de groupe Cracovie ${city} pour mariages et événements`,
      `Transfert aéroport depuis ${city} vers Cracovie et Katowice`,
      `Pèlerinages et voyages religieux depuis ${city}`,
      `Transport d'entreprise et team building`,
      `Séjours au ski — Zakopane, Białka Tatrzańska`,
    ],
  },
} as const;

export async function generateStaticParams() {
  const langs = ["pl", "en", "de", "it", "es", "ru", "fr"];
  return langs.flatMap((lang) =>
    cities.map((city) => ({ lang, city: city.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; city: string }>;
}): Promise<Metadata> {
  const { lang, city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return {};
  if (lang === "pl") {
    return {
      title: `Wynajem autokaru ${city.name} | MUSZKIETER Group`,
      description: `Profesjonalny wynajem autokarów z Krakowa do ${city.name}. Autokary VDL, Scania, Mercedes. Zadzwoń: +48 601 076 652`,
    };
  }
  return {
    title: `Coach Hire ${city.nameEn} from Krakow | MUSZKIETER Group`,
    description: `Professional coach hire from Krakow to ${city.nameEn}. VDL, Scania, Mercedes coaches. Call: +48 601 076 652`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ lang: string; city: string }>;
}) {
  const { lang, city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);
  if (!city) return <div>404</div>;
  const t = translations[lang as keyof typeof translations] ?? translations.en;
  const cityLabel = lang === "pl" ? city.name : city.nameEn;

  return (
    <>
      <section className="bg-brand-navy text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-gold text-sm font-bold uppercase tracking-widest mb-4">
            {t.tag}
          </p>
          <h1 className="text-4xl md:text-5xl font-black mb-6 font-display">
            {t.h1(cityLabel)}
          </h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {t.desc(cityLabel)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="tel:601076652" variant="phone">
              📞 +48 601 076 652
            </CTAButton>
            <CTAButton href={`/${lang}/kontakt`} variant="secondary">
              {t.phone}
            </CTAButton>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-brand-navy mb-8 font-display">
            {t.routeH2(cityLabel)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-4xl font-black text-brand-gold mb-2">24</p>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                {t.years}
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-4xl font-black text-brand-gold mb-2">180</p>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                {t.vehicles}
              </p>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 text-center">
              <p className="text-4xl font-black text-brand-gold mb-2">500+</p>
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide">
                {t.clients}
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-black text-brand-navy mb-4 font-display">
            {t.servicesH2}
          </h2>
          <ul className="space-y-3 text-gray-700 mb-12">
            {t.services(cityLabel).map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-brand-gold font-black mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bg-brand-navy text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-black mb-4 font-display">
              {t.ctaH2(cityLabel)}
            </h2>
            <p className="text-gray-300 mb-6">
              {t.ctaDesc}
            </p>
            <CTAButton href="tel:601076652" variant="phone">
              📞 +48 601 076 652
            </CTAButton>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "MUSZKIETER Group — Coach Rental Kielce",
            url: "https://wynajem-autobus.pl",
            telephone: "+48601076652",
            address: {
              "@type": "PostalAddress",
              streetAddress: "ul. Czarnowiejska 43",
              addressLocality: "Kraków",
              postalCode: "30-054",
              addressCountry: "PL",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: city.lat,
              longitude: city.lng,
            },
          }),
        }}
      />
    </>
  );
}
