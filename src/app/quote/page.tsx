import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Request a Quote",
  description: "Request a sourcing, QC, packaging, fulfillment, or hybrid route quote from YIWULANE.",
  alternates: { canonical: absoluteUrl("/quote") }
};

export default function QuotePage() {
  return (
    <section className="section">
      <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr]">
        <div>
          <Breadcrumbs items={[{ label: "Quote" }]} />
          <h1 className="h1">Request a practical route and quote.</h1>
          <p className="lead mt-5">Tell us the service area, number of SKUs, and current operating problem so the response can focus on realistic next steps.</p>
        </div>
        <LeadForm type="quote" />
      </div>
    </section>
  );
}
