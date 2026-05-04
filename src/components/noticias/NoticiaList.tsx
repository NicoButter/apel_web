import type { Noticia } from "@/types";
import { NoticiaCard } from "./NoticiaCard";

interface NoticiaListProps {
  noticias: Noticia[];
}

export function NoticiaList({ noticias }: NoticiaListProps) {
  if (noticias.length === 0) {
    return (
      <p className="py-12 text-center text-slate-500">
        No hay noticias disponibles por el momento.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {noticias.map((noticia) => (
        <li key={noticia.id}>
          <NoticiaCard noticia={noticia} />
        </li>
      ))}
    </ul>
  );
}
