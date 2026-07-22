import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { buildFaqSchema, buildPageMetadata, buildWebPageSchema } from "@/lib/seo";

const path = "/compare/yiwu-sourcing-agent-vs-direct-sourcing";
const title = "Yiwu Sourcing Agent vs Direct Sourcing";
const description =
  "Compare a Yiwu sourcing agent with buying directly from suppliers, including the best fit, tradeoffs, and where YIWULANE can help.";
const languages = {
  en: path,
  es: "/es/comparar/agente-de-compras-vs-compra-directa"
};

const faqs = [
  {
    question: "When does a Yiwu sourcing agent make sense?",
    answer:
      "An agent is often useful when an order involves multiple suppliers, sample coordination, quality checks, branded packaging, consolidation, or a fulfillment plan that must be managed in China."
  },
  {
    question: "When is direct sourcing the better option?",
    answer:
      "Direct sourcing can be more efficient when you already have a reliable supplier, can communicate and negotiate independently, and have your own quality control, consolidation, and logistics processes."
  },
  {
    question: "Can YIWULANE combine goods from multiple suppliers?",
    answer:
      "Yes. Consolidation is part of the published YIWULANE service scope, subject to product review, agreed inspection requirements, and a suitable dispatch plan."
  },
  {
    question: "What information is needed to evaluate a sourcing project?",
    answer:
      "Share product links or references, destination market, selling platform, expected quantity, target price, and any quality, packaging, or delivery requirements."
  }
];

const comparisonRows = [
  ["Best fit", "Several suppliers or coordinated operations", "One established supplier and an internal buying process"],
  ["Supplier communication", "Coordinated locally in China", "Managed by your own team"],
  ["Samples and QC", "Can be arranged within one operating workflow", "Requires your own inspection process or a separate provider"],
  ["Packaging and consolidation", "Can be coordinated before dispatch", "Usually arranged with each supplier or another warehouse"],
  ["Management tradeoff", "Adds a service layer but reduces coordination work", "More direct control but more internal workload"]
] as const;

export const metadata: Metadata = buildPageMetadata({ title, description, path, languages });

export default function SourcingComparisonPage() {
  return (
    <>
      <JsonLd data={buildWebPageSchema({ name: title, description, path })} />
      <JsonLd data={buildFaqSchema(faqs)} />

      <section className="section">
        <div className="container">
          <Breadcrumbs items={[{ label: "Compare" }, { label: "Sourcing agent vs direct" }]} />
          <div className="reading">
            <h1 className="h1">Yiwu sourcing agent vs direct sourcing: which model fits?</h1>
            <p className="lead mt-6">
              Use a sourcing agent when the operational work around the product is the hard part. Buy direct when
              the supplier relationship is already proven and your team can manage quality, packaging, and logistics.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <h2 className="h2 reading">The short answer</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="card p-6">
              <h3 className="text-xl font-black text-[var(--color-ink)]">Choose coordinated sourcing when</h3>
              <ul className="mt-4 grid gap-3 leading-7 text-[var(--color-muted)]">
                <li>Multiple suppliers must work to one plan.</li>
                <li>Samples, inspections, packaging, or consolidation need local coordination.</li>
                <li>Your team wants one operating contact in China.</li>
              </ul>
            </article>
            <article className="card p-6">
              <h3 className="text-xl font-black text-[var(--color-ink)]">Choose direct sourcing when</h3>
              <ul className="mt-4 grid gap-3 leading-7 text-[var(--color-muted)]">
                <li>You already have a reliable, responsive supplier.</li>
                <li>Your team can handle negotiation, inspection, and freight coordination.</li>
                <li>The order does not require cross-supplier consolidation.</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="h2 reading">Side-by-side comparison</h2>
          <div className="mt-8 overflow-x-auto border border-[var(--color-border)] bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="bg-[var(--color-ink)] text-white">
                <tr>
                  <th className="p-4 text-sm font-black">Decision factor</th>
                  <th className="p-4 text-sm font-black">Yiwu sourcing agent</th>
                  <th className="p-4 text-sm font-black">Direct sourcing</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(([factor, agent, direct]) => (
                  <tr className="border-t border-[var(--color-border)] align-top" key={factor}>
                    <th className="p-4 font-black text-[var(--color-ink)]">{factor}</th>
                    <td className="p-4 leading-7 text-[var(--color-muted)]">{agent}</td>
                    <td className="p-4 leading-7 text-[var(--color-muted)]">{direct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="h2">Where YIWULANE fits</h2>
            <p className="mt-5 leading-7 text-[var(--color-muted)]">
              YIWULANE coordinates product and supplier research, samples, agreed quality checks, branded packaging,
              consolidation, China-direct fulfillment, and China plus local inventory planning for overseas
              e-commerce sellers.
            </p>
            <p className="mt-4 leading-7 text-[var(--color-muted)]">
              The service is a practical candidate when those steps need one operating workflow. It is not a reason
              to replace a direct supplier relationship that already performs well.
            </p>
          </div>
          <aside className="border-l-4 border-[var(--color-route)] bg-[var(--color-surface)] p-6">
            <h2 className="text-xl font-black text-[var(--color-ink)]">Start with evidence</h2>
            <p className="mt-4 leading-7 text-[var(--color-muted)]">
              Send product references, quantities, destination, and quality or packaging requirements. YIWULANE can
              then review the assumptions before proposing a route or cost structure.
            </p>
            <div className="mt-6">
              <ButtonLink href="/pilot">Review the 3-SKU Pilot</ButtonLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container reading">
          <h2 className="h2">Frequently asked questions</h2>
          <div className="mt-8">
            <FAQAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
