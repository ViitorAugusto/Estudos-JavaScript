function criarHoraDosSegundos (segundos) {
    const data = new Date (segundos * 1000) // Multiplicar por 1000 para obter o milésimo de segundos
    return data.toLocaleTimeString(`pt-BR`,
    {
        hour12: false,
        timeZone: 'UTC'
    })
}

const relogio = document.querySelector(`.relogio`)
const iniciar = document.querySelector(`.iniciar`)
const pausar = document.querySelector(`.pausar`)
const zerar = document.querySelector(`.zerar`)
let segundos = 0; // 
let timer 

function iniciaRelogio(){
    timer = setInterval(() => { // let timer
        segundos++; // let segundos
        relogio.innerHTML= criarHoraDosSegundos(segundos)
    }, 1000);
}

iniciar.addEventListener(`click`, function(event){ 
    clearInterval(timer)
    iniciaRelogio()
}) 

pausar.addEventListener(`click`, function(event)
{ clearInterval(timer)

}) 

zerar.addEventListener(`click`, function(event)
{ clearInterval(timer)
    relogio.innerHTML = `00:00:00`
    segundos = 0
}) 
