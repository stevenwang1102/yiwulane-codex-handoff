import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { MapCard } from "@/components/sections/MapCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send YIWULANE a sourcing, fulfillment, partnership, or general inquiry.",
  alternates: { canonical: absoluteUrl("/contact") }
};

export default function ContactPage() {
  return (
    <>
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.75fr_1fr]">
          <div>
            <Breadcrumbs items={[{ label: "Contact" }]} />
            <h1 className="h1">Contact YIWULANE.</h1>
            <p className="lead mt-5">
              Use this form for a general inquiry, sourcing question, fulfillment support, or partnership question.
            </p>
            <div className="mt-6 rounded-2xl bg-white p-5 text-sm leading-7 text-[var(--color-muted)]">
              <p className="font-black text-[var(--color-ink)]">Yiwu office</p>
              <p className="mt-2">{site.address}</p>
            </div>
          </div>
          <LeadForm type="contact" />
        </div>
      </section>
      <MapCard />
    </>
  );
}
