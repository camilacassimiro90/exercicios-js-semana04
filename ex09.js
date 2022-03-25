// - Dado o array de cidades abaixo verificar se o array contém pelo menos uma cidade com o nome Florianópolis.
// - Deve ser retornado true filtrando por 'Florianópolis' ou 'florianópolis'.

// const cidades = [
//   { nome: 'Patos de Minas', populacao: 153585 },
//   { nome: 'Lages', populacao: 157349 },
//   { nome: 'Ibiúna', populacao: 79479 },
//   { nome: 'Maringá', populacao: 403063 },
//   { nome: 'Curitiba', populacao: 1963726 },
//   { nome: 'Florianópolis', populacao: 508826 },
//   { nome: 'Pato Branco', populacao: 84779 },
// ];

// _Dica: Para resolver os problemas de maiúsculo e minúsculo de uma olhada em toLowerCase e toUpperCase_

const cidades = [
  { nome: 'Patos de Minas', populacao: 153585 },
  { nome: 'Lages', populacao: 157349 },
  { nome: 'Ibiúna', populacao: 79479 },
  { nome: 'Maringá', populacao: 403063 },
  { nome: 'Curitiba', populacao: 1963726 },
  { nome: 'Florianópolis', populacao: 508826 },
  { nome: 'Pato Branco', populacao: 84779 }
]

const ache = cidades.some(item =>
  item.nome.toLowerCase().includes('florianópolis')
)
console.log(ache)

