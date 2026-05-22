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
      "rounded-lg bg-[#f59e0b] px-8 py-4 text-lg font-black text-black shadow-lg hover:bg-[#f6c15a] hover:shadow-xl md:px-12 md:py-5 md:text-xl",
    secondary:
      "rounded-lg border-2 border-[#f59e0b] px-6 py-3 text-base font-bold text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black",
    tertiary: "text-sm font-bold text-[#f59e0b] underline hover:text-[#f6c15a] md:text-base",
    phone:
      "rounded-lg bg-[#f59e0b] px-8 py-4 text-lg font-black text-black shadow-lg hover:bg-[#f6c15a] hover:shadow-xl md:px-12 md:py-5 md:text-xl",
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
