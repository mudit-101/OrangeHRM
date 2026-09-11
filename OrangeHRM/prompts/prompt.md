
# OrangeHRM Beginner Prompt

We are working on the OrangeHRM demo website.

Website:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

We need to make test files for OrangeHRM.

The project already has these files:

- [specs/orangehrm-e2e-test-plan.md](specs/orangehrm-e2e-test-plan.md)
- [specs/orangehrm-e2e-test-cases.md](specs/orangehrm-e2e-test-cases.md)
- [specs/orangehrm-e2e-test-data.md](specs/orangehrm-e2e-test-data.md)

Please create one beginner prompt file in the prompt folder.

This file should explain the full workflow.

The workflow is:

1. Requirement Analysis Agent

   - Understand the OrangeHRM website.
   - Write a simple requirement analysis.
2. Test Case Generator Agent

   - Make simple test cases from the requirement.
3. Test Data Generator Agent

   - Make test data for the test cases.
4. Playwright Test Planner Agent

   - Make a simple test plan.
5. Test Generator Agent

   - Make Playwright test code.
   - Use the Page Object Model.
   - Use a page object for login.
   - Use a page object for employee adding.
6. Healer Agent

   - Run the test cases.
   - If a test fails, fix the test or the code.
   - Run the test again.
7. Reporter Agent

   - Write a test report.
   - Show pass or fail.
   - Show screenshots for failed tests.

Use this login data:

- Username: Admin
- Password: admin123

Use this employee data:

- First Name: John
- Middle Name: J
- Last Name: Smith
- Employee ID: 12345

Make these two main test flows:

1. Login to OrangeHRM and open the dashboard.
2. Add a new employee from the PIM page.

Please keep the writing simple and easy to understand.

Please keep the whole work in one file in the prompt folder.
