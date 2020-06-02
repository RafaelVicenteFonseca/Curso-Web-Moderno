//Armazenando uma função em uma variavel
const imprimirSoma = function (a,b){
    console.log(a + b)
}

imprimirSoma(2,3)

//armazenamento de uma função arrow de uma variavel
const soma = (a, b) =>{// essa notação substitui função
    return a + b

}
console.log(soma(2,3))

// retorno implícito
const subtracao = (a,b) => a- b //função de uma linha(valor retornavel) arrow fuction
console.log(subtracao(2,5))

const imprimir2 = a => console.log(a)
imprimir2('legal!!!')
