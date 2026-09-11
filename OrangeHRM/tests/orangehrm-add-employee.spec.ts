import { test } from '@playwright/test';
import { AddEmployeePage } from './pages/add-employee.pom';

test.describe('OrangeHRM End-to-End Scenarios', () => {
  test('TC02 - Add Employee Record from PIM', async ({ page }) => {
    const addEmployeePage = new AddEmployeePage(page);

    await addEmployeePage.openLoginPage();
    await addEmployeePage.loginAsAdmin();
    await addEmployeePage.openAddEmployeePage();
    await addEmployeePage.fillEmployeeDetails('John', 'J', 'Smith');
    await addEmployeePage.saveEmployee();
    await addEmployeePage.verifyEmployeeCreated();
    await addEmployeePage.searchEmployee('John', 'Smith');
    await addEmployeePage.verifyEmployeeInList();
  });
});
