// novo recurso de ES2015

const pessoa = {
    nome:'ana',
    idade: 5,
    endereco:{
        logradouro:'rua ABC',
        numero: 1000
    }
}
console.log(typeof pessoa)

const {nome,idade} = pessoa// tire de dentro do obj nome e idade(obj pessoa)destructuring
console.log(nome,idade)

const {nome:n , idade: i } = pessoa
console.log(n,i)

const {sobrenome, bemhumorada = true} = pessoa // a variavel não foi tocada
console.log(sobrenome, bemhumorada)
