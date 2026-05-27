const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('http://localhost:5173');
  // Wait for a few seconds to ensure everything loads
  await page.waitForTimeout(3000);
  
  // We want to screenshot the 'giai-thuong' section.
  const section = await page.locator('#giai-thuong');
  if (await section.count() > 0) {
    await section.screenshot({ path: 'screenshot.png' });
    console.log('Screenshot of #giai-thuong saved as screenshot.png');
  } else {
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    console.log('Screenshot of full page saved as screenshot.png');
  }
  
  await browser.close();
})();
