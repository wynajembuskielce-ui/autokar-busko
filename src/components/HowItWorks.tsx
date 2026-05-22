type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

interface Step {
  icon: string;
  title: string;
  copy: string;
  details: string[];
}

interface HowItWorksContent {
  sectionTitle: string;
  sectionSub: string;
  steps: Step[];
}

const content: Record<Language, HowItWorksContent> = {
  pl: {
    sectionTitle: "Jak to działa",
    sectionSub: "Rezerwacja w 4 prostych krokach",
    steps: [
      {
        icon: "📋",
        title: "Powiedz nam co potrzebujesz",
        copy: "Kiedy, gdzie, ile osób? Wystarczy jedno słowo.",
        details: ["☎️ Zadzwoń +48 41 345 32 25", "📧 Formularz (2 minuty)", "📱 WhatsApp"],
      },
      {
        icon: "💰",
        title: "Otrzymasz wycenę bez zobowiązań",
        copy: "Cena w 30 minut. Brak ukrytych opłat.",
        details: ["✓ Transport", "✓ Kierowca", "✓ Ubezpieczenie", "✓ Opcje dodatkowe"],
      },
      {
        icon: "✅",
        title: "Zatwierdzasz i płacisz",
        copy: "50% zaliczki = rezerwacja potwierdzona.",
        details: ["50% zaliczki", "Reszta przed wyjazdem", "Umowa PDF emailem"],
      },
      {
        icon: "🚌",
        title: "Kierowca czeka, wy wjeżdżacie",
        copy: "Na czas, zawsze profesjonalnie.",
        details: ["Czekamy 1h na darmo", "GPS tracking", "Kierowca 24/7"],
      },
    ],
  },
  en: {
    sectionTitle: "How it works",
    sectionSub: "Book in 4 simple steps",
    steps: [
      {
        icon: "📋",
        title: "Tell us what you need",
        copy: "When, where, how many? Just a few words.",
        details: ["☎️ Call +48 41 345 32 25", "📧 Form (2 minutes)", "📱 WhatsApp"],
      },
      {
        icon: "💰",
        title: "Get a no-obligation quote",
        copy: "Price in 30 minutes. No hidden fees.",
        details: ["✓ Transport", "✓ Driver", "✓ Insurance", "✓ Extra options"],
      },
      {
        icon: "✅",
        title: "Confirm and pay",
        copy: "50% deposit = booking confirmed.",
        details: ["50% deposit", "Balance before departure", "PDF contract by email"],
      },
      {
        icon: "🚌",
        title: "Driver is waiting, you ride",
        copy: "On time, always professional.",
        details: ["1h free wait", "GPS tracking", "Driver 24/7"],
      },
    ],
  },
  de: {
    sectionTitle: "So funktioniert es",
    sectionSub: "Buchung in 4 einfachen Schritten",
    steps: [
      {
        icon: "📋",
        title: "Sagen Sie uns, was Sie brauchen",
        copy: "Wann, wo, wie viele? Nur ein paar Worte.",
        details: ["☎️ Anrufen +48 41 345 32 25", "📧 Formular (2 Minuten)", "📱 WhatsApp"],
      },
      {
        icon: "💰",
        title: "Unverbindliches Angebot erhalten",
        copy: "Preis in 30 Minuten. Keine versteckten Kosten.",
        details: ["✓ Transport", "✓ Fahrer", "✓ Versicherung", "✓ Zusatzoptionen"],
      },
      {
        icon: "✅",
        title: "Bestätigen und bezahlen",
        copy: "50% Anzahlung = Buchung bestätigt.",
        details: ["50% Anzahlung", "Rest vor Abfahrt", "PDF-Vertrag per E-Mail"],
      },
      {
        icon: "🚌",
        title: "Fahrer wartet, Sie fahren",
        copy: "Pünktlich, immer professionell.",
        details: ["1h kostenlose Wartezeit", "GPS-Tracking", "Fahrer 24/7"],
      },
    ],
  },
  ru: {
    sectionTitle: "Как это работает",
    sectionSub: "Бронирование в 4 простых шага",
    steps: [
      {
        icon: "📋",
        title: "Скажите, что вам нужно",
        copy: "Когда, куда, сколько? Достаточно нескольких слов.",
        details: ["☎️ Звонок +48 41 345 32 25", "📧 Форма (2 минуты)", "📱 WhatsApp"],
      },
      {
        icon: "💰",
        title: "Получите расчёт без обязательств",
        copy: "Цена за 30 минут. Никаких скрытых платежей.",
        details: ["✓ Транспорт", "✓ Водитель", "✓ Страховка", "✓ Доп. опции"],
      },
      {
        icon: "✅",
        title: "Подтвердите и оплатите",
        copy: "50% аванс = бронь подтверждена.",
        details: ["50% аванса", "Остаток перед отъездом", "PDF договор на email"],
      },
      {
        icon: "🚌",
        title: "Водитель ждёт, вы едете",
        copy: "Вовремя, всегда профессионально.",
        details: ["1 час ожидания бесплатно", "GPS слежение", "Водитель 24/7"],
      },
    ],
  },
  ar: {
    sectionTitle: "كيف يعمل",
    sectionSub: "الحجز في 4 خطوات بسيطة",
    steps: [
      {
        icon: "📋",
        title: "أخبرنا بما تحتاج",
        copy: "متى وأين وكم شخصًا؟ بضع كلمات تكفي.",
        details: ["☎️ اتصل +48 41 345 32 25", "📧 نموذج (دقيقتان)", "📱 واتساب"],
      },
      {
        icon: "💰",
        title: "احصل على عرض سعر بلا التزام",
        copy: "السعر في 30 دقيقة. لا رسوم خفية.",
        details: ["✓ النقل", "✓ السائق", "✓ التأمين", "✓ خيارات إضافية"],
      },
      {
        icon: "✅",
        title: "أكّد وادفع",
        copy: "50% دفعة مقدمة = الحجز مؤكد.",
        details: ["50% مقدمًا", "الباقي قبل المغادرة", "عقد PDF بالبريد"],
      },
      {
        icon: "🚌",
        title: "السائق ينتظر، وأنتم تسافرون",
        copy: "في الوقت المحدد، دائمًا باحترافية.",
        details: ["انتظار مجاني ساعة", "تتبع GPS", "سائق 24/7"],
      },
    ],
  },
  es: {
    sectionTitle: "Cómo funciona",
    sectionSub: "Reserva en 4 pasos sencillos",
    steps: [
      {
        icon: "📋",
        title: "Dinos qué necesitas",
        copy: "¿Cuándo, dónde, cuántas personas? Unas palabras bastan.",
        details: ["☎️ Llama +48 41 345 32 25", "📧 Formulario (2 minutos)", "📱 WhatsApp"],
      },
      {
        icon: "💰",
        title: "Recibirás un presupuesto sin compromiso",
        copy: "Precio en 30 minutos. Sin cargos ocultos.",
        details: ["✓ Transporte", "✓ Conductor", "✓ Seguro", "✓ Opciones extra"],
      },
      {
        icon: "✅",
        title: "Confirma y paga",
        copy: "50% de adelanto = reserva confirmada.",
        details: ["50% de adelanto", "Resto antes de salida", "Contrato PDF por email"],
      },
      {
        icon: "🚌",
        title: "El conductor espera, vosotros viajáis",
        copy: "A tiempo, siempre con profesionalidad.",
        details: ["1h de espera gratis", "Seguimiento GPS", "Conductor 24/7"],
      },
    ],
  },
  fr: {
    sectionTitle: "Comment ça marche",
    sectionSub: "Réservez en 4 étapes simples",
    steps: [
      {
        icon: "📋",
        title: "Dites-nous ce dont vous avez besoin",
        copy: "Quand, où, combien ? Quelques mots suffisent.",
        details: ["☎️ Appelez +48 41 345 32 25", "📧 Formulaire (2 minutes)", "📱 WhatsApp"],
      },
      {
        icon: "💰",
        title: "Recevez un devis sans engagement",
        copy: "Prix en 30 minutes. Aucun frais caché.",
        details: ["✓ Transport", "✓ Chauffeur", "✓ Assurance", "✓ Options supplémentaires"],
      },
      {
        icon: "✅",
        title: "Confirmez et payez",
        copy: "50% d'acompte = réservation confirmée.",
        details: ["50% d'acompte", "Reste avant départ", "Contrat PDF par email"],
      },
      {
        icon: "🚌",
        title: "Le chauffeur attend, vous partez",
        copy: "À l'heure, toujours professionnel.",
        details: ["1h d'attente offerte", "Suivi GPS", "Chauffeur 24/7"],
      },
    ],
  },
};

export default function HowItWorks({ lang }: { lang: Language }) {
  const isRtl = lang === "ar";
  const c = content[lang];

  return (
    <section
      className="border-y border-[#e5e5e5] bg-[#f9f9f9] px-4 py-[60px] md:px-10"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-[1200px]">
        <p className="mb-2 text-center text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
          Step by step
        </p>
        <h2 className="mb-2 text-center text-3xl font-black text-[#1a1a1a]">{c.sectionTitle}</h2>
        <p className="mb-12 text-center text-gray-500">{c.sectionSub}</p>

        {/* Steps grid with connector line */}
        <div className="relative">
          {/* Desktop horizontal line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[24px] hidden h-[2px] bg-[#f59e0b] md:block" />
          {/* Mobile vertical line */}
          <div className="absolute bottom-0 left-[24px] top-0 w-[2px] bg-[#f59e0b] md:hidden" />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-8">
            {c.steps.map((step, i) => (
              <div key={i} className="relative flex flex-col pl-14 md:pl-0">
                {/* Step number circle (sits on the connector line) */}
                <div className="absolute left-0 top-0 z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f59e0b] text-lg font-black text-black shadow-md md:relative md:left-auto md:top-auto md:mb-4 md:mx-auto">
                  {i + 1}
                </div>

                {/* Card body */}
                <div className="relative z-10 flex flex-col gap-3 rounded-xl border-2 border-gray-200 bg-white p-[30px] md:mt-4">
                  <div className="text-[48px] leading-none">{step.icon}</div>
                  <h3 className="text-[20px] font-bold leading-snug text-[#1a1a1a]">{step.title}</h3>
                  <p className="text-sm text-gray-500">{step.copy}</p>
                  <ul className="mt-1 space-y-1 text-sm text-gray-700">
                    {step.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
