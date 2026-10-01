import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { NewsCard } from "@/components/cards";
import { news } from "@/data/news";
import heroCampo from "@/assets/hero-campo.jpg";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Noticias y actualidad — Aguaymanto Perú" },
      {
        name: "description",
        content: "Novedades de la empresa, agricultura, mercado y todo sobre el aguaymanto peruano.",
      },
      { property: "og:title", content: "Noticias y actualidad — Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Novedades sobre el aguaymanto peruano y nuestra empresa.",
      },
    ],
  }),
  component: NewsPage,
});

function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog corporativo"
        title="Noticias y actualidad"
        image={heroCampo}
        alt="Valle andino con cultivos de aguaymanto"
      />
      <section className="container-site py-20 lg:py-28">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((n, i) => (
            <div key={n.slug} className="relative">
              <NewsCard post={n} delay={i * 100} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
