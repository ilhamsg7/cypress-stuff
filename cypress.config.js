const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure: true,
  video: false,
  watchForFileChanges: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  experimentalStudio: true,
  e2e: {
    setupNodeEvents(on, config) {

    },
  },
});
