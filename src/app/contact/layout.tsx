// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact FixFirst Appliance Repair | Schedule Service in Waco & Central Texas',
  description:
    'Contact FixFirst Appliance Repair to schedule appliance repair, panel upgrades, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 790-8800.',
  keywords: [
    'contact FixFirst Appliance Repair',
    'appliance service Waco TX',
    'schedule appliance repair Waco',
    'appliance estimate Central Texas',
    'FixFirst contact',
    '254-740-3300',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact FixFirst Appliance Repair | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Upfront pricing, 90-Day Repair Warranty, factory-trained techs.',
    url,
    siteName: 'FixFirst Appliance Repair',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact FixFirst Appliance Repair | Waco & Central Texas',
    description: 'Schedule appliance service or get a free estimate. Call (254) 790-8800.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
