import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – FixFirst Appliance Repair",
  description: "How we collect, use, and protect your information at FixFirst Appliance Repair in Waco, TX.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}