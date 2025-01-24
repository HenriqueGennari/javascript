

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var fundo = window.document.getElementById('corpo')

    var agora = new Date()
    var hora = agora.getHours()

    


    msg.innerHTML = (`Agora são ${hora} horas. `)

    if (hora >= 0 && hora < 12){
        img.src = 'fotomanha.png'
        fundo.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora < 18){
        img.src = 'fototarde.png'
        window.document.body.style.background = '#b9846f'
    }
    else {
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#515154'
    }
}




