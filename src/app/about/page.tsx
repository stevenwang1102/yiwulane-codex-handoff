import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

const description = "Learn how YIWULANE coordinates sourcing, quality control, packaging, consolidation, and fulfillment for overseas e-commerce sellers.";

export const metadata: Metadata = buildPageMetadata({ title: "About YIWULANE", description, path: "/about" });

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema({ name: "About YIWULANE", description, path: "/about" })} />
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
            ["What YIWULANE is", "A Yiwu-based operating team for product sourcing, sample coordination, quality control, branded packaging, consolidation, and fulfillment planning."],
            ["Who the service is for", "Overseas Shopify, DTC, TikTok Shop, Amazon, marketplace, and growing-brand teams that need practical coordination in China."],
            ["How the work starts", "Clients send product references, destination market, selling platform, expected quantity, target price, and quality or packaging requirements."],
            ["How the workflow runs", "The team compares supply options, coordinates samples, agrees inspection scope, prepares approved inventory, and plans a suitable dispatch route."],
            ["Markets and languages", "The English site serves overseas sellers. Dedicated Spanish pages cover Mexico, Spain, Colombia, Chile, Peru, and Argentina."],
            ["Service boundaries", "YIWULANE does not support counterfeit, infringing, prohibited, or high-risk products and does not promise a fixed cost or route before reviewing the product."],
            ["How to begin", "Start with the 3-SKU Pilot, use the contact form, email ventas@yiwulane.com, or send the product references through WhatsApp."],
            ["Operating principles", "Clarity, documented assumptions, evidence-led quality checks, accountable handoffs, and review before scaling guide the service model."]
          ].map(([title, body]) => (
            <article className="card p-6" key={title}>
              <h2 className="text-xl font-black text-[var(--color-ink)]">{title}</h2>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">{body}</p>
            </article>
          ))}
        </div>
        <div className="container mt-8">
          <ButtonLink href="/compare/yiwu-sourcing-agent-vs-direct-sourcing" variant="secondary">
            Compare sourcing models
          </ButtonLink>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
