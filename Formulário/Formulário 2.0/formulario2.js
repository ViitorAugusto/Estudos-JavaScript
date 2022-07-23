const form = document.querySelector(`.form`)

    form.addEventListener(`submit`, function (e){
        e.preventDefault()

        const inputNome = e.target.querySelector(`#name`)
        const inputSobreNome = e.target.querySelector(`#sobrenome`)
        const nome = inputNome.value
        

    })

    function setResultado () {
        const resul = document.querySelector(`.resul`)
        resul.innerHTML = ``
    }
