import {expect, test} from "@playwright/test";

test("testing playwright evaluation", async ({ page }) => {
  await page.goto("https://example.com/");

  // Listen for prompt dialogs
  page.on("dialog", async (dialog) => {
    console.log("Dialog message:", dialog.message());// Extract prompt message
    await page.pause();
    await dialog.accept("John Doe"); // Provide a default value or desired input
    console.log("Entered name:", promptText); // Log the entered name
    const button: HTMLButtonElement = page.getByRole("button", {name: "click me"}).all()[0]
    expect(button.disabled).toBe("true")
  });

  // Triggering a prompt
  await page.evaluate(() => prompt("What is your name?"));
});
