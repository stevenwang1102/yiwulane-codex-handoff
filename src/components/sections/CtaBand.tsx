import { ButtonLink } from "@/components/ui/ButtonLink";

export function CtaBand({
  title = "Send us three products. We’ll build the sourcing and fulfillment plan.",
  body = "Start with a defined pilot instead of a large inventory commitment.",
  cta = "Start My 3-SKU Pilot"
}: {
  title?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="rounded-[28px] bg-[var(--color-ink)] p-8 text-white shadow-[var(--shadow-soft)] md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-[var(--font-manrope)] text-3xl font-black leading-tight md:text-5xl">{title}</h2>
              <p className="mt-4 max-w-2xl text-white/72">{body}</p>
            </div>
            <ButtonLink href="/pilot" variant="primary">{cta}</ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
