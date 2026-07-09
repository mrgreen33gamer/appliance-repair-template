// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'refrigerator-not-cooling-checklist',
    title:    'Refrigerator Not Cooling? A Homeowner Checklist Before You Call',
    excerpt:  'Warm fridge, frozen freezer, or weak cooling? Run through these quick checks — then know when it is time for a FixFirst technician in Waco.',
    category: 'Guides',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'Refrigerator not cooling checklist for Waco TX homeowners',
    featured: true,
  },
  {
    slug:     'when-to-repair-vs-replace-appliance',
    title:    'When to Repair vs Replace an Appliance in Central Texas',
    excerpt:  'Age, repair cost, energy use, and safety all matter. A practical framework for washers, dryers, fridges, ovens, and dishwashers.',
    category: 'Guides',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/seer-rating.jpg',
    imageAlt: 'When to repair vs replace appliances in Central Texas',
  },
  {
    slug:     'same-day-appliance-repair-waco',
    title:    'How Same-Day Appliance Repair Works in Waco, TX',
    excerpt:  'What to expect from a same-day service call — diagnostics, parts, upfront pricing, and how FixFirst keeps most repairs done in one visit.',
    category: 'Service',
    date:     'June 15, 2026',
    readTime: 5,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Same-day appliance repair service in Waco TX',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
