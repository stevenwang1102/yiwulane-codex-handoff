"use client";

import { useState } from "react";
import type { FAQ } from "@/content/faqs";

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {faqs.map((faq, index) => {
        const active = open === index;
        const panelId = `faq-panel-${index}`;
        return (
          <div className="card overflow-hidden" key={faq.question}>
            <button
              className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-black text-[var(--color-ink)]"
              type="button"
              aria-expanded={active}
              aria-controls={panelId}
              onClick={() => setOpen(active ? -1 : index)}
            >
              <span>{faq.question}</span>
              <span aria-hidden="true" className="text-xl text-[var(--color-route-dark)]">
                {active ? "−" : "+"}
              </span>
            </button>
            <div id={panelId} hidden={!active} className="px-5 pb-5 text-sm leading-7 text-[var(--color-muted)]">
              {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
