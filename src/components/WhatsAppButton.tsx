import { contact, whatsappUrl } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp — ${contact.whatsapp.label}`}
      className="group focus-visible:ring-ring fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-whatsapp py-3 pr-5 pl-3 shadow-lift transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <span className="grid size-8 place-items-center rounded-full bg-whatsapp-foreground/20">
        <svg viewBox="0 0 24 24" className="size-5 fill-whatsapp-foreground" aria-hidden="true">
          <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.48-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35Z" />
          <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.83c0 1.74.46 3.44 1.32 4.93L2 22l5.38-1.4a9.84 9.84 0 0 0 4.66 1.18h.01c5.43 0 9.83-4.4 9.83-9.83C21.88 6.4 17.47 2 12.04 2Zm0 17.98h-.01a8.2 8.2 0 0 1-4.16-1.14l-.3-.18-3.19.83.85-3.1-.2-.32a8.14 8.14 0 0 1-1.25-4.34c0-4.5 3.67-8.16 8.18-8.16 2.18 0 4.23.85 5.77 2.4a8.1 8.1 0 0 1 2.4 5.77c0 4.5-3.67 8.17-8.18 8.17Z" />
        </svg>
      </span>
      <span className="max-w-0 overflow-hidden text-sm font-semibold whitespace-nowrap text-whatsapp-foreground transition-all duration-300 group-hover:max-w-[12rem] sm:max-w-[12rem]">
        {contact.whatsapp.label}
      </span>
    </a>
  );
}
