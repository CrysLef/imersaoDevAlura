//Usei parseFloat para fazer a conversão direta no prompt de string para float
var valorEmDolar = parseFloat(prompt("Qual valor em dólar que você quer converter?"));

//Cotação do dólar atualmente infelizmente
var valorEmReal = valorEmDolar * 5.50;

//Esse comando é para atribuir R$ ao valor
var valorEmReal = valorEmReal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

alert(valorEmReal);