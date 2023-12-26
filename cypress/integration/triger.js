/// <reference types="cypress" />

describe("E2E - scrolowanie/najechanie", () => {
    it("Najechanie na dany element", () => {
        cy.visit("https://dor-cosmetics.pl/")
        cy.get("#wcmaa-popup-1940").trigger().click()
        cy.on("window:confirm",tresc =>{
            expect(tresc).to.equal("Zgadzam się, wchodzę")
            cy.on("window:confirm", () => true)
        })

        // cy.get('li[id="menu-item-66"]')
        // cy.get('li.menu-item menu-item-type-taxonomy menu-item-object-product_cat, span')
    })
    it("Scrollowanie - do boxa", () =>{
        cy.get('img[src="https://dor-cosmetics.pl/wp-content/uploads/2019/02/stay-gold-1380x380.jpg"]').scrollIntoView();
    })
})