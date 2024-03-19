import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://formy-project.herokuapp.com/datepicker');
  await page.getByPlaceholder('mm/dd/yyyy').click();
  await expect(page.getByRole('table')).toContainText('February 2024');
  await expect(page.getByRole('table')).toContainText('«');
  await expect(page.getByRole('table')).toContainText('»');
  await page.getByRole('cell', { name: 'February' }).click();
  await expect(page.getByRole('table')).toContainText('2024');
  await expect(page.getByRole('table')).toContainText('Aug');
  await page.getByText('Aug').click();
  await page.getByRole('cell', { name: '13' }).click();
  await expect(page.getByPlaceholder('mm/dd/yyyy')).toHaveValue('08/13/2024');
});