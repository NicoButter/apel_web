import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Afiliación",
  description:
    "Conocé los beneficios de afiliarte a APEL y los requisitos para formar parte del sindicato.",
};

export default function AfiliacionPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
            Afiliación
          </h1>
          <p className="text-slate-500 mb-10">
            Sumáte a APEL y accedé a todos los beneficios que tenemos para vos.
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Requisitos
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✔</span>
                  Ser trabajador del Poder Judicial de Santa Cruz
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✔</span>
                  Presentar DNI vigente
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✔</span>
                  Completar el formulario de afiliación
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-0.5">✔</span>
                  Abonar la cuota sindical establecida
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4">
                Beneficios
              </h2>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">★</span>
                  Asesoramiento legal gratuito
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">★</span>
                  Descuentos en comercios adheridos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">★</span>
                  Acceso a programas de capacitación
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-500 mt-0.5">★</span>
                  Representación gremial ante el empleador
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-blue-50 border border-blue-200 p-8 text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-2">
              ¿Listo para afiliarte?
            </h2>
            <p className="text-slate-600 mb-6">
              Completá el formulario o contactanos para recibir más información.
            </p>
            <Button size="lg">Descargar formulario de afiliación</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
