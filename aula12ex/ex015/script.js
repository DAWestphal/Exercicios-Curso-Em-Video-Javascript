
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()

    var minutes = data.getMinutes()
    var hora = data.getHours()
    if (minutes < 10) {
        minutes = "0"+minutes;
    }
    if (hora < 10) {
        hora = "0"+hora;
    }

    var horacorrigida = data.getHours() + ':' + minutes
     //var hora = 1
    msg.innerHTML = `Agora são ${horacorrigida} horas.`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'images/morning.gif'
        document.body.style.background = '#d39a95'
        msg.innerHTML += '<p>Bom dia!</p>'
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'images/noon.gif'
        document.body.style.background = '#88b3c0'
        msg.innerHTML += '<p>Boa tarde!</p>'
    } else {
        //boa noite
        img.src = 'images/night.gif'
        document.body.style.background = '#8f6162'
        msg.innerHTML += '<p>Boa noite!</p>'
    }
}

