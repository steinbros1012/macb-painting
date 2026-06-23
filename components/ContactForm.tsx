"use client";

import { useState } from "react";

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
      <div className="text-center py-12 px-6">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl" style={{ backgroundColor: "#E8F4E8" }}>
          ✓
        </div>
        <h3 className="text-2xl font-black mb-2" style={{ color: "#1B4F8A" }}>Request Received!</h3>
        <p className="text-neutral-600 max-w-sm mx-auto">
          Thanks, {form.name}! We&apos;ll be in touch within 24 hours to schedule your free estimate.
        </p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 rounded-lg border border-neutral-200 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#1B4F8A] focus:border-transparent text-sm transition-shadow bg-white";
  const labelClass = "block text-xs font-bold text-neutral-600 uppercase tracking-wide mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Full Name *</label>
          <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="John Smith" className={inputClass} autoComplete="name" />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone Number *</label>
          <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} placeholder="(919) 555-0000" className={inputClass} autoComplete="tel" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email Address *</label>
        <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="you@email.com" className={inputClass} autoComplete="email" />
      </div>
      <div>
        <label htmlFor="service" className={labelClass}>Service Needed *</label>
        <select id="service" name="service" required value={form.service} onChange={handleChange} className={inputClass} style={{ color: form.service ? "#212529" : "#9CA3AF" }}>
          <option value="" disabled>Select a service...</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Project Details</label>
        <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Tell us about your project — property type, scope, timeline, any other details..." className={inputClass} />
      </div>
      {error && <p className="text-red-600 text-sm text-center">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 rounded-lg font-bold text-white text-base hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
        style={{ backgroundColor: "#1B4F8A" }}
      >
        {loading ? "Sending..." : "Request Free Estimate →"}
      </button>
      <p className="text-center text-xs text-neutral-400">We respond within 24 hours · Licensed &amp; Insured</p>
    </form>
  );
}
