export function PageHero({
  eyebrow,
  title,
  description,
  image,
  alt,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="overlay-hero absolute inset-0 -z-10" aria-hidden="true" />
      <div className="container-site py-24 lg:py-32">
        <p className="text-accent-soft mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase">
          <span aria-hidden="true" className="bg-accent h-px w-10" />
          {eyebrow}
        </p>
        <h1 className="text-primary-foreground max-w-3xl text-4xl leading-tight text-balance sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="text-primary-foreground/85 mt-5 max-w-2xl text-lg leading-relaxed">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  );
}
