var carta1 = {
  nome: "Shyriu", 
  atributos: {
      ataque: 70 ,  
      defesa: 90,
      magia: 10
             }
}

var carta2 = {
  nome: "Shura", 
  atributos:{
      ataque: 90 ,  
      defesa: 60,
      magia: 50
  }
  
}

var carta3 = {
  nome: "Saori", 
  atributos: {
    ataque: 60 ,  
    defesa: 40,
    magia: 100
  }
  
}

var cartaMaquina  
var cartaJogador 
var cartas = [carta1,carta2,carta3]


function sortearCarta(){
  var ScartaMaquina = parseInt(Math.random()*3)
  cartaMaquina = cartas[ScartaMaquina]
  var ScartaJogador = parseInt(Math.random()*3) 
  
  while ( ScartaMaquina == ScartaJogador ) {
    
    ScartaJogador = parseInt(Math.random()*3) 
  }
    cartaJogador = cartas[ScartaJogador]
    console.log(cartaJogador)
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    exibirOpcoes()
}

function exibirOpcoes(){
  var opcoes =  document.getElementById('opcoes')
  var opcoesTexto = ""
  for (atributo in cartaJogador.atributos){
       opcoesTexto += "<input type='radio' name = 'atributo' value ='"  + atributo +  "'>" + atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obtemAtributo(){
  var radioAtributo = document.getElementsByName('atributo')
  for (var i = 0; i <radioAtributo.length; i++){
    if (radioAtributo[i].checked) {
      
      return radioAtributo[i].value
    }
  }
  
}

function jogar(){
 var atributoSelecionado = obtemAtributo ()   
  console.log(atributoSelecionado)
  if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado] ){
    alert("Você venceu!")
  }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado] ) {
    alert("Você perdeu!")
  }else{
    alert ("Empate!")
  }
}