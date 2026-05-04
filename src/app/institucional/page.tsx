import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

export const metadata: Metadata = {
  title: "Institucional",
  description:
    "Conocé la historia, misión y estructura de APEL, la Asociación del Personal de la Justicia de Santa Cruz.",
};

export default function InstitucionalPage() {
  return (
    <Section>
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-6">
            Institucional
          </h1>

          <div className="prose prose-slate max-w-none space-y-6 text-slate-700 leading-relaxed">
            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Quiénes somos
              </h2>
              <p>
                APEL — Asociación del Personal de la Justicia de Santa Cruz —
                es el sindicato que representa a los trabajadores del Poder
                Judicial de la Provincia de Santa Cruz, Argentina.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Misión
              </h2>
              <p>
                Defender los derechos laborales, promover el bienestar de los
                afiliados y fortalecer la identidad gremial del personal
                judicial santacruceño.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Valores
              </h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Solidaridad y compañerismo</li>
                <li>Transparencia y democracia interna</li>
                <li>Defensa de la justicia social</li>
                <li>Compromiso con la comunidad</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Comisión Directiva
              </h2>
              <p className="text-slate-500 italic">
                Información sobre la comisión directiva próximamente.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
