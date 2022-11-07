describe('Test-Prservativos', () => {
    it('prueba del cambio de preservativos', () =>{
        cy.visit('http://localhost:19007/')
        cy.contains('OTRO').click()
        cy.contains('Preservativos').click()
        cy.contains('Anillo Vaginal').click()
    }) 

})