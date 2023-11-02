describe('User login then logout', () => {
  it('User can login then logout', () => {
    // arrage
    cy.visit('http://localhost:8000/');

    // act
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    cy.get('[data-id="password"]').type("password");
    cy.get('[data-id="submit"]').click();

    // assert
    cy.get('[data-id="username"]').should("have.text", "Hi, SuperAdmin");
    cy.get('[data-id="menu"]').click();
    cy.get('[data-id="logout-btn"]').click();

    /* ==== Generated with Cypress Studio ==== */
    // cy.get(':nth-child(2) > .form-control').clear('superadmin@gmail.com');
    // cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    // cy.get(':nth-child(3) > .form-control').clear('p');
    // cy.get(':nth-child(3) > .form-control').type('password');
    // cy.get('.btn').click();
    // cy.get('.nav-link > .d-sm-none').click();
    // cy.get('.text-danger').click();
    /* ==== End Cypress Studio ==== */
  })
})