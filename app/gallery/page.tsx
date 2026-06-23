import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Gallery | MAC'B Painting & Pressure Washing NC",
  description:
    "View before and after photos of painting and pressure washing projects completed by MAC'B Painting in the Triangle Area of NC.",
};

const categories = [
  { label: "All", id: "all" },
  { label: "Exterior Painting", id: "exterior" },
  { label: "Interior Painting", id: "interior" },
  { label: "Pressure Washing", id: "pressure" },
  { label: "Deck & Fence", id: "deck" },
];

// Placeholder project data
const projects = [
  { id: 1, category: "exterior", title: "Exterior Repaint — Raleigh", tag: "After", bgColor: "#1B4F8A", note: "Full exterior repaint, trim & shutters" },
  { id: 2, category: "exterior", title: "Exterior Repaint — Raleigh", tag: "Before", bgColor: "#9CA3AF", note: "Faded original paint, 15 years old" },
  { id: 3, category: "interior", title: "Interior Living Room — Durham", tag: "After", bgColor: "#2E6CB8", note: "Accent wall + ceiling paint" },
  { id: 4, category: "interior", title: "Interior Living Room — Durham", tag: "Before", bgColor: "#D1D5DB", note: "Scuffed walls, dated color" },
  { id: 5, category: "pressure", title: "Driveway Wash — Cary", tag: "After", bgColor: "#E9ECEF", note: "Concrete driveway cleaning" },
  { id: 6, category: "pressure", title: "Driveway Wash — Cary", tag: "Before", bgColor: "#6B7280", note: "Heavy mold, oil stains" },
  { id: 7, category: "deck", title: "Deck Restoration — Apex", tag: "After", bgColor: "#C8880E", note: "Clean + stain + seal" },
  { id: 8, category: "deck", title: "Deck Restoration — Apex", tag: "Before", bgColor: "#92400E", note: "Weathered, gray, splinters" },
  { id: 9, category: "exterior", title: "Commercial Building — Chapel Hill", tag: "After", bgColor: "#143D6B", note: "Full building exterior" },
  { id: 10, category: "interior", title: "Kitchen & Dining — Wake Forest", tag: "After", bgColor: "#1E3A5F", note: "Cabinets + walls" },
  { id: 11, category: "pressure", title: "House Siding Wash — Garner", tag: "After", bgColor: "#374151", note: "Vinyl siding, mold removal" },
  { id: 12, category: "deck", title: "Fence Cleaning — Morrisville", tag: "After", bgColor: "#78350F", note: "Privacy fence, 6 panels" },
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4" style={{ backgroundColor: "#1B4F8A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "#E8A020" }}>Our Work</span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6" style={{ letterSpacing: "-0.025em" }}>
            See the results for yourself.
          </h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto">
            Real projects. Real results. Browse before &amp; after photos from our work across the Triangle Area of NC.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto">

          {/* Filter pills — display only, no JS filter to avoid "use client" on this static page */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((c) => (
              <span
                key={c.id}
                className="px-4 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all"
                style={{
                  backgroundColor: c.id === "all" ? "#1B4F8A" : "#ffffff",
                  color: c.id === "all" ? "#ffffff" : "#343A40",
                  border: "1px solid #E9ECEF",
                }}
              >
                {c.label}
              </span>
            ))}
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
            {projects.map((p) => (
              <div
                key={p.id}
                className="break-inside-avoid rounded-xl overflow-hidden relative group"
                style={{ backgroundColor: p.bgColor }}
              >
                <div className="aspect-[4/3] flex items-end p-3">
                  <div className="w-full">
                    <span
                      className="inline-block text-xs font-bold px-2 py-1 rounded-md mb-1"
                      style={{
                        backgroundColor: p.tag === "After" ? "#E8A020" : "rgba(0,0,0,0.45)",
                        color: "#ffffff",
                      }}
                    >
                      {p.tag}
                    </span>
                    <p className="text-xs text-white/70 leading-snug">{p.note}</p>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <p className="text-white text-xs font-semibold text-center px-3">{p.title}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center p-8 rounded-2xl" style={{ backgroundColor: "#ffffff", border: "1px solid #E9ECEF" }}>
            <p className="text-neutral-600 mb-2 font-semibold">Project photos are being added regularly.</p>
            <p className="text-sm text-neutral-400 mb-6">Want to see more examples from your specific project type? We&apos;re happy to share additional photos during your free estimate consultation.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all" style={{ backgroundColor: "#1B4F8A" }}>
              Request a Free Estimate <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
