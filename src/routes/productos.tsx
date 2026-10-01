import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { ProductCard } from "@/components/cards";
import { QualitySection, WholesaleSection, CtaBand } from "@/components/sections";
import { products } from "@/data/products";
import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";

export const Route = createFileRoute("/productos")({
  head: () => ({
    meta: [
      { title: "Productos — Aguaymanto fresco y al por mayor | Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Aguaymanto fresco seleccionado, presentaciones para distribución y pedidos especiales. Solicita información y cotización.",
      },
      { property: "og:title", content: "Nuestros productos — Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Aguaymanto fresco, para distribución y presentaciones especiales.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Catálogo"
        title="Nuestros productos"
        description="Aguaymanto peruano seleccionado para clientes particulares y comerciales."
        image={heroAguaymanto}
        alt="Aguaymanto fresco con cáliz dorado"
      />
      <section id="presentaciones" className="container-site py-20 lg:py-28">
        <SectionTitle eyebrow="Presentaciones" title="Elige la opción que mejor se adapta a tu negocio" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} delay={i * 100} />
          ))}
        </div>
      </section>
      <QualitySection />
      <WholesaleSection />
      <CtaBand />
    </>
  );
}
