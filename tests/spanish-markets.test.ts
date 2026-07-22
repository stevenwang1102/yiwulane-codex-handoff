import { describe, expect, it } from "vitest";
import { getSpanishMarket, spanishMarkets } from "@/content/spanish-markets";

describe("Spanish market landing pages", () => {
  it("defines the six priority markets with unique routes and metadata", () => {
    expect(spanishMarkets).toHaveLength(6);
    expect(new Set(spanishMarkets.map((market) => market.path)).size).toBe(6);
    expect(new Set(spanishMarkets.map((market) => market.metaTitle)).size).toBe(6);
    expect(new Set(spanishMarkets.map((market) => market.metaDescription)).size).toBe(6);
  });

  it("resolves a market by its public route", () => {
    expect(getSpanishMarket("mexico")?.country).toBe("Mexico");
    expect(getSpanishMarket("unknown")).toBeUndefined();
  });
});
