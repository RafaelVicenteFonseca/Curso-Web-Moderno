let valor//não inicializa
console.log(valor)
//console.log(valor2)//variável não declarada


valor = null //não tem valor e não tem endereço de memória(ausência de valor)
console.log(valor)
//console.log(valor.toString())// erro! valor nulo

const produto = {}
console.log(produto.preco)// não dá erro, "undefined" o preço não está definido no produto
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco= undefined // evite atribuir underfined
console.log(!!produto.prerco)// boleano
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)