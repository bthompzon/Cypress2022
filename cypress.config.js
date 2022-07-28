const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'dist/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'dist/support/e2e.js',
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/'
  },
});
