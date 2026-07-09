# Appliance Repair Template — Design Spec

## Context

Scott Apps trade template reskin. Forked from `hvac-template` into `appliance-repair-template`, sibling-cloned from `window-door-template` structure. Follows `RESKIN_PLAYBOOK.md`.

Per standing decisions for non-gallery trades: per-city SEO subpages deleted; `src/app/projects/` deleted.

## Business Identity (locked, reuse verbatim)

- **Business name:** FixFirst Appliance Repair
- **Tagline:** Same-Day Appliance Repair · All Major Brands
- **Location:** Waco, TX (home base)
- **Service area cities:** Waco, Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead
- **Founded:** 2010
- **Owner:** Nadia Patel
- **Credential/license line:** "Factory-Trained Techs · Bonded & Insured"
- **Guarantee:** 90-Day Repair Warranty · Upfront Pricing
- **Social proof:** 4.9★, 1,500+ reviews, 12,000+ repairs
- **Brand accent color:** fuchsia `#c026d3` (token `$orange`; light `#e879f9`; dark `#86198f`)
- **Phone:** (254) 790-8800 / `tel:+12547908800`
- **Email:** hello@fixfirstappliance.com
- **Domain:** fixfirstappliance.com
- **Address:** 2412 Franklin Ave, Waco, TX 76701
- No per-city SEO subpages

## Services (6)

| Old HVAC slug | New slug | Title |
|---|---|---|
| ac-repair | refrigerator-repair | Refrigerator Repair |
| heating | washer-dryer-repair | Washer & Dryer Repair |
| installation | oven-range-repair | Oven & Range Repair |
| duct-cleaning | dishwasher-repair | Dishwasher Repair |
| indoor-air-quality | microwave-repair | Microwave Repair |
| maintenance | maintenance-plans | Maintenance Plans |

## Industries Served (3)

| Old slug | New slug | Title |
|---|---|---|
| automotive | property-management | Property Management |
| manufacturing | multifamily | Multifamily Housing |
| oil-gas | hospitality | Hospitality & Restaurants |

## Blogs (3)

1. `refrigerator-not-cooling-checklist`
2. `when-to-repair-vs-replace-appliance`
3. `same-day-appliance-repair-waco`

## Pages

Home, Services (index + 6 detail), Industries (index + 3 detail), About, Contact, Service Areas, Blog (index + 3 posts), Privacy. No `/projects` route. No per-city SEO.

## Non-goals

- No per-city SEO subpages
- No new component primitives
- No project gallery
- No marketplace catalog flip (separate pass)

## Process

1. Batch A — chrome: brand tokens, Header/Footer, root layout, robots/sitemap/llms, privacy/admin
2. Batch B — shared PageComponents defaults
3. Batch C — homepage, services ×6, industries ×3, blogs ×3, about/contact/service-areas, reviews
4. Batch D — delete projects + city SEO, grep clean, typecheck, design spec, commits

## Success Criteria

- Zero HVAC / FixFirst / old phone / Mapbox pk / Scott Applications agency leaks in customer-facing source
- Accent `#c026d3` in `$orange` and hardcoded loaders
- `npm run typecheck` passes
- Logical git commits by batch
