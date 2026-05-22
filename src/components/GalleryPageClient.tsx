"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";
type FilterKey = "all" | "autokary" | "minibusy" | "wnetrza" | "wycieczki" | "wesela" | "narty" | "pielgrzymki";

type GalleryItem = {
  src: string;
  filter: Exclude<FilterKey, "all">;
  alt: string;
};

const FILTER_ORDER: FilterKey[] = ["all", "autokary", "minibusy", "wnetrza", "wycieczki", "wesela", "narty", "pielgrzymki"];

const uiByLang: Record<Language, { title: string; subtitle: string; teamTitle: string; teamSubtitle: string; cta: string; ctaButton: string }> = {
  pl: {
    title: "Nasza flota - autokary, busy i minibusy do wynajecia",
    subtitle: "Realne zdjecia pojazdow i realizacji z wyjazdow grupowych. Kliknij, aby powiekszyc.",
    teamTitle: "Nasz zespol kierowcow",
    teamSubtitle: "Doswiadczeni kierowcy, ktorzy dbaja o bezpieczenstwo i punktualnosc kazdego kursu.",
    cta: "Chcesz zobaczyc pojazd na zywo? Umow ogledziny: 41 345 32 25",
    ctaButton: "Zadzwon teraz",
  },
  en: {
    title: "Our fleet - coaches, buses and minibuses for hire",
    subtitle: "Real photos from vehicles and completed group trips. Click to enlarge.",
    teamTitle: "Our driving team",
    teamSubtitle: "Experienced drivers focused on safety and punctuality on every route.",
    cta: "Want to inspect a vehicle live? Book a viewing: +48 41 345 32 25",
    ctaButton: "Call now",
  },
  de: {
    title: "Unsere Flotte - Reisebusse und Minibusse zur Miete",
    subtitle: "Echte Fotos von Fahrzeugen und Einsatzen. Klicken zum Vergrossern.",
    teamTitle: "Unser Fahrerteam",
    teamSubtitle: "Erfahrene Fahrer fur sichere und punktliche Fahrten.",
    cta: "Mochten Sie ein Fahrzeug live sehen? Termin vereinbaren: +48 41 345 32 25",
    ctaButton: "Jetzt anrufen",
  },
  ru: {
    title: "Nash avtpark - avtobusy i minibusy v arendu",
    subtitle: "Realnye foto mashin i vypolnennykh poezdok. Nazhmite dlya uvelicheniya.",
    teamTitle: "Nasha komanda voditeley",
    teamSubtitle: "Opytnye voditeli dlya bezopasnoy i punktualnoy poezdki.",
    cta: "Hotite posmotret transport v zhivuyu? Dogovorites: +48 41 345 32 25",
    ctaButton: "Pozvonit",
  },
  ar: {
    title: "asatylna - hafilat wa minibusat lilijar",
    subtitle: "suwar haqiqiya lilmurakabat walrahilat. adghat littakbir.",
    teamTitle: "fariq alsaeiqin",
    teamSubtitle: "saequn mukhtasun lilaman waliltizam bialmawaeid.",
    cta: "turid mushahadat almurkaba mubasharatan? ihjuz maweidan: +48 41 345 32 25",
    ctaButton: "ittasil alaan",
  },
  es: {
    title: "Nuestra flota - autocares y minibuses en alquiler",
    subtitle: "Fotos reales de vehiculos y servicios completados. Haz clic para ampliar.",
    teamTitle: "Nuestro equipo",
    teamSubtitle: "Conductores con experiencia en seguridad y puntualidad.",
    cta: "Quieres ver el vehiculo en vivo? Reserva visita: +48 41 345 32 25",
    ctaButton: "Llamar ahora",
  },
  fr: {
    title: "Notre flotte - autocars et minibus a louer",
    subtitle: "Photos reelles des vehicules et missions realisees. Cliquez pour agrandir.",
    teamTitle: "Notre equipe",
    teamSubtitle: "Des chauffeurs experimentes pour des trajets sures et ponctuels.",
    cta: "Vous voulez voir un vehicule en direct ? Prenez rendez-vous: +48 41 345 32 25",
    ctaButton: "Appeler",
  },
};

const filterLabels: Record<Language, Record<FilterKey, string>> = {
  pl: { all: "Wszystkie", autokary: "Autokary", minibusy: "Minibusy", wnetrza: "Wnetrza", wycieczki: "Wycieczki", wesela: "Wesela", narty: "Narty", pielgrzymki: "Pielgrzymki" },
  en: { all: "All", autokary: "Coaches", minibusy: "Minibuses", wnetrza: "Interiors", wycieczki: "Trips", wesela: "Weddings", narty: "Ski", pielgrzymki: "Pilgrimages" },
  de: { all: "Alle", autokary: "Reisebusse", minibusy: "Minibusse", wnetrza: "Innenraume", wycieczki: "Ausfluge", wesela: "Hochzeiten", narty: "Ski", pielgrzymki: "Pilgerfahrten" },
  ru: { all: "Vse", autokary: "Avtobusy", minibusy: "Minibusy", wnetrza: "Salony", wycieczki: "Poezdki", wesela: "Svadby", narty: "Lyzhi", pielgrzymki: "Palomnichestva" },
  ar: { all: "alkul", autokary: "hafilat", minibusy: "minibus", wnetrza: "aldakhil", wycieczki: "rihlat", wesela: "afrah", narty: "tazalluj", pielgrzymki: "haj" },
  es: { all: "Todos", autokary: "Autocares", minibusy: "Minibuses", wnetrza: "Interiores", wycieczki: "Excursiones", wesela: "Bodas", narty: "Esqui", pielgrzymki: "Peregrinaciones" },
  fr: { all: "Tous", autokary: "Autocars", minibusy: "Minibus", wnetrza: "Interieurs", wycieczki: "Excursions", wesela: "Mariages", narty: "Ski", pielgrzymki: "Pelerinages" },
};

function rangePaths(prefix: string, start: number, end: number, filter: Exclude<FilterKey, "all">, label: string): GalleryItem[] {
  const items: GalleryItem[] = [];
  for (let index = start; index <= end; index += 1) {
    items.push({
      src: `${prefix}${index}.jpg`,
      filter,
      alt: `wynajem autokar Krakow - ${label} ${index}`,
    });
  }
  return items;
}

const galleryItems: GalleryItem[] = [
  ...rangePaths("/images/flota/flota-autokar-", 1, 12, "autokary", "autokar"),
  ...rangePaths("/images/flota/flota-bus-", 1, 8, "minibusy", "minibus"),
  ...rangePaths("/images/wnetrze/wnetrze-autokar-krakow-", 1, 8, "wnetrza", "wnetrze pojazdu"),
  ...rangePaths("/images/wycieczki/wycieczka-szkolna-autokar-krakow-", 1, 12, "wycieczki", "realizacja wycieczki"),
  { src: "/images/wesele/wesele-autokar-elegancki-krakow-01.jpg", filter: "wesela", alt: "wynajem autokar Krakow - autokar na wesele 1" },
  { src: "/images/wesele/wesele-autokar-elegancki-krakow-02.jpg", filter: "wesela", alt: "wynajem autokar Krakow - autokar na wesele 2" },
  { src: "/images/wesele/wesele-autokar-elegancki-krakow-03.jpg", filter: "wesela", alt: "wynajem autokar Krakow - autokar na wesele 3" },
  { src: "/images/wesele/wesele-autokar-elegancki-krakow-04.jpg", filter: "wesela", alt: "wynajem autokar Krakow - autokar na wesele 4" },
  { src: "/images/wesele/wesele-autokar-elegancki-krakow-05.jpg", filter: "wesela", alt: "wynajem autokar Krakow - autokar na wesele 5" },
  ...rangePaths("/images/narty/narty-bus-krakow-zakopane-", 1, 8, "narty", "wyjazd narciarski"),
  { src: "/images/pielgrzymki/pielgrzymka-autokar-krakow-1.jpg", filter: "pielgrzymki", alt: "wynajem autokar Krakow - pielgrzymka 1" },
  { src: "/images/pielgrzymki/pielgrzymka-autokar-krakow-7.jpg", filter: "pielgrzymki", alt: "wynajem autokar Krakow - pielgrzymka 2" },
  { src: "/images/pielgrzymki/pielgrzymka-autokar-krakow-8.jpg", filter: "pielgrzymki", alt: "wynajem autokar Krakow - pielgrzymka 3" },
  { src: "/images/pielgrzymki/pielgrzymka-autokar-krakow-9.jpg", filter: "pielgrzymki", alt: "wynajem autokar Krakow - pielgrzymka 4" },
  { src: "/images/pielgrzymki/pielgrzymka-autokar-krakow-10.jpg", filter: "pielgrzymki", alt: "wynajem autokar Krakow - pielgrzymka 5" },
  { src: "/images/pielgrzymki/pielgrzymka-autokar-krakow-11.jpg", filter: "pielgrzymki", alt: "wynajem autokar Krakow - pielgrzymka 6" },
  { src: "/images/pielgrzymki/pielgrzymka-autokar-krakow-13.jpg", filter: "pielgrzymki", alt: "wynajem autokar Krakow - pielgrzymka 7" },
];

const teamImages = [
  "/images/kierowcy/kierowca-autokar-krakow-1.jpg",
  "/images/kierowcy/kierowca-autokar-krakow-2.jpg",
  "/images/kierowcy/kierowca-autokar-krakow-3.jpg",
  "/images/kierowcy/kierowca-autokar-krakow-4.jpg",
  "/images/kierowcy/kierowca-autokar-krakow-5.jpg",
  "/images/kierowcy/kierowca-autokar-krakow-6.jpg",
];

export default function GalleryPageClient({ lang }: { lang: Language }) {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const ui = uiByLang[lang] ?? uiByLang.pl;
  const labels = filterLabels[lang] ?? filterLabels.pl;
  const isAr = lang === "ar";

  const visibleItems = useMemo(() => {
    if (activeFilter === "all") {
      return galleryItems;
    }
    return galleryItems.filter((item) => item.filter === activeFilter);
  }, [activeFilter]);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () => setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + visibleItems.length) % visibleItems.length));
  const showNext = () => setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % visibleItems.length));

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a] mb-3">{ui.title}</h1>
          <p className="text-gray-600 max-w-3xl">{ui.subtitle}</p>
        </header>

        <section className="mb-8 flex flex-wrap gap-2">
          {FILTER_ORDER.map((filterKey) => (
            <button
              key={filterKey}
              type="button"
              onClick={() => setActiveFilter(filterKey)}
              className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                activeFilter === filterKey ? "bg-[#1a1a1a] text-white border-[#1a1a1a]" : "bg-white text-[#1a1a1a] border-gray-300 hover:border-[#f59e0b]"
              }`}
            >
              {labels[filterKey]}
            </button>
          ))}
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleItems.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white text-left"
            >
              <Image src={item.src} alt={item.alt} width={900} height={640} className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">{labels[item.filter]}</span>
            </button>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-2">{ui.teamTitle}</h2>
          <p className="text-gray-600 mb-5">{ui.teamSubtitle}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamImages.map((src, index) => (
              <div key={src} className="overflow-hidden rounded-xl border border-gray-200 bg-white">
                <Image
                  src={src}
                  alt={`wynajem autokar Krakow - zespol kierowcow ${index + 1}`}
                  width={900}
                  height={640}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-[#f59e0b] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ui.cta}</h2>
          <a href="tel:413453225" className="inline-block rounded-lg bg-[#f59e0b] px-8 py-4 text-lg font-black text-black shadow-lg transition-all duration-200 hover:bg-[#f6c15a] hover:shadow-xl md:px-12 md:py-5 md:text-xl">
            {ui.ctaButton}
          </a>
        </section>
      </div>

      {lightboxIndex !== null ? (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button type="button" onClick={closeLightbox} className="absolute top-4 right-4 text-white text-3xl leading-none" aria-label="close">
            x
          </button>
          <button type="button" onClick={showPrev} className="absolute left-4 text-white text-4xl" aria-label="previous">
            {'<'}
          </button>
          <div className="max-w-5xl w-full">
            <Image
              src={visibleItems[lightboxIndex].src}
              alt={visibleItems[lightboxIndex].alt}
              width={1400}
              height={1000}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </div>
          <button type="button" onClick={showNext} className="absolute right-4 text-white text-4xl" aria-label="next">
            {'>'}
          </button>
        </div>
      ) : null}
    </main>
  );
}
