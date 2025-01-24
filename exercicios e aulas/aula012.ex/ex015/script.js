
function verificar()
{
    var data = new Date()
    var anoatual = data.getFullYear() //2025

    var fano = document.getElementById('txtano')

    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > anoatual){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = anoatual - Number(fano.value)

        var img = document.createElement('img')
        img.setAttribute('id','foto')

        var gênero = ''
        
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/bebe-mm.png')
            }
            else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src','imagens/jovem-mm.png')
            }
            else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src','imagens/adulto-mm.png')
            }
            else if (idade > 50){
                //idoso
                img.setAttribute('src','imagens/idoso-mm.png')
            }


        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                // crianca
                img.setAttribute('src','imagens/bebe-ff.png')
            }
            else if (idade >= 10 && idade < 21){
                //jovem
                img.setAttribute('src','imagens/jovem-ff.png')
            }
            else if (idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src','imagens/adulto-ff.png')
            }
            else if (idade > 50){
                //idoso
                img.setAttribute('src','imagens/idosa-ff.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um/uma ${gênero} com ${idade} anos`
        res.appendChild(img)
        
    }

}



