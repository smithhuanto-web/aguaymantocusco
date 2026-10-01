import { createFileRoute } from "@tanstack/react-router";
import { Target, Telescope } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { Reveal } from "@/components/Reveal";
import { ValueCard } from "@/components/cards";
import { Icon } from "@/components/Icon";
import { Gallery } from "@/components/Gallery";
import { CtaBand } from "@/components/sections";
import { history, mission, vision, values, commitments } from "@/data/company";
import heroCampo from "@/assets/hero-campo.jpg";
import galeriaSeleccion from "@/assets/galeria-seleccion.jpg";

export const Route = createFileRoute("/quienes-somos")({
  head: () => ({
    meta: [
      { title: "Quiénes Somos — Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Conoce nuestra empresa, historia, misión, visión y valores. Producimos y comercializamos aguaymanto con raíces en el campo peruano.",
      },
      { property: "og:title", content: "Quiénes Somos — Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Una empresa con raíces en el campo peruano, comprometida con la calidad.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Quiénes somos"
        title="Una empresa con raíces en el campo peruano"
        image={heroCampo}
        alt="Campos de aguaymanto en los Andes peruanos"
      />

      <section id="empresa" className="container-site grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <SectionTitle eyebrow="Nuestra empresa" title="Producimos y comercializamos aguaymanto de calidad" />
          <Reveal className="text-muted-foreground mt-6 space-y-4 leading-relaxed">
            <p>
              Somos una empresa peruana dedicada a la producción, comercialización y venta de
              aguaymanto. Ofrecemos fruto fresco seleccionado y presentaciones para clientes
              particulares y comerciales.
            </p>
            <p>
              Atendemos a restaurantes, tiendas, distribuidores, empresas y compradores mayoristas.
              Nos diferencia la atención cercana y el cuidado de la calidad en cada etapa.
            </p>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <img
            src={galeriaSeleccion}
            alt="Equipo seleccionando aguaymanto"
            loading="lazy"
            className="shadow-lift aspect-4/3 w-full rounded-3xl object-cover"
          />
        </Reveal>
      </section>

      <section id="historia" className="bg-secondary/60 py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Trayectoria" title="Nuestra historia" align="center" />
          <ol className="relative mt-14 grid gap-8 md:grid-cols-4">
            <span aria-hidden="true" className="bg-accent/50 absolute top-6 right-0 left-0 hidden h-px md:block" />
            {history.map((h, i) => (
              <Reveal as="li" key={h.step} delay={i * 120} className="relative">
                <span className="bg-gradient-sun text-accent-foreground font-display relative grid size-12 place-items-center rounded-full text-lg font-semibold">
                  {h.step}
                </span>
                <h3 className="text-primary mt-5 text-lg">{h.title}</h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{h.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="mision" className="container-site grid gap-6 py-20 md:grid-cols-2 lg:py-28">
        <Reveal>
          <div className="bg-gradient-leaf text-primary-foreground shadow-lift h-full rounded-3xl p-10">
            <Target className="text-accent size-10" aria-hidden="true" />
            <h2 className="mt-6 text-3xl">Nuestra Misión</h2>
            <p className="text-primary-foreground/85 mt-4 leading-relaxed">{mission}</p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div id="vision" className="border-border bg-card shadow-soft h-full rounded-3xl border p-10">
            <Telescope className="text-primary-soft size-10" aria-hidden="true" />
            <h2 className="text-primary mt-6 text-3xl">Nuestra Visión</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">{vision}</p>
          </div>
        </Reveal>
      </section>

      <section id="valores" className="container-site pb-20 lg:pb-28">
        <SectionTitle eyebrow="Valores" title="Nuestros valores" align="center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <ValueCard key={v.title} {...v} delay={i * 70} />
          ))}
        </div>
      </section>

      <section id="compromiso" className="bg-primary py-20 lg:py-28">
        <div className="container-site">
          <SectionTitle eyebrow="Compromiso" title="Nuestro compromiso" tone="inverted" align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {commitments.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="border-primary-foreground/15 bg-primary-foreground/5 h-full rounded-2xl border p-8">
                  <Icon name={c.icon} className="text-accent size-8" />
                  <h3 className="text-primary-foreground mt-5 text-xl">{c.title}</h3>
                  <p className="text-primary-foreground/80 mt-3 text-sm leading-relaxed">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-20 lg:py-28">
        <SectionTitle eyebrow="Galería" title="Nuestro trabajo en imágenes" />
        <div className="mt-12">
          <Gallery />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
