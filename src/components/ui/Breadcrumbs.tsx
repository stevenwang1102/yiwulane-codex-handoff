import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema } from "@/lib/seo";

export function Breadcrumbs({
  items,
  homeLabel = "Home"
}: {
  items: { label: string; href?: string }[];
  homeLabel?: string;
}) {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(items, homeLabel)} />
      <nav aria-label="Breadcrumb" className="mb-7 text-sm font-bold text-[var(--color-muted)]">
        <ol className="flex flex-wrap gap-2">
          <li><Link href="/">{homeLabel}</Link></li>
          {items.map((item) => (
            <li key={item.label} className="flex gap-2">
              <span aria-hidden="true">/</span>
              {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
