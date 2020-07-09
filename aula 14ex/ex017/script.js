var comeco = document.getElementById('comeco')
var final = document.getElementById('final')
var pulo = document.getElementById('pulo')
var res = document.getElementById('res')

function counting() {
    if (validation() == false) {
        return false
    } else {
        res.innerHTML = 'Contando:  '

        //contagem crescente
        if (Number(comeco.value) < Number(final.value)) {
            for (let indice = Number(comeco.value); indice <= Number(final.value); indice += Number(pulo.value)) {
                res.innerHTML += `${indice}\n \u{1F919}`
            }
        //contagem decrescente
        } else {
            for (let indice = Number(comeco.value); indice >= Number(finish.value); indice -= Number(pulo.value)) {
                res.innerHTML += `${indice}\n \u{1F919}`
            } 
        }       
        res.innerHTML += `\u{1F6A9}` 
    }    
}

function validation() {
    if (comeco.value == "") {
        res.innerHTML = `<p>Impossível contar. Digite um número INICIAL para a contagem.</p>`
        comeco.focus()
        return false
    } else if (final.value == "" || final.value == comeco.value) {
        res.innerHTML = `<p>Impossível contar. Digite um número FINAL válido para a contagem.</p>`
        final.focus()
        return false
    } else if (pulo.value == 0 || pulo.value == null) {
        alert('O número digitado para pular é inválido. Adotamos o pulo de 1 em 1 para essa contagem.')
        pulo.value = 1
    }
}