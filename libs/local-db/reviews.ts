// libs/local-db/reviews.ts
// Static testimonials for FixFirst Appliance Repair

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Refrigerator Repair',
    text:     "Our fridge stopped cooling on a Saturday. FixFirst diagnosed a failed compressor relay the same day, replaced the part, and food was cold again by evening. Upfront price, no pressure to replace the whole unit.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Washer & Dryer Repair',
    text:     'Washer would not spin and the dryer was taking forever. Nadia’s tech fixed both on one visit — belt and a clogged vent. Fair quote before any work started. Highly recommend.',
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Oven & Range Repair',
    text:     'Oven would not heat past 200°. FixFirst found a bad igniter, ordered the OEM part, and finished the next day. Kitchen was back for dinner. Professional and honest.',
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Maintenance Plans',
    text:     'We put our rental units on their maintenance plan. Fewer emergency calls, priority scheduling, and the techs document every visit. Property managers need this.',
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Dishwasher Repair',
    text:     'Dishwasher left everything gritty and smelled terrible. They cleaned the filter path, replaced a pump, and it runs quiet again. 90-day warranty gave me peace of mind.',
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Microwave Repair',
    text:     'Built-in microwave stopped heating. FixFirst repaired the magnetron assembly instead of pushing a full replacement. Saved us money and matched the cabinetry look.',
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Hospitality',
    text:     'We run a small café and needed same-day help on a reach-in cooler. FixFirst prioritized us, fixed the sealed system issue, and we stayed open. True commercial support.',
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Refrigerator Repair',
    text:     'Ice maker flooding and fridge running nonstop. Tech was on time, explained the board fault in plain English, and completed the repair with a clear warranty. FixFirst is our go-to.',
  },
];

export default reviews;
