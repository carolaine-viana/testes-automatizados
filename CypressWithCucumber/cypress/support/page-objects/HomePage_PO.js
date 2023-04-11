/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class HomePage_PO extends Base_PO {
  navigateToHomePage(){
    super.navigate("")
  }

  clickOn_ContactUs_Button(){
    cy.clickAndOpenLinks('#contact-us')
  }

  clickOn_Login_Button(){
    cy.clickAndOpenLinks('#login-portal')
  }
}

export default HomePage_PO;