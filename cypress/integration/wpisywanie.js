/// <reference types="cypress" />

describe("E2E - Akcja wpisywania", () => {
    it("Wpisywanie wartosci w pole", () => {
        cy.visit("/")
        cy.searchPhrase("user@user.pl", 1000)
        // cy.get("#login").type("user01@getnada.com{backspace}", {delay: 500}) 
    })
    
    it("Czyszczenie wartości z pola input", () => {
        cy.get("#login").clear();
        
    })
})