"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const projects = [
  { id: "01", title: "Nour Café", industry: "Food & Beverage", service: "Brand Identity", description: "Complete visual identity for a specialty coffee concept in Riyadh.", color: "#f5f0ea", tag: "brand" },
  { id: "02", title: "Verdant Skincare", industry: "Beauty & Wellness", service: "Packaging Design", description: "Premium packaging system for a natural skincare line.", color: "#e8ede8", tag: "packaging" },
  { id: "03", title: "Forma Studio", industry: "Architecture", service: "Website Design", description: "Editorial website for an architecture and interior design studio.", color: "#e8eaf0", tag: "web" },
  { id: "04", title: "Suhail Ventures", industry: "Finance", service: "Brand Identity", description: "Modern identity system for an investment and venture firm.", color: "#f0ece8", tag: "brand" },
  { id: "05", title: "Zara Organics", industry: "Food & Beverage", service: "Packaging Design", description: "Minimalist packaging for an organic food brand.", color: "#edf0e8", tag: "packaging" },
  { id: "06", title: "Luma Boutique", industry: "Fashion", service: "Brand Identity", description: "Refined identity for a luxury fashion boutique.", color: "#f0e8ee", tag: "brand" },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Brand Identity", value: "brand" },
  { label: "Packaging", value: "packaging" },
  { label: "Websites", value: "web" },
];

export default function WorkPage() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.tag === active);

  return (
    <>
      <Navbar />
      <main className="pt-24 lg:pt-32 pb-24 px-6 lg:px-12 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-3 font-[family-name:var(--font-ibm)]">
              Portfolio
            </p>
            <h1 className="font-[family-name:var(--font-clash)] text-5xl lg:text-6xl font-semibold text-[#081428] mb-10">
              Selected Work
            </h1>
            <div className="flex flex-wrap gap-3">
              {filters.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActive(f.value)}
                  className={`px-5 py-2 text-sm tracking-wide transition-all duration-200 ${
                    active === f.value
                      ? "bg-[#081428] text-white"
                      : "border border-gray-200 text-gray-500 hover:border-[#081428] hover:text-[#081428]"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                className="group block overflow-hidden"
              >
                <div
                  className="aspect-[4/3] w-full mb-4 transition-transform duration-500 group-hover:scale-[0.98]"
                  style={{ backgroundColor: project.color }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-[family-name:var(--font-clash)] text-6xl font-semibold text-black/10">
                      {project.id}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#307FE2] font-medium tracking-widest uppercase mb-1">
                  {project.service}
                </p>
                <p className="font-[family-name:var(--font-clash)] text-lg font-semibold text-[#081428] group-hover:text-[#307FE2] transition-colors">
                  {project.title}
                </p>
                <p className="text-gray-400 text-sm mt-1">{project.industry}</p>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
