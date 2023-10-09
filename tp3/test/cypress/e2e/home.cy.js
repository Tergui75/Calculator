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
  it("the counter must be reset when clicking on the button", () => {
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
      cy.get(`#counter_${letter}`).find('[data-cy="btn-reset"]').click();
      cy.get(`#counter_${letter}`)
        .find('[data-cy="input"]')
        .should("have.value", 0);
    });
  });
  it("the counter must save the value when clicking on the button", () => {
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
      cy.get(`#counter_${letter}`).find('[data-cy="btn-save"]').click();
      cy.get(`#counter_${letter}`).find('[data-cy="btn-reset"]').click();
      cy.get(`#counter_${letter}`)
        .find('[data-cy="input"]')
        .should("have.value", 0);
      cy.get(`#counter_${letter}`).find('[data-cy="btn-restore"]').click();
      cy.get(`#counter_${letter}`)
        .find('[data-cy="input"]')
        .should("have.value", 3);
    });
  });
  it("should take you to the about page", () => {
    cy.dataCy("About").click();
    cy.url().should("include", "/about");
    cy.contains("h1", "About Page");
    cy.contains("h3", "There's nothing here yet!");
  });
  it("the config link should take you to the 404 page", () => {
    cy.dataCy("Config").click();
    cy.url().should("include", "/config");
    cy.contains("404");
    cy.contains("Oops. Nothing here...");
  });
  it("a catch all url will take you to the 404 page", () => {
    cy.visit("/test");
    cy.url().should("include", "/test");
    cy.contains("404");
    cy.contains("Oops. Nothing here...");
  });
});
