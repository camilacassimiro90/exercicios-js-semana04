// - Crie uma **função **que receba como **parâmetro dois números e a operação a ser realizada**;
// - Utilizando a estrutura condicional **switch** faça a validação e realize a operação desejada (soma, subtração, divisão ou multiplicação) com os dois números passados por parâmetro e exiba o resultado utilizando console.log.
// - Caso seja passada uma operação diferente das 4 à cima  deve exibir utilizando console.log que a operação não está disponível.
// - Chame essa função 5 vezes passando em cada uma uma operação como argumento e na ultima passando uma operação inválida.let

function calcular() {
  let num1 = Number(prompt('Entre com o 1º valor'))
  let operacao = prompt('Entre com a operação matemática: ')
  let num2 = Number(prompt('Entre com o 2º valor'))
  let resultado

  switch (operacao) {
    case '+':
      resultado = num1 + num2
      console.log(resultado)
      break

    case '-':
      resultado = num1 - num2
      console.log(resultado)
      break

    case '/':
      resultado = num1 / num2
      console.log(resultado)
      break

    case '*':
      resultado = num1 * num2
      console.log(resultado)
      break

    default:
      console.log('operação não disponível')
  }
}
calcular()
