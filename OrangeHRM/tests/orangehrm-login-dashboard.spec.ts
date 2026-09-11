import { test, expect } from '@playwright/test';
import { LoginDashboardPage } from './pages/login-dashboard.pom';

test.describe('OrangeHRM End-to-End Scenarios', () => {
  test('TC01 - Admin Login and Dashboard Access', async ({ page }) => {
    const loginPage = new LoginDashboardPage(page);

    await loginPage.openLoginPage();
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();

    await loginPage.loginAsAdmin();
    await loginPage.verifyDashboardLoaded();

    await loginPage.logout();
    await loginPage.verifyLoginPageLoaded();
  });
});
