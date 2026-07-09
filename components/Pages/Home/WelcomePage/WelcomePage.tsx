// _archetype-library/hero-i-editorial/Component.tsx
//
// Hero I: Minimal Editorial — oversized typography, single accent shape,
// large negative space. Optional accentWord as huge watermark typography.
// No canvas, no stat cards, no widget.
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { PhoneIcon, ChevronIcon, CheckIcon } from './_shared/icons';
import styles from './styles.module.scss';

export default function WelcomePage() {
const badgeText = 'Waco\'s Most Trusted Appliance Repair — Since 2010';
const headlineLines = [
  'Broken Appliance?',
  'We Fix It Fast.',
];
const headlineAccent = 'FixFirst.';
const subheadline = 'Same-day service available. Upfront pricing. 90-Day Repair Warranty. Serving Waco and Central Texas with factory-trained techs.';
const primaryCta = { label: 'Call (254) 790-8800', href: 'tel:+12547908800' };
const secondaryCta = { label: 'Book Service', href: '/contact' };
const chips = [
  'Same-Day Service',
  'All Major Brands',
  'Factory-Trained',
  '16+ Yrs Local',
  '90-Day Warranty',
];
const stats = [
  {
    "value": "3,500+",
    "label": "Installs Completed"
  },
  {
    "value": "4.9 ★",
    "label": "Google Rating"
  },
  {
    "value": "10-Year",
    "label": "Install Warranty"
  },
  {
    "value": "Same-Day",
    "label": "Service Available"
  }
];
const meterTarget = 72;
const meterTopLabel = "Peak";
const meterMidLabel = "Local";
const meterBotLabel = "Base";
const particleColor = '#f43f5e';
const beforeImageSrc = '/pages/home/welcome/before.jpg';
const afterImageSrc = '/pages/home/welcome/after.jpg';
const beforeLabel = "Broken";
const afterLabel = "Running";
const mapCenterLabel = 'Service HQ';
const mapPins = [
  { label: 'Waco', x: 42, y: 48 },
  { label: 'Temple', x: 68, y: 62 },
  { label: 'Killeen', x: 58, y: 72 },
];
const coverageLabel = 'Central Texas coverage';
const materials = [
  { name: "Washers", swatch: "#f43f5e", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Dryers", swatch: "#fb7185", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Refrigerators", swatch: "#be123c", imageSrc: "/pages/home/welcome/mat-3.jpg" },
  { name: "Ovens", swatch: "#fda4af", imageSrc: "/pages/home/welcome/mat-1.jpg" },
  { name: "Dishwashers", swatch: "#e11d48", imageSrc: "/pages/home/welcome/mat-2.jpg" },
  { name: "Cooktops", swatch: "#9f1239", imageSrc: "/pages/home/welcome/mat-3.jpg" }
];
const quote = "They diagnosed my washer the same day and had it running before dinner. Fair price, no upsell.";
const authorName = "Maria G.";
const authorMeta = "Washer repair · Waco";
const rating = 5;
const schematicLabel = "FixFirst schematic";
const gauges = [
  { label: "Repairs", value: "4,200+" },
  { label: "Rating", value: "4.9 ★" },
  { label: "Avg arrival", value: "Same day" },
  { label: "Warranty", value: "90-day" }
];
const toggles = [
  { label: "Licensed crew", on: true },
  { label: "Same-week", on: true },
  { label: "Warrantied", on: true }
];
const textureSrc = '/pages/home/welcome/hero-main.jpg';
const textureAlt = 'Texture';
const accentWord = "FixFirst";

  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Single geometric accent — not a content widget */}
      <div className={styles.accentShape} aria-hidden="true" />
      <div className={styles.hairline} aria-hidden="true" />

      {accentWord ? (
        <div className={styles.watermarkSlot} aria-hidden="true">
          <motion.span
            className={styles.watermark}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {accentWord}
          </motion.span>
        </div>
      ) : null}

      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className={styles.badgeDot} />
            {badgeText}
          </motion.div>

          <motion.h1
            className={styles.headline}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {headlineLines.map((line, i) => (
              <React.Fragment key={i}>{line}<br /></React.Fragment>
            ))}
            <span className={styles.accentLine}>{headlineAccent}</span>
          </motion.h1>

          <motion.div
            className={styles.rule}
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.65, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className={styles.sub}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
          >
            {subheadline}
          </motion.p>

          <motion.div
            className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
          >
            <a href={primaryCta.href} className={styles.ctaPrimary}>
              <PhoneIcon size={15} /> {primaryCta.label}
            </a>
            <Link href={secondaryCta.href} className={styles.ctaSecondary}>
              {secondaryCta.label} <ChevronIcon size={12} />
            </Link>
          </motion.div>

          <motion.div
            className={styles.chips}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            {chips.map((c) => (
              <span key={c} className={styles.chip}>
                <CheckIcon size={9} /> {c}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
