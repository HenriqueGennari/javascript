
function tabuada(){
    var n = document.getElementById('txtn')
    var numero = Number(n.value)

    var tab = document.getElementById('seltab')

    if (n.value.length == 0){
        window.alert('Por favor, digite um número')
    } else{
        tab.innerHTML = ''
        for (var c = 1; c <= 10;c++){
            let item = document.createElement('option')
            item.text = `${numero} X ${c} =  ${numero * c}`
            tab.appendChild(item)
        }
    }

}

    