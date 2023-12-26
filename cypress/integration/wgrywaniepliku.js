/// <reference types="cypress" />

describe("E2E - Wgrywanie pliku", () => {
    it("Wgrywanie pliku do input", () => {
        cy.visit("https://ps.uci.edu/~franklin/doc/file_upload.html")
        cy.get('[name="userfile"]').attachFile("../fixtures/piesek.jpg");
        cy.get("span.filename").should("contain", "piesek.jpg")
    })
})