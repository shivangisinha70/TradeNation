const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://tradenation.com',
    viewportWidth: 1280,
    viewportHeight: 800,
    supportFile: 'cypress/support/e2e.js', // Path to your support file
  },
});

