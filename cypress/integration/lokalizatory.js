/// <reference types="cypress" />

describe("E2E - Lesson", () => {
    it("Lokalizatory", () => {
        cy.visit('/')

        //Po znaczniku
        cy.get("div");
        //Identyfikator 
        cy.get("#login")
        //Klasa
        cy.get(".MuiLink-underlineHover")
        //Atrybut
        cy.get('[name="password"]')
        //Dokładniejszy atrybut wraz zpodaniem znacznika
        cy.get('input[type="password"]')
        //Pobieranie elementów po kilku atrybutach
        // cy.get('[src="https://testelka.pl/wp-content/uploads/LinkTextSelector.png"][width="381"]')

        //Zalecana praktyka pobierania elementów
        //Atrybuty stworzone specialnie na potrzeby testów zapisane w znaczniku
    })

    it("Lokalizatory część 2", () => {
        cy.contains("Przypomnij hasło")
        cy.contains('Polski')
        cy.get("div").parents("#login-label")
        // cy.contains('[title="contact us"', 'contact us')
    })

})

