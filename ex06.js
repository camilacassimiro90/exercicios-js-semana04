// - Cria uma variável impares que inicia com 0;
// - Crie uma variável contador que inicia com 0;
// - Utilizando a estrutura de repetição **while** executa o código enquanto a variável impares for menor que 10;
// - A variável contador deve ser incrementado dentro do while toda vez que ele for iterado;
// - A variável impares só deve ser incrementada dentro do while quando o contador for um número ímpar;
// - A cada iteração do while imprima o valor de contador e de impares usando console.log.

var impar = 0
var contador = 0

while (contador < 10) {
  contador++
  console.log('contador', contador)
  if (contador % 2 != 0) {
    impar++
    console.log('contador impar', contador)
  }
}
