export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    slug: "venta",
    title: "Venta de aguaymanto",
    description: "Venta de producto para clientes particulares y comerciales.",
    icon: "ShoppingBasket",
  },
  {
    slug: "venta-mayorista",
    title: "Venta al por mayor",
    description: "Atención de pedidos de mayor volumen.",
    icon: "Boxes",
  },
  {
    slug: "restaurantes",
    title: "Atención a restaurantes",
    description:
      "Provisión de producto para restaurantes, hoteles, cafeterías y negocios gastronómicos.",
    icon: "ChefHat",
  },
  {
    slug: "tiendas-distribuidores",
    title: "Atención a tiendas y distribuidores",
    description:
      "Opciones comerciales para negocios que desean incorporar aguaymanto a su oferta.",
    icon: "Store",
  },
  {
    slug: "pedidos-personalizados",
    title: "Pedidos personalizados",
    description:
      "Evaluación de requerimientos específicos según producto, volumen y disponibilidad.",
    icon: "ClipboardList",
  },
  {
    slug: "asesoria-comercial",
    title: "Asesoría comercial",
    description:
      "Atención personalizada para ayudar al cliente a elegir la presentación adecuada.",
    icon: "Headset",
  },
];
