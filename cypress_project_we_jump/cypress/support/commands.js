import loc from '../support/locators'

Cypress.Commands.add('login', (email, password) => { 
    cy.visit(loc.URL.LOGIN_PAGE)
    cy.get(loc.login.email).type(email)
    cy.get(loc.login.pass).type(password)
    cy.get(loc.login.BTN_LOGIN).click({force: true})
 })
