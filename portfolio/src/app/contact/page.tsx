"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const budgets = ["< $1,000", "$1,000 – $3,000", "$3,000 – $7,000", "$7,000+", "Not sure yet"];
const services = ["Brand Identity", "Packaging Design", "Website Design", "Multiple Services", "Not sure yet"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 lg:pt-40 pb-20 px-6 lg:px-12 bg-[#081428]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-ibm)]">
              Get In Touch
            </p>
            <h1 className="font-[family-name:var(--font-clash)] text-5xl lg:text-7xl font-semibold text-white max-w-2xl leading-tight">
              Start Your Project
            </h1>
          </div>
        </section>

        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="text-gray-500 text-lg leading-relaxed mb-12 font-[family-name:var(--font-ibm)] font-light">
                Tell me about your project and I&apos;ll get back to you within 24 hours. Not sure where to start? That&apos;s okay — just say hello and we&apos;ll figure it out together.
              </p>

              <div className="space-y-8">
                {[
                  { label: "Response Time", value: "Within 24 hours" },
                  { label: "Availability", value: "Currently accepting new projects" },
                  { label: "Location", value: "Saudi Arabia (Remote Friendly)" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-6 items-start border-b border-gray-100 pb-8">
                    <p className="text-xs text-gray-400 uppercase tracking-widest w-36 shrink-0 pt-0.5">
                      {item.label}
                    </p>
                    <p className="text-[#081428] font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-[#f5f5f5] p-10 text-center h-full flex flex-col items-center justify-center gap-4">
                  <p className="font-[family-name:var(--font-clash)] text-3xl font-semibold text-[#081428]">
                    Message received.
                  </p>
                  <p className="text-gray-500">I&apos;ll be in touch within 24 hours.</p>
                  <Button href="/" variant="ghost" size="sm">
                    Back to Home →
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { name: "name", label: "Name", type: "text", required: true },
                    { name: "company", label: "Company / Brand", type: "text", required: false },
                    { name: "email", label: "Email", type: "email", required: true },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                        {field.label} {field.required && <span className="text-[#307FE2]">*</span>}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        className="w-full border-b border-gray-200 py-3 text-[#081428] outline-none focus:border-[#307FE2] transition-colors bg-transparent font-[family-name:var(--font-ibm)]"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                      Service Needed <span className="text-[#307FE2]">*</span>
                    </label>
                    <select
                      name="service"
                      required
                      className="w-full border-b border-gray-200 py-3 text-[#081428] outline-none focus:border-[#307FE2] transition-colors bg-transparent font-[family-name:var(--font-ibm)]"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      className="w-full border-b border-gray-200 py-3 text-[#081428] outline-none focus:border-[#307FE2] transition-colors bg-transparent font-[family-name:var(--font-ibm)]"
                    >
                      <option value="">Select a range</option>
                      {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">
                      Project Details <span className="text-[#307FE2]">*</span>
                    </label>
                    <textarea
                      name="details"
                      required
                      rows={5}
                      placeholder="Tell me about your project, your brand, and what you're hoping to achieve..."
                      className="w-full border-b border-gray-200 py-3 text-[#081428] outline-none focus:border-[#307FE2] transition-colors bg-transparent font-[family-name:var(--font-ibm)] resize-none placeholder:text-gray-300"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full justify-center mt-4">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
