
//num[3] = 5 // coloca o 5 na terceira posição

//num.push(6) // adiciona no final

//num.sort()
//num.length



/*let num = [5,8,2,9,3]

console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O vetor organizado é:`,num.sort())

console.log(`${num[0]} ${num[3]}`)



for (pos = 0;pos<=num.length;pos++){
    console.log(`${num[pos]}`)
    
}

for (pos in num){
    console.log(num[pos])
}

for (pos = 0;pos<=num.length-1;pos++){
    //console.log(`${num[pos]}`)
    var a = num[pos]
}

console.log(a)
var b = num.length-1
console.log(num[b])

console.log(num[num.length-1])


//ACHAR O VALOR DO MEIO DE UM ARRAY

num1 = [1,5,3,7,6,5,5,8,9]


console.log(num1[(num1.length-1)/2])

console.log(num1.length)

var r = (num1.length)/2

console.log(r)

for (pos = 0;pos<=num.length;pos++){
    console.log(`${num[pos]}`)
}


let achar = num.indexOf(3)
console.log(`O valor está na posição ${achar}`)


let num7 = []
num7.push(6)
console.log(num7)*/


let lista1 = [1,5,3,7,9]
/*let listaOrdenada = lista.sort()

function tamLista(lista){
    return lista.length
}
function maxLista(lista){
    var tamanho = tamLista(lista)
    var ordenada = lista.sort()
    return ordenada[tamLista(lista) - 1]
    
}

console.log(`${tamLista(lista)}`)
console.log(`${listaOrdenada}`)

console.log(`${maxLista(lista)}`)*/


// FAZER FUNÇÃO PARA SOMAR VALORES DE UMA LISTA 

/*let lista2 = [1,4,7,4]

function somarvalores(lista){
    var soma = 0
    for (i = 0;i<lista.length;i++){
        soma += lista[i]
    }
    return soma
}
console.log(somarvalores(lista2))

lista2 = [1,4,7,4]
sum = 0
for (i = 0;i<lista2.length;i++){
    sum += lista2[i]
}
console.log(sum)*/


 lista = [52,57,2,1]

function tamLista(lista){
    return lista.length
}
function maiorLista(lista){
    var listaordenada = lista.sort()
    return listaordenada[tamLista(lista) - 1]
}
function menorLista(lista){
    var listaordenada = lista.sort()
    return listaordenada[0]
}
function somarvalores(lista){
    var soma = 0
    for (i = 0;i<lista.length;i++){
        soma += lista[i]
    }
    return soma
}
function media(lista){
    var soma = somarvalores(lista)
    let media = soma / lista.length
    return media
}

console.log(`${media(lista)}`)

 console.log(`${toFixed(media(lista))}`)
