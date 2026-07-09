import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = BASE_URL + '/industries/hospitality';

export const metadata: Metadata = {
  title: "Hospitality & Restaurants Appliance Repair | FixFirst — Waco, TX",
  description: "Priority appliance support for restaurants, cafés, and hospitality operators — protect service hours with factory-trained techs.",
  alternates: { canonical: url },
  openGraph: {
    title: "Hospitality & Restaurants Appliance Repair | FixFirst — Waco, TX",
    description: "Priority appliance support for restaurants, cafés, and hospitality operators — protect service hours with factory-trained techs.",
    url,
    siteName: "FixFirst Appliance Repair",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
