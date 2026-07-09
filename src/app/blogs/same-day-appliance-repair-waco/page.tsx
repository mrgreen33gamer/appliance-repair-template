
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
    body: "Same-day appliance repair in Waco is not magic — it is routing, stocked trucks, and clear communication. When your refrigerator fails or a washer floods, you need an honest ETA, an on-site diagnosis, and a price before work begins. Here is how FixFirst runs same-day calls across Central Texas.",
  },
  {
    type: 'cards',
    heading: 'What Happens On a Same-Day Call',
    cards: [
      { icon: faHeadset, title: 'Book with symptoms', body: 'Share brand, model if known, and what the appliance is doing wrong so we dispatch prepared.' },
      { icon: faSearch, title: 'On-site diagnosis', body: 'A factory-trained tech inspects and explains the failure in plain English.' },
      { icon: faDollarSign, title: 'Upfront price', body: 'You approve the repair price before parts go in — no surprise invoices later.' },
      { icon: faWrench, title: 'Repair & test', body: 'We complete approved work and test the appliance under normal use conditions.' },
      { icon: faShieldHalved, title: '90-day warranty', body: 'Completed repairs include our 90-Day Repair Warranty on parts and labor.' },
      { icon: faCheck, title: 'Parts reality', body: 'Common parts ride on the truck; specialty boards may need a scheduled return.' },
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Water leaks and refrigeration failures get priority because delay creates secondary damage. Call early in the day for the best same-day window.",
  },
  {
    type: 'tips',
    heading: 'How To Speed Up Your Visit',
    items: [
      'Clear a path to the appliance and empty what you safely can',
      'Have pets secured and parking available near the entrance',
      'Know roughly when the problem started and any recent error codes',
      'Be ready to approve or decline the repair price on the spot',
      'Ask about maintenance plans if you manage multiple units',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How Same-Day Appliance Repair Works in Waco, TX"
        description="What to expect from a same-day service call — diagnostics, parts, upfront pricing, and how FixFirst keeps most repairs done in one visit."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Same-day appliance repair service in Waco TX"
        category="Service"
        date="June 15, 2026"
        readTime={5}
      />
      <BlogBody sections={sections} />
      <BlogCTA
        title="Need Same-Day Help?"
        body="Call FixFirst at (254) 790-8800 — factory-trained techs serving Waco and Central Texas."
        buttonText="Book Same-Day Service"
        buttonHref="/contact"
      />
      <NewsletterSignup variant={1} spot="same-day-appliance-repair-waco-blog" />
    </>
  );
}
