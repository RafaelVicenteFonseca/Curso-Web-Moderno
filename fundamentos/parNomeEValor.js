//par nmome/valor
const saudacao = 'opa' //contexto léxico 1(em que local sua variavel foi defenido)

function exerc(){
    const saudacao = 'falaaaa' // contexto léxico2
    return saudacao //contexto da função
}

//Objetos são grupos alinhados de pares nome/valor
const cliente = {
    nome:'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro : 'rua muito legal',
        rua : 'muito legal'
    }
}

console.log(saudacao)
console.log(exerc())
console.log(cliente)

