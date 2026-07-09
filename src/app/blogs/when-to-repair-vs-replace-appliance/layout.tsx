import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = BASE_URL + '/blogs/when-to-repair-vs-replace-appliance';

export const metadata: Metadata = {
  title: "When to Repair vs Replace an Appliance in Central Texas",
  description: "Age, repair cost, energy use, and safety all matter. A practical framework for washers, dryers, fridges, ovens, and dishwashers.",
  alternates: { canonical: url },
  openGraph: {
    title: "When to Repair vs Replace an Appliance in Central Texas",
    description: "Age, repair cost, energy use, and safety all matter. A practical framework for washers, dryers, fridges, ovens, and dishwashers.",
    url,
    siteName: "FixFirst Appliance Repair",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
