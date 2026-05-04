export const ROUTES = {
  HOME: "/",
  INSTITUCIONAL: "/institucional",
  NOTICIAS: "/noticias",
  AFILIACION: "/afiliacion",
  BENEFICIOS: "/beneficios",
  CONTACTO: "/contacto",
} as const;

export const CATEGORIAS_LABEL: Record<string, string> = {
  gremial: "Gremial",
  institucional: "Institucional",
  convenio: "Convenio",
  actividad: "Actividad",
  comunicado: "Comunicado",
};

export const ITEMS_PER_PAGE = 9;
