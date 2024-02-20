import {test, expect, Locator} from "@playwright/test";

test("Locating shadow element", async ({page})=>{
    await page.goto("https://www.htmlelements.com/demos/menu/shadow-dom/index.htm")
    let menuItem =  await page.getByRole("menuitem").allInnerTexts()
    if(menuItem.includes("File")){
        console.log(menuItem.indexOf("File"))
    } else {
        throw new Error("Error")
    }

})


