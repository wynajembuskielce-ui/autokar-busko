"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

type Slide = {
  eyebrow: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  overlayClassName: string;
};

const slideImages = {
  wedding: "/images/wesele.jpg",
  school: "/images/wycieczka-szkolna.jpg",
  corporate: "/images/impreza-firmowa.jpg",
  airport: "/images/lotnisko.jpg",
} as const;

const slidesByLang: Record<Language, Slide[]> = {
  pl: [
    {
      eyebrow: "Wesele i elegancja",
      title: "Twoje wesele. Nasz autokar. Początek idealnego dnia.",
      description: "Transport dla 20-50 gości z wdziękiem i klasą.",
      cta: "ZAREZERWUJ AUTOKAR NA WESELE",
      href: "/pl/wesele",
      image: slideImages.wedding,
      overlayClassName: "bg-black/40",
    },
    {
      eyebrow: "Wycieczka szkolna",
      title: "Wycieczka dzieci. Bezpieczny kierowca. Niezapomniane wspomnienia.",
      description: "Transport szkolny z 23-letnim doświadczeniem.",
      cta: "REZERWUJ WYCIECZKĘ SZKOLNĄ",
      href: "/pl/wycieczki-szkolne",
      image: slideImages.school,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Impreza firmowa",
      title: "Impreza firmowa. Transport. Zespół bardziej zbliżony.",
      description: "Integracja, konferencja, wypad - my się zajmujemy dojazdem.",
      cta: "ZAPLANUJ IMPREZĘ FIRMOWĄ",
      href: "/pl/impreza-firmowa",
      image: slideImages.corporate,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Transfer i logistyka",
      title: "Transfer na lotnisko. Zawsze na czas. Zawsze profesjonalnie.",
      description: "Dotrzesz tam szybko, bezpiecznie, bez stresu.",
      cta: "REZERWUJ TRANSFER NA LOTNISKO",
      href: "/pl/lotnisko",
      image: slideImages.airport,
      overlayClassName: "bg-black/35",
    },
  ],
  en: [
    {
      eyebrow: "Wedding transport",
      title: "Your wedding. Our coach. The start of a perfect day.",
      description: "Transport for 20-50 guests with style and class.",
      cta: "BOOK A WEDDING COACH",
      href: "/en/wesele",
      image: slideImages.wedding,
      overlayClassName: "bg-black/40",
    },
    {
      eyebrow: "School trip",
      title: "Children's trip. Safe driver. Unforgettable memories.",
      description: "School transport backed by 24 years of experience.",
      cta: "BOOK A SCHOOL TRIP",
      href: "/en/wycieczki-szkolne",
      image: slideImages.school,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Corporate event",
      title: "Corporate event. Transport. A team that feels closer.",
      description: "Integration trip, conference or outing - we handle the ride.",
      cta: "PLAN A CORPORATE EVENT",
      href: "/en/impreza-firmowa",
      image: slideImages.corporate,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Transfers and logistics",
      title: "Airport transfer. Always on time. Always professional.",
      description: "Get there quickly, safely and without stress.",
      cta: "BOOK AN AIRPORT TRANSFER",
      href: "/en/lotnisko",
      image: slideImages.airport,
      overlayClassName: "bg-black/35",
    },
  ],
  de: [
    {
      eyebrow: "Hochzeit und Eleganz",
      title: "Ihre Hochzeit. Unser Reisebus. Der Beginn eines perfekten Tages.",
      description: "Transport für 20-50 Gäste mit Stil und Klasse.",
      cta: "HOCHZEITSBUS RESERVIEREN",
      href: "/de/wesele",
      image: slideImages.wedding,
      overlayClassName: "bg-black/40",
    },
    {
      eyebrow: "Schulausflug",
      title: "Kinderreise. Sicherer Fahrer. Unvergessliche Erinnerungen.",
      description: "Schultransport mit 24 Jahren Erfahrung.",
      cta: "SCHULAUSFLUG BUCHEN",
      href: "/de/wycieczki-szkolne",
      image: slideImages.school,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Firmenevent",
      title: "Firmenevent. Transport. Ein Team, das näher zusammenrückt.",
      description: "Integration, Konferenz oder Ausflug - wir übernehmen die Anreise.",
      cta: "FIRMENEVENT PLANEN",
      href: "/de/impreza-firmowa",
      image: slideImages.corporate,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Transfer und Logistik",
      title: "Flughafentransfer. Immer pünktlich. Immer professionell.",
      description: "Schnell, sicher und ohne Stress ans Ziel.",
      cta: "FLUGHAFENTRANSFER BUCHEN",
      href: "/de/lotnisko",
      image: slideImages.airport,
      overlayClassName: "bg-black/35",
    },
  ],
  ru: [
    {
      eyebrow: "Свадьба и элегантность",
      title: "Ваша свадьба. Наш автобус. Начало идеального дня.",
      description: "Транспорт для 20-50 гостей со вкусом и классом.",
      cta: "ЗАБРОНИРОВАТЬ АВТОБУС НА СВАДЬБУ",
      href: "/ru/wesele",
      image: slideImages.wedding,
      overlayClassName: "bg-black/40",
    },
    {
      eyebrow: "Школьная поездка",
      title: "Поездка детей. Надежный водитель. Незабываемые воспоминания.",
      description: "Школьный транспорт с 23-летним опытом.",
      cta: "ЗАБРОНИРОВАТЬ ШКОЛЬНУЮ ПОЕЗДКУ",
      href: "/ru/wycieczki-szkolne",
      image: slideImages.school,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Корпоративное событие",
      title: "Корпоратив. Транспорт. Команда становится ближе.",
      description: "Интеграция, конференция, выезд - дорогу берем на себя.",
      cta: "СПЛАНИРОВАТЬ КОРПОРАТИВ",
      href: "/ru/impreza-firmowa",
      image: slideImages.corporate,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Трансфер и логистика",
      title: "Трансфер в аэропорт. Всегда вовремя. Всегда профессионально.",
      description: "Вы доберетесь быстро, безопасно и без стресса.",
      cta: "ЗАБРОНИРОВАТЬ ТРАНСФЕР В АЭРОПОРТ",
      href: "/ru/lotnisko",
      image: slideImages.airport,
      overlayClassName: "bg-black/35",
    },
  ],
  ar: [
    {
      eyebrow: "زفاف وأناقة",
      title: "زفافك. حافلتنا. بداية يوم مثالي.",
      description: "نقل من 20 إلى 50 ضيفًا بذوق وأناقة.",
      cta: "احجز حافلة للزفاف",
      href: "/ar/wesele",
      image: slideImages.wedding,
      overlayClassName: "bg-black/40",
    },
    {
      eyebrow: "رحلة مدرسية",
      title: "رحلة الأطفال. سائق آمن. ذكريات لا تنسى.",
      description: "نقل مدرسي بخبرة تمتد 23 عامًا.",
      cta: "احجز رحلة مدرسية",
      href: "/ar/wycieczki-szkolne",
      image: slideImages.school,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "فعالية شركة",
      title: "فعالية شركة. نقل. فريق أكثر تقاربًا.",
      description: "الاندماج أو المؤتمر أو الرحلة - نحن نهتم بالوصول.",
      cta: "خطط لفعالية شركتك",
      href: "/ar/impreza-firmowa",
      image: slideImages.corporate,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "نقل ولوجستيات",
      title: "نقل إلى المطار. دائمًا في الوقت. دائمًا باحتراف.",
      description: "ستصل بسرعة وأمان ومن دون توتر.",
      cta: "احجز نقل المطار",
      href: "/ar/lotnisko",
      image: slideImages.airport,
      overlayClassName: "bg-black/35",
    },
  ],
  es: [
    {
      eyebrow: "Boda y elegancia",
      title: "Tu boda. Nuestro autocar. El comienzo de un día perfecto.",
      description: "Transporte para 20-50 invitados con estilo y clase.",
      cta: "RESERVAR AUTOCAR PARA BODA",
      href: "/es/wesele",
      image: slideImages.wedding,
      overlayClassName: "bg-black/40",
    },
    {
      eyebrow: "Excursión escolar",
      title: "Excursión de niños. Conductor seguro. Recuerdos inolvidables.",
      description: "Transporte escolar con 24 años de experiencia.",
      cta: "RESERVAR EXCURSION ESCOLAR",
      href: "/es/wycieczki-szkolne",
      image: slideImages.school,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Evento corporativo",
      title: "Evento de empresa. Transporte. Un equipo más unido.",
      description: "Integración, conferencia o salida - nosotros nos ocupamos del trayecto.",
      cta: "PLANEAR EVENTO CORPORATIVO",
      href: "/es/impreza-firmowa",
      image: slideImages.corporate,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Transfer y logística",
      title: "Transfer al aeropuerto. Siempre a tiempo. Siempre profesional.",
      description: "Llegarás rápido, seguro y sin estrés.",
      cta: "RESERVAR TRANSFER AL AEROPUERTO",
      href: "/es/lotnisko",
      image: slideImages.airport,
      overlayClassName: "bg-black/35",
    },
  ],
  fr: [
    {
      eyebrow: "Mariage et élégance",
      title: "Votre mariage. Notre autocar. Le début d'une journée parfaite.",
      description: "Transport pour 20 à 50 invités avec élégance et classe.",
      cta: "RÉSERVER UN AUTOCAR DE MARIAGE",
      href: "/fr/wesele",
      image: slideImages.wedding,
      overlayClassName: "bg-black/40",
    },
    {
      eyebrow: "Sortie scolaire",
      title: "Voyage d'enfants. Chauffeur fiable. Souvenirs inoubliables.",
      description: "Transport scolaire avec 24 ans d'expérience.",
      cta: "RÉSERVER UNE SORTIE SCOLAIRE",
      href: "/fr/wycieczki-szkolne",
      image: slideImages.school,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Événement d'entreprise",
      title: "Événement d'entreprise. Transport. Une équipe plus soudée.",
      description: "Intégration, conférence, sortie - nous gérons le trajet.",
      cta: "PLANIFIER UN ÉVÉNEMENT D'ENTREPRISE",
      href: "/fr/impreza-firmowa",
      image: slideImages.corporate,
      overlayClassName: "bg-black/35",
    },
    {
      eyebrow: "Transfert et logistique",
      title: "Transfert aéroport. Toujours à l'heure. Toujours professionnel.",
      description: "Vous arriverez vite, en sécurité et sans stress.",
      cta: "RÉSERVER UN TRANSFERT AÉROPORT",
      href: "/fr/lotnisko",
      image: slideImages.airport,
      overlayClassName: "bg-black/35",
    },
  ],
};

const AUTOPLAY_MS = 5000;
const SWIPE_THRESHOLD = 50;

function getSlides(lang: Language): Slide[] {
  return slidesByLang[lang].length ? slidesByLang[lang] : slidesByLang.en;
}

export default function HeroSlider({ lang }: { lang: Language }) {
  const slides = useMemo(() => getSlides(lang), [lang]);
  const isRtl = lang === "ar";
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        if (isRtl) {
          setActiveIndex((current) => (current + 1) % slides.length);
        } else {
          setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
        }
      }
      if (event.key === "ArrowRight") {
        if (isRtl) {
          setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
        } else {
          setActiveIndex((current) => (current + 1) % slides.length);
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isRtl, slides.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    setTouchEndX(null);
    setTouchStartX(event.targetTouches[0]?.clientX ?? null);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    setTouchEndX(event.targetTouches[0]?.clientX ?? null);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) {
      return;
    }

    const distance = touchStartX - touchEndX;

    if (distance > SWIPE_THRESHOLD) {
      if (isRtl) {
        goToPrevious();
      } else {
        goToNext();
      }
    }

    if (distance < -SWIPE_THRESHOLD) {
      if (isRtl) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  return (
    <section
      className="relative isolate h-[400px] md:h-[600px] overflow-hidden bg-[#1a1a1a]"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Hero slider"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={slide.title}
            className={`absolute inset-0 hero-slide transition-opacity duration-[1200ms] ease-in-out ${
              isActive ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.image}
              alt={`${slide.title} - wynajem autokarow Krakow, Muszkieter`}
              fill
              className="absolute inset-0 scale-105 object-cover"
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            <div className={`absolute inset-0 ${slide.overlayClassName}`} />
            <div
              className={`absolute inset-0 ${
                isRtl
                  ? "bg-gradient-to-l from-black/55 via-black/25 to-transparent"
                  : "bg-gradient-to-r from-black/55 via-black/25 to-transparent"
              }`}
            />

            <div className="relative z-10 flex h-full items-center px-5 md:px-10 lg:px-16">
              <div className="mx-auto w-full max-w-7xl">
                <div className={`max-w-3xl text-white ${isRtl ? "ml-auto text-right" : "text-left"}`}>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-[#f6c15a] md:text-sm">
                    {slide.eyebrow}
                  </p>
                  <h1 className="max-w-4xl text-[32px] font-black leading-[1.08] text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.55)] md:text-[48px]">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.45)] md:text-2xl">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.href}
                    className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#f59e0b] px-8 py-4 text-center text-lg font-black text-black shadow-lg transition-all duration-200 hover:bg-[#f6c15a] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1a1a] md:w-auto md:px-12 md:py-5 md:text-xl"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        onClick={goToPrevious}
        className={`absolute top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-3xl text-white transition-colors duration-300 hover:text-[#f59e0b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] ${
          isRtl ? "right-4 md:right-6" : "left-4 md:left-6"
        }`}
        aria-label="Previous slide"
      >
        <span aria-hidden="true">{isRtl ? "›" : "‹"}</span>
      </button>

      <button
        type="button"
        onClick={goToNext}
        className={`absolute top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/25 text-3xl text-white transition-colors duration-300 hover:text-[#f59e0b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f59e0b] ${
          isRtl ? "left-4 md:left-6" : "right-4 md:right-6"
        }`}
        aria-label="Next slide"
      >
        <span aria-hidden="true">{isRtl ? "‹" : "›"}</span>
      </button>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={slide.title}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                isActive ? "w-8 bg-[#f59e0b]" : "w-2.5 bg-white/80 hover:bg-white"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={isActive}
            />
          );
        })}
      </div>

      <style jsx>{`
        .hero-slide {
          will-change: opacity;
        }
      `}</style>
    </section>
  );
}
