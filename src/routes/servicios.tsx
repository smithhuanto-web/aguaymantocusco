import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/cards";
import { ReasonsSection, WholesaleSection, CtaBand } from "@/components/sections";
import { services } from "@/data/services";
import heroCosecha from "@/assets/hero-cosecha.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios — Venta mayorista y proveedor de aguaymanto | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Venta de aguaymanto, venta al por mayor, atención a restaurantes, tiendas y distribuidores, pedidos personalizados y asesoría comercial.",
      },
      { property: "og:title", content: "Nuestros servicios — Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Proveedor de aguaymanto para restaurantes, tiendas, distribuidores y empresas.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title="Nuestros servicios"
        description="Acompañamos a cada cliente desde la consulta hasta la entrega."
        image={heroCosecha}
        alt="Productores cosechando aguaymanto"
      />
      <section className="container-site py-20 lg:py-28">
        <SectionTitle eyebrow="Qué hacemos" title="Servicios alrededor de nuestros productos" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <div id={s.slug} key={s.slug}>
              <ServiceCard service={s} delay={i * 70} />
            </div>
          ))}
        </div>
      </section>
      <WholesaleSection />
      <ReasonsSection />
      <CtaBand />
    </>
  );
}
