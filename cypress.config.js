const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  env: {
    MAILOSAUR_API_KEY: "HbB6M91gR7T839U4MFDEVBtrkHaiUo1b",
  },
});
