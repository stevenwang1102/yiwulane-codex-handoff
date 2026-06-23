import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { getSolution, solutions } from "@/content/solutions";
import { absoluteUrl } from "@/lib/site-url";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.title,
    description: solution.description,
    alternates: { canonical: absoluteUrl(`/solutions/${solution.slug}`) }
  };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <>
      <section className="section">
        <div className="container">
          <Breadcrumbs items={[{ label: "Solutions" }, { label: solution.title }]} />
          <h1 className="h1 reading">{solution.title}</h1>
          <p className="lead reading mt-5">{solution.description}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/pilot">Start a 3-SKU Pilot</ButtonLink>
            <ButtonLink href="/quote" variant="secondary">Book a Sourcing Call</ButtonLink>
          </div>
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-6 lg:grid-cols-3">
          <Info title="Platform-specific problem" body={solution.problem} />
          <Info title="Recommended operating model" body={solution.model} />
          <Info title="China-direct vs local-stock decision" body={solution.decision} />
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2">
          <List title="What YIWULANE handles" items={solution.handles} />
          <List title="What remains the seller’s responsibility" items={solution.sellerOwns} />
        </div>
      </section>
      <section className="section bg-white">
        <div className="container grid gap-8 lg:grid-cols-[0.6fr_1fr]">
          <h2 className="h2">Example workflow</h2>
          <ol className="grid gap-4">
            {solution.workflow.map((step, index) => (
              <li className="card p-5 font-bold text-[var(--color-navy)]" key={step}>{index + 1}. {step}</li>
            ))}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <h2 className="h2">FAQ</h2>
          <FAQAccordion faqs={solution.faqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function Info({ title, body }: { title: string; body: string }) {
  return (
    <article className="card p-6">
      <h2 className="text-xl font-black text-[var(--color-ink)]">{title}</h2>
      <p className="mt-4 leading-7 text-[var(--color-muted)]">{body}</p>
    </article>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <article>
      <h2 className="h2">{title}</h2>
      <ul className="mt-6 grid gap-3">
        {items.map((item) => <li className="card p-4 font-bold text-[var(--color-navy)]" key={item}>✓ {item}</li>)}
      </ul>
    </article>
  );
}
