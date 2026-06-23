import Image from "next/image";
import Link from "next/link";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <span className={`relative block overflow-hidden rounded-xl bg-[var(--color-ink)] ${className}`} aria-hidden="true">
      <Image
        src="/yiwulane-logo-mark.png"
        alt=""
        fill
        sizes="48px"
        className="object-cover"
        priority
      />
    </span>
  );
}

export function Logo({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="flex items-center gap-3" aria-label="YIWULANE home">
      <LogoMark className="h-11 w-11" />
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
