import 'cypress-file-upload';
import "@cypress-audit/lighthouse/commands";

Cypress.Commands.add("openPlayersTab", () => {
    cy.visit("https://dareit.futbolkolektyw.pl/pl/login?redirected=true");
    cy.get("#login").type("user01@getnada.com", {delay: 10});
    cy.get("#password").type("Test-1234", {delay: 10});
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


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
