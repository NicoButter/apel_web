import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponete en contacto con APEL Santa Cruz. Estamos para ayudarte.",
};

export default function ContactoPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-5xl">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
            Contacto
          </h1>
          <p className="text-slate-500 mb-10">
            ¿Tenés alguna consulta o necesitás asesoramiento? Escribinos.
          </p>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Contact Info */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-4">
                  Información de contacto
                </h2>
                <address className="not-italic space-y-3 text-sm text-slate-600">
                  <p className="flex items-start gap-2">
                    <span>📍</span>
                    {siteConfig.contact.address}
                  </p>
                  <p className="flex items-start gap-2">
                    <span>📧</span>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="text-blue-900 hover:text-amber-600 transition-colors"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <span>📞</span>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-blue-900 hover:text-amber-600 transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </p>
                </address>
              </div>

              <div>
                <h2 className="text-lg font-bold text-slate-900 mb-3">
                  Horario de atención
                </h2>
                <p className="text-sm text-slate-600">
                  Lunes a viernes de 8:00 a 15:00 hs.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <form
              className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="nombre"
                  className="text-sm font-medium text-slate-700"
                >
                  Nombre completo
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="Juan Pérez"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-700"
                >
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                  placeholder="juan@ejemplo.com"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="mensaje"
                  className="text-sm font-medium text-slate-700"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition resize-none"
                  placeholder="Escribí tu consulta aquí..."
                />
              </div>

              <Button type="submit" className="w-full mt-2">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
