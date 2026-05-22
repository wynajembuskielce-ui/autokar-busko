'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import translations from '@/data/cookie-translations.json';
import { useCookieConsent } from '@/lib/cookie-consent';

type SupportedLang = 'pl' | 'en' | 'de' | 'ru' | 'ar' | 'es' | 'fr';

type TranslationSet = {
  title: string;
  description: string;
  acceptAll: string;
  rejectAll: string;
  settings: string;
  saveSettings: string;
  modalTitle: string;
  modalDescription: string;
  necessaryTitle: string;
  necessaryDescription: string;
  analyticsTitle: string;
  analyticsDescription: string;
  functionalTitle: string;
  functionalDescription: string;
  privacy: string;
  cookies: string;
  cookieSettings: string;
};

const i18n = translations as Record<SupportedLang, TranslationSet>;
const FALLBACK_LANG: SupportedLang = 'en';

function resolveLang(routeLang: string | string[] | undefined): SupportedLang {
  const lang = (Array.isArray(routeLang) ? routeLang[0] : routeLang) as SupportedLang | undefined;
  if (!lang) return 'pl';
  if (lang === 'pl' || lang === 'en' || lang === 'de') return lang;
  return FALLBACK_LANG;
}

export default function CookieBanner() {
  const params = useParams<{ lang?: string | string[] }>();
  const lang = resolveLang(params?.lang);
  const text = i18n[lang] ?? i18n[FALLBACK_LANG];

  const { consent, acceptAll, rejectAll, savePreferences } = useCookieConsent();
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [functionalEnabled, setFunctionalEnabled] = useState(false);

  useEffect(() => {
    if (!settingsOpen) return;
    setAnalyticsEnabled(consent?.analytics ?? false);
    setFunctionalEnabled(consent?.functional ?? false);
  }, [consent?.analytics, consent?.functional, settingsOpen]);

  const shouldShowBanner = useMemo(() => consent === null, [consent]);

  if (!shouldShowBanner && !settingsOpen) {
    return null;
  }

  return (
    <>
      {shouldShowBanner ? (
        <div className="fixed inset-x-0 bottom-0 z-[120] border-t border-gray-200 bg-white/95 p-4 shadow-2xl backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-lg font-bold text-[#1a1a1a]">{text.title}</h2>
              <p className="text-sm text-gray-700">{text.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-600">
                <Link href="/polityka-prywatnosci" className="underline transition-colors hover:text-[#f59e0b]">
                  {text.privacy}
                </Link>
                <Link href="/polityka-cookies" className="underline transition-colors hover:text-[#f59e0b]">
                  {text.cookies}
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setSettingsOpen(true)}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-100"
              >
                {text.settings}
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-100"
              >
                {text.rejectAll}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="rounded-lg bg-[#1a1a1a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-black"
              >
                {text.acceptAll}
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {settingsOpen ? (
        <div className="fixed inset-0 z-[130] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-2xl">
            <div className="space-y-2">
              <h3 className="text-xl font-black text-[#1a1a1a]">{text.modalTitle}</h3>
              <p className="text-sm text-gray-700">{text.modalDescription}</p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border border-gray-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">{text.necessaryTitle}</p>
                    <p className="text-sm text-gray-600">{text.necessaryDescription}</p>
                  </div>
                  <input type="checkbox" checked disabled className="mt-1 h-5 w-5 accent-[#f59e0b]" />
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">{text.analyticsTitle}</p>
                    <p className="text-sm text-gray-600">{text.analyticsDescription}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                    className="mt-1 h-5 w-5 accent-[#f59e0b]"
                  />
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-[#1a1a1a]">{text.functionalTitle}</p>
                    <p className="text-sm text-gray-600">{text.functionalDescription}</p>
                  </div>
                  <input
                    type="checkbox"
                    checked={functionalEnabled}
                    onChange={(event) => setFunctionalEnabled(event.target.checked)}
                    className="mt-1 h-5 w-5 accent-[#f59e0b]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  rejectAll();
                  setSettingsOpen(false);
                }}
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-gray-100"
              >
                {text.rejectAll}
              </button>
              <button
                type="button"
                onClick={() => {
                  savePreferences({ analytics: analyticsEnabled, functional: functionalEnabled });
                  setSettingsOpen(false);
                }}
                className="rounded-lg bg-[#1a1a1a] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-black"
              >
                {text.saveSettings}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
