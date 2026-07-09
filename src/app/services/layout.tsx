import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';

export const metadata: Metadata = {
  title: "Appliance Repair Services Waco TX | Replacement, Repair & Upgrades",
  description: "Window replacement, washers and dryers, ovens and ranges, dishwashers, repairs, and maintenance plans in Waco and Central Texas. Factory-trained techs, free measurements.",
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    title: "Appliance Repair Services | FixFirst Appliance Repair",
    description: "Full appliance services for Central Texas homes and businesses.",
    url: `${BASE_URL}/services`,
    siteName: "FixFirst Appliance Repair",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
