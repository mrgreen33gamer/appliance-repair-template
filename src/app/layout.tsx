// src/app/layout.tsx
// FixFirst Appliance Repair — root layout
//
// MOBILE / SAFE-AREA FIX:
//   Added a Next.js 14+ `viewport` export with:
//     - viewportFit: 'cover'  → tells iOS to allow content (and bg color)
//                                behind the notch + home indicator. Without
//                                this, env(safe-area-inset-*) returns 0 and
//                                the rest of the safe-area CSS in globals.css
//                                does NOTHING — that's why you were seeing
//                                white bars on top and bottom on iPhone.
//     - themeColor: '#0d1b2a' → tints the iOS Safari URL bar / Android
//                                status bar to match the brand obsidian dark.
//                                Two values supplied so Safari can pick the
//                                right one for light vs dark mode.
//     - colorScheme: 'dark'   → tells the browser to render its own UI chrome
//                                (form pickers, scrollbars, etc.) in dark mode.
//
//   The actual safe-area padding rules live in globals.css, applied to
//   <header>, <footer>, and <body>. See that file for the full breakdown.
import type { Metadata, Viewport } from "next";
import { Syne, Outfit, Inter } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";

import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

// ── FONTS — uniqueness
const fontTitle = Syne({
  weight: ["400","500","600","700","800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Outfit({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});


const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction
  ? "https://www.fixfirstappliance.com"
  : "http://localhost:3000";

// ── VIEWPORT ──────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width:        "device-width",
  initialScale: 1,
  viewportFit:  "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f1419" },
    { media: "(prefers-color-scheme: dark)",  color: "#0f1419" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "FixFirst Appliance Repair | Same-Day Appliance Repair — Waco, TX",
    template: "%s | FixFirst Appliance Repair",
  },
  description:
    "FixFirst Appliance Repair is a Waco, TX appliance repair company offering refrigerator repair, washer & dryer repair, oven & range repair, dishwasher repair, microwave repair, and maintenance plans for Central Texas homes and businesses. Factory-trained techs, bonded & insured.",
  keywords: [
    "FixFirst Appliance Repair",
    "appliance repair Waco TX",
    "refrigerator repair Waco Texas",
    "washer dryer repair Central Texas",
    "oven range repair Waco",
    "dishwasher repair Waco TX",
    "same day appliance repair Waco",
    "microwave repair Hewitt TX",
    "appliance repair Temple TX",
    "appliance repair Killeen",
  ],
  authors: [{ name: "FixFirst Appliance Repair", url: BASE_URL }],
  creator: "FixFirst Appliance Repair",
  publisher: "FixFirst Appliance Repair",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "FixFirst Appliance Repair | Same-Day Appliance Repair — Waco, TX",
    description:
      "Waco-based appliance repair company for refrigerator, washer/dryer, oven, dishwasher, and microwave repair across Central Texas. Factory-trained & insured.",
    url: BASE_URL,
    siteName: "FixFirst Appliance Repair",
    images: [
      {
        url: `${BASE_URL}/logos/scott-apps-banner.png?v=1`,
        width: 1200,
        height: 630,
        alt: "FixFirst Appliance Repair — Waco TX Appliance Repair",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FixFirst Appliance Repair | Waco TX Appliance Repair",
    description:
      "Same-day appliance repair for all major brands in Central Texas. Factory-trained techs — bonded & insured.",
    images: [`${BASE_URL}/logos/scott-apps-banner.png?v=1`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${BASE_URL}/#organization`,
  name: "FixFirst Appliance Repair",
  alternateName: "FixFirst Appliance Repair Waco",
  description:
    "Residential and commercial appliance services in Waco and Central Texas — refrigerator, washer & dryer, oven & range, dishwasher, microwave repair, and maintenance plans. Factory-trained techs, bonded & insured, 90-Day Repair Warranty · Upfront Pricing.",
  url: BASE_URL,
  telephone: "+12547908800",
  email: "hello@fixfirstappliance.com",
  foundingDate: "2010",
  founder: {
    "@type": "Person",
    name: "Nadia Patel",
    jobTitle: "Owner & Lead Technician",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2412 Franklin Ave",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76701",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5493,
    longitude: -97.1469,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    { "@type": "City", name: "Waco",        containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Hewitt",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Woodway",      containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Bellmead",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "China Spring", containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "McGregor",     containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Temple",       containedInPlace: { "@type": "State", name: "Texas" } },
    { "@type": "City", name: "Killeen",      containedInPlace: { "@type": "State", name: "Texas" } },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Appliance Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Refrigerator Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Washer & Dryer Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oven & Range Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dishwasher Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Microwave Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maintenance Plans" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue,
    reviewCount: String(reviewCount),
    bestRating: "5",
    worstRating: "1",
  },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: [
    "https://www.facebook.com/fixfirstappliance",
    "https://www.google.com/maps/?cid=placeholder",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <ConditionalShell>
          <Header />
        </ConditionalShell>

        <NextTopLoader color="#f43f5e" showSpinner={false} />

        <Suspense fallback={null}>
          <Analytics />
        </Suspense>

        <MapProvider>
          <Suspense
            fallback={
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "100vh",
                  background: "#0f1419",
                }}
              >
                <PulseLoader size={50} color="#f43f5e" />
              </div>
            }
          >
            <JourneyTrackerProvider>
              {children}
            </JourneyTrackerProvider>
          </Suspense>
        </MapProvider>

        <ToastifyComponent />

        <Suspense fallback={null}>
          <CookieBanner />
        </Suspense>

        <ConditionalShell>
          <Footer />
        </ConditionalShell>
      </body>
    </html>
  );
}
