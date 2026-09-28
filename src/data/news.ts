import heroCampo from "@/assets/hero-campo.jpg";
import galeriaManos from "@/assets/galeria-manos.jpg";
import galeriaSeleccion from "@/assets/galeria-seleccion.jpg";

export type NewsPost = {
  slug: string;
  title: string;
  category: string;
  date: string; // ISO
  dateLabel: string;
  author: string;
  excerpt: string;
  image: string;
  alt: string;
  /** Contenido por párrafos. Contenido de ejemplo: editable o eliminable. */
  content: string[];
  gallery?: { src: string; alt: string }[];
};

export const categories = [
  "Noticias de la empresa",
  "Agricultura",
  "Aguaymanto",
  "Mercado",
  "Eventos",
  "Innovación",
  "Producción",
] as const;

export const news: NewsPost[] = [
  {
    slug: "aguaymanto-peruano-nuevos-mercados",
    title: "El aguaymanto peruano y su presencia en nuevos mercados",
    category: "Mercado",
    date: "2026-08-14",
    dateLabel: "14 de agosto, 2026",
    author: "[AUTOR]",
    excerpt:
      "El interés por el aguaymanto peruano continúa creciendo entre compradores que buscan fruta de origen andino con buena presentación.",
    image: heroCampo,
    alt: "Cultivo de aguaymanto en un valle andino al atardecer",
    content: [
      "El aguaymanto es un fruto originario de los Andes que ha ganado espacio en distintos mercados gracias a su sabor característico y su presentación distintiva.",
      "Para los productores peruanos, este interés representa una oportunidad para fortalecer procesos, mejorar la selección del fruto y responder a compradores que valoran la consistencia del producto.",
      "Desde nuestra empresa acompañamos esa demanda con un trabajo enfocado en la calidad y en una atención comercial cercana a cada cliente.",
      "Este es un contenido de ejemplo y puede editarse o eliminarse cuando se publiquen las noticias reales de la empresa.",
    ],
    gallery: [
      { src: galeriaManos, alt: "Manos sosteniendo aguaymanto recién cosechado" },
      {
        src: galeriaSeleccion,
        alt: "Selección de aguaymanto en planta de procesamiento",
      },
    ],
  },
  {
    slug: "conoce-el-cultivo-del-aguaymanto",
    title: "Conoce más sobre el cultivo del aguaymanto",
    category: "Agricultura",
    date: "2026-07-02",
    dateLabel: "2 de julio, 2026",
    author: "[AUTOR]",
    excerpt:
      "Cómo se cultiva, cómo se cosecha y por qué el cuidado en el campo define la calidad final del fruto.",
    image: galeriaManos,
    alt: "Manos sosteniendo aguaymanto con cáliz abierto sobre un campo verde",
    content: [
      "El cultivo del aguaymanto requiere atención constante: desde la preparación del terreno hasta el momento exacto de la cosecha.",
      "El fruto se protege dentro de un cáliz que ayuda a conservarlo. Su manejo cuidadoso en campo influye directamente en la presentación que llega al cliente final.",
      "La cosecha manual permite seleccionar el fruto en su punto y reducir daños durante el traslado.",
      "Este es un contenido de ejemplo y puede editarse o eliminarse cuando se publiquen las noticias reales de la empresa.",
    ],
  },
  {
    slug: "apuesta-por-la-calidad",
    title: "Nuestra apuesta por la calidad y la producción responsable",
    category: "Noticias de la empresa",
    date: "2026-05-20",
    dateLabel: "20 de mayo, 2026",
    author: "[AUTOR]",
    excerpt:
      "Trabajamos en procesos de selección y empaque orientados a mantener un estándar constante en cada entrega.",
    image: galeriaSeleccion,
    alt: "Equipo seleccionando aguaymanto en una planta de empaque",
    content: [
      "La calidad no es una etapa aislada: es el resultado de decisiones tomadas en el campo, en la selección y en el empaque.",
      "Por eso reforzamos nuestras revisiones antes del despacho y trabajamos con empaques que protegen el fruto durante el traslado.",
      "También promovemos prácticas responsables con el entorno y con las personas que forman parte de nuestra cadena de trabajo.",
      "Este es un contenido de ejemplo y puede editarse o eliminarse cuando se publiquen las noticias reales de la empresa.",
    ],
  },
];

export const getPost = (slug: string) => news.find((n) => n.slug === slug);

export const relatedPosts = (slug: string, limit = 2) =>
  news.filter((n) => n.slug !== slug).slice(0, limit);
