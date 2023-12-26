/// <reference types="cypress" />

import SelectPage from "../support/page-object/selectPage";

describe("E2E - Akcja wybierania opcji", () => {
    it("Kliknięcie na element", () => {
        cy.visit("https://dareit.futbolkolektyw.pl/pl/login?redirected=true");
        cy.get("#login").type("user01@getnada.com", {delay: 10}) ;
        cy.get("#password").type("Test-1234", {delay: 10}) ;
        cy.get(".MuiButton-label").eq(0).click();
        cy.contains("Dodaj gracza").click();
        cy.get("#mui-component-select-district").click()
        cy.get('li[role="option"]').eq(0).click();
    
        
    })
})