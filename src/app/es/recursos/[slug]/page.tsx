import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getSpanishResource, spanishResources } from "@/content/spanish-resources";
import { absoluteUrl } from "@/lib/site-url";

export function generateStaticParams() {
  return spanishResources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = getSpanishResource(slug);
  if (!resource) return {};
  return {
    title: resource.title,
    description: resource.description,
    alternates: { canonical: absoluteUrl(`/es/recursos/${resource.slug}`) },
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: absoluteUrl(`/es/recursos/${resource.slug}`),
      siteName: "YIWULANE",
      type: "article"
    }
  };
}

export default async function SpanishResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resource = getSpanishResource(slug);
  if (!resource) notFound();

  return (
    <>
      <article className="section">
        <div className="container reading">
          <Breadcrumbs
            items={[
              { label: "Espanol", href: "/es" },
              { label: "Recursos", href: "/es/recursos" },
              { label: resource.title }
            ]}
          />
          <p className="eyebrow">{resource.category}</p>
          <h1 className="h1 mt-3">{resource.title}</h1>
          <p className="lead mt-5">{resource.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {resource.keywords.map((keyword) => (
              <span className="chip" key={keyword}>{keyword}</span>
            ))}
          </div>
          <div className="mt-10 grid gap-6">
            {resource.sections.map((section, index) => (
              <section className="card p-6" key={section}>
                <p className="eyebrow">Paso {index + 1}</p>
                <h2 className="mt-3 text-2xl font-black text-[var(--color-ink)]">{section}</h2>
                <p className="mt-4 leading-7 text-[var(--color-muted)]">
                  Este punto debe documentarse con datos concretos del producto, pais de venta, plataforma, cantidad,
                  empaque y nivel de riesgo. YIWULANE puede ayudar a convertir esa informacion en una comparacion de
                  proveedores, muestras, control de calidad y plan de envio desde China.
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
