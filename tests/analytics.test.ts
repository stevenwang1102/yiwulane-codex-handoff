import { describe, expect, it } from "vitest";
import { canLoadAnalytics } from "@/lib/analytics";

describe("analytics consent", () => {
  it("loads analytics only after acceptance", () => {
    expect(canLoadAnalytics(null)).toBe(false);
    expect(canLoadAnalytics("declined")).toBe(false);
    expect(canLoadAnalytics("accepted")).toBe(true);
  });
});
