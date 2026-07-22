import { afterEach, describe, expect, it, vi } from "vitest";
import { canLoadAnalytics, consentStorageKey, trackEvent } from "@/lib/analytics";

afterEach(() => {
  window.localStorage.clear();
  delete window.gtag;
  delete window.fbq;
  delete window.ttq;
});

describe("analytics consent", () => {
  it("loads analytics only after acceptance", () => {
    expect(canLoadAnalytics(null)).toBe(false);
    expect(canLoadAnalytics("declined")).toBe(false);
    expect(canLoadAnalytics("accepted")).toBe(true);
  });

  it("does not send events before consent", () => {
    const gtag = vi.fn();
    window.gtag = gtag;
    trackEvent("whatsapp_click", { placement: "test" });
    expect(gtag).not.toHaveBeenCalled();
  });

  it("sends consented events without personal data", () => {
    const gtag = vi.fn();
    const fbq = vi.fn();
    const track = vi.fn();
    window.gtag = gtag;
    window.fbq = fbq;
    window.ttq = Object.assign([], { track });
    window.localStorage.setItem(consentStorageKey, "accepted");

    trackEvent("whatsapp_click", { country: "mexico", placement: "country_hero" });

    expect(gtag).toHaveBeenCalledWith("event", "whatsapp_click", {
      country: "mexico",
      placement: "country_hero"
    });
    expect(fbq).toHaveBeenCalledWith("trackCustom", "whatsapp_click", {
      country: "mexico",
      placement: "country_hero"
    });
    expect(track).toHaveBeenCalledOnce();
  });
});
