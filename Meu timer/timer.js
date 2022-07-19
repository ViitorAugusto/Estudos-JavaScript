function relogio() {
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
let timer 

function iniciaRelogio(){
    timer = setInterval(() => { // let timer
        segundos++; // let segundos
        relogio.innerHTML= criarHoraDosSegundos(segundos)
    }, 1000);
}

iniciar.addEventListener(`click`, function(event){
    relogio.classList.remove(`pausado`) 
    clearInterval(timer)
    iniciaRelogio()
}) 

pausar.addEventListener(`click`, function(event){ 
    clearInterval(timer)
    relogio.classList.add(`pausado`)
}) 

zerar.addEventListener(`click`, function(event){ 
    clearInterval(timer)
    relogio.innerHTML = `00:00:00`
    segundos = 0
    relogio.classList.remove(`pausado`) 
}) 
}
relogio()
// Modelo com e.target 
//document.addEventListener('click', function(e){
//    const el = e.target //Novamente target vou pegar o click no document
//    if (el.classList.contains(`zerar`))
//    clearInterval(timer)
//    relogio.innerHTML = `00:00:00`
//    segundos = 0
//    relogio.classList.remove(`pausado`) 
// })