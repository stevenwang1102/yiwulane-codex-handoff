import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { CtaBand } from "@/components/sections/CtaBand";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { getService, services } from "@/content/services";
import { absoluteUrl } from "@/lib/site-url";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.description,
    alternates: { canonical: absoluteUrl(`/services/${service.slug}`) }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <section className="section">
        <div className="container">
          <Breadcrumbs items={[{ label: "Services" }, { label: service.title }]} />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1fr]">
            <div>
              <h1 className="h1">{service.title}</h1>
              <p className="lead mt-5">{service.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/pilot">Start a 3-SKU Pilot</ButtonLink>
                <ButtonLink href="/how-it-works" variant="secondary">See How It Works</ButtonLink>
              </div>
            </div>
            <div className="card bg-white p-6">
              <p className="eyebrow">Practical outcome</p>
              <p className="mt-4 text-2xl font-black leading-snug text-[var(--color-ink)]">{service.outcome}</p>
            </div>
          </div>
        </div>
      </section>
      <DetailSection title="Who it is for" items={service.for} />
      <DetailSection title="Deliverables" items={service.deliverables} columns />
      <DetailSection title="Process" items={service.process} ordered />
      <DetailSection title="Client inputs required" items={service.clientInputs} columns />
      <DetailSection title="Risks and boundaries" items={service.boundaries} />
      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <h2 className="h2">Related routes</h2>
          <div className="grid gap-3">
            {service.relatedRoutes.map((route) => (
              <a className="card p-5 font-black text-[var(--color-ink)]" href={route.href} key={route.href}>
                {route.label} →
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <h2 className="h2">FAQ</h2>
          <FAQAccordion faqs={service.faqs} />
        </div>
      </section>
      <CtaBand />
    </>
  );
}

function DetailSection({ title, items, ordered = false, columns = false }: { title: string; items: string[]; ordered?: boolean; columns?: boolean }) {
  const Tag = ordered ? "ol" : "ul";
  return (
    <section className="section bg-white even:bg-[var(--color-paper)]">
      <div className="container grid gap-8 lg:grid-cols-[0.55fr_1fr]">
        <h2 className="h2">{title}</h2>
        <Tag className={`grid gap-4 ${columns ? "md:grid-cols-2" : ""}`}>
          {items.map((item, index) => (
            <li className="card p-5 text-sm font-bold leading-7 text-[var(--color-navy)]" key={item}>
              {ordered ? `${index + 1}. ` : ""}{item}
            </li>
          ))}
        </Tag>
      </div>
    </section>
  );
}
