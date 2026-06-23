"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "#ffffff" : "transparent",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
          borderBottom: scrolled ? "1px solid #E9ECEF" : "none",
        }}
      >
        {/* Top bar */}
        <div
          className="hidden md:block text-xs py-1.5 text-center font-medium"
          style={{
            backgroundColor: "#1B4F8A",
            color: "rgba(255,255,255,0.9)",
            display: scrolled ? "none" : undefined,
          }}
        >
          <a href="tel:+19198675309" className="hover:text-white transition-colors">
            📞 Call for a Free Estimate: (919) 867-5309
          </a>
          &nbsp;·&nbsp;Serving Raleigh, Durham, Chapel Hill &amp; surrounding Triangle Area
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-white text-sm"
                style={{ backgroundColor: "#1B4F8A" }}
              >
                M'B
              </div>
              <div>
                <div
                  className="font-black text-sm leading-tight tracking-tight transition-colors"
                  style={{ color: scrolled ? "#1B4F8A" : "#ffffff", textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.3)" }}
                >
                  MAC&apos;B PAINTING
                </div>
                <div
                  className="text-[10px] font-semibold tracking-widest uppercase transition-colors"
                  style={{ color: scrolled ? "#6C757D" : "rgba(255,255,255,0.75)", textShadow: scrolled ? "none" : "0 1px 3px rgba(0,0,0,0.3)" }}
                >
                  &amp; Pressure Washing
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    color: pathname === l.href
                      ? "#E8A020"
                      : scrolled ? "#343A40" : "rgba(255,255,255,0.85)",
                    fontWeight: pathname === l.href ? "700" : "500",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:+19198675309"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
                style={{ color: scrolled ? "#1B4F8A" : "rgba(255,255,255,0.9)" }}
              >
                <Phone size={15} />
                (919) 867-5309
              </a>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-lg text-sm font-bold text-white transition-all shadow-sm hover:shadow-md"
                style={{ backgroundColor: "#E8A020" }}
              >
                Free Estimate
              </Link>
            </div>

            <button
              className="md:hidden p-2 rounded-lg transition-colors"
              style={{ color: scrolled ? "#343A40" : "#ffffff" }}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[100] bg-white flex flex-col">
          <div className="flex items-center justify-between px-4 py-4 border-b border-neutral-200">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white text-xs" style={{ backgroundColor: "#1B4F8A" }}>
                M&apos;B
              </div>
              <span className="font-black text-sm" style={{ color: "#1B4F8A" }}>MAC&apos;B PAINTING</span>
            </Link>
            <button onClick={() => setOpen(false)} className="p-2 text-neutral-500 hover:text-neutral-900 rounded-lg" aria-label="Close menu">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col px-6 py-6 gap-1 flex-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xl font-semibold py-3 border-b border-neutral-100"
                style={{ color: pathname === l.href ? "#1B4F8A" : "#343A40" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="px-6 pb-10 flex flex-col gap-3">
            <a
              href="tel:+19198675309"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold border-2 text-base"
              style={{ borderColor: "#1B4F8A", color: "#1B4F8A" }}
            >
              <Phone size={16} /> (919) 867-5309
            </a>
            <Link
              href="/contact"
              className="text-center px-6 py-3.5 rounded-lg font-bold text-white text-base"
              style={{ backgroundColor: "#E8A020" }}
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
