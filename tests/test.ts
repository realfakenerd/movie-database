import { chromium, expect, test } from '@playwright/test';

test('click on step 3', async ({ page }) => {
	await page.goto('https://popkorn.vercel.app/');
	await page.hover("'go to step 3'");
	await page.screenshot({ path: 'example.png' });
});
