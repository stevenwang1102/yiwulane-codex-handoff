import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { resources } from "@/content/resources";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Sourcing and Fulfillment Resources",
  description: "Editorial-stage sourcing, QC, fulfillment, and landed-cost resources for e-commerce sellers.",
  path: "/resources",
  index: false
});

export default function ResourcesPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: "Resources" }]} />
        <h1 className="h1 reading">Practical sourcing and fulfillment resources.</h1>
        <p className="lead reading mt-5">These initial article drafts require subject-matter review before active promotion.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {resources.map((resource) => (
            <Link className="card p-6" href={`/resources/${resource.slug}`} key={resource.slug}>
              <p className="eyebrow">Draft · SME review required</p>
              <h2 className="mt-3 text-2xl font-black text-[var(--color-ink)]">{resource.title}</h2>
              <p className="mt-3 leading-7 text-[var(--color-muted)]">{resource.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
