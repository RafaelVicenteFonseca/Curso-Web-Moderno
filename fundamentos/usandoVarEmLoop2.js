const funcs = []

for(var i=0; i < 10; i++){
    funcs.push(function(){  //adicionar novo elemento no array
        console.log(i)
    })
}

funcs[2]()
funcs[8]()