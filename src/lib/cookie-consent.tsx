'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

type ConsentState = {
  analytics: boolean;
  functional: boolean;
};

type CookieConsentContextValue = {
  consent: ConsentState | null;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (nextConsent: ConsentState) => void;
  resetConsent: () => void;
};

type StoredConsent = ConsentState & {
  decidedAt: string;
};

const STORAGE_KEY = 'cookie-consent-v1';
const DENIED_CONSENT: ConsentState = { analytics: false, functional: false };
const ALLOWED_CONSENT: ConsentState = { analytics: true, functional: true };

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined);

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaLoaded?: boolean;
    __tawkLoaded?: boolean;
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };
}

function applyGtagConsent(consent: ConsentState) {
  ensureGtag();
  window.gtag?.('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: consent.analytics ? 'granted' : 'denied',
    functionality_storage: consent.functional ? 'granted' : 'denied',
    security_storage: 'granted',
  });
}

function loadGaIfNeeded() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId || window.__gaLoaded) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`;
  script.id = 'ga4-script';
  document.head.appendChild(script);

  ensureGtag();
  window.gtag?.('js', new Date());
  window.gtag?.('config', gaId);
  window.__gaLoaded = true;
}

function clearCookiesByPrefix(prefix: string) {
  const host = window.location.hostname;
  const domains = [host, `.${host}`];
  const parts = host.split('.');
  if (parts.length > 2) {
    const base = parts.slice(-2).join('.');
    domains.push(base, `.${base}`);
  }

  const cookies = document.cookie
    .split(';')
    .map((part) => part.trim())
    .filter(Boolean)
    .map((part) => part.split('=')[0]);

  cookies
    .filter((cookieName) => cookieName === prefix || cookieName.startsWith(`${prefix}_`))
    .forEach((cookieName) => {
      document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
      domains.forEach((domain) => {
        document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
      });
    });
}

function clearAnalyticsCookies() {
  clearCookiesByPrefix('_ga');
  clearCookiesByPrefix('_gid');
  clearCookiesByPrefix('_gat');
}

function clearFunctionalCookies() {
  clearCookiesByPrefix('__tawkuuid');
  clearCookiesByPrefix('TawkConnectionTime');
}

function loadTawkIfNeeded() {
  const propertyId = process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID ?? '69e93b2e47b9821c343cb65c';
  const widgetId = process.env.NEXT_PUBLIC_TAWK_WIDGET_ID ?? '1jmrguc2j';

  if (window.__tawkLoaded) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`;
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');
  script.id = 'tawk-script';
  document.head.appendChild(script);

  window.__tawkLoaded = true;
}

function unloadTawk() {
  const existingScript = document.getElementById('tawk-script');
  if (existingScript?.parentNode) {
    existingScript.parentNode.removeChild(existingScript);
  }
  window.__tawkLoaded = false;
  window.Tawk_API = undefined;
  clearFunctionalCookies();
}

function persistConsent(consent: ConsentState) {
  const payload: StoredConsent = { ...consent, decidedAt: new Date().toISOString() };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function readStoredConsent(): ConsentState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredConsent>;
    if (typeof parsed.analytics !== 'boolean' || typeof parsed.functional !== 'boolean') return null;
    return { analytics: parsed.analytics, functional: parsed.functional };
  } catch {
    return null;
  }
}

function applyConsentSideEffects(consent: ConsentState) {
  applyGtagConsent(consent);

  if (consent.analytics) {
    loadGaIfNeeded();
  } else {
    clearAnalyticsCookies();
  }

  if (consent.functional) {
    loadTawkIfNeeded();
  } else {
    unloadTawk();
  }
}

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    const stored = readStoredConsent();
    if (stored) {
      setConsent(stored);
      applyConsentSideEffects(stored);
      return;
    }

    applyConsentSideEffects(DENIED_CONSENT);
  }, []);

  const savePreferences = useCallback((nextConsent: ConsentState) => {
    setConsent(nextConsent);
    persistConsent(nextConsent);
    applyConsentSideEffects(nextConsent);
  }, []);

  const acceptAll = useCallback(() => {
    savePreferences(ALLOWED_CONSENT);
  }, [savePreferences]);

  const rejectAll = useCallback(() => {
    savePreferences(DENIED_CONSENT);
  }, [savePreferences]);

  const resetConsent = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setConsent(null);
    applyConsentSideEffects(DENIED_CONSENT);
  }, []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({ consent, acceptAll, rejectAll, savePreferences, resetConsent }),
    [acceptAll, consent, rejectAll, resetConsent, savePreferences]
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
}
