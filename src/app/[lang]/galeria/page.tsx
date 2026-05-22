import type { Metadata } from "next";
import GalleryPageClient from "@/src/components/GalleryPageClient";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const metaTitleByLang: Record<Language, string> = {
  pl: "Flota autokarow do wynajecia Krakow - galeria 180 pojazdow",
  en: "Coach fleet for hire Krakow - gallery of 180 vehicles",
  de: "Busflotte zur Miete Krakow - Galerie von 180 Fahrzeugen",
  ru: "Avtopark v arendu Kelce - galereya 180 mashin",
  ar: "asatyl alhafilat lilijar fi kiltsah - maerad 180 markaba",
  es: "Flota de autocares en alquiler Krakow - galeria de 180 vehiculos",
  fr: "Flotte d'autocars a louer Krakow - galerie de 180 vehicules",
};

const metaDescriptionByLang: Record<Language, string> = {
  pl: "Galeria floty i realizacji: autokary, minibusy, wnetrza i zdjecia z tras grupowych w Polsce i Europie.",
  en: "Fleet and project gallery: coaches, minibuses, interiors and photos from group routes in Poland and Europe.",
  de: "Galerie von Flotte und Einsatzen: Reisebusse, Minibusse, Innenraume und Gruppenfahrten.",
  ru: "Galereya avtoparka i realizatsiy: avtobusy, minibusy, salony i marshruty gruppovykh poezdok.",
  ar: "maerad alasatyl walmaham: hafilat waminibusat wadakhil almurakabat warihlat jamaeia.",
  es: "Galeria de flota y servicios: autocares, minibuses, interiores y rutas de grupos.",
  fr: "Galerie de flotte et realisations: autocars, minibus, interieurs et trajets de groupe.",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);

  return {
    title: metaTitleByLang[l],
    description: metaDescriptionByLang[l],
  };
}

export default async function GaleriaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);

  return <GalleryPageClient lang={l} />;
}
