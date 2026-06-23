import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before and after project photos from MAC'B Painting & Pressure Washing across the Triangle Area of NC — interior painting, exterior painting, pressure washing, deck restoration.",
};

const projects = [
  {
    id: 1,
    type: "Exterior Painting",
    location: "Raleigh, NC",
    size: "large",
    colorBefore: "linear-gradient(145deg, #3D4147 0%, #212529 100%)",
    colorAfter: "linear-gradient(145deg, #1A2942 0%, #0C1117 100%)",
  },
  {
    id: 2,
    type: "Interior Painting",
    location: "Durham, NC",
    size: "medium",
    colorBefore: "linear-gradient(145deg, #4A4A4A 0%, #2C2C2C 100%)",
    colorAfter: "linear-gradient(145deg, #C9A96E 0%, #A07840 100%)",
  },
  {
    id: 3,
    type: "Deck Restoration",
    location: "Cary, NC",
    size: "medium",
    colorBefore: "linear-gradient(145deg, #5C4A3A 0%, #3D2E1E 100%)",
    colorAfter: "linear-gradient(145deg, #8B6914 0%, #6B500F 100%)",
  },
  {
    id: 4,
    type: "Pressure Washing",
    location: "Chapel Hill, NC",
    size: "large",
    colorBefore: "linear-gradient(145deg, #4A4A4A 0%, #2A2A2A 100%)",
    colorAfter: "linear-gradient(145deg, #E8E0D0 0%, #D4CEBD 100%)",
  },
  {
    id: 5,
    type: "Exterior Painting",
    location: "Apex, NC",
    size: "small",
    colorBefore: "linear-gradient(145deg, #3A3A3A 0%, #252525 100%)",
    colorAfter: "linear-gradient(145deg, #2C3E50 0%, #1A2942 100%)",
  },
  {
    id: 6,
    type: "Interior Painting",
    location: "Wake Forest, NC",
    size: "small",
    colorBefore: "linear-gradient(145deg, #4A4040 0%, #302020 100%)",
    colorAfter: "linear-gradient(145deg, #F5F1EB 0%, #EAE4D8 100%)",
  },
  {
    id: 7,
    type: "Fence Painting",
    location: "Morrisville, NC",
    size: "medium",
    colorBefore: "linear-gradient(145deg, #5C5040 0%, #3A3020 100%)",
    colorAfter: "linear-gradient(145deg, #FFFFFF 0%, #E0E0D8 100%)",
  },
  {
    id: 8,
    type: "Exterior Painting",
    location: "Durham, NC",
    size: "large",
    colorBefore: "linear-gradient(145deg, #3A3030 0%, #252020 100%)",
    colorAfter: "linear-gradient(145deg, #C9A96E 0%, #8B6914 100%)",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section
        className="pt-36 pb-20 lg:pt-48 lg:pb-28 px-6 lg:px-12"
        style={{ backgroundColor: "#0C1117" }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-medium mb-6" style={{ color: "#C9A96E" }}>
                Our Work
              </p>
              <h1
                className="font-display font-light leading-[0.9]"
                style={{
                  fontSize: "clamp(52px, 8vw, 120px)",
                  color: "#F5F1EB",
                  letterSpacing: "-0.025em",
                }}
              >
                The results
                <br />
                <em style={{ color: "#C9A96E" }}>speak clearly.</em>
              </h1>
            </div>
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: "rgba(245,241,235,0.4)" }}>
              Before and after project photos from homes and commercial properties across the Triangle Area of NC. Real work. Real results.
            </p>
          </div>

          {/* Filter tags */}
          <div className="flex flex-wrap gap-2 mt-12">
            {["All Work", "Interior", "Exterior", "Pressure Washing", "Deck & Fence"].map((tag, i) => (
              <span
                key={tag}
                className="text-[10px] uppercase tracking-[0.2em] px-4 py-2 border cursor-pointer transition-all"
                style={{
                  borderColor: i === 0 ? "#C9A96E" : "rgba(245,241,235,0.12)",
                  color: i === 0 ? "#C9A96E" : "rgba(245,241,235,0.4)",
                  backgroundColor: i === 0 ? "rgba(201,169,110,0.08)" : "transparent",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GALLERY GRID ─── */}
      <section className="py-12 px-6 lg:px-12" style={{ backgroundColor: "#F5F1EB" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group relative overflow-hidden rounded-sm ${
                  project.size === "large" ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
                style={{ height: project.size === "large" ? "440px" : project.size === "medium" ? "340px" : "260px" }}
              >
                {/* Before/After split */}
                <div className="absolute inset-0 flex">
                  <div
                    className="w-1/2 h-full relative"
                    style={{ background: project.colorBefore }}
                  >
                    <div className="absolute bottom-4 left-4">
                      <span
                        className="text-[9px] uppercase tracking-[0.2em] px-2 py-1"
                        style={{ backgroundColor: "rgba(12,17,23,0.6)", color: "rgba(245,241,235,0.5)" }}
                      >
                        Before
                      </span>
                    </div>
                  </div>
                  <div className="w-px" style={{ backgroundColor: "rgba(245,241,235,0.3)" }} />
                  <div
                    className="w-1/2 h-full relative"
                    style={{ background: project.colorAfter }}
                  >
                    <div className="absolute bottom-4 right-4">
                      <span
                        className="text-[9px] uppercase tracking-[0.2em] px-2 py-1"
                        style={{ backgroundColor: "rgba(201,169,110,0.8)", color: "#0C1117" }}
                      >
                        After
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6"
                  style={{ background: "linear-gradient(to top, rgba(12,17,23,0.85) 0%, transparent 60%)" }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#F5F1EB" }}>{project.type}</p>
                    <p className="text-xs uppercase tracking-[0.18em] mt-0.5" style={{ color: "#C9A96E" }}>
                      {project.location}
                    </p>
                  </div>
                </div>

                {/* Default label */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[9px] uppercase tracking-[0.18em]"
                    style={{ color: "rgba(245,241,235,0.4)" }}
                  >
                    {project.type} · {project.location}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs uppercase tracking-[0.2em] mt-8 mb-4" style={{ color: "#8B8E99" }}>
            Showing sample project placeholders — real project photos coming soon
          </p>
        </div>
      </section>

      {/* ─── PORTFOLIO NOTE ─── */}
      <section className="py-20 px-6 lg:px-12" style={{ backgroundColor: "#EAE4D8" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <h2
                className="font-display font-light leading-[1.0]"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 48px)",
                  color: "#0C1117",
                  letterSpacing: "-0.02em",
                }}
              >
                Want to see more
                <br />
                <em style={{ color: "#C9A96E" }}>before &amp; after work?</em>
              </h2>
            </div>
            <div className="lg:col-span-6 space-y-5">
              <p className="text-base leading-relaxed" style={{ color: "#3D4147" }}>
                We have extensive before and after documentation from projects across the Triangle. Ask us to share the full portfolio when you reach out — we&apos;re happy to show you work from properties similar to yours.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all hover:gap-5"
                style={{ backgroundColor: "#0C1117", color: "#F5F1EB" }}
              >
                Request Full Portfolio <ArrowUpRight size={15} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
