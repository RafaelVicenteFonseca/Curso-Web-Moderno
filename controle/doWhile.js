function getInteitoAleatorio(max,min){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) 
}

let opcao = -1
//Executa pelo menos uma vez!
 do {
    opcao = getInteitoAleatorio(-1,10)
    console.log(`Opção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima!!!')