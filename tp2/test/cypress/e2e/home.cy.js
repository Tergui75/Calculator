// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

// ** This file is an example of how to write Cypress tests, you can safely delete it **

// This test will pass when run against a clean Quasar project
describe("Tests for the Quasar Counter App", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("the counter must go up when clicking on the button", () => {
    cy.get('#counter_A  [data-cy="btn-up"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 1);
  });
  it("the counter must go down when clicking on the button", () => {
    cy.get('#counter_A  [data-cy="btn-dn"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", -1);
  });
  it("the counter results must be correct", () => {
    const letters = ["A", "B"];
    letters.forEach((letter) => {
      cy.get(`#counter_${letter}`)
        .find('[data-cy="btn-up"]')
        .click()
        .click()
        .click();
      cy.get(`#counter_${letter}`)
        .find('[data-cy="input"]')
        .should("have.value", 3);
    });
    const operators = [
      ["+", 6],
      ["-", 0],
      ["*", 9],
      ["/", 1],
    ];
    operators.forEach(([operator, result]) => {
      cy.dataCy("select").click();
      cy.dataCy("select").get(`[label="${operator}"]`).click();
      cy.get('[data-cy="total"]').should("have.text", result);
    });
  });
});
