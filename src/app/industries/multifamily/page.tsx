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
    { icon: faClock, problem: "Unit-turn bottlenecks", consequence: "Missing appliances delay lease-up and punch lists." },
    { icon: faTriangleExclamation, problem: "Inconsistent technicians", consequence: "Residents notice when every visit feels like a different company." },
    { icon: faUsers, problem: "Access coordination", consequence: "Notice windows, keys, and escorts need a partner who follows policy." },
    { icon: faDollarSign, problem: "Parts delays", consequence: "Common laundry and package-unit failures need stocked trucks and clear ETAs." },
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
    { question: "Can you work around occupied units?", answer: "Yes — we coordinate notice windows and clean daily close-out." },
    { question: "Do you service common laundry rooms?", answer: "Yes — commercial and residential laundry pairs in common areas." },
    { question: "Can maintenance staff open units for you?", answer: "We follow your access and escort policies exactly." },
    { question: "Do repairs include a warranty?", answer: "Yes — 90-Day Repair Warranty on completed repair parts and labor." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries", href: "/industries" },
        { label: "Multifamily Housing" },
      ]} />
      <SectionIntro title="Multifamily Housing" subtitle="Unit turns, common laundry, and resident appliance tickets — factory-trained techs who work clean in occupied communities." />
      <TrustBar headline="Factory-trained appliance partner for Central Texas organizations" />
      <div className={styles.section}>
        <IndustryPainPoints industry="Multifamily Housing" painPoints={pains} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Multifamily Housing Teams Choose FixFirst" />
      </div>
      <div className={styles.section}>
        <ProcessTimeline steps={processSteps} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Multifamily Housing FAQs" />
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
        <Variant4 title="Request a Multifamily Housing Quote" cityName="Waco" slug="industries/multifamily" spot="industry-multifamily-form" formVariant={2} />
      </div>
    </main>
  );
}
