import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "phone";
  className?: string;
}

export default function CTAButton({ href, children, variant = "primary", className = "" }: CTAButtonProps) {
  const base = "inline-flex items-center justify-center text-center transition-all duration-200";
  const variants = {
    primary:
      "rounded-lg bg-[#1D9E75] px-8 py-4 text-lg font-black text-black shadow-lg hover:bg-[#5DCAA5] hover:shadow-xl md:px-12 md:py-5 md:text-xl",
    secondary:
      "rounded-lg border-2 border-[#639922] px-6 py-3 text-base font-bold text-[#639922] hover:bg-[#5DCAA5] hover:text-black",
    tertiary: "text-sm font-bold text-[#639922] underline hover:text-[#97C459] md:text-base",
    phone:
      "rounded-lg bg-[#1D9E75] px-8 py-4 text-lg font-black text-black shadow-lg hover:bg-[#5DCAA5] hover:shadow-xl md:px-12 md:py-5 md:text-xl",
  };

  const isExternal = href.startsWith("tel:") || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
