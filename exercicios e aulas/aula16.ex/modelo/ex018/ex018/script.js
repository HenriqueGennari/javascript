let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')



let res = document.querySelector('div#res')

let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}
function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adiconado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já adicionado na lista.')
    }
    // valores.sort() --- > USAR SE FOR USAR AS FUNCTIONS
    num.value = '' 
    num.focus()
} 

function finalizar(){
    if (valores.length == 0){
        window.alert(`Adicione valores antes de finalizar.`)
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos]< menor)
                menor = valores[pos]
        }
        media = soma / tot

        res.innerHTML += `Ao todo, temos ${tot} valores. <br>`
        res.innerHTML += `O maior valor é ${maior} <br>`
        res.innerHTML += `O menor valor é ${menor} <br>`
        res.innerHTML += `A média dos valores é ${media} <br>`
    }
}


/*function tamLista(lista){
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
    let media = soma / tamLista(lista)
    return Number(media)
}


function finalizar(){
    res.innerHTML = ''
    res.innerHTML += `Ao todo temos ${tamLista(valores)} valores <br>`
    res.innerHTML += `O maior valor é ${maiorLista(valores)} <br>`
    res.innerHTML += `O menor valor é ${menorLista(valores)} <br>`
    res.innerHTML += `A média dos valores digitados foi ${media(valores).toFixed(2)}<br>`
}*/
