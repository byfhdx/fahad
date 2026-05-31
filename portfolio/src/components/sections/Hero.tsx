"use client";

import { useEffect, useRef } from "react";
import Button from "@/components/ui/Button";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center bg-[#081428] text-white px-6 lg:px-12 pt-20">
      <div className="max-w-7xl mx-auto w-full py-24 lg:py-32">
        <p className="text-[#307FE2] text-sm tracking-[0.2em] uppercase mb-8 font-[family-name:var(--font-ibm)]">
          Brand Identity · Packaging · Web Design
        </p>

        <h1
          ref={headlineRef}
          className="font-[family-name:var(--font-clash)] font-semibold text-5xl sm:text-6xl lg:text-8xl xl:text-9xl leading-[1.05] tracking-tight mb-10 max-w-5xl"
        >
          Designing brands
          <br />
          <span className="text-[#307FE2]">people remember.</span>
        </h1>

        <p className="text-gray-300 text-lg lg:text-xl max-w-xl leading-relaxed mb-12 font-[family-name:var(--font-ibm)] font-light">
          Helping ambitious brands build memorable identities, packaging, and websites that connect with people and drive growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button href="/work" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#081428]">
            View Work
          </Button>
          <Button href="/contact" size="lg" className="bg-[#307FE2] hover:bg-white hover:text-[#081428]">
            Start a Project
          </Button>
        </div>

        <div className="mt-20 lg:mt-28 flex flex-col sm:flex-row gap-10 lg:gap-20 border-t border-white/10 pt-10">
          {[
            { number: "50+", label: "Projects Delivered" },
            { number: "3+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-[family-name:var(--font-clash)] text-4xl font-semibold text-white mb-1">
                {stat.number}
              </p>
              <p className="text-gray-400 text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
