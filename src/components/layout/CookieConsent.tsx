"use client";

import { useEffect, useState } from "react";
import { canLoadAnalytics, consentStorageKey, type ConsentChoice } from "@/lib/analytics";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

export function CookieConsent({ ga4Id, clarityId }: { ga4Id?: string; clarityId?: string }) {
  const [choice, setChoice] = useState<ConsentChoice | null>(() => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(consentStorageKey) as ConsentChoice | null;
  });

  useEffect(() => {
    if (!canLoadAnalytics(choice)) {
      return;
    }
    if (ga4Id && !document.querySelector(`script[data-analytics="ga4"]`)) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(ga4Id)}`;
      script.async = true;
      script.dataset.analytics = "ga4";
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
    }
    if (clarityId && !document.querySelector(`script[data-analytics="clarity"]`)) {
      const script = document.createElement("script");
      script.text = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", ${JSON.stringify(clarityId)});`;
      script.dataset.analytics = "clarity";
      document.head.appendChild(script);
    }
  }, [choice, clarityId, ga4Id]);

  function save(next: ConsentChoice) {
    window.localStorage.setItem(consentStorageKey, next);
    setChoice(next);
  }

  if (choice) {
    return null;
  }

  return (
    <div id="cookie-settings" className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-3xl rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-2xl" role="dialog" aria-label="Cookie preferences">
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <p className="text-sm leading-6 text-[var(--color-muted)]">
          We use functional storage for this site. Optional analytics load only if you accept them.
        </p>
        <div className="flex flex-wrap gap-2">
          <button className="button button-secondary" type="button" onClick={() => save("declined")}>
            Decline analytics
          </button>
          <button className="button button-primary" type="button" onClick={() => save("accepted")}>
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
