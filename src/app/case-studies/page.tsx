import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

const description = "Representative, clearly labeled sourcing and fulfillment workflows from YIWULANE. No fabricated client claims or performance figures.";

export const metadata: Metadata = buildPageMetadata({ title: "Representative Sourcing Workflows", description, path: "/case-studies" });

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema({ name: "Representative Sourcing Workflows", description, path: "/case-studies" })} />
      <section className="section">
        <div className="container">
        <Breadcrumbs items={[{ label: "Case Studies" }]} />
        <h1 className="h1 reading">Representative workflows until verified client cases are approved.</h1>
        <p className="lead reading mt-5">YIWULANE does not publish fabricated customer logos, testimonials, or performance numbers. The initial example is clearly labeled as a representative workflow.</p>
        <Link className="card mt-10 block p-6" href="/case-studies/representative-home-organization-project">
          <p className="eyebrow">Representative Workflow · Not a Published Client Result</p>
          <h2 className="mt-3 text-2xl font-black text-[var(--color-ink)]">Home organization sourcing and fulfillment workflow</h2>
          <p className="mt-3 text-[var(--color-muted)]">See how three home-organization SKUs could move from generic product references to a controlled pilot workflow.</p>
        </Link>
        </div>
      </section>
    </>
  );
}
