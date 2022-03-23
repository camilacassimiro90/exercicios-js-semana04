// Utilizando estrutura condicional **exiba (console.log)** a descrição da classificação da **idade (variável)** da pessoa de acordo com os dados abaixo:

// Jovens - Indivíduos de até 15 anos;
// Adultos - Indivíduos com idade entre 16 até 64 anos;
// Idosos - Indivíduos de 65 anos em diante.

var idade = prompt('Entre com a idade')

if (idade <= 15) {
  console.log('Jovem')
} else if (idade >= 16 && idade <= 64) {
  console.log('Adulto')
} else {
  console.log('Idoso')
}
{
}
