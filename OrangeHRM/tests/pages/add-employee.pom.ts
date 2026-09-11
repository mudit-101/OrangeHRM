import { expect, type Page } from '@playwright/test';

export class AddEmployeePage {
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

  async openAddEmployeePage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee', {
      waitUntil: 'domcontentloaded',
      timeout: 120000,
    });
  }

  async fillEmployeeDetails(firstName: string, middleName: string, lastName: string) {
    await this.page.getByPlaceholder('First Name').fill(firstName, { timeout: 20000 });
    await this.page.getByPlaceholder('Middle Name').fill(middleName, { timeout: 20000 });
    await this.page.getByPlaceholder('Last Name').fill(lastName, { timeout: 20000 });
  }

  async saveEmployee() {
    await this.page.getByRole('button', { name: 'Save' }).click({ timeout: 20000 });
  }

  async verifyEmployeeCreated() {
    await expect(this.page.getByRole('heading', { name: 'Personal Details' })).toBeVisible({ timeout: 20000 });
  }

  async searchEmployee(firstName: string, lastName: string) {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList', {
      waitUntil: 'domcontentloaded',
      timeout: 120000,
    });
    await this.page.getByPlaceholder('Type for hints...').first().fill(`${firstName} ${lastName}`, { timeout: 20000 });
    await this.page.getByRole('button', { name: 'Search' }).click({ timeout: 20000 });
  }

  async verifyEmployeeInList() {
    await expect(this.page.getByText('John J').first()).toBeVisible({ timeout: 20000 });
    await expect(this.page.getByText('Smith').first()).toBeVisible({ timeout: 20000 });
  }
}
