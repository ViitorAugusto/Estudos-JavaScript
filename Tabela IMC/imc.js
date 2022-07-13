function calcular() {
    const peso = Number(document.getElementById(`peso`).value)
    const altura = Number(document.querySelector (`.altura`).value)
    const resultado = document.getElementById(`resul`)
    let imc = peso / (altura * altura) 
    let msg 
    if (imc < 18.5) {
        msg = `Abaixo do peso`
    } else if ( imc)

    resultado.innerHTML =`${imc}`

}