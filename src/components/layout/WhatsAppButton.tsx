import { site } from "@/content/site";

export function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={site.whatsapp.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with YIWULANE on WhatsApp at ${site.whatsapp.display}`}
    >
      <span className="whatsapp-float__icon" aria-hidden="true">
        WA
      </span>
      <span className="whatsapp-float__text">
        <span>WhatsApp</span>
        <strong>{site.whatsapp.display}</strong>
      </span>
    </a>
  );
}
