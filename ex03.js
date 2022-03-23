// Dado um número verifique se ele é par, caso seja exibe a mensagem de que ele é par, caso não exibe a mensagem de que ele é impar. Para exibir a mensagem pode ser usado console.log

// _dica: operador ternário pode ser uma boa_

var num = Number(prompt('Digite um número: '))
var resultado = num % 2 === 0 ? 'Par' : 'Impar'
console.log(resultado)
