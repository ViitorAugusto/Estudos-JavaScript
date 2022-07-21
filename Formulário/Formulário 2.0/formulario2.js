function meuForm () {
    const form = document.querySelector(`.formulario`)

    form.onsubmit = function (evento) {
        evento.preventDefault();
        alert(1)
        console.log(`Foi enviado`)
    }

}
meuForm();