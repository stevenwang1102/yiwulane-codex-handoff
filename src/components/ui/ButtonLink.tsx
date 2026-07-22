import type { ReactNode } from "react";
import { TrackedLink } from "@/components/ui/TrackedLink";
import type { AnalyticsEvent, AnalyticsParams } from "@/lib/analytics";

type Variant = "primary" | "secondary" | "dark";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  analyticsEvent,
  analyticsParams
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  analyticsEvent?: AnalyticsEvent;
  analyticsParams?: AnalyticsParams;
}) {
  const className =
    variant === "secondary"
      ? "button button-secondary"
      : variant === "dark"
        ? "button button-dark"
        : "button button-primary";

  return (
    <TrackedLink
      href={href}
      className={className}
      analyticsEvent={analyticsEvent}
      analyticsParams={analyticsParams}
    >
      {children}
      <span aria-hidden="true">→</span>
    </TrackedLink>
  );
}
