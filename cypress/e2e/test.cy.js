describe('template spec', () => {
  it('Runs a basic interaction that works', () => {
    cy.visit('http://127.0.0.1:3000/index.html')
    //Get the first element with id operand1
    cy.get('#operand1').clear().type('1')
    cy.get('#operand2').clear().type('2')
    //Click on the equals button
    cy.get('#equals').click()
    //Get the result element and check if it contains 3
    cy.get('#result').contains('3')
  })

  it('Runs a basic test with a different viewport size', () => {
    cy.viewport(320, 480 )
    cy.visit('http://127.0.0.1:3000/index.html')
    //Check that all elements are visible
    cy.get('#operand1').should('be.visible')
    cy.get('#operand2').should('be.visible')
  })

  it('Runs a basic test that should give an eror', () => {
    cy.visit('http://127.0.0.1:3000/index.html')
    //Get the first element with id operand1
    cy.get('#operand1').clear().type('A')
    cy.get('#operand2').clear().type('2')
    //Click on the equals button
    cy.get('#equals').click()
    //Get the result element and check if it contains NaN
    cy.get('#result').contains('NaN')
  })
})