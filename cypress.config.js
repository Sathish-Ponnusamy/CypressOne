const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'v4demp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
