"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { trackEvent, type AnalyticsEvent, type AnalyticsParams } from "@/lib/analytics";

export function TrackedLink({
  href,
  className,
  children,
  analyticsEvent,
  analyticsParams,
  target,
  rel,
  ariaLabel
}: {
  href: string;
  className?: string;
  children: ReactNode;
  analyticsEvent?: AnalyticsEvent;
  analyticsParams?: AnalyticsParams;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      className={className}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      onClick={() => {
        if (analyticsEvent) trackEvent(analyticsEvent, analyticsParams);
      }}
    >
      {children}
    </Link>
  );
}
