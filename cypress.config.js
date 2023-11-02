const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const fs = require('fs');
const path = require('path');


async function setupNodeEvents(on, config) 
{

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  config.specPattern = 
  [
    'cypress/integration/examples/BDD/nop/nop.feature',
  ]
  
  return config;

};

  


module.exports = defineConfig
({
  e2e: 
  {
  
    setupNodeEvents,
    
    testIsolation: false,
    defaultCommandTimeout:80000,
    requestTimeout: 30000,
    pageLoadTimeout:50000,
    viewportWidth: 1500,
    viewportHeight: 900,
    specPattern: "cypress/integration/examples/BDD/nop/nop.feature",

  
  },

  
})
