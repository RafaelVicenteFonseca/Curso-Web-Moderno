const imprimirResultado = function(nota){
    switch(Math.floor(nota)){//expressão não retorna true or false
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado');
            break
        case 6: case 5: case 4:
            console.log('Reprovado')
            break
        default:
            console.log('nota inválida')            

    }
}
imprimirResultado(10)
//imprimirResultado(8)
//imprimirResultado(5.5)
//imprimirResultado(4)