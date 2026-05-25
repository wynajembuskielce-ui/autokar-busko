'use client';
import { useState } from 'react';
import pricingConfig from '@/data/pricing-config.json';

const HASLO = 'busko2026';

export default function AdminWycenaPage() {
  const [haslo, setHaslo] = useState('');
  const [zalogowany, setZalogowany] = useState(false);
  const [vehicleId, setVehicleId] = useState('van9');
  const [routeId, setRouteId] = useState('krakow_krakow_krk');
  const [customKm, setCustomKm] = useState(100);
  const [days, setDays] = useState(1);
  const [tier, setTier] = useState('standard');
  const [arabicWomen, setArabicWomen] = useState(false);
  const [arabicDriver, setArabicDriver] = useState(false);
  const [arabicFemaleDriver, setArabicFemaleDriver] = useState(false);
  const [nightSurcharge, setNightSurcharge] = useState(false);
  const [customFuel, setCustomFuel] = useState(pricingConfig.fuel_price_pln);
  const [profit, setProfit] = useState(0);

  if (!zalogowany) return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 p-8 rounded-2xl w-full max-w-sm">
        <div className="text-4xl text-center mb-4">🔐</div>
        <h1 className="text-white text-2xl font-bold text-center mb-6">Panel Rafała</h1>
        <input type="password" placeholder="Hasło..." value={haslo} onChange={e => setHaslo(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && haslo === HASLO && setZalogowany(true)}
          className="w-full p-3 rounded-xl bg-gray-700 text-white mb-3 outline-none border-2 border-gray-600 focus:border-[#639922]" />
        <button onClick={() => haslo === HASLO ? setZalogowany(true) : alert('Złe hasło!')}
          className="w-full bg-[#1D9E75] text-black font-bold py-3 rounded-xl hover:opacity-90">
          Wejdź
        </button>
      </div>
    </div>
  );

  const vehicle = pricingConfig.vehicles.find(v => v.id === vehicleId) || pricingConfig.vehicles[0];
  const route = pricingConfig.routes.find(r => r.id === routeId) || pricingConfig.routes[0];
  const km = routeId === 'custom' ? customKm : route.km;
  const kmTotal = km * 2;

  const fuel = (kmTotal * vehicle.fuel_per_100km / 100) * customFuel;
  const driver = vehicle.driver_day * days;
  const eksploatacja = kmTotal * vehicle.eksploatacja_per_km;
  const margin = tier === 'vip' ? vehicle.margin_vip : tier === 'biznes' ? vehicle.margin_biznes : vehicle.margin_standard;
  const marginTotal = margin * days;

  let surcharges = 0;
  if (arabicFemaleDriver) surcharges += pricingConfig.surcharges.arabic_female_driver * days;
  else if (arabicWomen) surcharges += pricingConfig.surcharges.female_driver * days;
  if (arabicDriver && !arabicFemaleDriver) surcharges += pricingConfig.surcharges.arabic_driver * days;
  if (nightSurcharge) surcharges += pricingConfig.surcharges.night_surcharge;

  const koszty = fuel + driver + eksploatacja;
  const totalNetto = koszty + marginTotal + surcharges + profit;
  const totalBrutto = totalNetto * (1 + pricingConfig.vat_rate);

  return (
    <div className="min-h-screen bg-gray-900 text-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-gray-800 rounded-2xl p-6 mb-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-[#639922]">🦁 Panel Wycen — Rafał</h1>
            <p className="text-gray-400 text-sm">Kalkulator wewnętrzny | Paliwo: {customFuel} zł/l</p>
          </div>
          <button onClick={() => setZalogowany(false)} className="text-gray-500 hover:text-red-400 text-sm">Wyloguj</button>
        </div>

        <div className="bg-gray-800 rounded-2xl p-5 mb-3">
          <h2 className="font-bold mb-3 text-[#639922]">⛽ Aktualna cena ON (zł/litr)</h2>
          <input type="number" step="0.01" value={customFuel} onChange={e => setCustomFuel(Number(e.target.value))}
            className="w-full p-3 bg-gray-700 rounded-xl outline-none border-2 border-gray-600 focus:border-[#639922] text-xl font-bold" />
          <p className="text-xs text-gray-500 mt-1">Sprawdź aktualną cenę ON na orlen.pl</p>
        </div>

        <div className="bg-gray-800 rounded-2xl p-5 mb-3">
          <h2 className="font-bold mb-3 text-[#639922]">🚌 Pojazd i klasa</h2>
          <select value={vehicleId} onChange={e => setVehicleId(e.target.value)}
            className="w-full p-3 bg-gray-700 rounded-xl mb-3 outline-none border-2 border-gray-600 focus:border-[#639922]">
            {pricingConfig.vehicles.map(v => <option key={v.id} value={v.id}>{v.name_pl}</option>)}
          </select>
          <div className="grid grid-cols-3 gap-2">
            {['standard','biznes','vip'].map(t => (
              <button key={t} onClick={() => setTier(t)}
                className={`p-2 rounded-xl border-2 font-bold text-sm capitalize transition ${tier === t ? 'border-[#639922] bg-[#27500A]/30 text-[#639922]' : 'border-gray-600 hover:border-gray-500'}`}>
                {t === 'standard' ? '⭐ Std' : t === 'biznes' ? '⭐⭐ Biz' : '👑 VIP'}
              </button>
            ))}
          </div>
          <div className="mt-2 text-xs text-gray-400">
            Marża: {tier === 'vip' ? vehicle.margin_vip : tier === 'biznes' ? vehicle.margin_biznes : vehicle.margin_standard} zł/dzień
            {vehicle.vip_note && tier === 'vip' ? ` (${vehicle.vip_note})` : ''}
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-5 mb-3">
          <h2 className="font-bold mb-3 text-[#639922]">📍 Trasa i dni</h2>
          <select value={routeId} onChange={e => setRouteId(e.target.value)}
            className="w-full p-3 bg-gray-700 rounded-xl mb-3 outline-none border-2 border-gray-600 focus:border-[#639922]">
            {pricingConfig.routes.map(r => <option key={r.id} value={r.id}>{r.name} {r.km > 0 ? `(${r.km} km)` : ''}</option>)}
          </select>
          {routeId === 'custom' && (
            <input type="number" value={customKm} onChange={e => setCustomKm(Number(e.target.value))}
              placeholder="Km w jedną stronę" className="w-full p-3 bg-gray-700 rounded-xl mb-3 outline-none border-2 border-gray-600 focus:border-[#639922]" />
          )}
          <div className="flex items-center gap-4">
            <span className="text-gray-400 text-sm">Dni:</span>
            <button onClick={() => setDays(Math.max(1, days-1))} className="w-8 h-8 rounded-full bg-gray-700 font-bold hover:bg-gray-600">-</button>
            <span className="text-xl font-bold w-8 text-center">{days}</span>
            <button onClick={() => setDays(days+1)} className="w-8 h-8 rounded-full bg-[#1D9E75] font-bold hover:opacity-90 text-black">+</button>
            <span className="text-gray-400 text-sm ml-4">Łącznie: {kmTotal} km</span>
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-5 mb-3">
          <h2 className="font-bold mb-3 text-[#639922]">🌙 Dopłaty</h2>
          <div className="space-y-2">
            {[
              { label: `👩 Kierowca kobieta (+${pricingConfig.surcharges.female_driver} zł/dzień)`, val: arabicWomen, set: (v: boolean) => { setArabicWomen(v); if(!v) setArabicFemaleDriver(false); } },
              { label: `🗣️ Arabski (+${pricingConfig.surcharges.arabic_driver} zł/dzień)`, val: arabicDriver, set: setArabicDriver },
              { label: `👑 Kobieta z arabskim PREMIUM (+${pricingConfig.surcharges.arabic_female_driver} zł/dzień)`, val: arabicFemaleDriver, set: setArabicFemaleDriver },
              { label: `🌙 Wyjazd nocny (+${pricingConfig.surcharges.night_surcharge} zł)`, val: nightSurcharge, set: setNightSurcharge },
            ].map((item, i) => (
              <label key={i} className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" checked={item.val} onChange={e => item.set(e.target.checked)} className="w-4 h-4 accent-[#1D9E75]" />
                <span className="text-sm">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-2xl p-5 mb-3">
          <h2 className="font-bold mb-3 text-[#639922]">💡 Dodatkowy zysk / rabat (zł)</h2>
          <input type="number" value={profit} onChange={e => setProfit(Number(e.target.value))}
            className="w-full p-3 bg-gray-700 rounded-xl outline-none border-2 border-gray-600 focus:border-[#639922]"
            placeholder="0 = standardowa cena, minus = rabat" />
        </div>

        <div className="bg-[#1a1a1a] border-2 border-[#639922] rounded-2xl p-6">
          <h2 className="font-bold text-lg mb-4 text-[#639922]">📊 Kalkulacja</h2>
          <div className="space-y-1 text-sm mb-4">
            <div className="flex justify-between"><span className="text-gray-400">⛽ Paliwo:</span><span>{fuel.toFixed(0)} zł</span></div>
            <div className="flex justify-between"><span className="text-gray-400">👤 Kierowca:</span><span>{driver.toFixed(0)} zł</span></div>
            <div className="flex justify-between"><span className="text-gray-400">🔧 Eksploatacja:</span><span>{eksploatacja.toFixed(0)} zł</span></div>
            <div className="flex justify-between text-gray-500"><span>= Koszty łącznie:</span><span>{koszty.toFixed(0)} zł</span></div>
            <div className="flex justify-between"><span className="text-gray-400">📊 Marża ({tier}):</span><span>{marginTotal.toFixed(0)} zł</span></div>
            {surcharges > 0 && <div className="flex justify-between"><span className="text-gray-400">⭐ Dopłaty:</span><span>{surcharges.toFixed(0)} zł</span></div>}
            {profit !== 0 && <div className="flex justify-between"><span className="text-gray-400">💡 Korekta:</span><span className={profit > 0 ? 'text-green-400' : 'text-red-400'}>{profit > 0 ? '+' : ''}{profit} zł</span></div>}
            <div className="border-t border-gray-700 pt-3 mt-2">
              <div className="flex justify-between text-base"><span>Netto:</span><span className="font-bold">{totalNetto.toFixed(2)} zł</span></div>
              <div className="flex justify-between text-2xl mt-1"><span className="text-[#639922]">Brutto:</span><span className="font-bold text-[#639922]">{totalBrutto.toFixed(2)} zł</span></div>
              <div className="flex justify-between text-sm text-gray-500 mt-1"><span>Zysk (marża+dopłaty):</span><span className="text-green-400">{(marginTotal + surcharges + profit).toFixed(0)} zł</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
