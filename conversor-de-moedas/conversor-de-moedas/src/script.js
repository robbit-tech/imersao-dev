var valorEmDolarTexto = prompt('Qual o valor em dólar que você quer converter?')

var cotacaoDolarTexto = prompt ("Insira o valor da cotação atual do dolar ( Favor usar ponto ao invés de virgula  ) ")

var valorCotacaoDolarNumero = parseFloat(cotacaoDolarTexto)
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)

var valorEmReal = valorEmDolarNumero * valorCotacaoDolarNumero
var valorEmRealFixado = valorEmReal.toFixed(2)

alert( " O valor convertido é: " + valorEmRealFixado)
//Revisão
//variáveis var int - float - string
//alert - parseInt - parseFloat - prompt
//operações + somar * multiplicar
//comentário final
