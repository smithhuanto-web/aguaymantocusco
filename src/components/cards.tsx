import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";
import type { Product } from "@/data/products";
import type { Service } from "@/data/services";
import type { NewsPost } from "@/data/news";

export function ProductCard({
  product,
  delay = 0,
}: {
  product: Product;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="group border-border bg-card shadow-soft hover:shadow-lift flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1">
        <div className="aspect-4/3 overflow-hidden">
          <img
            src={product.image}
            alt={product.alt}
            width={1200}
            height={900}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-primary text-xl">{product.name}</h3>
          <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
            {product.description}
          </p>
          {product.caracteristicas?.length ? (
            <ul className="mt-4 flex flex-wrap gap-2">
              {product.caracteristicas.map((c) => (
                <li
                  key={c}
                  className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
                >
                  {c}
                </li>
              ))}
            </ul>
          ) : null}
          <Button asChild variant="cta" className="mt-6 w-full">
            <Link to="/contacto" search={{ producto: product.slug }}>
              {product.cta}
            </Link>
          </Button>
        </div>
      </div>
    </Reveal>
  );
}

export function ServiceCard({
  service,
  delay = 0,
}: {
  service: Service;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="group border-border bg-card shadow-soft hover:shadow-lift flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1">
        <span className="bg-secondary text-primary group-hover:bg-gradient-sun group-hover:text-accent-foreground grid size-12 place-items-center rounded-xl transition-colors duration-500">
          <Icon name={service.icon} className="size-6" />
        </span>
        <h3 className="text-primary mt-5 text-lg">{service.title}</h3>
        <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
          {service.description}
        </p>
        <Link
          to="/contacto"
          search={{ servicio: service.slug }}
          className="text-primary hover:text-accent-foreground mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors"
        >
          Consultar
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </Reveal>
  );
}

export function ValueCard({
  title,
  text,
  icon,
  delay = 0,
}: {
  title: string;
  text: string;
  icon: string;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="border-border bg-card shadow-soft hover:shadow-lift h-full rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1">
        <span className="text-primary-soft bg-secondary grid size-11 place-items-center rounded-full">
          <Icon name={icon} className="size-5" />
        </span>
        <h3 className="text-primary mt-4 text-base font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{text}</p>
      </div>
    </Reveal>
  );
}

export function NewsCard({
  post,
  delay = 0,
}: {
  post: NewsPost;
  delay?: number;
}) {
  return (
    <Reveal as="article" delay={delay} className="h-full">
      <div className="group border-border bg-card shadow-soft hover:shadow-lift flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1">
        <div className="relative aspect-16/10 overflow-hidden">
          <img
            src={post.image}
            alt={post.alt}
            width={1200}
            height={750}
            loading="lazy"
            className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="bg-accent text-accent-foreground absolute top-4 left-4 rounded-full px-3 py-1 text-xs font-semibold">
            {post.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <time
            dateTime={post.date}
            className="text-muted-foreground text-xs tracking-wide uppercase"
          >
            {post.dateLabel}
          </time>
          <h3 className="text-primary mt-2 text-lg leading-snug">
            <Link to="/noticias/$slug" params={{ slug: post.slug }}>
              <span className="absolute inset-0" aria-hidden="true" />
              {post.title}
            </Link>
          </h3>
          <p className="text-muted-foreground mt-3 flex-1 text-sm leading-relaxed">
            {post.excerpt}
          </p>
          <span className="text-primary mt-5 inline-flex items-center gap-2 text-sm font-semibold">
            Leer más
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Reveal>
  );
}
