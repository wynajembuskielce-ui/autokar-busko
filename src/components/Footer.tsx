'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCookieConsent } from '@/lib/cookie-consent';
import FleetCarousel from './FleetCarousel';

type Lang = 'pl' | 'en' | 'de' | 'ru' | 'ar' | 'es' | 'fr';

type FooterLang = {
  fleetHeading: string;
  kontakt: { title: string; hours: string[] };
  uslugi: { title: string; items: Array<{ label: string; slug: string }> };
  informacje: { title: string; items: Array<{ label: string; slug: string }> };
  zaufanie: { title: string; stats: Array<{ label: string; desc: string }>; certifications: string[]; rating: string };
  privacy: string;
  cookies: string;
  cookieSettings: string;
  regulamin: string;
};

const CONTACT_ITEMS = [
  { label: '📞 +48 41 345 32 25', href: 'tel:+48413453225' },
  { label: '📱 +48 609 69 19 12', href: 'tel:+48609691912' },
  { label: '📱 WhatsApp', href: 'https://wa.me/48609691912' },
  { label: '📧 biuro@autokar-busko.pl', href: 'mailto:biuro@autokar-busko.pl' },
  { label: '📍 ul. Poprzeczna 1, 28-100 Busko-Zdrój' },
];

const footerByLang: Record<Lang, FooterLang> = {
  pl: {
    fleetHeading: 'Nasza flota',
    kontakt: { title: 'Kontakt', hours: ['Pon-Pt: 8:00-18:00', 'Sobota: 9:00-15:00', 'Niedziela: Zamknięte'] },
    uslugi: {
      title: 'Usługi',
      items: [
        { label: 'Wesela', slug: 'wesele' },
        { label: 'Wycieczki szkolne', slug: 'wycieczki-szkolne' },
        { label: 'Imprezy firmowe', slug: 'impreza-firmowa' },
        { label: 'Pielgrzymki', slug: 'pielgrzymki' },
        { label: 'Narty Zakopane', slug: 'narty-zakopane' },
        { label: 'Transfer lotnisko', slug: 'lotnisko' },
      ],
    },
    informacje: {
      title: 'Informacje',
      items: [
        { label: 'Blog', slug: 'blog' },
        { label: 'Galeria', slug: 'galeria' },
        { label: 'Cennik', slug: 'cennik' },
        { label: 'Kalkulator', slug: 'kalkulator' },
        { label: 'O nas', slug: 'o-nas' },
        { label: 'Referencje', slug: 'referencje' },
      ],
    },
    zaufanie: {
      title: 'Zaufanie',
      stats: [{ label: '23 LATA', desc: 'Doświadczenia' }, { label: '180', desc: 'Pojazdów' }, { label: '500+', desc: 'Firm' }],
      certifications: ['✅ Licencja WITD', '✅ Ubezpieczenie OC', '✅ Kierowcy przeszkoleni'],
      rating: '⭐ 4.8/5 na Google',
    },
    privacy: 'Polityka prywatności',
    cookies: 'Polityka cookies',
    cookieSettings: 'Ustawienia cookies',
    regulamin: 'Regulamin',
  },
  en: {
    fleetHeading: 'Our Fleet',
    kontakt: { title: 'Contact', hours: ['Mon-Fri: 8:00-18:00', 'Saturday: 9:00-15:00', 'Sunday: Closed'] },
    uslugi: {
      title: 'Services',
      items: [
        { label: 'Weddings', slug: 'wesele' },
        { label: 'School Trips', slug: 'wycieczki-szkolne' },
        { label: 'Corporate Events', slug: 'impreza-firmowa' },
        { label: 'Pilgrimages', slug: 'pielgrzymki' },
        { label: 'Ski Trips', slug: 'narty-zakopane' },
        { label: 'Airport Transfer', slug: 'lotnisko' },
      ],
    },
    informacje: {
      title: 'Information',
      items: [
        { label: 'Blog', slug: 'blog' },
        { label: 'Gallery', slug: 'galeria' },
        { label: 'Pricing', slug: 'cennik' },
        { label: 'Calculator', slug: 'kalkulator' },
        { label: 'About Us', slug: 'o-nas' },
        { label: 'References', slug: 'referencje' },
      ],
    },
    zaufanie: {
      title: 'Trust',
      stats: [{ label: '24 years', desc: 'Experience' }, { label: '180', desc: 'Vehicles' }, { label: '500+', desc: 'Companies' }],
      certifications: ['✅ WITD License', '✅ OC Insurance', '✅ Trained Drivers'],
      rating: '⭐ 4.8/5 on Google',
    },
    privacy: 'Privacy Policy',
    cookies: 'Cookie Policy',
    cookieSettings: 'Cookie settings',
    regulamin: 'Terms of Service',
  },
  de: {
    fleetHeading: 'Unsere Flotte',
    kontakt: { title: 'Kontakt', hours: ['Mo-Fr: 8:00-18:00', 'Sa: 9:00-15:00', 'So: Geschlossen'] },
    uslugi: {
      title: 'Leistungen',
      items: [
        { label: 'Hochzeiten', slug: 'wesele' },
        { label: 'Schulausflüge', slug: 'wycieczki-szkolne' },
        { label: 'Firmenevents', slug: 'impreza-firmowa' },
        { label: 'Pilgerfahrten', slug: 'pielgrzymki' },
        { label: 'Skiausflüge', slug: 'narty-zakopane' },
        { label: 'Flughafentransfer', slug: 'lotnisko' },
      ],
    },
    informacje: {
      title: 'Informationen',
      items: [
        { label: 'Blog', slug: 'blog' },
        { label: 'Galerie', slug: 'galeria' },
        { label: 'Preise', slug: 'cennik' },
        { label: 'Kalkulator', slug: 'kalkulator' },
        { label: 'Über uns', slug: 'o-nas' },
        { label: 'Referenzen', slug: 'referencje' },
      ],
    },
    zaufanie: {
      title: 'Vertrauen',
      stats: [{ label: '23 JAHRE', desc: 'Erfahrung' }, { label: '180', desc: 'Fahrzeuge' }, { label: '500+', desc: 'Firmen' }],
      certifications: ['✅ WITD-Lizenz', '✅ Haftpflichtversicherung', '✅ Ausgebildete Fahrer'],
      rating: '⭐ 4,8/5 bei Google',
    },
    privacy: 'Datenschutz',
    cookies: 'Cookie-Richtlinie',
    cookieSettings: 'Cookie-Einstellungen',
    regulamin: 'AGB',
  },
  ru: {
    fleetHeading: 'Наш автопарк',
    kontakt: { title: 'Контакт', hours: ['Пн-Пт: 8:00-18:00', 'Сб: 9:00-15:00', 'Вс: Закрыто'] },
    uslugi: {
      title: 'Услуги',
      items: [
        { label: 'Свадьбы', slug: 'wesele' },
        { label: 'Школьные поездки', slug: 'wycieczki-szkolne' },
        { label: 'Корпоративы', slug: 'impreza-firmowa' },
        { label: 'Паломничества', slug: 'pielgrzymki' },
        { label: 'Лыжи Закопане', slug: 'narty-zakopane' },
        { label: 'Трансфер аэропорт', slug: 'lotnisko' },
      ],
    },
    informacje: {
      title: 'Информация',
      items: [
        { label: 'Блог', slug: 'blog' },
        { label: 'Галерея', slug: 'galeria' },
        { label: 'Цены', slug: 'cennik' },
        { label: 'Калькулятор', slug: 'kalkulator' },
        { label: 'О нас', slug: 'o-nas' },
        { label: 'Отзывы', slug: 'referencje' },
      ],
    },
    zaufanie: {
      title: 'Доверие',
      stats: [{ label: '23 ГОДА', desc: 'Опыта' }, { label: '180', desc: 'Автобусов' }, { label: '500+', desc: 'Компаний' }],
      certifications: ['✅ Лицензия WITD', '✅ Страхование OC', '✅ Обученные водители'],
      rating: '⭐ 4,8/5 в Google',
    },
    privacy: 'Конфиденциальность',
    cookies: 'Политика cookies',
    cookieSettings: 'Cookie settings',
    regulamin: 'Условия',
  },
  ar: {
    fleetHeading: 'أسطولنا',
    kontakt: { title: 'اتصل بنا', hours: ['الإثنين-الجمعة: 8:00-18:00', 'السبت: 9:00-15:00', 'الأحد: مغلق'] },
    uslugi: {
      title: 'الخدمات',
      items: [
        { label: 'حفلات الزفاف', slug: 'wesele' },
        { label: 'الرحلات المدرسية', slug: 'wycieczki-szkolne' },
        { label: 'الفعاليات', slug: 'impreza-firmowa' },
        { label: 'الحج والعمرة', slug: 'pielgrzymki' },
        { label: 'رحلات التزلج', slug: 'narty-zakopane' },
        { label: 'نقل المطار', slug: 'lotnisko' },
      ],
    },
    informacje: {
      title: 'معلومات',
      items: [
        { label: 'المدونة', slug: 'blog' },
        { label: 'المعرض', slug: 'galeria' },
        { label: 'الأسعار', slug: 'cennik' },
        { label: 'الآلة الحاسبة', slug: 'kalkulator' },
        { label: 'من نحن', slug: 'o-nas' },
        { label: 'المراجع', slug: 'referencje' },
      ],
    },
    zaufanie: {
      title: 'الثقة',
      stats: [{ label: '23 عامًا', desc: 'من الخبرة' }, { label: '180', desc: 'مركبة' }, { label: '+500', desc: 'شركة وعائلة' }],
      certifications: ['✅ ترخيص WITD', '✅ تأمين المسؤولية', '✅ سائقون مدرَّبون'],
      rating: '⭐ 4.8/5 على Google',
    },
    privacy: 'سياسة الخصوصية',
    cookies: 'سياسة ملفات تعريف الارتباط',
    cookieSettings: 'Cookie settings',
    regulamin: 'شروط الخدمة',
  },
  es: {
    fleetHeading: 'Nuestra flota',
    kontakt: { title: 'Contacto', hours: ['Lun-Vie: 8:00-18:00', 'Sábado: 9:00-15:00', 'Domingo: Cerrado'] },
    uslugi: {
      title: 'Servicios',
      items: [
        { label: 'Bodas', slug: 'wesele' },
        { label: 'Excursiones escolares', slug: 'wycieczki-szkolne' },
        { label: 'Eventos corporativos', slug: 'impreza-firmowa' },
        { label: 'Peregrinaciones', slug: 'pielgrzymki' },
        { label: 'Esquí Zakopane', slug: 'narty-zakopane' },
        { label: 'Transfer aeropuerto', slug: 'lotnisko' },
      ],
    },
    informacje: {
      title: 'Información',
      items: [
        { label: 'Blog', slug: 'blog' },
        { label: 'Galería', slug: 'galeria' },
        { label: 'Precios', slug: 'cennik' },
        { label: 'Calculadora', slug: 'kalkulator' },
        { label: 'Sobre nosotros', slug: 'o-nas' },
        { label: 'Referencias', slug: 'referencje' },
      ],
    },
    zaufanie: {
      title: 'Confianza',
      stats: [{ label: '23 AÑOS', desc: 'Experiencia' }, { label: '180', desc: 'Vehículos' }, { label: '500+', desc: 'Empresas' }],
      certifications: ['✅ Licencia WITD', '✅ Seguro OC', '✅ Conductores formados'],
      rating: '⭐ 4,8/5 en Google',
    },
    privacy: 'Privacidad',
    cookies: 'Política de cookies',
    cookieSettings: 'Cookie settings',
    regulamin: 'Condiciones',
  },
  fr: {
    fleetHeading: 'Notre flotte',
    kontakt: { title: 'Contact', hours: ['Lun-Ven: 8:00-18:00', 'Samedi: 9:00-15:00', 'Dimanche: Fermé'] },
    uslugi: {
      title: 'Services',
      items: [
        { label: 'Mariages', slug: 'wesele' },
        { label: 'Sorties scolaires', slug: 'wycieczki-szkolne' },
        { label: "Événements d'entreprise", slug: 'impreza-firmowa' },
        { label: 'Pèlerinages', slug: 'pielgrzymki' },
        { label: 'Voyages ski', slug: 'narty-zakopane' },
        { label: 'Transfert aéroport', slug: 'lotnisko' },
      ],
    },
    informacje: {
      title: 'Informations',
      items: [
        { label: 'Blog', slug: 'blog' },
        { label: 'Galerie', slug: 'galeria' },
        { label: 'Tarifs', slug: 'cennik' },
        { label: 'Calculateur', slug: 'kalkulator' },
        { label: 'À propos', slug: 'o-nas' },
        { label: 'Références', slug: 'referencje' },
      ],
    },
    zaufanie: {
      title: 'Confiance',
      stats: [{ label: '23 ANS', desc: "D'expérience" }, { label: '180', desc: 'Véhicules' }, { label: '500+', desc: 'Entreprises' }],
      certifications: ['✅ Licence WITD', '✅ Assurance RC', '✅ Chauffeurs formés'],
      rating: '⭐ 4,8/5 sur Google',
    },
    privacy: 'Confidentialité',
    cookies: 'Politique des cookies',
    cookieSettings: 'Cookie settings',
    regulamin: 'Conditions',
  },
};

export default function Footer({ lang }: { lang?: Lang }) {
  const params = useParams<{ lang?: string | string[] }>();
  const { resetConsent } = useCookieConsent();
  const routeLang = params?.lang ?? 'pl';
  const langStr = (lang ?? (Array.isArray(routeLang) ? routeLang[0] : routeLang)) as Lang;
  const c = footerByLang[langStr] ?? footerByLang.pl;
  const isRtl = langStr === 'ar';

  return (
    <footer className="border-t border-[#333333] bg-[#1a1a1a] text-white" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 md:py-16">
        <div className="mb-12 border-b border-[#333333] pb-12">
          <h3 className="mb-6 text-lg font-bold text-[#f59e0b]">{c.fleetHeading}</h3>
          <FleetCarousel />
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Kontakt */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase text-[#f59e0b]">{c.kontakt.title}</h4>
            <div className="mb-6 space-y-2 text-sm">
              {CONTACT_ITEMS.map((item, idx) =>
                item.href ? (
                  <a
                    key={idx}
                    href={item.href}
                    target={item.href.startsWith('https://') ? '_blank' : undefined}
                    rel={item.href.startsWith('https://') ? 'noopener noreferrer' : undefined}
                    className="block text-gray-300 transition-colors hover:text-[#f59e0b]"
                  >
                    {item.label}
                  </a>
                ) : (
                  <div key={idx} className="text-gray-400">{item.label}</div>
                )
              )}
            </div>
            <div className="space-y-1 text-xs text-gray-500">
              {c.kontakt.hours.map((hour, idx) => (
                <div key={idx}>⏰ {hour}</div>
              ))}
            </div>
          </div>

          {/* Usługi */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase text-[#f59e0b]">{c.uslugi.title}</h4>
            <div className="space-y-2 text-sm">
              {c.uslugi.items.map((item, idx) => (
                <Link key={idx} href={`/${langStr}/${item.slug}`} className="block text-gray-300 transition-colors hover:text-[#f59e0b]">
                  • {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 space-y-2 text-sm border-t border-[#333333] pt-4">
              <Link href="/pl/wynajem-autokaru-na-wesele" className="block text-gray-400 transition-colors hover:text-[#f59e0b]">• Wesele</Link>
              <Link href="/pl/wycieczka-licealna" className="block text-gray-400 transition-colors hover:text-[#f59e0b]">• Wycieczka licealna</Link>
              <Link href="/pl/wycieczka-przedszkolna" className="block text-gray-400 transition-colors hover:text-[#f59e0b]">• Wycieczka przedszkolna</Link>
              <Link href="/pl/autokar-na-pielgrzymke" className="block text-gray-400 transition-colors hover:text-[#f59e0b]">• Pielgrzymka</Link>
              <Link href="/pl/autokar-na-pogrzeb" className="block text-gray-400 transition-colors hover:text-[#f59e0b]">• Pogrzeb</Link>
              <Link href="/pl/przysiega-wojskowa" className="block text-gray-400 transition-colors hover:text-[#f59e0b]">• Przysięga wojskowa</Link>
            </div>
          </div>

          {/* Informacje */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase text-[#f59e0b]">{c.informacje.title}</h4>
            <div className="space-y-2 text-sm">
              {c.informacje.items.map((item, idx) => (
                <Link key={idx} href={`/${langStr}/${item.slug}`} className="block text-gray-300 transition-colors hover:text-[#f59e0b]">
                  • {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Zaufanie */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase text-[#f59e0b]">{c.zaufanie.title}</h4>
            <div className="mb-6 space-y-2 text-xs">
              {c.zaufanie.stats.map((stat, idx) => (
                <div key={idx} className="text-gray-300">
                  <div className="font-bold text-[#f59e0b]">{stat.label}</div>
                  <div className="text-gray-500">{stat.desc}</div>
                </div>
              ))}
            </div>
            <div className="mb-4 space-y-1 text-xs text-gray-300">
              {c.zaufanie.certifications.map((cert, idx) => (
                <div key={idx}>{cert}</div>
              ))}
            </div>
            <a
              href="https://www.google.com/search?q=Autokar+Busko+opinie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#f59e0b] transition-colors hover:text-amber-400"
            >
              {c.zaufanie.rating}
            </a>
          </div>
        </div>

        <div className="mb-8 flex justify-center gap-6 border-b border-[#333333] pb-8">
          <a
            href="https://www.facebook.com/muszkieterprzewozy"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-colors hover:text-[#f59e0b]"
            aria-label="Facebook"
          >
            f
          </a>
          <a
            href="https://wa.me/48609691912"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-colors hover:text-[#f59e0b]"
            aria-label="WhatsApp"
          >
            💬
          </a>
          <Link href={`/${langStr}/blog`} className="text-2xl transition-colors hover:text-[#f59e0b]" aria-label="Blog">
            📝
          </Link>
        </div>
      </div>

      <div className="bg-black/50 px-4 py-4 text-center text-xs text-gray-500 md:px-8">
        <p className="mb-2 space-y-1">
          <span className="block">© 2026 Autokar Busko — wynajem autokarów Ponidzie</span>
          <span className="block">Autokar Busko — UHT Anna Chmiel (CEIDG)</span>
          <span className="block">ul. Poprzeczna 1, 28-100 Busko-Zdrój • +48 41 345 32 25 • biuro@autokar-busko.pl</span>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/regulamin" className="transition-colors hover:text-[#f59e0b]">
            {c.regulamin}
          </Link>
          <span>•</span>
          <Link href="/polityka-prywatnosci" className="transition-colors hover:text-[#f59e0b]">
            {c.privacy}
          </Link>
          <span>•</span>
          <Link href="/polityka-cookies" className="transition-colors hover:text-[#f59e0b]">
            {c.cookies}
          </Link>
          <span>•</span>
          <button type="button" onClick={resetConsent} className="transition-colors hover:text-[#f59e0b]">
            {c.cookieSettings}
          </button>
        </div>
      </div>
    </footer>
  );
}

