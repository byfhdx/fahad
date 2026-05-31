import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const principles = [
  { title: "Strategy First", description: "Design without strategy is decoration. Every decision is rooted in a clear understanding of your brand, audience, and goals." },
  { title: "Less, But Better", description: "I believe in restraint. The best design removes everything unnecessary and makes every element earn its place." },
  { title: "Details Matter", description: "The difference between good and great design lives in the details — the kerning, the spacing, the color, the feel." },
  { title: "Built to Last", description: "Trends fade. I design identities and systems that stay relevant and grow with your brand over time." },
];

const skills = [
  "Brand Identity", "Visual Identity Systems", "Logo Design",
  "Packaging Design", "Typography", "Color Theory",
  "UI Design", "Web Development", "Figma",
  "Next.js", "Tailwind CSS", "Sanity CMS",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 lg:pt-40 pb-20 px-6 lg:px-12 bg-[#081428]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-ibm)]">
                About
              </p>
              <h1 className="font-[family-name:var(--font-clash)] text-5xl lg:text-6xl font-semibold text-white leading-tight mb-6">
                Designer.
                <br />
                Strategist.
                <br />
                <span className="text-[#307FE2]">Problem Solver.</span>
              </h1>
            </div>
            <div className="aspect-[3/4] bg-[#0d1f38] flex items-end p-8">
              <p className="font-[family-name:var(--font-clash)] text-white/20 text-9xl font-semibold leading-none">
                FA
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-6 font-[family-name:var(--font-ibm)]">
              My Story
            </p>
            <div className="space-y-6 text-lg text-gray-600 font-[family-name:var(--font-ibm)] font-light leading-relaxed">
              <p>
                I&apos;m Fahad Algharaballi — a brand and web designer based in Saudi Arabia, helping businesses build identities that connect with people and drive real growth.
              </p>
              <p>
                My work sits at the intersection of strategy and craft. I believe the best design isn&apos;t just beautiful — it communicates something true about a brand and creates a lasting impression.
              </p>
              <p>
                I specialize in Brand Identity Design, Packaging Design, and Website Design & Development for startups, small businesses, and personal brands across the GCC and beyond.
              </p>
              <p>
                When I&apos;m not designing, I&apos;m studying great brands, exploring typography, and thinking about what makes visual communication truly effective.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-10 font-[family-name:var(--font-ibm)]">
              Design Principles
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-200">
              {principles.map((p) => (
                <div key={p.title} className="bg-[#f5f5f5] p-8">
                  <h3 className="font-[family-name:var(--font-clash)] text-xl font-semibold text-[#081428] mb-3">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-10 font-[family-name:var(--font-ibm)]">
              Skills & Tools
            </p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-5 py-2.5 border border-gray-200 text-sm text-[#081428] font-[family-name:var(--font-ibm)]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-[#081428] text-center">
          <h2 className="font-[family-name:var(--font-clash)] text-4xl lg:text-5xl font-semibold text-white mb-8">
            Let&apos;s work together.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" size="lg" className="bg-[#307FE2] hover:bg-white hover:text-[#081428]">
              Start a Project
            </Button>
            <Button href="/work" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-[#081428]">
              View My Work
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
