import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { company, contact, navigation, socials, whatsappUrl } from "@/config/site";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="inverted" />
          <p className="text-primary-foreground/75 mt-5 max-w-xs text-sm leading-relaxed">
            {company.name} — {company.tagline}
          </p>
        </div>

        <nav aria-label="Enlaces del sitio">
          <h2 className="text-accent-soft text-xs font-semibold tracking-[0.2em] uppercase">
            Enlaces
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-primary-foreground/80 hover:text-accent-soft transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-accent-soft text-xs font-semibold tracking-[0.2em] uppercase">
            Información
          </h2>
          <ul className="text-primary-foreground/80 mt-5 space-y-3 text-sm">
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent-soft flex items-start gap-2 transition-colors"
              >
                <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                WhatsApp: {contact.whatsapp.display}
              </a>
            </li>
            <li>
              <a
                href={contact.phone.href}
                className="hover:text-accent-soft flex items-start gap-2 transition-colors"
              >
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {contact.phone.display}
              </a>
            </li>
            <li>
              <a
                href={contact.email.href}
                className="hover:text-accent-soft flex items-start gap-2 transition-colors"
              >
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                {contact.email.display}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {contact.address}, {contact.city}
            </li>
            <li className="flex items-start gap-2">
              <Clock className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              {contact.schedule}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-accent-soft text-xs font-semibold tracking-[0.2em] uppercase">
            Redes sociales
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-accent-soft transition-colors"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-primary-foreground/15 border-t">
        <div className="container-site text-primary-foreground/70 flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {company.name}. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link to="/privacidad" className="hover:text-accent-soft transition-colors">
              Política de privacidad
            </Link>
            <Link to="/terminos" className="hover:text-accent-soft transition-colors">
              Términos y condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
