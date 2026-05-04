import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { NoticiaList } from "@/components/noticias/NoticiaList";
import { getNoticias } from "@/lib/api";

export const metadata: Metadata = {
  title: "Noticias",
  description:
    "Enterate de las últimas novedades, comunicados y actividades de APEL Santa Cruz.",
};

export default async function NoticiasPage() {
  const noticias = await getNoticias();

  return (
    <Section>
      <Container>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-2">
          Noticias
        </h1>
        <p className="text-slate-500 mb-10">
          Las últimas novedades, comunicados y actividades del gremio.
        </p>
        <NoticiaList noticias={noticias} />
      </Container>
    </Section>
  );
}
