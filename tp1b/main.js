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

  var operand1Val = parseFloat(document.getElementById('operand1').value);
  var operand2Val = parseFloat(document.getElementById('operand2').value);

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

function save(){
  var savea = parseFloat(document.getElementById('operand1').value);
  var saveb = parseFloat(document.getElementById('operand2').value);

  localStorage.setItem('operand1', savea);
  localStorage.setItem('operand2', saveb);

}
function restore(){
  var savea = localStorage.getItem('operand1');
  var saveb = localStorage.getItem('operand2');
  document.getElementById('operand1').value = '';
  document.getElementById('operand2').value = '';
  document.getElementById('operand1').value = savea;
  document.getElementById('operand2').value = saveb;
  updateOutput();
}

function add(id,number){
  var operand = "operand" + id;
  var valeur = (document.getElementById(operand).value);
  console.log("operand1 =" + valeur);
  

  if(valeur==0){
    document.getElementById(operand).value = '';
    valeur='';
  }
  if((number=="11")||(number =="21")){
    valeur = valeur * (-1);
  }
  else if((number=="12")||(number =="22")){
    number = ".0";
    valeur += number.toString();
  }
  else{
    valeur += number.toString();
  }
  console.log("valeur = " + valeur);
  document.getElementById(operand).value = valeur;

  
}

function del(id){
  var operand = "operand" + id;
  var valeur = parseFloat(document.getElementById(operand).value);
  var newvaleur = Math.floor(valeur / 10);
  document.getElementById(operand).value = newvaleur;
}

function c(id){
  var operand = "operand" + id;
  document.getElementById(operand).value = 0;
}