Cypress.Commands.add('clickAndOpenLinks', (selector) => {
  cy.get(selector).invoke("removeAttr", "target").click()
})
