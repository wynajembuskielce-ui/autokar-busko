import Link from "next/link";
import { useEffect } from "react";

type Lang = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

type Labels = {
  services: string;
  fleet: string;
  gallery: string;
  contact: string;
  phone: string;
  close: string;
};

type Props = {
  lang: Lang;
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
  labels: Labels;
  services: Array<{ href: string; label: string }>;
  languages: Array<{ code: Lang; label: string }>;
};

export default function MobileMenu({ lang, isOpen, onClose, currentPath, labels, services, languages }: Props) {
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="md:hidden fixed inset-0 z-[90]" role="dialog" aria-label="Mobile navigation" onClick={onClose}>
      <div className="absolute inset-0 bg-black/55" />
      <nav
        className="relative mt-[73px] border-t border-gray-800 bg-[#1a1a1a] px-4 py-4"
        role="navigation"
        aria-label="Mobile primary navigation"
        onClick={(event) => event.stopPropagation()}
      >
        <ul className="space-y-2 text-sm font-semibold text-white">
          <li>
            <Link
              href={`/${lang}/cennik`}
              onClick={onClose}
              className="text-xs uppercase tracking-wide text-gray-400 mb-2 block hover:text-[#f59e0b] transition-colors duration-200"
            >
              {labels.services} ›
            </Link>
            <ul className="space-y-2 pl-2">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block rounded-md px-3 py-2 transition-all duration-200 ${
                      currentPath.startsWith(item.href) ? "text-[#f59e0b] bg-black/20" : "hover:text-[#f59e0b] hover:bg-black/20"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link
              href={`/${lang}/flota`}
              onClick={onClose}
              className={`block rounded-md px-3 py-2 transition-all duration-200 ${
                currentPath.startsWith(`/${lang}/flota`) ? "text-[#f59e0b] bg-black/20" : "hover:text-[#f59e0b] hover:bg-black/20"
              }`}
            >
              {labels.fleet}
            </Link>
          </li>
          <li>
            <Link
              href={`/${lang}/galeria`}
              onClick={onClose}
              className={`block rounded-md px-3 py-2 transition-all duration-200 ${
                currentPath.startsWith(`/${lang}/galeria`) ? "text-[#f59e0b] bg-black/20" : "hover:text-[#f59e0b] hover:bg-black/20"
              }`}
            >
              {labels.gallery}
            </Link>
          </li>
          <li>
            <Link
              href={`/${lang}/kontakt`}
              onClick={onClose}
              className={`block rounded-md px-3 py-2 transition-all duration-200 ${
                currentPath.startsWith(`/${lang}/kontakt`) ? "text-[#f59e0b] bg-black/20" : "hover:text-[#f59e0b] hover:bg-black/20"
              }`}
            >
              {labels.contact}
            </Link>
          </li>
          <li>
            <a
              href="tel:413453225"
              className="mt-2 block rounded-lg bg-[#f59e0b] px-4 py-3 text-center font-black text-black shadow-lg transition-all duration-200 hover:bg-[#f6c15a] hover:shadow-xl whitespace-nowrap"
            >
              {labels.phone}
            </a>
          </li>
        </ul>

        <div className="mt-4 border-t border-gray-800 pt-4">
          <div className="grid grid-cols-4 gap-2">
            {languages.map((item) => (
              <Link
                key={item.code}
                href={`/${item.code}`}
                onClick={onClose}
                className={`rounded-md px-2 py-1 text-xs text-center font-semibold whitespace-nowrap transition-colors duration-200 ${
                  lang === item.code ? "bg-[#f59e0b] text-[#1a1a1a]" : "bg-black/20 text-white hover:bg-black/40"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label={labels.close}
          className="mt-4 w-full rounded-md border border-gray-700 px-3 py-2 text-sm font-semibold text-gray-300 hover:text-white hover:border-gray-500 transition-all duration-200"
        >
          {labels.close}
        </button>
      </nav>
    </div>
  );
}
