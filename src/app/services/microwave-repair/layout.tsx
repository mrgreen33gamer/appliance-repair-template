import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = BASE_URL + '/services/microwave-repair';

export const metadata: Metadata = {
  title: "Microwave Repair Waco TX | FixFirst Appliance Repair",
  description: "Microwave repair in Waco and Central Texas. No heat, turntable issues, and built-in microwave service. Factory-trained techs, upfront pricing.",
  keywords: ["microwave repair Waco TX","built-in microwave repair","microwave not heating Waco","over-the-range microwave repair"],
  alternates: { canonical: url },
  openGraph: {
    title: "Microwave Repair Waco TX | FixFirst Appliance Repair",
    description: "Microwave repair in Waco and Central Texas. No heat, turntable issues, and built-in microwave service. Factory-trained techs, upfront pricing.",
    url,
    siteName: "FixFirst Appliance Repair",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microwave Repair Waco TX | FixFirst Appliance Repair",
    description: "Microwave repair in Waco and Central Texas. No heat, turntable issues, and built-in microwave service. Factory-trained techs, upfront pricing.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Microwave Repair",
  description: "Microwave repair in Waco and Central Texas. No heat, turntable issues, and built-in microwave service. Factory-trained techs, upfront pricing.",
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
  serviceType: "Microwave Repair",
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
