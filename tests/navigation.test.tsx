import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "@/components/layout/Header";

describe("Header", () => {
  it("renders primary CTA and opens mobile navigation", async () => {
    render(<Header />);
    expect(screen.getAllByText("Start a 3-SKU Pilot").length).toBeGreaterThan(0);
    await userEvent.click(screen.getByRole("button", { name: /menu/i }));
    expect(screen.getByRole("navigation", { name: /mobile/i })).toBeInTheDocument();
    await userEvent.keyboard("{Escape}");
    expect(screen.queryByRole("navigation", { name: /mobile/i })).not.toBeInTheDocument();
  });
});
