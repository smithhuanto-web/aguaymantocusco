import { createFileRoute } from "@tanstack/react-router";
import { company } from "@/config/site";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: "Política de privacidad — Aguaymanto Perú" },
      { name: "description", content: "Política de privacidad y tratamiento de datos personales." },
      { property: "og:title", content: "Política de privacidad — Aguaymanto Perú" },
      { property: "og:description", content: "Cómo tratamos tus datos personales." },
    ],
  }),
  component: () => (
    <section className="container-site max-w-3xl py-20">
      <h1 className="text-primary text-4xl">Política de privacidad</h1>
      <div className="text-muted-foreground mt-8 space-y-4 leading-relaxed">
        <p>
          {company.name} utiliza los datos enviados a través de este sitio únicamente para responder
          consultas y cotizaciones.
        </p>
        <p>[Texto legal pendiente de completar por la empresa.]</p>
      </div>
    </section>
  ),
});
