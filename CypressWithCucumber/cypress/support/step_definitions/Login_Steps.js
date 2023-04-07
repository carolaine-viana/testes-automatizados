/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

let stub;

When(`I type a username {}`, (username) => {
  cy.get("#text").type(username);
});

When(`I type a password {}`, (password) => {
  cy.get("#password").type(password);
});

When(`I click on the login button`, () => {
  cy.get("#login-button").click();
  stub = cy.stub();
  cy.on("window:alert", stub);
});

Then(`I Should be presented with an alert box wich contains text {string}`, (expectAlertText) => {
    expect(stub).to.have.been.calledWith(expectAlertText);
  }
);
