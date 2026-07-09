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
    { icon: faClock, problem: "Slow vendor response on turns", consequence: "Vacant units without a working fridge or range burn days of rent." },
    { icon: faTriangleExclamation, problem: "Unclear invoices", consequence: "Managers need upfront prices and clear work-order notes — not surprise line items." },
    { icon: faUsers, problem: "Tenant satisfaction risk", consequence: "A dead washer or leaky dishwasher becomes a one-star review fast." },
    { icon: faDollarSign, problem: "CapEx vs repair decisions", consequence: "You need honest repair-vs-replace guidance that protects NOI." },
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
    { question: "Can you handle multiple properties under one account?", answer: "Yes — single point of contact, portfolio routing, and consistent documentation." },
    { question: "Do you provide certificates of insurance?", answer: "Yes — COI available for vendor onboarding." },
    { question: "Same-day for tenant emergencies?", answer: "We prioritize water and refrigeration failures when schedule allows." },
    { question: "How do work orders close out?", answer: "Photos, notes, and warranty details delivered to your team." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Property Management" },
      ]} />
      <SectionIntro title="Property Management" subtitle="Make-ready support, tenant work orders, and documented appliance repairs for managed portfolios across Central Texas." />
      <TrustBar headline="Factory-trained appliance partner for Central Texas organizations" />
      <div className={styles.section}>
        <IndustryPainPoints industry="Property Management" painPoints={pains} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Property Management Teams Choose FixFirst" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Property Management FAQs" />
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
        <Variant4 title="Request a Property Management Quote" cityName="Waco" slug="industries/property-management" spot="industry-property-management-form" formVariant={2} />
      </div>
    </main>
  );
}
