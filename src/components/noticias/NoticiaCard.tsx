import Link from "next/link";
import type { Noticia } from "@/types";
import { formatDate, truncate } from "@/lib/utils";
import { CATEGORIAS_LABEL } from "@/lib/constants";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/Card";

interface NoticiaCardProps {
  noticia: Noticia;
}

export function NoticiaCard({ noticia }: NoticiaCardProps) {
  return (
    <Card className="flex flex-col h-full">
      {noticia.imagen && (
        <div className="aspect-video w-full overflow-hidden rounded-t-xl bg-slate-100">
          <img
            src={noticia.imagen}
            alt={noticia.titulo}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <span className="inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
          {CATEGORIAS_LABEL[noticia.categoria] ?? noticia.categoria}
        </span>
        <h3 className="mt-2 text-base font-semibold leading-snug text-slate-900 line-clamp-2">
          {noticia.titulo}
        </h3>
      </CardHeader>
      <CardBody className="flex-1">
        <p className="text-sm text-slate-600 leading-relaxed">
          {truncate(noticia.resumen, 120)}
        </p>
      </CardBody>
      <CardFooter className="flex items-center justify-between">
        <time
          dateTime={noticia.publicadoEn}
          className="text-xs text-slate-400"
        >
          {formatDate(noticia.publicadoEn)}
        </time>
        <Link
          href={`/noticias/${noticia.slug}`}
          className="text-sm font-medium text-blue-900 hover:text-amber-600 transition-colors"
        >
          Leer más →
        </Link>
      </CardFooter>
    </Card>
  );
}
