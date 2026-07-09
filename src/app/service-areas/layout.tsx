import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.fixfirstappliance.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Appliance Repair Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | FixFirst',
  description:
    'FixFirst Appliance Repair serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Upfront pricing, same-day service, 2-Year Workmanship Warranty.',
  keywords: [
    'appliance service areas Central Texas',
    'electrician Waco TX',
    'electrician Hewitt TX',
    'electrician Killeen TX',
    'electrician Temple TX',
    'FixFirst Appliance Repair service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Appliance Repair Service Areas | FixFirst Appliance Repair — Central Texas',
    description:
      'Serving Waco and all of Central Texas with upfront appliance repair, panel upgrades, and installation. Same-day service available.',
    url,
    siteName: 'FixFirst Appliance Repair',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Appliance Repair Service Areas | FixFirst Appliance Repair — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — factory-trained appliance service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
