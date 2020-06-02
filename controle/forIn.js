const notas= [6.7, 7.4, 9.8, 8.1, 7.7]

for(let i in notas){// elemento em nota, let para variavel local
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Rafael',
    sobrenome: 'Vicente',
    idade:26,
    peso: 66

}

for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`)//array parâmetro
}