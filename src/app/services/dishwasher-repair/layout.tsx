import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = BASE_URL + '/services/dishwasher-repair';

export const metadata: Metadata = {
  title: "Dishwasher Repair Waco TX | FixFirst Appliance Repair",
  description: "Dishwasher repair in Waco and Central Texas. Standing water, poor cleaning, drainage, and noise. Same-day service available, 90-Day Repair Warranty.",
  keywords: ["dishwasher repair Waco TX","dishwasher not draining","dishwasher not cleaning","Waco dishwasher service"],
  alternates: { canonical: url },
  openGraph: {
    title: "Dishwasher Repair Waco TX | FixFirst Appliance Repair",
    description: "Dishwasher repair in Waco and Central Texas. Standing water, poor cleaning, drainage, and noise. Same-day service available, 90-Day Repair Warranty.",
    url,
    siteName: "FixFirst Appliance Repair",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dishwasher Repair Waco TX | FixFirst Appliance Repair",
    description: "Dishwasher repair in Waco and Central Texas. Standing water, poor cleaning, drainage, and noise. Same-day service available, 90-Day Repair Warranty.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dishwasher Repair",
  description: "Dishwasher repair in Waco and Central Texas. Standing water, poor cleaning, drainage, and noise. Same-day service available, 90-Day Repair Warranty.",
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
  serviceType: "Dishwasher Repair",
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
