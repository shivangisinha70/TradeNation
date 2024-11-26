// Import commands.js for custom commands
import './commands';

// Example of a global hook
beforeEach(() => {
  cy.log('A new test is starting!');
});
