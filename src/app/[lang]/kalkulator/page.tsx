'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import pricingConfig from '@/data/pricing-config.json';

export default function KalkulatorPage() {
  const params = useParams<{ lang: string }>();
  const lang = params?.lang ?? 'pl';
  const isAr = lang === 'ar';
  const showArabicSection = lang === 'ar' || lang === 'en';

  const [vehicleId, setVehicleId] = useState('van9');
  const [routeId, setRouteId] = useState('krakow_krakow_krk');
  const [customKm, setCustomKm] = useState(100);
  const [days, setDays] = useState(1);
  const [tier, setTier] = useState('standard');
  const [arabicWomen, setArabicWomen] = useState(false);
  const [arabicDriver, setArabicDriver] = useState(false);
  const [arabicFemaleDriver, setArabicFemaleDriver] = useState(false);
  const [nightSurcharge, setNightSurcharge] = useState(false);

  const vehicle = pricingConfig.vehicles.find(v => v.id === vehicleId) || pricingConfig.vehicles[0];
  const route = pricingConfig.routes.find(r => r.id === routeId) || pricingConfig.routes[0];
  const km = routeId === 'custom' ? customKm : route.km;
  const kmTotal = km * 2;

  const fuel = (kmTotal * vehicle.fuel_per_100km / 100) * pricingConfig.fuel_price_pln;
  const driver = vehicle.driver_day * days;
  const eksploatacja = kmTotal * vehicle.eksploatacja_per_km;
  const margin = tier === 'vip' ? vehicle.margin_vip : tier === 'biznes' ? vehicle.margin_biznes : vehicle.margin_standard;
  const marginTotal = margin * days;

  let surcharges = 0;
  if (arabicFemaleDriver) surcharges += pricingConfig.surcharges.arabic_female_driver * days;
  else if (arabicWomen) surcharges += pricingConfig.surcharges.female_driver * days;
  if (arabicDriver && !arabicFemaleDriver) surcharges += pricingConfig.surcharges.arabic_driver * days;
  if (nightSurcharge) surcharges += pricingConfig.surcharges.night_surcharge;

  const totalNetto = (fuel + driver * days + eksploatacja + marginTotal + surcharges) * days === days
    ? fuel + driver * days + eksploatacja + marginTotal + surcharges
    : fuel + driver + eksploatacja + marginTotal + surcharges;

  const totalBrutto = totalNetto * (1 + pricingConfig.vat_rate);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#1a1a1a] text-white rounded-2xl p-8 mb-6 text-center">
          <div className="text-4xl mb-3">🚌</div>
          <h1 className="text-3xl font-bold text-[#f59e0b]">Kalkulator Ceny</h1>
          <p className="text-gray-400 mt-2">Orientacyjna wycena — ostateczna cena po kontakcie</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 mb-4">
          <h2 className="font-bold text-lg mb-4 text-gray-800">1. Wybierz pojazd</h2>
          <div className="grid grid-cols-1 gap-2">
            {pricingConfig.vehicles.map(v => (
              <button key={v.id} onClick={() => { setVehicleId(v.id); if (v.id !== 'van9') { setArabicWomen(false); setArabicFemaleDriver(false); } }}
                className={`p-3 rounded-xl border-2 text-left transition ${vehicleId === v.id ? 'border-[#f59e0b] bg-amber-50' : 'border-gray-200 hover:border-gray-300'}`}>
                <span className="font-semibold">{v.name_pl}</span>
                {v.vip_note && <span className="text-xs text-gray-400 ml-2">({v.vip_note})</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 mb-4">
          <h2 className="font-bold text-lg mb-4 text-gray-800">2. Klasa usługi</h2>
          <div className="grid grid-cols-3 gap-3">
            {['standard','biznes','vip'].map(t => (
              <button key={t} onClick={() => setTier(t)}
                className={`p-3 rounded-xl border-2 font-bold capitalize transition ${tier === t ? 'border-[#f59e0b] bg-amber-50 text-[#f59e0b]' : 'border-gray-200 hover:border-gray-300'}`}>
                {t === 'standard' ? '⭐ Standard' : t === 'biznes' ? '⭐⭐ Biznes' : '👑 VIP'}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 mb-4">
          <h2 className="font-bold text-lg mb-4 text-gray-800">3. Trasa</h2>
          <select value={routeId} onChange={e => setRouteId(e.target.value)}
            className="w-full p-3 border-2 border-gray-200 rounded-xl mb-3 focus:border-[#f59e0b] outline-none">
            {pricingConfig.routes.map(r => (
              <option key={r.id} value={r.id}>{r.name} {r.km > 0 ? `(${r.km} km)` : ''}</option>
            ))}
          </select>
          {routeId === 'custom' && (
            <div>
              <label className="text-sm text-gray-600">Km (w jedną stronę):</label>
              <input type="number" value={customKm} onChange={e => setCustomKm(Number(e.target.value))}
                className="w-full p-3 border-2 border-gray-200 rounded-xl mt-1 focus:border-[#f59e0b] outline-none" min="1" />
            </div>
          )}
          <div className="mt-3 text-sm text-gray-500">
            Łączny dystans (tam + powrót): <strong>{kmTotal} km</strong>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 mb-4">
          <h2 className="font-bold text-lg mb-4 text-gray-800">4. Liczba dni</h2>
          <div className="flex items-center gap-4">
            <button onClick={() => setDays(Math.max(1, days-1))} className="w-10 h-10 rounded-full bg-gray-100 font-bold text-xl hover:bg-gray-200">-</button>
            <span className="text-2xl font-bold w-12 text-center">{days}</span>
            <button onClick={() => setDays(days+1)} className="w-10 h-10 rounded-full bg-[#f59e0b] font-bold text-xl hover:opacity-90">+</button>
          </div>
        </div>

        {showArabicSection && (
          <div className="bg-white rounded-2xl shadow p-6 mb-4">
            <h2 className="font-bold text-lg mb-4 text-gray-800" dir={isAr ? 'rtl' : 'ltr'}>
              {isAr ? 'خدمات خاصة للمجموعات العربية' : 'Special services for Arab groups'}
            </h2>
            <div className="space-y-3" dir={isAr ? 'rtl' : 'ltr'}>
              {/* --- Grupa kobiet arabskich / kierowca kobieta --- */}
              {vehicleId === 'van9' ? (
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={arabicWomen} onChange={e => { setArabicWomen(e.target.checked); if (!e.target.checked) { setArabicFemaleDriver(false); } }}
                    className="w-5 h-5 accent-amber-500" />
                  <span>
                    👩 {isAr ? 'مجموعة النساء العربيات' : 'Group of Arab women'}
                    {' '}<span className="text-green-600 font-semibold">(+{pricingConfig.surcharges.female_driver} zł/{isAr ? 'يوم' : 'day'})</span>
                  </span>
                </label>
              ) : (
                <div className="flex items-center gap-3 opacity-40 select-none">
                  <input type="checkbox" disabled className="w-5 h-5" />
                  <span>
                    👩 {isAr ? 'مجموعة النساء العربيات' : 'Group of Arab women'}
                    {' '}<span className="text-xs text-gray-500 ml-1">
                      {isAr ? '(متاحة للمركبات حتى 9 أشخاص فقط)' : '(Available for vehicles up to 9 passengers only)'}
                    </span>
                  </span>
                </div>
              )}
              {arabicWomen && vehicleId === 'van9' && (
                <div className="ml-8 bg-amber-50 border border-amber-200 rounded-xl p-3 text-sm text-amber-800">
                  ⚠️ {pricingConfig.surcharges.women_only_policy}
                </div>
              )}

              {/* --- Kierowca mówiący po arabsku --- */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={arabicDriver} onChange={e => setArabicDriver(e.target.checked)}
                  className="w-5 h-5 accent-amber-500" />
                <span>
                  🗣️ {isAr ? 'سائق يتحدث العربية' : 'Arabic-speaking driver'}
                  {' '}<span className="text-green-600 font-semibold">(+{pricingConfig.surcharges.arabic_driver} zł/{isAr ? 'يوم' : 'day'})</span>
                </span>
              </label>

              {/* --- Kobieta mówiąca po arabsku PREMIUM --- */}
              {arabicWomen && arabicDriver && vehicleId === 'van9' && (
                <label className="flex items-center gap-3 cursor-pointer ml-4">
                  <input type="checkbox" checked={arabicFemaleDriver} onChange={e => setArabicFemaleDriver(e.target.checked)}
                    className="w-5 h-5 accent-amber-500" />
                  <span>
                    👑 {isAr ? 'سائقة تتحدث العربية — PREMIUM' : 'Arabic-speaking female driver — PREMIUM'}
                    {' '}<span className="text-green-600 font-semibold">(+{pricingConfig.surcharges.arabic_female_driver} zł/{isAr ? 'يوم' : 'day'})</span>
                  </span>
                </label>
              )}

              {/* --- Disclaimer --- */}
              <p className="text-xs text-gray-500 pt-1" dir={isAr ? 'rtl' : 'ltr'}>
                {isAr
                  ? 'حسب التوفر. خدمة السائقة متاحة فقط للمركبات حتى 9 أشخاص. يرجى التأكيد عند الحجز.'
                  : 'Subject to availability. Female driver service limited to passenger vehicles (up to 9 persons). Please confirm when booking.'}
              </p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow p-6 mb-4">
          <h2 className="font-bold text-lg mb-4 text-gray-800">
            {showArabicSection ? (lang === 'en' ? '6. Night option' : '٦. خيار إضافي') : '5. Opcje dodatkowe'}
          </h2>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={nightSurcharge} onChange={e => setNightSurcharge(e.target.checked)}
                className="w-5 h-5 accent-amber-500" />
              <span>🌙 {isAr ? 'مغادرة ليلية 22:00-06:00' : lang === 'en' ? 'Night departure 22:00–06:00' : 'Wyjazd nocny 22:00–06:00'} <span className="text-green-600 font-semibold">(+{pricingConfig.surcharges.night_surcharge} zł)</span></span>
            </label>
          </div>
        </div>

        <div className="bg-[#1a1a1a] text-white rounded-2xl p-6 mb-4">
          <h2 className="font-bold text-lg mb-4 text-[#f59e0b]">💰 Wycena orientacyjna</h2>
          <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between"><span className="text-gray-400">⛽ Paliwo ({kmTotal} km):</span><span>{fuel.toFixed(0)} zł</span></div>
            <div className="flex justify-between"><span className="text-gray-400">👤 Kierowca ({days} dzień/dni):</span><span>{(vehicle.driver_day * days).toFixed(0)} zł</span></div>
            <div className="flex justify-between"><span className="text-gray-400">🔧 Eksploatacja:</span><span>{eksploatacja.toFixed(0)} zł</span></div>
            <div className="flex justify-between"><span className="text-gray-400">📊 Marża ({tier}):</span><span>{marginTotal.toFixed(0)} zł</span></div>
            {surcharges > 0 && <div className="flex justify-between"><span className="text-gray-400">⭐ Dopłaty:</span><span>{surcharges.toFixed(0)} zł</span></div>}
            <div className="border-t border-gray-700 pt-2 mt-2">
              <div className="flex justify-between text-lg"><span className="text-gray-300">Netto:</span><span className="font-bold">{totalNetto.toFixed(0)} zł</span></div>
              <div className="flex justify-between text-2xl mt-1"><span className="text-[#f59e0b] font-bold">BRUTTO (8% VAT):</span><span className="font-bold text-[#f59e0b]">{totalBrutto.toFixed(0)} zł</span></div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mb-4">* Cena orientacyjna. Paliwo wg {pricingConfig.fuel_price_pln} zł/l ({pricingConfig.fuel_note})</p>
          <a href="https://wa.me/48413453225" target="_blank" rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-[#f59e0b] px-6 py-3 text-base font-bold text-[#f59e0b] transition-all duration-200 hover:bg-[#f59e0b] hover:text-black">
            💬 Potwierdź wycenę na WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
