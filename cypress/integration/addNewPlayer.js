/// <reference types="cypress" />

import selectDistrict from "../support/page-object/selectDistrict";
import selectLeg from "../support/page-object/selectLeg";

/// The process of adding a new player to the system

describe("Add a new player", () => {

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
    cy.contains("Add player").click();
    })

    it("Add player fields", function(){
        cy.get('input[name="email"]').type(this.exempleData.email);
        cy.get('input[name="name"]').type(this.exempleData.name);
        cy.get('input[name="surname"]').type(this.exempleData.surname);
        cy.get('input[name="phone"]').type(this.exempleData.phone, {delay:10});
        cy.get('input[name="weight"]').type(this.exempleData.weight);
        cy.get('input[name="height"]').type(this.exempleData.height);
        cy.get('input[name="age"]').type(this.exempleData.age);
        selectLeg.selectAllOption();
        cy.get('input[name="club"]').type(this.exempleData.club);
        cy.get('input[name="level"]').type(this.exempleData.level);
        cy.get('input[name="mainPosition"]').type(this.exempleData.mainPosition);
        cy.get('input[name="secondPosition"]').type(this.exempleData.secondPosition);
        selectDistrict.selectAllOption();
        cy.get('input[name="achievements"]').type(this.exempleData.achievements);
        cy.get('input[name="achievements"]').type(this.exempleData.achievements);
        cy.contains("Add language").click();
        cy.get('input[name="languages[0]"]').type(this.exempleData.languages);
        cy.get('input[name="webLaczy"]').type(this.exempleData.webLaczy);
        cy.get('input[name="web90"]').type(this.exempleData.web90);
        cy.get('input[name="prevClub"]').type(this.exempleData.prevClub);
        cy.contains("Add link to Youtube").click();
        cy.get('input[name="webYT[0]"]').type(this.exempleData.youtube)
        cy.get('button[type="submit"]').click();

        
        
    })

    

})