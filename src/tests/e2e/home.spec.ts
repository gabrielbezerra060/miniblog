import { test } from '@playwright/test';


test('has title', async ({ page }) => {
    console.log('Navigating to the home page');
    
    await page.goto('/');
});
  
