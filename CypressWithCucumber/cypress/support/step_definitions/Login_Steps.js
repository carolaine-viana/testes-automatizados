/// <reference types="cypress" />

import { When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page-objects/Login_PO";

const loginPage = new Login_PO;
let stub;

Given(`I navigate to the webdriveruniversity login page`, () => {
  loginPage.navigateTo_Login_Page()
})

When(`I type a username {}`, (username) => {
  loginPage.type_Username(username)
});

When(`I type a password {}`, (password) => {
  loginPage.type_Password(password)
});

When(`I click on the login button`, () => {
  loginPage.clickOn_Login_Button()

  stub = cy.stub();
  cy.on("window:alert", stub);
});

Then(`I Should be presented with an alert box wich contains text {string}`, (expectAlertText) => {
    expect(stub).to.have.been.calledWith(expectAlertText);
  }
);
