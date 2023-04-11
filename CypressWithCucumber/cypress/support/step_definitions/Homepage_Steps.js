/// <reference types="cypress" />

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";
import HomePage_PO from "../page-objects/HomePage_PO";

const homePage = new HomePage_PO()

Given('I navigate to the webdriveruniversity homepage', () => {
    homePage.navigate("");
})

When('I click on the contact us button', () => {
  homePage.clickOn_ContactUs_Button()
})

When('I click on the login portal button', () => {
  homePage.clickOn_Login_Button()
})
