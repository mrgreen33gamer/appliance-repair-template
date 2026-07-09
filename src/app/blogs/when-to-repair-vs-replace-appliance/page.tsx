
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
    body: "Homeowners and property managers ask the same question every week: is this appliance worth fixing? The honest answer depends on age, repair cost, energy use, safety, and how long you plan to keep the unit. Here is the framework FixFirst techs use across Waco, Temple, and Killeen.",
  },
  {
    type: 'cards',
    heading: 'Decision Factors',
    cards: [
      { icon: faDollarSign, title: 'Repair cost ratio', body: 'If repair is well under half of a quality replacement, repair usually wins on newer units.' },
      { icon: faWrench, title: 'Age & history', body: 'A single failure on a mid-life appliance is different from a third major board replacement in two years.' },
      { icon: faLeaf, title: 'Energy & water', body: 'Old laundry and refrigeration can quietly cost more every month in Central Texas utility rates.' },
      { icon: faShieldHalved, title: 'Safety', body: 'Gas smells, scorched wiring, and failed high-limit devices change the conversation immediately.' },
      { icon: faHouseChimney, title: 'Built-ins & matching sets', body: 'Built-in microwaves and suite-matched appliances often favor repair for fit and finish reasons.' },
      { icon: faCheck, title: 'Parts availability', body: 'If OEM-quality parts are readily available, repair timelines stay short.' },
    ],
  },
  {
    type: 'table',
    heading: 'Quick Decision Guide',
    tableHeaders: ['Situation', 'Lean Repair', 'Lean Replace'],
    tableRows: [
      ['Under 8–10 years, first major failure', 'Yes', 'Rarely'],
      ['Repair quote > 50% of replacement', 'Maybe', 'Often'],
      ['Safety issue (gas/electrical)', 'Only if fully correctable', 'Often'],
      ['Multiple recent major repairs', 'Maybe', 'Often'],
      ['Built-in unit matching cabinetry', 'Often', 'If parts obsolete'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Ask for the repair price in writing before approving parts. Upfront pricing is the only way to compare repair against replacement honestly.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'Write down brand, model, and symptoms before the tech arrives',
      'Ask for repair-vs-replace guidance with real numbers',
      'Factor delivery/install cost if you replace',
      'For rentals, weigh vacancy risk and tenant satisfaction',
      'Choose a shop that warranties the repair in writing',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="When to Repair vs Replace an Appliance in Central Texas"
        description="Age, repair cost, energy use, and safety all matter. A practical framework for washers, dryers, fridges, ovens, and dishwashers."
        imageSrc="/pages/blogs/seer-rating.jpg"
        imageAlt="When to repair vs replace appliances in Central Texas"
        category="Guides"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Not Sure Repair or Replace?"
        body="Get an honest diagnosis from FixFirst — we will price the repair upfront and tell you if replacement is smarter."
        buttonText="Request Service"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="when-to-repair-vs-replace-appliance-blog" />
    </>
  );
}
