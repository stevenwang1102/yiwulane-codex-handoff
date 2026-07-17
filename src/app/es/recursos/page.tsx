import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { spanishResourceCategories, spanishResources } from "@/content/spanish-resources";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Recursos en espanol para comprar en Yiwu y vender online",
  description:
    "30 guias SEO en espanol sobre compras en Yiwu, proveedores en China, Mercado Libre, Shopify, control de calidad, categorias de producto y paises hispanos.",
  alternates: { canonical: absoluteUrl("/es/recursos") }
};

export default function SpanishResourcesPage() {
  return (
    <section className="section">
      <div className="container">
        <Breadcrumbs items={[{ label: "Espanol", href: "/es" }, { label: "Recursos" }]} />
        <h1 className="h1 reading">Guias para vendedores online que compran en China.</h1>
        <p className="lead reading mt-5">
          Un plan editorial de 90 dias para atraer vendedores de Mexico, Espana, Colombia, Chile, Peru y Argentina.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {spanishResourceCategories.map((category) => (
            <span className="chip" key={category}>{category}</span>
          ))}
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {spanishResources.map((resource) => (
            <Link className="card p-6" href={`/es/recursos/${resource.slug}`} key={resource.slug}>
              <p className="eyebrow">{resource.category}</p>
              <h2 className="mt-3 text-xl font-black text-[var(--color-ink)]">{resource.title}</h2>
              <p className="mt-3 leading-7 text-[var(--color-muted)]">{resource.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {resource.keywords.slice(0, 2).map((keyword) => (
                  <span className="chip" key={keyword}>{keyword}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
