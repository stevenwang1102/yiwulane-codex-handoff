import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send YIWULANE a sourcing, fulfillment, partnership, or general inquiry.",
  alternates: { canonical: absoluteUrl("/contact") }
};

export default function ContactPage() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr]">
        <div>
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="h1">Contact YIWULANE.</h1>
          <p className="lead mt-5">Use this form for a general inquiry, sourcing question, fulfillment support, or partnership question. Public address and contact details will be added after owner approval.</p>
        </div>
        <LeadForm type="contact" />
      </div>
    </section>
  );
}
