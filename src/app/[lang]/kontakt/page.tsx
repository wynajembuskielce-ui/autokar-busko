import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/src/components/HeroSection";
import FeatureBox from "@/src/components/FeatureBox";
import FAQAccordion from "@/src/components/FAQAccordion";
import CTAButton from "@/src/components/CTAButton";

type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";
function toLang(lang: string): Language {
  return (["en", "de", "ru", "ar", "es", "fr"].includes(lang) ? lang : "pl") as Language;
}

const metaTitles: Record<Language, string> = {
  pl: "Kontakt | Rafał, WhatsApp, email i adres",
  en: "Contact | Rafal, WhatsApp, email and address",
  de: "Kontakt | Rafal, WhatsApp, E-Mail und Adresse",
  ru: "Контакты | Рафал, WhatsApp, email и адрес",
  ar: "اتصل بنا | رافاو وواتساب والبريد والعنوان",
  es: "Contacto | Rafal, WhatsApp, email y direccion",
  fr: "Contact | Rafal, WhatsApp, email et adresse",
};

const metaDescriptions: Record<Language, string> = {
  pl: "ul. Kolberga 9, 25-516 Kielce",
  en: "ul. Kolberga 9, 25-516 Kielce",
  de: "Kontakt mit Rafal: Tel. +48 601 076 652 lub , WhatsApp +48 601 076 652 lub , E-Mail biuro@muszkieter.pl.",
  ru: "Связь с Рафалом: тел. +48 601 076 652 lub , WhatsApp +48 601 076 652 lub , email biuro@muszkieter.pl.",
  ar: "تواصل مع رافاو: هاتف +48 601 076 652 lub ، واتساب +48 601 076 652 lub ، بريد biuro@muszkieter.pl.",
  es: "Contacto con Rafal: tel. +48 601 076 652 lub , WhatsApp +48 601 076 652 lub , email biuro@muszkieter.pl.",
  fr: "Contact Rafal: tel +48 601 076 652 lub , WhatsApp +48 601 076 652 lub , email biuro@muszkieter.pl.",
};

const heroTitles: Record<Language, string> = {
  pl: "Kontakt - Wynajem Autokarów Kielce",
  en: "Contact - Coach Rental Kielce",
  de: "Kontakt - Busvermietung Kielce",
  ru: "Контакт - Аренда автобусов Кельце",
  ar: "اتصل بنا - تأجير الحافلات كيلتسه",
  es: "Contacto - Alquiler de autocares Kielce",
  fr: "Contact - Location autocars Kielce",
};

const heroSubtitles: Record<Language, string> = {
  pl: "Rafał przygotuje ofertę dla Twojej trasy. 24 lata doświadczenia od 1997 i flota 180 pojazdów do Twojej dyspozycji.",
  en: "Rafal prepares quote for your route. 24 years of experience since 1997 and 180-vehicle fleet at your service.",
  de: "Rafal erstellt Ihr Angebot. 24 Jahre Erfahrung seit 1997 und eine Flotte von 180 Fahrzeugen." ,
  ru: "Рафал подготовит предложение под ваш маршрут. 24 года опыта и флот 180 машин.",
  ar: "سيعد رافاو العرض المناسب لمسارك. خبرة 23 سنة وأسطول 180 مركبة.",
  es: "Rafal preparara la oferta para tu ruta. 23 anos de experiencia y flota de 180 vehiculos.",
  fr: "Rafal prepare l'offre pour votre trajet. 24 ans d'experience et flotte de 180 vehicules.",
};

const ctaTexts: Record<Language, string> = {
  pl: "Zadzwoń do Rafała - +48 601 076 652 lub ",
  en: "Call Rafal - +48 601 076 652 lub ",
  de: "Rafal anrufen - +48 601 076 652 lub ",
  ru: "Позвонить Рафалу - +48 601 076 652 lub ",
  ar: "اتصل برافاو - +48 601 076 652 lub ",
  es: "Llamar a Rafal - +48 601 076 652 lub ",
  fr: "Appeler Rafal - +48 601 076 652 lub ",
};

const featureHeadings: Record<Language, string> = {
  pl: "Dane kontaktowe",
  en: "Contact details",
  de: "Kontaktdaten",
  ru: "Контактные данные",
  ar: "بيانات التواصل",
  es: "Datos de contacto",
  fr: "Coordonnees",
};

const featuresByLang: Record<Language, Array<{ icon: string; title: string; description: string }>> = {
  pl: [
    { icon: "📞", title: "Telefon (Rafał - oferty, B2B)", description: "+48 601 076 652 lub " },
    { icon: "💬", title: "WhatsApp", description: "+48 601 076 652 lub " },
    { icon: "✉️", title: "Email", description: "biuro@muszkieter.pl" },
    { icon: "📍", title: "Adres i godziny", description: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  en: [
    { icon: "📞", title: "Phone (Rafal - offers, B2B)", description: "+48 601 076 652 lub " },
    { icon: "💬", title: "WhatsApp", description: "+48 601 076 652 lub " },
    { icon: "✉️", title: "Email", description: "biuro@muszkieter.pl" },
    { icon: "📍", title: "Address and opening hours", description: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  de: [
    { icon: "📞", title: "Telefon (Rafal - Angebote, B2B)", description: "+48 601 076 652 lub " },
    { icon: "💬", title: "WhatsApp", description: "+48 601 076 652 lub " },
    { icon: "✉️", title: "E-Mail", description: "biuro@muszkieter.pl" },
    { icon: "📍", title: "Adresse und Zeiten", description: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  ru: [
    { icon: "📞", title: "Телефон (Рафал - B2B)", description: "+48 601 076 652 lub " },
    { icon: "💬", title: "WhatsApp", description: "+48 601 076 652 lub " },
    { icon: "✉️", title: "Email", description: "biuro@muszkieter.pl" },
    { icon: "📍", title: "Адрес и часы", description: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  ar: [
    { icon: "📞", title: "الهاتف (رافاو - عروض وB2B)", description: "+48 601 076 652 lub " },
    { icon: "💬", title: "WhatsApp", description: "+48 601 076 652 lub " },
    { icon: "✉️", title: "البريد الإلكتروني", description: "biuro@muszkieter.pl" },
    { icon: "📍", title: "العنوان وساعات العمل", description: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  es: [
    { icon: "📞", title: "Telefono (Rafal - ofertas, B2B)", description: "+48 601 076 652 lub " },
    { icon: "💬", title: "WhatsApp", description: "+48 601 076 652 lub " },
    { icon: "✉️", title: "Email", description: "biuro@muszkieter.pl" },
    { icon: "📍", title: "Direccion y horario", description: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  fr: [
    { icon: "📞", title: "Telephone (Rafal - offres, B2B)", description: "+48 601 076 652 lub " },
    { icon: "💬", title: "WhatsApp", description: "+48 601 076 652 lub " },
    { icon: "✉️", title: "Email", description: "biuro@muszkieter.pl" },
    { icon: "📍", title: "Adresse et horaires", description: "ul. Kolberga 9, 25-516 Kielce" },
  ],
};

const faqHeadings: Record<Language, string> = {
  pl: "FAQ - Kontakt",
  en: "FAQ - Contact",
  de: "FAQ - Kontakt",
  ru: "FAQ - Контакт",
  ar: "الاسئلة - التواصل",
  es: "FAQ - Contacto",
  fr: "FAQ - Contact",
};

const faqByLang: Record<Language, Array<{ question: string; answer: string }>> = {
  pl: [
    { question: "W jakich godzinach mogę dzwonić?", answer: "Pon-Pt 8:00-17:00 oraz Sob 8:00-14:00. Poza godzinami możesz napisać na WhatsApp." },
    { question: "Jakie dane podać do wyceny?", answer: "Wystarczy trasa, liczba osób, data i orientacyjne godziny przejazdu." },
    { question: "Czy obsługujecie B2B?", answer: "Tak, Rafał prowadzi oferty firmowe i rozliczenia B2B z fakturą VAT." },
    { question: "Gdzie znajduje się biuro?", answer: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  en: [
    { question: "What are your contact hours?", answer: "Mon-Fri 8:00-17:00 and Sat 8:00-14:00. Outside hours, message us on WhatsApp." },
    { question: "What details are needed for quote?", answer: "Route, passenger count, date and estimated trip time are enough." },
    { question: "Do you support B2B?", answer: "Yes, Rafal handles business offers and VAT invoice settlements." },
    { question: "Where is your office?", answer: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  de: [
    { question: "Wann sind Sie erreichbar?", answer: "Mo-Fr 8:00-17:00 und Sa 8:00-14:00. Ausserhalb per WhatsApp." },
    { question: "Welche Daten fur Angebot?", answer: "Route, Personenzahl, Datum und ungefahrer Zeitplan reichen aus." },
    { question: "Bieten Sie B2B an?", answer: "Ja, Rafal betreut Firmenangebote und VAT Rechnungen." },
    { question: "Wo ist Ihr Buro?", answer: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  ru: [
    { question: "В какие часы можно звонить?", answer: "Пн-Пт 8:00-17:00, Сб 8:00-14:00. Вне графика можно написать в WhatsApp." },
    { question: "Какие данные нужны для расчета?", answer: "Маршрут, количество людей, дата и примерное время поездки." },
    { question: "Работаете с B2B?", answer: "Да, Рафал ведет корпоративные предложения и документы VAT." },
    { question: "Где ваш офис?", answer: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  ar: [
    { question: "ما ساعات الاتصال؟", answer: "الإثنين-الجمعة 8:00-17:00، السبت 8:00-14:00. خارج ذلك عبر WhatsApp." },
    { question: "ما البيانات المطلوبة للتسعير؟", answer: "المسار وعدد الأشخاص والتاريخ والوقت التقريبي." },
    { question: "هل تقدمون خدمات B2B؟", answer: "نعم، رافاو يدير عروض الشركات وفواتير VAT." },
    { question: "أين يقع المكتب؟", answer: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  es: [
    { question: "En que horario puedo llamar?", answer: "Lun-Vie 8:00-17:00 y Sab 8:00-14:00. Fuera de horario por WhatsApp." },
    { question: "Que datos necesitais para presupuesto?", answer: "Ruta, numero de personas, fecha y horario aproximado." },
    { question: "Trabajais B2B?", answer: "Si, Rafal gestiona ofertas empresariales y facturas VAT." },
    { question: "Donde esta la oficina?", answer: "ul. Kolberga 9, 25-516 Kielce" },
  ],
  fr: [
    { question: "Quels sont vos horaires de contact ?", answer: "Lun-Ven 8:00-17:00, Sam 8:00-14:00. Hors horaires via WhatsApp." },
    { question: "Quelles infos pour un devis ?", answer: "Trajet, effectif, date et heure approximative suffisent." },
    { question: "Faites-vous du B2B ?", answer: "Oui, Rafal gere les offres entreprise et factures VAT." },
    { question: "Ou se trouve votre bureau ?", answer: "ul. Kolberga 9, 25-516 Kielce" },
  ],
};

const ctaSectionHeadings: Record<Language, string> = {
  pl: "Napisz lub zadzwoń - odpowiemy szybko",
  en: "Message or call us - quick response",
  de: "Schreiben oder anrufen - schnelle Antwort",
  ru: "Напишите или позвоните - быстро ответим",
  ar: "اتصل أو اكتب لنا - نرد بسرعة",
  es: "Escribenos o llama - respuesta rapida",
  fr: "Ecrivez ou appelez - reponse rapide",
};

const contactFormByLang: Record<
  Language,
  {
    heading: string;
    name: string;
    email: string;
    phone: string;
    message: string;
    consentPrefix: string;
    privacy: string;
    send: string;
  }
> = {
  pl: {
    heading: "Formularz kontaktowy",
    name: "Imię i nazwisko",
    email: "Adres e-mail",
    phone: "Telefon",
    message: "Wiadomość",
    consentPrefix: "Zapoznałem/am się z",
    privacy: "polityką prywatności",
    send: "Wyślij zapytanie",
  },
  en: {
    heading: "Contact form",
    name: "Full name",
    email: "Email address",
    phone: "Phone",
    message: "Message",
    consentPrefix: "I have read the",
    privacy: "privacy policy",
    send: "Send enquiry",
  },
  de: {
    heading: "Kontaktformular",
    name: "Vor- und Nachname",
    email: "E-Mail-Adresse",
    phone: "Telefon",
    message: "Nachricht",
    consentPrefix: "Ich habe die",
    privacy: "Datenschutzerklärung gelesen",
    send: "Anfrage senden",
  },
  ru: {
    heading: "Контактная форма",
    name: "Имя и фамилия",
    email: "Email",
    phone: "Телефон",
    message: "Сообщение",
    consentPrefix: "Я ознакомился(лась) с",
    privacy: "политикой конфиденциальности",
    send: "Отправить запрос",
  },
  ar: {
    heading: "نموذج التواصل",
    name: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    message: "الرسالة",
    consentPrefix: "لقد اطلعت على",
    privacy: "سياسة الخصوصية",
    send: "إرسال الطلب",
  },
  es: {
    heading: "Formulario de contacto",
    name: "Nombre y apellidos",
    email: "Correo electrónico",
    phone: "Teléfono",
    message: "Mensaje",
    consentPrefix: "He leído la",
    privacy: "política de privacidad",
    send: "Enviar consulta",
  },
  fr: {
    heading: "Formulaire de contact",
    name: "Nom et prénom",
    email: "Adresse e-mail",
    phone: "Téléphone",
    message: "Message",
    consentPrefix: "J'ai lu la",
    privacy: "politique de confidentialité",
    send: "Envoyer la demande",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = toLang(lang);
  return { title: metaTitles[l], description: metaDescriptions[l] };
}

export default async function KontaktPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = toLang(lang);
  const formText = contactFormByLang[l];

  return (
    <>
      <HeroSection title={heroTitles[l]} subtitle={heroSubtitles[l]} ctaText={ctaTexts[l]} ctaHref="tel:601076652" backgroundImage="/images/flota/flota-bus-3.jpg" />
      <FeatureBox features={featuresByLang[l]} heading={featureHeadings[l]} />
      <FAQAccordion items={faqByLang[l]} heading={faqHeadings[l]} />
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-gray-50 p-6 md:p-8" dir={l === "ar" ? "rtl" : undefined}>
          <h2 className="mb-6 text-2xl font-black text-[#1a1a1a]">{formText.heading}</h2>
          <form action="mailto:biuro@muszkieter.pl" method="post" encType="text/plain" className="space-y-4">
            <input
              type="text"
              name="name"
              required
              placeholder={formText.name}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#f59e0b]"
            />
            <input
              type="email"
              name="email"
              required
              placeholder={formText.email}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#f59e0b]"
            />
            <input
              type="tel"
              name="phone"
              placeholder={formText.phone}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#f59e0b]"
            />
            <textarea
              name="message"
              required
              rows={5}
              placeholder={formText.message}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#1a1a1a] outline-none transition-colors focus:border-[#f59e0b]"
            />

            <label className="flex items-start gap-3 text-sm text-gray-700">
              <input type="checkbox" name="privacy_consent" required className="mt-1 h-4 w-4 accent-[#f59e0b]" />
              <span>
                {formText.consentPrefix} <Link href="/polityka-prywatnosci" className="font-semibold text-[#1a1a1a] underline hover:text-[#f59e0b]">{formText.privacy}</Link>.
              </span>
            </label>

            <button
              type="submit"
              className="inline-flex rounded-lg bg-[#1a1a1a] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-black"
            >
              {formText.send}
            </button>
          </form>
        </div>
      </section>
      <section className="py-12 px-4 bg-[#f59e0b] text-center">
        <h2 className="text-2xl font-black text-[#1a1a1a] mb-4">{ctaSectionHeadings[l]}</h2>
        <div className="flex flex-col gap-3 items-center">
          <CTAButton href="tel:601076652" variant="secondary">📞 +48 601 076 652 lub </CTAButton>
          <CTAButton href="https://wa.me/48601076652" variant="secondary">💬 WhatsApp: +48 601 076 652 lub </CTAButton>
          <CTAButton href="mailto:biuro@muszkieter.pl" variant="secondary">✉️ biuro@muszkieter.pl</CTAButton>
        </div>
      </section>
    </>
  );
}
