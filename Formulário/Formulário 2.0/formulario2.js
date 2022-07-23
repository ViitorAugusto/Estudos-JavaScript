const form = document.querySelector(`.form`)

    form.addEventListener(`submit`, function (e){
        e.preventDefault()

        const inputNome = e.target.querySelector(`#name`)
        console.log(inputNome)

    })
