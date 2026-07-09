import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = BASE_URL + '/services/washer-dryer-repair';

export const metadata: Metadata = {
  title: "Washer & Dryer Repair Waco TX | FixFirst Appliance Repair",
  description: "Washer and dryer repair in Waco and Central Texas. No spin, no heat, leaks, and error codes. Same-day service, factory-trained techs, 90-Day Repair Warranty.",
  keywords: ["washer repair Waco TX","dryer repair Waco","washer not spinning","dryer no heat Central Texas"],
  alternates: { canonical: url },
  openGraph: {
    title: "Washer & Dryer Repair Waco TX | FixFirst Appliance Repair",
    description: "Washer and dryer repair in Waco and Central Texas. No spin, no heat, leaks, and error codes. Same-day service, factory-trained techs, 90-Day Repair Warranty.",
    url,
    siteName: "FixFirst Appliance Repair",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Washer & Dryer Repair Waco TX | FixFirst Appliance Repair",
    description: "Washer and dryer repair in Waco and Central Texas. No spin, no heat, leaks, and error codes. Same-day service, factory-trained techs, 90-Day Repair Warranty.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Washer & Dryer Repair",
  description: "Washer and dryer repair in Waco and Central Texas. No spin, no heat, leaks, and error codes. Same-day service, factory-trained techs, 90-Day Repair Warranty.",
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
  serviceType: "Washer & Dryer Repair",
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
