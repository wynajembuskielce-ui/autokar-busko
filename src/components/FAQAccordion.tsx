"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  heading?: string;
}

export default function FAQAccordion({ items, heading = "Często zadawane pytania" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-center text-[#1a1a1a] mb-10">{heading}</h2>
        <div className="border-t border-[#e5e5e5]">
          {items.map((item, i) => (
            <div key={i} className="border-b border-[#e5e5e5]">
              <button
                className="flex w-full items-center justify-between py-4 text-left text-[#1a1a1a] transition-all duration-300 hover:text-amber-text"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="pr-4 text-base font-bold">{item.question}</span>
                <span className="text-xl font-bold text-amber-text">{openIndex === i ? "−" : "+"}</span>
              </button>
              <div className={`grid transition-all duration-300 ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="pb-4 pr-8 text-sm leading-[1.6] text-gray-500">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
