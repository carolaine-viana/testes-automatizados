/// <reference types="cypress" />

import {When, Before} from "@badeball/cypress-cucumber-preprocessor";

Before(({tags: "@smoke"}), () => {
  cy.clearLocalStorage()
})

When("I wait {int} seconds", (seconds) => {
  cy.wait(seconds*1000)
})