const testimonials = [
  {
    quote:
      "Fahad completely transformed how our brand looks and feels. The new identity perfectly captures who we are and has resonated deeply with our customers.",
    name: "Sarah Al-Rashidi",
    role: "Founder, Nour Café",
  },
  {
    quote:
      "Working with Fahad was seamless from start to finish. He delivered a packaging system that stands out on the shelf and tells our story exactly as we envisioned.",
    name: "Mohammed Al-Ghamdi",
    role: "CEO, Verdant Skincare",
  },
  {
    quote:
      "The website Fahad built for us has significantly improved how we attract new clients. Clean, fast, and exactly on-brand.",
    name: "Layla Khoury",
    role: "Director, Forma Studio",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#081428]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-3 font-[family-name:var(--font-ibm)]">
            Client Love
          </p>
          <h2 className="font-[family-name:var(--font-clash)] text-4xl lg:text-5xl font-semibold text-white">
            What clients say
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="border border-white/10 p-8 flex flex-col justify-between gap-8"
            >
              <p className="text-gray-300 text-base leading-relaxed font-[family-name:var(--font-ibm)] font-light">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-[family-name:var(--font-clash)] font-semibold text-white">
                  {t.name}
                </p>
                <p className="text-gray-500 text-sm mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
