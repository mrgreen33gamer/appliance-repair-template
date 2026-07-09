import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = BASE_URL + '/services/maintenance-plans';

export const metadata: Metadata = {
  title: "Maintenance Plans Waco TX | FixFirst Appliance Repair",
  description: "Appliance maintenance plans in Waco and Central Texas. Priority scheduling, seasonal checkups, and fewer emergency failures for homes and property managers.",
  keywords: ["appliance maintenance plan Waco","appliance service plan Central Texas","priority appliance repair Waco"],
  alternates: { canonical: url },
  openGraph: {
    title: "Maintenance Plans Waco TX | FixFirst Appliance Repair",
    description: "Appliance maintenance plans in Waco and Central Texas. Priority scheduling, seasonal checkups, and fewer emergency failures for homes and property managers.",
    url,
    siteName: "FixFirst Appliance Repair",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maintenance Plans Waco TX | FixFirst Appliance Repair",
    description: "Appliance maintenance plans in Waco and Central Texas. Priority scheduling, seasonal checkups, and fewer emergency failures for homes and property managers.",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Maintenance Plans",
  description: "Appliance maintenance plans in Waco and Central Texas. Priority scheduling, seasonal checkups, and fewer emergency failures for homes and property managers.",
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
  serviceType: "Maintenance Plans",
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
