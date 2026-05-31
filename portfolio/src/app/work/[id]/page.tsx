import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";
import Link from "next/link";

const projects: Record<string, {
  title: string; industry: string; service: string; year: string;
  overview: string; challenge: string; strategy: string; outcome: string;
  color: string;
}> = {
  "01": {
    title: "Nour Café", industry: "Food & Beverage", service: "Brand Identity", year: "2024",
    color: "#f5f0ea",
    overview: "Nour Café is a specialty coffee concept in Riyadh focused on intentional slowness — a space designed around the ritual of coffee.",
    challenge: "The client needed a brand that felt warm and personal, yet sophisticated enough to attract a design-conscious audience in a competitive café market.",
    strategy: "We built the identity around the Arabic concept of 'Nour' (light), using soft warm tones, refined typography, and a mark that evokes morning sunlight through a window.",
    outcome: "The new brand identity was implemented across all touchpoints — signage, packaging, cups, menus, and social media — creating a cohesive and memorable presence.",
  },
  "02": {
    title: "Verdant Skincare", industry: "Beauty & Wellness", service: "Packaging Design", year: "2024",
    color: "#e8ede8",
    overview: "Verdant is a natural skincare brand committed to clean, plant-based formulations and sustainable packaging.",
    challenge: "The brand needed packaging that communicated its natural credentials while feeling premium enough to compete with established luxury skincare brands.",
    strategy: "We designed a minimal system using muted greens and off-whites, with tactile paper stock and simple botanical illustrations to signal purity without overclaiming.",
    outcome: "The packaging launched across 5 SKUs and received strong retail placement in boutique wellness stores throughout the GCC.",
  },
  "03": {
    title: "Forma Studio", industry: "Architecture", service: "Website Design", year: "2025",
    color: "#e8eaf0",
    overview: "Forma Studio is an architecture and interior design practice known for its restrained, material-led approach to residential and commercial projects.",
    challenge: "Their previous website failed to reflect the quality of their work — poor photography presentation and no clear path to client inquiries.",
    strategy: "We designed an editorial-style website that puts the photography first, with large full-bleed project pages, minimal navigation, and a simple contact flow.",
    outcome: "Site visits increased significantly and the studio reported a 3x increase in qualified inquiry volume in the first 3 months after launch.",
  },
  "04": {
    title: "Suhail Ventures", industry: "Finance", service: "Brand Identity", year: "2025",
    color: "#f0ece8",
    overview: "Suhail Ventures is a family-owned investment firm expanding into venture capital and real estate.",
    challenge: "The firm needed an identity that signaled credibility and seriousness to institutional partners while remaining approachable to founders.",
    strategy: "We developed a wordmark-led identity using precise geometry and a deep navy-and-gold palette, with a brand system designed to scale across digital and print.",
    outcome: "The identity was rolled out across decks, website, business collateral, and office branding in time for their first external fund launch.",
  },
};

export default async function CaseStudyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects[id];

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="pt-40 pb-24 px-6 text-center min-h-screen">
          <h1 className="font-[family-name:var(--font-clash)] text-4xl text-[#081428] mb-6">Project not found</h1>
          <Button href="/work">Back to Work</Button>
        </main>
        <Footer />
      </>
    );
  }

  const relatedIds = Object.keys(projects).filter((k) => k !== id).slice(0, 2);

  return (
    <>
      <Navbar />
      <main>
        <section
          className="pt-32 lg:pt-40 pb-20 px-6 lg:px-12"
          style={{ backgroundColor: project.color }}
        >
          <div className="max-w-7xl mx-auto">
            <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-ibm)]">
              {project.service} · {project.year}
            </p>
            <h1 className="font-[family-name:var(--font-clash)] text-5xl lg:text-7xl font-semibold text-[#081428] mb-6">
              {project.title}
            </h1>
            <p className="text-gray-600 text-lg max-w-xl">{project.industry}</p>
          </div>
        </section>

        <section
          className="aspect-[16/7] w-full flex items-center justify-center"
          style={{ backgroundColor: project.color }}
        >
          <span className="font-[family-name:var(--font-clash)] text-[20vw] font-semibold text-black/5 select-none">
            {project.title.split(" ")[0]}
          </span>
        </section>

        <section className="py-20 lg:py-28 px-6 lg:px-12 bg-white">
          <div className="max-w-3xl mx-auto space-y-16">
            {[
              { label: "Overview", text: project.overview },
              { label: "The Challenge", text: project.challenge },
              { label: "Strategy", text: project.strategy },
              { label: "The Outcome", text: project.outcome },
            ].map((block) => (
              <div key={block.label}>
                <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-ibm)]">
                  {block.label}
                </p>
                <p className="text-[#081428] text-lg leading-relaxed font-[family-name:var(--font-ibm)] font-light">
                  {block.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-[#f5f5f5]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-8 font-[family-name:var(--font-ibm)]">
              Related Projects
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedIds.map((rid) => {
                const rel = projects[rid];
                return (
                  <Link key={rid} href={`/work/${rid}`} className="group block">
                    <div
                      className="aspect-[4/3] mb-4 flex items-center justify-center transition-transform duration-500 group-hover:scale-[0.98]"
                      style={{ backgroundColor: rel.color }}
                    >
                      <span className="font-[family-name:var(--font-clash)] text-6xl font-semibold text-black/10">
                        {rid}
                      </span>
                    </div>
                    <p className="font-[family-name:var(--font-clash)] text-xl font-semibold text-[#081428] group-hover:text-[#307FE2] transition-colors">
                      {rel.title}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{rel.service}</p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 px-6 lg:px-12 bg-[#081428] text-center">
          <p className="font-[family-name:var(--font-clash)] text-4xl lg:text-5xl font-semibold text-white mb-8">
            Let&apos;s build something like this for you.
          </p>
          <Button href="/contact" size="lg" className="bg-[#307FE2] hover:bg-white hover:text-[#081428]">
            Start a Project
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
