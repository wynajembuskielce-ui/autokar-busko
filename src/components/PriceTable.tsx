type Language = "pl" | "en" | "de" | "ru" | "ar" | "es" | "fr";

interface PriceRow {
  vehicle?: string;
  name?: string;
  capacity: number;
  pricePerKm: number;
  minPrice: number;
  dailyRate: number;
}

interface PriceTableProps {
  rows: PriceRow[];
  heading?: string;
  lang?: Language;
}

const colHeaders: Record<Language, { vehicle: string; seats: string; perKm: string; minPrice: string; daily: string }> = {
  pl: { vehicle: "Pojazd", seats: "Miejsc", perKm: "Cena / km", minPrice: "Min. cena", daily: "Stawka dzienna" },
  en: { vehicle: "Vehicle", seats: "Seats", perKm: "Price / km", minPrice: "Min. price", daily: "Daily rate" },
  de: { vehicle: "Fahrzeug", seats: "Plätze", perKm: "Preis / km", minPrice: "Mindestpreis", daily: "Tagessatz" },
  ru: { vehicle: "Автобус", seats: "Мест", perKm: "Цена / км", minPrice: "Мин. цена", daily: "Дневная ставка" },
  ar: { vehicle: "المركبة", seats: "المقاعد", perKm: "السعر / كم", minPrice: "الحد الأدنى", daily: "السعر اليومي" },
  es: { vehicle: "Vehículo", seats: "Plazas", perKm: "Precio / km", minPrice: "Precio mín.", daily: "Tarifa diaria" },
  fr: { vehicle: "Véhicule", seats: "Places", perKm: "Prix / km", minPrice: "Prix min.", daily: "Tarif journalier" },
};

const footnote: Record<Language, string> = {
  pl: "* Ceny orientacyjne. Dokładna wycena po kontakcie telefonicznym:",
  en: "* Indicative prices. Exact quote after phone contact:",
  de: "* Richtpreise. Genaues Angebot nach telefonischer Anfrage:",
  ru: "* Ориентировочные цены. Точный расчёт после звонка:",
  ar: "* أسعار تقريبية. العرض الدقيق بعد الاتصال الهاتفي:",
  es: "* Precios orientativos. Presupuesto exacto tras contacto telefónico:",
  fr: "* Prix indicatifs. Devis exact après contact téléphonique :",
};

const fromLabel: Record<Language, string> = {
  pl: "od", en: "from", de: "ab", ru: "от", ar: "من", es: "desde", fr: "dès",
};

export default function PriceTable({ rows, heading = "Cennik wynajmu", lang = "pl" }: PriceTableProps) {
  const cols = colHeaders[lang] ?? colHeaders.pl;
  const note = footnote[lang] ?? footnote.pl;
  const from = fromLabel[lang] ?? "od";
  const isRtl = lang === "ar";

  return (
    <section className="py-16 px-4 bg-white" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-black text-center text-[#1a1a1a] mb-10">{heading}</h2>
        <div className="overflow-x-auto rounded-2xl shadow-sm border border-gray-100">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#1a1a1a] text-white">
                <th className="px-6 py-4 text-left font-semibold">{cols.vehicle}</th>
                <th className="px-6 py-4 text-center font-semibold">{cols.seats}</th>
                <th className="px-6 py-4 text-center font-semibold">{cols.perKm}</th>
                <th className="px-6 py-4 text-center font-semibold">{cols.minPrice}</th>
                <th className="px-6 py-4 text-center font-semibold">{cols.daily}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <td className="px-6 py-4 font-medium text-[#1a1a1a]">{row.vehicle || row.name || "-"}</td>
                  <td className="px-6 py-4 text-center">{row.capacity}</td>
                  <td className="px-6 py-4 text-center text-amber-text font-semibold">{row.pricePerKm.toFixed(2)} zł</td>
                  <td className="px-6 py-4 text-center">{from} {row.minPrice} zł</td>
                  <td className="px-6 py-4 text-center">{from} {row.dailyRate} zł</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-center text-gray-500 text-xs mt-4">
          {note}{" "}
          <a href="tel:413453225" className="text-amber-text underline transition-colors duration-200 hover:text-amber-700">
            +48 41 345 32 25
          </a>
        </p>
      </div>
    </section>
  );
}

