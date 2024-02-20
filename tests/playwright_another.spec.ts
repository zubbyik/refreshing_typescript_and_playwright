import {expect, test} from "@playwright/test";
// for using the dotenv .env file
// 1.  Make sure the node package => dotenv is installed with: npm install dotenv --save
// 2. Then require the package in your code with => require("dotenv").config()
// 3. Then fetch it with process.env['key'] , never use process.env.key

require("dotenv").config()


// Some Gotcha with this line!
// Please do not use the dot notation on the process.env e.g. use process.env['key'] instead of process.env.key
const HEROKU_URL = process.env["HEROKU_URL"]

test("checking heroku url", async ({page})=>{

    await page.goto(HEROKU_URL);
    expect(page.url()).toEqual("https://the-internet.herokuapp.com/");

})
