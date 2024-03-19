import { test, expect } from "@playwright/test";

const URL = `https://playwright.dev/docs/evaluating`;

test("Testing and evaluating javascripts", async ({ page }) => {
  await page.goto(URL);
  const title = await page.url();
  const evaluating = await page.evaluate(() => document.location.href);

  const status = await page.evaluate(async () => {
    const response = await fetch(location.href);
    return response.status;
  });

  const fortyTwo = await page.evaluate((num) => num, 42);

  const myArray = await page.evaluate((arr)=> arr.length, [1, 2, 3])

  const myObject = await page.evaluate((obj: {foo: string})=> obj.foo, {foo: "bar"})
  console.log(fortyTwo);
  console.log(status);

  const button = await page.evaluateHandle("window.button");
  console.log(button);

  return false
});
