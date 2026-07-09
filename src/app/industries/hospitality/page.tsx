"use client";
import styles from "../page.module.scss";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import {
  faClipboardCheck, faShieldHalved, faUsers, faHeadset, faSearch, faFileContract, faCheckCircle,
  faClock, faTriangleExclamation, faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

export default function IndustryPage() {
  const pains = [
    { icon: faClock, problem: "Downtime during service", consequence: "A dead reach-in or range during dinner rush is an emergency — not a next-week ticket." },
    { icon: faTriangleExclamation, problem: "After-hours access", consequence: "Visits need to fit prep, service, and quiet hours." },
    { icon: faUsers, problem: "Guest experience risk", consequence: "Cold-holding and kitchen gear must work — consistently." },
    { icon: faDollarSign, problem: "Multi-location accounting", consequence: "Operators need location-coded invoices and clear documentation." },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Schedule-Aware Techs", description: "We plan repairs around tenant notice windows, shift changes, and business hours." },
    { icon: faShieldHalved, title: "Factory-Trained · Bonded & Insured", description: "Documentation ready for PMs, owners, and commercial operators." },
    { icon: faUsers, title: "Single Point of Contact", description: "One FixFirst lead coordinates multi-unit or multi-location work end to end." },
  ];

  const processSteps = [
    { number: 1, title: "Scope Call", description: "Share unit counts, common brands, and access rules.", icon: faHeadset },
    { number: 2, title: "Service Plan", description: "Agree on response targets, approved spend thresholds, and reporting.", icon: faSearch },
    { number: 3, title: "Dispatch & Repair", description: "Factory-trained techs complete repairs with upfront pricing and documentation.", icon: faFileContract },
    { number: 4, title: "Close Out", description: "Photos, notes, and warranty details delivered to your team.", icon: faCheckCircle },
  ];

  const faq = [
    { question: "Do you service light commercial refrigeration?", answer: "Yes — many restaurant reach-ins and related kitchen appliances within our scope." },
    { question: "Can you prioritize during peak hours?", answer: "We offer priority routing for hospitality clients when capacity allows." },
    { question: "Invoices for multi-location groups?", answer: "Yes — location-coded documentation for accounting and facilities teams." },
    { question: "Are techs insured for commercial sites?", answer: "Yes — factory-trained, bonded, and insured. COI on request." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Hospitality & Restaurants" },
      ]} />
      <SectionIntro title="Hospitality & Restaurants" subtitle="Priority appliance support for restaurants, cafés, and hospitality operators — protect service hours with factory-trained techs." />
      <TrustBar headline="Factory-trained appliance partner for Central Texas organizations" />
      <div className={styles.section}>
        <IndustryPainPoints industry="Hospitality & Restaurants" painPoints={pains} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Hospitality & Restaurants Teams Choose FixFirst" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Hospitality & Restaurants FAQs" />
      </div>
      <CTABanner
        headline="Let's Scope Your Account"
        subline="Call (254) 790-8800 or request commercial service online."
        primaryText="Call (254) 790-8800"
        primaryLink="tel:+12547908800"
        secondaryText="Request Service"
        secondaryLink="/contact"
      />
      <div className={styles.section}>
        <Variant4 title="Request a Hospitality & Restaurants Quote" cityName="Waco" slug="industries/hospitality" spot="industry-hospitality-form" formVariant={2} />
      </div>
    </main>
  );
}
