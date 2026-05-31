import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const services = [
  {
    id: "brand-identity",
    number: "01",
    title: "Brand Identity Design",
    tagline: "Build a brand that means something.",
    description:
      "A strong brand identity is more than a logo — it's the foundation of how people perceive and remember your business. I design strategic visual identities that communicate your values, differentiate you from competitors, and scale across every touchpoint.",
    deliverables: [
      "Logo Design (primary + variations)",
      "Color Palette Development",
      "Typography Selection",
      "Visual Identity System",
      "Brand Guidelines Document",
      "Brand Asset Files",
    ],
    timeline: "3–5 weeks",
    ideal: ["Startups launching a new brand", "Businesses undergoing a rebrand", "Personal brands & creators", "Restaurants & hospitality"],
    faqs: [
      { q: "How many logo concepts will I receive?", a: "You'll receive 2–3 distinct directions, then we refine the chosen direction together." },
      { q: "What file formats do I get?", a: "All final files are delivered in SVG, PDF, PNG, and EPS formats." },
    ],
    color: "#f5f0ea",
  },
  {
    id: "packaging",
    number: "02",
    title: "Packaging Design",
    tagline: "Make your product impossible to ignore.",
    description:
      "Great packaging doesn't just protect your product — it sells it. I design packaging systems that communicate quality, attract the right customer, and create a memorable unboxing experience.",
    deliverables: [
      "Packaging Concept & Layout",
      "Label Design",
      "Box / Container Design",
      "Mockup Presentations",
      "Print-Ready Production Files",
      "Dielines & Specifications",
    ],
    timeline: "2–4 weeks",
    ideal: ["Product-based businesses", "E-commerce brands", "Food & beverage companies", "Beauty & wellness brands"],
    faqs: [
      { q: "Do you handle printing?", a: "I prepare all files for print and can recommend trusted printers, but printing is handled separately." },
      { q: "Can you design multiple SKUs?", a: "Yes — packaging systems for multiple products are quoted based on the total scope." },
    ],
    color: "#e8ede8",
  },
  {
    id: "web-design",
    number: "03",
    title: "Website Design & Development",
    tagline: "Your website should work as hard as you do.",
    description:
      "I design and build fast, responsive websites that turn visitors into clients. Every site is built with conversion, SEO, and performance in mind — not just aesthetics.",
    deliverables: [
      "Website Strategy & Sitemap",
      "Wireframes",
      "Full UI Design",
      "Responsive Development",
      "SEO Setup",
      "Launch Support",
    ],
    timeline: "4–8 weeks",
    ideal: ["Service-based businesses", "Portfolios & personal brands", "Startups & SaaS", "Agencies & studios"],
    faqs: [
      { q: "What platform do you build on?", a: "I typically build on Next.js for performance, or Webflow for CMS-heavy projects." },
      { q: "Is hosting included?", a: "Hosting is not included but I'll set everything up on Vercel or your preferred host." },
    ],
    color: "#e8eaf0",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 lg:pt-40 pb-16 px-6 lg:px-12 bg-[#081428]">
          <div className="max-w-7xl mx-auto">
            <p className="text-[#307FE2] text-xs tracking-[0.2em] uppercase mb-4 font-[family-name:var(--font-ibm)]">
              What I Offer
            </p>
            <h1 className="font-[family-name:var(--font-clash)] text-5xl lg:text-7xl font-semibold text-white max-w-3xl leading-tight">
              Services built for results.
            </h1>
          </div>
        </section>

        {services.map((service, i) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 lg:py-28 px-6 lg:px-12 ${i % 2 === 0 ? "bg-white" : "bg-[#f5f5f5]"}`}
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <p className="font-[family-name:var(--font-clash)] text-8xl font-semibold text-gray-100 mb-4 leading-none">
                    {service.number}
                  </p>
                  <h2 className="font-[family-name:var(--font-clash)] text-3xl lg:text-4xl font-semibold text-[#081428] mb-3">
                    {service.title}
                  </h2>
                  <p className="text-[#307FE2] font-medium mb-6">{service.tagline}</p>
                  <p className="text-gray-500 leading-relaxed mb-8 font-[family-name:var(--font-ibm)] font-light">
                    {service.description}
                  </p>
                  <div
                    className="aspect-[4/3] w-full flex items-center justify-center"
                    style={{ backgroundColor: service.color }}
                  >
                    <span className="font-[family-name:var(--font-clash)] text-7xl font-semibold text-black/10">
                      {service.number}
                    </span>
                  </div>
                </div>

                <div className="space-y-10">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">What You Get</p>
                    <ul className="space-y-3">
                      {service.deliverables.map((d) => (
                        <li key={d} className="flex items-center gap-3 text-[#081428]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#307FE2] shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-10">
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">Timeline</p>
                      <p className="font-[family-name:var(--font-clash)] text-xl font-semibold text-[#081428]">
                        {service.timeline}
                      </p>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Ideal For</p>
                    <ul className="space-y-2">
                      {service.ideal.map((item) => (
                        <li key={item} className="text-gray-500 text-sm">
                          — {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">FAQs</p>
                    <div className="space-y-5">
                      {service.faqs.map((faq) => (
                        <div key={faq.q}>
                          <p className="font-medium text-[#081428] mb-1">{faq.q}</p>
                          <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button href="/contact" size="lg">
                    Book a Discovery Call
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 px-6 lg:px-12 bg-[#081428] text-center">
          <h2 className="font-[family-name:var(--font-clash)] text-4xl lg:text-5xl font-semibold text-white mb-6">
            Not sure which service you need?
          </h2>
          <p className="text-gray-400 max-w-md mx-auto mb-10 font-[family-name:var(--font-ibm)] font-light">
            Book a free discovery call and we&apos;ll figure it out together.
          </p>
          <Button href="/contact" size="lg" className="bg-[#307FE2] hover:bg-white hover:text-[#081428]">
            Book a Free Call
          </Button>
        </section>
      </main>
      <Footer />
    </>
  );
}
