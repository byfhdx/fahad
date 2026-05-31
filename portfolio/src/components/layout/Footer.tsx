import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#081428] text-white py-16 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-14">
          <div>
            <p className="font-[family-name:var(--font-clash)] text-2xl font-semibold mb-3">
              Fahad.
            </p>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Designing brands people remember.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col gap-3">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Pages</p>
              {[
                { label: "Work", href: "/work" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Services</p>
              {["Brand Identity", "Packaging Design", "Web Design"].map((s) => (
                <span key={s} className="text-sm text-gray-300">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Fahad Algharaballi. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-xs text-[#307FE2] hover:text-white transition-colors"
          >
            Let&apos;s work together →
          </Link>
        </div>
      </div>
    </footer>
  );
}
