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
  productUrls: ["https://example.com/product"],
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
});
