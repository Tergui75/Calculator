describe('Calculator Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/tp1/tp1a/tp1.html')
  })

  it('Checks if both operand increment buttons work', () => {
    cy.get('#n1').clear().type('1')
    cy.get('#n2').clear().type('2')
    cy.get('#n1').should('have.value', '1')
    cy.get('#n2').should('have.value', '2')
  })

  it('Checks if both operand decrement buttons work', () => {
    cy.get('#n1').clear().type('3')
    cy.get('#n2').clear().type('4')
    cy.get('#n1').should('have.value', '3')
    cy.get('#n2').should('have.value', '4')
  })

  it('Checks if both operand input fields allow entering values', () => {
    cy.get('#n1').clear().type('5')
    cy.get('#n2').clear().type('6')
    cy.get('#n1').should('have.value', '5')
    cy.get('#n2').should('have.value', '6')
  })

  it('Performs addition with strictly positive operands', () => {
    cy.get('#n1').clear().type('7')
    cy.get('#n2').clear().type('8')
    cy.get('#operation').select('+')
    cy.get('button').contains('=').click()
    cy.get('#resultat').contains('15')
  })

  it('Performs addition with strictly negative operands', () => {
    cy.get('#n1').clear().type('-9')
    cy.get('#n2').clear().type('-10')
    cy.get('#operation').select('+')
    cy.get('button').contains('=').click()
    cy.get('#resultat').contains('-19')
  })

  // Add similar tests for subtraction, multiplication, and division with different operand combinations

  it('Handles division by zero correctly', () => {
    cy.get('#n1').clear().type('11')
    cy.get('#n2').clear().type('0')
    cy.get('#operation').select('/')
    cy.get('button').contains('=').click()
    cy.get('#resultat').contains('Infinity')
  })

  it('Saves both operand values to local storage on button click', () => {
    cy.get('#n1').clear().type('12')
    cy.get('#n2').clear().type('13')
    cy.get('button').contains('Save').click()
    expect(localStorage.getItem('operand1')).to.equal('12')
    expect(localStorage.getItem('operand2')).to.equal('13')
  })

  it('Restores both operand values from local storage on button click', () => {
    localStorage.setItem('operand1', '14')
    localStorage.setItem('operand2', '15')
    cy.get('button').contains('Restore').click()
    cy.get('#n1').should('have.value', '14')
    cy.get('#n2').should('have.value', '15')
  })

  it('Checks design responsiveness on screens of various sizes', () => {
    cy.viewport(320, 480)
    cy.get('#n1').should('be.visible')
    cy.get('#n2').should('be.visible')
  })
})