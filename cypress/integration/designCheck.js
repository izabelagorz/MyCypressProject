
/// <reference types="cypress" />

/// Checking that the colors and fonts are compatible with the design

describe("Design check", () => {


    it("Colour check", function() {
        cy.visit("/");
        //Sign in button
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained jss5 MuiButton-containedPrimary"]').should("have.css", "background-color", "rgb(63, 81, 181)")
        cy.get('button[class="MuiButtonBase-root MuiButton-root MuiButton-contained jss5 MuiButton-containedPrimary"]').then(kolor => {
            expect(kolor).to.have.css("background-color", "rgb(63, 81, 181)")
        })
        //Remaind password
        cy.get('a[class="MuiTypography-root MuiLink-root MuiLink-underlineHover jss4 MuiTypography-colorPrimary"]').should("have.css", "color", "rgb(63, 81, 181)")
        cy.get('a[class="MuiTypography-root MuiLink-root MuiLink-underlineHover jss4 MuiTypography-colorPrimary"]').then(kolor => {
            expect(kolor).to.have.css("color", "rgb(63, 81, 181)")
        })
        cy.get('a[class="MuiTypography-root MuiLink-root MuiLink-underlineHover jss4 MuiTypography-colorPrimary"]').should("have.css", "font-size", "14px")
        cy.get('a[class="MuiTypography-root MuiLink-root MuiLink-underlineHover jss4 MuiTypography-colorPrimary"]').then(kolor => {
            expect(kolor).to.have.css("font-size", "14px")
        })
        //Title
        cy.get("h5").should("have.css", "font-size", "24px")
        cy.get("h5").then(kolor => {
            expect(kolor).to.have.css("font-size", "24px")
        })
        cy.get("h5").should("have.css", "color", "rgba(0, 0, 0, 0.87)")
        cy.get("h5").then(kolor => {
            expect(kolor).to.have.css("color", "rgba(0, 0, 0, 0.87)")
        })
    })

})






