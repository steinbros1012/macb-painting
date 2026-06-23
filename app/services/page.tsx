import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Painting & Pressure Washing Services | Triangle Area NC",
  description:
    "Interior painting, exterior painting, residential, commercial, pressure washing, and deck cleaning services in the Triangle Area of NC. Free estimates.",
};

const services = [
  {
    id: "interior",
    title: "Interior Painting",
    tagline: "Transform your space from the inside out.",
    desc: "Interior painting is where attention to detail really matters. We protect your furniture and floors, apply the right primer, and deliver a finish that looks clean and lasts. Whether it's one bedroom or an entire house interior, we take the same care throughout.",
    bullets: ["Full prep and surface protection", "Walls, ceilings, trim, and doors", "Color consultation available", "Premium Benjamin Moore & Sherwin-Williams paints", "Clean-up included"],
    emoji: "🎨",
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    tagline: "Your home's first impression, done right.",
    desc: "Exterior painting protects your home against the elements while dramatically improving curb appeal. We pressure wash first, repair any damaged surfaces, prime properly, and apply weather-resistant coatings that look great and hold up in North Carolina's climate.",
    bullets: ["Pressure wash and prep before painting", "Caulking and minor surface repairs included", "Weather-resistant premium exterior coatings", "Siding, trim, shutters, doors, porches", "Multi-year durability"],
    emoji: "🏠",
  },
  {
    id: "residential",
    title: "Residential Painting",
    tagline: "Full-service painting for your home.",
    desc: "Complete residential painting services — interior and exterior — for homeowners across the Triangle Area. We treat your home with care, communicate clearly throughout the project, and don't leave until you're satisfied with the result.",
    bullets: ["Interior and exterior available", "Full home or single-room projects", "Satisfaction commitment on every job", "Serving Raleigh, Durham, Chapel Hill, Cary & surrounding areas", "Free estimates, transparent pricing"],
    emoji: "🏡",
  },
  {
    id: "commercial",
    title: "Commercial Painting",
    tagline: "Professional results with minimal business disruption.",
    desc: "Commercial painting for offices, retail spaces, warehouses, and more. We understand that time is money in a commercial environment — we work efficiently, communicate our schedule, and minimize disruption to your operations.",
    bullets: ["Offices, retail, warehouses, restaurants", "Flexible scheduling including nights and weekends", "Safety-compliant for commercial sites", "VOC-compliant paints available", "Consistent results across large surface areas"],
    emoji: "🏢",
  },
  {
    id: "pressure-washing",
    title: "Pressure Washing",
    tagline: "Remove years of buildup in a single day.",
    desc: "Professional pressure washing for driveways, walkways, siding, brick, concrete, and more. We use the right PSI for each surface — enough to get it clean without damaging the material. Before and after results are dramatic.",
    bullets: ["Driveways, sidewalks, patios", "House siding and brick", "Concrete and asphalt surfaces", "Safe for most surfaces when done correctly", "Preparation for painting or staining"],
    emoji: "💧",
  },
  {
    id: "deck-fence",
    title: "Deck & Fence Cleaning",
    tagline: "Restore weathered wood to like-new condition.",
    desc: "Decks and fences take a beating from North Carolina weather. We clean, brighten, and restore wood surfaces that have gone gray, green, or grimy. Staining and sealing services available after cleaning.",
    bullets: ["Removes mold, mildew, algae, and discoloration", "Safe for all wood types", "Brightening treatment available", "Staining and sealing after cleaning", "Extends the life of your wood surfaces"],
    emoji: "🌿",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4" style={{ backgroundColor: "#1B4F8A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "#E8A020" }}>Services</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6" style={{ letterSpacing: "-0.025em" }}>
            Everything your property needs.
          </h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto leading-relaxed">
            From a single accent wall to a full commercial repaint to a pressure washing overhaul — we do it all, and we do it right.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto space-y-0">
          {services.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="py-16 border-b border-neutral-100 last:border-0 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="text-4xl mb-5">{s.emoji}</div>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-3" style={{ color: "#E8A020" }}>
                  Service
                </span>
                <h2 className="text-3xl sm:text-4xl font-black mb-2" style={{ color: "#1B4F8A", letterSpacing: "-0.025em" }}>
                  {s.title}
                </h2>
                <p className="text-lg font-semibold mb-4" style={{ color: "#212529" }}>{s.tagline}</p>
                <p className="text-neutral-600 leading-relaxed mb-6">{s.desc}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all" style={{ backgroundColor: "#E8A020" }}>
                  Get a Free Estimate <ArrowRight size={15} />
                </Link>
              </div>
              <div className={`p-8 rounded-2xl ${i % 2 === 1 ? "lg:order-1" : ""}`} style={{ backgroundColor: "#F8F9FA", border: "1px solid #E9ECEF" }}>
                <h3 className="font-bold text-sm uppercase tracking-widest mb-5" style={{ color: "#6C757D" }}>What&apos;s Included</h3>
                <ul className="space-y-3">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-neutral-700">
                      <CheckCircle size={16} className="text-[#1B4F8A] flex-shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: "#E8A020" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.025em" }}>
            Not sure which service you need?
          </h2>
          <p className="text-white/80 mb-8">Give us a call or send us a message. We&apos;ll walk you through it and give you an honest recommendation — no pressure.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="px-7 py-3.5 rounded-lg font-bold bg-white text-[#E8A020] transition-all">
              Request a Free Estimate
            </Link>
            <a href="tel:+19198675309" className="px-7 py-3.5 rounded-lg font-bold border-2 border-white/40 text-white hover:bg-white/10 transition-all">
              Call (919) 867-5309
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
