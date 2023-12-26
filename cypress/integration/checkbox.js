/// <reference types="cypress" />

describe("E2E - Akcja kliknięcia checkbox", () => {
    it("Kliknięcie na element", () => {
        cy.visit("/")
        cy.get('.bapf_body').find("input").then(checkbox => {
            cy.get(checkbox).eq(0).check({force: true}); //force sprawia że checkbox zostaje zaklikany mimo że coś innego go zasłania tutaj (na stronie dor) był to baner 
            cy.get(checkbox).eq(1).invoke("prop", "checked").then(zaznaczony => {
                cy.log(zaznaczony)})
            cy.get(checkbox).eq(2);
            cy.get(checkbox).eq(3);
            cy.get(checkbox).eq(4);
            cy.get(checkbox).eq(5).check({force: true});

        })
       
    })
})