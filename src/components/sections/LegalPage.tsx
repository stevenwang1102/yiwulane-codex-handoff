import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function LegalPage({ title, note }: { title: string; note: string }) {
  return (
    <section className="section">
      <div className="container reading">
        <Breadcrumbs items={[{ label: title }]} />
        <h1 className="h1">{title}</h1>
        <p className="lead mt-5">{note}</p>
        <div className="mt-8 grid gap-5">
          {["Owner details pending", "Business contact details pending", "Jurisdiction and legal language pending"].map((item) => (
            <div className="card p-5" key={item}>
              <h2 className="text-xl font-black text-[var(--color-ink)]">{item}</h2>
              <p className="mt-3 leading-7 text-[var(--color-muted)]">Final language should be supplied or approved before production launch.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
