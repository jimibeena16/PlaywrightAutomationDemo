import { test, expect } from '@playwright/test';

test('Right Click', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.locator('#rightClickBtn').click({button: 'right'});
    await expect(page.locator('#rightClickMessage')).toContainText('You have done a right click');
});

test('Double Click', async ({ page }) => {
    await page.goto('https://demoqa.com/buttons');
    await page.locator('#doubleClickBtn').dblclick();
    await expect(page.locator('#doubleClickMessage')).toContainText('You have done a double click');
});
