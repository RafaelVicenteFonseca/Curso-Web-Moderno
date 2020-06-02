const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))//o Número é inteiro?

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1+peso2)

console.log(media.toFixed(2))//Mostra as casas decimais da const média
console.log(media.toString(2))// Número binário 
console.log(typeof media )