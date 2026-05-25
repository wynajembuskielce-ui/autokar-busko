import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOG_LANGUAGES, articles, getArticleBySlug, getArticleTranslation } from "@/src/data/blog/articles";

export const dynamic = "force-dynamic";

const CATEGORY_LABELS: Record<string, Record<string, string>> = {
  pl: { kultura: "kultura", destynacje: "destynacje", organizacja: "organizacja", grupy: "grupy", sezony: "sezony", poradnik: "poradnik", B2B: "B2B" },
  en: { kultura: "culture", destynacje: "destinations", organizacja: "planning", grupy: "groups", sezony: "seasons", poradnik: "guide", B2B: "B2B" },
  de: { kultura: "kultur", destynacje: "reiseziele", organizacja: "organisation", grupy: "gruppen", sezony: "saisons", poradnik: "ratgeber", B2B: "B2B" },
  ru: { kultura: "культура", destynacje: "направления", organizacja: "организация", grupy: "группы", sezony: "сезоны", poradnik: "гайд", B2B: "B2B" },
  ar: { kultura: "ثقافة", destynacje: "وجهات", organizacja: "تنظيم", grupy: "مجموعات", sezony: "مواسم", poradnik: "دليل", B2B: "B2B" },
  es: { kultura: "cultura", destynacje: "destinos", organizacja: "organizacion", grupy: "grupos", sezony: "temporadas", poradnik: "guia", B2B: "B2B" },
  fr: { kultura: "culture", destynacje: "destinations", organizacja: "organisation", grupy: "groupes", sezony: "saisons", poradnik: "guide", B2B: "B2B" },
};

const UI: Record<string, Record<string, string>> = {
  pl: {
    blog: "Blog",
    related: "Powiazane artykuly",
    ctaTitle: "Planujesz wyjazd?",
    ctaDescription: "Zadzwon lub napisz — odpowiemy blyskawicznie.",
    read: "Czytaj ->",
    reading: "min czytania",
  },
  en: {
    blog: "Blog",
    related: "Related articles",
    ctaTitle: "Planning a trip?",
    ctaDescription: "Call or message us and get a quick response.",
    read: "Read ->",
    reading: "min read",
  },
  de: {
    blog: "Blog",
    related: "Ahnliche Artikel",
    ctaTitle: "Planen Sie eine Reise?",
    ctaDescription: "Rufen Sie an oder schreiben Sie uns.",
    read: "Lesen ->",
    reading: "Min. Lesezeit",
  },
  ru: {
    blog: "Блог",
    related: "Похожие статьи",
    ctaTitle: "Планируете поездку?",
    ctaDescription: "Позвоните или напишите — ответим быстро.",
    read: "Читать ->",
    reading: "мин чтения",
  },
  ar: {
    blog: "المدونة",
    related: "مقالات ذات صلة",
    ctaTitle: "تخطط لرحلة؟",
    ctaDescription: "اتصل بنا أو اكتب لنا وسنرد بسرعة.",
    read: "اقرأ ->",
    reading: "دقائق قراءة",
  },
  es: {
    blog: "Blog",
    related: "Articulos relacionados",
    ctaTitle: "Planeas un viaje?",
    ctaDescription: "Llama o escribe: respondemos rapido.",
    read: "Leer ->",
    reading: "min de lectura",
  },
  fr: {
    blog: "Blog",
    related: "Articles lies",
    ctaTitle: "Vous planifiez un voyage ?",
    ctaDescription: "Appelez ou ecrivez, nous repondons vite.",
    read: "Lire ->",
    reading: "min de lecture",
  },
};

function formatDate(dateIso: string, lang: string) {
  const locale =
    lang === "pl"
      ? "pl-PL"
      : lang === "de"
      ? "de-DE"
      : lang === "ru"
      ? "ru-RU"
      : lang === "ar"
      ? "ar-SA"
      : lang === "es"
      ? "es-ES"
      : lang === "fr"
      ? "fr-FR"
      : "en-US";

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(dateIso));
}

export function generateStaticParams() {
  const today = new Date().toISOString().split("T")[0];

  return BLOG_LANGUAGES.flatMap((lang) =>
    articles
      .filter((article) => Boolean(article.translations[lang]) && article.publishDate <= today)
      .map((article) => ({ lang, slug: article.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const article = getArticleBySlug(slug);
  const today = new Date().toISOString().split("T")[0];
  if (!article || !article.translations[lang] || article.publishDate > today) return {};

  const tr = getArticleTranslation(article, lang);
  return {
    title: tr.metaTitle,
    description: tr.metaDescription,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  const article = getArticleBySlug(slug);
  const today = new Date().toISOString().split("T")[0];
  if (!article || !article.translations[lang] || article.publishDate > today) notFound();

  const tr = getArticleTranslation(article, lang);
  const ui = UI[lang] ?? UI.en;
  const categories = CATEGORY_LABELS[lang] ?? CATEGORY_LABELS.en;
  const isAr = lang === "ar";

  const related = articles
    .filter((item) => item.slug !== article.slug && item.category === article.category && item.translations[lang] && item.publishDate <= today)
    .slice(0, 3);

  return (
    <main dir={isAr ? "rtl" : "ltr"} className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-3xl mx-auto">
        <nav className="text-sm text-gray-500 mb-8 flex flex-wrap items-center gap-2">
          <Link href={`/${lang}/blog`} className="hover:text-[#1a1a1a] transition-colors">
            {ui.blog}
          </Link>
          <span>/</span>
          <span className="text-[#639922] uppercase font-semibold">{categories[article.category]}</span>
          <span>/</span>
          <span className="text-[#1a1a1a] truncate">{tr.title}</span>
        </nav>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase text-[#639922] tracking-wide">{categories[article.category]}</span>
            <span className="text-xs text-gray-400">{article.readingTime} {ui.reading}</span>
            <span className="text-xs text-gray-400">{formatDate(article.publishedAt, lang)}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#1a1a1a] leading-tight">{tr.title}</h1>
          <p className="text-gray-600 mt-4 text-lg">{tr.excerpt}</p>
        </header>

        <article
          className="prose prose-lg max-w-none prose-headings:font-black prose-headings:text-[#1a1a1a] prose-a:text-[#639922] prose-a:no-underline prose-strong:text-[#1a1a1a]"
          dangerouslySetInnerHTML={{ __html: tr.content }}
        />

        <hr className="my-12 border-gray-200" />

        <div className="my-12 bg-[#1a1a1a] text-white rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-black mb-2">{ui.ctaTitle}</h3>
          <p className="text-gray-300 mb-6">{ui.ctaDescription}</p>
          <a href="tel:413453225" className="inline-block rounded-lg bg-[#1D9E75] px-8 py-4 text-lg font-black text-black shadow-lg transition-all duration-200 hover:bg-[#5DCAA5] hover:shadow-xl md:px-12 md:py-5 md:text-xl">
            📞 +48 41 345 32 25 lub 
          </a>
        </div>

        <section className="pt-4 pb-10">
          <h2 className="text-2xl font-black text-[#1a1a1a] mb-6">{ui.related}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {related.map((item) => {
              const relatedTr = getArticleTranslation(item, lang);
              return (
                <Link
                  key={item.slug}
                  href={`/${lang}/blog/${item.slug}`}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:border-[#639922] transition-all"
                >
                  <span className="text-xs font-bold uppercase text-[#639922]">{categories[item.category]}</span>
                  <h3 className="font-black text-base text-[#1a1a1a] mt-2 mb-2 leading-snug">{relatedTr.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-3">{relatedTr.excerpt}</p>
                  <span className="text-sm text-[#639922] font-bold mt-4 inline-block">{ui.read}</span>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
