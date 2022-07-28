describe('Account Tests', () => {
  it('User can login', () => {
    cy.visit(Cypress.config().baseUrl);
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('input.submit-button[type="submit"]').click();
    cy.get('span.title').should('have.text', 'Products');
  })
})