import { test, expect } from "@playwright/test";

test("Checking for the radio button", async ({ page }) => {
  await page.goto("https://formy-project.herokuapp.com/radiobutton");
  await page
    .locator(".form-check")
    .filter({ has: page.getByText("Radio button 2") })
    .getByRole("radio")
    .click();
  await expect(
    page
      .locator(".form-check")
      .filter({ has: page.getByText("Radio button 2") })
      .getByRole("radio")
  ).toBeChecked();
});
