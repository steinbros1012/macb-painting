import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "MAC'B Painting is a family-owned painting and pressure washing company in the Triangle Area of NC. Our story started in the early 2000s with a simple commitment: do the work right.",
};

const timeline = [
  {
    year: "Early 2000s",
    headline: "A craftsman starts something.",
    body: "One person. A brush, some rollers, and a reputation built job by job across the Triangle. The work was honest. The pricing was fair. Clients called back.",
  },
  {
    year: "2010s",
    headline: "The business grows. The scope widens.",
    body: "By this point, the demand had grown enough that the company expanded into full home remodeling. Kitchens, bathrooms, additions. Ten years of building things from the ground up — and building a team that knew how to work.",
  },
  {
    year: "A deliberate return.",
    headline: "Back to painting. By choice.",
    body: "After a decade of remodeling, the decision was made to come back to what started it all. Not because remodeling failed — it didn't. But because painting and pressure washing, done by people who actually care, is something rare. We wanted to be that thing.",
  },
  {
    year: "Today",
    headline: "Family-owned. Triangle-focused.",
    body: "MAC'B is still a family operation. That means the people who answer your call are the same people doing the work. No subcontractors. No hand-off. We're the ones who care about your house because our name is attached to it.",
  },
];

const values = [
  {
    label: "Honest Estimates",
    body: "We tell you what things cost before we start. No padding. No surprises after the job. If the scope changes, you hear from us first.",
  },
  {
    label: "Proper Prep",
    body: "The prep is where most painters cut corners. We don't. Surface cleaning, sanding, priming, caulking — all of it before a drop of paint goes on.",
  },
  {
    label: "Consistent Crew",
    body: "The people who show up on day one show up on the last day. We don't send strangers. The quality is consistent because the crew is consistent.",
  },
  {
    label: "Clean Sites",
    body: "We treat your home like a workspace that needs to be left better than we found it. Drop cloths down, paint off the floors, tools cleared out. Every day.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section
        className="pt-36 pb-0 lg:pt-48 px-6 lg:px-12 overflow-hidden"
        style={{ backgroundColor: "#0C1117" }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-20 lg:pb-32">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] font-medium mb-8" style={{ color: "#C9A96E" }}>
                Our Story
              </p>
              <h1
                className="font-display font-light leading-[0.9]"
                style={{
                  fontSize: "clamp(56px, 9vw, 130px)",
                  color: "#F5F1EB",
                  letterSpacing: "-0.025em",
                }}
              >
                A father&apos;s craft,
                <br />
                <em style={{ color: "#C9A96E" }}>carried</em>
                <br />
                forward.
              </h1>
            </div>
            <div className="lg:col-span-5 lg:pb-6">
              <p className="text-base leading-relaxed" style={{ color: "rgba(245,241,235,0.5)" }}>
                MAC&apos;B Painting &amp; Pressure Washing has been part of the Triangle Area for over two decades. This is a family business — which means everything about how we operate is tied to a name we take seriously.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all hover:gap-5"
                  style={{ backgroundColor: "#C9A96E", color: "#0C1117" }}
                >
                  Get a Free Estimate <ArrowUpRight size={15} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>

          {/* Large photo placeholder */}
          <div
            className="w-full h-[380px] lg:h-[520px]"
            style={{
              background: "linear-gradient(160deg, #1A2942 0%, #0C1117 60%, rgba(201,169,110,0.13) 100%)",
            }}
          >
            <div className="w-full h-full flex items-end p-8 lg:p-14">
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: "rgba(245,241,235,0.3)" }}>
                The team · Triangle Area, NC
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TIMELINE ─── */}
      <section className="py-28 lg:py-40 px-6 lg:px-12" style={{ backgroundColor: "#F5F1EB" }}>
        <div className="max-w-[1440px] mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] font-medium mb-16 lg:mb-24" style={{ color: "#C9A96E" }}>
            How We Got Here
          </p>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-12 py-10 lg:py-14 border-t gap-6 lg:gap-0"
                style={{ borderColor: "rgba(12,17,23,0.1)" }}
              >
                <div className="lg:col-span-3">
                  <p
                    className="font-display italic"
                    style={{ fontSize: "clamp(16px, 1.5vw, 20px)", color: "#C9A96E" }}
                  >
                    {item.year}
                  </p>
                </div>
                <div className="lg:col-span-4 lg:pr-10">
                  <h3
                    className="font-display font-light leading-[1.1]"
                    style={{ fontSize: "clamp(22px, 2.5vw, 34px)", color: "#0C1117", letterSpacing: "-0.015em" }}
                  >
                    {item.headline}
                  </h3>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-base leading-relaxed" style={{ color: "#3D4147" }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-28 lg:py-40 px-6 lg:px-12" style={{ backgroundColor: "#EAE4D8" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 mb-16 lg:mb-24">
            <div className="lg:col-span-5">
              <p className="text-xs uppercase tracking-[0.3em] font-medium mb-6" style={{ color: "#C9A96E" }}>
                How We Work
              </p>
              <h2
                className="font-display font-light leading-[0.95]"
                style={{
                  fontSize: "clamp(38px, 4.5vw, 64px)",
                  color: "#0C1117",
                  letterSpacing: "-0.02em",
                }}
              >
                What a
                <br />
                <em>family business</em>
                <br />
                actually means.
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 flex items-end">
              <p className="text-base leading-relaxed" style={{ color: "#3D4147" }}>
                It means the person whose name is on the truck is the same person answering your questions and checking the work. Accountability isn&apos;t a policy — it&apos;s personal.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "#D4CEBD" }}>
            {values.map((v) => (
              <div key={v.label} className="p-10 lg:p-14" style={{ backgroundColor: "#EAE4D8" }}>
                <p
                  className="font-display italic mb-4"
                  style={{ fontSize: "clamp(20px, 2vw, 26px)", color: "#0C1117" }}
                >
                  {v.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#3D4147" }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="py-16 lg:py-20 px-6 lg:px-12" style={{ backgroundColor: "#0C1117" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x" style={{ borderColor: "rgba(245,241,235,0.08)" }}>
            {[
              { val: "20+", label: "Years in the Triangle" },
              { val: "500+", label: "Completed Projects" },
              { val: "6", label: "Core Services" },
              { val: "100%", label: "Family-Owned" },
            ].map((s) => (
              <div key={s.label} className="px-8 py-6 text-center" style={{ borderColor: "rgba(245,241,235,0.08)" }}>
                <p className="font-display text-4xl font-light" style={{ color: "#C9A96E" }}>
                  {s.val}
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] mt-2" style={{ color: "rgba(245,241,235,0.3)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-28 lg:py-36 px-6 lg:px-12" style={{ backgroundColor: "#F5F1EB" }}>
        <div className="max-w-[1440px] mx-auto text-center">
          <h2
            className="font-display font-light leading-[0.95] mb-8"
            style={{
              fontSize: "clamp(38px, 5vw, 72px)",
              color: "#0C1117",
              letterSpacing: "-0.02em",
            }}
          >
            See what we can do
            <br />
            <em style={{ color: "#C9A96E" }}>for your property.</em>
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all hover:gap-5"
            style={{ backgroundColor: "#0C1117", color: "#F5F1EB" }}
          >
            Request a Free Estimate <ArrowUpRight size={15} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
}
