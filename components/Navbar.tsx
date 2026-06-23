"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(245,241,235,0.96)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(12,17,23,0.08)" : "none",
        }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex flex-col leading-none">
                <span
                  className="font-display text-xl lg:text-2xl tracking-tight transition-colors duration-300"
                  style={{
                    fontWeight: 600,
                    color: scrolled ? "#0C1117" : "#F5F1EB",
                    fontStyle: "italic",
                  }}
                >
                  MAC&apos;B
                </span>
                <span
                  className="text-[9px] uppercase tracking-[0.25em] transition-colors duration-300"
                  style={{
                    color: scrolled ? "#C9A96E" : "rgba(201,169,110,0.9)",
                    letterSpacing: "0.25em",
                  }}
                >
                  Painting & Pressure Washing
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-xs uppercase tracking-[0.18em] font-medium transition-all duration-200 hover:opacity-60"
                  style={{ color: scrolled ? "#0C1117" : "rgba(245,241,235,0.85)" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="text-xs uppercase tracking-[0.18em] font-medium px-5 py-2.5 border transition-all duration-200 hover:bg-[#C9A96E] hover:border-[#C9A96E] hover:text-[#0C1117]"
                style={{
                  borderColor: scrolled ? "#0C1117" : "rgba(245,241,235,0.5)",
                  color: scrolled ? "#0C1117" : "#F5F1EB",
                }}
              >
                Free Estimate
              </Link>
            </nav>

            {/* Mobile burger */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-1 transition-opacity"
              style={{ color: scrolled ? "#0C1117" : "#F5F1EB" }}
              aria-label="Open navigation"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        className="fixed inset-0 z-[100] flex flex-col transition-all duration-500"
        style={{
          backgroundColor: "#0C1117",
          pointerEvents: open ? "all" : "none",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="flex items-center justify-between px-6 h-16">
          <span className="font-display text-xl italic font-semibold" style={{ color: "#F5F1EB" }}>
            MAC&apos;B
          </span>
          <button onClick={() => setOpen(false)} style={{ color: "#F5F1EB" }} aria-label="Close navigation">
            <X size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="flex flex-col justify-center flex-1 px-8 gap-2">
          {links.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-5xl font-light italic py-3 border-b transition-colors hover:text-[#C9A96E]"
              style={{
                color: pathname === l.href ? "#C9A96E" : "#F5F1EB",
                borderColor: "rgba(245,241,235,0.08)",
                transitionDelay: open ? `${i * 60}ms` : "0ms",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="px-8 pb-12">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-center py-4 text-sm uppercase tracking-[0.2em] font-medium transition-colors"
            style={{ backgroundColor: "#C9A96E", color: "#0C1117" }}
          >
            Get a Free Estimate
          </Link>
          <p className="text-center mt-4 text-xs tracking-widest uppercase" style={{ color: "rgba(245,241,235,0.3)" }}>
            Triangle Area, NC · (919) 867-5309
          </p>
        </div>
      </div>
    </>
  );
}
