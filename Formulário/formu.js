 function meuFormulario ()  {
    const form = document.querySelector(`.form`)
    const resultado = document.querySelector(`.resultado`)

    function recebeEventoForm (evento) {
        evento.preventDefault()
        const nome = form.querySelector(`.nome`)
        const sobrenome = form.querySelector(`.sobrenome`)
        const peso = form.querySelector(`.peso`)
        const altura =  form.querySelector(`.altura`)
        resultado.innerHTML = `texte ${nome.value}`
    }
    
    form.addEventListener(`submit`, recebeEventoForm)
 }
 meuFormulario ()