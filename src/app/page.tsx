// FixFirst Appliance Repair — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faSnowflake, faShirt, faFireBurner, faSink, faMicrochip, faClipboardList,
  faTrophy, faChartLine, faClock,
  faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faClipboardCheck, faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {

  const services = [
    {
      icon: faSnowflake,
      title: "Refrigerator Repair",
      body: "Not cooling, ice maker failures, leaks, and noisy compressors — same-day fridge repair for all major brands.",
      link: "/services/refrigerator-repair",
    },
    {
      icon: faShirt,
      title: "Washer & Dryer Repair",
      body: "No spin, no heat, leaks, and error codes. We fix front-load and top-load laundry pairs fast.",
      link: "/services/washer-dryer-repair",
    },
    {
      icon: faFireBurner,
      title: "Oven & Range Repair",
      body: "Gas and electric ovens and ranges that will not heat, ignite, or hold temperature.",
      link: "/services/oven-range-repair",
    },
    {
      icon: faSink,
      title: "Dishwasher Repair",
      body: "Standing water, poor wash quality, drainage issues, and loud pumps — restored clean results.",
      link: "/services/dishwasher-repair",
    },
    {
      icon: faMicrochip,
      title: "Microwave Repair",
      body: "No heat, turntable problems, and built-in / over-the-range microwave service.",
      link: "/services/microwave-repair",
    },
    {
      icon: faClipboardList,
      title: "Maintenance Plans",
      body: "Priority scheduling and seasonal checkups that reduce emergency breakdowns.",
      link: "/services/maintenance-plans",
    },
  ];

  const metrics = [
    { icon: faTrophy,    value: 12000, label: "Appliance repairs across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 16,    label: "Years of local repair experience",       suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,    label: "Customer satisfaction rating",           suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    {
      icon: faClipboardCheck,
      title: "Upfront Written Pricing",
      description: "You get a firm price after diagnosis. No hourly surprises after the tech leaves.",
    },
    {
      icon: faShieldHalved,
      title: "Factory-Trained Techs",
      description: "Every technician is factory-trained, bonded, and insured. All major brands welcomed.",
    },
    {
      icon: faUsers,
      title: "Locally Owned Since 2010",
      description: "We're not a franchise. FixFirst was founded in Waco by Nadia Patel. Every decision is made locally.",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Call or Book Online",
      description: "Phone, text, or the form below — your choice. We'll schedule a visit that fits your schedule.",
      icon: faHeadset,
    },
    {
      number: 2,
      title: "Diagnose On-Site",
      description: "A FixFirst tech inspects the appliance and explains the issue in plain English.",
      icon: faSearch,
    },
    {
      number: 3,
      title: "Approve Upfront Price",
      description: "Written repair price before work begins. You decide — zero pressure.",
      icon: faFileContract,
    },
    {
      number: 4,
      title: "Repair & Warranty",
      description: "We complete the repair, test the appliance, and back it with a 90-Day Repair Warranty.",
      icon: faCheckCircle,
    },
  ];

  const expectations = [
    { icon: faSearch, title: "Clear Guidance First", description: "We explain repair vs replace in plain English — not just the most expensive option." },
    { icon: faCheckCircle, title: "Upfront Pricing", description: "No vague estimates. You approve the price before we install parts." },
    { icon: faShieldHalved, title: "Factory-Trained Techs", description: "Bonded and insured on every job." },
    { icon: faClock, title: "Same-Day Service Available", description: "Most residential calls can be scheduled same-day when routing allows." },
  ];

  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest scheduling and most available techs.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Full residential coverage.", badge: "" },
    { town: "Woodway", benefit: "Regular availability for homes and light commercial.", badge: "" },
    { town: "Temple", benefit: "Regular service area — quick turnaround.", badge: "" },
    { town: "Killeen", benefit: "Full coverage for Killeen and Fort Cavazos area.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage with fair trip policies.", badge: "" },
  ];

  const faq = [
    { question: "How much does appliance repair cost in Waco?", answer: "Most residential repairs run $95–$450 depending on the appliance and parts. We always provide upfront written pricing after diagnosis." },
    { question: "Do you offer same-day service?", answer: "Yes — same-day service is available most days for Waco and nearby cities. Call (254) 790-8800." },
    { question: "What brands do you repair?", answer: "All major brands including Whirlpool, GE, Samsung, LG, Maytag, Bosch, KitchenAid, Frigidaire, and more." },
    { question: "What areas do you serve?", answer: "Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Temple, Killeen, and most of Central Texas within about 60 miles of Waco." },
    { question: "Do you offer a warranty?", answer: "Yes — a 90-Day Repair Warranty on completed repair parts and labor." },
    { question: "How do I book a repair?", answer: "Call, text, or fill out our online form. We'll schedule a visit and provide upfront pricing before any work starts." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="12,000+ repairs · 4.9★ from 1,500+ reviews · Bonded & insured" />
      <div className={styles.section}>
        <ServiceCardComponent
          heading="Appliance Repair Services"
          subheading="Refrigerators, laundry, cooking, dishwashing, and maintenance — one local team."
          cards={services}
        />
      </div>
      <div className={styles.section}><WhatToExpect expectations={expectations} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} /></div>
      <div className={styles.section}><BlogPreviewGrid /></div>
      <CTABanner
        headline="Need Appliance Repair Today?"
        subline="Same-day service available. Upfront pricing. Factory-trained techs. Call (254) 790-8800."
        primaryText="Call (254) 790-8800"
        primaryLink="tel:+12547908800"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request Service" cityName="Waco" slug="home" spot="home-form" formVariant={1} />
      </div>
    </main>
  );
}
