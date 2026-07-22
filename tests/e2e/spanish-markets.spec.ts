import { expect, test } from "@playwright/test";

const markets = ["mexico", "espana", "colombia", "chile", "peru", "argentina"];

test("Spanish homepage links to every priority market", async ({ page }) => {
  await page.goto("/es");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Proveedores en China");

  for (const market of markets) {
    await expect(page.locator(`a[href="/es/${market}"]`).first()).toBeVisible();
  }
});

test("country landing pages render on mobile without horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });

  for (const market of markets) {
    await page.goto(`/es/${market}`);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.getByRole("link", { name: /WhatsApp/i }).first()).toBeVisible();
    const overflows = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflows, `${market} should not overflow horizontally`).toBe(false);
  }
});
