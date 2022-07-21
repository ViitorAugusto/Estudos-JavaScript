function meuForm () {
    const form = document.querySelector(`.form`)

    //form.onsubmit = function (evento) {
    //    evento.preventDefault();
    //    alert(1)
    //    console.log(`Foi enviado`)
    //}
    let contador = 1;
    function recebeEventoForm (evento) {
        evento.preventDefautl();
        console.log(`form nao foi enviado ${contador}`);
        contador++;
    }
    form.addEventListener(`submit`, recebeEventoForm)
}
meuForm();