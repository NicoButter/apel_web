export interface Noticia {
  id: string;
  slug: string;
  titulo: string;
  resumen: string;
  contenido: string;
  imagen?: string;
  categoria: NoticiaCategoria;
  publicadoEn: string; // ISO date string
  autor?: string;
}

export type NoticiaCategoria =
  | "gremial"
  | "institucional"
  | "convenio"
  | "actividad"
  | "comunicado";
