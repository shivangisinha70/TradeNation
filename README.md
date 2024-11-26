# Cypress Automation Testing Assignment

This repository contains the implementation of an **Automation Testing Framework** for the **TradeNation** website using **Cypress** and **Mocha**.

## Assignment Overview

This assignment demonstrates how to write automation tests using the **Cypress framework** to validate different pages and scenarios on the **TradeNation** website.

### Test Scenarios

1. **TradeNationPageTitle**: 
   - Go to the URL `https://tradenation.com/en-gb/markets/#forex`
   - Click the Trade Nation logo on the top of the page.
   - Validate the page title after clicking the logo.

2. **Invalid Signup Test**:
   - Navigate to the `https://tradenation.com/signup/welcome` page.
   - Enter invalid email and password.
   - Validate that appropriate error messages are shown for both email and password fields.

### Framework Structure

The framework is based on **Cypress** and follows the **Page Object Model (POM)** design pattern for better maintainability and scalability of tests.

#### Folder Structure


- **TradeNationPage.js**: Contains the methods to interact with the Trade Nation page.
- **SignUpPage.js**: Contains the methods for interacting with the Sign-up page.
- **TradeNationPageTitle.cy.js**: The positive test script for verifying the page title.
- **InvalidSignup.cy.js**: The negative test script for validating invalid sign-up scenarios.
- **commands.js**: Contains custom Cypress commands for reusability.
- **cypress.config.js**: Configuration file for Cypress.

## Prerequisites

Before you begin, ensure that you have the following installed on your local machine:

- **Node.js** (v14.x or higher)
- **Cypress**


