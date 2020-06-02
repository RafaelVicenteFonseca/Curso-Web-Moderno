function getInteiroAleatorio(min,max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)

}
let opcao = 0
//Estrutura de repetição, só entra no bloco se for verdadeiro
//Para a execução quando a expressão for falsa
while (opcao != -1){//While precida de uma expressão que retorna verdadeiro ou falso
    opcao = getInteiroAleatorio(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a próxima!')