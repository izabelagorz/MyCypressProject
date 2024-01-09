import 'cypress-file-upload';
import "@cypress-audit/lighthouse/commands";

Cypress.Commands.add("openPlayersTab", () => {
    cy.visit("https://dareit.futbolkolektyw.pl/pl/login?redirected=true");
    cy.get("#login").click().type(this.exempleData.incorrectLogin);
    cy.get("#password").click().type(this.exempleData.incorrectPassword);
    cy.get(".MuiButton-label").eq(0).click();
    cy.contains("Gracze").click();
})

Cypress.Commands.add("searchPhrase", (text, delayValue) => {
    cy.get("#login").type(text, {delay: delayValue}) 
})



Cypress.Commands.add("login", (email,password) => {
    cy.get('[placeholder="Email"]').clear(email);
    cy.get('[placeholder="Password"]').clear(password);
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.get('[type="submit"]').click();

})



Cypress.Commands.add("login", () => {
beforeEach(function() {
    cy.fixture("inputData").then(data => {
        this.exempleData = data;
    })
})

cy.get("#login").click().type(this.exempleData.incorrectLogin);
    cy.get("#password").click().type(this.exempleData.incorrectPassword);
    cy.get(".MuiButton-label").eq(0).click();

})

