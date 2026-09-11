import { expect, type Page } from '@playwright/test';

export class LoginDashboardPage {
  constructor(private page: Page) {}

  async openLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {
      waitUntil: 'domcontentloaded',
      timeout: 120000,
    });
  }

  async loginAsAdmin() {
    await this.page.getByPlaceholder('Username').fill('Admin');
    await this.page.getByPlaceholder('Password').fill('admin123');
    await this.page.getByRole('button', { name: 'Login' }).click({ timeout: 20000 });
  }

  async verifyDashboardLoaded() {
    await expect(this.page).toHaveURL(/\/dashboard\/index/, { timeout: 20000 });
    await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 20000 });
  }

  async logout() {
    await this.page.getByAltText('profile picture').click({ timeout: 20000 });
    await this.page.getByText('Logout').click({ timeout: 20000 });
  }

  async verifyLoginPageLoaded() {
    await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible({ timeout: 20000 });
  }
}
