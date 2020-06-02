{
    {
        {
            {
                var sera = 'Sera???'
                console.log(sera)
            }
        }
    }
}
console.log(sera) // Quando a variavel não está na function ela se torna global

function teste(){
    var local = 123
    console.log(local)
}
console.log(teste)// não aconselhavel
teste()
//console.log(local)// Não e exibido, pois 'Local' esta dentro da função