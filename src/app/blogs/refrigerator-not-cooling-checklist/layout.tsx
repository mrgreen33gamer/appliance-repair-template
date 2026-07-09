import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = BASE_URL + '/blogs/refrigerator-not-cooling-checklist';

export const metadata: Metadata = {
  title: "Refrigerator Not Cooling? A Homeowner Checklist Before You Call",
  description: "Warm fridge, frozen freezer, or weak cooling? Run through these quick checks — then know when it is time for a FixFirst technician in Waco.",
  alternates: { canonical: url },
  openGraph: {
    title: "Refrigerator Not Cooling? A Homeowner Checklist Before You Call",
    description: "Warm fridge, frozen freezer, or weak cooling? Run through these quick checks — then know when it is time for a FixFirst technician in Waco.",
    url,
    siteName: "FixFirst Appliance Repair",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
