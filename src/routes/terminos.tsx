import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terminos")({
  head: () => ({
    meta: [
      { title: "Términos y condiciones — Aguaymanto Perú" },
      { name: "description", content: "Términos y condiciones de uso del sitio web." },
      { property: "og:title", content: "Términos y condiciones — Aguaymanto Perú" },
      { property: "og:description", content: "Condiciones de uso del sitio web." },
    ],
  }),
  component: () => (
    <section className="container-site max-w-3xl py-20">
      <h1 className="text-primary text-4xl">Términos y condiciones</h1>
      <p className="text-muted-foreground mt-8 leading-relaxed">
        [Texto legal pendiente de completar por la empresa.]
      </p>
    </section>
  ),
});
