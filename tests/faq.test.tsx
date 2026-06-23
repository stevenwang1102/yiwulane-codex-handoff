import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { FAQAccordion } from "@/components/sections/FAQAccordion";

describe("FAQAccordion", () => {
  it("toggles answers from the keyboard", async () => {
    render(<FAQAccordion faqs={[{ question: "Can you source from a link?", answer: "Yes, with clear references." }]} />);
    const button = screen.getByRole("button", { name: /source from a link/i });
    expect(screen.getByText("Yes, with clear references.")).toBeVisible();
    button.focus();
    await userEvent.keyboard("{Enter}");
    expect(screen.getByText("Yes, with clear references.")).not.toBeVisible();
  });
});
