class clickSingin {
    select() {
        return cy.contains("Sign in").click()
    }
}

export default new clickSingin();