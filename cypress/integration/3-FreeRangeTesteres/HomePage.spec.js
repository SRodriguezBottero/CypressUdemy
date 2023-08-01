describe('Home de www.freerangetesters.com', () => {
    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com/')
    })

    it('should have a title', () => {
        cy.title().should('include', 'Free Range Testers')
    })
})