// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

// ** This file is an example of how to write Cypress tests, you can safely delete it **

// This test will pass when run against a clean Quasar project

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ne pas échouer les tests pour les erreurs non capturées
  return false;
});

describe("Tests for the Quasar Counter App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:9000/#/");
  });
  /*it("the counter must go up when clicking on the button", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="btn-up"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 1);
  });
  it("the counter must go down when clicking on the button", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="btn-dn"]').click().click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", -2);
    cy.get('[data-cy="total"]').should("have.text", -2);
  });
  it("Test +", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="btn-dn"]').click().click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", -2);;
    cy.get('#counter_B  [data-cy="input"]').type(3);
    cy.get('[data-cy="total"]').should("have.text", 1);
  });
  it("Test -", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
   cy.get('#counter_A  [data-cy="input"]').type(6);
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 6);
    cy.get('#counter_B  [data-cy="input"]').type(4);
    cy.get('#counter_B  [data-cy="input"]').should("have.value", 4);
    cy.get('#operator_A  [data-cy="select"]').click();
    cy.get('#operator_A  [data-cy="select"]').get(`[label="-"]`).click();
    cy.get('[data-cy="total"]').should("have.text", 2);
  });
  it("Test *", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="input"]').type(6);
     cy.get('#counter_A  [data-cy="input"]').should("have.value", 6);
     cy.get('#counter_B  [data-cy="input"]').type(4);
     cy.get('#counter_B  [data-cy="input"]').should("have.value", 4);
     cy.get('#operator_A  [data-cy="select"]').click();
     cy.get('#operator_A  [data-cy="select"]').get(`[label="*"]`).click();
     cy.get('[data-cy="total"]').should("have.text", 24);
   });
   it("Test /", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="input"]').type(16);
     cy.get('#counter_A  [data-cy="input"]').should("have.value", 16);
     cy.get('#counter_B  [data-cy="input"]').type(4);
     cy.get('#counter_B  [data-cy="input"]').should("have.value", 4);
     cy.get('#operator_A  [data-cy="select"]').click();
     cy.get('#operator_A  [data-cy="select"]').get(`[label="/"]`).click();
     cy.get('[data-cy="total"]').should("have.text", 4);
   });
   it("Test Premier click", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('.column.justify-evenly').should('have.length', 1);

   });
   it("Test Deuxième Click", () => {
      cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('.column.justify-evenly').should('have.length', 3);
 

  });

  it("On peut entrer des valeurs dans tous les inputs", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="input"]').type(16);
     cy.get('#counter_A  [data-cy="input"]').should("have.value", 16);
     cy.get('#counter_B  [data-cy="input"]').type(4);
     cy.get('#counter_B  [data-cy="input"]').should("have.value", 4);
  });

  it("Le bouton clear fonctione", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="input"]').type(16);
    cy.get('#counter_A  [data-cy="btn-clear"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 0);
  });*/

  it("Les boutons save et restore fonctionent", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="input"]').type(16);
    cy.get('#counter_A  [data-cy="btn-save"]').click();
    cy.get('#counter_A  [data-cy="btn-clear"]').click();
    cy.get('#counter_A  [data-cy="btn-restore"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 16);

  });

   it("Test X", () => {
  
   });
});
