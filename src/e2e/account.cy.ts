describe('Account Tests', () => {


  it('User can login/logout', () => {
    cy.get('button#react-burger-menu-btn').click();
    cy.get('a#logout_sidebar_link').contains('Logout').click();
    cy.get('input#login-button[type="submit"]').should('has.value', 'Login');
  });
});