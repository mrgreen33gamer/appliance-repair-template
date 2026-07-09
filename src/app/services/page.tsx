// FixFirst Appliance Repair — Services Overview
"use client";

import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import Variant2            from "#/PageComponents/ContactForms/Variant2/Form";

import {
  faSnowflake, faShirt, faFireBurner, faSink, faMicrochip, faClipboardList,
  faTrophy, faChartLine, faClock,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faLock, faRotateLeft, faTag, faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {

  const services = [
    { icon: faSnowflake, title: "Refrigerator Repair", body: "Not cooling, ice makers, leaks, and sealed-system issues for all major fridge brands.", link: "/services/refrigerator-repair" },
    { icon: faShirt, title: "Washer & Dryer Repair", body: "No spin, no heat, leaks, and error codes on front-load and top-load pairs.", link: "/services/washer-dryer-repair" },
    { icon: faFireBurner, title: "Oven & Range Repair", body: "Gas and electric ovens and ranges — heat, ignition, and control repairs.", link: "/services/oven-range-repair" },
    { icon: faSink, title: "Dishwasher Repair", body: "Standing water, poor cleaning, drainage, and pump failures.", link: "/services/dishwasher-repair" },
    { icon: faMicrochip, title: "Microwave Repair", body: "No heat, turntable, and built-in / over-the-range microwave service.", link: "/services/microwave-repair" },
    { icon: faClipboardList, title: "Maintenance Plans", body: "Priority scheduling and seasonal checkups that reduce emergency breakdowns.", link: "/services/maintenance-plans" },
  ];

  const expectations = [
    { icon: faSearch, title: "Clear Guidance First", description: "We explain options in plain English — repair vs replace — not just the most expensive path." },
    { icon: faCheckCircle, title: "Upfront, Written Pricing", description: "No vague estimates. You approve the price before we install parts." },
    { icon: faShieldHalved, title: "Factory-Trained Techs", description: "Every technician is factory-trained. Bonded and insured on every job." },
    { icon: faTag, title: "90-Day Repair Warranty · Upfront Pricing", description: "Completed repairs are backed for 90 days on parts and labor." },
  ];

  const metrics = [
    { icon: faTrophy, value: 12000, label: "Appliance repairs since 2010", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 16, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faHeadset, title: "A Real Person Answers", description: "Call or text and reach a real FixFirst team member — not a call center. Same-day slots most days." },
    { icon: faShieldHalved, title: "No Long-Term Contracts", description: "There's no subscription required to get great service. You hire us because the work is done right." },
    { icon: faLock, title: "Bonded & Insured", description: "Factory-trained and fully insured. Proof of insurance available on request for PMs and commercial clients." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book", description: "Phone, text, or online form. We'll schedule a service visit.", icon: faHeadset },
    { number: 2, title: "Diagnose On-Site", description: "Factory-trained tech inspects the appliance and explains options in plain English.", icon: faSearch },
    { number: 3, title: "Upfront Quote", description: "Written price before any repair. You decide — zero pressure.", icon: faFileContract },
    { number: 4, title: "Repair & Warranty", description: "We fix it, test it, and back it with a 90-Day Repair Warranty.", icon: faCheckCircle },
  ];

  const guarantees = [
    { icon: faTag, title: "Upfront Pricing, Always", description: "The written price you approve is the price you pay." },
    { icon: faShieldHalved, title: "90-Day Repair Warranty", description: "Every completed repair is backed for 90 days. If our workmanship fails, we make it right." },
    { icon: faRotateLeft, title: "Satisfaction Guarantee", description: "Not happy with the result? We'll return to make it right." },
    { icon: faLock, title: "Factory-Trained · Bonded & Insured", description: "Documentation available on request." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available techs.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for homes and light commercial.", badge: "" },
    { town: "Temple", benefit: "Regular service area — quick turnaround.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with fair trip policies.", badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront, written pricing", us: "✅ Always", others: "❌ Vague estimates" },
    { feature: "90-Day Repair Warranty", us: "✅ Every repair", others: "❌ Rare or none" },
    { feature: "Factory-trained technicians", us: "✅ All techs", others: "❌ Not always" },
    { feature: "No long-term contracts required", us: "✅ Always", others: "❌ Sometimes required" },
    { feature: "Same-day service available", us: "✅ Yes", others: "❌ Multi-day waits" },
  ];

  const faq = [
    { question: "How much does appliance repair cost in Waco?", answer: "Most residential repairs run $95–$450 depending on appliance and parts. We always provide upfront written pricing after diagnosis." },
    { question: "Are your technicians factory-trained?", answer: "Yes — FixFirst Appliance Repair uses factory-trained techs who are bonded and insured." },
    { question: "Do you offer free estimates?", answer: "We diagnose on-site and provide upfront repair pricing before work begins. Call (254) 790-8800." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — a 90-Day Repair Warranty on completed repair parts and labor." },
    { question: "How do I book a repair?", answer: "Call, text, or fill out our online form. We'll schedule a visit and provide written pricing before any work starts." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <SectionIntro
        title="Appliance Repair Services in Waco, TX"
        subtitle="Refrigerators, laundry, cooking, dishwashing, microwaves, and maintenance plans — factory-trained techs, upfront pricing, 90-Day Repair Warranty."
      />
      <TrustBar headline="12,000+ repairs · 4.9★ from 1,500+ reviews · Bonded & insured" />
      <div className={styles.section}><ServiceCardComponent heading="Our Services" subheading="Everything your home needs to keep major appliances running." cards={services} /></div>
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection guarantees={guarantees} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} /></div>
      <CTABanner
        headline="Ready to Book a Repair?"
        subline="Upfront pricing. Factory-trained techs. Call (254) 790-8800."
        primaryText="Call (254) 790-8800"
        primaryLink="tel:+12547908800"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant2 title="Request Service" cityName="Waco" slug="services" spot="services-index-form" formVariant={1} />
      </div>
    </main>
  );
}
