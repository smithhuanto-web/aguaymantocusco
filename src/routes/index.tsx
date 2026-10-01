import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { HeroSlider } from "@/components/HeroSlider";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { ProductCard, ServiceCard, NewsCard } from "@/components/cards";
import { Gallery } from "@/components/Gallery";
import { FAQAccordion } from "@/components/FAQAccordion";
import { WholesaleSection, ReasonsSection, CtaBand } from "@/components/sections";
import { products } from "@/data/products";
import { services } from "@/data/services";
import { news } from "@/data/news";
import galeriaManos from "@/assets/galeria-manos.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aguaymanto Perú — Producción y venta de aguaymanto peruano" },
      {
        name: "description",
        content:
          "Empresa peruana dedicada a la producción y comercialización de aguaymanto fresco. Venta al por mayor para restaurantes, tiendas y distribuidores.",
      },
      { property: "og:title", content: "Aguaymanto Perú — Aguaymanto peruano de calidad" },
      {
        property: "og:description",
        content: "Producimos y comercializamos aguaymanto seleccionado desde el campo peruano.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSlider />

      <section className="container-site grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <SectionTitle
            eyebrow="Sobre nosotros"
            title="Comprometidos con la calidad del aguaymanto peruano"
            description="Somos una empresa dedicada a la producción y comercialización de aguaymanto, comprometida con ofrecer productos de calidad y construir relaciones comerciales duraderas con nuestros clientes."
          />
          <Reveal className="mt-8">
            <Button asChild variant="outline" size="lg">
              <Link to="/quienes-somos">Conoce quiénes somos</Link>
            </Button>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <img
            src={galeriaManos}
            alt="Manos sosteniendo aguaymanto recién cosechado en el campo"
            width={1200}
            height={1504}
            loading="lazy"
            className="shadow-lift aspect-4/5 w-full rounded-3xl object-cover lg:max-h-[560px]"
          />
        </Reveal>
      </section>

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionTitle eyebrow="Productos" title="Nuestros productos" />
            <Button asChild variant="outline">
              <Link to="/productos">Ver productos</Link>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.map((p, i) => (
              <ProductCard key={p.slug} product={p} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Servicios" title="Soluciones para cada tipo de cliente" />
          <Button asChild variant="outline">
            <Link to="/servicios">Conocer nuestros servicios</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} service={s} delay={i * 70} />
          ))}
        </div>
      </section>

      <WholesaleSection />
      <ReasonsSection />

      <section className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Galería" title="Del campo a tu mesa" />
          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <section className="container-site py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionTitle eyebrow="Noticias" title="Novedades y actualidad" />
          <Button asChild variant="outline">
            <Link to="/noticias">Ver todas</Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {news.map((n, i) => (
            <div key={n.slug} className="relative">
              <NewsCard post={n} delay={i * 100} />
            </div>
          ))}
        </div>
      </section>

      <section className="container-site grid gap-12 pb-8 lg:grid-cols-[1fr_1.4fr]">
        <SectionTitle
          eyebrow="Preguntas frecuentes"
          title="Resolvemos tus dudas"
          description="Si no encuentras lo que buscas, escríbenos y te responderemos a la brevedad."
        />
        <FAQAccordion />
      </section>

      <CtaBand />
    </>
  );
}
