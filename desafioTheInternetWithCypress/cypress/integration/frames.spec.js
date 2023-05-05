/// <reference types="cypress" />

describe("tests at loading page", () => {
  beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/nested_frames");
  });

  it("should return the frame text message if frame is top-middle", () => {
    cy.get("frame").then(($iframe) => {
      const $body = $iframe.contents().find("frame");
      if ($body[1].name.includes("middle")) {
        console.log("MIDDLE");
      }
    });
  });
});
