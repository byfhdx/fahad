const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a deep dive into your brand, audience, and goals to understand what success looks like.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "I develop a clear creative direction — positioning, messaging, and visual language — before any design begins.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Concepts come to life through thoughtful design that balances aesthetics with function and business goals.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "Final files, guidelines, and full support to ensure your brand is ready to make an impact from day one.",
  },
];

export default function Process() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-3 font-[family-name:var(--font-ibm)]">
            How It Works
          </p>
          <h2 className="font-[family-name:var(--font-clash)] text-4xl lg:text-5xl font-semibold text-[#081428]">
            My Process
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-px bg-gray-200 -translate-x-3" />
              )}
              <p className="font-[family-name:var(--font-clash)] text-5xl font-semibold text-[#307FE2]/20 mb-5">
                {step.number}
              </p>
              <h3 className="font-[family-name:var(--font-clash)] text-xl font-semibold text-[#081428] mb-3">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
