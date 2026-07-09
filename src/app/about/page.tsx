// FixFirst Appliance Repair — About Page
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import SectionIntro    from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar        from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs     from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics   from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials    from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner       from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import AboutHero       from "#/PageComponents/AboutHero/AboutHero";
import AboutStory      from "#/PageComponents/AboutStory/AboutStory";

import {
  faTrophy, faChartLine, faClock,
  faHouseUser, faUsers, faLeaf,
  faClipboardCheck,
  faShieldHalved,
  faWrench,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {

  const whyFeatures = [
    {
      icon: faHouseUser,
      title: "Locally Owned Since 2010",
      description: "FixFirst was founded in Waco by Nadia Patel. We're not a franchise — every decision is made locally, every call is answered by someone who lives here.",
    },
    {
      icon: faUsers,
      title: "A Crew You Can Trust in Your Home",
      description: "Every technician on our team is background-checked, factory-trained, and bonded & insured. Shoe covers, clean workspace, no mess left behind.",
    },
    {
      icon: faLeaf,
      title: "Honest From the First Call",
      description: "We won't upsell a full appliance replacement when a solid repair will do. Our reputation is built on straight talk — and 16 years of repeat customers prove it works.",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 12000, label: "Appliance repairs across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rate",                     suffix: "%", duration: 2 },
    { icon: faClock,     value: 16,   label: "Years serving Central Texas families",           suffix: "+", duration: 2 },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — we'll confirm a service visit that fits your schedule.", icon: faClipboardCheck },
    { number: 2, title: "Diagnose Honestly", description: "A FixFirst specialist inspects the appliance and explains options in plain English — not just the most expensive package.", icon: faShieldHalved },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any order is placed. You decide — zero pressure to proceed.", icon: faWrench },
    { number: 4, title: "Repair & Warranty", description: "Factory-trained install, clean job site, 90-Day Repair Warranty.", icon: faCircleCheck },
  ];

  return (
    <main className={styles.pageWrapper}>

      <AboutHero cityName="Waco" />
      <AboutStory cityName="Waco" />

      <SectionIntro
        title="About FixFirst Appliance Repair"
        subtitle="Waco-owned, Waco-operated, and Waco-proud since 2010. We install energy-efficient windows and washers and dryers at fair prices for the families and businesses we've called neighbors for 16 years."
      />

      <TrustBar headline="3,500+ Central Texas installs — and we've earned every one" />

      <div className={styles.section}>
        <WhyChooseUs
          cityName="Waco"
          features={whyFeatures}
          title="Who We Are"
        />
      </div>

      <div className={styles.section}>
        <ImpactMetrics title="14 Years, By the Numbers" metrics={metrics} cityName="Waco" />
      </div>

      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>

      <div className={styles.section}>
        <Testimonials testimonials={reviews} />
      </div>

      <div className={styles.section}>
        <GuaranteeSection />
      </div>

      <CTABanner
        headline="Waco's Appliance Repair Company — Ready When You Need Us"
        subline="Same-day service available. Upfront pricing. 90-Day Repair Warranty. No contracts — ever."
        primaryText="Call Us Now"
        primaryLink="tel:+12547908800"
        secondaryText="Request Estimate Online"
        secondaryLink="/contact"
      />

    </main>
  );
}
