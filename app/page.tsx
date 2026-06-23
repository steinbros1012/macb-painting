"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

// ─── Reusable: paint-swipe horizontal reveal ───────────────────────────────
function PaintReveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}

// ─── Service row with paint-line hover ────────────────────────────────────
const services = [
  { num: "01", title: "Interior Painting", sub: "Every room. Every surface." },
  { num: "02", title: "Exterior Painting", sub: "Weather-tough. Curb-beautiful." },
  { num: "03", title: "Pressure Washing", sub: "Deep clean. Fast results." },
  { num: "04", title: "Residential", sub: "Your home, respected." },
  { num: "05", title: "Commercial", sub: "On schedule. On budget." },
  { num: "06", title: "Deck & Fence", sub: "Restored, not replaced." },
];

function ServiceRow({ s, i }: { s: (typeof services)[number]; i: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      className="relative border-b"
      style={{ borderColor: "rgba(245,241,235,0.06)" }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: i * 0.07, ease: "easeOut" }}
    >
      <Link
        href={`/services#${s.title.toLowerCase().replace(/ /g, "-")}`}
        className="flex items-center justify-between py-5 lg:py-7"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="flex items-center gap-6 lg:gap-12">
          <span className="font-display text-sm lg:text-base" style={{ color: "rgba(201,169,110,0.5)" }}>
            {s.num}
          </span>
          <motion.span
            className="font-display text-2xl lg:text-3xl font-light italic"
            animate={{ color: hovered ? "#C9A96E" : "#F5F1EB" }}
            transition={{ duration: 0.22 }}
            style={{ letterSpacing: "-0.01em" }}
          >
            {s.title}
          </motion.span>
        </div>
        <div className="flex items-center gap-6 lg:gap-10">
          <span className="hidden lg:block text-xs uppercase tracking-[0.18em]" style={{ color: "rgba(245,241,235,0.3)" }}>
            {s.sub}
          </span>
          <motion.div
            animate={{ x: hovered ? 0 : -6, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.22 }}
          >
            <ArrowUpRight size={16} strokeWidth={1.5} style={{ color: "#C9A96E" }} />
          </motion.div>
        </div>
      </Link>

      {/* Gold paint line — draws left-to-right on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: "#C9A96E", transformOrigin: "left" }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.48, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.div>
  );
}

// ─── Marquee data ──────────────────────────────────────────────────────────
const marqueeItems = [
  "Interior Painting",
  "Exterior Painting",
  "Pressure Washing",
  "Deck Cleaning",
  "Residential",
  "Commercial",
  "Triangle Area NC",
  "Licensed & Insured",
];

// ─── Gallery cells ─────────────────────────────────────────────────────────
const galleryCells = [
  { cols: "col-span-3 row-span-2", bg: "linear-gradient(145deg, #1A2942, #0C1117)", caption: "Exterior — Raleigh" },
  { cols: "col-span-2", bg: "linear-gradient(145deg, #C9A96E, #A07840)", caption: "After · Interior" },
  { cols: "col-span-1", bg: "linear-gradient(145deg, #2C3E50, #1A2942)", caption: "Before" },
  { cols: "col-span-2", bg: "linear-gradient(145deg, #3D4147, #212529)", caption: "Deck · After" },
  { cols: "col-span-1", bg: "linear-gradient(145deg, #C9A96E55, #A0784033)", caption: "After" },
];

// ─── Page ──────────────────────────────────────────────────────────────────
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Paint roller state — hero text waits for roller to finish
  const [paintDone, setPaintDone] = useState(false);

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          PAINT ROLLER REVEAL — signature page-load animation
          Dark overlay slides off to the right like a roller
          uncovering a freshly painted surface. Gold edge = wet paint.
      ═══════════════════════════════════════════════════════ */}
      {!paintDone && (
        <motion.div
          className="fixed inset-0 z-[300] pointer-events-none"
          style={{ backgroundColor: "#0C1117" }}
          initial={{ x: "0%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.25, ease: [0.76, 0, 0.24, 1], delay: 0.08 }}
          onAnimationComplete={() => setPaintDone(true)}
        >
          {/* Wet-paint leading edge — gold gradient shimmer */}
          <div
            className="absolute top-0 right-0 bottom-0 pointer-events-none"
            style={{
              width: "28px",
              background:
                "linear-gradient(to right, rgba(201,169,110,0) 0%, rgba(201,169,110,0.3) 15%, rgba(201,169,110,0.85) 60%, rgba(245,241,235,0.2) 100%)",
            }}
          />
          {/* Hard right edge — the roller cylinder */}
          <div
            className="absolute top-0 right-0 bottom-0"
            style={{ width: "2px", backgroundColor: "rgba(201,169,110,0.5)" }}
          />
        </motion.div>
      )}

      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundColor: "#0C1117" }} />

        {/* Grain texture */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" aria-hidden>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {/* Photo block — parallax */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block"
          style={{ y: heroY }}
        >
          <div
            className="w-full h-full"
            style={{ background: "linear-gradient(160deg, #1A2942 0%, #0C1117 100%)" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to right, #0C1117 0%, rgba(12,17,23,0.4) 30%, transparent 60%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(to right, transparent, #C9A96E 50%, transparent)" }}
          />
        </motion.div>

        {/* Hero content — all elements wait for paintDone */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-24 max-w-[1440px] mx-auto px-6 lg:px-12"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="text-xs uppercase tracking-[0.3em] mb-10 lg:mb-16 font-medium"
            style={{ color: "#C9A96E" }}
            initial={{ opacity: 0, y: 12 }}
            animate={paintDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.65, delay: 0.05, ease: "easeOut" }}
          >
            Triangle Area, North Carolina · Est. Early 2000s
          </motion.p>

          <div className="max-w-3xl lg:max-w-4xl">
            <h1
              className="font-display font-light leading-[0.9] mb-8"
              style={{ fontSize: "clamp(64px, 10vw, 148px)", color: "#F5F1EB", letterSpacing: "-0.02em" }}
            >
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 44 }}
                animate={paintDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 44 }}
                transition={{ duration: 0.8, delay: 0.18, ease: "easeOut" }}
              >
                Painted
              </motion.span>
              <motion.span
                className="block italic"
                style={{ color: "#C9A96E" }}
                initial={{ opacity: 0, y: 44 }}
                animate={paintDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 44 }}
                transition={{ duration: 0.8, delay: 0.34, ease: "easeOut" }}
              >
                with care.
              </motion.span>
            </h1>

            <motion.p
              className="text-base lg:text-lg max-w-md leading-relaxed mb-10"
              style={{ color: "rgba(245,241,235,0.55)" }}
              initial={{ opacity: 0 }}
              animate={paintDone ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.75, delay: 0.5, ease: "easeOut" }}
            >
              A family that has been crafting interiors, transforming exteriors, and restoring surfaces across the Triangle since the early 2000s.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 14 }}
              animate={paintDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              transition={{ duration: 0.65, delay: 0.66, ease: "easeOut" }}
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium"
                style={{ backgroundColor: "#C9A96E", color: "#0C1117" }}
              >
                Free Estimate
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <a
                href="tel:+19198675309"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] font-medium transition-opacity hover:opacity-60"
                style={{ color: "rgba(245,241,235,0.6)" }}
              >
                <Phone size={14} strokeWidth={1.5} />
                (919) 867-5309
              </a>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 border-t flex"
            style={{ borderColor: "rgba(245,241,235,0.08)" }}
            initial={{ opacity: 0 }}
            animate={paintDone ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: "easeOut" }}
          >
            {[
              { val: "20+", label: "Years" },
              { val: "500+", label: "Projects" },
              { val: "6", label: "Services" },
              { val: "Free", label: "Estimates" },
            ].map((s) => (
              <div
                key={s.label}
                className="flex-1 py-5 text-center border-r last:border-r-0"
                style={{ borderColor: "rgba(245,241,235,0.08)" }}
              >
                <div className="font-display text-2xl font-semibold" style={{ color: "#C9A96E" }}>
                  {s.val}
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] mt-0.5" style={{ color: "rgba(245,241,235,0.35)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          MARQUEE
      ═══════════════════════════════════════════════════════ */}
      <div
        className="py-3 overflow-hidden border-y"
        style={{ backgroundColor: "#C9A96E", borderColor: "#B8955A" }}
      >
        <div className="flex whitespace-nowrap marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="text-xs uppercase tracking-[0.25em] font-medium px-8" style={{ color: "#0C1117" }}>
              {item} <span className="opacity-40 mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════
          CRAFT STORY
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-40 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-end">
          <div className="lg:col-span-1 hidden lg:flex items-end pb-2">
            <span
              className="font-display text-6xl font-light"
              style={{ color: "rgba(12,17,23,0.08)", lineHeight: 1 }}
            >
              01
            </span>
          </div>

          <div className="lg:col-span-5 lg:pr-16">
            <motion.p
              className="text-xs uppercase tracking-[0.28em] font-medium mb-8"
              style={{ color: "#C9A96E" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Story
            </motion.p>
            <PaintReveal>
              <h2
                className="font-display font-light leading-[1.0]"
                style={{ fontSize: "clamp(42px, 5vw, 72px)", color: "#0C1117", letterSpacing: "-0.02em" }}
              >
                A father&apos;s craft,
                <br />
                <em>carried forward.</em>
              </h2>
            </PaintReveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "#3D4147" }}>
              {[
                "It started with one person who took pride in what he put his hands on. In the early 2000s, that meant painting houses across the Triangle — carefully, honestly, without shortcuts.",
                "That reputation grew. By 2012, it expanded into full home remodeling. For a decade, the team built additions, kitchens, and bathrooms. Good years. Thousands of hours of skilled labor.",
                "Then came a decision: return to the craft that started it all. Not because remodeling wasn't valuable — but because painting and pressure washing done with genuine skill is rare. And we do it well.",
              ].map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
                >
                  {p}
                </motion.p>
              ))}
            </div>
            <motion.div
              className="mt-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium border-b pb-0.5 transition-all hover:gap-4"
                style={{ borderColor: "#C9A96E", color: "#0C1117" }}
              >
                Full Story <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Photo grid — slides up as a unit */}
        <motion.div
          className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-3 gap-3 h-[480px] lg:h-[600px]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          <div className="lg:col-span-2 rounded-sm overflow-hidden" style={{ background: "linear-gradient(135deg, #1A2942 0%, #0C1117 100%)" }}>
            <div className="w-full h-full flex items-end p-6 lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(245,241,235,0.35)" }}>
                Exterior repaint — Chapel Hill, NC
              </p>
            </div>
          </div>
          <div className="grid grid-rows-2 gap-3">
            <div className="rounded-sm overflow-hidden" style={{ background: "linear-gradient(160deg, #2C3E50 0%, #1A2942 100%)" }}>
              <div className="w-full h-full flex items-end p-4">
                <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(245,241,235,0.3)" }}>
                  Interior — Durham
                </p>
              </div>
            </div>
            <div className="rounded-sm overflow-hidden" style={{ background: "linear-gradient(160deg, #C9A96E 0%, #A07840 100%)" }}>
              <div className="w-full h-full flex items-end p-4">
                <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(12,17,23,0.5)" }}>
                  Deck restore — Cary
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SERVICES
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-40" style={{ backgroundColor: "#0C1117" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24 gap-6">
            <div>
              <motion.p
                className="text-xs uppercase tracking-[0.28em] font-medium mb-5"
                style={{ color: "#C9A96E" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Services
              </motion.p>
              <PaintReveal>
                <h2
                  className="font-display font-light"
                  style={{ fontSize: "clamp(36px, 4.5vw, 64px)", color: "#F5F1EB", letterSpacing: "-0.02em", lineHeight: 1.0 }}
                >
                  What we do,
                  <br />
                  <em>done right.</em>
                </h2>
              </PaintReveal>
            </div>
            <Link
              href="/services"
              className="self-start lg:self-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium border-b pb-0.5 transition-all hover:gap-4"
              style={{ borderColor: "rgba(201,169,110,0.4)", color: "#C9A96E" }}
            >
              All Services <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Service rows */}
          <div className="border-t" style={{ borderColor: "rgba(245,241,235,0.06)" }}>
            {services.map((s, i) => (
              <ServiceRow key={s.num} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-40 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-1">
            <div
              className="hidden lg:block w-px"
              style={{ height: "120px", background: "linear-gradient(to bottom, transparent, #C9A96E, transparent)" }}
            />
          </div>
          <div className="lg:col-span-10">
            <PaintReveal>
              <blockquote>
                <p
                  className="font-display font-light leading-[1.1]"
                  style={{ fontSize: "clamp(28px, 3.5vw, 52px)", color: "#0C1117", letterSpacing: "-0.015em" }}
                >
                  &ldquo;MAC&apos;B painted our entire exterior and transformed our home. Professional, on time, and the clean-up was spotless. Not a single detail missed. This is what craftsmanship actually looks like.&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  <div className="w-8 h-px" style={{ backgroundColor: "#C9A96E" }} />
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#0C1117" }}>Sarah M.</p>
                    <p className="text-xs uppercase tracking-[0.18em] mt-0.5" style={{ color: "#8B8E99" }}>Raleigh, NC</p>
                  </div>
                </footer>
              </blockquote>
            </PaintReveal>
          </div>
        </div>

        {/* Supporting testimonials */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "#EAE4D8" }}>
          {[
            { name: "James T.", loc: "Durham, NC", quote: "Pressure washing the driveway and deck — night and day difference. Honest pricing, zero surprises. This is the team you call." },
            { name: "Linda R.", loc: "Cary, NC", quote: "Interior rooms are completely transformed. The prep work they did before touching the walls was more thorough than I've ever seen." },
          ].map((r, i) => (
            <motion.div
              key={r.name}
              className="p-8 lg:p-10"
              style={{ backgroundColor: "#F5F1EB" }}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
            >
              <p className="font-display text-xl lg:text-2xl font-light italic leading-snug mb-6" style={{ color: "#0C1117" }}>
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-5 h-px" style={{ backgroundColor: "#C9A96E" }} />
                <p className="text-xs uppercase tracking-[0.18em]" style={{ color: "#8B8E99" }}>{r.name} · {r.loc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          GALLERY TEASER
      ═══════════════════════════════════════════════════════ */}
      <section className="py-28 lg:py-40 px-6 lg:px-12" style={{ backgroundColor: "#EAE4D8" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <motion.p
                className="text-xs uppercase tracking-[0.28em] font-medium mb-5"
                style={{ color: "#C9A96E" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Work
              </motion.p>
              <PaintReveal>
                <h2
                  className="font-display font-light leading-[1.0]"
                  style={{ fontSize: "clamp(36px, 4.5vw, 64px)", color: "#0C1117", letterSpacing: "-0.02em" }}
                >
                  The results
                  <br />
                  <em>speak clearly.</em>
                </h2>
              </PaintReveal>
            </div>
            <Link
              href="/gallery"
              className="self-start sm:self-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium border-b pb-0.5 transition-all hover:gap-4"
              style={{ borderColor: "#0C1117", color: "#0C1117" }}
            >
              Full Gallery <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Asymmetric gallery — staggered scale reveal */}
          <div className="grid grid-cols-6 grid-rows-2 gap-2.5 h-[420px] lg:h-[600px]">
            {galleryCells.map((cell, i) => (
              <motion.div
                key={i}
                className={`${cell.cols} rounded-sm overflow-hidden cursor-pointer`}
                style={{ background: cell.bg }}
                initial={{ opacity: 0, scale: 0.97 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.018, transition: { duration: 0.3 } }}
              >
                <div className="h-full flex items-end p-4 lg:p-6">
                  <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(245,241,235,0.4)" }}>
                    {cell.caption}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-5 text-xs text-center uppercase tracking-[0.2em]" style={{ color: "#8B8E99" }}>
            Project photos — contact us to see full before &amp; after portfolios
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════ */}
      <section
        className="relative py-32 lg:py-48 px-6 lg:px-12 overflow-hidden"
        style={{ backgroundColor: "#0C1117" }}
      >
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 10%, #C9A96E 50%, transparent 90%)" }}
        />
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          <div>
            <motion.p
              className="text-xs uppercase tracking-[0.28em] font-medium mb-6"
              style={{ color: "#C9A96E" }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Start Here
            </motion.p>
            <PaintReveal>
              <h2
                className="font-display font-light leading-[0.95]"
                style={{ fontSize: "clamp(40px, 5.5vw, 80px)", color: "#F5F1EB", letterSpacing: "-0.02em" }}
              >
                Ready to see
                <br />
                what&apos;s possible
                <br />
                <em style={{ color: "#C9A96E" }}>on your property?</em>
              </h2>
            </PaintReveal>
          </div>
          <motion.div
            className="flex flex-col gap-5 lg:pl-20"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p className="text-base leading-relaxed" style={{ color: "rgba(245,241,235,0.5)" }}>
              Free estimates. Honest pricing. A team that communicates, shows up, and finishes the job with the kind of care your property deserves.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(245,241,235,0.5)" }}>
              Serving Raleigh, Durham, Chapel Hill, Cary, Apex, and all of the Triangle Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium"
                style={{ backgroundColor: "#C9A96E", color: "#0C1117" }}
              >
                Get a Free Estimate
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <a
                href="tel:+19198675309"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm uppercase tracking-[0.18em] font-medium border transition-all hover:bg-white/5"
                style={{ borderColor: "rgba(245,241,235,0.15)", color: "rgba(245,241,235,0.7)" }}
              >
                <Phone size={14} strokeWidth={1.5} /> (919) 867-5309
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(245,241,235,0.2)" }}>
              Licensed &amp; Insured · Family-Owned · Triangle NC
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
