//expressão relacional
function soBoaNoticia(nota){
    if(nota >= 7){
       console.Log('Aprovado' + nota)
    }    
}  
soBoaNoticia(8.1)//Aprovado
soBoaNoticia(6.9)//Reprovado

//IF os parâmetros é convertido para verdadeiro ou falso
function seForVerdade(valor){
    if(valor){
        console.log('É verdade...' + valor)
    }
}

//False
seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)

//true
seForVerdade(1)
seForVerdade(-1)
seForVerdade(' ')//espaço
seForVerdade('?')
seForVerdade([])
seForVerdade([1,2])
seForVerdade({})//object


