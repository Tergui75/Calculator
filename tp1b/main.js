// initialize selected operation variable
let selectedOperation = "add"

// seelectOperation function definition
function selectOperation() {
  // retrieve selected option value of select element
  const selectElt = document.querySelector("#operationSelect")
  selectedOperation = selectElt.value
  return selectedOperation
}

// updateOutput function definition
function updateOutput() {
  // Retrieve the input elements
  const operand1Elt = document.querySelector("#operand1")
  const operand2Elt = document.querySelector("#operand2")
  
  // Converting counter value attributes to int
  let operand1Val = parseInt(operand1Elt.value)  
  let operand2Val = parseInt(operand2Elt.value)

  // console.log(operand1Val)
  // console.log(operand2Val)
  selectedOperation = selectOperation()
  // console.log(selectedOperation)

  // Updating the result elt value
  switch(selectedOperation) {
    case "substract":
      result.value = operand1Val - operand2Val
      break
    case "multiply":
      result.value = operand1Val * operand2Val
      break
    case "divide":
      result.value = operand1Val / operand2Val
      break
    default: 
      result.value = operand1Val + operand2Val
  }

  return result.value
}