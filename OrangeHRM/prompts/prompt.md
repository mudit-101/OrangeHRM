# OrangeHRM Beginner Testing Workflow Prompt

## Project Goal

Create a complete testing workflow for the OrangeHRM Demo application, starting from requirement analysis and ending with test reporting.

Website:
https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

Use the following credentials:

### Login Data
- Username: Admin
- Password: admin123

### Employee Data
- First Name: John
- Middle Name: J
- Last Name: Smith
- Employee ID: 12345

---

# Workflow

## 1. Requirement Analysis Agent

Study the OrangeHRM application and understand its basic functionality.

Focus on:

- Login functionality
- Dashboard access
- PIM module
- Add Employee feature
- Employee search functionality

Create a simple requirement analysis document explaining the features that will be tested.

Output:
- orangehrm-e2e-requirements.md

---

## 2. Test Case Generator Agent

Read the requirement analysis document and create test cases.

Create test cases for:

### TC01 - Admin Login and Dashboard Access

Verify that:
- User can access the login page.
- User can login successfully.
- Dashboard is displayed.
- User can logout.

### TC02 - Add Employee

Verify that:
- User can open the PIM module.
- User can add a new employee.
- Employee record is saved successfully.
- Employee can be found in the employee list.

Output:
- orangehrm-e2e-test-cases.md

---

## 3. Test Data Generator Agent

Create all data required for the test cases.

Include:

### Login Test Data
- Admin
- admin123

### Employee Test Data
- John
- J
- Smith
- 12345

Provide the data in a structured and reusable format.

Output:
- orangehrm-e2e-test-data.md

---

## 4. Playwright Test Planner Agent

Create an automation strategy for the test cases.

Explain:

- What tests will be automated.
- Which page objects are needed.
- How tests will be organized.
- How reusable methods will be created.

Output:
- orangehrm-e2e-test-plan.md

---

## 5. Test Generator Agent

Generate Playwright automation tests based on the test plan, test cases, and test data.

Use:

- Playwright
- TypeScript
- Page Object Model (POM)

Create separate page objects for:

### Login Page
Responsible for:
- Opening the login page
- Entering credentials
- Logging in

### Employee Page
Responsible for:
- Opening PIM
- Adding employees
- Searching employees

Generate automated tests for:

- Login and Dashboard validation
- Add Employee validation

---

## 6. Healer Agent

Run the generated Playwright tests.

If a test fails:

- Identify the root cause.
- Fix locators, waits, assertions, or test logic.
- Re-run the tests.
- Repeat until the tests are stable.

The objective is to improve reliability and reduce failures.

---

## 7. Reporter Agent

Generate a final execution report.

The report should contain:

- Total Tests Executed
- Passed Tests
- Failed Tests
- Execution Summary
- Failure Details
- Screenshot References for Failed Tests
- Final Status (PASS or FAIL)

Output:
- orangehrm-test-report.md

---

# Main Test Flows

## Flow 1: Login and Dashboard

1. Open OrangeHRM Login Page.
2. Enter valid Admin credentials.
3. Click Login.
4. Verify Dashboard is displayed.
5. Verify navigation menu is visible.
6. Logout successfully.

Expected Result:
Dashboard should open successfully and logout should work.

---

## Flow 2: Add Employee

1. Login as Admin.
2. Open PIM module.
3. Click Add Employee.
4. Enter employee details.
5. Save employee information.
6. Search for the employee.
7. Verify employee record exists.

Expected Result:
Employee should be successfully created and visible in the employee list.

---

## Final Objective

Produce all required project documents, generate Playwright automation tests using the Page Object Model, execute the tests, fix failures when necessary, and create a clear final report. Keep all explanations simple and beginner-friendly.
