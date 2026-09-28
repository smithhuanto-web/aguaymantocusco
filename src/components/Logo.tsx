import { Link } from "@tanstack/react-router";
import { company } from "@/config/site";
import { cn } from "@/lib/utils";

/** Logotipo temporal de texto. Reemplazar por [LOGO DE LA EMPRESA]. */
export function Logo({
  tone = "default",
  className,
}: {
  tone?: "default" | "inverted";
  className?: string;
}) {
  return (
    <Link
      to="/"
      aria-label={`${company.shortName} — ir al inicio`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      <span
        aria-hidden="true"
        className="bg-gradient-sun shadow-accent grid size-10 place-items-center rounded-full transition-transform duration-300 group-hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="size-6" fill="none">
          <path
            d="M12 3.5 8.2 9.4a5.8 5.8 0 0 0 7.6 0L12 3.5Z"
            className="fill-primary"
          />
          <circle cx="12" cy="14.2" r="4.6" className="fill-primary" />
          <circle cx="12" cy="14.2" r="2.4" className="fill-accent-soft" />
        </svg>
      </span>
      <span className="leading-tight">
        <span
          className={cn(
            "font-display block text-base font-semibold tracking-tight sm:text-lg",
            tone === "inverted" ? "text-primary-foreground" : "text-primary",
          )}
        >
          {company.shortName}
        </span>
        <span
          className={cn(
            "block text-[0.65rem] tracking-[0.18em] uppercase",
            tone === "inverted"
              ? "text-primary-foreground/70"
              : "text-muted-foreground",
          )}
        >
          Producción y comercialización
        </span>
      </span>
    </Link>
  );
}
