// FixFirst Appliance Repair — Refrigerator Repair Service Page
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
    { icon: faClock, title: "Same-Day When Possible", description: "Most refrigerator repair calls in Waco can be scheduled same-day when parts and routing allow." },
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
    { town: "Waco",         benefit: "Home base — fastest scheduling for refrigerator repair.", badge: "Home Base" },
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
    { question: "How much does refrigerator repair cost in Waco?", answer: "Most fridge repairs run $150–$450 depending on diagnosis and parts. We quote upfront after inspection before any work begins." },
    { question: "Can you fix a fridge that is not cooling the same day?", answer: "Often yes — if the part is common stock. Sealed-system work may need a follow-up once parts arrive." },
    { question: "Do you service Samsung, LG, and Whirlpool?", answer: "Yes — we service all major brands including Samsung, LG, Whirlpool, GE, Maytag, Frigidaire, KitchenAid, and Bosch." },
    { question: "Is it worth repairing an older refrigerator?", answer: "We give honest repair-vs-replace advice based on age, cost, and energy use — never a hard sell for a new unit." },
    { question: "Do you repair ice makers and water dispensers?", answer: "Yes — ice maker modules, water valves, filters, and dispenser assemblies are common same-day fixes." },
    { question: "Are you insured?", answer: "Yes — FixFirst technicians are factory-trained, bonded, and insured." },
  ];

  const crossServices = [
    {
        icon: faShirt,
        title: "Washer & Dryer Repair",
        body: "Spin failures, no heat, leaks, and error codes.",
        link: "/services/washer-dryer-repair"
    },
    {
        icon: faFireBurner,
        title: "Oven & Range Repair",
        body: "No heat, ignition issues, and control board faults.",
        link: "/services/oven-range-repair"
    },
    {
        icon: faSink,
        title: "Dishwasher Repair",
        body: "Standing water, poor wash, and drainage problems.",
        link: "/services/dishwasher-repair"
    },
    {
        icon: faClipboardList,
        title: "Maintenance Plans",
        body: "Priority service and seasonal checkups for busy homes.",
        link: "/services/maintenance-plans"
    }
];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Refrigerator Repair" },
      ]} />
      <SectionIntro
        title="Refrigerator Repair in Waco, TX"
        subtitle="Not cooling, leaking, noisy, or ice maker issues — same-day refrigerator repair for all major brands with upfront pricing and a 90-Day Repair Warranty."
      />
      <TrustBar headline="12,000+ Central Texas repairs — factory-trained, bonded & insured" />
      <div className={styles.section}><WhatToExpect sectionTitle="What to Expect" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose FixFirst" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/refrigerator-repair" title="Refrigerator Repair Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Refrigerator Repair FAQs" /></div>
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
        <Variant4 title="Request Refrigerator Repair" cityName="Waco" slug="services/refrigerator-repair" spot="service-refrigerator-repair-form" formVariant={2} />
      </div>
    </main>
  );
}
