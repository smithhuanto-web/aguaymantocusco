import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";
import { navigation, contact } from "@/config/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/95 border-border shadow-soft border-b backdrop-blur-md"
          : "border-b border-transparent bg-background/80 backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "container-site flex items-center justify-between transition-all duration-300",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Logo />

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map((item) => {
              const active =
                item.to === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.to);
              return (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
                      active
                        ? "text-primary"
                        : "text-foreground/75 hover:text-primary",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "bg-accent absolute inset-x-4 -bottom-0.5 h-0.5 origin-left rounded-full transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={contact.phone.href}
            className="text-muted-foreground hover:text-primary hidden items-center gap-2 text-sm font-medium transition-colors xl:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {contact.phone.display}
          </a>
          <Button asChild variant="cta" size="sm" className="hidden sm:inline-flex">
            <Link to="/contacto">Solicitar cotización</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(88vw,22rem)]">
              <div className="mt-2 mb-8">
                <Logo />
              </div>
              <nav aria-label="Navegación móvil">
                <ul className="flex flex-col gap-1">
                  {navigation.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="hover:bg-secondary hover:text-primary block rounded-lg px-3 py-3 text-base font-medium transition-colors"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="mt-8 space-y-3">
                <Button asChild variant="cta" className="w-full">
                  <Link to="/contacto">Solicitar cotización</Link>
                </Button>
                <a
                  href={contact.phone.href}
                  className="text-muted-foreground hover:text-primary flex items-center justify-center gap-2 text-sm"
                >
                  <Phone className="size-4" aria-hidden="true" />
                  {contact.phone.display}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
