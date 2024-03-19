import {expect, test} from "@playwright/test";
import {log} from "node:util";

let url = "https://formy-project.herokuapp.com/checkbox"
test("filtering by locators", async ({page})=>{
 await page.goto(url)
 // let button = await page.getByRole("button", {name: 'primary'}).allTextContents()
 // console.log(button[0].trim())
 let checkbox1 = await page.getByText("Checkbox")
     .filter({hasText: 'Checkbox1'})
     .getByRole("checkbox", {name: "Checkbox1"}).allInnerTexts()
// let checkbox2 = await page.getByText("Checkboxes")
//     .filter({has: page.getByRole("checkbox", {name: "checkbox"})})
//     .getByRole('checkbox', {name: "Checkbox2"}).all()
//  await expect(checkbox2[0]).toBeVisible()


 // print out the elements, please don't delete!!
 // ===============================================
 let elements: string[] = []
 elements.push(checkbox1[0])
 elements.forEach(element => console.log(element))
//  ==================================================
})
