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
let segundos = 0;

function iniciaRelogio(){
    const timer = setInterval(() => {
        segundos++;
        relogio.innerHTML= segundos
    }, 1000);
}

iniciar.addEventListener(`click`, function(event){ 
    iniciaRelogio()
}) 

pausar.addEventListener(`click`, function(event)
{ alert(`cliquei no pausar`)

}) 

zerar.addEventListener(`click`, function(event)
{ alert(`cliquei no zerar`)

}) 
