import { expect, type Page } from '@playwright/test';

export class AddEmployeePage {
  constructor(private page: Page) {}

  async openLoginPage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async loginAsAdmin() {
    await this.page.getByPlaceholder('Username').fill('Admin');
    await this.page.getByPlaceholder('Password').fill('admin123');
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async openAddEmployeePage() {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
  }

  async fillEmployeeDetails(firstName: string, middleName: string, lastName: string, employeeId: string) {
    await this.page.getByPlaceholder('First Name').fill(firstName);
    await this.page.getByPlaceholder('Middle Name').fill(middleName);
    await this.page.getByPlaceholder('Last Name').fill(lastName);
    await this.page.getByPlaceholder('Employee Id').fill(employeeId);
  }

  async saveEmployee() {
    await this.page.getByRole('button', { name: 'Save' }).click();
  }

  async assertEmployeeCreated() {
    await expect(this.page.getByText('Personal Details')).toBeVisible();
    await expect(this.page.getByText('John')).toBeVisible();
  }

  async searchEmployee(firstName: string, lastName: string) {
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
    await this.page.getByPlaceholder('Type for hints...').fill(`${firstName} ${lastName}`);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async assertEmployeeVisibleInList() {
    await expect(this.page.getByText('John')).toBeVisible();
    await expect(this.page.getByText('Smith')).toBeVisible();
  }
}
