import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = BASE_URL + '/services/refrigerator-repair';

export const metadata: Metadata = {
  title: "Refrigerator Repair Waco TX | FixFirst Appliance Repair",
  description: "Refrigerator repair in Waco and Central Texas. Same-day service for not cooling, ice makers, leaks, and noise. Factory-trained techs, 90-Day Repair Warranty, upfront pricing.",
  keywords: ["refrigerator repair Waco TX","fridge not cooling Waco","ice maker repair Central Texas","same day fridge repair Waco"],
  alternates: { canonical: url },
  openGraph: {
    title: "Refrigerator Repair Waco TX | FixFirst Appliance Repair",
    description: "Refrigerator repair in Waco and Central Texas. Same-day service for not cooling, ice makers, leaks, and noise. Factory-trained techs, 90-Day Repair Warranty, upfront pricing.",
    url,
    siteName: "FixFirst Appliance Repair",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Refrigerator Repair Waco TX | FixFirst Appliance Repair",
    description: "Refrigerator repair in Waco and Central Texas. Same-day service for not cooling, ice makers, leaks, and noise. Factory-trained techs, 90-Day Repair Warranty, upfront pricing.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Refrigerator Repair",
  description: "Refrigerator repair in Waco and Central Texas. Same-day service for not cooling, ice makers, leaks, and noise. Factory-trained techs, 90-Day Repair Warranty, upfront pricing.",
  provider: {
    "@type": "LocalBusiness",
    name: "FixFirst Appliance Repair",
    url: BASE_URL,
    telephone: "+12547908800",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2412 Franklin Ave",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76701",
      addressCountry: "US",
    },
  },
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
  serviceType: "Refrigerator Repair",
  url,
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {children}
    </>
  );
}
