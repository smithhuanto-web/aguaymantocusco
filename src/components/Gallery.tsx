import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Reveal } from "@/components/Reveal";
import { galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const current = openIndex !== null ? galleryImages[openIndex] : null;

  return (
    <>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {galleryImages.map((img, i) => (
          <Reveal
            as="li"
            key={img.src}
            delay={i * 60}
            className={cn(
              "list-none",
              (i === 0 || i === 5) && "lg:col-span-2 lg:row-span-1",
            )}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group focus-visible:ring-ring relative block h-full w-full overflow-hidden rounded-xl focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              aria-label={`Ampliar imagen: ${img.caption}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="aspect-4/3 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="from-primary/85 absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <span className="text-primary-foreground absolute bottom-3 left-4 translate-y-2 text-sm font-semibold opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {img.caption}
              </span>
            </button>
          </Reveal>
        ))}
      </ul>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(o) => !o && setOpenIndex(null)}
      >
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          {current ? (
            <>
              <DialogTitle className="sr-only">{current.caption}</DialogTitle>
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[80vh] w-full object-contain"
              />
              <p className="text-muted-foreground px-6 pb-5 text-sm">
                {current.alt}
              </p>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
