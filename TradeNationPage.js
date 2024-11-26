class TradeNationPage {
  // Open the Forex markets page
  open() {
    cy.visit('https://tradenation.com/en-gb/markets/#forex');
  }

  // Accept cookies banner
  acceptCookies() {
    cy.get('#onetrust-accept-btn-handler') // Selector for "Accept Cookies" button
      .should('be.visible')
      .click();
  }

  // Click the Trade Nation logo
  clickTradeNationLogo() {
    cy.get('img[loading="lazy"][width="2658"]') 
      .should('be.visible')
      .click();
  }

  // Retrieve the page title
  getPageTitle() {
    return cy.title(); // Get the current page title
  }
}

module.exports = new TradeNationPage();
