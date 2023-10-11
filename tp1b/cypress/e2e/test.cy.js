describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/tp1/tp1b/index.html')
  })
  it('Both operand increment and decrement buttons work', () => {
    // Increment operand1 value
    cy.get('#11').click();
    cy.get('#operand1').should('have.value', '1');
    // Decrement operand2 value
    cy.get('#del2').click();
    cy.get('#operand2').should('have.value', '0');
  })

  it('Both operand input field allows entering values', () => {
    // Input value in operand1
    cy.get('#operand1').clear().type('5');
    cy.get('#operand1').should('have.value', '5');
    // Input value in operand2
    cy.get('#operand2').clear().type('8');
    cy.get('#operand2').should('have.value', '8');
  })

  it('Addition, subtraction, multiplication, and division work for different operands', () => {
    // Test addition
    cy.get('#operand1').clear().type('2');
    cy.get('#operand2').clear().type('3');
    cy.get('#operationSelect').select('+');
    cy.get('#equals').click();
    cy.get('#result').should('have.value', '5');

    // Test subtraction
    cy.get('#operand1').clear().type('5');
    cy.get('#operand2').clear().type('3');
    cy.get('#operationSelect').select('-');
    cy.get('#equals').click();
    cy.get('#result').should('have.value', '2');

    // Test multiplication
    cy.get('#operand1').clear().type('4');
    cy.get('#operand2').clear().type('2');
    cy.get('#operationSelect').select('*');
    cy.get('#equals').click();
    cy.get('#result').should('have.value', '8');

    // Test division
    cy.get('#operand1').clear().type('10');
    cy.get('#operand2').clear().type('2');
    cy.get('#operationSelect').select('/');
    cy.get('#equals').click();
    cy.get('#result').should('have.value', '5');
  })

  it('Division by zero returns infinity', () => {
    // Input values and select division
    cy.get('#operand1').clear().type('5');
    cy.get('#operand2').clear().type('0');
    cy.get('#operationSelect').select('/');
    cy.get('#equals').click();
    cy.get('#result').should('have.value', 'Infinity');
  })

  it('Save button correctly stores both operand values on local storage', () => {
    // Input values and click Save button
    cy.get('#operand1').clear().type('7');
    cy.get('#operand2').clear().type('4');
    cy.get('#equals').click();
    cy.get('button').contains('Save Localy').click();

    // Retrieve saved values and check if they are correct
    cy.reload();
    cy.get('#operand1').should('have.value', '7');
    cy.get('#operand2').should('have.value', '4');
  })

  it('Restore button correctly retrieves both operand values from local storage', () => {
    // Click Restore button and check if values are restored
    cy.get('button').contains('Restore').click();
    cy.get('#operand1').should('have.value', '7');
    cy.get('#operand2').should('have.value', '4');
  })

  it('Design responsiveness on screens of various sizes', () => {
    // Test responsiveness for different viewport sizes
    cy.viewport(320, 480);
    cy.get('#operand1').should('be.visible');
    cy.get('#operand2').should('be.visible');

    cy.viewport(768, 1024);
    cy.get('#operand1').should('be.visible');
    cy.get('#operand2').should('be.visible');

    cy.viewport(1200, 800);
    cy.get('#operand1').should('be.visible');
    cy.get('#operand2').should('be.visible');
  })

  it('Change sign, comma, number deletion, and value clear work for both operand keypads', () => {
    // Test change sign for operand1
    cy.get('#operand1').clear().type('5');
    cy.get('#1-').click();
    cy.get('#operand1').should('have.value', '-5');

    // Test comma for operand2
    cy.get('#operand2').clear().type('3');
    cy.get('#2.').click();
    cy.get('#operand2').should('have.value', '3.0');

    // Test number deletion for operand1
    cy.get('#del1').click();
    cy.get('#operand1').should('have.value', '0');

    // Test value clear for operand2
    cy.get('#c2').click();
    cy.get('#operand2').should('have.value', '0');
  })

  it('The operation last clicked on the operation keypad is displayed above it', () => {
    // Test if the selected operation is displayed
    cy.get('#operationSelect').select('*');
    cy.get('form3').contains('*');
  })
})
