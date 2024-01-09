class SelectLeg {
    get select() {
        return cy.get("#mui-component-select-leg");
    }

    get option() {
        return cy.get('li[role="option"]');
    }

    selectAllOption() {
        this.select.click()
        this.option.eq(0).click();
        this.select.click()
        this.option.eq(1).click();
        
    }
}

export default new SelectLeg();