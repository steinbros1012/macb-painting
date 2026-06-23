import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { label: "Interior Painting", href: "/services#interior" },
  { label: "Exterior Painting", href: "/services#exterior" },
  { label: "Residential Painting", href: "/services#residential" },
  { label: "Commercial Painting", href: "/services#commercial" },
  { label: "Pressure Washing", href: "/services#pressure-washing" },
  { label: "Deck & Fence Cleaning", href: "/services#deck-fence" },
];

const pages = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Free Estimate", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1B4F8A", color: "rgba(255,255,255,0.85)" }}>
      {/* CTA strip */}
      <div style={{ backgroundColor: "#E8A020" }} className="py-5 px-4 text-center">
        <p className="font-black text-white text-lg">
          Ready to transform your property?{" "}
          <a href="tel:+19198675309" className="underline hover:no-underline ml-1">
            Call (919) 867-5309
          </a>{" "}
          or{" "}
          <Link href="/contact" className="underline hover:no-underline">
            request a free estimate online.
          </Link>
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-[#1B4F8A] text-sm" style={{ backgroundColor: "#E8A020" }}>
                M&apos;B
              </div>
              <div>
                <div className="font-black text-white text-sm leading-tight">MAC&apos;B PAINTING</div>
                <div className="text-[10px] text-white/60 uppercase tracking-widest">&amp; Pressure Washing</div>
              </div>
            </div>
            <p className="text-sm text-white/65 leading-relaxed mb-6">
              Family-owned painting and pressure washing company serving the Triangle Area of NC. Honest work. Quality results.
            </p>
            <div className="space-y-2.5">
              <a href="tel:+19198675309" className="flex items-center gap-2.5 text-sm text-white/75 hover:text-white transition-colors">
                <Phone size={14} className="text-[#E8A020]" />
                (919) 867-5309
              </a>
              <a href="mailto:info@macbpainting.com" className="flex items-center gap-2.5 text-sm text-white/75 hover:text-white transition-colors">
                <Mail size={14} className="text-[#E8A020]" />
                info@macbpainting.com
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/75">
                <MapPin size={14} className="text-[#E8A020] mt-0.5 flex-shrink-0" />
                Triangle Area, NC
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Services</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Company</h3>
            <ul className="space-y-2.5">
              {pages.map((p) => (
                <li key={p.label}>
                  <Link href={p.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service area */}
          <div>
            <h3 className="text-xs font-bold text-white/50 uppercase tracking-widest mb-4">Service Area</h3>
            <ul className="space-y-1.5 text-sm text-white/65">
              {["Raleigh", "Durham", "Chapel Hill", "Cary", "Apex", "Morrisville", "Wake Forest", "Garner", "Clayton"].map((city) => (
                <li key={city}>· {city}, NC</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} MAC&apos;B Painting &amp; Pressure Washing. All rights reserved. Triangle Area, NC.
          </p>
          <p className="text-xs text-white/30">Licensed &amp; Insured · Family-Owned &amp; Operated</p>
        </div>
      </div>
    </footer>
  );
}
