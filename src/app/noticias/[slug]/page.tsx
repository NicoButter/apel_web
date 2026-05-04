import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { getNoticia, getNoticias } from "@/lib/api";
import { formatDate } from "@/lib/utils";
import { CATEGORIAS_LABEL } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const noticias = await getNoticias();
  return noticias.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const noticia = await getNoticia(slug);
  if (!noticia) return {};

  return {
    title: noticia.titulo,
    description: noticia.resumen,
  };
}

export default async function NoticiaPage({ params }: Props) {
  const { slug } = await params;
  const noticia = await getNoticia(slug);

  if (!noticia) notFound();

  return (
    <Section>
      <Container>
        <article className="mx-auto max-w-3xl">
          <header className="mb-8">
            <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800 mb-3">
              {CATEGORIAS_LABEL[noticia.categoria] ?? noticia.categoria}
            </span>
            <h1 className="text-3xl font-extrabold text-slate-900 leading-tight mb-3">
              {noticia.titulo}
            </h1>
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <time dateTime={noticia.publicadoEn}>
                {formatDate(noticia.publicadoEn)}
              </time>
              {noticia.autor && (
                <>
                  <span>·</span>
                  <span>{noticia.autor}</span>
                </>
              )}
            </div>
          </header>

          {noticia.imagen && (
            <div className="mb-8 aspect-video w-full overflow-hidden rounded-xl bg-slate-100">
              <img
                src={noticia.imagen}
                alt={noticia.titulo}
                className="h-full w-full object-cover"
              />
            </div>
          )}

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
            <p>{noticia.contenido}</p>
          </div>
        </article>
      </Container>
    </Section>
  );
}
