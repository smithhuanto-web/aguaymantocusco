import { cn } from "@/lib/utils";
import { Reveal } from "@/components/Reveal";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "inverted";
  className?: string;
  as?: "h1" | "h2" | "h3";
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  className,
  as: Heading = "h2",
}: SectionTitleProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            "mb-3 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase",
            align === "center" && "justify-center",
            tone === "inverted" ? "text-accent-soft" : "text-primary-soft",
          )}
        >
          <span
            aria-hidden="true"
            className="bg-accent inline-block h-px w-8"
          />
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-3xl leading-[1.15] text-balance sm:text-4xl lg:text-[2.75rem]",
          tone === "inverted" ? "text-primary-foreground" : "text-primary",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            tone === "inverted"
              ? "text-primary-foreground/80"
              : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
