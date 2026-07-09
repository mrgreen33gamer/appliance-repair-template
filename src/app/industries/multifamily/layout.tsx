import type { Metadata } from "next";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = BASE_URL + '/industries/multifamily';

export const metadata: Metadata = {
  title: "Multifamily Housing Appliance Repair | FixFirst — Waco, TX",
  description: "Unit turns, common laundry, and resident appliance tickets — factory-trained techs who work clean in occupied communities.",
  alternates: { canonical: url },
  openGraph: {
    title: "Multifamily Housing Appliance Repair | FixFirst — Waco, TX",
    description: "Unit turns, common laundry, and resident appliance tickets — factory-trained techs who work clean in occupied communities.",
    url,
    siteName: "FixFirst Appliance Repair",
    locale: "en_US",
    type: "website",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
