import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { SectionTitle } from "@/components/SectionTitle";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { contact, whatsappUrl } from "@/config/site";

type Search = { producto?: string; servicio?: string };

export const Route = createFileRoute("/contacto")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    producto: typeof s.producto === "string" ? s.producto : undefined,
    servicio: typeof s.servicio === "string" ? s.servicio : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Contacto y cotizaciones — Aguaymanto Perú" },
      {
        name: "description",
        content:
          "Solicita una cotización de aguaymanto o contáctanos por WhatsApp, teléfono o correo. Atendemos pedidos particulares y mayoristas.",
      },
      { property: "og:title", content: "Contacto — Aguaymanto Perú" },
      {
        property: "og:description",
        content: "Estamos aquí para atenderte. Solicita tu cotización.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { producto } = Route.useSearch();
  const items = [
    { icon: MessageCircle, label: "WhatsApp", value: contact.whatsapp.display, href: whatsappUrl(), external: true },
    { icon: Phone, label: "Teléfono", value: contact.phone.display, href: contact.phone.href },
    { icon: Mail, label: "Correo electrónico", value: contact.email.display, href: contact.email.href },
    { icon: MapPin, label: "Dirección", value: `${contact.address}, ${contact.city}` },
    { icon: Clock, label: "Horario de atención", value: contact.schedule },
  ];

  return (
    <>
      <section className="container-site py-16 lg:py-24">
        <SectionTitle
          as="h1"
          eyebrow="Contacto"
          title="Estamos aquí para atenderte"
          description="Si deseas conocer nuestros productos, solicitar una cotización o conversar sobre una oportunidad comercial, contáctanos."
        />
        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <ul className="space-y-4">
            {items.map(({ icon: I, label, value, href, external }) => {
              const body = (
                <>
                  <span className="bg-secondary text-primary grid size-11 shrink-0 place-items-center rounded-full">
                    <I className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="text-muted-foreground block text-xs tracking-wide uppercase">{label}</span>
                    <span className="text-primary block font-semibold">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="border-border bg-card shadow-soft hover:shadow-lift flex items-center gap-4 rounded-2xl border p-5 transition-all"
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="border-border bg-card shadow-soft flex items-center gap-4 rounded-2xl border p-5">
                      {body}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <ContactForm defaultProduct={producto} />
        </div>
      </section>
      <section className="container-site grid gap-12 pb-16 lg:grid-cols-[1fr_1.4fr]">
        <SectionTitle eyebrow="Preguntas frecuentes" title="Antes de escribirnos" />
        <FAQAccordion />
      </section>
    </>
  );
}
