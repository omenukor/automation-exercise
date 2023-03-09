import { defineConfig } from "cypress";
import {addCucumberPreprocessorPlugin} from "@badeball/cypress-cucumber-preprocessor";
import browserify from "@badeball/cypress-cucumber-preprocessor/browserify";

const setupNodeEvents = async (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
  await addCucumberPreprocessorPlugin(on, config)
  on('file:preprocessor',
      browserify(config, {typescript: require.resolve("typescript")})
  );
  return config;
}
export default defineConfig({

  e2e: {
    specPattern: "cypress/e2e/*.feature",
    setupNodeEvents
  },
});
