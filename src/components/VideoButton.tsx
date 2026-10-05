import { useEffect, useState } from "react";
import { Play, X } from "lucide-react";
import { promoVideo } from "@/config/site";

export function VideoButton() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group text-primary-foreground focus-visible:ring-accent mt-6 inline-flex items-center gap-4 rounded-full focus-visible:ring-2 focus-visible:outline-none"
      >
        <span className="bg-primary-foreground/15 border-primary-foreground/40 relative grid size-14 place-items-center rounded-full border backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <span aria-hidden="true" className="bg-accent/40 absolute inset-0 animate-ping rounded-full" />
          <Play className="fill-accent text-accent relative ml-1 size-6" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold tracking-wide">{promoVideo.label}</span>
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video sobre el aguaymanto"
          className="bg-foreground/95 animate-in fade-in fixed inset-0 z-[100] flex items-center justify-center duration-300"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            autoFocus
            aria-label="Cerrar video"
            onClick={() => setOpen(false)}
            className="bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25 absolute top-4 right-4 z-10 grid size-12 place-items-center rounded-full"
          >
            <X className="size-6" />
          </button>
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${promoVideo.youtubeId}?autoplay=1&rel=0`}
            title="Video sobre el aguaymanto"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      ) : null}
    </>
  );
}
