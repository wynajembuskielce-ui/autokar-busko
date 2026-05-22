import type { Metadata } from "next";
import ReferencesPageClient from "@/src/components/ReferencesPageClient";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const metaTitleByLang: Record<Language, string> = {
  pl: "Referencje - wynajem autokarow Krakow | 100+ firm",
  en: "References - coach rental Krakow | 100+ companies",
  de: "Referenzen - Busvermietung Krakow | 100+ Firmen",
  ru: "Otzvy - arenda avtobusov Kelce | 100+ kompaniy",
  ar: "almarajie - taajir alhafilat kiltsah | 100+ sharika",
  es: "Referencias - alquiler de autocares Krakow | 100+ empresas",
  fr: "References - location d'autocars Krakow | 100+ entreprises",
};

const metaDescriptionByLang: Record<Language, string> = {
  pl: "Zobacz skany referencji, liste klientow, publikacje prasowe oraz potwierdzenia licencji i polis.",
  en: "See reference scans, client list, press links and transport certifications.",
  de: "Sehen Sie Referenzscans, Kundenliste, Pressematerial und Zertifikate.",
  ru: "Smotrite skany rekomendatsiy, klientov, pressu i podtverzhdeniya litsenziy.",
  ar: "itlae eala suwar almarajie waqayimat alzabaein warawabit sahafiya washahadat alttarkhis.",
  es: "Consulta escaneos de referencias, lista de clientes, prensa y certificados.",
  fr: "Consultez les scans de references, la liste des clients, la presse et les certificats.",
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);

  return {
    title: metaTitleByLang[l],
    description: metaDescriptionByLang[l],
  };
}

export default async function ReferencjePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);

  return <ReferencesPageClient lang={l} />;
}
