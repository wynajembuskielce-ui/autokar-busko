import Link from "next/link";
import { trustWallByLang } from "@/src/data/trust-wall";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

export default function TrustWall({ lang }: { lang: Language }) {
  const content = trustWallByLang[lang] ?? trustWallByLang.pl;
  const isRtl = lang === "ar";

  return (
    <section className="border-y border-[#e5e5e5] bg-[#f9f9f9] px-4 py-[60px] md:px-10" dir={isRtl ? "rtl" : "ltr"}>
      <div className="mx-auto max-w-[1200px]">
        <div className={`mx-auto mb-12 max-w-3xl ${isRtl ? "text-right" : "text-center"}`}>
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-amber-text">Trust Wall</p>
          <h2 className="mt-3 text-3xl font-black text-[#1a1a1a] md:text-4xl">{content.heading}</h2>
          <p className="mt-4 text-base leading-7 text-gray-600 md:text-lg">{content.subheading}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.stats.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border-2 border-[#639922] bg-white p-[30px] text-center shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
            >
              <div className="mb-5 text-[40px] leading-none text-amber-text" aria-hidden="true">
                {item.icon}
              </div>
              <p className="text-5xl font-black leading-none text-[#1a1a1a]">{item.title}</p>
              <p className="mt-3 text-xl font-bold tracking-[0.08em] text-gray-700">{item.subtitle}</p>
              <p className="mt-3 text-sm font-medium text-gray-500">{item.small}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.guarantees.map((item) => (
            <article
              key={item.title}
              className="rounded-xl bg-white px-6 py-7 text-center shadow-[0_6px_18px_rgba(15,23,42,0.05)] ring-1 ring-gray-200"
            >
              <div className={`mb-4 text-[32px] leading-none ${item.iconClassName}`} aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1a1a1a]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{item.text}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-[#1a1a1a] px-6 py-8 text-center text-white shadow-[0_14px_40px_rgba(15,23,42,0.16)] md:px-10">
          <div className="text-3xl tracking-[0.3em] text-[#639922]" aria-label="5 gwiazdek">
            {content.reviews.stars}
          </div>
          <p className="mt-4 text-3xl font-black md:text-4xl">{content.reviews.rating}</p>
          <p className="mt-2 text-base text-gray-300">{content.reviews.count}</p>
          <Link
            href={content.reviews.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center text-sm font-bold text-[#639922] underline transition-colors duration-200 hover:text-[#97C459] md:text-base"
          >
            {content.reviews.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
