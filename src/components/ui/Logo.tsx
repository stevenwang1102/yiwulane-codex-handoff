import Link from "next/link";

export function RouteMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true" viewBox="0 0 42 42" fill="none">
      <rect width="42" height="42" rx="13" fill="currentColor" opacity="0.08" />
      <path d="M9 11c8 0 12 5 12 15v6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M33 11c-8 0-12 5-12 15" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M11 31h20" stroke="#e87524" strokeWidth="3" strokeLinecap="round" />
      <circle cx="9" cy="11" r="3" fill="#e87524" />
      <circle cx="33" cy="11" r="3" fill="#e87524" />
    </svg>
  );
}

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-3" aria-label="YIWULANE home">
      <RouteMark className="h-11 w-11 text-[var(--color-ink)]" />
      <span className="leading-none">
        <span className="block font-[var(--font-manrope)] text-lg font-black tracking-[0] text-[var(--color-ink)]">
          YIWULANE
        </span>
        <span className="mt-1 block text-[0.68rem] font-bold uppercase text-[var(--color-muted)]">
          Sourcing · QC · Fulfillment
        </span>
      </span>
    </Link>
  );
}
