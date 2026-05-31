import Button from "@/components/ui/Button";

const services = [
  {
    number: "01",
    title: "Brand Identity Design",
    description:
      "Strategic visual identities that communicate your brand's essence — from logo to full brand system.",
    items: ["Logo Design", "Visual Identity System", "Brand Guidelines", "Brand Assets"],
    href: "/services#brand-identity",
  },
  {
    number: "02",
    title: "Packaging Design",
    description:
      "Packaging that stands out on the shelf and tells your product's story at a glance.",
    items: ["Product Packaging", "Label Design", "Box Design", "Print-Ready Files"],
    href: "/services#packaging",
  },
  {
    number: "03",
    title: "Website Design & Development",
    description:
      "Fast, responsive websites that convert visitors into clients — designed with intention.",
    items: ["UI Design", "Responsive Development", "SEO Ready", "Website Launch"],
    href: "/services#web-design",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-3 font-[family-name:var(--font-ibm)]">
            What I Do
          </p>
          <h2 className="font-[family-name:var(--font-clash)] text-4xl lg:text-5xl font-semibold text-[#081428] max-w-lg">
            Services built for ambitious brands
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-gray-200">
          {services.map((service) => (
            <div key={service.number} className="bg-[#f5f5f5] p-8 lg:p-10 flex flex-col">
              <p className="font-[family-name:var(--font-clash)] text-5xl font-semibold text-gray-200 mb-6">
                {service.number}
              </p>
              <h3 className="font-[family-name:var(--font-clash)] text-xl font-semibold text-[#081428] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>
              <ul className="space-y-2 mb-8">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1 h-1 rounded-full bg-[#307FE2] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button href={service.href} variant="ghost" size="sm" className="w-fit">
                Learn more →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
