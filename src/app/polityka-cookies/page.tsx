import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka cookies | Wynajem-autobus.pl",
  description: "Zasady wykorzystywania plików cookies na www.autokar-busko.pl.",
};

const updatedAt = "27.04.2026";

export default function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 text-[#1a1a1a]">
      <h1 className="text-3xl font-black">Polityka cookies</h1>
      <p className="mt-2 text-sm text-gray-600">Data aktualizacji: {updatedAt}</p>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-bold">1. Czym są pliki cookies</h2>
        <p>
          Cookies to małe pliki tekstowe zapisywane w urządzeniu użytkownika podczas korzystania ze strony. Służą do prawidłowego
          działania serwisu, analityki i personalizacji funkcji.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-bold">2. Kategorie cookies</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Niezbędne: wymagane do działania strony.</li>
          <li>Funkcjonalne: np. obsługa czatu i preferencji interfejsu.</li>
          <li>Analityczne: pomiar ruchu i skuteczności treści (np. GA4).</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-bold">3. Zarządzanie zgodami</h2>
        <p>
          Zgodami zarządzasz przez baner cookies CookieYes. Do czasu udzielenia zgody nie ładujemy skryptów analitycznych i
          funkcjonalnych, które tego wymagają.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-bold">4. Narzędzia zewnętrzne</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Google Analytics 4 (kategoria: analityczne, po zgodzie).</li>
          <li>Tawk.to chat (kategoria: funkcjonalne, po zgodzie).</li>
          <li>CookieYes (zarządzanie zgodami).</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-bold">5. Jak wycofać zgodę</h2>
        <p>
          W każdej chwili możesz zmienić ustawienia cookies z poziomu banera i panelu preferencji. Zmiana działa na przyszłe sesje i
          nowe żądania skryptów.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-bold">6. Kontakt</h2>
        <p>W sprawach dotyczących cookies napisz: biuro@muszkieter.pl.</p>
      </section>
    </main>
  );
}
