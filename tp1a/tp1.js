function calcul()
{   
    var a = parseFloat(document.getElementById('n1').value);
    console.log("a = " + a);
    var b = parseFloat(document.getElementById('n2').value);
    console.log("b = " + b);
    var r=0;
    var operation = document.getElementById('operation').value;
    switch(operation) 
    {
        case 'addition':
            r = a + b;
            break;
        case 'soustraction':
            r = a - b;
            break;
        case 'multiplication':
            r = a * b;
            break;
        case 'division':
            r = a / b;
            break;
    }
    var score = document.getElementById('resultat');
    score.innerHTML= " " + r;
}

function save(){
    var savea = parseFloat(document.getElementById('n1').value);
    var saveb = parseFloat(document.getElementById('n2').value);

    localStorage.setItem('operand1', savea);
    localStorage.setItem('operand2', saveb);

}
function restore(){
    var savea = localStorage.getItem('operand1');
    var saveb = localStorage.getItem('operand2');
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';
    document.getElementById('n1').value = savea;
    document.getElementById('n2').value = saveb;
    calcul();
}