import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';

export const metadata: Metadata = {
  title: "Industries We Serve | Property Management, Property Management & Storefronts",
  description: "FixFirst Appliance Repair serves homebuilders, property management companies, and commercial storefronts across Central Texas with factory-trained appliance installs.",
  alternates: { canonical: `${BASE_URL}/industries` },
  openGraph: {
    title: "Industries We Serve | FixFirst Appliance Repair",
    description: "Window and door programs for builders, property managers, and commercial storefronts.",
    url: `${BASE_URL}/industries`,
    siteName: "FixFirst Appliance Repair",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
