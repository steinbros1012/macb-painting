import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Free Estimate | MAC'B Painting Triangle Area NC",
  description:
    "Get a free estimate from MAC'B Painting & Pressure Washing. Serving Raleigh, Durham, Chapel Hill, Cary & the Triangle Area of NC. Call (919) 867-5309.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-4" style={{ backgroundColor: "#1B4F8A" }}>
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] mb-5" style={{ color: "#E8A020" }}>Free Estimate</span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ letterSpacing: "-0.025em" }}>
            Let&apos;s talk about your project.
          </h1>
          <p className="text-white/65 text-lg">
            Fill out the form below or give us a call. We respond within 24 hours and estimates are always free.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 px-4" style={{ backgroundColor: "#F8F9FA" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-black mb-2" style={{ color: "#1B4F8A" }}>Request a Free Estimate</h2>
              <p className="text-neutral-500 text-sm mb-7">Tell us about your project and we&apos;ll be in touch within 24 hours.</p>
              <ContactForm />
            </div>

            {/* Info sidebar */}
            <div className="space-y-5">
              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(27,79,138,0.08)" }}>
                  <Phone size={18} style={{ color: "#1B4F8A" }} />
                </div>
                <h3 className="font-bold mb-1" style={{ color: "#212529" }}>Call Us</h3>
                <a href="tel:+19198675309" className="text-lg font-black transition-colors hover:opacity-80" style={{ color: "#1B4F8A" }}>
                  (919) 867-5309
                </a>
                <p className="text-xs text-neutral-400 mt-1">Mon–Sat, 7am–7pm</p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(27,79,138,0.08)" }}>
                  <Mail size={18} style={{ color: "#1B4F8A" }} />
                </div>
                <h3 className="font-bold mb-1" style={{ color: "#212529" }}>Email Us</h3>
                <a href="mailto:info@macbpainting.com" className="text-sm font-semibold transition-colors hover:opacity-80 break-all" style={{ color: "#1B4F8A" }}>
                  info@macbpainting.com
                </a>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(27,79,138,0.08)" }}>
                  <Clock size={18} style={{ color: "#1B4F8A" }} />
                </div>
                <h3 className="font-bold mb-3" style={{ color: "#212529" }}>Hours</h3>
                <div className="space-y-1 text-sm text-neutral-600">
                  <div className="flex justify-between"><span>Mon – Fri</span><span className="font-semibold">7:00am – 7:00pm</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="font-semibold">8:00am – 5:00pm</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="font-semibold text-neutral-400">Closed</span></div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "rgba(27,79,138,0.08)" }}>
                  <MapPin size={18} style={{ color: "#1B4F8A" }} />
                </div>
                <h3 className="font-bold mb-3" style={{ color: "#212529" }}>Service Area</h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Raleigh", "Durham", "Chapel Hill", "Cary", "Apex", "Morrisville", "Wake Forest", "Garner", "Clayton", "Fuquay-Varina"].map((city) => (
                    <span key={city} className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ backgroundColor: "#F1F3F5", color: "#343A40" }}>
                      {city}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-neutral-400 mt-3">Not sure if we serve your area? Give us a call!</p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="mt-8 rounded-2xl overflow-hidden border border-neutral-100 shadow-sm" style={{ height: "280px", backgroundColor: "#E9ECEF" }}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin size={32} className="mx-auto mb-3" style={{ color: "#1B4F8A" }} />
                <p className="font-bold" style={{ color: "#343A40" }}>Triangle Area, North Carolina</p>
                <p className="text-sm text-neutral-400 mt-1">Raleigh · Durham · Chapel Hill · Cary &amp; Surrounding Areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
