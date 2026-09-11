import { expect, type Page } from '@playwright/test';

export class LoginDashboardPage {
  constructor(private page: Page) {}

  async openLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async loginAsAdmin() {
    await this.page.getByPlaceholder('Username').fill('Admin');
    await this.page.getByPlaceholder('Password').fill('admin123');
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async assertDashboardVisible() {
    await expect(this.page).toHaveURL(/\/dashboard\/index/);
    await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  }

  async logout() {
    await this.page.getByAltText('profile picture').click();
    await this.page.getByText('Logout').click();
  }

  async assertLoginPageVisible() {
    await expect(this.page.getByRole('heading', { name: 'Login' })).toBeVisible();
  }
}
