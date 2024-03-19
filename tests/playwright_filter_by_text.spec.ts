import {test, expect} from "@playwright/test";

test("filter text from locators", async ({page})=>{
    await page.goto("https://the-internet.herokuapp.com")
    await page.getByText("Challenging DOM").click()
    await expect(page.url()).toBe(
      "https://the-internet.herokuapp.com/challenging_dom"
    );
    let content = await page.locator("#content")
    let table = await content.locator("table")
    let rows = await table.locator("tr").all()
    let td = rows.map(async locat => {
        let tdata = await locat.locator("td").allTextContents()
        return tdata
    })

    let head = await table.locator("thead")
    let head_items = await head.locator("th").allTextContents()
    console.table(head_items)
    // console.log(rows.splice(1,))
    // td.forEach(async item => {
    //     let inner_item = await item
    //     inner_item.forEach(data => console.log(data.trim(6)))
    // })

    for(const item of td){
        const inner_item = await item
        inner_item.forEach(data => console.table(data.trim()))
    }

})
