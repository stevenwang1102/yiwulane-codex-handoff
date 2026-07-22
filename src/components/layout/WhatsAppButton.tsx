import { site } from "@/content/site";
import { TrackedLink } from "@/components/ui/TrackedLink";

export function WhatsAppButton() {
  return (
    <TrackedLink
      className="whatsapp-float"
      href={site.whatsapp.href}
      target="_blank"
      rel="noreferrer"
      ariaLabel={`Chat with YIWULANE on WhatsApp at ${site.whatsapp.display}`}
      analyticsEvent="whatsapp_click"
      analyticsParams={{ placement: "floating_button" }}
    >
      <span className="whatsapp-float__icon" aria-hidden="true">
        WA
      </span>
      <span className="whatsapp-float__text">
        <span>WhatsApp</span>
        <strong>{site.whatsapp.display}</strong>
      </span>
    </TrackedLink>
  );
}
