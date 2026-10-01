import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/data/products";
import { cn } from "@/lib/utils";

type Values = {
  nombre: string;
  empresa: string;
  email: string;
  telefono: string;
  ciudad: string;
  tipoCliente: string;
  producto: string;
  cantidad: string;
  asunto: string;
  mensaje: string;
};

const initial: Values = {
  nombre: "",
  empresa: "",
  email: "",
  telefono: "",
  ciudad: "",
  tipoCliente: "",
  producto: "",
  cantidad: "",
  asunto: "",
  mensaje: "",
};

const tiposCliente = [
  "Cliente particular",
  "Restaurante / hotel / cafetería",
  "Tienda",
  "Distribuidor",
  "Empresa",
  "Otro",
];

export function ContactForm({ defaultProduct }: { defaultProduct?: string | undefined }) {
  const [values, setValues] = useState<Values>({
    ...initial,
    producto: defaultProduct ?? "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Values) => (v: string) =>
    setValues((prev) => ({ ...prev, [key]: v }));

  const validate = () => {
    const next: Partial<Record<keyof Values, string>> = {};
    if (values.nombre.trim().length < 3)
      next.nombre = "Ingresa tu nombre completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Ingresa un correo electrónico válido.";
    if (values.telefono.replace(/\D/g, "").length < 6)
      next.telefono = "Ingresa un teléfono de contacto válido.";
    if (values.asunto.trim().length < 3) next.asunto = "Indica el asunto.";
    if (values.mensaje.trim().length < 10)
      next.mensaje = "Cuéntanos brevemente qué necesitas (mín. 10 caracteres).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    /* Listo para conectarse a un servicio de email, CRM o backend. */
    setSent(true);
  };

  if (sent) {
    return (
      <div
        role="status"
        className="border-primary/20 bg-card shadow-soft rounded-2xl border p-10 text-center"
      >
        <CheckCircle2 className="text-primary-soft mx-auto size-12" aria-hidden="true" />
        <h3 className="text-primary mt-5 text-xl">Consulta enviada</h3>
        <p className="text-muted-foreground mx-auto mt-3 max-w-md text-sm leading-relaxed">
          Gracias por contactarnos. Hemos recibido tu consulta y nos
          comunicaremos contigo pronto.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => {
            setValues(initial);
            setSent(false);
          }}
        >
          Enviar otra consulta
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="border-border bg-card shadow-soft rounded-2xl border p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="nombre"
          label="Nombre completo"
          required
          value={values.nombre}
          onChange={set("nombre")}
          error={errors.nombre}
          autoComplete="name"
        />
        <Field
          id="empresa"
          label="Empresa"
          value={values.empresa}
          onChange={set("empresa")}
          autoComplete="organization"
        />
        <Field
          id="email"
          label="Correo electrónico"
          type="email"
          required
          value={values.email}
          onChange={set("email")}
          error={errors.email}
          autoComplete="email"
        />
        <Field
          id="telefono"
          label="Teléfono"
          type="tel"
          required
          value={values.telefono}
          onChange={set("telefono")}
          error={errors.telefono}
          autoComplete="tel"
        />
        <Field
          id="ciudad"
          label="Ciudad"
          value={values.ciudad}
          onChange={set("ciudad")}
          autoComplete="address-level2"
        />

        <div>
          <Label htmlFor="tipoCliente" className="text-sm font-medium">
            Tipo de cliente
          </Label>
          <select
            id="tipoCliente"
            value={values.tipoCliente}
            onChange={(e) => set("tipoCliente")(e.target.value)}
            className="border-input bg-background focus-visible:ring-ring mt-2 h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            <option value="">Selecciona una opción</option>
            {tiposCliente.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="producto" className="text-sm font-medium">
            Producto de interés
          </Label>
          <select
            id="producto"
            value={values.producto}
            onChange={(e) => set("producto")(e.target.value)}
            className="border-input bg-background focus-visible:ring-ring mt-2 h-11 w-full rounded-md border px-3 text-sm focus-visible:ring-2 focus-visible:outline-none"
          >
            <option value="">Selecciona una opción</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        <Field
          id="cantidad"
          label="Cantidad aproximada"
          value={values.cantidad}
          onChange={set("cantidad")}
          placeholder="Ej. 50 kg por semana"
        />
        <Field
          id="asunto"
          label="Asunto"
          required
          className="sm:col-span-2"
          value={values.asunto}
          onChange={set("asunto")}
          error={errors.asunto}
        />

        <div className="sm:col-span-2">
          <Label htmlFor="mensaje" className="text-sm font-medium">
            Mensaje <span className="text-accent-foreground">*</span>
          </Label>
          <Textarea
            id="mensaje"
            rows={5}
            value={values.mensaje}
            onChange={(e) => set("mensaje")(e.target.value)}
            aria-invalid={!!errors.mensaje}
            aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
            className="mt-2"
          />
          {errors.mensaje ? (
            <p id="mensaje-error" className="text-destructive mt-1.5 text-xs">
              {errors.mensaje}
            </p>
          ) : null}
        </div>
      </div>

      <Button type="submit" variant="cta" size="lg" className="mt-7 w-full sm:w-auto">
        <Send className="size-4" />
        Enviar consulta
      </Button>
      <p className="text-muted-foreground mt-4 text-xs">
        Los campos marcados con * son obligatorios.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  required,
  type = "text",
  className,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string | undefined;
  required?: boolean;
  type?: string;
  className?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  return (
    <div className={cn(className)}>
      <Label htmlFor={id} className="text-sm font-medium">
        {label} {required ? <span className="text-accent-foreground">*</span> : null}
      </Label>
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 h-11"
      />
      {error ? (
        <p id={`${id}-error`} className="text-destructive mt-1.5 text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
}
