import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "About",
  description: "Learn why YIWULANE exists and how 20 years of international trade experience supports modern e-commerce sellers.",
  alternates: { canonical: absoluteUrl("/about") }
};

export default function AboutPage() {
  return (
    <>
      <section className="section">
        <div className="container reading">
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="h1">20 years in global trade, rebuilt for modern e-commerce.</h1>
          <p className="lead mt-6">YIWULANE exists because growing sellers need more than a product link and a shipping quote. They need someone on the ground to coordinate sourcing, supplier communication, quality checks, packaging details, and practical route planning.</p>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-5 md:grid-cols-2">
          {[
            ["Yiwu advantage", "YIWULANE is based in Yiwu, close to a broad supplier and product ecosystem. The site avoids unverified coverage claims until owner-approved evidence is supplied."],
            ["Operating principles", "Clarity, evidence, accountability, and scalability guide the service model."],
            ["Authentic-image placeholders", "Founder, team, QC, packaging, and warehouse images should be replaced after the owner supplies approved photography."],
            ["Service boundaries", "YIWULANE does not support counterfeit, infringing, prohibited, or high-risk products."]
          ].map(([title, body]) => (
            <article className="card p-6" key={title}>
              <h2 className="text-xl font-black text-[var(--color-ink)]">{title}</h2>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">{body}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
