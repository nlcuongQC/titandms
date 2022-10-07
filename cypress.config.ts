import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    specPattern: "cypress/e2e/**/*Tests.{js,jsx,ts,tsx}",
    baseUrl: "https://www.saucedemo.com/",
    experimentalSessionAndOrigin: true,
    supportFile: 'cypress/support/e2e.ts'
  },
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 60000,
  retries: {
    runMode: 2,
    openMode: 1
  },
  video: true,
  screenshotOnRunFailure: true
});
