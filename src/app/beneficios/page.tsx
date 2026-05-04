import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

export const metadata: Metadata = {
  title: "Beneficios",
  description:
    "Descubrí todos los beneficios y convenios exclusivos disponibles para los afiliados a APEL.",
};

const beneficios = [
  {
    categoria: "Salud",
    items: [
      "Obra social con cobertura en toda la provincia",
      "Descuentos en farmacias adheridas",
      "Acceso a programas de medicina preventiva",
    ],
  },
  {
    categoria: "Comercios y servicios",
    items: [
      "Descuentos en comercios locales adheridos",
      "Convenios con estaciones de servicio",
      "Tarifas preferenciales en servicios de telefonía",
    ],
  },
  {
    categoria: "Recreación y turismo",
    items: [
      "Acceso a la colonia de vacaciones sindical",
      "Descuentos en agencias de viaje adheridas",
      "Actividades culturales y deportivas",
    ],
  },
  {
    categoria: "Educación y capacitación",
    items: [
      "Cursos y talleres gratuitos para afiliados",
      "Becas de estudio para hijos de afiliados",
      "Acceso a biblioteca y recursos educativos",
    ],
  },
];

export default function BeneficiosPage() {
  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-3">
          Beneficios para afiliados
        </h1>
        <p className="text-slate-500 mb-10 max-w-2xl">
          Como afiliado a APEL accedés a una amplia red de beneficios y
          convenios pensados para mejorar tu calidad de vida y la de tu familia.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {beneficios.map(({ categoria, items }) => (
            <div
              key={categoria}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-base font-bold text-blue-900 mb-4 flex items-center gap-2">
                <span className="h-1.5 w-5 rounded-full bg-amber-400 inline-block" />
                {categoria}
              </h2>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-slate-600"
                  >
                    <span className="text-amber-500 mt-0.5">✔</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
