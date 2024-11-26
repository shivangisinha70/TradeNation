// Import the SignUpPage class
const SignUpPage = require('./pages/SignUpPage');

describe('Invalid Signup Tests', () => {
  beforeEach(() => {
    SignUpPage.open(); // Navigate to the signup page
  });

  it('should show an error for invalid email before submitting', () => {
    // Enter an invalid email and verify error before submitting
    SignUpPage.enterEmail('invalid-email'); // Enter invalid email

    // Verify that the email error message appears
    SignUpPage.getEmailError()
      .should('be.visible')
      .and('contain.text', 'Wrong email format'); // Ensure the error text matches the expected message
  });

  it('should show an error for invalid password before submitting', () => {
    // Enter a valid email and an invalid password, and verify error before submitting
    SignUpPage.enterEmail('valid.email@example.com'); // Enter valid email
    SignUpPage.enterPassword('123'); // Enter invalid password (too short)

    // Verify that the password error message appears
    SignUpPage.getPasswordError()
      .should('be.visible')
      .and('contain.text', 'Must contain a number and a symbol (!@#$%^&*)'); // Ensure the error text matches the expected message
  });
});
