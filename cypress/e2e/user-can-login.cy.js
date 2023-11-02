describe('User can login to system', () => {
  // Positive Scenario
  it('user can login with valid Email and password', () => {
    // arrage
    cy.visit('http://localhost:8000/');

    // act
    // cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    // cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    cy.get('[data-id="password"]').type("password");
    // cy.get('.btn').click();
    cy.get('[data-id="submit"]').click();

    // assert
    cy.get('.nav-link > .d-sm-none').should("have.text", "Hi, SuperAdmin");
  })

  // Keyword only untuk test spesifik

  // Negative Scenario
  it('user cannot login with valid Email and invalid password', () => {
    // arrage
    cy.visit('http://localhost:8000/');

    // act
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    cy.get('[data-id="password"]').type("password!");
    cy.get('.btn').click();

    // assert
    cy.get('.invalid-feedback').should("have.text", "These credentials do not match our records.");
  })

  // Negative Scenario
  it('user cannot login with invalid Email and valid password', () => {
    // arrage
    cy.visit('http://localhost:8000/');

    // act
    cy.get('[data-id="email"]').type("superadmin!@gmail.com");
    cy.get(':nth-child(3) > .form-control').type("password");
    cy.get('.btn').click();

    // assert
    cy.get('.invalid-feedback').should("have.text", "These credentials do not match our records.");
  })

  it('user cannot login with empty Email and correct password', () => {
    // arrage
    cy.visit('http://localhost:8000/');

    // act
    cy.get(':nth-child(2) > .form-control');
    cy.get('[data-id="password"]').type("password");
    cy.get('.btn').click();

    // assert
    cy.get('.invalid-feedback').should("have.text", "The email field is required.");
  })

  it('user cannot login with Email and incorrect password', () => {
    // arrage
    cy.visit('http://localhost:8000/');

    // act
    cy.get('[data-id="email"]').type("superadmin!@gmail.com");
    cy.get('[data-id="password"]');
    cy.get('.btn').click();

    // assert
    cy.get('.invalid-feedback').should("have.text", "The password field is required.");
  })

  it('user can login with valid Email and password but wrong role', () => {
    // arrage
    cy.visit('http://localhost:8000/');

    // act
    cy.get(':nth-child(2) > .form-control').type("superadmin@gmail.com");
    cy.get('[data-id="password"]').type("password");
    cy.get('.btn').click();

    // assert
    cy.get('.nav-link > .d-sm-none').should("not.have.text", "Hi, Admin");
  })
})