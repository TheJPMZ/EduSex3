describe('Test-NavBar', () => {
  it('prueba guias navbar', () => {
    cy.visit('http://localhost:19006/');
    cy.contains('OTRO').click();
    cy.get('[data-testid="guides"]').click();
  });

  it('prueba preguntas navbar', () => {
    cy.visit('http://localhost:19006/');
    cy.contains('OTRO').click();
    cy.get('[data-testid="preser"]').click();
  });

  it('prueba home navbar', () => {
    cy.visit('http://localhost:19006/');
    cy.contains('OTRO').click();
    cy.get('[data-testid="home"]').click();
  });

  it('prueba preser navbar', () => {
    cy.visit('http://localhost:19006/');
    cy.contains('OTRO').click();
    cy.get('[data-testid="questions"]').click();
  });

  it('prueba profile navbar', () => {
    cy.visit('http://localhost:19006/');
    cy.contains('OTRO').click();
    cy.get('[data-testid="profile"]').click();
  });
});
