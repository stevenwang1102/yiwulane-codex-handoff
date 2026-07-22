import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function LegalPage({
  title,
  note,
  contactEmail,
  sections
}: {
  title: string;
  note: string;
  contactEmail?: string;
  sections: { title: string; body: string }[];
}) {
  return (
    <section className="section">
      <div className="container reading">
        <Breadcrumbs items={[{ label: title }]} />
        <h1 className="h1">{title}</h1>
        <p className="lead mt-5">{note}</p>
        {contactEmail ? (
          <p className="mt-5">
            Contact:{" "}
            <a className="font-bold text-[var(--color-route-dark)] hover:underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
          </p>
        ) : null}
        <div className="mt-8 grid gap-5">
          {sections.map((section) => (
            <div className="card p-5" key={section.title}>
              <h2 className="text-xl font-black text-[var(--color-ink)]">{section.title}</h2>
              <p className="mt-3 leading-7 text-[var(--color-muted)]">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
