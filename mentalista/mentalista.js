var secretNumb = parseInt(Math.random()*10);

var tentativas = 3;

while (tentativas > 0){
  var chute = parseInt(prompt("Digite um número entre 0 e 10"));
    if (secretNumb == chute){
      alert("Você acertou!!");
      break
    } else if(chute > secretNumb){
      alert("O número secreto é menor");
      tentativas = tentativas - 1;
    } else if(chute < secretNumb){
      alert("O número secreto é maior");
      tentativas = tentativas - 1;
    }
}
if (chute != secretNumb) {
  alert("Suas tentativas acabaram,o número secreto era " + secretNumb +"!");
}