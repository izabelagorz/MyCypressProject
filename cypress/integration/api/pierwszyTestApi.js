/// <reference types="cypress" />

describe("E2E - Testy Api", () => {
    beforeEach(function() {
        cy.fixture("example").then(data => {
            this.daneApi = data;
        })
    })
    it("Weryfikacja tagów API", function() {
        cy.intercept("GET", "https://api.realworld.io/api/tags").as("requestTag");
        cy.visit("https://angularjs.realworld.io/#/");
        cy.wait("@requestTag")
        cy.get("@requestTag").then(res => {
            console.group(res)
            expect(res.response.statusCode).to.equal(200)
            expect(res.response.body.tags).to.contain("welcome").and.to.contain("implementations")
        })
    })

    it("Niepoprawne logowanie", function() {
        cy.intercept("POST", "https://api.realworld.io/api/users/login").as("requestLogin")
        cy.get("a.nav-link").contains("Sign in").click();
        cy.login("test@1234test", "123!");
        cy.wait("@requestLogin")
        cy.get("@requestLogin").then(res => {
            console.log(res)
            expect(res.response.statusCode).to.equal(403)
            expect(res.response.statusMessage).to.contain(this.daneApi.statusMessage403)
            // cy.fixture("example").then(data => {
            //     expect(res.response.statusMessage).to.contain(data.statusMessage403)

        })
    })

    it("Poprawne logowanie", function()  {
        cy.intercept("GET", "https://api.realworld.io/api/tags", { fixture: 'tags.json' }).as("requestTag");
        cy.login("zacnieskadrowane@gmail.com", "sAmAntA6");
        cy.wait("@requestTag")
        

    })
})