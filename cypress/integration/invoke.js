/// <reference types="cypress" />

describe("E2E - Metoda Invoke", () => {
    it("Invoke", () => {
        cy.visit("/")

        // Pobieranie wartości z danego elementu
        cy.contains('[class="MuiTypography-root MuiLink-root MuiLink-underlineHover jss4 MuiTypography-colorPrimary"]', 'Przypomnij hasło').invoke("text").then(tekst => {
            cy.log(tekst)
        })

        //Uzyskanie dostepu do wartości atrybutu
        cy.contains('[class="MuiTypography-root MuiLink-root MuiLink-underlineHover jss4 MuiTypography-colorPrimary"]', 'Przypomnij hasło').invoke("attr", "tabindex").then(Boolean => {
            cy.log(Boolean)
        })
        
        //Pobieranie wartości
        cy.get("#login").type("Przykładowa wartość").invoke("prop", "value").then(wartosc => {
            cy.log(wartosc)
        })

    })
})