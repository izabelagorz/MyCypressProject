/// <reference types="cypress" />

//The test is to verify that incorrectly entered data will trigger a message and that the server will show the correct error code

describe("E2E - Failed Login", () => {

    beforeEach(function() {
        cy.fixture("inputData").then(data => {
            this.exempleData = data;
        })
    })

    it("Failed Login", function() {
        cy.intercept("POST", "https://api.scouts-test.futbolkolektyw.pl/auth/local").as("requestLogin")
        cy.visit("/")
        cy.get("#login").click().type(this.exempleData.incorrectLogin)
        cy.get("#password").click().type(this.exempleData.incorrectPassword)
        cy.contains("Sign in").click();
        cy.get('span[class="MuiTypography-root MuiTypography-caption MuiTypography-colorError MuiTypography-gutterBottom"]').then(function(textValidation) {
            expect(textValidation).to.have.contain(this.exempleData.validationInfo)
            cy.wait("@requestLogin")
            cy.get("@requestLogin").then(res => {
                console.log(res)
                expect(res.response.statusCode).to.equal(400)  
            })  

        })
    })

})