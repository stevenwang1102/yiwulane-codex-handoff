"use client";

import { useEffect, useState } from "react";
import { canLoadAnalytics, consentStorageKey, type ConsentChoice } from "@/lib/analytics";

type QueueFunction = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[][];
  loaded?: boolean;
  version?: string;
};

type TikTokQueue = unknown[] & {
  track?: (name: string, params?: Record<string, string | number | boolean>) => void;
  page?: () => void;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: QueueFunction;
    _fbq?: QueueFunction;
    ttq?: TikTokQueue;
  }
}

function appendExternalScript(src: string, analytics: string) {
  if (document.querySelector(`script[data-analytics="${analytics}"]`)) return;
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.dataset.analytics = analytics;
  document.head.appendChild(script);
}

function loadGa4(id: string) {
  appendExternalScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`, "ga4");
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
}

function loadMetaPixel(id: string) {
  if (window.fbq) return;
  const fbq: QueueFunction = (...args: unknown[]) => {
    if (fbq.callMethod) fbq.callMethod(...args);
    else fbq.queue?.push(args);
  };
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = "2.0";
  window.fbq = fbq;
  window._fbq = fbq;
  appendExternalScript("https://connect.facebook.net/en_US/fbevents.js", "meta");
  fbq("init", id);
  fbq("track", "PageView");
}

function loadTikTokPixel(id: string) {
  if (window.ttq) return;
  const ttq = [] as TikTokQueue;
  ttq.track = (name, params) => ttq.push(["track", name, params]);
  ttq.page = () => ttq.push(["page"]);
  window.ttq = ttq;
  appendExternalScript(
    `https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=${encodeURIComponent(id)}&lib=ttq`,
    "tiktok"
  );
  ttq.push(["load", id]);
  ttq.page();
}

export function CookieConsent({
  ga4Id,
  clarityId,
  metaPixelId,
  tiktokPixelId
}: {
  ga4Id?: string;
  clarityId?: string;
  metaPixelId?: string;
  tiktokPixelId?: string;
}) {
  const [isSpanish] = useState(() => typeof window !== "undefined" && window.location.pathname.startsWith("/es"));
  const [choice, setChoice] = useState<ConsentChoice | null>(() => {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem(consentStorageKey) as ConsentChoice | null;
  });

  useEffect(() => {
    if (!canLoadAnalytics(choice)) return;
    if (ga4Id) loadGa4(ga4Id);
    if (metaPixelId) loadMetaPixel(metaPixelId);
    if (tiktokPixelId) loadTikTokPixel(tiktokPixelId);
    if (clarityId) {
      appendExternalScript(`https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`, "clarity");
    }
  }, [choice, clarityId, ga4Id, metaPixelId, tiktokPixelId]);

  function save(next: ConsentChoice) {
    window.localStorage.setItem(consentStorageKey, next);
    setChoice(next);
  }

  if (choice) return null;

  return (
    <div id="cookie-settings" className="fixed inset-x-4 bottom-4 z-[90] mx-auto max-w-3xl rounded-2xl border border-[var(--color-border)] bg-white p-4 shadow-2xl" role="dialog" aria-label={isSpanish ? "Preferencias de cookies" : "Cookie preferences"}>
      <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
        <p className="text-sm leading-6 text-[var(--color-muted)]">
          {isSpanish
            ? "Usamos almacenamiento funcional. La medicion opcional de analitica y publicidad solo se activa si la aceptas."
            : "We use functional storage for this site. Optional analytics and advertising measurement load only if you accept them."}
        </p>
        <div className="flex flex-wrap gap-2">
          <button className="button button-secondary" type="button" onClick={() => save("declined")}>
            {isSpanish ? "Rechazar analitica" : "Decline analytics"}
          </button>
          <button className="button button-primary" type="button" onClick={() => save("accepted")}>
            {isSpanish ? "Aceptar analitica" : "Accept analytics"}
          </button>
        </div>
      </div>
    </div>
  );
}
