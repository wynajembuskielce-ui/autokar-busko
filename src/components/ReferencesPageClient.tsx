"use client";

import Image from "next/image";
import { useState } from "react";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

const uiByLang: Record<Language, {
  title: string;
  scans: string;
  clients: string;
  press: string;
  reviews: string;
  certs: string;
  cta: string;
}> = {
  pl: {
    title: "Referencje - zaufalo nam ponad 100 firm i instytucji",
    scans: "Skany referencji",
    clients: "Lista klientow",
    press: "Linki prasowe",
    reviews: "Opinie Google",
    certs: "Certyfikaty i licencje",
    cta: "Dolacz do grona zadowolonych klientow: 41 345 32 25",
  },
  en: {
    title: "References - trusted by over 100 companies and institutions",
    scans: "Reference scans",
    clients: "Client list",
    press: "Press links",
    reviews: "Google reviews",
    certs: "Certificates and licenses",
    cta: "Join our satisfied clients: +48 41 345 32 25",
  },
  de: {
    title: "Referenzen - uber 100 Firmen und Institutionen vertrauen uns",
    scans: "Referenzscans",
    clients: "Kundenliste",
    press: "Presse-Links",
    reviews: "Google-Bewertungen",
    certs: "Zertifikate und Lizenzen",
    cta: "Werden Sie Teil zufriedener Kunden: +48 41 345 32 25",
  },
  ru: {
    title: "Otzvy - nam doveryayut bolee 100 kompaniy i uchrezhdeniy",
    scans: "Skany rekomendatsiy",
    clients: "Spisok klientov",
    press: "Ssilki v presse",
    reviews: "Otzyvy Google",
    certs: "Sertifikaty i litsenzii",
    cta: "Prisoedinyaytes k dovolnym klientam: +48 41 345 32 25",
  },
  ar: {
    title: "almarajie - wathiq bina aktar min 100 sharika wamuassasa",
    scans: "nuskha almarajie",
    clients: "qayimat alzabaein",
    press: "rawabit sahafiya",
    reviews: "araa Google",
    certs: "shahadat warukhas",
    cta: "anضم ila qaeimat alabaraa alradyin: +48 41 345 32 25",
  },
  es: {
    title: "Referencias - confian en nosotros mas de 100 empresas e instituciones",
    scans: "Escaneos de referencias",
    clients: "Lista de clientes",
    press: "Enlaces de prensa",
    reviews: "Opiniones de Google",
    certs: "Certificados y licencias",
    cta: "Unete a nuestros clientes satisfechos: +48 41 345 32 25",
  },
  fr: {
    title: "References - plus de 100 entreprises et institutions nous font confiance",
    scans: "Scans de references",
    clients: "Liste des clients",
    press: "Liens presse",
    reviews: "Avis Google",
    certs: "Certificats et licences",
    cta: "Rejoignez nos clients satisfaits: +48 41 345 32 25",
  },
};

const referenceImages = Array.from({ length: 36 }, (_, index) => {
  const no = index + 1;
  return {
    src: `/images/referencje/referencje-muszkieter-krakow-${no}.jpg`,
    alt: `wynajem autokar Krakow - referencja ${no}`,
  };
});

const clients = [
  "Olimpiady Specjalne Polska",
  "Uniwersytet Medyczny Lublin",
  "Gmina Potworow",
  "Gmina Iwaniska",
  "Gmina Kazimierza Wielka",
  "Gmina Wodzislaw",
];

const pressLinks = [
  { label: "Echo Dnia", href: "https://echodnia.eu/swietokrzyskie/muszkieter-wznawia-kursy-pierwsze-polaczenia-juz-w-majowke-zobacz-rozklad-jazdy/ar/c1-14945916" },
  { label: "Echo Dnia", href: "https://echodnia.eu/swietokrzyskie/dramat-firm-transportowych-ze-swietokrzyskiego-brakuje-pieniedzy-na-pensje-zus-kredyty-leasingi/ar/c1-14933884" },
  { label: "Echo Dnia", href: "https://echodnia.eu/swietokrzyskie/tag/muszkieter-krakow" },
  { label: "Gazeta Wyborcza", href: "https://krakow.wyborcza.pl/krakow/7,47262,26957351,komercyjna-konkurencja-chce-wejsc-do-mpk-krakow-przez-odkupienie.html" },
  { label: "wKrakowie.info", href: "https://wkielcach.info/aktualnosci/wspolwlasciciel-firmy-muszkieter-chce-kupic-udzialy-w-mpk/" },
  { label: "Radio Krakow", href: "https://radiokrakow.pl/866558/post-3268/" },
  { label: "Radio Krakow", href: "https://radiokrakow.pl/771105/post-40317/" },
];

const reviewPlaceholders = [
  "Profesjonalna obsluga i punktualnosc na kazdym etapie wspolpracy. Polecamy.",
  "Bardzo dobry kontakt z biurem i kierowca, czysty pojazd, bezpieczna podroz.",
  "Sprawna organizacja transportu duzej grupy, wszystko zgodnie z planem.",
];

const certificates = [
  "Licencja ITD transport krajowy i miedzynarodowy",
  "CASCO, OC, NNW na wszystkie pojazdy",
  "24 lata doswiadczenia - od 1997 roku",
];

export default function ReferencesPageClient({ lang }: { lang: Language }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const ui = uiByLang[lang] ?? uiByLang.pl;
  const isAr = lang === "ar";

  const showPrev = () => setLightboxIndex((prev) => (prev === null ? prev : (prev - 1 + referenceImages.length) % referenceImages.length));
  const showNext = () => setLightboxIndex((prev) => (prev === null ? prev : (prev + 1) % referenceImages.length));

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-[#1a1a1a]">{ui.title}</h1>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ui.scans}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {referenceImages.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="overflow-hidden rounded-xl border border-gray-200 bg-white"
              >
                <Image src={item.src} alt={item.alt} width={1200} height={860} className="w-full h-auto object-cover" />
              </button>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ui.clients}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {clients.map((client) => (
              <li key={client} className="bg-white border border-gray-200 rounded-lg px-4 py-3 font-semibold text-[#1a1a1a]">
                {client}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ui.press}</h2>
          <ul className="space-y-3">
            {pressLinks.map((link, index) => (
              <li key={`${link.href}-${index}`}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#1a1a1a] font-semibold hover:text-[#f59e0b] transition-colors underline">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ui.reviews}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviewPlaceholders.map((review, index) => (
              <blockquote key={index} className="bg-white border border-gray-200 rounded-xl p-5 text-gray-700 italic">
                &quot;{review}&quot;
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ui.certs}</h2>
          <ul className="space-y-3">
            {certificates.map((item) => (
              <li key={item} className="bg-white border border-gray-200 rounded-lg px-4 py-3 font-semibold text-[#1a1a1a]">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="bg-[#f59e0b] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ui.cta}</h2>
          <a href="tel:413453225" className="inline-block rounded-lg bg-[#f59e0b] px-8 py-4 text-lg font-black text-black shadow-lg transition-all duration-200 hover:bg-[#f6c15a] hover:shadow-xl md:px-12 md:py-5 md:text-xl">
            +48 41 345 32 25
          </a>
        </section>
      </div>

      {lightboxIndex !== null ? (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4">
          <button type="button" onClick={() => setLightboxIndex(null)} className="absolute top-4 right-4 text-white text-3xl leading-none" aria-label="close">
            x
          </button>
          <button type="button" onClick={showPrev} className="absolute left-4 text-white text-4xl" aria-label="previous">
            {'<'}
          </button>
          <div className="max-w-5xl w-full">
            <Image
              src={referenceImages[lightboxIndex].src}
              alt={referenceImages[lightboxIndex].alt}
              width={1600}
              height={1200}
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
