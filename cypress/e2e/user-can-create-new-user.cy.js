describe('User Login and Create new User', () => {
  before(() => {
    cy.log('Runs once before all tests in the block')
  });

  after(() => {
    cy.log('Runs once after all tests in the block')
});

  beforeEach(() => {
    // arrage
    cy.visit('http://localhost:8000/');

    // reset database by calling php artisan migrate:fresh --seed
    cy.exec('cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed');

    // act
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    cy.get('[data-id="password"]').type("password");
    cy.get('[data-id="submit"]').click();

    cy.visit('http://localhost:8000/user-management/user');
    cy.get('.card-header-action > .btn-icon').click();
  });

  afterEach(() => {
    cy.get('[data-id="menu"]').click();
    cy.get('[data-id="logout-btn"]').click();
  });

  it('User can create new User', () => {
    cy.get('#name').type('Fernando Alonso');
    cy.get('#email').type('alonso14@gmail.com');
    cy.get('#password').type('123456789');

    cy.get('.btn-primary').click();

    // assert
    cy.get('p').should('be.visible');
    cy.get('p').should('have.text', 'Data Berhasil Ditambahkan');
  });    

  it("user cannot create new user because invalid email", () => {
    cy.get('#name').type('Fernando Alonso');
    cy.get('#email').type('alonso14.com');
    cy.get('#password').type('123456789');
    cy.get('.btn-primary').click();
    
    //assert
    cy.get(".invalid-feedback").should("be.visible");
    cy.get(".invalid-feedback").should(
        "contain", 
        "The email must be a valid email address."
        );
    cy.get(".invalid-feedback").should("have.class", "invalid-feedback");
  });
})