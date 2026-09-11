# OrangeHRM End-to-End Test Data

## Application Overview

Create a markdown file listing the primary test data values used by the OrangeHRM test cases.

## Test Scenarios

### 1. OrangeHRM Test Data

**Seed:** `tests/seed.spec.ts`

#### 1.1. TC01 Test Data - Admin Login

**File:** `tests/orangehrm/tc01-login-dashboard.spec.ts`

**Steps:**
  1. Use the login data set for Admin user.
    - expect: Username: Admin, Password: admin123
  2. Use the page URL: https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
    - expect: The site is the OrangeHRM public demo instance.

#### 1.2. TC02 Test Data - Add Employee Data

**File:** `tests/orangehrm/tc02-add-employee.spec.ts`

**Steps:**
  1. Create a unique employee record.
    - expect: First Name: John, Middle Name: J, Last Name: Smith, Employee ID: 12345
  2. Use a unique employee search key.
    - expect: Employee search key: John Smith or 12345
