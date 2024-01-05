// Use `cy.dataCy` custom command for more robust tests
// See https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements

// ** This file is an example of how to write Cypress tests, you can safely delete it **

// This test will pass when run against a clean Quasar project

Cypress.on('uncaught:exception', (err, runnable) => {
  // Ne pas échouer les tests pour les erreurs non capturées
  return false;
});

Cypress.Commands.add('SeConnecter', (email,password) => {
  cy.get('[data-cy="btn-signIn"]').click();
  cy.get('[data-cy="input-email"]').type(email);
  cy.get('[data-cy="input-password"]').type(password);
  cy.get('[data-cy="btn-submit"]').click();
  cy.wait(1000);
});
Cypress.Commands.add('AjouterA', () => {
  
  cy.wait(1000);
});


describe("Tests for the Quasar Counter App", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:8080/");
  });
  describe("TP2a Tests", () => {
    beforeEach(() => {
      cy.SeConnecter("test@exemple.com","password");
      cy.get('[data-cy="btn-input-operand"').click();
    })
    it("Test bouton increment", () => {
      cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('#counter_A  [data-cy="btn-up"]').click();
      cy.get('#counter_A  [data-cy="input"]').should("have.value", 1);
    });
    it("Test bouton decrement", () => {
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
     it("Test Premier Click Add a New component", () => {
      cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('.column.justify-evenly').should('have.length', 1);
  
     });
     it("Test Deuxième Click Add a New component", () => {
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
  
    it("Le bouton clear fonctionne", () => {
      cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('#counter_A  [data-cy="input"]').type(16);
      cy.get('#counter_A  [data-cy="btn-clear"]').click();
      cy.get('#counter_A  [data-cy="input"]').should("have.value", 0);
    });
  
    it("Les boutons save et restore fonctionnent", () => {
      cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('#counter_A  [data-cy="input"]').type(16);
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
    });
  });




  describe("TP2b Tests", () => {
    beforeEach(() => {
      cy.SeConnecter("test@exemple.com","password");
      cy.get('[data-cy="btn-input-operand"').click();
      cy.get('[data-cy="btn-keypad-operand"').click();
    })
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

    it("Le bouton supprimer un nombre fonctionne", () => {
      cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('#counter_A  [data-cy="btn-1"]').click();
      cy.get('#counter_A  [data-cy="btn-6"]').click();
      cy.get('#counter_A  [data-cy="btn-dn"]').click();
      cy.get('#counter_A  [data-cy="input"]').should("have.value", 1);
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
  });

  describe("TP3 Tests", () => {
    beforeEach(() => {
      cy.SeConnecter("test@exemple.com","password");
      cy.get('[data-cy="btn-input-operand"').click();// inutile mais pour vérifier que ça marche bien
      cy.get('[data-cy="btn-keypad-operand"').click();// inutile mais pour vérifier que ça marche bien
    })
    //Question 1
    it("Test clavier fonctionnel sur la page keypad operand", () => {
      cy.get('[data-cy="btn-keypad-operand"').click(); // inutile mais pour vérifier que ça marche bien
      cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('#counter_A  [data-cy="btn-7"]').click();
      cy.get('#counter_A  [data-cy="btn-1"]').click();
      cy.get('#counter_A  [data-cy="input"]').should("have.value",71);
      cy.get('[data-cy="btn-input-operand"').click();
      cy.get('[data-cy="total"]').should("have.text",71) //pour la dernière question vérifie que le résultat est le même après changement de page
    }),
    //Question 2
    it("Test pour écrire dans le input de la page input", () => {
      cy.get('[data-cy="btn-input-operand"').click();
      cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('#counter_A  [data-cy="input"]').type(12);//On écrit 12 avec le clavier dans le input 
      cy.get('#counter_A  [data-cy="input"]').should("have.value", 12);
      cy.get('[data-cy="btn-keypad-operand"').click();
      cy.get('[data-cy="total"]').should("have.text",12) //pour la dernière question vérifie que le résultat est le même après changement de page
    }),
    //Question 3
    it("Test cliquer sur incriment et decrement sur la page input operand", () => {
      cy.get('[data-cy="btn-input-operand"').click();
      cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('#counter_A  [data-cy="btn-up"]').click();//on ajoute 1
      cy.get('#counter_A  [data-cy="input"]').should("have.value", 1);
      cy.get('[data-cy="btn-keypad-operand"').click();
      cy.get('[data-cy="total"]').should("have.text",1) //pour la dernière question vérifie que le résultat est le même après changement de page
      cy.get('[data-cy="btn-input-operand"').click();
      cy.get('#counter_A  [data-cy="btn-dn"]').click().click().click();//on enlève 3 car on click 3 fois
      cy.get('#counter_A  [data-cy="input"]').should("have.value", -2);
      cy.get('[data-cy="btn-keypad-operand"').click();
      cy.get('[data-cy="total"]').should("have.text",-2) //pour la dernière question vérifie que le résultat est le même après changement de page
    }),
    //Question 4
    it("Test restorer une valeur sur une autre page", () => {
      cy.get('[data-cy="btn-keypad-operand"').click();
      cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('#counter_A  [data-cy="btn-1"]').click();
      cy.get('#counter_A  [data-cy="btn-6"]').click();
      cy.get('#counter_A  [data-cy="btn-save"]').click();
      cy.get('#counter_A  [data-cy="btn-clear"]').click();
      cy.get('[data-cy="btn-input-operand"').click();
      cy.get('#counter_A  [data-cy="input"]').type(12);
      cy.get('#counter_A  [data-cy="btn-restore"]').click();
      cy.get('#counter_A  [data-cy="input"]').should("have.value", 16);
      cy.get('[data-cy="btn-keypad-operand"').click();
      cy.get('[data-cy="total"]').should("have.text",16) //pour la dernière question vérifie que le résultat est le même après changement de page
    }),
    //Question 5
    it("Test l'opératateur est le même après le changement de page keypad operand puis input operand", () => {
      cy.get('[data-cy="btn-keypad-operand"').click();
      cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('#counter_A  [data-cy="btn-2"]').click();
      cy.get('#counter_A  [data-cy="input"]').should("have.value", 2);
      cy.get('#counter_B  [data-cy="btn-6"]').click();
      cy.get('#counter_B  [data-cy="input"]').should("have.value", 6);
      cy.get('#operator_A  [data-cy="btn-*"]').click();
      cy.get('[data-cy="total"]').should("have.text",12);
      cy.get('[data-cy="btn-input-operand"').click();
      cy.get('[data-cy="total"]').should("have.text",12);//vérifie que c'est le même résultat donc que l'opérateur n'a pas changé
    }),
    //Question 6
    it("Test l'opératateur est le même après le changement de page input operand puis keypad operand", () => {
      cy.get('[data-cy="btn-input-operand"').click();
      cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('B'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('#counter_A  [data-cy="input"]').type(4);
      cy.get('#counter_A  [data-cy="input"]').should("have.value", 4);
      cy.get('#counter_B  [data-cy="input"]').type(5);
      cy.get('#counter_B  [data-cy="input"]').should("have.value", 5);
      cy.get('#operator_A  [data-cy="select"]').click();
      cy.get('#operator_A  [data-cy="select"]').get(`[label="-"]`).click();
      cy.get('[data-cy="total"]').should("have.text",-1);
      cy.get('[data-cy="btn-keypad-operand"').click();
      cy.get('[data-cy="total"]').should("have.text",-1);//vérifie que c'est le même résultat donc que l'opérateur n'a pas changé
    });
  });

  describe("TP4a Tests", () => {
    beforeEach(() => {
      cy.get('[data-cy="btn-input-operand"').click();// inutile mais pour vérifier que ça marche bien
      cy.get('[data-cy="btn-keypad-operand"').click();// inutile mais pour vérifier que ça marche bien
    })


    //Question2
    //Keypad operand
    it("Le nouveau bouton delete fonctionnent pour keypad operand", () => {
      cy.SeConnecter("test@exemple.com","password");//permet de se connecter sinon impossible d'utiliser notre application
      cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('#counter_A ').should('exist');//vérifie qu'un component est créé
      cy.intercept('POST', 'https://lqxwqhjnehztziulwiju.supabase.co/rest/v1/counters', (req) => {
        const requestBody = req.body; // Récupérer le corps de la requête
        expect(requestBody).to.have.property('operandValue');
      });
      cy.get('#counter_A  [data-cy="btn-del-serv"]').click();
      cy.get('#counter_A ').should('not.exist');//vérifie qu'il n'y a plus de component sur cette page
  

    });
    //Input operand
    it("Le nouveau bouton delete fonctionne pour input operand", () => {
      cy.SeConnecter("test@exemple.com","password");//permet de se connecter sinon impossible d'utiliser notre application
      cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click();});
      cy.get('[data-cy="btn-input-operand"').click();//se mettre sur la page input
      cy.get('#counter_A ').should('exist');//vérifie qu'un component est créé
      cy.intercept('POST', 'https://lqxwqhjnehztziulwiju.supabase.co/rest/v1/counters', (req) => {
        const requestBody = req.body; // Récupérer le corps de la requête
        expect(requestBody).to.have.property('operandValue');
      });
      cy.get('#counter_A  [data-cy="btn-del-serv"]').click();
      cy.get('#counter_A ').should('not.exist')//vérifie qu'il n'y a plus de component sur cette page
    });
    //Question 3 et 4
    it("Le bouton share et pull fonctionnent pour keypad operand", () => {
      cy.SeConnecter("test@exemple.com","password");//permet de se connecter sinon impossible d'utiliser notre application
      //cy.window().then((win) => {cy.stub(win, 'prompt').returns('A'); cy.get('[data-cy=btn-add-new-operand]').click()});
      cy.get('[data-cy=btn-add-new-operand]').click();
      cy.get('#counter_A ').should('exist');//vérifie qu'un component est créé
      cy.get('#counter_A  [data-cy="btn-1"]').click();
      cy.get('#counter_A  [data-cy="btn-2"]').click();
      cy.get('#counter_A  [data-cy="btn-save-serv"]').click();
      cy.get('#counter_A  [data-cy="btn-share"]').click()
      //cy.window().then((win2) => {cy.stub(win2, 'prompt').returns('5578ba0a-30fc-4706-bee2-739686d2d9e1'); cy.get('#counter_A  [data-cy="btn-share"]').click();});//envoie à un deuxième user le counter A
      cy.reload();
      cy.get('[data-cy="btn-signOut"]').click();
      cy.SeConnecter("guillaume@mail.com","password");//on se connecte avec le deuxième utilisateur 
      cy.get('[data-cy="btn-pull"]').click();
      cy.get('#counter_a6dd3c8a-3640-4e8d-b09a-d151a344e9cd:A ').should('exist');
      cy.get('#counter_a6dd3c8a-3640-4e8d-b09a-d151a344e9cd:A [data-cy="input"]').should("have.value", 4);

    
  

    });
    //Input operand
    it("Le bouton share et pull fonctionne pour input operand", () => {
      cy.SeConnecter("test@exemple.com","password");//permet de se connecter sinon impossible d'utiliser notre application
      //cy.window().then((win) => {cy.stub(win, 'prompt').onCall(0).returns('A').onCall(1).returns('5578ba0a-30fc-4706-bee2-739686d2d9e1'); cy.get('[data-cy=btn-add-new-operand]').click();cy.get('#counter_A  [data-cy="btn-share"]').click();});
      cy.get('[data-cy=btn-add-new-operand]')
      cy.get('#counter_A ').should('exist');//vérifie qu'un component est créé
      cy.get('[data-cy="btn-input-operand"').click();//se mettre sur la page input
      cy.get('#counter_A  [data-cy="input"]').type(4);
      cy.get('#counter_A  [data-cy="btn-save-serv"]').click();
      cy.get('#counter_A  [data-cy="btn-share"]').click()
      //cy.window().then((win) => {cy.stub(wi2, 'prompt').onCall(1).returns('5578ba0a-30fc-4706-bee2-739686d2d9e1'); cy.get('#counter_A  [data-cy="btn-share"]').click();});//envoie à un deuxième user le counter A
      cy.reload();
      cy.get('[data-cy="btn-signOut"]').click();
      cy.SeConnecter("guillaume@mail.com","password");//on se connecte avec le deuxième utilisateur 
      cy.get('[data-cy="btn-pull"]').click();
      cy.get('#counter_a6dd3c8a-3640-4e8d-b09a-d151a344e9cd:A ').should('exist');
      cy.get('#counter_a6dd3c8a-3640-4e8d-b09a-d151a344e9cd:A [data-cy="input"]').should("have.value", 4);
    });
    
    

  });
});

