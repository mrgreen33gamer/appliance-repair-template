import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = BASE_URL + '/blogs/same-day-appliance-repair-waco';

export const metadata: Metadata = {
  title: "How Same-Day Appliance Repair Works in Waco, TX",
  description: "What to expect from a same-day service call — diagnostics, parts, upfront pricing, and how FixFirst keeps most repairs done in one visit.",
  alternates: { canonical: url },
  openGraph: {
    title: "How Same-Day Appliance Repair Works in Waco, TX",
    description: "What to expect from a same-day service call — diagnostics, parts, upfront pricing, and how FixFirst keeps most repairs done in one visit.",
    url,
    siteName: "FixFirst Appliance Repair",
    type: "article",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
