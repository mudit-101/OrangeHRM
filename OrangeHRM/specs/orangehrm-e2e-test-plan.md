# OrangeHRM End-to-End Test Plan

## Application Overview

Plan to test OrangeHRM public demo end-to-end flows using the login page and representative admin area actions.

## Test Scenarios

### 1. OrangeHRM End-to-End Scenarios

**Seed:** `tests/seed.spec.ts`

#### 1.1. TC01 - Admin Login and Dashboard Access

**File:** `tests/orangehrm/tc01-login-dashboard.spec.ts`

**Steps:**
  1. Navigate to the public OrangeHRM login URL.
    - expect: The login page loads with a Username field, a Password field, and a Login button.
  2. Enter the valid admin username and password displayed on the page.
    - expect: The credentials can be entered without errors.
  3. Click the Login button.
    - expect: The user is redirected to the dashboard and sees the OrangeHRM main dashboard header and navigation.
  4. Confirm the dashboard page is available after login.
    - expect: The dashboard sidebar and common admin UI elements are visible.
  5. Log out if the page presents a user menu or logout control.
    - expect: The user returns to the OrangeHRM login page or the session closes cleanly.

#### 1.2. TC02 - Add Employee Record from PIM

**File:** `tests/orangehrm/tc02-add-employee.spec.ts`

**Steps:**
  1. Start from the OrangeHRM login page and sign in with valid admin credentials.
    - expect: The dashboard appears after successful login.
  2. Open the PIM module and choose Add Employee.
    - expect: The Add Employee form loads with fields for first name, middle name, last name, and employee ID.
  3. Enter a unique employee first name, last name, and employee ID if relevant.
    - expect: The form accepts the values and no validation error appears.
  4. Save the employee record.
    - expect: The employee profile page or confirmation view opens and the new employee data is displayed.
  5. Return to the PIM employee list and search for the created employee.
    - expect: The employee appears in the employee list with the entered name or ID.
