const valores = [3.4,5.8,10.12,13.4,1.2]
console.log(valores[0], valores[3])

console.log(valores[10])//Valor indefinido

valores[6] = 10
console.log(valores[6])
console.log(valores.length) //Quantidade de items no array

valores.push({id: 3}, false, null, 'teste')//adicionar novos elementos na array
console.log(valores)

console.log(valores.pop())// Pega o ultimo indice da array
delete valores[0]
console.log(valores)

console.log(typeof valores)
valores[0] = 1
console.log(valores[0])