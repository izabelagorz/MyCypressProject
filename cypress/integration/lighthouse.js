/// <reference types="cypress" />

context("Lighthouse Test", () => {
    beforeEach(() => {
      cy.visit("https://dareit.futbolkolektyw.pl");
    });
  
    it("test pierwszej strony", () => {
      cy.lighthouse({
        accessibility: 40,
        "best-practices": 50,
        seo: 50,
        pwa: 20,
        performance: 50,
      });
    });
  });