import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { Button } from "@/components/ui/Button";
import { NoticiaList } from "@/components/noticias/NoticiaList";
import { getNoticias } from "@/lib/api";
import { siteConfig } from "@/config/site";

export default async function HomePage() {
  const noticias = await getNoticias();
  const ultimasNoticias = noticias.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Section className="bg-blue-900 text-white py-24 md:py-32">
        <Container className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-3">
            Santa Cruz, Argentina
          </p>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Bienvenidos a{" "}
            <span className="text-amber-400">{siteConfig.name}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-200 leading-relaxed">
            Asociación del Personal de la Justicia de Santa Cruz. Comprometidos
            con los derechos y el bienestar de los trabajadores judiciales.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/afiliacion">
              <Button size="lg" variant="secondary">
                Afiliáte hoy
              </Button>
            </Link>
            <Link href="/institucional">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-800">
                Conocenos
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section className="bg-slate-50">
        <Container>
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">
            ¿Qué hacemos por vos?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                icon: "⚖️",
                title: "Defensa gremial",
                desc: "Representamos y defendemos los intereses de todos los trabajadores judiciales ante las autoridades.",
              },
              {
                icon: "🤝",
                title: "Convenios y beneficios",
                desc: "Negociamos convenios colectivos y gestionamos beneficios exclusivos para nuestros afiliados.",
              },
              {
                icon: "📚",
                title: "Capacitación",
                desc: "Promovemos el desarrollo profesional y humano a través de cursos y actividades de formación.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="mb-3 text-4xl">{icon}</div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Latest News */}
      <Section>
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">
              Últimas noticias
            </h2>
            <Link
              href="/noticias"
              className="text-sm font-medium text-blue-900 hover:text-amber-600 transition-colors"
            >
              Ver todas →
            </Link>
          </div>
          <NoticiaList noticias={ultimasNoticias} />
        </Container>
      </Section>

      {/* CTA */}
      <Section className="bg-amber-50 border-t border-amber-100">
        <Container className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            ¿Todavía no estás afiliado?
          </h2>
          <p className="mx-auto max-w-xl text-slate-600 mb-8">
            Sumáte a APEL y accedé a todos los beneficios, respaldo gremial y
            la fuerza de una organización que trabaja por vos.
          </p>
          <Link href="/afiliacion">
            <Button size="lg">Quiero afiliarme</Button>
          </Link>
        </Container>
      </Section>
    </>
  );
}
