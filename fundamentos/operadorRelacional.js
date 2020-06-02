console.log('01)', '1' == 1)//comparando o valor e não o tipo
console.log('02)', '1' === 1)//string e number
console.log('03)', '3' != 3)//3 é diferente de 3
console.log('04)', '3' !== 3)//tipo string e tipo number

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('07)', 3 >= 2)

const d1 = new Date (0)
const d2 = new Date (0)
console.log('9)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime()=== d2.getTime())//mesmo tipo time

console.log('12)', undefined == null)
console.log('13)', undefined === null)