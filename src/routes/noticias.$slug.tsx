import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/cards";
import { CtaBand } from "@/components/sections";
import { getPost, relatedPosts } from "@/data/news";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return { meta: [{ title: "Noticia no encontrada" }, { name: "robots", content: "noindex" }] };
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Aguaymanto Perú` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: PostNotFound,
  component: PostPage,
});

function PostNotFound() {
  return (
    <div className="container-site py-32 text-center">
      <h1 className="text-primary text-3xl">Noticia no encontrada</h1>
      <Button asChild variant="outline" className="mt-6">
        <Link to="/noticias">Volver a noticias</Link>
      </Button>
    </div>
  );
}

function PostPage() {
  const { post } = Route.useLoaderData();
  const related = relatedPosts(post.slug);

  return (
    <>
      <article className="container-site max-w-3xl py-16 lg:py-20">
        <Link
          to="/noticias"
          className="text-primary-soft hover:text-primary inline-flex items-center gap-2 text-sm font-semibold"
        >
          <ArrowLeft className="size-4" aria-hidden="true" /> Noticias
        </Link>
        <p className="mt-8">
          <span className="bg-accent text-accent-foreground rounded-full px-3 py-1 text-xs font-semibold">
            {post.category}
          </span>
        </p>
        <h1 className="text-primary mt-5 text-4xl leading-tight text-balance sm:text-5xl">{post.title}</h1>
        <p className="text-muted-foreground mt-4 text-sm">
          <time dateTime={post.date}>{post.dateLabel}</time> · Por {post.author}
        </p>
        <img
          src={post.image}
          alt={post.alt}
          className="shadow-lift mt-10 aspect-16/9 w-full rounded-3xl object-cover"
        />
        <div className="text-foreground/85 mt-10 space-y-5 text-lg leading-relaxed">
          {post.content.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {post.gallery?.length ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {post.gallery.map((g) => (
              <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="aspect-4/3 w-full rounded-2xl object-cover" />
            ))}
          </div>
        ) : null}
      </article>

      {related.length ? (
        <section className="bg-secondary/60 py-20">
          <div className="container-site">
            <h2 className="text-primary text-3xl">Noticias relacionadas</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {related.map((r) => (
                <div key={r.slug} className="relative">
                  <NewsCard post={r} />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <CtaBand />
    </>
  );
}
