/// <reference types="cypress" />
import {When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
import Contact_US_PO from "../page-objects/Contact_US.PO";

const contactUs = new Contact_US_PO;

//example 01 - positive scenarios

Given(`I navigate to the webdriveruniversity contact us page`, () => {
  contactUs.navigateTo_Contact_Us_Page()
});

When(`I type a first name`, () => {
  //cy.get('input[placeholder="First Name"]').type('Carol')
  contactUs.type_FirstName('Carol')
});

When(`I Type a last name`, () => {
  //cy.get('input[placeholder="Last Name"]').type('Viana')
  contactUs.type_LastName('Viana')
});

When(`I enter an email address`, () => {
  //cy.get('input[placeholder="Email Address"]').type('carol@hotmail.com')
  contactUs.type_EmailAddress('carol@hotmail.com')
});

When(`I type a comment`, () => {
  //cy.get('textarea[placeholder="Comments"]').type('Ola ola ola')
  contactUs.type_Comment('Ola ola ola')
});

When(`I click on the submit button`, () => {
  cy.get('input[value="SUBMIT"]').click()
  //contactUs.clickOn_Submit_Button()
});

Then(`U should be presented with a successfull contact us submission message`, () => {
  //cy.get('h1').should('have.text', 'Thank You for your Message!')
  contactUs.validate_Submission_Header('Thank You for your Message!')
});

//example 02 - negative scenarios
Then(`U should be presented with a unsuccessfull contact us submission message`, () => {
  //cy.get('body').contains('Error: Invalid email address')
  contactUs.validate_Submission_Header('Error: Invalid email address')
});

//example 03 - using random data

When(`I type a specific first name {string}`, (firstName) => {
  //cy.get('input[placeholder="First Name"]').type(firstName)
  contactUs.type_FirstName(firstName)
});

When(`I type a specific last name {string}`, (lastName) => {
  //cy.get('input[placeholder="Last Name"]').type(lastName)
  contactUs.type_LastName(lastName)
});

When(`I type a specific email address {string}`, (email) => {
  //cy.get('input[placeholder="Email Address"]').type(email)
  contactUs.type_EmailAddress(email)
});

When(`I type a specific word {string} and number {int} within the comment input field`, (word, number) => {
  //cy.get('textarea[placeholder="Comments"]').type(word, number)
  contactUs.type_Comment(word, number)
});

//example 04 - using scenarios outline

When(`I type a first name {word} and a last name {string}`, (firstName, lastName) => {
  // cy.get('input[placeholder="First Name"]').type(firstName);
  // cy.get('input[placeholder="Last Name"]').type(lastName);

  contactUs.type_FirstName(firstName)
  contactUs.type_LastName(lastName)
});

When(`I type a {string} and a comment {string}`, (email, comment) => {
  // cy.get('input[placeholder="Email Address"]').type(email)
  // cy.get('textarea[placeholder="Comments"]').type(comment)
  contactUs.type_EmailAddress(email)
  contactUs.type_Comment(comment)
});

When(`I should be presented with header text {string}`, (message) => {
  //cy.xpath('//h1 | //body').contains(message)
  contactUs.validate_Submission_Header(message)
});