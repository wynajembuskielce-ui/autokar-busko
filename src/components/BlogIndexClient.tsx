'use client';

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { articles, getArticleTranslation, type Article } from "@/src/data/blog/articles";

type Category = Article["category"];
type Filter = "all" | Category;

const categoryOrder: Category[] = ["kultura", "destynacje", "organizacja", "grupy", "sezony", "poradnik", "B2B"];

const categoryEmoji: Record<Category, string> = {
  kultura: "🎭",
  destynacje: "🗺️",
  organizacja: "📋",
  grupy: "👥",
  sezony: "🌦️",
  poradnik: "📘",
  B2B: "🏢",
};

const categoryImage: Record<Category, string> = {
  kultura: "/images/referencje/referencje-muszkieter-krakow-1.jpg",
  destynacje: "/images/wycieczki/wycieczka-szkolna-autokar-krakow-1.jpg",
  organizacja: "/images/flota/flota-bus-1.jpg",
  grupy: "/images/transfer/transfer-autokar-krakow-1.jpg",
  sezony: "/images/narty/narty-bus-krakow-zakopane-1.jpg",
  poradnik: "/images/flota/flota-autokar-1.jpg",
  B2B: "/images/flota/flota-autokar-2.jpg",
};

const uiByLang: Record<string, Record<string, string>> = {
  pl: {
    title: "Blog kulturowy — miejsca, tradycje i podróże z sensem",
    subtitle: "Autokar to tylko środek. Najważniejsze są historia, ludzie i doświadczenie miejsca.",
    all: "Wszystkie",
    read: "Czytaj ->",
    reading: "min czytania",
    featured: "Polecany",
    empty: "Brak artykułów w tej kategorii.",
  },
  en: {
    title: "Cultural Blog — Places, Traditions and Meaningful Travel",
    subtitle: "The coach is only the way. Destination and lived experience are what matter.",
    all: "All",
    read: "Read ->",
    reading: "min read",
    featured: "Featured",
    empty: "No articles in this category.",
  },
  de: {
    title: "Kulturblog — Orte, Traditionen und Reisen mit Sinn",
    subtitle: "Der Bus ist nur der Weg. Entscheidend sind Ort, Menschen und Erlebnis.",
    all: "Alle",
    read: "Lesen ->",
    reading: "Min. Lesezeit",
    featured: "Empfohlen",
    empty: "Keine Artikel in dieser Kategorie.",
  },
  ru: {
    title: "Культурный блог — места, традиции и путешествия со смыслом",
    subtitle: "Автобус лишь средство. Главное — место, люди и впечатления.",
    all: "Все",
    read: "Читать ->",
    reading: "мин чтения",
    featured: "Рекомендуем",
    empty: "В этой категории пока нет статей.",
  },
  ar: {
    title: "مدونة ثقافية — أماكن وتقاليد وتجارب سفر",
    subtitle: "الحافلة وسيلة فقط، أما الجوهر فهو المكان والتجربة.",
    all: "الكل",
    read: "اقرأ ->",
    reading: "دقائق قراءة",
    featured: "مميز",
    empty: "لا توجد مقالات في هذه الفئة.",
  },
  es: {
    title: "Blog cultural — destinos, tradiciones y viajes con sentido",
    subtitle: "El autocar es solo el medio. Lo importante es el destino y la experiencia.",
    all: "Todos",
    read: "Leer ->",
    reading: "min de lectura",
    featured: "Destacado",
    empty: "No hay artículos en esta categoría.",
  },
  fr: {
    title: "Blog culturel — destinations, traditions et voyages humains",
    subtitle: "Le car n'est qu'un moyen. L'essentiel, c'est le lieu et l'expérience.",
    all: "Tous",
    read: "Lire ->",
    reading: "min de lecture",
    featured: "A la une",
    empty: "Aucun article dans cette categorie.",
  },
};

const categoryLabels: Record<string, Record<Category, string>> = {
  pl: { kultura: "kultura", destynacje: "destynacje", organizacja: "organizacja", grupy: "grupy", sezony: "sezony", poradnik: "poradnik", B2B: "B2B" },
  en: { kultura: "culture", destynacje: "destinations", organizacja: "planning", grupy: "groups", sezony: "seasons", poradnik: "guide", B2B: "B2B" },
  de: { kultura: "kultur", destynacje: "reiseziele", organizacja: "organisation", grupy: "gruppen", sezony: "saisons", poradnik: "ratgeber", B2B: "B2B" },
  ru: { kultura: "культура", destynacje: "направления", organizacja: "организация", grupy: "группы", sezony: "сезоны", poradnik: "гайд", B2B: "B2B" },
  ar: { kultura: "ثقافة", destynacje: "وجهات", organizacja: "تنظيم", grupy: "مجموعات", sezony: "مواسم", poradnik: "دليل", B2B: "B2B" },
  es: { kultura: "cultura", destynacje: "destinos", organizacja: "organizacion", grupy: "grupos", sezony: "temporadas", poradnik: "guia", B2B: "B2B" },
  fr: { kultura: "culture", destynacje: "destinations", organizacja: "organisation", grupy: "groupes", sezony: "saisons", poradnik: "guide", B2B: "B2B" },
};

export default function BlogIndexClient({ lang }: { lang: string }) {
  const today = new Date().toISOString().split("T")[0];
  const t = uiByLang[lang] ?? uiByLang.en;
  const catLabels = categoryLabels[lang] ?? categoryLabels.en;
  const isAr = lang === "ar";
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const publishedArticles = useMemo(() => {
    const visibleArticles = [...articles]
      .filter((article) => Boolean(article.translations[lang]))
      .filter((article) => article.publishDate <= today)
      .sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));

    if (activeFilter === "all") {
      return visibleArticles;
    }

    return visibleArticles.filter((article) => article.category === activeFilter);
  }, [activeFilter, lang, today]);

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-[#1a1a1a] mb-4">{t.title}</h1>
          <p className="text-gray-600 max-w-3xl text-lg">{t.subtitle}</p>
        </header>

        <section className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
              activeFilter === "all" ? "bg-[#1a1a1a] text-white border-[#1a1a1a]" : "bg-white text-[#1a1a1a] border-gray-200 hover:border-[#f59e0b]"
            }`}
          >
            {t.all}
          </button>
          {categoryOrder.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-bold border transition-all ${
                activeFilter === category
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                  : "bg-white text-[#1a1a1a] border-gray-200 hover:border-[#f59e0b]"
              }`}
            >
              {catLabels[category]}
            </button>
          ))}
        </section>

        {publishedArticles.length === 0 ? (
          <p className="text-gray-500 py-16 text-center">{t.empty}</p>
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {publishedArticles.map((article) => {
              const tr = getArticleTranslation(article, lang);
              const badge = catLabels[article.category];

              return (
                <Link
                  key={article.slug}
                  href={`/${lang}/blog/${article.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image || categoryImage[article.category]}
                      alt={`${tr.title} - ${badge}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-black/10" />
                    <span className="absolute bottom-3 right-3 text-2xl" aria-hidden="true">
                      {categoryEmoji[article.category]}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <span className="text-xs font-bold text-[#f59e0b] uppercase">{badge}</span>
                      {article.featured ? (
                        <span className="text-[10px] font-bold uppercase tracking-wide text-[#1a1a1a] bg-[#f59e0b]/25 px-2 py-1 rounded-full">
                          {t.featured}
                        </span>
                      ) : null}
                    </div>
                    <h2 className="font-black text-xl mt-1 mb-2 leading-tight text-[#1a1a1a]">{tr.title}</h2>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{tr.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">
                        {article.readingTime} {t.reading}
                      </span>
                      <span className="text-[#f59e0b] font-bold text-sm">{t.read}</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </section>
        )}
      </div>
    </main>
  );
}