describe('UTS User Edit Data', () => {
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
  it("User Can Edit Data", () => {
    cy.get(".table td").contains("user").parent().find("a").contains("Edit").click();
    cy.get("#name").clear("user")
    cy.get("#name").type("Sebastian Vettel");

    cy.get("#email").clear("user@gmail")
    cy.get("#email").type("vettel5@gmail.com");
    // cy.get("#email").type("vettel5@gmail.com");

    cy.get(".btn-primary").contains("Submit").click();

    // assert
    cy.get("p").should("be.visible");
    cy.get("p").contains("User Berhasil Diupdate");
    cy.get(".alert").should("have.class", "alert-success");
    cy.get(".alert-success").should("be.visible");
    cy.get("table").contains("Sebastian Vettel").should("be.visible");
  });

  it("User Can Edit New Data", () => {
    cy.get(".table td").contains("Baru").parent().find("a").contains("Edit").click();
    cy.get("#name").clear("User Baru")
    cy.get("#name").type("Sebastian Vettel");

    cy.get("#email").clear("polinema@gmail")
    cy.get("#email").type("vettel5@gmail.com");
    // cy.get("#email").type("vettel5@gmail.com");

    cy.get(".btn-primary").contains("Submit").click();

    // assert
    cy.get("p").should("be.visible");
    cy.get("p").contains("User Berhasil Diupdate");
    cy.get(".alert").should("have.class", "alert-success");
    cy.get(".alert-success").should("be.visible");
    cy.get("table").contains("Sebastian Vettel").should("be.visible");
  });
})