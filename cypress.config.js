const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://devall.com.br',
    setupNodeEvents(on, config) {
      require('cypress-html-reporter/GenerateReport')(on, config)
    },
  },
});
