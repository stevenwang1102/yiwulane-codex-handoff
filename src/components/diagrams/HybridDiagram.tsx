export function HybridDiagram() {
  return (
    <figure className="card bg-white p-6" aria-labelledby="hybrid-title">
      <figcaption id="hybrid-title" className="mb-5 text-lg font-black text-[var(--color-ink)]">
        Hybrid fulfillment route
      </figcaption>
      <div className="grid gap-4 md:grid-cols-2">
        <RouteBranch
          label="New / long-tail product"
          steps={["Yiwu inventory", "Direct international fulfillment", "Review demand"]}
        />
        <RouteBranch
          label="Proven product"
          steps={["Bulk replenishment", "Local warehouse", "Local delivery"]}
          highlighted
        />
      </div>
      <p className="mt-5 rounded-xl bg-[var(--color-mist)] p-4 text-sm leading-6 text-[var(--color-muted)]">
        The recommended route depends on product type, destination, platform requirements, order volume, and customs conditions.
      </p>
    </figure>
  );
}

function RouteBranch({ label, steps, highlighted = false }: { label: string; steps: string[]; highlighted?: boolean }) {
  return (
    <div className={`rounded-2xl border p-5 ${highlighted ? "border-[var(--color-route)] bg-[rgb(232_117_36_/_.08)]" : "border-[var(--color-border)] bg-[var(--color-paper)]"}`}>
      <h3 className="font-black text-[var(--color-ink)]">{label}</h3>
      <ol className="mt-4 grid gap-3">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-3 text-sm font-bold text-[var(--color-navy)]">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[var(--color-route-dark)]">{index + 1}</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
