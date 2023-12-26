/// <reference types="cypress" />

describe("E2E - Akcja kliknięcia", () => {
    it("Kliknięcie na element", () => {
        cy.visit("/")
        cy.contains('[class="MuiTypography-root MuiLink-root MuiLink-underlineHover jss4 MuiTypography-colorPrimary"]', 'Przypomnij hasło').click();
        cy.contains('Wróć do zaloguj').click();
    })
})