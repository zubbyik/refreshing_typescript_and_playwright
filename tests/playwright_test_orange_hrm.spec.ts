import {expect, test} from "@playwright/test";
require("dotenv").config()


test("Initial test of the home page links", async ({page})=>{
    let user = process.env["orangehrm_other_user"]
    let password = process.env["orangehrm_user_password"]
    let url = process.env["orangehrm_baseurl"]

    await page.goto(url)
    //await expect(page.title()).toBe("OrangeHRM")
    await page.locator("#txtUsername").fill(user)
    await page.locator("#txtPassword").fill(password)
    await page.getByRole("button", {name: "LOGIN"}).click()
    await expect(page.locator("#welcome")).toHaveText("Welcome Ikman")


})
