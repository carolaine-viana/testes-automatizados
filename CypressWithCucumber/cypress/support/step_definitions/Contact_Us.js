/// <reference types="cypress" />
import {When, Then} from "@badeball/cypress-cucumber-preprocessor";

When(`I type a first name`, () => {
  cy.get('input[placeholder="First Name"]').type('Carol')
});

When(`I Type a last name`, () => {
  cy.get('input[placeholder="Last Name"]').type('Viana')
});

When(`I enter an email address`, () => {
  cy.get('input[placeholder="Email Address"]').type('carol@hotmail.com')
});

When(`I type a comment`, () => {
  cy.get('textarea[placeholder="Comments"]').type('Ola ola ola')
});

When(`I click on the submit button`, () => {
  cy.get('input[value="SUBMIT"]').click()
});

Then(`U should be presented with a successfull contact submission message`, () => {
  cy.get('#contact_reply').children('h1').should('contain', 'Thank You for your Message!')
});

Then(`U should be presented with a unsuccessfull contact submission message`, () => {
  cy.get('body').contains('all fields are required')
  cy.get('body').contains('Invalid email address')
});