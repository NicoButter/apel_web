export const siteConfig = {
  name: "APEL",
  fullName: "Asociación del Personal de la Justicia de Santa Cruz",
  description:
    "Sindicato de trabajadores judiciales de Santa Cruz, Argentina. Defendemos los derechos y el bienestar de nuestros afiliados.",
  url: "https://apel.org.ar",
  locale: "es-AR",
  contact: {
    email: "info@apel.org.ar",
    phone: "+54 297 XXX-XXXX",
    address: "Santa Cruz, Argentina",
  },
  socialLinks: {
    facebook: "https://facebook.com/apel",
    instagram: "https://instagram.com/apel",
    twitter: "https://twitter.com/apel",
  },
  nav: [
    { label: "Inicio", href: "/" },
    { label: "Institucional", href: "/institucional" },
    { label: "Noticias", href: "/noticias" },
    { label: "Beneficios", href: "/beneficios" },
    { label: "Afiliación", href: "/afiliacion" },
    { label: "Contacto", href: "/contacto" },
  ],
} as const;
