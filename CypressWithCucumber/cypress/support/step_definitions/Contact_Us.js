/// <reference types="cypress" />
import {When, Then} from "@badeball/cypress-cucumber-preprocessor";

//example 01 - positive scenarios

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

Then(`U should be presented with a successfull contact us submission message`, () => {
  cy.get('h1').should('have.text', 'Thank You for your Message!')
});

//example 02 - negative scenarios

Then(`U should be presented with a unsuccessfull contact us submission message`, () => {
  cy.get('body').contains('Error: Invalid email address')
});

//example 03 - using random data

When(`I type a specific first name {string}`, (firstName) => {
  cy.get('input[placeholder="First Name"]').type(firstName)
});

When(`I type a specific last name {string}`, (lastName) => {
  cy.get('input[placeholder="Last Name"]').type(lastName)
});

When(`I type a specific email address {string}`, (email) => {
  cy.get('input[placeholder="Email Address"]').type(email)
});

When(`I type a specific word {string} and number {int} within the comment input field`, (word, number) => {
  cy.get('textarea[placeholder="Comments"]').type(word, number)
});

//example 04 - using scenarios outline

When(`I type a first name {word} and a last name {string}`, (firstName, lastName) => {
  cy.get('input[placeholder="First Name"]').type(firstName);
  cy.get('input[placeholder="Last Name"]').type(lastName);
});

When(`I type a {string} and a comment {string}`, (email, comment) => {
  cy.get('input[placeholder="Email Address"]').type(email)
  cy.get('textarea[placeholder="Comments"]').type(comment)
});

When(`I should be presented with header text {string}`, (message) => {
  cy.xpath('//h1 | //body').contains(message)
});