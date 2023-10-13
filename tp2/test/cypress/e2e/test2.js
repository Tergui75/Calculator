// 1. The 1st click on the button "Add a new operand"
it('Adds a new operand component with its pug elements followed by the result component', () => {
    cy.visit('/') // Assurez-vous d'être sur la page d'accueil
  
    // Cliquez sur le bouton "Add a new operand"
    cy.contains('Add Operand').click()
  
    // Vérifiez que le nouveau composant d'opérande est ajouté avec ses éléments pug
    cy.get('.counter-component').should('have.length', 1)
    cy.get('.operator-component').should('have.length', 1)
    cy.get('.result-component').should('have.length', 1)
  })
  
  // 2. The 2nd click on the "Add a new operand"
  it('Adds a new operator menu component followed by an operand component with its 7 pug elements', () => {
    cy.visit('/') // Assurez-vous d'être sur la page d'accueil
  
    // Cliquez deux fois sur le bouton "Add a new operand"
    cy.contains('Add Operand').click()
    cy.contains('Add Operand').click()
  
    // Vérifiez que le nouveau composant de menu d'opérateur est ajouté
    cy.get('.operator-component').should('have.length', 2)
  
    // Vérifiez que le nouveau composant d'opérande est ajouté avec ses éléments pug
    cy.get('.counter-component').should('have.length', 2)
    cy.get('.q-btn').should('have.length', 7)
    // ... Assurez-vous d'avoir d'autres vérifications pour les éléments pug
  
  })
  
  // 3. Operand input field allows entering values
  it('Allows entering values in operand input field', () => {
    cy.visit('/') // Assurez-vous d'être sur la page d'accueil
  
    // Trouvez le champ de saisie de l'opérande et entrez une valeur
    cy.get('.q-input').first().type('42').should('have.value', '42')
    // ... Continuez avec d'autres vérifications si nécessaire
  
  })
  
  // 4. Operand increment, decrement and clear buttons work
  it('Operand increment, decrement and clear buttons work', () => {
    cy.visit('/') // Assurez-vous d'être sur la page d'accueil
  
    // Cliquez sur le bouton "Add a new operand"
    cy.contains('Add Operand').click()
  
    // Trouvez les boutons et effectuez les actions
    cy.get('[data-cy=btn-up]').click() // Incrémentez
    cy.get('.q-input').should('have.value', '1')
  
    cy.get('[data-cy=btn-dn]').click() // Décrémentez
    cy.get('.q-input').should('have.value', '0')
  
    cy.get('[data-cy=btn-clear]').click() // Effacez
    cy.get('.q-input').should('have.value', '')
  })
  
  // 5. Operand save and restore buttons work
  it('Operand save and restore buttons work', () => {
    cy.visit('/') // Assurez-vous d'être sur la page d'accueil
  
    // Cliquez sur le bouton "Add a new operand"
    cy.contains('Add Operand').click()
  
    // Trouvez le bouton de sauvegarde et cliquez dessus
    cy.get('[data-cy=btn-save]').click()
  
    // Effacez la valeur pour simuler une nouvelle saisie
    cy.get('[data-cy=input]').clear()
  
    // Vérifiez que la valeur a été effacée
    cy.get('.q-input').should('have.value', '')
  
    // Cliquez sur le bouton de restauration
    cy.get('[data-cy=btn-restore]').click()
  
    // Vérifiez que la valeur restaurée est correcte
    cy.get('.q-input').should('have.value', '1') // Assurez-vous que la valeur est correcte après la restauration
  })
  
  // 6. Result is the correct application of the operators selected in each operator menu component on the operands
  it('Result is the correct application of the operators selected', () => {
    cy.visit('/') // Assurez-vous d'être sur la page d'accueil
  
    // Cliquez sur le bouton "Add a new operand"
    cy.contains('Add Operand').click()
  
    // Choisissez un opérateur
    cy.get('.q-select').select('+')
  
    // Entrez une valeur
    cy.get('.q-input').type('5')
  
    // Vérifiez le résultat
    cy.get('.text-purple-9').should('contain', 'Result: 5')
  
    // ... Continuez avec d'autres scénarios de test d'opération et d'opérateur
  
  })
  
  // 7. Design responsiveness on screen of various size
  it('Design responsiveness on screen of various size', () => {
    // Ajustez la taille de l'écran (utilisez cy.viewport(width, height))
    cy.viewport(1000, 800) // Exemple de taille d'écran
  
    // Vérifiez le design à différentes tailles d'écran
    // ... Écrivez les vérifications spécifiques à votre conception
  
    // Rétablissez la taille de l'écran à la taille par défaut à la fin du test si nécessaire
    cy.viewport('macbook-15') // Taille par défaut ou autre taille de votre