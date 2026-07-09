import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = BASE_URL + '/industries/property-management';

export const metadata: Metadata = {
  title: "Property Management Appliance Repair | FixFirst — Waco, TX",
  description: "Make-ready support, tenant work orders, and documented appliance repairs for managed portfolios across Central Texas.",
  alternates: { canonical: url },
  openGraph: {
    title: "Property Management Appliance Repair | FixFirst — Waco, TX",
    description: "Make-ready support, tenant work orders, and documented appliance repairs for managed portfolios across Central Texas.",
    url,
    siteName: "FixFirst Appliance Repair",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
