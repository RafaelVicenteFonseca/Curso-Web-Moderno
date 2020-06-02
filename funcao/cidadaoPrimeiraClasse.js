//Função em JS é First-Class Object (Citizans)
//Higher-order function - Função pode ser tratado como  um dado

//Criar função de forma literal

function fun1(){}

//Armazenar em uma variavel
const fun2 = function(){}

//Armazenar em um array
const array =[function (a,b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function (){return "Opa"}
console.log(obj.falar())

// Passar fução como parametro
function run(fun){
    fun ()
}

run (function () {console.log('Executando...')})

//Uma função pode retornar/conter um função
function soma (a,b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)