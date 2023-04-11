/// <reference types="cypress" />

import {When, Before, After} from "@badeball/cypress-cucumber-preprocessor";

Before(({tags: "@smoke"}), () => {
  cy.clearLocalStorage()
})

After(() => {

})

When("I wait {int} seconds", (seconds) => {
  cy.wait(seconds*1000)
})