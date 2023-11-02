describe('User Can Open Login Page', () => {
  it('User can open login page', () => {
    cy.visit('http://localhost:8000/');
    cy.get("h4").should("contain", "Login");
    cy.get("h4").should("have.text", "Login");
  })
})

// describe('Test Scenarion', () => {
//   it('Test Case 1', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })