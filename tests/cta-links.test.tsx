import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ButtonLink } from "@/components/ui/ButtonLink";

describe("CTA links", () => {
  it("routes the primary pilot CTA to /pilot", () => {
    render(<ButtonLink href="/pilot">Start a 3-SKU Pilot</ButtonLink>);
    expect(screen.getByRole("link", { name: /start a 3-sku pilot/i })).toHaveAttribute("href", "/pilot");
  });
});
