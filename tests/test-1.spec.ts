import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://production.contosotraders.com/');
  await page.getByPlaceholder('Search by product name or search by image').click();
  await page.getByPlaceholder('Search by product name or search by image').fill('xbox');
  await page.getByPlaceholder('Search by product name or search by image').press('Enter');
  await page.getByRole('img', { name: 'Xbox Wireless Controller Mineral Camo Special Edition' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: '+' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'cart' }).click();
  await expect(page.getByTestId('subtotal')).toHaveText('$448.00');
});