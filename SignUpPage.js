class SignUpPage {
  // Open the Signup/Login page
  open() {
    cy.clearCookies();
    cy.visit('https://tradenation.com/signup/welcome',{ timeout: 10000 });
  }

  // Enter email in the email field
  enterEmail(email) {
    cy.get('#email') // Target the email field by its id
      .scrollIntoView()
      .should('be.visible') // Ensure the field is visible
      .clear() // Clear any pre-filled text
      .type(email); // Enter the provided email
  }

  // Enter password in the password field
  enterPassword(password) {
    cy.get('#password') // Target the password field by its id
      .scrollIntoView()
      .should('be.visible') // Ensure the field is visible
      .clear() // Clear any pre-filled text
      .type(password); // Enter the provided password
  }

  // Submit the signup form (Click on the Signup button)
  submitForm() {
    cy.get('#signup') // Target the signup button by its id
      .scrollIntoView()
      .should('be.visible') // Ensure the button is visible
      .click(); // Click the signup button
  }

  // Get email error message using XPath
  getEmailError() {
    return cy.xpath("//p[normalize-space()='Wrong email format']");
  }

  // Get password error message using XPath
  getPasswordError() {
    return cy.xpath("//p[normalize-space()='Must contain a number and a symbol (!@#$%^&*)']");
  }
}

module.exports = new SignUpPage();
