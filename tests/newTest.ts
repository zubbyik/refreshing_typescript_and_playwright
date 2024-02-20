import {test, expect} from "@playwright/test";
require('dotenv').config()

const URL = process.env.URL

test('Has Title', async ({page})=>{
    await page.goto(URL)
    await expect(page).toHaveTitle(/Playwright/)
})

test('Get started Link', async ({page})=>{
    await page.goto(URL)
    await page.getByRole('link', {name: 'get started'}).click()
    await expect(page.getByRole('heading', {name: 'installation'})).toBeVisible()
})