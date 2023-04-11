/// <reference types="cypress" />

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
//import Base_PO from "../page-objects/Base_PO";
import HomePage_PO from "../page-objects/HomePage_PO";

//const basePage = new Base_PO()
const homePage = new HomePage_PO()

Given('I navigate to the webdriveruniversity homepage', () => {
    //cy.visit(url)
    //basePage.navigate()
    homePage.navigate("");
})

When('I click on the contact us button', () => {
  //cy.clickAndOpenLinks('#contact-us')
  homePage.clickOn_ContactUs_Button()
})

When('I click on the login portal button', () => {
  //cy.clickAndOpenLinks('#login-portal')
  homePage.clickOn_Login_Button()
})
