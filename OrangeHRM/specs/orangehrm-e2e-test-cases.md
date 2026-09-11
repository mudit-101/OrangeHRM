# OrangeHRM End-to-End Test Cases

## Application Overview

Create concrete markdown test cases derived from the OrangeHRM end-to-end test plan.

## Test Scenarios

### 1. OrangeHRM End-to-End Test Cases

**Seed:** `tests/seed.spec.ts`

#### 1.1. TC01 - Admin Login and Dashboard Access

**File:** `tests/orangehrm/tc01-login-dashboard.spec.ts`

**Steps:**
  1. Open the OrangeHRM login URL.
    - expect: The login form is visible with Username, Password, and Login controls.
  2. Enter Admin as username and admin123 as password.
    - expect: The login fields accept the credentials.
  3. Click Login.
    - expect: The dashboard page loads and the user sees the OrangeHRM dashboard.
  4. Verify the dashboard main menu and welcome section are visible.
    - expect: The page shows the dashboard UI after successful authentication.
  5. Click the user profile/logout control and confirm sign out.
    - expect: The user is signed out and returned to the login page.

#### 1.2. TC02 - Add Employee Record from PIM

**File:** `tests/orangehrm/tc02-add-employee.spec.ts`

**Steps:**
  1. Open OrangeHRM login page and authenticate as Admin.
    - expect: The dashboard is displayed after login.
  2. Click PIM and then Add Employee.
    - expect: The Add Employee page opens with required employee form fields.
  3. Enter a unique employee first name, middle name, last name, and employee ID.
    - expect: The form accepts the data without validation issues.
  4. Click Save.
    - expect: The new employee profile is created and displayed.
  5. Search the employee in the PIM employee list.
    - expect: The created employee record is listed and can be found.
