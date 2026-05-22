'use client';
import { useParams } from 'next/navigation';

type RouteItem = { from: string; to: string; time: string; price: string };
type FaqItem = { q: string; a: string };
type TransferContent = {
  title: string;
  subtitle: string;
  desc: string;
  routes: RouteItem[];
  features: string[];
  cta: string;
  whatsapp: string;
  faq_title: string;
  faqs: FaqItem[];
};

export default function TransferLotnikskoPage() {
  const params = useParams();
  const lang = (params?.lang as string) || 'pl';
  const isAr = lang === 'ar';

  const content: Record<string, TransferContent> = {
    pl: {
      title: 'Transfer na Lotnisko — Krakow, Kraków, Warszawa',
      subtitle: 'Punktualny, komfortowy przewóz na lotnisko dla osób i grup',
      desc: 'Zapewniamy niezawodny transport z Krakowa i okolic na lotniska w Krakowie (KRK) i Warszawie (WAW). Wyjeżdżamy o każdej porze dnia i nocy. Busy 4-50 osób, klimatyzowane, WiFi. Żadnych niespodzianek z ceną.',
      routes: [
        { from: 'Krakow', to: 'Kraków Balice (KRK)', time: '1h 15min', price: 'od 280 zł' },
        { from: 'Krakow', to: 'Warszawa Okęcie (WAW)', time: '2h 30min', price: 'od 420 zł' },
        { from: 'Krakow', to: 'Katowice Pyrzowice (KTW)', time: '1h 30min', price: 'od 320 zł' },
        { from: 'Kraków KRK', to: 'Zakopane / Tatry', time: '1h 45min', price: 'od 350 zł' },
        { from: 'Warszawa WAW', to: 'Krakow / Kraków', time: '2h 30min', price: 'od 420 zł' },
        { from: 'Dowolne lotnisko', to: 'Dowolne miejsce w Polsce', time: 'wycena', price: 'indywidualnie' },
      ],
      features: [
        '✈️ Monitorujemy loty — czekamy jeśli samolot się spóźni',
        '🕐 Dostępni 24/7 — wyjeżdżamy o każdej porze',
        '🚐 Pojazdy 4-50 osób — minibus, bus, autokar',
        '❄️ Klimatyzacja i WiFi w każdym pojeździe',
        '💰 Stała cena — bez licznika, bez niespodzianek',
        '🧳 Duży bagaż — narty, wózki, sprzęt sportowy',
        '👔 Kierowca w mundurze — profesjonalna obsługa',
        '🗣️ Angielski, arabski, niemiecki na życzenie',
      ],
      cta: 'Zarezerwuj transfer — +48 601 076 652 lub ',
      whatsapp: 'WhatsApp: +48 601 076 652 lub ',
      faq_title: 'Często zadawane pytania',
      faqs: [
        { q: 'Ile kosztuje transfer z Krakowa na lotnisko w Krakowie?', a: 'Cena transferu Krakow → Kraków Balice zaczyna się od 280 zł dla 1-3 osób. Dla grup cena przeliczana jest per osoba.' },
        { q: 'Co jeśli samolot się spóźni?', a: 'Monitorujemy wszystkie loty. Jeśli samolot się opóźni, kierowca czeka bez dodatkowych kosztów do 60 minut.' },
        { q: 'Czy można zabrać narty lub rowery?', a: 'Tak! Nasze pojazdy mają duże przestrzenie bagażowe. Prosimy poinformować przy rezerwacji.' },
        { q: 'Jak zarezerwować transfer?', a: 'Zadzwoń lub napisz WhatsApp: +48 601 076 652 lub . Odpowiadamy w ciągu 30 minut.' },
      ],
    },
    en: {
      title: 'Airport Transfer — Krakow, Krakow, Warsaw',
      subtitle: 'Punctual, comfortable airport transport for individuals and groups',
      desc: 'We provide reliable transport from Krakow to Krakow Airport (KRK) and Warsaw Airport (WAW). Available day and night. Vehicles for 4-50 persons, air-conditioned, WiFi. Fixed prices, no surprises.',
      routes: [
        { from: 'Krakow', to: 'Krakow Airport (KRK)', time: '1h 15min', price: 'from 280 PLN' },
        { from: 'Krakow', to: 'Warsaw Airport (WAW)', time: '2h 30min', price: 'from 420 PLN' },
        { from: 'Krakow', to: 'Katowice Airport (KTW)', time: '1h 30min', price: 'from 320 PLN' },
        { from: 'Krakow KRK', to: 'Zakopane / Tatras', time: '1h 45min', price: 'from 350 PLN' },
        { from: 'Warsaw WAW', to: 'Krakow / Krakow', time: '2h 30min', price: 'from 420 PLN' },
        { from: 'Any airport', to: 'Any location in Poland', time: 'quote', price: 'individual' },
      ],
      features: [
        '✈️ We monitor flights — we wait if your plane is delayed',
        '🕐 Available 24/7 — we depart at any hour',
        '🚐 Vehicles for 4-50 persons — minibus, bus, coach',
        '❄️ Air conditioning and WiFi in every vehicle',
        '💰 Fixed price — no meter, no surprises',
        '🧳 Large luggage — skis, strollers, sports equipment',
        '👔 Driver in uniform — professional service',
        '🗣️ English, Arabic, German on request',
      ],
      cta: 'Book transfer — +48 601 076 652 lub ',
      whatsapp: 'WhatsApp: +48 601 076 652 lub ',
      faq_title: 'Frequently Asked Questions',
      faqs: [
        { q: 'How much does transfer from Krakow to Krakow Airport cost?', a: 'Transfer Krakow → Krakow Balice starts from 280 PLN for 1-3 persons. For groups, price is calculated per person.' },
        { q: 'What if my flight is delayed?', a: 'We monitor all flights. If your flight is delayed, the driver waits at no extra cost for up to 60 minutes.' },
        { q: 'Can I bring skis or bicycles?', a: 'Yes! Our vehicles have large luggage areas. Please inform us at booking.' },
        { q: 'How to book a transfer?', a: 'Call or WhatsApp: +48 601 076 652 lub . We respond within 30 minutes.' },
      ],
    },
    de: {
      title: 'Flughafentransfer — Krakow, Krakau, Warschau',
      subtitle: 'Pünktlicher, komfortabler Flughafentransport für Einzel- und Gruppen',
      desc: 'Zuverlässiger Transport von Krakow zu den Flughäfen Krakau (KRK) und Warschau (WAW). Tag und Nacht verfügbar. Fahrzeuge für 4-50 Personen, klimatisiert, WiFi. Festpreise, keine Überraschungen.',
      routes: [
        { from: 'Krakow', to: 'Flughafen Krakau (KRK)', time: '1h 15min', price: 'ab 280 PLN' },
        { from: 'Krakow', to: 'Flughafen Warschau (WAW)', time: '2h 30min', price: 'ab 420 PLN' },
        { from: 'Krakow', to: 'Flughafen Katowice (KTW)', time: '1h 30min', price: 'ab 320 PLN' },
        { from: 'Krakau KRK', to: 'Zakopane / Tatra', time: '1h 45min', price: 'ab 350 PLN' },
        { from: 'Warschau WAW', to: 'Krakow / Krakau', time: '2h 30min', price: 'ab 420 PLN' },
        { from: 'Beliebiger Flughafen', to: 'Beliebiger Ort in Polen', time: 'Angebot', price: 'individuell' },
      ],
      features: [
        '✈️ Wir überwachen Flüge — wir warten bei Verspätungen',
        '🕐 Verfügbar 24/7 — Abfahrt zu jeder Zeit',
        '🚐 Fahrzeuge für 4-50 Personen',
        '❄️ Klimaanlage und WiFi in jedem Fahrzeug',
        '💰 Festpreis — kein Taxameter, keine Überraschungen',
        '🧳 Großes Gepäck — Ski, Kinderwagen, Sportausrüstung',
        '👔 Fahrer in Uniform — professioneller Service',
        '🗣️ Englisch, Arabisch, Deutsch auf Anfrage',
      ],
      cta: 'Transfer buchen — +48 601 076 652 lub ',
      whatsapp: 'WhatsApp: +48 601 076 652 lub ',
      faq_title: 'Häufig gestellte Fragen',
      faqs: [
        { q: 'Was kostet der Transfer von Krakow zum Flughafen Krakau?', a: 'Transfer Krakow → Krakau Balice ab 280 PLN für 1-3 Personen. Für Gruppen wird der Preis pro Person berechnet.' },
        { q: 'Was passiert bei Flugverspätung?', a: 'Wir überwachen alle Flüge. Bei Verspätung wartet der Fahrer kostenlos bis zu 60 Minuten.' },
        { q: 'Kann ich Ski oder Fahrräder mitbringen?', a: 'Ja! Unsere Fahrzeuge haben große Gepäckräume. Bitte bei der Buchung angeben.' },
        { q: 'Wie buche ich einen Transfer?', a: 'Anrufen oder WhatsApp: +48 601 076 652 lub . Wir antworten innerhalb von 30 Minuten.' },
      ],
    },
    ar: {
      title: 'نقل المطار — كيلتسه، كراكوف، وارسو',
      subtitle: 'نقل مريح وموثوق للأفراد والمجموعات',
      desc: 'نوفر نقلاً موثوقاً من كيلتسه إلى مطار كراكوف (KRK) ومطار وارسو (WAW). متاح ليلاً ونهاراً. مركبات لـ 4-50 شخصاً، مكيفة، WiFi. أسعار ثابتة بدون مفاجآت.',
      routes: [
        { from: 'كيلتسه', to: 'مطار كراكوف (KRK)', time: '1س 15د', price: 'من 280 زلوتي' },
        { from: 'كيلتسه', to: 'مطار وارسو (WAW)', time: '2س 30د', price: 'من 420 زلوتي' },
        { from: 'كيلتسه', to: 'مطار كاتوفيتشه (KTW)', time: '1س 30د', price: 'من 320 زلوتي' },
        { from: 'مطار كراكوف', to: 'زاكوبانه / التاترا', time: '1س 45د', price: 'من 350 زلوتي' },
        { from: 'مطار وارسو', to: 'كيلتسه / كراكوف', time: '2س 30د', price: 'من 420 زلوتي' },
        { from: 'أي مطار', to: 'أي مكان في بولندا', time: 'تسعير', price: 'حسب الطلب' },
      ],
      features: [
        '✈️ نراقب الرحلات — ننتظر عند التأخير',
        '🕐 متاح 24/7 — نغادر في أي وقت',
        '🚐 مركبات لـ 4-50 شخصاً',
        '❄️ تكييف وWiFi في كل مركبة',
        '💰 سعر ثابت — بدون عداد وبدون مفاجآت',
        '🧳 أمتعة كبيرة — تزلج، عربات، معدات رياضية',
        '👔 سائق بزي رسمي',
        '🗣️ الإنجليزية والعربية والألمانية عند الطلب',
      ],
      cta: 'احجز النقل — +48 601 076 652 lub  48+',
      whatsapp: 'واتساب: +48 601 076 652 lub  48+',
      faq_title: 'أسئلة شائعة',
      faqs: [
        { q: 'كم تكلفة النقل من كيلتسه إلى مطار كراكوف؟', a: 'يبدأ السعر من 280 زلوتي لـ 1-3 أشخاص. للمجموعات يُحسب السعر للشخص.' },
        { q: 'ماذا لو تأخرت الرحلة؟', a: 'نراقب جميع الرحلات. عند التأخير ينتظر السائق مجاناً حتى 60 دقيقة.' },
        { q: 'هل يمكن إحضار معدات التزلج؟', a: 'نعم! مركباتنا لديها مساحة أمتعة كبيرة. يرجى الإخبار عند الحجز.' },
        { q: 'كيف أحجز؟', a: 'اتصل أو واتساب: +48 601 076 652 lub  48+. نرد خلال 30 دقيقة.' },
      ],
    },
  };

  const c = content[lang] ?? content.en;

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} className="min-h-screen bg-white text-gray-900">

      <section className="bg-[#1a1a1a] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-5xl mb-4">✈️</div>
          <h1 className="text-4xl font-bold text-[#f59e0b] mb-4">{c.title}</h1>
          <p className="text-xl text-gray-300 mb-6">{c.subtitle}</p>
          <p className="text-gray-400 max-w-2xl mx-auto">{c.desc}</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            {lang === 'pl' ? 'Trasy i ceny' : lang === 'ar' ? 'المسارات والأسعار' : lang === 'de' ? 'Routen und Preise' : 'Routes & Prices'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.routes.map((r, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm flex justify-between items-center">
                <div>
                  <div className="font-semibold text-gray-900">{r.from} → {r.to}</div>
                  <div className="text-sm text-gray-500 mt-1">⏱ {r.time}</div>
                </div>
                <div className="text-[#f59e0b] font-bold text-lg">{r.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            {lang === 'pl' ? 'Dlaczego my?' : lang === 'ar' ? 'لماذا نحن؟' : lang === 'de' ? 'Warum wir?' : 'Why us?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.features.map((f: string, i: number) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                <span className="text-lg">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#1a1a1a] text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#f59e0b] mb-6">{c.faq_title}</h2>
          <div className="space-y-4 text-left">
            {c.faqs.map((faq, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-5">
                <div className="font-bold text-[#f59e0b] mb-2">❓ {faq.q}</div>
                <div className="text-gray-300">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#f59e0b]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-6">{c.cta}</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://wa.me/48601076652" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#f59e0b] px-6 py-3 text-base font-bold text-[#f59e0b] transition-all duration-200 hover:bg-[#f59e0b] hover:text-black">
              💬 {c.whatsapp}
            </a>
            <a href="tel:+48601076652"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#f59e0b] px-8 py-4 text-lg font-black text-black shadow-lg transition-all duration-200 hover:bg-[#f6c15a] hover:shadow-xl md:px-12 md:py-5 md:text-xl">
              📞 +48 601 076 652 lub 
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
