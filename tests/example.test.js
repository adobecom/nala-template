import { expect, test } from '@playwright/test';

// Example-1 tests
test.describe('Milo home page test suite', () => {
  // Test - 0
  test('Verify Milo home page', async ({ page }) => {
    // test step-1
    await test.step('Go to Milo home test page', async () => {
      await page.goto('https://milo.adobe.com/');
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL('https://milo.adobe.com/');
    });

    // test step-2
    await test.step('Verify Milo hero text on home page ', async () => {
      await expect(page.locator('#milo').nth(0)).toBeVisible();
      await expect(page.locator('#milo').nth(0)).toContainText('milo');
    });
  });
});
