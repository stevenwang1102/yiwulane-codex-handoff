import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { workflowSteps } from "@/content/home";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

const description = "From product link to first shipment: the YIWULANE sourcing, QC, packaging, fulfillment, and scaling workflow.";

export const metadata: Metadata = buildPageMetadata({ title: "How YIWULANE Works", description, path: "/how-it-works" });

export default function HowItWorksPage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema({ name: "How YIWULANE Works", description, path: "/how-it-works" })} />
      <section className="section">
        <div className="container">
          <Breadcrumbs items={[{ label: "How It Works" }]} />
          <h1 className="h1 reading">From product link to first shipment.</h1>
          <p className="lead reading mt-5">The workflow is built to clarify product assumptions, supplier options, quality expectations, packaging needs, and fulfillment route before larger inventory decisions.</p>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map(([title, body], index) => (
              <li className="card p-6" key={title}>
                <span className="text-sm font-black text-[var(--color-route-dark)]">0{index + 1}</span>
                <h2 className="mt-3 text-xl font-black text-[var(--color-ink)]">{title}</h2>
                <p className="mt-3 leading-7 text-[var(--color-muted)]">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
