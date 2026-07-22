import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

const description = "Request a sourcing, QC, packaging, fulfillment, or hybrid route quote from YIWULANE.";

export const metadata: Metadata = buildPageMetadata({ title: "Request a Quote", description, path: "/quote" });

export default function QuotePage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema({ name: "Request a Quote", description, path: "/quote" })} />
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
    </>
  );
}
