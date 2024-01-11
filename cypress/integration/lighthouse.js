/// <reference types="cypress" />

///Chceking performances of the website

context("Lighthouse Test", () => {
    beforeEach(() => {
      cy.visit("https://dareit.futbolkolektyw.pl/en/login");
    });
  
    it("Webside test", () => {
      cy.lighthouse({
        accessibility: 40,
        "best-practices": 50,
        seo: 50,
        pwa: 20,
        performance: 50,
      });
    });
  });