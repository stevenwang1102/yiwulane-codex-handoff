import { expect, test } from "@playwright/test";

test("homepage to pilot validation and safe failure state", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await expect(page.getByRole("heading", { name: /your yiwu sourcing and fulfillment team/i })).toBeVisible();
  await page.getByRole("link", { name: /start a 3-sku pilot/i }).first().click();
  await expect(page).toHaveURL(/\/pilot$/);
  await page.waitForLoadState("networkidle");
  await page.getByLabel("First name").fill("Ada");
  await page.getByLabel("Last name").fill("Lee");
  await page.getByLabel("Company").fill("Example Co");
  await page.getByLabel("Business email").fill("ada@example.com");
  await page.getByLabel("Country").fill("United States");
  await page.getByLabel("Selling platform").selectOption("Shopify / DTC");
  await page.getByRole("button", { name: /continue/i }).click();
  await expect(page.getByText("Step 2 of 2")).toBeVisible();
  await page.getByLabel("Main problem to solve").fill("Need a controlled sourcing and fulfillment route.");
  await page.getByRole("button", { name: /submit my 3 products/i }).click();
  await expect(page.getByText(/privacy consent is required/i)).toBeVisible();
});
