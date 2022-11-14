const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  projectId: 'v4demp',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
//       on('file:preprocessor', webpackPreprocessor);
       allureWriter(on, config);
                  return config;
    },

            env: {
                allureReuseAfterSpec: true
            }
  },
});
