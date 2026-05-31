import Button from "@/components/ui/Button";

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-6 font-[family-name:var(--font-ibm)]">
          Ready to Start?
        </p>
        <h2 className="font-[family-name:var(--font-clash)] text-5xl lg:text-7xl font-semibold text-[#081428] mb-8 max-w-3xl mx-auto leading-tight">
          Let&apos;s build something remarkable.
        </h2>
        <p className="text-gray-500 text-lg max-w-lg mx-auto mb-12 font-[family-name:var(--font-ibm)] font-light leading-relaxed">
          I&apos;m currently taking on new projects. Let&apos;s talk about how we can elevate your brand.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Start a Project
          </Button>
          <Button href="/work" variant="outline" size="lg">
            View My Work
          </Button>
        </div>
      </div>
    </section>
  );
}
