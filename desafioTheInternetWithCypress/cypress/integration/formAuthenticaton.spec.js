/// <reference types="cypress" />

describe('tests at login page', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login')
  })

  it('should login with success', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('SuperSecretPassword!')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'You logged into a secure area!')

    cy.get('.button').click()
  })

  it('should return error if login is invalid', () => {
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('123')
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'Your password is invalid!')
  })

  it('should return error if login input is empty', () => {
    cy.get('.radius').click()
    cy.get('#flash').should('contain', 'Your username is invalid!')
  })
  
})
