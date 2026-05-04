import type { Noticia } from "@/types";

/**
 * Placeholder data source — replace with CMS/API calls.
 */
const MOCK_NOTICIAS: Noticia[] = [
  {
    id: "1",
    slug: "nueva-convencion-colectiva-2024",
    titulo: "Se firmó la nueva convención colectiva de trabajo 2024",
    resumen:
      "Tras meses de negociación, APEL logró importantes mejoras salariales y condiciones laborales para todos los trabajadores judiciales.",
    contenido:
      "Contenido completo de la noticia...",
    imagen: "/images/noticias/convencion-2024.jpg",
    categoria: "convenio",
    publicadoEn: "2024-08-15T10:00:00Z",
    autor: "Secretaría de Prensa APEL",
  },
  {
    id: "2",
    slug: "acto-aniversario-apel",
    titulo: "APEL celebró un nuevo aniversario de su fundación",
    resumen:
      "Con un emotivo acto en la sede central, los trabajadores judiciales conmemoraron otro año de lucha y compromiso gremial.",
    contenido: "Contenido completo de la noticia...",
    imagen: "/images/noticias/aniversario.jpg",
    categoria: "institucional",
    publicadoEn: "2024-07-20T09:00:00Z",
    autor: "Secretaría de Prensa APEL",
  },
];

export async function getNoticias(): Promise<Noticia[]> {
  // TODO: Replace with real CMS/API call
  return MOCK_NOTICIAS;
}

export async function getNoticia(slug: string): Promise<Noticia | undefined> {
  // TODO: Replace with real CMS/API call
  return MOCK_NOTICIAS.find((n) => n.slug === slug);
}
