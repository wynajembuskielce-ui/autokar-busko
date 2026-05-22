type Lang = 'pl'|'en'|'de'|'ru'|'ar'|'es'|'fr';

const content: Record<Lang, {title:string, subtitle:string, desc:string, features:string[], cta:string}> = {
  pl: {
    title: 'Transfer Lotnisko - Zakopane | Wynajem VIP',
    subtitle: 'Kraków, Warszawa → Zakopane i Białka Tatrzańska',
    desc: 'Komfortowy transport z lotniska w Krakowie lub Warszawie prosto w Tatry. Małe grupy 4-19 osób. Możliwa kierowca kobieta na życzenie.',
    features: ['Transfer Kraków Balice → Zakopane (2h)', 'Transfer Warszawa Okęcie → Zakopane (4h)', 'Minibusy 4-19 osób', 'Kierowca kobieta na życzenie', 'Dostępny 24/7', 'Angielski, arabski, niemiecki'],
    cta: 'Zarezerwuj transfer - +48 601 076 652 lub '
  },
  en: {
    title: 'Airport Transfer - Zakopane | VIP Service',
    subtitle: 'Krakow, Warsaw → Zakopane & Białka Tatrzańska',
    desc: 'Comfortable transport from Krakow or Warsaw airport straight to the Tatras. Small groups 4-19 persons. Female driver available on request.',
    features: ['Transfer Krakow Airport → Zakopane (2h)', 'Transfer Warsaw Airport → Zakopane (4h)', 'Minibuses 4-19 persons', 'Female driver on request', 'Available 24/7', 'English, Arabic, German speaking'],
    cta: 'Book transfer - +48 601 076 652 lub '
  },
  de: {
    title: 'Flughafentransfer - Zakopane | VIP Service',
    subtitle: 'Krakau, Warschau → Zakopane & Białka Tatrzańska',
    desc: 'Komfortabler Transport vom Flughafen Krakau oder Warschau direkt in die Tatra. Kleingruppen 4-19 Personen. Fahrerin auf Anfrage.',
    features: ['Transfer Krakau → Zakopane (2h)', 'Transfer Warschau → Zakopane (4h)', 'Minibusse 4-19 Personen', 'Fahrerin auf Anfrage', 'Verfügbar 24/7', 'Englisch, Arabisch, Deutsch'],
    cta: 'Transfer buchen - +48 601 076 652 lub '
  },
  ru: {
    title: 'Трансфер аэропорт - Закопане | VIP сервис',
    subtitle: 'Краков, Варшава → Закопане и Бялка Татшаньска',
    desc: 'Комфортный трансфер из аэропорта Кракова или Варшавы прямо в Татры. Малые группы 4-19 человек. Водитель-женщина по запросу.',
    features: ['Трансфер Краков → Закопане (2ч)', 'Трансфер Варшава → Закопане (4ч)', 'Минивэны 4-19 человек', 'Водитель-женщина по запросу', 'Доступно 24/7', 'Английский, арабский, немецкий'],
    cta: 'Забронировать - +48 601 076 652 lub '
  },
  ar: {
    title: 'نقل من المطار إلى زاكوبانه | خدمة VIP',
    subtitle: 'كراكوف، وارسو ← زاكوبانه وبياوكا تاترزانسكا',
    desc: 'نقل مريح من مطار كراكوف أو وارسو مباشرة إلى جبال تاترا. مجموعات صغيرة 4-19 شخصاً. سائقة متاحة عند الطلب.',
    features: ['نقل كراكوف ← زاكوبانه (ساعتان)', 'نقل وارسو ← زاكوبانه (4 ساعات)', 'ميكروباص 4-19 شخصاً', 'سائقة عند الطلب', 'متاح 24/7', 'الإنجليزية والعربية والألمانية'],
    cta: 'احجز النقل - +48 601 076 652 lub  48+'
  },
  es: {
    title: 'Traslado aeropuerto - Zakopane | Servicio VIP',
    subtitle: 'Cracovia, Varsovia → Zakopane y Białka Tatrzańska',
    desc: 'Transporte cómodo desde el aeropuerto de Cracovia o Varsovia hasta las montañas Tatra. Grupos pequeños 4-19 personas. Conductora disponible.',
    features: ['Traslado Cracovia → Zakopane (2h)', 'Traslado Varsovia → Zakopane (4h)', 'Minibuses 4-19 personas', 'Conductora disponible', 'Disponible 24/7', 'Inglés, árabe, alemán'],
    cta: 'Reservar traslado - +48 601 076 652 lub '
  },
  fr: {
    title: 'Transfert aéroport - Zakopane | Service VIP',
    subtitle: 'Cracovie, Varsovie → Zakopane et Białka Tatrzańska',
    desc: 'Transport confortable depuis l\'aéroport de Cracovie ou Varsovie vers les Tatras. Petits groupes 4-19 personnes. Chauffeure femme sur demande.',
    features: ['Transfert Cracovie → Zakopane (2h)', 'Transfert Varsovie → Zakopane (4h)', 'Minibus 4-19 personnes', 'Chauffeure femme sur demande', 'Disponible 24/7', 'Anglais, arabe, allemand'],
    cta: 'Réserver le transfert - +48 601 076 652 lub '
  }
};

export default async function ZakopaneVipPage({params}:{params:Promise<{lang:string}>}) {
  const {lang} = await params;
  const c = content[lang as Lang] ?? content.en;
  const isAr = lang === 'ar';

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#f59e0b] mb-4">{c.title}</h1>
        <p className="text-xl text-gray-300 mb-6">{c.subtitle}</p>
        <p className="text-lg text-gray-200 mb-10">{c.desc}</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {c.features.map((f,i) => (
            <li key={i} className="flex items-center gap-3 bg-gray-800 rounded-lg p-4">
              <span className="text-[#f59e0b] text-xl">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <a href="tel:+48601076652" className="inline-block rounded-lg bg-[#f59e0b] px-8 py-4 text-lg font-black text-black shadow-lg transition-all duration-200 hover:bg-[#f6c15a] hover:shadow-xl md:px-12 md:py-5 md:text-xl">
          {c.cta}
        </a>
      </div>
    </div>
  );
}
