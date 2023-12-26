/// <reference types="cypress" />

describe("E2E - Asercje", () => {
    it("Asercje expect oraz should", () => {
        cy.visit("https://dor-cosmetics.pl")
        cy.get(".wcmaa-popup-agree").scrollIntoView().click();
        cy.contains("Kontakt").click();
        
        //Weryfikacja tekstu
        cy.get("h3").should("contain", "Dane kontaktowe");
        cy.get("h3").then(zakladka => {
            expect(zakladka).to.contain("Dane kontaktowe")
        })

        // Sprawdzenie czy nie zawiera tekstu
        cy.get("h3").should("not.contain", "bleble");
        cy.get("h3").then(tytul => {
            expect(tytul).not.to.contain()
        })

        //Weryfikacja czy znacznik posiada klase
        cy.get('input[name="your-email"]').eq(0).should("have.class", "wpcf7-form-control");
        cy.get('input[name="your-email"]').eq(0).then(placeholder => {
            expect(placeholder).to.have.class("wpcf7-form-control")
        })

        //Czy element jest widoczny
        cy.get('input[name="your-email"]').should("be.visible");
        // cy.get('input[name="your-email"]').should("not.be.visible"); //czy jest nie widoczny element
        cy.get('input[name="your-email"]').eq(0).then(placeholder => {
            expect(placeholder).to.be.visible;
        })

        //Wryfikacja ilości pobranych elementów
        cy.get("#menu-footer-1").find("li").should("have.length", 4)
        cy.get("#menu-footer-1").find("li").then(pozycje => {
            expect(pozycje).to.have.length(4)        })

        //Weryfikacja wartości css danego elementu
        cy.get("#Footer").should("have.css", "background-color", "rgb(250, 226, 229)")
        cy.get("#Footer").then(kolor => {
            expect(kolor).to.have.css("background-color", "rgb(250, 226, 229)")
        })
    })
})