/// <reference types="cypress" />

describe("tests at loading page", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/dynamic_loading/2");
  });

  it("should contain the message Hello World after the loading", () => {
    cy.get("button").click();
    cy.get("#finish > h4", { timeout: 5000 }).should("contain", "Hello World!");
  });
});
