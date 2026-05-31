import Link from "next/link";
import Button from "@/components/ui/Button";

const projects = [
  {
    id: "01",
    title: "Nour Café",
    industry: "Food & Beverage",
    service: "Brand Identity",
    description: "Complete visual identity for a specialty coffee concept in Riyadh.",
    color: "#f5f0ea",
  },
  {
    id: "02",
    title: "Verdant Skincare",
    industry: "Beauty & Wellness",
    service: "Packaging Design",
    description: "Premium packaging system for a natural skincare line.",
    color: "#e8ede8",
  },
  {
    id: "03",
    title: "Forma Studio",
    industry: "Architecture",
    service: "Website Design",
    description: "Editorial website for an architecture and interior design studio.",
    color: "#e8eaf0",
  },
  {
    id: "04",
    title: "Suhail Ventures",
    industry: "Finance",
    service: "Brand Identity",
    description: "Modern identity system for an investment and venture firm.",
    color: "#f0ece8",
  },
];

export default function SelectedWork() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-3 font-[family-name:var(--font-ibm)]">
              Portfolio
            </p>
            <h2 className="font-[family-name:var(--font-clash)] text-4xl lg:text-5xl font-semibold text-[#081428]">
              Selected Work
            </h2>
          </div>
          <Button href="/work" variant="ghost">
            View all projects →
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/work/${project.id}`}
              className="group block overflow-hidden"
            >
              <div
                className="aspect-[4/3] w-full mb-5 transition-transform duration-500 group-hover:scale-[0.98]"
                style={{ backgroundColor: project.color }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-[family-name:var(--font-clash)] text-6xl font-semibold text-black/10">
                    {project.id}
                  </span>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-[family-name:var(--font-clash)] text-xl font-semibold text-[#081428] mb-1 group-hover:text-[#307FE2] transition-colors">
                    {project.title}
                  </p>
                  <p className="text-gray-500 text-sm">{project.description}</p>
                </div>
                <div className="text-right shrink-0 ml-4">
                  <p className="text-xs text-[#307FE2] font-medium tracking-wide uppercase">
                    {project.service}
                  </p>
                  <p className="text-xs text-gray-400 mt-0.5">{project.industry}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
