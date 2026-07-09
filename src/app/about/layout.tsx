import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';

export const metadata: Metadata = {
  title: "About FixFirst Appliance Repair | Waco TX Since 2010",
  description: "FixFirst Appliance Repair is a Waco-owned appliance repair company founded in 2010 by Nadia Patel. Factory-trained techs, bonded & insured, 12,000+ repairs.",
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    title: "About FixFirst Appliance Repair | Waco TX",
    description: "Locally owned since 2010. Factory-trained appliance technicians serving Central Texas.",
    url: `${BASE_URL}/about`,
    siteName: "FixFirst Appliance Repair",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
