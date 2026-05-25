'use client';

export function StickyCallButton() {
  return (
    <a
      href="tel:+48413453225"
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-[#EAF3DE]0 px-5 py-3 font-bold text-black shadow-2xl transition-all hover:scale-105 hover:bg-[#5DCAA5] md:hidden"
      aria-label="Zadzwon teraz"
    >
      <span className="text-xl">📞</span>
      <span>Zadzwoń</span>
    </a>
  );
}
