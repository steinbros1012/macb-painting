import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Star, Phone, ArrowRight, Shield, Award, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Triangle Area Painting & Pressure Washing | MAC'B Painting NC",
  description:
    "Family-owned painting and pressure washing company serving Raleigh, Durham, Chapel Hill, Cary & the Triangle Area of NC. Free estimates. Licensed & insured.",
};

const services = [
  {
    title: "Interior Painting",
    desc: "Transform any room with a flawless finish. We handle prep, priming, and clean-up so you get results that last.",
    icon: "🎨",
    href: "/services#interior",
  },
  {
    title: "Exterior Painting",
    desc: "Weather-resistant coatings applied right. We protect your home's exterior while enhancing curb appeal.",
    icon: "🏠",
    href: "/services#exterior",
  },
  {
    title: "Pressure Washing",
    desc: "Remove years of grime, mold, and mildew from driveways, siding, decks, and more with professional equipment.",
    icon: "💧",
    href: "/services#pressure-washing",
  },
  {
    title: "Commercial Painting",
    desc: "Professional commercial results with minimal disruption to your business operations.",
    icon: "🏢",
    href: "/services#commercial",
  },
  {
    title: "Deck & Fence Cleaning",
    desc: "Restore weathered wood to like-new condition. Pressure washing and staining services available.",
    icon: "🌿",
    href: "/services#deck-fence",
  },
  {
    title: "Residential Painting",
    desc: "Full-service residential painting — interior and exterior — backed by a satisfaction guarantee.",
    icon: "⭐",
    href: "/services#residential",
  },
];

const whyUs = [
  { icon: Shield, title: "Licensed & Insured", desc: "Full coverage on every job. You're protected." },
  { icon: Award, title: "Quality Craftsmanship", desc: "We don't cut corners. Proper prep is everything." },
  { icon: Users, title: "Family-Owned", desc: "You deal directly with the owner, not a middleman." },
  { icon: Clock, title: "On Time, Every Time", desc: "We respect your schedule and communicate clearly." },
];

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Satisfaction Commitment" },
  { value: "Free", label: "Estimates Always" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0" style={{ backgroundColor: "#0F2A4A" }} />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(135deg, rgba(27,79,138,0.95) 0%, rgba(15,42,74,0.92) 50%, rgba(20,61,107,0.88) 100%)",
          }}
        />

        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-bold uppercase tracking-widest" style={{ backgroundColor: "rgba(232,160,32,0.15)", border: "1px solid rgba(232,160,32,0.4)", color: "#E8A020" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020] animate-pulse" />
              Triangle Area NC · Family-Owned Since 2000
            </div>

            <h1
              className="font-black text-white leading-[1.0] mb-6"
              style={{ fontSize: "clamp(40px, 6vw, 76px)", letterSpacing: "-0.025em" }}
            >
              Painting &amp; Pressure Washing
              <br />
              <span style={{ color: "#E8A020" }}>Done Right.</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/65 max-w-xl leading-relaxed mb-10">
              MAC&apos;B Painting &amp; Pressure Washing has served the Triangle Area since the early 2000s. Family-owned. Honest. Reliable. Free estimates on every project.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base transition-all shadow-lg"
                style={{ backgroundColor: "#E8A020" }}
              >
                Get a Free Estimate <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+19198675309"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-white text-base border-2 transition-all"
                style={{ borderColor: "rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.06)" }}
              >
                <Phone size={16} /> (919) 867-5309
              </a>
            </div>

            {/* Trust bullets */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["Licensed & Insured", "Free Estimates", "20+ Years Experience", "Family-Owned"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-sm text-white/70">
                  <CheckCircle size={14} className="text-[#E8A020] flex-shrink-0" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10" style={{ backgroundColor: "rgba(15,42,74,0.85)", backdropFilter: "blur(12px)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
              {stats.map((s) => (
                <div key={s.label} className="py-5 text-center">
                  <div className="text-2xl sm:text-3xl font-black text-[#E8A020]" style={{ letterSpacing: "-0.02em" }}>{s.value}</div>
                  <div className="text-[10px] text-white/40 uppercase tracking-widest font-semibold mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 sm:py-32 px-4" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#E8A020" }}>
              What We Do
            </span>
            <h2 className="text-4xl sm:text-5xl font-black mb-4" style={{ color: "#1B4F8A", letterSpacing: "-0.025em" }}>
              Painting &amp; Pressure Washing Services
            </h2>
            <p className="text-neutral-500 text-lg max-w-xl mx-auto">
              From a single room to an entire commercial property, we deliver quality results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className="group p-7 bg-white rounded-2xl border border-neutral-100 hover:border-[#1B4F8A]/20 hover:shadow-[0_8px_40px_rgba(27,79,138,0.10)] transition-all duration-300"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-[#1B4F8A] transition-colors" style={{ color: "#212529" }}>{s.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4">{s.desc}</p>
                <span className="text-xs font-bold text-[#1B4F8A] group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Learn More <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white transition-all"
              style={{ backgroundColor: "#1B4F8A" }}
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 sm:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#E8A020" }}>
                Why MAC&apos;B
              </span>
              <h2 className="text-4xl sm:text-5xl font-black mb-6" style={{ color: "#1B4F8A", letterSpacing: "-0.025em" }}>
                We do the job right — or we make it right.
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                Our family has been in this industry since the early 2000s. We&apos;ve learned that the difference between a good job and a great job comes down to preparation, honest communication, and actually caring about the outcome.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Thorough surface prep before any paint or water touches your property",
                  "Transparent pricing — no surprise costs after the job starts",
                  "We communicate throughout the project so you always know the status",
                  "Clean-up is part of the job, not an afterthought",
                  "100% satisfaction commitment on every project",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-neutral-600 text-sm">
                    <CheckCircle size={16} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all" style={{ backgroundColor: "#1B4F8A" }}>
                  Our Story <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold border-2 transition-all" style={{ borderColor: "#1B4F8A", color: "#1B4F8A" }}>
                  Get a Free Estimate
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {whyUs.map((w) => (
                <div key={w.title} className="p-6 rounded-2xl" style={{ backgroundColor: "#F8F9FA", border: "1px solid #E9ECEF" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(27,79,138,0.08)" }}>
                    <w.icon size={20} style={{ color: "#1B4F8A" }} />
                  </div>
                  <h3 className="font-bold text-sm mb-1.5" style={{ color: "#212529" }}>{w.title}</h3>
                  <p className="text-xs text-neutral-500 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 sm:py-28 px-4" style={{ backgroundColor: "#1B4F8A" }}>
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "#E8A020" }}>
            About Us
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6" style={{ letterSpacing: "-0.025em" }}>
            A family business built on trust.
          </h2>
          <p className="text-white/65 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            MAC&apos;B Painting started with one father and a paintbrush in the early 2000s. Over two decades, we expanded, specialized, and built a reputation in the Triangle Area that we&apos;re genuinely proud of. Today, we focus exclusively on painting and pressure washing — and we do it well.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-bold text-white transition-all" style={{ backgroundColor: "#E8A020" }}>
              Read Our Story <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-24 sm:py-32 px-4" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#E8A020" }}>
                Our Work
              </span>
              <h2 className="text-4xl sm:text-5xl font-black" style={{ color: "#1B4F8A", letterSpacing: "-0.025em" }}>
                See the results.
              </h2>
            </div>
            <Link href="/gallery" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold border-2 transition-all shrink-0" style={{ borderColor: "#1B4F8A", color: "#1B4F8A" }}>
              Full Gallery <ArrowRight size={14} />
            </Link>
          </div>

          {/* Placeholder gallery grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              { label: "Exterior — Before", bg: "#DEE2E6" },
              { label: "Exterior — After", bg: "#1B4F8A" },
              { label: "Interior — Before", bg: "#E9ECEF" },
              { label: "Interior — After", bg: "#2E6CB8" },
              { label: "Pressure Wash — Before", bg: "#DEE2E6" },
              { label: "Pressure Wash — After", bg: "#1B4F8A" },
              { label: "Deck Clean — Before", bg: "#E9ECEF" },
              { label: "Deck Clean — After", bg: "#143D6B" },
            ].map((item, i) => (
              <div
                key={i}
                className="aspect-square rounded-xl flex items-end p-3 relative overflow-hidden"
                style={{ backgroundColor: item.bg }}
              >
                <span className="text-xs font-semibold px-2 py-1 rounded-md bg-black/30 text-white/90 backdrop-blur-sm">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-neutral-400 mt-6">Project photos coming soon — contact us to see examples of our work.</p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#E8A020" }}>Reviews</span>
          <h2 className="text-3xl sm:text-4xl font-black mb-10" style={{ color: "#1B4F8A", letterSpacing: "-0.025em" }}>
            What our customers say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { name: "Sarah M.", location: "Raleigh, NC", review: "MAC'B painted our entire exterior and it looks incredible. They were professional, on time, and the clean-up was spotless. Will definitely use them again." },
              { name: "James T.", location: "Durham, NC", review: "Used them for pressure washing our driveway and deck. Night and day difference. Honest pricing, no surprises. Exactly what I look for in a contractor." },
              { name: "Linda R.", location: "Cary, NC", review: "Interior rooms look completely transformed. They took their time with the prep work and it shows. The finish is smooth and the color is perfect." },
            ].map((r) => (
              <div key={r.name} className="p-6 rounded-2xl text-left" style={{ backgroundColor: "#F8F9FA", border: "1px solid #E9ECEF" }}>
                <div className="flex items-center gap-0.5 mb-3">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={14} className="fill-[#E8A020] text-[#E8A020]" />)}
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed mb-4">&ldquo;{r.review}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-neutral-800">{r.name}</p>
                  <p className="text-xs text-neutral-400">{r.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 sm:py-28 px-4" style={{ backgroundColor: "#E8A020" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5" style={{ letterSpacing: "-0.025em" }}>
            Ready to get started?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Get a free estimate on your painting or pressure washing project. We serve Raleigh, Durham, Chapel Hill, Cary, and all of the Triangle Area.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-8 py-4 rounded-lg font-bold text-[#E8A020] bg-white transition-all shadow-md hover:shadow-lg text-base">
              Request Free Estimate
            </Link>
            <a href="tel:+19198675309" className="px-8 py-4 rounded-lg font-bold text-white border-2 border-white/40 text-base hover:bg-white/10 transition-all">
              <Phone size={16} className="inline mr-2" />(919) 867-5309
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
