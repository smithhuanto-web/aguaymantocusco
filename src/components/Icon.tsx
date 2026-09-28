import * as Lucide from "lucide-react";
import type { LucideProps } from "lucide-react";

/** Renderiza un icono de lucide a partir de su nombre (usado por los datos). */
export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const Cmp =
    (Lucide as unknown as Record<string, React.ComponentType<LucideProps>>)[
      name
    ] ?? Lucide.Leaf;
  return <Cmp aria-hidden="true" {...props} />;
}
