import productoFresco from "@/assets/producto-fresco.jpg";
import productoDistribucion from "@/assets/producto-distribucion.jpg";
import productoEspecial from "@/assets/producto-especial.jpg";

export type Product = {
  slug: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  cta: string;
  /** Campos preparados para ampliar la ficha del producto. */
  presentacion?: string;
  peso?: string;
  disponibilidad?: string;
  precio?: string;
  caracteristicas?: string[];
  fichaTecnica?: string;
};

export const products: Product[] = [
  {
    slug: "aguaymanto-fresco",
    name: "Aguaymanto fresco",
    description:
      "Fruto seleccionado cuidadosamente para conservar su presentación, sabor y frescura.",
    image: productoFresco,
    alt: "Aguaymanto fresco seleccionado en envase transparente listo para la venta",
    cta: "Solicitar información",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: [
      "Fruto seleccionado",
      "Cuidado en la cadena de frescura",
      "Presentación uniforme",
    ],
  },
  {
    slug: "aguaymanto-distribucion",
    name: "Aguaymanto para distribución",
    description:
      "Presentaciones orientadas a clientes comerciales y distribuidores.",
    image: productoDistribucion,
    alt: "Cajas de aguaymanto preparadas para distribución comercial",
    cta: "Consultar",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: [
      "Volúmenes mayores",
      "Empaque para traslado",
      "Coordinación de entregas",
    ],
  },
  {
    slug: "presentaciones-especiales",
    name: "Presentaciones especiales",
    description:
      "Opciones de acuerdo con las necesidades del cliente y disponibilidad.",
    image: productoEspecial,
    alt: "Aguaymanto en presentación especial sobre mesa de madera",
    cta: "Consultar presentación",
    presentacion: "[PRESENTACIÓN]",
    peso: "[PESO]",
    disponibilidad: "[DISPONIBILIDAD]",
    precio: "[PRECIO]",
    caracteristicas: [
      "Evaluación por requerimiento",
      "Según disponibilidad",
      "Asesoría comercial",
    ],
  },
];
