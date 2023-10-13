// counter_spec.js

describe("Tests for the Quasar Counter App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/#/");
  });

  it("should add a new operand on the 1st click", () => {
    // Vérifier qu'aucun élément operand n'existe initialement
    cy.get(".operand").should("not.exist");

    // Cliquer sur le bouton "Add Operand"
    cy.contains("Add Operand").click();

    // Vérifier qu'un nouvel élément operand a été ajouté
    cy.get(".operand").should("have.length", 1);
  });

  it("should add an operator menu on the 2nd click", () => {
    // Vérifier qu'aucun élément operator menu n'existe initialement
    cy.get(".operator-menu").should("not.exist");

    // Cliquer deux fois sur le bouton "Add Operand"
    cy.contains("Add Operand").click();
    cy.contains("Add Operand").click();

    // Vérifier qu'un nouvel élément operator menu a été ajouté
    cy.get(".operator-menu").should("have.length", 1);
  });

  it("should allow entering values in operand input fields", () => {
    // Sélectionner un champ d'entrée d'opérande et saisir une valeur
    cy.get(".operand input").first().type("123");

    // Vérifier que la valeur a été saisie correctement
    cy.get(".operand input").first().should("have.value", "123");
  });

});
