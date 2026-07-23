import { describe, expect, it } from "vitest";
import { validateLead } from "@/lib/lead-schema";

const validLead = {
  type: "pilot",
  firstName: "Ada",
  lastName: "Lee",
  company: "Example Co",
  email: "ada@example.com",
  country: "United States",
  platform: "Shopify / DTC",
  businessStage: "Live store with repeat sales",
  productUrls: ["https://example.com/product"],
  purchaseCadence: "Repeat replenishment",
  expectedOrderQuantity: "500 units across 3 SKUs",
  sourcingBudget: "US$5,000–20,000",
  targetTimeline: "Within 1–3 months",
  mainProblem: "Need a controlled sourcing and fulfillment route.",
  privacyConsent: true,
  website: ""
};

describe("lead schema", () => {
  it("rejects invalid email", () => {
    const result = validateLead({ ...validLead, email: "not-email" });
    expect(result.success).toBe(false);
  });

  it("rejects missing consent", () => {
    const result = validateLead({ ...validLead, privacyConsent: false });
    expect(result.success).toBe(false);
  });

  it("rejects honeypot values", () => {
    const result = validateLead({ ...validLead, website: "spam" });
    expect(result.success).toBe(false);
  });

  it("requires qualification fields for pilot and quote leads", () => {
    const result = validateLead({ ...validLead, sourcingBudget: "" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ path: ["sourcingBudget"] })
        ])
      );
    }
  });
});
