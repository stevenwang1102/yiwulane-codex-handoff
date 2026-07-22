import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getResource, resources } from "@/content/resources";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};
  return buildPageMetadata({
    title: resource.title,
    description: resource.description,
    path: `/resources/${resource.slug}`,
    index: false
  });
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return (
    <>
      <article className="section">
        <div className="container reading">
          <Breadcrumbs items={[{ label: "Resources", href: "/resources" }, { label: resource.title }]} />
          <p className="eyebrow">Draft · Subject-matter review required before promotion</p>
          <h1 className="h1 mt-3">{resource.title}</h1>
          <p className="lead mt-5">{resource.description}</p>
          <div className="mt-10 grid gap-6">
            {resource.sections.map((section, index) => (
              <section className="card p-6" key={section}>
                <h2 className="text-2xl font-black text-[var(--color-ink)]">{index + 1}. {section}</h2>
                <p className="mt-4 leading-7 text-[var(--color-muted)]">
                  This section should be expanded with owner-approved operating details, current platform requirements, and product-specific examples before promotion.
                </p>
              </section>
            ))}
          </div>
        </div>
      </article>
      <CtaBand />
    </>
  );
}
