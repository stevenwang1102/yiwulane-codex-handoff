"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Logo } from "@/components/ui/Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgb(252_251_248_/_.92)] backdrop-blur">
      <div className="container flex min-h-20 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-bold text-[var(--color-navy)] lg:flex" aria-label="Main">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-[var(--color-route-dark)]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <ButtonLink href="/pilot">{site.primaryCta}</ButtonLink>
        </div>
        <div className="lg:hidden">
          <button
            className="button button-secondary"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-menu" className="fixed inset-x-0 top-20 z-50 border-b border-[var(--color-border)] bg-[var(--color-paper)] p-5 shadow-2xl lg:hidden">
          <nav aria-label="Mobile" className="container grid gap-2">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-lg font-bold text-[var(--color-ink)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3">
              <ButtonLink href="/pilot">{site.primaryCta}</ButtonLink>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
