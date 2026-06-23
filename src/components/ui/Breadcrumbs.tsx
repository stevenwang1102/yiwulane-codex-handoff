import Link from "next/link";

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-7 text-sm font-bold text-[var(--color-muted)]">
      <ol className="flex flex-wrap gap-2">
        <li><Link href="/">Home</Link></li>
        {items.map((item) => (
          <li key={item.label} className="flex gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
