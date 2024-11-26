// Custom command to go to the Forex markets page
Cypress.Commands.add('goToForexPage', () => {
    cy.visit('https://tradenation.com/en-gb/markets/#forex');
  });
  
  // Custom command to click the 'Trade Nation' logo to navigate back to the homepage
  Cypress.Commands.add('clickTradeNationLogo', () => {
    cy.get('a[href="/en-gb/"]') // Modify the selector to the actual logo link
      .click();
  });
  
  // Custom command for logging in on the 'Sign Up / Log In' page
  Cypress.Commands.add('loginWithInvalidCredentials', (email, password) => {
    cy.visit('https://tradenation.com/signup/welcome');
    cy.get('input[name="email"]').type(email); // Email input field
    cy.get('input[name="password"]').type(password); // Password input field
    cy.get('button[type="submit"]').click(); // Click the submit button
  });
  
  // Custom command to check for email address error
  Cypress.Commands.add('checkEmailError', () => {
    cy.get('.email-error').should('be.visible'); // Modify with actual error selector
  });
  
  // Custom command to check for password requirement error
  Cypress.Commands.add('checkPasswordError', () => {
    cy.get('.password-error').should('be.visible'); // Modify with actual password error selector
  });
  