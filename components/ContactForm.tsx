"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const services = [
  "Interior Painting",
  "Exterior Painting",
  "Residential Painting",
  "Commercial Painting",
  "Pressure Washing",
  "Deck & Fence Cleaning",
  "Multiple Services",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error("Failed");
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please call us directly at (919) 867-5309.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-16 px-8" style={{ backgroundColor: "#EAE4D8" }}>
        <div
          className="w-12 h-12 flex items-center justify-center mb-8"
          style={{ backgroundColor: "#C9A96E" }}
        >
          <span className="text-xl font-bold" style={{ color: "#0C1117" }}>✓</span>
        </div>
        <h3
          className="font-display font-light mb-4"
          style={{ fontSize: "clamp(24px, 2.5vw, 36px)", color: "#0C1117", letterSpacing: "-0.015em" }}
        >
          Request received,
          <br />
          <em style={{ color: "#C9A96E" }}>{form.name}.</em>
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#3D4147" }}>
          We&apos;ll be in touch within one business day to schedule your free estimate.
        </p>
      </div>
    );
  }

  const baseInput: React.CSSProperties = {
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(12,17,23,0.15)",
    borderRadius: 0,
    padding: "12px 0",
    fontSize: "14px",
    color: "#0C1117",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "10px",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    fontWeight: 500,
    color: "#8B8E99",
    marginBottom: "4px",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label htmlFor="name" style={labelStyle}>Full Name *</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            style={baseInput}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="phone" style={labelStyle}>Phone *</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={form.phone}
            onChange={handleChange}
            placeholder="(919) 000-0000"
            style={baseInput}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" style={labelStyle}>Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@email.com"
          style={baseInput}
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="service" style={labelStyle}>Service Needed *</label>
        <select
          id="service"
          name="service"
          required
          value={form.service}
          onChange={handleChange}
          style={{
            ...baseInput,
            color: form.service ? "#0C1117" : "#8B8E99",
            appearance: "none",
            cursor: "pointer",
          }}
        >
          <option value="" disabled>Select a service...</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label htmlFor="message" style={labelStyle}>Project Details</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your project — property type, scope, timeline..."
          style={{ ...baseInput, resize: "none" }}
        />
      </div>

      {error && (
        <p className="text-sm" style={{ color: "#C0392B" }}>{error}</p>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-3 px-7 py-4 text-sm uppercase tracking-[0.2em] font-medium transition-all hover:gap-5 disabled:opacity-50"
          style={{ backgroundColor: "#0C1117", color: "#F5F1EB" }}
        >
          {loading ? "Sending..." : <>Request Free Estimate <ArrowUpRight size={15} strokeWidth={1.5} /></>}
        </button>
        <p className="text-xs uppercase tracking-[0.18em]" style={{ color: "#8B8E99" }}>
          Response within 1 business day
        </p>
      </div>
    </form>
  );
}
