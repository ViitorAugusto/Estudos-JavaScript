 function meuFormulario ()  {
    const form = document.querySelector(`.form`)
    const resultado = document.querySelector(`resultado`)

    function recebeEventoForm (evento) {
        evento.preventDefaut()
    }

    form.addEventListener(`submit`, recebeEventoForm)
 }
 meuFormulario ()