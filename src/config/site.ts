/**
 * Configuración central del sitio.
 * Edita aquí los datos de la empresa: aparecen en todo el sitio.
 */

export const company = {
  name: "[NOMBRE DE LA EMPRESA]",
  shortName: "AGUAYMANTO PERÚ",
  tagline: "Calidad y compromiso desde el campo peruano.",
  legalName: "[NOMBRE DE LA EMPRESA]",
};

export const contact = {
  whatsapp: {
    /** Número en formato internacional, solo dígitos. Ej: 51999888777 */
    number: "51999999999",
    display: "[WHATSAPP]",
    defaultMessage:
      "Hola, estoy interesado en sus productos de aguaymanto y quisiera recibir información.",
    label: "¿Necesitas información?",
  },
  phone: {
    display: "[TELÉFONO]",
    href: "tel:+51000000000",
  },
  email: {
    display: "[CORREO]",
    href: "mailto:contacto@example.com",
  },
  address: "[DIRECCIÓN]",
  city: "[CIUDAD], Perú",
  schedule: "[HORARIO]",
};

export const socials = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "TikTok", href: "#" },
  { name: "LinkedIn", href: "#" },
] as const;

export const navigation = [
  { label: "Inicio", to: "/" },
  { label: "Quiénes Somos", to: "/quienes-somos" },
  { label: "Productos", to: "/productos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Noticias", to: "/noticias" },
  { label: "Contacto", to: "/contacto" },
] as const;

export const whatsappUrl = (message: string = contact.whatsapp.defaultMessage) =>
  `https://wa.me/${contact.whatsapp.number}?text=${encodeURIComponent(message)}`;

/** Video de ejemplo (YouTube). Reemplazar por el video institucional. */
export const promoVideo = {
  youtubeId: "Q9hFoMARo3A",
  label: "Ver video",
};
