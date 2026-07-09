// FixFirst Appliance Repair — Washer & Dryer Repair Service Page
"use client";

import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';

import Breadcrumb          from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro        from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar            from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect        from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs         from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline     from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics       from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials        from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection    from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas   from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison     from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ                 from "#/PageComponents/FAQ/FAQ";
import CTABanner           from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4            from "#/PageComponents/ContactForms/Variant4/Form";

import {
  faSearch, faCheckCircle, faClock, faShieldHalved,
  faHeadset, faFileContract, faWrench, faTrophy, faChartLine,
  faSnowflake, faShirt, faFireBurner, faSink, faMicrochip, faClipboardList,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicePage() {

  const expectations = [
    { icon: faSearch, title: "Honest Diagnosis First", description: "We inspect the appliance, explain the failure in plain English, and tell you repair vs replace options before any work starts." },
    { icon: faFileContract, title: "Upfront Written Pricing", description: "Parts and labor are quoted before we proceed. No surprise invoices after the tech leaves." },
    { icon: faCheckCircle, title: "OEM-Quality Parts", description: "We use manufacturer-grade parts when available so the repair lasts." },
    { icon: faShieldHalved, title: "90-Day Repair Warranty", description: "Completed repairs are backed by our 90-Day Repair Warranty on parts and labor." },
  ];

  const whyFeatures = [
    { icon: faClock, title: "Same-Day When Possible", description: "Most washer & dryer repair calls in Waco can be scheduled same-day when parts and routing allow." },
    { icon: faWrench, title: "All Major Brands", description: "Whirlpool, GE, Samsung, LG, Maytag, Bosch, KitchenAid, Frigidaire, and more." },
    { icon: faShieldHalved, title: "Bonded & Insured Techs", description: "Factory-trained technicians with full insurance documentation on request." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Tell us the brand, model if available, and symptoms. We schedule a visit that fits your day.", icon: faHeadset },
    { number: 2, title: "On-Site Diagnosis", description: "A FixFirst tech inspects the unit and gives upfront pricing before repair work begins.", icon: faSearch },
    { number: 3, title: "Repair & Test", description: "Approved repairs are completed and the appliance is tested under load.", icon: faFileContract },
    { number: 4, title: "Warranty Walkthrough", description: "We explain what was fixed and what the 90-day warranty covers.", icon: faCheckCircle },
  ];

  const metrics = [
    { icon: faTrophy, value: 12000, label: "Appliance repairs across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction on repairs", suffix: "%", duration: 2 },
    { icon: faClock, value: 16, label: "Years repairing appliances locally", suffix: "+", duration: 2 },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling for washer & dryer repair.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full coverage throughout Hewitt.",                     badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes.",              badge: "" },
    { town: "Temple",       benefit: "Bell County coverage — quick dispatch.",               badge: "" },
    { town: "China Spring", benefit: "Rural coverage with fair trip policies.",              badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area.",     badge: "" },
  ];

  const comparisonRows = [
    { feature: "Upfront written pricing before repair", us: "✅ Always", others: "❌ Often vague" },
    { feature: "Factory-trained technicians",           us: "✅ All jobs", others: "❌ Varies" },
    { feature: "90-Day Repair Warranty",                us: "✅ Every repair", others: "❌ Rare" },
    { feature: "Same-day service available",            us: "✅ Most days", others: "❌ Multi-day waits" },
    { feature: "Honest repair-vs-replace advice",       us: "✅ Always", others: "❌ Upsell-first" },
  ];

  const faq = [
    { question: "How much does washer or dryer repair cost?", answer: "Most laundry repairs run $120–$400. You get a written price after diagnosis before we proceed." },
    { question: "My dryer runs but clothes stay wet — can you fix that?", answer: "Yes — common causes are heating elements, thermal fuses, gas igniters, or restricted vents. We diagnose on site." },
    { question: "Do you clear dryer vents?", answer: "We address vent restrictions related to dryer performance and can recommend full-vent cleaning when needed." },
    { question: "Washer leaking on the floor — emergency?", answer: "Call us. Leaks can damage flooring fast; we prioritize water-related laundry failures when schedule allows." },
    { question: "Front-load and top-load both OK?", answer: "Yes — front-load, top-load, stack units, and common laundry pedestals/brands." },
    { question: "Warranty?", answer: "Completed repairs include our 90-Day Repair Warranty on parts and labor." },
  ];

  const crossServices = [
    {
        icon: faSnowflake,
        title: "Refrigerator Repair",
        body: "Cooling, ice maker, and sealed-system issues.",
        link: "/services/refrigerator-repair"
    },
    {
        icon: faFireBurner,
        title: "Oven & Range Repair",
        body: "Bake, broil, and ignition repairs.",
        link: "/services/oven-range-repair"
    },
    {
        icon: faSink,
        title: "Dishwasher Repair",
        body: "Drainage, wash quality, and pump repairs.",
        link: "/services/dishwasher-repair"
    },
    {
        icon: faMicrochip,
        title: "Microwave Repair",
        body: "No heat, turntable, and control issues.",
        link: "/services/microwave-repair"
    }
];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Washer & Dryer Repair" },
      ]} />
      <SectionIntro
        title="Washer & Dryer Repair in Waco, TX"
        subtitle="Washers that will not spin, dryers with no heat, leaks, and loud bearings — factory-trained laundry appliance repair with upfront pricing."
      />
      <TrustBar headline="12,000+ Central Texas repairs — factory-trained, bonded & insured" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose FixFirst" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/washer-dryer-repair" title="Washer & Dryer Repair Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Washer & Dryer Repair FAQs" /></div>
      <CTABanner
        headline="Ready to Get Started?"
        subline="Same-day service available. Upfront pricing. Factory-trained techs. Call (254) 790-8800."
        primaryText="Call Us Now"
        primaryLink="tel:+12547908800"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Other Services You Might Need" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Request Washer & Dryer Repair" cityName="Waco" slug="services/washer-dryer-repair" spot="service-washer-dryer-repair-form" formVariant={2} />
      </div>
    </main>
  );
}
