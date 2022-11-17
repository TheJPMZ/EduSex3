describe('Test-Prservativos', () => {
    it('prueba guias', () =>{
        cy.visit('http://localhost:19006/')
        cy.contains('OTRO').click()
        cy.contains('Guias').click()
    })

    it('prueba guia 1', () =>{
        cy.visit('http://localhost:19006/')
        cy.contains('OTRO').click()
        cy.contains('Guias').click()
        cy.contains('Guia 1').click()
    })

    it('prueba guia 1 - Evaluar', () =>{
        cy.visit('http://localhost:19006/')
        cy.contains('OTRO').click()
        cy.contains('Guias').click()
        cy.contains('Guia 1').click()
        cy.contains('Evaluar').click()
    })

})