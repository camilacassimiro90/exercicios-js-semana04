// Dado o array abaixo percorra ele e exiba o animal e sua raça utilizando console.log.

var animais = [
  { animal: 'Cachorro', raca: 'Akita' },
  { animal: 'Cachorro', raca: 'Boxer' },
  { animal: 'Cachorro', raca: 'Dálmata' },
  { animal: 'Cachorro', raca: 'Pastor alemão' },
  { animal: 'Gato', raca: 'Persa' },
  { animal: 'Gato', raca: 'Sphynx' },
  { animal: 'Gato', raca: 'Siamês' }
]

// _Dica: forEach pode ser uma boa_

animais.forEach(function (animal) {
  console.log(animal.raca)
})
