const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'

const template =`
    Olá
    ${nome}!`

console.log(concatenacao, template)

//Expressões...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()// Transforma letra minuscula em maiuscula
console.log(`Ei... ${up('cuidado')}!`)