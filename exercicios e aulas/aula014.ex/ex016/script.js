
function contar(){
    var txti = document.querySelector('input#inicio')
    var inicio = Number(txti.value)
    
    var txtp = document.querySelector('input#passo')
    var passo = Number(txtp.value)

    var txtf = document.querySelector('input#fim')
    var fim  = Number(txtf.value)
    
    var res = document.getElementById('res')

    if (txti.value.length == 0 || txtp.value.length == 0 || txtf.value.length ==0){
        res.innerHTML = 'Impossível contar!'

    }else{
        res.innerHTML = `<p id="e">Contando de ${inicio} até ${fim} temos: <br></p>`

        if (passo <= 0){
            window.alert('Passo inválido, tratando passo como igual a 1.')
            passo = 1
        }
        if (inicio < fim){
            // CONTAGEM CRESCENTE
            for(var c = inicio; c <= fim; c+= passo){
                res.innerHTML += ` ${ c } \u{1F449}`
            }
        } else{
            //CONTAGEM DECRESCENTE
            for (c = inicio; c >= fim; c -= passo){
                res.innerHTML += ` ${ c } \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }   
    
}
 