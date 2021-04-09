var numero = parseInt(Math.random() * 10) 
var tentativas = 3
var check = 0



while (tentativas > 0 && check != numero)  {
  
  var chute = parseInt(prompt("Digite um numero de 1 a 10 "))
  if (numero == chute){
    console.log("Parabens voce acertou!" )
    check = chute
    
      
  }else if (numero > chute)  {
    alert (" o numero é maior")
    console.log(" Você errou ")
    tentativas = tentativas - 1
    check = chute
    
    
  }else if (numero < chute)  {
    alert ("o numero é menor")
    tentativas = tentativas - 1
    check = chute       
  }
    
  
}
if (chute != numero){
      alert ("Suas tentativas acabaram, voce perdeu o numero correto era " + numero )    
    }else{
      alert ("Fim de jogo acertou em " + tentativas + "  tentaivas")
      
    }


