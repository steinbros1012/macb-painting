"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const services = [
  { num: "01", title: "Interior Painting", sub: "Every room. Every surface." },
  { num: "02", title: "Exterior Painting", sub: "Weather-tough. Curb-beautiful." },
  { num: "03", title: "Pressure Washing", sub: "Deep clean. Fast results." },
  { num: "04", title: "Residential", sub: "Your home, respected." },
  { num: "05", title: "Commercial", sub: "On schedule. On budget." },
  { num: "06", title: "Deck & Fence", sub: "Restored, not replaced." },
];

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

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <>
      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Dark background */}
        <div className="absolute inset-0" style={{ backgroundColor: "#0C1117" }} />

        {/* Subtle grain texture via SVG filter */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none" aria-hidden>
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>

        {/* Ink wash photo block — right side */}
        <motion.div
          className="absolute right-0 top-0 bottom-0 w-[52%] hidden lg:block"
          style={{ y: heroY }}
        >
          {/* Color placeholder — replace with real photo */}
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(160deg, #1A2942 0%, #0C1117 100%)",
            }}
          />
          {/* Gold overlay gradient merging into dark */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0C1117 0%, rgba(12,17,23,0.4) 30%, transparent 60%)",
            }}
          />
          {/* Subtle warm accent */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{ background: "linear-gradient(to right, transparent, #C9A96E 50%, transparent)" }}
          />
        </motion.div>

        {/* Hero content */}
        <motion.div
          className="relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-24 max-w-[1440px] mx-auto px-6 lg:px-12"
          style={{ opacity: heroOpacity }}
        >
          {/* Top label */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-xs uppercase tracking-[0.3em] mb-10 lg:mb-16 font-medium"
            style={{ color: "#C9A96E" }}
          >
            Triangle Area, North Carolina · Est. Early 2000s
          </motion.p>

          {/* Main headline — editorial scale */}
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.h1
              className="font-display font-light leading-[0.9] mb-8"
              style={{
                fontSize: "clamp(64px, 10vw, 148px)",
                color: "#F5F1EB",
                letterSpacing: "-0.02em",
              }}
            >
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.5}
                className="block"
              >
                Painted
              </motion.span>
              <motion.span
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="block italic"
                style={{ color: "#C9A96E" }}
              >
                with care.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1.5}
              className="text-base lg:text-lg max-w-md leading-relaxed mb-10"
              style={{ color: "rgba(245,241,235,0.55)" }}
            >
              A family that has been crafting interiors, transforming exteriors, and restoring surfaces across the Triangle since the early 2000s.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-300 hover:gap-5"
                style={{ backgroundColor: "#C9A96E", color: "#0C1117" }}
              >
                Free Estimate <ArrowUpRight size={16} strokeWidth={1.5} />
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

          {/* Bottom strip */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2.5}
            className="absolute bottom-0 left-0 right-0 border-t flex"
            style={{ borderColor: "rgba(245,241,235,0.08)" }}
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
                <div
                  className="font-display text-2xl font-semibold"
                  style={{ color: "#C9A96E" }}
                >
                  {s.val}
                </div>
                <div
                  className="text-[10px] uppercase tracking-[0.2em] mt-0.5"
                  style={{ color: "rgba(245,241,235,0.35)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─────────────────── MARQUEE ─────────────────── */}
      <div
        className="py-3 overflow-hidden border-y"
        style={{ backgroundColor: "#C9A96E", borderColor: "#B8955A" }}
      >
        <div className="flex whitespace-nowrap marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-xs uppercase tracking-[0.25em] font-medium px-8"
              style={{ color: "#0C1117" }}
            >
              {item} <span className="opacity-40 mx-4">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ─────────────────── CRAFT STORY ─────────────────── */}
      <section className="py-28 lg:py-40 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-end">
          {/* Large number */}
          <div className="lg:col-span-1 hidden lg:flex items-end pb-2">
            <span
              className="font-display text-6xl font-light"
              style={{ color: "rgba(12,17,23,0.08)", lineHeight: 1 }}
            >
              01
            </span>
          </div>

          {/* Left — big editorial pull quote */}
          <div className="lg:col-span-5 lg:pr-16">
            <p
              className="text-xs uppercase tracking-[0.28em] font-medium mb-8"
              style={{ color: "#C9A96E" }}
            >
              Our Story
            </p>
            <h2
              className="font-display font-light leading-[1.0] mb-0"
              style={{
                fontSize: "clamp(42px, 5vw, 72px)",
                color: "#0C1117",
                letterSpacing: "-0.02em",
              }}
            >
              A father&apos;s craft,
              <br />
              <em>carried forward.</em>
            </h2>
          </div>

          {/* Right — editorial prose */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-5 text-base leading-relaxed" style={{ color: "#3D4147" }}>
              <p>
                It started with one person who took pride in what he put his hands on. In the early 2000s, that meant painting houses across the Triangle — carefully, honestly, without shortcuts.
              </p>
              <p>
                That reputation grew. By 2012, it expanded into full home remodeling. For a decade, the team built additions, kitchens, and bathrooms. Good years. Thousands of hours of skilled labor.
              </p>
              <p>
                Then came a decision: return to the craft that started it all. Not because remodeling wasn&apos;t valuable — but because painting and pressure washing done with genuine skill is rare. And we do it well.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] font-medium border-b pb-0.5 transition-all hover:gap-4"
                style={{ borderColor: "#C9A96E", color: "#0C1117" }}
              >
                Full Story <ArrowUpRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Large visual break */}
        <div className="mt-20 lg:mt-28 grid grid-cols-1 lg:grid-cols-3 gap-3 h-[480px] lg:h-[600px]">
          {/* Main large photo */}
          <div
            className="lg:col-span-2 rounded-sm overflow-hidden"
            style={{ background: "linear-gradient(135deg, #1A2942 0%, #0C1117 100%)" }}
          >
            <div className="w-full h-full flex items-end p-6 lg:p-10">
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(245,241,235,0.35)" }}>
                Exterior repaint — Chapel Hill, NC
              </p>
            </div>
          </div>
          {/* Stack of two */}
          <div className="grid grid-rows-2 gap-3">
            <div
              className="rounded-sm overflow-hidden"
              style={{ background: "linear-gradient(160deg, #2C3E50 0%, #1A2942 100%)" }}
            >
              <div className="w-full h-full flex items-end p-4">
                <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(245,241,235,0.3)" }}>
                  Interior — Durham
                </p>
              </div>
            </div>
            <div
              className="rounded-sm overflow-hidden"
              style={{ background: "linear-gradient(160deg, #C9A96E 0%, #A07840 100%)" }}
            >
              <div className="w-full h-full flex items-end p-4">
                <p className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(12,17,23,0.5)" }}>
                  Deck restore — Cary
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────── SERVICES ─────────────────── */}
      <section
        className="py-28 lg:py-40"
        style={{ backgroundColor: "#0C1117" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-24 gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] font-medium mb-5" style={{ color: "#C9A96E" }}>
                Services
              </p>
              <h2
                className="font-display font-light"
                style={{
                  fontSize: "clamp(36px, 4.5vw, 64px)",
                  color: "#F5F1EB",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.0,
                }}
              >
                What we do,
                <br />
                <em>done right.</em>
              </h2>
            </div>
            <Link
              href="/services"
              className="self-start lg:self-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium border-b pb-0.5 transition-all hover:gap-4"
              style={{ borderColor: "rgba(201,169,110,0.4)", color: "#C9A96E" }}
            >
              All Services <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Service list — editorial numbered style */}
          <div className="divide-y" style={{ borderColor: "rgba(245,241,235,0.06)" }}>
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/services#${s.title.toLowerCase().replace(/ /g, "-")}`}
                  className="group flex items-center justify-between py-5 lg:py-7 transition-all"
                >
                  <div className="flex items-center gap-6 lg:gap-12">
                    <span
                      className="font-display text-sm lg:text-base"
                      style={{ color: "rgba(201,169,110,0.5)" }}
                    >
                      {s.num}
                    </span>
                    <span
                      className="font-display text-2xl lg:text-3xl font-light italic group-hover:text-[#C9A96E] transition-colors"
                      style={{ color: "#F5F1EB", letterSpacing: "-0.01em" }}
                    >
                      {s.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-6 lg:gap-10">
                    <span
                      className="hidden lg:block text-xs uppercase tracking-[0.18em]"
                      style={{ color: "rgba(245,241,235,0.3)" }}
                    >
                      {s.sub}
                    </span>
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0"
                      style={{ color: "#C9A96E" }}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── SINGLE BIG TESTIMONIAL ─────────────────── */}
      <section className="py-28 lg:py-40 px-6 lg:px-12 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-1">
            <div
              className="hidden lg:block w-px"
              style={{ height: "120px", background: "linear-gradient(to bottom, transparent, #C9A96E, transparent)" }}
            />
          </div>
          <div className="lg:col-span-10">
            <blockquote>
              <p
                className="font-display font-light leading-[1.1]"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 52px)",
                  color: "#0C1117",
                  letterSpacing: "-0.015em",
                }}
              >
                &ldquo;MAC&apos;B painted our entire exterior and transformed our home. Professional, on time, and the clean-up was spotless. Not a single detail missed. This is what craftsmanship actually looks like.&rdquo;
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div
                  className="w-8 h-px"
                  style={{ backgroundColor: "#C9A96E" }}
                />
                <div>
                  <p className="text-sm font-medium" style={{ color: "#0C1117" }}>Sarah M.</p>
                  <p className="text-xs uppercase tracking-[0.18em] mt-0.5" style={{ color: "#8B8E99" }}>
                    Raleigh, NC
                  </p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* Additional testimonials — smaller */}
        <div className="mt-16 lg:mt-24 grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "#EAE4D8" }}>
          {[
            { name: "James T.", loc: "Durham, NC", quote: "Pressure washing the driveway and deck — night and day difference. Honest pricing, zero surprises. This is the team you call." },
            { name: "Linda R.", loc: "Cary, NC", quote: "Interior rooms are completely transformed. The prep work they did before touching the walls was more thorough than I've ever seen." },
          ].map((r) => (
            <div
              key={r.name}
              className="p-8 lg:p-10"
              style={{ backgroundColor: "#F5F1EB" }}
            >
              <p
                className="font-display text-xl lg:text-2xl font-light italic leading-snug mb-6"
                style={{ color: "#0C1117" }}
              >
                &ldquo;{r.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-5 h-px" style={{ backgroundColor: "#C9A96E" }} />
                <p className="text-xs uppercase tracking-[0.18em]" style={{ color: "#8B8E99" }}>
                  {r.name} · {r.loc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────────────── WORK GALLERY TEASER ─────────────────── */}
      <section
        className="py-28 lg:py-40 px-6 lg:px-12"
        style={{ backgroundColor: "#EAE4D8" }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] font-medium mb-5" style={{ color: "#C9A96E" }}>
                Our Work
              </p>
              <h2
                className="font-display font-light leading-[1.0]"
                style={{
                  fontSize: "clamp(36px, 4.5vw, 64px)",
                  color: "#0C1117",
                  letterSpacing: "-0.02em",
                }}
              >
                The results
                <br />
                <em>speak clearly.</em>
              </h2>
            </div>
            <Link
              href="/gallery"
              className="self-start sm:self-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium border-b pb-0.5 transition-all hover:gap-4"
              style={{ borderColor: "#0C1117", color: "#0C1117" }}
            >
              Full Gallery <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </div>

          {/* Asymmetric gallery */}
          <div className="grid grid-cols-6 grid-rows-2 gap-2.5 h-[420px] lg:h-[600px]">
            <div className="col-span-3 row-span-2 rounded-sm overflow-hidden" style={{ background: "linear-gradient(145deg, #1A2942, #0C1117)" }}>
              <div className="h-full flex items-end p-5 lg:p-7">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(245,241,235,0.3)" }}>After</span>
                  <p className="text-xs mt-0.5" style={{ color: "rgba(245,241,235,0.5)" }}>Exterior — Raleigh</p>
                </div>
              </div>
            </div>
            <div className="col-span-2 rounded-sm overflow-hidden" style={{ background: "linear-gradient(145deg, #C9A96E, #A07840)" }}>
              <div className="h-full flex items-end p-4">
                <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(12,17,23,0.4)" }}>After · Interior</span>
              </div>
            </div>
            <div className="col-span-1 rounded-sm overflow-hidden" style={{ background: "linear-gradient(145deg, #2C3E50, #1A2942)" }}>
              <div className="h-full flex items-end p-3">
                <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(245,241,235,0.3)" }}>Before</span>
              </div>
            </div>
            <div className="col-span-2 rounded-sm overflow-hidden" style={{ background: "linear-gradient(145deg, #3D4147, #212529)" }}>
              <div className="h-full flex items-end p-4">
                <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(245,241,235,0.3)" }}>Deck · After</span>
              </div>
            </div>
            <div className="col-span-1 rounded-sm overflow-hidden" style={{ background: "linear-gradient(145deg, #C9A96E99, #A0784066)" }}>
              <div className="h-full flex items-end p-3">
                <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: "rgba(12,17,23,0.4)" }}>After</span>
              </div>
            </div>
          </div>
          <p className="mt-5 text-xs text-center uppercase tracking-[0.2em]" style={{ color: "#8B8E99" }}>
            Project photos — contact us to see full before &amp; after portfolios
          </p>
        </div>
      </section>

      {/* ─────────────────── FULL-BLEED CTA ─────────────────── */}
      <section
        className="relative py-32 lg:py-48 px-6 lg:px-12 overflow-hidden"
        style={{ backgroundColor: "#0C1117" }}
      >
        {/* Gold accent */}
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 10%, #C9A96E 50%, transparent 90%)" }}
        />

        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] font-medium mb-6" style={{ color: "#C9A96E" }}>
              Start Here
            </p>
            <h2
              className="font-display font-light leading-[0.95]"
              style={{
                fontSize: "clamp(40px, 5.5vw, 80px)",
                color: "#F5F1EB",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to see
              <br />
              what&apos;s possible
              <br />
              <em style={{ color: "#C9A96E" }}>on your property?</em>
            </h2>
          </div>
          <div className="flex flex-col gap-5 lg:pl-20">
            <p className="text-base leading-relaxed" style={{ color: "rgba(245,241,235,0.5)" }}>
              Free estimates. Honest pricing. A team that communicates, shows up, and finishes the job with the kind of care your property deserves.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "rgba(245,241,235,0.5)" }}>
              Serving Raleigh, Durham, Chapel Hill, Cary, Apex, and all of the Triangle Area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all hover:gap-5"
                style={{ backgroundColor: "#C9A96E", color: "#0C1117" }}
              >
                Get a Free Estimate <ArrowUpRight size={15} strokeWidth={1.5} />
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
          </div>
        </div>
      </section>
    </>
  );
}
