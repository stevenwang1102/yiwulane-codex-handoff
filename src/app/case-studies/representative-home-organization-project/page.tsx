import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

const description = "A representative workflow showing how YIWULANE could support sourcing, QC, packaging, and fulfillment for home-organization products.";

export const metadata: Metadata = buildPageMetadata({
  title: "Representative Home Organization Workflow",
  description,
  path: "/case-studies/representative-home-organization-project"
});

export default function RepresentativeCasePage() {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: "Representative Home Organization Workflow",
          description,
          path: "/case-studies/representative-home-organization-project"
        })}
      />
      <section className="section">
        <div className="container reading">
          <Breadcrumbs items={[{ label: "Case Studies", href: "/case-studies" }, { label: "Representative workflow" }]} />
          <p className="eyebrow">Representative Workflow · Not a Published Client Result</p>
          <h1 className="h1 mt-3">From generic home accessory to a controlled fulfillment workflow.</h1>
          <p className="lead mt-5">A growing Shopify seller has three home-organization products, inconsistent packaging, and no reliable incoming inspection.</p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {["Compare qualified supply options", "Approve samples and packaging specification", "Add a branded insert and protective inner packaging", "Inspect incoming batches", "Fulfill test demand from Yiwu", "Prepare a local-stock threshold for proven products"].map((item, index) => (
            <article className="card p-6" key={item}>
              <span className="text-sm font-black text-[var(--color-route-dark)]">0{index + 1}</span>
              <h2 className="mt-3 text-xl font-black text-[var(--color-ink)]">{item}</h2>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container reading">
          <h2 className="h2">Outcome wording</h2>
          <p className="lead mt-5">The seller receives a documented operating plan and can evaluate performance with real order data. No numeric result should be shown until a verified client case is approved.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
