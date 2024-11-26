const TradeNationPage = require('../pages/TradeNationPage');

describe('Trade Nation Page Title Test', () => {
  it('should accept cookies, click the logo, and confirm the page title', () => {
    // Open the page
    TradeNationPage.open();
    // Accept Cookies
    TradeNationPage.acceptCookies();
    // Click the Trade Nation Logo
    TradeNationPage.clickTradeNationLogo();
    // Assert the Page Title
    TradeNationPage.getPageTitle().should(
      'eq',
      'Trade Nation UK – Low-Cost Spread Betting and Forex Broker' // Expected title
    );
  });
});
