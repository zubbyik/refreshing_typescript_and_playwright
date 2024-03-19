import { test, expect } from "@playwright/test";

const URL = `https://formy-project.herokuapp.com/buttons`;

test("evaluating some javascript", async ({ page }) => {
  await page.goto(URL);
  const buttonNode = await page.evaluateHandle(() =>
    document.querySelector("button.btn.btn-lg.btn-primary[type='button']")
  );

  await page.getByLabel;

  const button = await buttonNode.evaluate(
    (btn, frm) => btn.textContent.substring(frm),
    1
  );

  //   const button = await page.evaluate((button) => button?.innerText, buttonNode);

  console.log(button);
});
