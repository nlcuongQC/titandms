import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*Tests.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl: "https://www.saucedemo.com/",
    experimentalSessionAndOrigin: true,
    supportFile: 'cypress/support/e2e.ts',
  },
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 60000,
  retries: {
    runMode: 2,
    openMode: 1
  },
  video: true,
  screenshotOnRunFailure: true,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
