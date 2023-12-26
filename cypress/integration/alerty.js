/// <reference types="cypress" />

import alertPage from "../support/page-object/alertPage";

describe("E2E - Alerty", () => {
    it("Alert", () => {
        cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
        alertPage.clickOnBtnAlert1();
        alertPage.verifyAlertText("Przykładowa treść alertu");
    })

    it("Alert - confirm", () => {
        alertPage.clickOnBtnAlert2();
        alertPage.verifyAlertConfirmText();
        alertPage.acceptAlert();
    })
})

// describe("E2E - Alerty", () => {
//     it("Alert", () => {
//         cy.visit("https://testowanie-oprogramowania.pl/lekcje/alerty/")
//         cy.get("#alert").click();
//         cy.on("window:alert", tresc => {
//         expect(tresc).to.equal("Przykładowa treść alertu")
//     })
    
//     it("Alert - confirm", () => {
//         cy.get("#alert-confirm").click();
//         cy.on("window:confirm", tresc => {
//         expect(tresc).to.equal("Zaakceptuj aby kontynuować!")
//      cy.on("window:confirm", () => true)
//     })