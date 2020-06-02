//função bloco de código nomeado, reutilizar o código

//fumção sem retorno

function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)//NaN
imprimirSoma(2,5,2,21,2)// Irá pegar os dois primeiro e ignorará o restante
imprimirSoma()//nan

//função com retorno
function soma (a,b = 0){
    return a + b
}

console.log(soma(2,3))
//soma(a,b)
console.log(soma(2))