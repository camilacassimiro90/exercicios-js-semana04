<<<<<<< HEAD
// - Dado o array de cidades abaixo, filtre apenas as cidades com mais de 200000 habitantes;
// - Após o filtro ordene por ordem decrescente de acordo com a população (primeiro cidades mais populosas);

// **cidades:** [
//   { nome: 'Patos de Minas', populacao: 153585 },
//   { nome: 'Lages', populacao: 157349 },
//   { nome: 'Ibiúna', populacao: 79479 },
//   { nome: 'Maringá', populacao: 403063 },
//   { nome: 'Curitiba', populacao: 1963726 },
//   { nome: 'Florianópolis', populacao: 508826 },
//   { nome: 'Pato Branco', populacao: 84779 },
// ];

// _Dica: Dar uma olhada nos métodos filter e sort
// extra: https://www.w3schools.com/jsref/jsref_sort.asp_

const cidades = [
  { nome: 'Patos de Minas', populacao: 153585 },
  { nome: 'Lages', populacao: 157349 },
  { nome: 'Ibiúna', populacao: 79479 },
  { nome: 'Maringá', populacao: 403063 },
  { nome: 'Curitiba', populacao: 1963726 },
  { nome: 'Florianópolis', populacao: 508826 },
  { nome: 'Pato Branco', populacao: 84779 }
]

const cidadeMaisPopulosa = cidades.filter(
  maiorPopulacao => maiorPopulacao.populacao > 200000
)
console.log(cidadeMaisPopulosa)

cidades.sort((a, b) => {
  return b.populacao - a.populacao
})

console.log(cidades)
=======
// - Dado o array de cidades abaixo, filtre apenas as cidades com mais de 200000 habitantes;
// - Após o filtro ordene por ordem decrescente de acordo com a população (primeiro cidades mais populosas);

// **cidades:** [
//   { nome: 'Patos de Minas', populacao: 153585 },
//   { nome: 'Lages', populacao: 157349 },
//   { nome: 'Ibiúna', populacao: 79479 },
//   { nome: 'Maringá', populacao: 403063 },
//   { nome: 'Curitiba', populacao: 1963726 },
//   { nome: 'Florianópolis', populacao: 508826 },
//   { nome: 'Pato Branco', populacao: 84779 },
// ];

// _Dica: Dar uma olhada nos métodos filter e sort
// extra: https://www.w3schools.com/jsref/jsref_sort.asp_

const cidades = [
  { nome: 'Patos de Minas', populacao: 153585 },
  { nome: 'Lages', populacao: 157349 },
  { nome: 'Ibiúna', populacao: 79479 },
  { nome: 'Maringá', populacao: 403063 },
  { nome: 'Curitiba', populacao: 1963726 },
  { nome: 'Florianópolis', populacao: 508826 },
  { nome: 'Pato Branco', populacao: 84779 }
]

const cidadeMaisPopulosa = cidades.filter(
  maiorPopulacao => maiorPopulacao.populacao > 200000
)
console.log(cidadeMaisPopulosa)

cidades.sort((a, b) => {
  return b.populacao - a.populacao
})

console.log(cidades)
>>>>>>> a42cddd595a91365c188dd33718112c378caeb21
