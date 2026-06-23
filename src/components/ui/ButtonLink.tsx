import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark";

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
}) {
  const className =
    variant === "secondary"
      ? "button button-secondary"
      : variant === "dark"
        ? "button button-dark"
        : "button button-primary";

  return (
    <Link href={href} className={className}>
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}
