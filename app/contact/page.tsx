import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get a free estimate from MAC'B Painting & Pressure Washing. Serving Raleigh, Durham, Chapel Hill, Cary, and the Triangle Area of NC. Call or fill out the form.",
};

const areas = [
  "Raleigh", "Durham", "Chapel Hill",
  "Cary", "Apex", "Wake Forest",
  "Morrisville", "Garner", "Clayton",
  "Holly Springs", "Fuquay-Varina", "Pittsboro",
];

export default function ContactPage() {
  return (
    <>
      {/* ─── HEADER ─── */}
      <section
        className="pt-36 pb-20 lg:pt-48 lg:pb-28 px-6 lg:px-12"
        style={{ backgroundColor: "#0C1117" }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] font-medium mb-6" style={{ color: "#C9A96E" }}>
                Contact
              </p>
              <h1
                className="font-display font-light leading-[0.9]"
                style={{
                  fontSize: "clamp(52px, 7vw, 100px)",
                  color: "#F5F1EB",
                  letterSpacing: "-0.025em",
                }}
              >
                Let&apos;s talk
                <br />
                <em style={{ color: "#C9A96E" }}>about your</em>
                <br />
                project.
              </h1>
            </div>
            <div>
              <p className="text-base leading-relaxed mb-10" style={{ color: "rgba(245,241,235,0.5)" }}>
                Free estimates. No pressure. Just an honest conversation about what your property needs and what it would cost to do it right.
              </p>

              <div className="space-y-5">
                <a
                  href="tel:+19198675309"
                  className="flex items-center gap-4 transition-opacity hover:opacity-70"
                >
                  <div className="w-10 h-10 flex items-center justify-center border flex-shrink-0" style={{ borderColor: "rgba(201,169,110,0.3)" }}>
                    <Phone size={15} strokeWidth={1.5} style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] mb-0.5" style={{ color: "rgba(245,241,235,0.3)" }}>Phone</p>
                    <p className="text-base font-medium" style={{ color: "#F5F1EB" }}>(919) 867-5309</p>
                  </div>
                </a>
                <a
                  href="mailto:info@macbpainting.com"
                  className="flex items-center gap-4 transition-opacity hover:opacity-70"
                >
                  <div className="w-10 h-10 flex items-center justify-center border flex-shrink-0" style={{ borderColor: "rgba(201,169,110,0.3)" }}>
                    <Mail size={15} strokeWidth={1.5} style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] mb-0.5" style={{ color: "rgba(245,241,235,0.3)" }}>Email</p>
                    <p className="text-base font-medium" style={{ color: "#F5F1EB" }}>info@macbpainting.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border flex-shrink-0" style={{ borderColor: "rgba(201,169,110,0.3)" }}>
                    <Clock size={15} strokeWidth={1.5} style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] mb-0.5" style={{ color: "rgba(245,241,235,0.3)" }}>Hours</p>
                    <p className="text-base font-medium" style={{ color: "#F5F1EB" }}>Mon–Sat · 7am–6pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center border flex-shrink-0" style={{ borderColor: "rgba(201,169,110,0.3)" }}>
                    <MapPin size={15} strokeWidth={1.5} style={{ color: "#C9A96E" }} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] mb-0.5" style={{ color: "rgba(245,241,235,0.3)" }}>Service Area</p>
                    <p className="text-base font-medium" style={{ color: "#F5F1EB" }}>Triangle Area, NC</p>
                    <p className="text-sm mt-0.5" style={{ color: "rgba(245,241,235,0.4)" }}>Raleigh · Durham · Chapel Hill · Cary &amp; beyond</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FORM SECTION ─── */}
      <section className="py-20 lg:py-28 px-6 lg:px-12" style={{ backgroundColor: "#F5F1EB" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">

            {/* Left label column */}
            <div className="lg:col-span-4 lg:pr-16">
              <p className="text-xs uppercase tracking-[0.3em] font-medium mb-6" style={{ color: "#C9A96E" }}>
                Free Estimate Request
              </p>
              <h2
                className="font-display font-light leading-[1.0] mb-8"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  color: "#0C1117",
                  letterSpacing: "-0.02em",
                }}
              >
                Tell us about
                <br />
                <em>your project.</em>
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "#3D4147" }}>
                We&apos;ll get back to you within one business day to schedule a walkthrough. No commitment required.
              </p>
              <div className="space-y-3">
                {[
                  "Free, no-obligation estimate",
                  "We come to your property",
                  "Written quote provided",
                  "Response within 1 business day",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: "#C9A96E" }} />
                    <span className="text-sm" style={{ color: "#0C1117" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-7 lg:col-start-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICE AREAS ─── */}
      <section className="py-20 px-6 lg:px-12" style={{ backgroundColor: "#EAE4D8" }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-0">
            <div className="lg:w-1/3 lg:pr-20">
              <p className="text-xs uppercase tracking-[0.3em] font-medium mb-4" style={{ color: "#C9A96E" }}>
                Where We Serve
              </p>
              <h2
                className="font-display font-light leading-[1.0]"
                style={{
                  fontSize: "clamp(28px, 3vw, 44px)",
                  color: "#0C1117",
                  letterSpacing: "-0.02em",
                }}
              >
                Covering the
                <br />
                <em style={{ color: "#C9A96E" }}>whole Triangle.</em>
              </h2>
            </div>
            <div className="lg:w-2/3">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-3">
                {areas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "#C9A96E" }} />
                    <span className="text-sm" style={{ color: "#0C1117" }}>{area}, NC</span>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-6 uppercase tracking-[0.18em]" style={{ color: "#8B8E99" }}>
                Not sure if we cover your area? Call us — we likely do.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
