import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import Script from "next/script";
import CookieBanner from "@/components/CookieBanner";
import { StickyCallButton } from "@/components/StickyCallButton";
import { CookieConsentProvider } from "@/lib/cookie-consent";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext", "cyrillic"],
  display: "swap",
});
const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Wynajem Autokar Kielce | Busy i Autokary",
  description: "Profesjonalny wynajem autokarów w Kielcach. Zadzwoń: +48 601 076 652",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="pl" className={`${inter.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <Script id="consent-mode-v2" strategy="beforeInteractive">
          {`(function () {
  var gaId = ${JSON.stringify(gaId ?? "")};
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){window.dataLayer.push(arguments);};

  if (gaId) {
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
      functionality_storage: 'denied',
      security_storage: 'granted',
      wait_for_update: 500
    });
  }
})();`}
        </Script>
      </head>
      <body className="min-h-full bg-white text-[#1a1a1a]">
        <CookieConsentProvider>
          {children}
          <StickyCallButton />
          <CookieBanner />
        </CookieConsentProvider>
      </body>
    </html>
  );
}

