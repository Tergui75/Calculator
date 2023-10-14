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
  it("Test +", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    //permet de créer automatiquement 2 operands sans avoir besoin de mettre leur nom de le prompt
    cy.get('#counter_A  [data-cy="btn-6"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 6);;
    cy.get('#counter_B  [data-cy="btn-6"]').click();
    cy.get('#counter_B  [data-cy="input"]').should("have.value", 6);;
    cy.get('#operator_A  [data-cy="btn-+"]').click();
    cy.get('[data-cy="total"]').should("have.text", 12);
  });
  it("Test -", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="btn-6"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 6);;
    cy.get('#counter_B  [data-cy="btn-6"]').click();
    cy.get('#counter_B  [data-cy="input"]').should("have.value", 6);;
    cy.get('#operator_A  [data-cy="btn--"]').click();
    cy.get('[data-cy="total"]').should("have.text", 0);
  });
  it("Test *", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="btn-7"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 7);;
    cy.get('#counter_B  [data-cy="btn-4"]').click();
    cy.get('#counter_B  [data-cy="input"]').should("have.value", 4);;
    cy.get('#operator_A  [data-cy="btn-*"]').click();
    cy.get('[data-cy="total"]').should("have.text", 28);
   });
   it("Test /", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="btn-3"]').click();
    cy.get('#counter_A  [data-cy="btn-0"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 30);;
    cy.get('#counter_B  [data-cy="btn-5"]').click();
    cy.get('#counter_B  [data-cy="input"]').should("have.value", 5);;
    cy.get('#operator_A  [data-cy="btn-/"]').click();
    cy.get('[data-cy="total"]').should("have.text", 6);
   });

   it("Test nombre négatif", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="btn-6"]').click();
    cy.get('#counter_A  [data-cy="btn--"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", -6);;
    cy.get('#counter_B  [data-cy="btn-6"]').click();
    cy.get('#counter_B  [data-cy="btn--"]').click();
    cy.get('#counter_B  [data-cy="input"]').should("have.value", -6);;
    cy.get('#operator_A  [data-cy="btn-+"]').click();
    cy.get('[data-cy="total"]').should("have.text", -12);
  });

  it("Test nombre à virgule", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="btn-6"]').click();
    cy.get('#counter_A  [data-cy="btn-12"]').click();
    cy.get('#counter_A  [data-cy="btn-3"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 6.3);;
    cy.get('#counter_B  [data-cy="btn-4"]').click();
    cy.get('#counter_B  [data-cy="btn--"]').click();
    cy.get('#counter_B  [data-cy="input"]').should("have.value", -4);;
    cy.get('#operator_A  [data-cy="btn-+"]').click();
    cy.get('[data-cy="total"]').should("have.text", 2.3);
  });
   it("Test Premier Click Add a New component", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('.column.justify-evenly').should('have.length', 1);

   });
   it("Test Deuxième Click Add a New component", () => {
      cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('.column.justify-evenly').should('have.length', 3);
 

  });


  it("Le bouton clear fonctionne", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="btn-1"]').click();
    cy.get('#counter_A  [data-cy="btn-6"]').click();
    cy.get('#counter_A  [data-cy="btn-clear"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 0);
  });

  it("Les boutons save et restore fonctionnent", () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.get('#counter_A  [data-cy="btn-1"]').click();
    cy.get('#counter_A  [data-cy="btn-6"]').click();
    cy.get('#counter_A  [data-cy="btn-save"]').click();
    cy.get('#counter_A  [data-cy="btn-clear"]').click();
    cy.get('#counter_A  [data-cy="btn-restore"]').click();
    cy.get('#counter_A  [data-cy="input"]').should("have.value", 16);

  });

  it('Designs Responsive : Ordinateur', () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.viewport(1200, 800);
    cy.get('#counter_A').should('be.visible');
    cy.get('#operator_A').should('be.visible');
    cy.get('#counter_B').should('be.visible');
    cy.get('[data-cy="total"]').should('be.visible');
  });

  it('Designs Responsive : Tablette', () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.viewport(768, 1024);
    cy.get('#counter_A').should('be.visible');
    cy.get('#operator_A').should('be.visible');
    cy.get('#counter_B').should('be.visible');
    cy.get('[data-cy="total"]').should('be.visible');
  });

  it('Designs Responsive : Téléphone portable', () => {
    cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
    cy.viewport(375, 667);
    cy.get('#counter_A').should('be.visible');
    cy.get('#operator_A').should('be.visible');
    cy.get('#counter_B').should('be.visible');
    cy.get('[data-cy="total"]').should('be.visible');
  })
    it("Test X", () => {
  
   });
});
