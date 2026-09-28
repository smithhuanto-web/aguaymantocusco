import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { reasons, wholesaleBenefits, qualityAttributes } from "@/data/company";
import { whatsappUrl } from "@/config/site";
import heroCosecha from "@/assets/hero-cosecha.jpg";

/** Sección orientada a clientes mayoristas y empresas. */
export function WholesaleSection() {
  return (
    <section className="bg-primary relative isolate overflow-hidden py-20 lg:py-28">
      <img
        src={heroCosecha}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 -z-10 size-full object-cover opacity-20"
      />
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionTitle
            eyebrow="Clientes mayoristas"
            title="¿Buscas un proveedor de aguaymanto?"
            description="Atendemos consultas comerciales de restaurantes, tiendas, distribuidores, empresas y otros negocios que requieren aguaymanto."
            tone="inverted"
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="cta" size="lg">
              <Link to="/contacto">Solicitar cotización</Link>
            </Button>
            <Button asChild variant="onDark" size="lg">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
        <ul className="grid gap-3 sm:grid-cols-2 lg:gap-4">
          {wholesaleBenefits.map((b, i) => (
            <Reveal as="li" key={b} delay={i * 80}>
              <div className="border-primary-foreground/15 bg-primary-foreground/10 text-primary-foreground flex items-center gap-3 rounded-xl border px-5 py-4 text-sm font-medium backdrop-blur-sm">
                <Check className="text-accent size-5 shrink-0" aria-hidden="true" />
                {b}
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** ¿Por qué elegirnos? */
export function ReasonsSection() {
  return (
    <section className="container-site py-20 lg:py-28">
      <SectionTitle
        eyebrow="¿Por qué elegirnos?"
        title="Razones para trabajar con nosotros"
        description="Priorizamos la calidad del producto y una relación comercial clara y cercana con cada cliente."
        align="center"
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {reasons.map((r, i) => (
          <Reveal as="article" key={r.title} delay={i * 80} className="h-full">
            <div className="border-border bg-card shadow-soft hover:shadow-lift h-full rounded-2xl border p-6 text-center transition-all duration-500 hover:-translate-y-1">
              <span className="bg-gradient-sun text-accent-foreground mx-auto grid size-12 place-items-center rounded-full">
                <Icon name={r.icon} className="size-5" />
              </span>
              <h3 className="text-primary mt-4 text-base font-semibold">
                {r.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {r.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/** Calidad que se nota */
export function QualitySection() {
  return (
    <section id="calidad" className="bg-secondary/60 py-20 lg:py-28">
      <div className="container-site">
        <SectionTitle
          eyebrow="Calidad"
          title="Calidad que se nota"
          description="Cuidamos cada detalle del proceso para que el producto llegue en las mejores condiciones."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {qualityAttributes.map((a, i) => (
            <Reveal as="article" key={a.title} delay={i * 70} className="h-full">
              <div className="border-border bg-card shadow-soft h-full rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1">
                <span className="text-primary-soft bg-secondary grid size-11 place-items-center rounded-full">
                  <Icon name={a.icon} className="size-5" />
                </span>
                <h3 className="text-primary mt-4 text-base font-semibold">
                  {a.title}
                </h3>
                <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                  {a.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Banda final de conversión. */
export function CtaBand({
  title = "Conversemos sobre tu próximo pedido",
  text = "Cuéntanos qué necesitas y te enviaremos una cotización de acuerdo con la disponibilidad del producto.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-site py-20">
      <Reveal>
        <div className="bg-gradient-leaf shadow-lift relative overflow-hidden rounded-3xl px-8 py-14 text-center sm:px-14">
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-primary-foreground text-3xl text-balance sm:text-4xl">
              {title}
            </h2>
            <p className="text-primary-foreground/85 mx-auto mt-4 max-w-xl text-base leading-relaxed">
              {text}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild variant="cta" size="lg">
                <Link to="/contacto">Solicitar cotización</Link>
              </Button>
              <Button asChild variant="onDark" size="lg">
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
