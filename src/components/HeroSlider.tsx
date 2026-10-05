import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { VideoButton } from "@/components/VideoButton";
import heroAguaymanto from "@/assets/hero-aguaymanto.jpg";
import heroCampo from "@/assets/hero-campo.jpg";
import heroCosecha from "@/assets/hero-cosecha.jpg";

type Slide = {
  image: string;
  alt: string;
  title: string;
  text?: string;
  actions: { label: string; to: string; variant: "cta" | "onDark" }[];
};

const slides: Slide[] = [
  {
    image: heroAguaymanto,
    alt: "Aguaymanto peruano fresco con su cáliz dorado abierto",
    title: "Aguaymanto peruano, calidad que nace en nuestra tierra",
    text: "Producimos y comercializamos aguaymanto seleccionado, llevando el sabor y la calidad del campo peruano a nuestros clientes.",
    actions: [
      { label: "Conocer nuestros productos", to: "/productos", variant: "cta" },
      { label: "Solicitar cotización", to: "/contacto", variant: "onDark" },
    ],
  },
  {
    image: heroCampo,
    alt: "Plantación de aguaymanto en un valle andino al amanecer",
    title: "Del campo peruano a nuevos mercados",
    text: "Trabajamos para ofrecer productos agrícolas de calidad, con compromiso, responsabilidad y visión de crecimiento.",
    actions: [
      { label: "Conoce nuestra empresa", to: "/quienes-somos", variant: "cta" },
    ],
  },
  {
    image: heroCosecha,
    alt: "Productores peruanos cosechando aguaymanto en el campo",
    title: "Natural, versátil y de excelente calidad",
    actions: [{ label: "Ver productos", to: "/productos", variant: "cta" }],
  },
];

const INTERVAL = 5000;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((next: number) => {
    setIndex((next + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      INTERVAL,
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section
      aria-label="Presentación de la empresa"
      aria-roledescription="carrusel"
      className="relative isolate min-h-[85svh] overflow-hidden lg:min-h-[92svh]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={slide.title}
          aria-hidden={i !== index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100" : "pointer-events-none opacity-0",
          )}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            width={1920}
            height={1088}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "size-full object-cover",
              i === index && "animate-kenburns",
            )}
          />
          <div className="overlay-hero absolute inset-0" aria-hidden="true" />
        </div>
      ))}

      <div className="container-site relative flex min-h-[85svh] items-center py-28 lg:min-h-[92svh]">
        <div className="max-w-2xl">
          {slides.map((slide, i) => (
            <div
              key={slide.title}
              hidden={i !== index}
              className={cn(
                i === index && "animate-in fade-in slide-in-from-bottom-6 duration-700",
              )}
            >
              <p className="text-accent-soft mb-4 flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase">
                <span aria-hidden="true" className="bg-accent h-px w-10" />
                Aguaymanto del Perú
              </p>
              <h1 className="text-primary-foreground font-display text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
                {slide.title}
              </h1>
              {slide.text ? (
                <p className="text-primary-foreground/85 mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
                  {slide.text}
                </p>
              ) : null}
              <div className="mt-9 flex flex-wrap gap-3">
                {slide.actions.map((a) => (
                  <Button key={a.label} asChild variant={a.variant} size="lg">
                    <Link to={a.to}>{a.label}</Link>
                  </Button>
                ))}
              </div>
              <VideoButton />
            </div>
          ))}
        </div>
      </div>

      <div className="container-site absolute inset-x-0 bottom-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3" role="tablist" aria-label="Diapositivas">
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              onClick={() => go(i)}
              className={cn(
                "focus-visible:ring-accent h-1.5 rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent focus-visible:outline-none",
                i === index
                  ? "bg-accent w-12"
                  : "bg-primary-foreground/45 hover:bg-primary-foreground/70 w-6",
              )}
            />
          ))}
        </div>
        <div className="hidden gap-2 sm:flex">
          <Button
            variant="onDark"
            size="icon"
            aria-label="Diapositiva anterior"
            onClick={() => go(index - 1)}
          >
            <ChevronLeft className="size-5" />
          </Button>
          <Button
            variant="onDark"
            size="icon"
            aria-label="Diapositiva siguiente"
            onClick={() => go(index + 1)}
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
