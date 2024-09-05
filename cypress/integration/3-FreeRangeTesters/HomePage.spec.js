describe('Home de www.freerangetesters.com', () => {
    beforeEach(() => {
        cy.visit('https://www.freerangetesters.com/')
    })

    it('should have a title', () => {
        cy.title().should('include', 'Free Range Testers')
        cy.xpath('//*[@id="comp-l02x1m8d1label"]').click()
        cy.contains('Iniciar Sesión')
    })
})