var firstNum = parseInt(prompt("Insira um número: "));
var secNum = parseInt(prompt("Insira outro número: "));


var operador = prompt("Digite 1 para dividir , 2 para somar, 3 para subtrair ou 4 para multiplicar : ");

var resultado;

if(operador == 1) {
  var resultado = firstNum / secNum;
  document.write("<h2>"+firstNum + " / "+secNum + " = " + resultado + "</h2>");
} else if (operador == 2) {
  var resultado = firstNum + secNum;
  document.write("<h2>"+firstNum + " + "+secNum + " = " + resultado + "</h2>");
} else if (operador == 3) {
  var resultado = firstNum - secNum;
  document.write("<h2>"+firstNum + " - "+secNum + " = " + resultado + "</h2>");
} else if(operador == 4){
  var resultado = firstNum * secNum;
  document.write("<h2>"+firstNum + " x "+secNum + " = " + resultado + "</h2>");
} else {
  document.write("<h2>Opcão inválida</h2>");
};