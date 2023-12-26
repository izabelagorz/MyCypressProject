class SelectPage {
    get select() {
        return cy.get("#mui-component-select-district");
    }

    get option() {
        return cy.get('li[role="option"]');
    }

    selectAllOption() {
        this.select.click()
        this.option.eq(0).click();
        this.select.click()
        this.option.eq(1).click();
        this.select.click()
        this.option.eq(2).click();
        this.select.click()
        this.option.eq(3).click();
        this.select.click()
        this.option.eq(4).click();
        this.select.click()
        this.option.eq(5).click();
        this.select.click()
        this.option.eq(6).click();
        this.select.click()
        this.option.eq(7).click();
        this.select.click()
        this.option.eq(8).click();
        this.select.click()
        this.option.eq(9).click();
        this.select.click()
        this.option.eq(10).click();
        this.select.click()
        this.option.eq(11).click();
        this.select.click()
        this.option.eq(12).click();
        this.select.click()
        this.option.eq(13).click();
        this.select.click()
        this.option.eq(14).click();
        this.select.click()
        this.option.eq(15).click();
    
    }
}

export default new SelectPage();