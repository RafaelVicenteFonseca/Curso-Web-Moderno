const imprimirResultados = function(nota){
    if(nota >= 7) {
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
}

imprimirResultados(10)
imprimirResultados(4)

//exemplo cuidado linguagem fracamente tipada
imprimirResultados('Epa!')//cuidado!!