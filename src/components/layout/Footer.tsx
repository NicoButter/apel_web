import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/common";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container>
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <p className="text-xl font-bold text-white">
              <span className="text-amber-400">APEL</span> Santa Cruz
            </p>
            <p className="text-sm leading-relaxed text-slate-400">
              {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2">
              {siteConfig.nav.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-200">
              Contacto
            </h3>
            <address className="not-italic flex flex-col gap-2 text-sm text-slate-400">
              <span>{siteConfig.contact.address}</span>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-amber-400 transition-colors"
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="hover:text-amber-400 transition-colors"
              >
                {siteConfig.contact.phone}
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
          © {year} {siteConfig.fullName}. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
