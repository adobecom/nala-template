import { expect, test } from '@playwright/test';
import Quote from '../selectors/quote.block.page.js';

const { features } = require('../features/quote.block.spec.js');

let obj;

// Quote block tests
test.describe('Milo Quote block test suite', () => {
  // before each test block
  test.beforeEach(async ({ page }) => {
    obj = new Quote(page);
  });

  // Test - 0
  test(`${features[0].name},${features[0].tags}`, async ({ page, baseURL }) => {
    console.info(`${baseURL}${features[0].path}`);
    // test step-1
    await test.step('Go to Quote block test page', async () => {
      await page.goto(`${baseURL}${features[0].path}`);
      await page.waitForLoadState('domcontentloaded');
      await expect(page).toHaveURL(`${baseURL}${features[0].path}`);
    });

    // test step-2
    await test.step('Verify Quote block content / specs ', async () => {
      const { data } = features[0];
      await expect(await obj.quote).toBeVisible();
      await expect(await obj.quoteCopy).toContainText(data.quoteCopy);
      await expect(await obj.quoteFigCaption).toContainText(data.figCaption);
    });
  });
});
