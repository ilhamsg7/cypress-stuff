describe("User Story Delete Data", () => {
  beforeEach(() => {
    // arrage
    cy.visit("http://localhost:8000/");

    // reset database by calling php artisan migrate:fresh --seed
    cy.exec(
      "cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed"
    );

    // act
    cy.get('[data-id="email"]').type("superadmin@gmail.com");
    cy.get('[data-id="password"]').type("password");
    cy.get('[data-id="submit"]').click();

    cy.visit("http://localhost:8000/user-management/user");
  });

  // Positive test case
  it("User can create new User and delete data", () => {
    cy.get(".card-header-action > .btn-icon").click();
    cy.get("#name").type("Fernando Alonso");
    cy.get("#email").type("alonso14@gmail.com");
    cy.get("#password").type("123456789");

    cy.get(".btn-primary").click();

    // assert
    cy.get("p").should("be.visible");
    cy.get("p").should("have.text", "Data Berhasil Ditambahkan");

    /* ==== Generated with Cypress Studio ==== */
    cy.get(":nth-child(4) > .text-right > .d-flex > .ml-2 > .btn").click();
    cy.get(":nth-child(2) > .swal-button").click();

    cy.get("p").should("be.visible");
		cy.get('.alert').should('have.class', 'alert-success');
    cy.get("p").contains("User Deleted Successfully");
    /* ==== End Cypress Studio ==== */
  });

	it("User can cancel delete data", () => {
		cy.get(".table td").contains("user").parent().find("button").contains("Delete").click();

		// Make sure swal is visible
		cy.get(".swal-modal .swal-button-container").should("be.visible");
		cy.get(".swal-modal .swal-button-container").find("button").contains("Cancel").click();

		cy.get('.table td').should('contain', 'user').should("be.visible");
	});

	it("User can delete data without create", () => {
		// cy.get(".table td").contains("user").nextAll().contains("Delete").click();
		// cy.get(".table td").contains("user").parent().contains("Delete").click();
		cy.get(".table td").contains("user").parent().find("button").contains("Delete").click();

		// Make sure swal is visible
		cy.get(".swal-modal .swal-button-container").should("be.visible");
		cy.get(".swal-modal .swal-button-container").find("button").contains("OK").click();

		cy.get("p").should("be.visible");
		cy.get('.alert').should('have.class', 'alert-success');
    cy.get("p").contains("User Deleted Successfully");

		cy.get('table').should('contain', 'user');
	});

	afterEach(() => {
    cy.get('[data-id="menu"]').click();
    cy.get('[data-id="logout-btn"]').click();
  });
});
