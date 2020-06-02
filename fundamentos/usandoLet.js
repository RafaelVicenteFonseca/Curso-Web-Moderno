//Comportamento diferente de 'var'
//Pode-se utilizar 
let numero = 1
{
    let numero = 2
    console.log('dentro = ', numero)
}

console.log('fora = ', numero)

