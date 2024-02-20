import { test, expect, Locator } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/mvctodo");
  await page.goto("https://demo.playwright.dev/todomvc/");
  await page.goto("https://demo.playwright.dev/todomvc/#/");
  await expect(page.getByPlaceholder("What needs to be done?")).toBeVisible();
  await expect(page.getByRole("heading")).toContainText("todos");
  await page.getByPlaceholder("What needs to be done?").click();
  await page.getByPlaceholder("What needs to be done?").fill("make breakfast");
  await page.getByPlaceholder("What needs to be done?").press("Enter");
  await expect(page.getByLabel("Toggle Todo")).toBeVisible();
  await expect(page.getByTestId("todo-title")).toBeVisible();
  await expect(page.getByTestId("todo-title")).toContainText("make breakfast");
  await expect(page.getByText("All Active Completed")).toBeVisible();
  await expect(page.locator("body")).toContainText("1 item left");
  await expect(page.locator("body")).toContainText("All");
  await expect(page.locator("body")).toContainText("Active");
  await expect(page.getByRole("link", { name: "Completed" })).toBeVisible();
  await page.getByLabel("Toggle Todo").check();
  await expect(page.getByTestId("todo-title")).toBeVisible();
  await expect(page.getByLabel("Delete")).toBeVisible();
  await page.getByLabel("Delete").click();
});
