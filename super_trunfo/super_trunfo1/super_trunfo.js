var cartaCrys = {
    nome: "Doctor",
    atributos:{
      ataque: 20, 
      defesa: 70,
      magia: 80
    }
  }
  
  var cartaFulano = {
    nome: "Itachi",
    atributos:{
      ataque: 90, 
      defesa: 60,
      magia: 80
    }
  }
  
  var cartaCiclano = {
    nome: "Batman",
    atributos:{
    ataque: 70, 
    defesa: 70,
    magia: 1
    }
  }
  
  var cartas = [cartaCrys,cartaFulano,cartaCiclano]
  
  var cartaMaquina
  var cartaJogador
  
  function sortearCarta(){
    var numCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numCartaMaquina]
    console.log(cartaMaquina)
    var numCartaJogador = parseInt(Math.random() * 3)
    
    while (numCartaJogador == numCartaMaquina){
      numCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numCartaJogador]
    console.log(cartaJogador)
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
  }
  
  function exibirOpcoes(){
    var opcoes = document.getElementById('opcoes')
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos){
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
  }
  
  function obtemAtributoSelec(){
    var radioAtributo = document.getElementsByName('atributo')
    for(var i = 0; i < radioAtributo.length; i++){
      if(radioAtributo[i].checked) {
        return radioAtributo[i].value
      }
    }
  }
  
  function jogar(){
    var atributoSelec = obtemAtributoSelec()
    
    if(cartaJogador.atributos[atributoSelec] > cartaMaquina.atributos[atributoSelec]) {
      alert('Venceu a carta máquina')
    } else if(cartaJogador.atributos[atributoSelec] < cartaMaquina.atributos[atributoSelec]){
     alert('Perdeu, Carta máquina é maior')
     } else{
       alert('Empatou')
     }
    console.log(cartaMaquina)
  }