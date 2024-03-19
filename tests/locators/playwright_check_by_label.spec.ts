import { test, expect } from "@playwright/test";

const URL = "https://formy-project.herokuapp.com/checkbox";

test.describe("starting the test", () => {
  test("checking the check box", async ({ page }) => {
    await page.goto(URL);
    const Checkbox2 = await page.getByLabel("Checkbox2");
    await Checkbox2.check;
    await expect(Checkbox2.isChecked).toBeTruthy;
  });
});
