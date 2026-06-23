import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — Family-Owned Painting Contractor | Triangle Area NC",
  description:
    "Learn about MAC'B Painting & Pressure Washing — a family-owned business serving the Triangle Area of NC since the early 2000s. Over 20 years of honest, quality craftsmanship.",
};

const timeline = [
  { year: "Early 2000s", title: "Where It Started", desc: "The owner's father picked up a paintbrush and started painting homes in the Triangle Area. Word spread fast — because the work was good and the price was honest." },
  { year: "2012", title: "Expansion into Remodeling", desc: "As demand grew, the company expanded into full home remodeling — kitchens, bathrooms, additions. Over a decade of building experience followed." },
  { year: "2020s", title: "Back to the Craft", desc: "After more than a decade in remodeling, the decision was made to return to the core: painting and pressure washing. These are the services done best, and that focus shows." },
  { year: "Today", title: "Serving the Triangle", desc: "MAC'B Painting & Pressure Washing serves homeowners and businesses across Raleigh, Durham, Chapel Hill, Cary, Apex, and the greater Triangle Area." },
];

const values = [
  { title: "Honest Communication", desc: "We tell you what the job actually needs, what it will cost, and how long it will take — before we start." },
  { title: "Quality Craftsmanship", desc: "We don't rush. Proper prep, proper materials, proper technique. That's how you get results that last." },
  { title: "Reliable Service", desc: "We show up when we say we will. We finish when we say we will. We answer the phone." },
  { title: "Family Values", desc: "This is a family business. Your home is someone's home too. We treat it like it matters." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-4" style={{ backgroundColor: "#1B4F8A" }}>
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "#E8A020" }}>
            About MAC&apos;B
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-white mb-6" style={{ letterSpacing: "-0.025em" }}>
            A family business built on 20+ years of honest work.
          </h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;re not a franchise. We&apos;re not a call center. We&apos;re a family that has been painting and pressure washing in the Triangle Area for over two decades — and we take that reputation seriously.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "#E8A020" }}>
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6" style={{ color: "#1B4F8A", letterSpacing: "-0.025em" }}>
                It started with one father, one paintbrush, and a commitment to doing things right.
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  In the early 2000s, the owner&apos;s father began painting homes in North Carolina&apos;s Triangle Area. Not because he had a business plan or a marketing strategy — but because he was good at it, and people kept calling.
                </p>
                <p>
                  That word-of-mouth reputation grew into a real business. By 2012, MAC&apos;B expanded into home remodeling — and spent over a decade building kitchens, bathrooms, additions, and everything in between. Good years. A lot of learning.
                </p>
                <p>
                  But after more than a decade in remodeling, the decision was made to come back to what started it all: painting and pressure washing. These are the services the company knows best. These are the services that get the most consistent, excellent results.
                </p>
                <p>
                  Today, MAC&apos;B Painting &amp; Pressure Washing focuses exclusively on painting and pressure washing across the Triangle Area — and the quality of that focus is something you can see in every finished project.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-bold text-white transition-all" style={{ backgroundColor: "#E8A020" }}>
                  Start Your Project <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-0">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-black text-white flex-shrink-0" style={{ backgroundColor: i === timeline.length - 1 ? "#E8A020" : "#1B4F8A" }}>
                      {i + 1}
                    </div>
                    {i < timeline.length - 1 && <div className="w-0.5 flex-1 mt-2 mb-2" style={{ backgroundColor: "#E9ECEF" }} />}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#E8A020" }}>{item.year}</span>
                    <h3 className="text-lg font-bold mt-1 mb-2" style={{ color: "#212529" }}>{item.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ color: "#E8A020" }}>
              Core Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-black" style={{ color: "#1B4F8A", letterSpacing: "-0.025em" }}>
              What we believe
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {values.map((v) => (
              <div key={v.title} className="p-7 bg-white rounded-2xl border border-neutral-100">
                <div className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-[#E8A020] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-base mb-1.5" style={{ color: "#212529" }}>{v.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1B4F8A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4" style={{ letterSpacing: "-0.025em" }}>
            Ready to work with a team you can trust?
          </h2>
          <p className="text-white/60 mb-8">Free estimates. Honest pricing. Quality results. That&apos;s MAC&apos;B.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-4 rounded-lg font-bold text-white transition-all" style={{ backgroundColor: "#E8A020" }}>
            Get a Free Estimate <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
