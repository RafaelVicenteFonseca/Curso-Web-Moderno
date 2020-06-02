const escola = 'Cod3r'

console.log(escola.charAt(4))//Achar o índice posição 4
console.log(escola.charAt(5))
console.log(escola.charCodeAt(4))// Achar o índice posição 4 (tabela ascii ou unicode)

console.log(escola.indexOf('3'))// verificar o que está na posição 2

console.log(escola.substring(1))// irá ler partir do índice 1
console.log(escola.substring(0,3)) //irá ler partir do índice 0 até 3

console.log("Escola ".concat(escola).concat('!'))
console.log(escola.replace(3,'e'))// Na posição 3 será colocado a letra e

console.log('Ana,Maria,Pedro'.split(','))