
var primeiroValor = parseInt(prompt ("Digite o primeiro valor: "))

var segundoValor = parseInt (prompt ("Digite o segundo valor: "))

var operacao = prompt ( "Digite a operação: \n 1. soma \n 2. subtracao \n 3. multiplicacao \n 4. divisao \n " )

switch (operacao){
  case '1':
      resultado = primeiroValor + segundoValor
 document.write ("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado +"</h2>")         
    break;
  case '2':   
    resultado = primeiroValor - segundoValor
 document.write ("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado +"</h2>")         
  break;  
  case '3':
     resultado = primeiroValor * segundoValor
 document.write ("<h2>" + primeiroValor + " * " + segundoValor + " = " + resultado +"</h2>")         
    break;
  case '4':
     resultado = primeiroValor / segundoValor
 document.write ("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado +"</h2>")         
    break;
  default:
    document.write ("<h2>" + " Opção invalida " +"</h2>");         
}


