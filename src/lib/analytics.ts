export type ConsentChoice = "accepted" | "declined";

export type AnalyticsEvent =
  | "primary_cta_click"
  | "secondary_cta_click"
  | "pilot_form_start"
  | "pilot_form_step_complete"
  | "pilot_form_submit_success"
  | "pilot_form_submit_error"
  | "booking_click"
  | "whatsapp_click"
  | "service_page_view"
  | "solution_page_view";

export type AnalyticsParams = Record<string, string | number | boolean>;

export const consentStorageKey = "yiwulane_cookie_consent";

export function canLoadAnalytics(choice: ConsentChoice | null) {
  return choice === "accepted";
}

export function trackEvent(name: AnalyticsEvent, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;
  const choice = window.localStorage.getItem(consentStorageKey) as ConsentChoice | null;
  if (!canLoadAnalytics(choice)) return;

  window.gtag?.("event", name, params);
  window.fbq?.("trackCustom", name, params);
  window.ttq?.track?.(name, params);
}
