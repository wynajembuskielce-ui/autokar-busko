interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  ctaText = "Zadzwoń teraz – +48 41 345 32 25 lub ",
  ctaHref = "tel:413453225",
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section
      className="relative bg-[#1a1a1a] text-white py-24 px-4 overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(26,26,26,0.75), rgba(26,26,26,0.85)), url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-black leading-tight mb-6">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{subtitle}</p>
        )}
        <a
          href={ctaHref}
          className="inline-block rounded-lg bg-[#f59e0b] px-8 py-4 text-lg font-black text-black shadow-lg transition-all duration-200 hover:bg-[#f6c15a] hover:shadow-xl md:px-12 md:py-5 md:text-xl"
        >
          {ctaText}
        </a>
      </div>
    </section>
  );
}

