import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Interior & exterior painting, pressure washing, deck cleaning, and more. MAC'B Painting serves the Triangle Area of NC — Raleigh, Durham, Chapel Hill, Cary.",
};

const services = [
  {
    num: "01",
    title: "Interior Painting",
    headline: "The rooms you live in, done right.",
    body: "We prep every surface the way it should be — sanding, priming, caulking gaps. The paint goes on last. That's what makes the finish last. Whether you're refreshing a single room or the entire house, we work cleanly, carefully, and around your schedule.",
    details: [
      "All interior rooms & spaces",
      "Wall, ceiling, trim & door painting",
      "Proper surface prep & priming",
      "Clean daily setup & breakdown",
      "Color consultation available",
    ],
  },
  {
    num: "02",
    title: "Exterior Painting",
    headline: "Your home's face to the world.",
    body: "The Triangle's summers are humid, winters are unpredictable. We use exterior-grade paints rated for this climate and apply them the right way. Proper pressure washing before we start. Caulked gaps. Two coats where two coats belong. The result holds.",
    details: [
      "Full exterior painting & refinishing",
      "Power wash & prep before painting",
      "Siding, trim, fascia, gutters, doors",
      "Climate-appropriate paint selection",
      "Licensed & insured crew",
    ],
  },
  {
    num: "03",
    title: "Pressure Washing",
    headline: "What clean actually looks like.",
    body: "Driveways, walkways, siding, decks, fences — years of grime, mold, algae, and oxidation removed in a day. Hot water extraction for stubborn buildup. Soft-wash techniques where needed to protect wood and paint. The difference is immediate.",
    details: [
      "Driveways & concrete surfaces",
      "House siding & exterior walls",
      "Decks, patios & pool surrounds",
      "Fences & retaining walls",
      "Soft-wash option for delicate surfaces",
    ],
  },
  {
    num: "04",
    title: "Deck & Fence",
    headline: "Restored, not replaced.",
    body: "Most decks and fences look worse than they are. Stripped, cleaned, stained, and sealed — they can come back beautifully. We evaluate the wood first and tell you honestly what it needs. Sometimes that's a full restoration. Sometimes it's simpler than you think.",
    details: [
      "Wood deck cleaning & staining",
      "Fence painting & staining",
      "Pressure washing before any application",
      "Sealant & protective coating options",
      "Honest condition assessment upfront",
    ],
  },
  {
    num: "05",
    title: "Residential",
    headline: "Your home deserves that level of care.",
    body: "We've worked in every type of residential property across the Triangle — bungalows, new construction, historic homes, large estates. The scope changes. The standard doesn't. We respect your home like it's ours.",
    details: [
      "Single-family homes of all sizes",
      "New construction walkthroughs",
      "Historic & older home experience",
      "Neighborhood-friendly scheduling",
      "Before & after photo documentation",
    ],
  },
  {
    num: "06",
    title: "Commercial",
    headline: "On schedule. On budget. On point.",
    body: "Commercial projects run on timelines that can't slip. We understand that. We've painted office buildings, retail spaces, and multi-unit properties across the area. Minimal disruption. Clean daily execution. Progress that keeps up with your schedule.",
    details: [
      "Office & retail interior painting",
      "Multi-unit & property management",
      "Flexible scheduling (evenings/weekends)",
      "Project management & progress updates",
      "Detailed written estimates",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── PAGE HEADER ─── */}
      <section
        className="pt-36 pb-20 lg:pt-48 lg:pb-28 px-6 lg:px-12"
        style={{ backgroundColor: "#0C1117" }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-medium mb-6" style={{ color: "#C9A96E" }}>
                Services
              </p>
              <h1
                className="font-display font-light leading-[0.95]"
                style={{
                  fontSize: "clamp(52px, 8vw, 120px)",
                  color: "#F5F1EB",
                  letterSpacing: "-0.025em",
                }}
              >
                What we do.
                <br />
                <em style={{ color: "#C9A96E" }}>Done right.</em>
              </h1>
            </div>
            <div className="max-w-xs">
              <p className="text-base leading-relaxed" style={{ color: "rgba(245,241,235,0.45)" }}>
                Six core services. Every one of them done by a family that takes what they put their hands on seriously.
              </p>
            </div>
          </div>
          <div
            className="mt-16 h-px"
            style={{ background: "linear-gradient(to right, #C9A96E 0%, transparent 100%)" }}
          />
        </div>
      </section>

      {/* ─── SERVICE SECTIONS ─── */}
      {services.map((svc, i) => (
        <section
          key={svc.num}
          className="py-20 lg:py-28 px-6 lg:px-12"
          style={{ backgroundColor: i % 2 === 0 ? "#F5F1EB" : "#EAE4D8" }}
        >
          <div className="max-w-[1440px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">
              {/* Large faded number */}
              <div className="hidden lg:block lg:col-span-1">
                <span
                  className="font-display text-7xl font-light"
                  style={{ color: "rgba(12,17,23,0.07)", lineHeight: 1 }}
                >
                  {svc.num}
                </span>
              </div>

              {/* Title & headline */}
              <div className="lg:col-span-4 lg:pr-12">
                <p className="text-xs uppercase tracking-[0.28em] font-medium mb-4" style={{ color: "#C9A96E" }}>
                  {svc.num}
                </p>
                <h2
                  className="font-display font-light leading-[1.0] mb-4"
                  style={{
                    fontSize: "clamp(32px, 3.5vw, 52px)",
                    color: "#0C1117",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {svc.title}
                </h2>
                <p
                  className="font-display italic"
                  style={{ fontSize: "clamp(18px, 2vw, 24px)", color: "#C9A96E" }}
                >
                  {svc.headline}
                </p>
              </div>

              {/* Body + details */}
              <div className="lg:col-span-7 lg:col-start-6">
                <p className="text-base leading-relaxed mb-8" style={{ color: "#3D4147" }}>
                  {svc.body}
                </p>
                <ul className="space-y-2.5">
                  {svc.details.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#C9A96E" }} />
                      <span className="text-sm" style={{ color: "#0C1117" }}>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── CTA ─── */}
      <section
        className="relative py-28 lg:py-40 px-6 lg:px-12 overflow-hidden"
        style={{ backgroundColor: "#0C1117" }}
      >
        <div
          className="absolute left-0 right-0 top-0 h-px"
          style={{ background: "linear-gradient(to right, transparent 10%, #C9A96E 50%, transparent 90%)" }}
        />
        <div className="max-w-[1440px] mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] font-medium mb-6" style={{ color: "#C9A96E" }}>
            Ready to start?
          </p>
          <h2
            className="font-display font-light leading-[0.95] mb-10"
            style={{
              fontSize: "clamp(40px, 6vw, 80px)",
              color: "#F5F1EB",
              letterSpacing: "-0.025em",
            }}
          >
            Free estimates.
            <br />
            <em style={{ color: "#C9A96E" }}>Always.</em>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all hover:gap-5"
              style={{ backgroundColor: "#C9A96E", color: "#0C1117" }}
            >
              Get a Free Estimate <ArrowUpRight size={15} strokeWidth={1.5} />
            </Link>
            <a
              href="tel:+19198675309"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm uppercase tracking-[0.18em] font-medium border transition-all hover:bg-white/5"
              style={{ borderColor: "rgba(245,241,235,0.15)", color: "rgba(245,241,235,0.7)" }}
            >
              <Phone size={14} strokeWidth={1.5} />
              (919) 867-5309
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
