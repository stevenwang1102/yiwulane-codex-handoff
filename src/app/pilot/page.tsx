import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

const description = "Submit up to three products and receive a structured sourcing, quality, packaging, and fulfillment plan before a larger inventory commitment.";

export const metadata: Metadata = buildPageMetadata({
  title: "Start a 3-SKU Sourcing & Fulfillment Pilot",
  description,
  path: "/pilot"
});

export default function PilotPage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema({ name: "Start a 3-SKU Pilot", description, path: "/pilot" })} />
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
        <div>
          <Breadcrumbs items={[{ label: "Pilot" }]} />
          <h1 className="h1">Start a 3-SKU Pilot.</h1>
          <p className="lead mt-5">Send up to three products. We will build a practical sourcing and fulfillment plan before you commit to a larger inventory decision.</p>
          <div className="mt-6 rounded-2xl bg-white p-5 text-sm leading-7 text-[var(--color-muted)]">
            <p className="font-black text-[var(--color-ink)]">Pilot fee is quoted based on product complexity.</p>
            <p className="mt-2">No raw file uploads are accepted in V1. Use product URLs and an optional shared-file URL.</p>
          </div>
        </div>
        <LeadForm type="pilot" />
        </div>
      </section>
    </>
  );
}
