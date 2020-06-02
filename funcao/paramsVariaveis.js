function soma(){
    let soma = 0
    for(i in arguments){//Arguments é um array 
        soma += arguments[i] 
    }
    return soma
}

console.log(soma())
console.log(soma(2, 3, 4,))
console.log(soma(2, 3, -4,))
console.log(soma(2, 3, 4, 'teste'))
