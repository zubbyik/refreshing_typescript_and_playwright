import { test, expect } from "@playwright/test";

interface CustomWindow extends Window {
  getUserInput: () => Promise<{ year: string, month: string, day: string }>;
}


test("test", async ({ page }) => {
  const window: CustomWindow= null
  await page.goto("https://formy-project.herokuapp.com/datepicker");
  await page.evaluate(async () => {
  window.getUserInput() = async () => {
      const year = prompt(`Please enter the year `);
      const month = prompt("Please enter the month ");
      const day = prompt("Please enter the day ");
      return { year, month, day };
    };
  });

  const {year, month, day} = await page.evaluate(()=> window.getUserInput())
  await expect(page.getByRole("heading")).toContainText("Datepicker");
  await page.getByPlaceholder("mm/dd/yyyy").click();
  await page.getByRole("cell", { name: `${month}` }).click();
  await page.getByRole("cell", { name: `${year}` }).click();
  while (true) {
    console.log("Checking the date");
    await page.getByRole("cell", { name: "«" }).click();
    if (await page.getByText(`${year}`).isVisible()) {
      await page.getByText(`${year}`).click();
      break;
    }
  }
  await page.getByText(`${month}`).click();
  await page
    .getByRole("cell", { name: `${day}`, exact: true })
    .first()
    .click();
  await expect(page.getByPlaceholder(`mm/dd/yyyy`)).toHaveValue(
    `${month}/${day}/${year}`
  );
});
