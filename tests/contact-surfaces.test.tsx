import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { MapCard } from "@/components/sections/MapCard";

describe("contact surfaces", () => {
  it("renders the global WhatsApp chat link", () => {
    render(<WhatsAppButton />);
    expect(screen.getByRole("link", { name: /whatsapp/i })).toHaveAttribute("href", "https://wa.me/8613430695812");
  });

  it("renders the Yiwu office map with exact coordinates", () => {
    render(<MapCard />);
    expect(screen.getByTitle("YIWULANE Yiwu office location")).toHaveAttribute(
      "src",
      "https://www.google.com/maps?q=29.326753,120.111221&z=17&output=embed"
    );
    expect(screen.getByText(/29.326753, 120.111221/)).toBeInTheDocument();
  });
});
