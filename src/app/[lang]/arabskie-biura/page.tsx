'use client';
import { useParams } from 'next/navigation';

export default function ArabskieBiuraPage() {
  const params = useParams();
  const lang = (params?.lang as string) || 'ar';
  const isAr = lang === 'ar';

  const content = {
    ar: {
      hero_title: 'شراكة حقيقية في قلب بولندا',
      hero_sub: 'نحن لسنا مجرد شركة نقل — نحن شريكك الكامل في بولندا',
      hero_quote: '"وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ" — القرآن الكريم',
      intro: 'أنتم تبحثون عن شريك موثوق في بولندا يفهم احتياجات السائح العربي. نحن مجموعة موسكيتير — أكثر من 27 عاماً من الخبرة، 180 مركبة، وفريق يقول: واحد للجميع والجميع لواحد.',
      why_title: 'لماذا مجموعة موسكيتير؟',
      why_items: [
        '🕌 نفهم الثقافة العربية والاحتياجات الخاصة',
        '🚌 180 مركبة — من 8 أشخاص حتى 50 شخصاً',
        '👩 سائقة امرأة للمجموعات النسائية',
        '🗣️ خدمة بالعربية (بإضافة رسوم رمزية)',
        '📍 موقع استراتيجي — ساعة واحدة من كراكوف',
        '🤝 نساعدك في إيجاد الشركاء المحليين',
        '🎫 نحجز التذاكر والفنادق والمطاعم الحلال',
        '✅ ضمان الجودة والالتزام بالمواعيد'
      ],
      destinations_title: 'وجهات لا تنسى قريبة من كيلتسه',
      destinations: [
        { icon: '🏔️', name: 'زاكوبانه والتاترا', dist: '2 ساعة', desc: 'جبال خلابة، هواء نقي، مناظر لا تُصدق — الوجهة الأولى للعرب في بولندا' },
        { icon: '🏰', name: 'كراكوف التاريخية', dist: '1 ساعة', desc: 'مدينة ملكية، قلعة وافيل، السوق الكبير — روعة التاريخ الأوروبي' },
        { icon: '💎', name: 'منجم ملح فيليتشكا', dist: '1.5 ساعة', desc: 'أعجوبة تحت الأرض — كنيسة من الملح على عمق 135 متراً' },
        { icon: '🌊', name: 'شاطئ البلطيق', dist: '5 ساعات', desc: 'البحر البلطيقي — تجربة فريدة للسائح من الخليج' },
        { icon: '🏙️', name: 'وارسو العاصمة', dist: '2.5 ساعة', desc: 'التسوق، المطاعم الحلال، الحياة الليلية الراقية' },
        { icon: '🌿', name: 'غابة بيالوفيجا', dist: '4 ساعات', desc: 'أقدم غابة في أوروبا — الطبيعة البكر والبيسون البري' }
      ],
      services_title: 'خدماتنا لشركاء الأعمال',
      services: [
        { icon: '✈️', title: 'نقل المطار', desc: 'كراكوف ← وارسو ← كاتوفيتشه — وصول أو مغادرة — متاح 24/7' },
        { icon: '🚐', title: 'جولات مخصصة', desc: 'برامج مصممة لمجموعتك — من 4 إلى 50 شخصاً' },
        { icon: '🏨', title: 'الإقامة والمطاعم', desc: 'نساعد في حجز الفنادق والمطاعم الحلال المعتمدة' },
        { icon: '🎯', title: 'البرامج السياحية', desc: 'نصمم برنامجاً كاملاً أو نكمل برنامجك الموجود' },
        { icon: '👩‍👩‍👧', title: 'مجموعات النساء', desc: 'سائقة امرأة، مسارات آمنة، خصوصية تامة' },
        { icon: '🤝', title: 'شراكة طويلة المدى', desc: 'عمولات لشركاء الأعمال — نبني معاً لا لمرة واحدة' }
      ],
      partner_title: 'للشركاء والوكلاء',
      partner_desc: 'إذا كنت وكيل سفر أو شركة سياحية تبحث عن شريك موثوق في بولندا — نحن هنا. نقدم عمولات تنافسية، خدمة احترافية، وشراكة مبنية على الثقة والاحترام المتبادل.',
      whatsapp_text: 'تواصل معنا عبر واتساب',
      email_text: 'راسلنا بالبريد الإلكتروني',
      cta_title: 'ابدأ الشراكة اليوم',
      cta_desc: 'أرسل لنا رسالة واتساب وسنرد خلال ساعة. نتحدث العربية، الإنجليزية، البولندية والألمانية.',
    },
    en: {
      hero_title: 'Your Trusted Partner in the Heart of Poland',
      hero_sub: 'We are not just a transport company — we are your complete partner in Poland',
      hero_quote: '"Cooperate in righteousness and piety" — values we share',
      intro: 'You are looking for a reliable partner in Poland who understands Arab travelers. We are Autokar Busko — 27+ years experience, 180 vehicles, a team that says: All for one and one for all.',
      why_title: 'Why Autokar Busko?',
      why_items: [
        '🕌 We understand Arab culture and special needs',
        '🚌 180 vehicles — from 8 to 50 passengers',
        '👩 Female driver for women-only groups',
        '🗣️ Arabic-speaking service available (small surcharge)',
        '📍 Strategic location — 1 hour from Krakow',
        '🤝 We help you find local partners',
        '🎫 We book tickets, hotels and halal restaurants',
        '✅ Quality guarantee and punctuality'
      ],
      destinations_title: 'Unforgettable Destinations Near Krakow',
      destinations: [
        { icon: '🏔️', name: 'Zakopane & Tatras', dist: '2 hours', desc: 'Breathtaking mountains, fresh air, stunning views — the #1 Arab destination in Poland' },
        { icon: '🏰', name: 'Historic Krakow', dist: '1 hour', desc: 'Royal city, Wawel Castle, Grand Market Square — European history at its finest' },
        { icon: '💎', name: 'Wieliczka Salt Mine', dist: '1.5 hours', desc: 'Underground wonder — a cathedral carved from salt 135m deep' },
        { icon: '🌊', name: 'Baltic Sea Coast', dist: '5 hours', desc: 'The Baltic Sea — a unique experience for Gulf visitors' },
        { icon: '🏙️', name: 'Warsaw Capital', dist: '2.5 hours', desc: 'Shopping, halal restaurants, vibrant city life' },
        { icon: '🌿', name: 'Białowieża Forest', dist: '4 hours', desc: 'Europe\'s oldest forest — pristine nature and wild European bison' }
      ],
      services_title: 'Our Services for Business Partners',
      services: [
        { icon: '✈️', title: 'Airport Transfers', desc: 'Krakow ↔ Warsaw ↔ Katowice — arrivals and departures — 24/7 available' },
        { icon: '🚐', title: 'Custom Tours', desc: 'Programs designed for your group — from 4 to 50 passengers' },
        { icon: '🏨', title: 'Accommodation & Dining', desc: 'We help book hotels and certified halal restaurants' },
        { icon: '🎯', title: 'Full Itineraries', desc: 'We design a complete program or complement your existing itinerary' },
        { icon: '👩‍👩‍👧', title: 'Women\'s Groups', desc: 'Female driver, safe routes, complete privacy' },
        { icon: '🤝', title: 'Long-term Partnership', desc: 'Commissions for business partners — we build together, not just once' }
      ],
      partner_title: 'For Partners & Agents',
      partner_desc: 'If you are a travel agent or tour operator looking for a reliable partner in Poland — we are here. We offer competitive commissions, professional service, and a partnership built on trust and mutual respect.',
      whatsapp_text: 'Contact us on WhatsApp',
      email_text: 'Email us',
      cta_title: 'Start the Partnership Today',
      cta_desc: 'Send us a WhatsApp message and we will reply within one hour. We speak Arabic, English, Polish and German.',
    }
  };

  const c = content[lang as 'ar' | 'en'] ?? content.en;

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} className="min-h-screen bg-[#0f0f1a] text-white">

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-5xl mb-6">🌙</div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#f59e0b] mb-4">{c.hero_title}</h1>
          <p className="text-xl text-gray-300 mb-6">{c.hero_sub}</p>
          <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/30 rounded-xl p-4 inline-block">
            <p className="text-[#f59e0b] text-lg italic">{c.hero_quote}</p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 px-4 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-gray-200 leading-relaxed">{c.intro}</p>
          <div className="mt-6 flex justify-center gap-8 text-center">
            <div><div className="text-4xl font-bold text-[#f59e0b]">27+</div><div className="text-gray-400">{isAr ? 'سنة خبرة' : 'Years Experience'}</div></div>
            <div><div className="text-4xl font-bold text-[#f59e0b]">180</div><div className="text-gray-400">{isAr ? 'مركبة' : 'Vehicles'}</div></div>
            <div><div className="text-4xl font-bold text-[#f59e0b]">24/7</div><div className="text-gray-400">{isAr ? 'متاحون دائماً' : 'Available'}</div></div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#f59e0b] text-center mb-10">{c.why_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.why_items.map((item, i) => (
              <div key={i} className="bg-[#1a1a2e] rounded-xl p-4 border border-[#f59e0b]/20 text-lg">{item}</div>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="py-16 px-4 bg-[#1a1a2e]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#f59e0b] text-center mb-10">{c.destinations_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.destinations.map((d, i) => (
              <div key={i} className="bg-[#0f0f1a] rounded-xl p-6 border border-[#f59e0b]/20 hover:border-[#f59e0b]/60 transition">
                <div className="text-4xl mb-3">{d.icon}</div>
                <h3 className="text-xl font-bold text-[#f59e0b] mb-1">{d.name}</h3>
                <div className="text-sm text-gray-400 mb-3">⏱ {d.dist}</div>
                <p className="text-gray-300">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#f59e0b] text-center mb-10">{c.services_title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.services.map((s, i) => (
              <div key={i} className="bg-[#1a1a2e] rounded-xl p-6 border border-[#f59e0b]/20">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER SECTION */}
      <section className="py-16 px-4 bg-gradient-to-r from-[#1a1a2e] to-[#0f3460]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-5xl mb-4">🤝</div>
          <h2 className="text-3xl font-bold text-[#f59e0b] mb-6">{c.partner_title}</h2>
          <p className="text-xl text-gray-200 leading-relaxed mb-8">{c.partner_desc}</p>
          <div className="bg-[#f59e0b]/10 border border-[#f59e0b]/40 rounded-2xl p-6">
            <p className="text-[#f59e0b] text-lg font-semibold">
              {isAr ? '🦁 موسكيتير — واحد للجميع والجميع لواحد' : '🦁 Autokar Busko — All for one, one for all'}
            </p>
            <p className="text-gray-300 mt-2">
              {isAr ? 'منذ عام 1997 — الشريك الأكثر موثوقية في كيلتسه، بولندا' : 'Since 1997 — the most trusted partner in Krakow, Poland'}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-[#0f0f1a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{c.cta_title}</h2>
          <p className="text-gray-300 mb-8">{c.cta_desc}</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://wa.me/48601076652" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg border-2 border-[#f59e0b] px-6 py-3 text-base font-bold text-[#f59e0b] transition-all duration-200 hover:bg-[#f59e0b] hover:text-black">
              <span className="text-2xl">💬</span> {c.whatsapp_text}
            </a>
            <a href="mailto:biuro@autokar-busko.pl"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#f59e0b] px-8 py-4 text-lg font-black text-black shadow-lg transition-all duration-200 hover:bg-[#f6c15a] hover:shadow-xl md:px-12 md:py-5 md:text-xl">
              <span className="text-2xl">📧</span> {c.email_text}
            </a>
          </div>
          <div className="mt-8 text-gray-400">
            <a href="https://muszkieter.pl" target="_blank" rel="noopener noreferrer" className="text-[#f59e0b] underline transition-colors duration-200 hover:text-[#f6c15a]">
              muszkieter.pl
            </a>
            {isAr ? ' — كيلتسه، بولندا' : ' — Krakow, Poland'}
          </div>
        </div>
      </section>

    </div>
  );
}
