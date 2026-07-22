import Link from "next/link";
import { RouteDiagram } from "@/components/diagrams/RouteDiagram";
import { HybridDiagram } from "@/components/diagrams/HybridDiagram";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CtaBand } from "@/components/sections/CtaBand";
import { MapCard } from "@/components/sections/MapCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { globalFaqs } from "@/content/faqs";
import { modelSteps, qcChecks, workflowSteps } from "@/content/home";
import { trustSignals } from "@/content/site";
import { buildWebPageSchema } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd
        data={buildWebPageSchema({
          name: "YIWULANE | Yiwu Sourcing, QC & E-commerce Fulfillment",
          description:
            "Yiwu-based product sourcing, quality control, branded packaging, and fulfillment support for overseas e-commerce sellers.",
          path: "/"
        })}
      />
      <section className="section bg-[linear-gradient(180deg,#fcfbf8_0%,#f3eee5_100%)]">
        <div className="container grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow mb-5">Yiwu sourcing · quality control · global fulfillment</p>
            <h1 className="display">Your Yiwu sourcing and fulfillment team.</h1>
            <p className="lead mt-6">
              YIWULANE helps growing Shopify, TikTok Shop, and Amazon sellers source products, control quality, build branded packaging, and fulfill orders through China and local inventory.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/pilot">Start a 3-SKU Pilot</ButtonLink>
              <ButtonLink href="/how-it-works" variant="secondary">See How It Works</ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {trustSignals.map((signal) => <span className="chip" key={signal}>{signal}</span>)}
            </div>
          </div>
          <RouteDiagram />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader title="Built for growing e-commerce sellers.">
            You have demand to serve, but not the time to coordinate factories, inspectors, warehouses, and shipping partners one by one.
          </SectionHeader>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Shopify & DTC Sellers", "Source better products, add real brand details, and graduate from generic dropshipping."],
              ["TikTok Shop Sellers", "Prepare samples and small batches, then build a local-stock plan before demand spikes."],
              ["Amazon FBA Sellers", "Source, inspect, label, bundle, and prepare products for bulk shipment to FBA or a local 3PL."]
            ].map(([title, body]) => (
              <article className="card p-6" key={title}>
                <h3 className="text-xl font-black text-[var(--color-ink)]">{title}</h3>
                <p className="mt-4 leading-7 text-[var(--color-muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Your store should not be limited by your supply chain." />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Comparison
              title="Common constraints"
              items={[
                "Supplier prices change without a clear breakdown.",
                "Small orders are refused or deprioritized.",
                "Quality problems appear after customers receive the product.",
                "Packaging still looks generic.",
                "Inventory and tracking data are fragmented.",
                "No single partner takes responsibility when something goes wrong."
              ]}
            />
            <Comparison
              title="YIWULANE operating response"
              positive
              items={[
                "Comparable sourcing options and clear assumptions.",
                "Low-MOQ testing before larger commitments.",
                "Incoming QC with photos, video, and documented findings.",
                "Labels, inserts, bundling, and packaging options.",
                "Centralized SKU and fulfillment workflows.",
                "One accountable team from sourcing to dispatch."
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader centered title="One operating team from product link to customer delivery." />
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {modelSteps.map((step, index) => (
              <article className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-paper)] p-5" key={step.title}>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--color-route)] font-black text-[var(--color-ink)]">{index + 1}</span>
                <h3 className="mt-5 font-[var(--font-manrope)] text-xl font-black text-[var(--color-ink)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <SectionHeader title="Test from China. Scale with local inventory.">
            Avoid committing to large inventory before demand is proven. Test new and long-tail products from Yiwu. When a product earns consistent sales, replenish it in bulk to a local warehouse for faster delivery and better unit economics.
          </SectionHeader>
          <HybridDiagram />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader title="Practical sourcing experience, rebuilt for modern e-commerce." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Yiwu-based sourcing", "Access the market, suppliers, and product ecosystem through a team on the ground."],
              ["20 years in international trade", "Experience in supplier communication, pricing, production follow-up, export quality, and problem resolution."],
              ["Quality before fulfillment", "Products enter a controlled receiving and inspection workflow before customer orders are dispatched."],
              ["Transparent cost structure", "Separate product, packaging, handling, freight, and optional service costs wherever practical."],
              ["One team, one responsibility", "Reduce handoffs between sourcing agents, inspectors, warehouses, and freight partners."]
            ].map(([title, body]) => (
              <article className="flex gap-4" key={title}>
                <span className="mt-1 h-3 w-3 rounded-full bg-[var(--color-route)]" />
                <div>
                  <h3 className="font-black text-[var(--color-ink)]">{title}</h3>
                  <p className="mt-2 leading-7 text-[var(--color-muted)]">{body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <div>
            <p className="eyebrow">A lower-risk first engagement</p>
            <h2 className="h2 mt-3">Start small with a 3-SKU Pilot.</h2>
            <p className="lead mt-5">Send up to three products. We will build a practical sourcing and fulfillment plan before you commit to a larger inventory decision.</p>
            <p className="mt-5 rounded-xl bg-white p-4 text-sm font-bold text-[var(--color-navy)]">
              Pilot scope and fee are quoted according to product complexity.
            </p>
            <div className="mt-7">
              <ButtonLink href="/pilot">Submit My 3 Products</ButtonLink>
            </div>
          </div>
          <div className="card grid gap-3 p-6">
            {["product and supplier research", "MOQ and lead-time comparison", "sample coordination", "basic QC observations", "packaging options", "fulfillment route recommendation", "estimated cost structure", "review call"].map((item) => (
              <p className="flex gap-3 text-sm font-bold text-[var(--color-navy)]" key={item}>
                <span className="text-[var(--color-route-dark)]">✓</span>{item}
              </p>
            ))}
            <p className="mt-4 rounded-xl bg-[var(--color-mist)] p-4 text-sm leading-6 text-[var(--color-muted)]">
              Outcome: Can we source it reliably? Can we control the quality? Can we fulfill it at a workable total cost?
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader title="A supply-chain plan built around how you sell." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Shopify & DTC Fulfillment", "Build a brand, not another generic dropshipping store.", "/solutions/shopify-dtc", "Explore Shopify Solutions"],
              ["TikTok Shop Supply Chain", "Prepare before demand accelerates.", "/solutions/tiktok-shop", "Explore TikTok Shop Solutions"],
              ["Amazon FBA Sourcing", "Source and prepare products for scalable FBA replenishment.", "/solutions/amazon-fba", "Explore Amazon FBA Solutions"]
            ].map(([title, body, href, cta]) => (
              <article className="card p-6" key={title}>
                <h3 className="text-xl font-black text-[var(--color-ink)]">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--color-muted)]">{body}</p>
                <Link href={href} className="mt-5 inline-flex font-black text-[var(--color-route-dark)]">{cta} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr_1fr]">
          <SectionHeader title="See what we check before your customers do.">
            “Quality control” should describe a process, not a promise. Inspection scope is agreed by product and may include:
          </SectionHeader>
          <div className="card grid gap-3 p-6 sm:grid-cols-2">
            {qcChecks.map((check) => <p className="text-sm font-bold text-[var(--color-navy)]" key={check}>✓ {check}</p>)}
            <p className="sm:col-span-2 rounded-xl bg-[var(--color-mist)] p-4 text-sm leading-6 text-[var(--color-muted)]">
              Inspection scope and sampling level are agreed before work begins. Testing and certification services may require a qualified third party.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeader centered title="From product link to first shipment." />
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workflowSteps.map(([title, body], index) => (
              <li className="card p-6" key={title}>
                <span className="text-sm font-black text-[var(--color-route-dark)]">0{index + 1}</span>
                <h3 className="mt-3 text-xl font-black text-[var(--color-ink)]">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--color-muted)]">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="grid gap-8 rounded-[28px] border border-[var(--color-border)] bg-white p-7 md:grid-cols-[0.8fr_1fr] md:p-10">
            <div>
              <p className="eyebrow">Representative Workflow · Not a Published Client Result</p>
              <h2 className="h2 mt-3">From generic home accessory to a controlled fulfillment workflow.</h2>
              <p className="lead mt-5">A growing Shopify seller has three home-organization products, inconsistent packaging, and no reliable incoming inspection.</p>
            </div>
            <div className="grid gap-3">
              {["compare qualified supply options", "approve samples and packaging specification", "add a branded insert and protective inner packaging", "inspect incoming batches", "fulfill test demand from Yiwu", "prepare a local-stock threshold for proven products"].map((item) => (
                <p className="rounded-xl bg-[var(--color-paper)] p-4 text-sm font-bold text-[var(--color-navy)]" key={item}>{item}</p>
              ))}
              <p className="rounded-xl bg-[var(--color-mist)] p-4 text-sm leading-6 text-[var(--color-muted)]">
                The seller receives a documented operating plan and can evaluate performance with real order data. No numeric result is shown until a verified client case is approved.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container reading">
          <h2 className="h2">20 years in global trade. Now built for modern e-commerce.</h2>
          <p className="lead mt-5">For two decades, our work has centered on sourcing products, communicating with suppliers, following production, controlling export quality, and solving the practical problems between an overseas buyer and a China supply base.</p>
          <p className="lead mt-5">YIWULANE brings that experience to independent e-commerce sellers through lower-MOQ sourcing, visible quality control, brand-ready packaging, and flexible fulfillment.</p>
          <p className="mt-5 rounded-xl bg-[var(--color-mist)] p-4 text-sm font-bold text-[var(--color-navy)]">
            To begin, send up to three product links or photos together with the destination market, selling platform, expected quantity, target price, and packaging requirements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <SectionHeader title="FAQ" />
          <FAQAccordion faqs={globalFaqs} />
        </div>
      </section>

      <MapCard />

      <CtaBand />
    </>
  );
}

function Comparison({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return (
    <article className="card p-6">
      <h3 className="text-xl font-black text-[var(--color-ink)]">{title}</h3>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li className="flex gap-3 leading-7 text-[var(--color-muted)]" key={item}>
            <span className={positive ? "text-[var(--color-success)]" : "text-[var(--color-route-dark)]"}>{positive ? "✓" : "•"}</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
