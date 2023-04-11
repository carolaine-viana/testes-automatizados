/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Contact_US_PO extends Base_PO {
  elements = {
    comment_textField: () => cy.get('textarea[placeholder="Comments"]'),
    submit_Button: () => cy.get('[type="submit"]'),
    Submission_Header_Text:  () => cy.xpath('//h1 | //body')
  }

  navigateTo_Contact_Us_Page() {
    super.navigate("Contact-Us/contactus.html");
  }

  type_FirstName(firstName) {
    cy.get('input[placeholder="First Name"]').type(firstName)
  }

  type_LastName(lastName) {
    cy.get('input[placeholder="Last Name"]').type(lastName)
  }

  type_EmailAddress(email) {
    cy.get('input[placeholder="Email Address"]').type(email)
  }

  type_Comment(comment) {
    //cy.get('textarea[placeholder="Comments"]').type(comment)
    this.elements.comment_textField().type(comment)
  }

  clickOn_Submit_Button() {
    //cy.get('input[value="SUBMIT"]').click()
    this.submit_Button().click()
  }

  validate_Submission_Header(expectText){
    this.elements.Submission_Header_Text().contains(expectText) //forma 01
    this.elements.Submission_Header_Text().invoke("text").should('include', expectText) //forma 02
  }
}

export default Contact_US_PO;
