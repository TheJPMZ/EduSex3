describe('Test-Prservativos', () => {
    it('prueba anillo Vaginal', () =>{
        cy.visit('http://localhost:19007/')
        cy.contains('OTRO').click()
        cy.contains('Preservativos').click()
        cy.contains('Anillo Vaginal').click()
    }) 

    it('prueba Capuchón Cervical', () =>{
        cy.visit('http://localhost:19007/')
        cy.contains('MASCULINO').click()
        cy.contains('Preservativos').click()
        cy.contains('Capuchón Cervical').click()
    }) 

    it('prueba Condón Femenino', () =>{
        cy.visit('http://localhost:19007/')
        cy.contains('FEMENINO').click()
        cy.contains('Preservativos').click()
        cy.contains('Condón Femenino').click()
    }) 

    it('prueba Condón Masculino', () =>{
        cy.visit('http://localhost:19007/')
        cy.contains('OTRO').click()
        cy.contains('Preservativos').click()
        cy.contains('Condón Masculino').click()
    }) 

    it('prueba Diafragma', () =>{
        cy.visit('http://localhost:19007/')
        cy.contains('MASCULINO').click()
        cy.contains('Preservativos').click()
        cy.contains('Diafragma').click()
    }) 

    it('prueba  Espermicida y Gel', () =>{
        cy.visit('http://localhost:19007/')
        cy.contains('FEMENINO').click()
        cy.contains('Preservativos').click()
        cy.contains('Espermicida y Gel').click()
    }) 

    it('prueba  Esponja Anticonceptiva', () =>{
        cy.visit('http://localhost:19007/')
        cy.contains('OTRO').click()
        cy.contains('Preservativos').click()
        cy.contains('Esponja Anticonceptiva').click()
    }) 

    it('prueba Inyección Anticonceptiva', () =>{
        cy.visit('http://localhost:19007/')
        cy.contains('MASCULINO').click()
        cy.contains('Preservativos').click()
        cy.contains('Inyección Anticonceptiva').click()
    }) 
    it('prueba  Parche Anticonceptivo', () =>{
        cy.visit('http://localhost:19007/')
        cy.contains('FEMENINO').click()
        cy.contains('Preservativos').click()
        cy.contains('Parche Anticonceptivo').click()
    }) 

    it('prueba Pastilla', () =>{
        cy.visit('http://localhost:19007/')
        cy.contains('OTRO').click()
        cy.contains('Preservativos').click()
        cy.contains('Pastilla').click()
    }) 

})