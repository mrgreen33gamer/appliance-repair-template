
'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import {
  faSun, faShieldHalved, faDollarSign, faWrench, faLeaf, faHouseChimney, faCheck,
  faBolt, faWind, faSnowflake, faHeadset, faSearch,
} from '@fortawesome/free-solid-svg-icons';


const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "A warm refrigerator in a Central Texas summer is an emergency for your groceries — and sometimes for the appliance itself. Before you assume the compressor is dead, run through a quick homeowner checklist. If the simple fixes do not restore cold air, FixFirst can diagnose and repair most brands the same day.",
  },
  {
    type: 'cards',
    heading: 'Quick Checks Before You Call',
    cards: [
      { icon: faBolt, title: 'Power & settings', body: 'Confirm the outlet, breaker, and fridge/freezer temperature controls are set correctly.' },
      { icon: faWind, title: 'Airflow', body: 'Leave space around the cabinet and clear blocked internal vents stacked with food.' },
      { icon: faWrench, title: 'Coils & condenser fan', body: 'Dusty coils and a failed condenser fan cause warm boxes fast in summer heat.' },
      { icon: faShieldHalved, title: 'Door seals', body: 'Torn gaskets let warm air in. Inspect the seal and listen for a solid close.' },
      { icon: faSnowflake, title: 'Evaporator frost patterns', body: 'Heavy frost or zero frost in the wrong places can point to airflow or sealed-system issues.' },
      { icon: faCheck, title: 'Recent changes', body: 'New ice maker installs, power blips, or a packed freezer can all change cooling performance.' },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: If food is already spoiling, move perishables first, then call. Running a struggling sealed system for days can turn a repairable problem into a full replacement.",
  },
  {
    type: 'tips',
    heading: 'When To Call FixFirst',
    items: [
      'Fridge is warm after basic checks and 2–4 hours of closed-door recovery time',
      'You hear grinding, clicking, or a compressor that never shuts off',
      'Water is pooling under the unit or inside the crisper',
      'Ice maker flooded or stopped while the fridge is also warm',
      'You want upfront repair pricing before any parts are installed',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Refrigerator Not Cooling? A Homeowner Checklist Before You Call"
        description="Warm fridge, frozen freezer, or weak cooling? Run through these quick checks — then know when it is time for a FixFirst technician in Waco."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="Refrigerator not cooling checklist for Waco TX homeowners"
        category="Guides"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Fridge Still Not Cooling?"
        body="Call FixFirst Appliance Repair for same-day diagnosis in Waco and Central Texas — upfront pricing, 90-Day Repair Warranty."
        buttonText="Book Refrigerator Repair"
        buttonHref="/services/refrigerator-repair"
      />
      <NewsletterSignup variant={1} spot="refrigerator-not-cooling-checklist-blog" />
    </>
  );
}
