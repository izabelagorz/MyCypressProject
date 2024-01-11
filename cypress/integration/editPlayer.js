/// <reference types="cypress" />

/// Editing data in exshisting player

describe("Edit existing player", () => {

    beforeEach(function() {
        cy.fixture("inputData").then(data => {
            this.exempleData = data;
        })
    })

    it("Login", function() {
        cy.visit("/");
    cy.get("#login").click().type(this.exempleData.login);
    cy.get("#password").click().type(this.exempleData.password);
    cy.get(".MuiButton-label").eq(0).click();
    })

    it("Edit player", function() {
        cy.contains("Activity").get("a").eq(2).click();
        cy.get('input[name="name"]').clear(this.exempleData.name);
        cy.get('input[name="name"]').type(this.exempleData.editName);
        cy.get('input[name="surname"]').clear(this.exempleData.surname);
        cy.get('input[name="surname"]').type(this.exempleData.editSurname);
        cy.get('input[name="phone"]').clear(this.exempleData.phone, {delay:10});
        cy.get('input[name="phone"]').type(this.exempleData.editPhone, {delay:10});
        cy.get('input[name="prevClub"]').clear(this.exempleData.prevClub);
        cy.get('input[name="prevClub"]').type(this.exempleData.editPrevClub);
        cy.get('button[type="submit"]').click();
        cy.get('div[class="Toastify__toast Toastify__toast--success"]').click();
        cy.get("span").contains("Main page").click();
        cy.contains("Activity").get("a").eq(2).click();
        
        
    })

    it("Assertion of edit player", function() {
        cy.get('span[class="MuiTypography-root MuiListItemText-primary MuiTypography-body1 MuiTypography-displayBlock"]').should("contain", "Karol Wieczorek")
    })

})
