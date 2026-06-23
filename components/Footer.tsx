import Link from "next/link";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Pressure Washing",
  "Deck & Fence",
  "Residential",
  "Commercial",
];

const areas = [
  "Raleigh",
  "Durham",
  "Chapel Hill",
  "Cary",
  "Apex",
  "Wake Forest",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0C1117", color: "#F5F1EB" }}>
      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent 10%, #C9A96E 50%, transparent 90%)",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p
                className="font-display font-light italic"
                style={{ fontSize: "clamp(28px, 3vw, 38px)", color: "#F5F1EB", letterSpacing: "-0.01em", lineHeight: 1 }}
              >
                MAC&apos;B
              </p>
              <p className="text-[10px] uppercase tracking-[0.35em] mt-1" style={{ color: "#C9A96E" }}>
                Painting &amp; Pressure Washing
              </p>
            </div>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(245,241,235,0.45)" }}>
              Family-owned. Triangle Area, NC. Doing this work with care since the early 2000s.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+19198675309"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                style={{ color: "rgba(245,241,235,0.6)" }}
              >
                <Phone size={13} strokeWidth={1.5} style={{ color: "#C9A96E", flexShrink: 0 }} />
                (919) 867-5309
              </a>
              <a
                href="mailto:info@macbpainting.com"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                style={{ color: "rgba(245,241,235,0.6)" }}
              >
                <Mail size={13} strokeWidth={1.5} style={{ color: "#C9A96E", flexShrink: 0 }} />
                info@macbpainting.com
              </a>
              <div className="flex items-start gap-3 text-sm" style={{ color: "rgba(245,241,235,0.6)" }}>
                <MapPin size={13} strokeWidth={1.5} style={{ color: "#C9A96E", flexShrink: 0, marginTop: 2 }} />
                <span>Triangle Area, NC<br />Raleigh · Durham · Chapel Hill · Cary</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] font-medium mb-6" style={{ color: "#C9A96E" }}>
              Services
            </p>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href={`/services#${s.toLowerCase().replace(/ &/g, "").replace(/ /g, "-")}`}
                    className="text-sm transition-opacity hover:opacity-100"
                    style={{ color: "rgba(245,241,235,0.5)" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] font-medium mb-6" style={{ color: "#C9A96E" }}>
              Service Areas
            </p>
            <ul className="space-y-3">
              {areas.map((a) => (
                <li key={a}>
                  <span className="text-sm" style={{ color: "rgba(245,241,235,0.5)" }}>
                    {a}, NC
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA + Nav */}
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] font-medium mb-6" style={{ color: "#C9A96E" }}>
              Get Started
            </p>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(245,241,235,0.45)" }}>
              Free estimates. Honest pricing. Work you&apos;ll be proud to show off.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-6 py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-all hover:gap-5"
              style={{ backgroundColor: "#C9A96E", color: "#0C1117" }}
            >
              Free Estimate <ArrowUpRight size={14} strokeWidth={1.5} />
            </Link>

            <div className="mt-10 space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <div key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-opacity hover:opacity-100"
                    style={{ color: "rgba(245,241,235,0.4)" }}
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-16 pt-6 border-t flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{ borderColor: "rgba(245,241,235,0.07)" }}
        >
          <p className="text-xs" style={{ color: "rgba(245,241,235,0.25)" }}>
            &copy; {new Date().getFullYear()} MAC&apos;B Painting &amp; Pressure Washing. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(245,241,235,0.2)" }}>
            Licensed &amp; Insured · Serving the Triangle Area of NC
          </p>
        </div>
      </div>
    </footer>
  );
}
