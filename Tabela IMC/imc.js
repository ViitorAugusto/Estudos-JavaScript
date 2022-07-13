function calcular() {
    
    const peso = Number(document.getElementById(`peso`).value)
    const altura = Number(document.querySelector (`.altura`).value)
    const resultado = document.getElementById(`resul`)
    let imc = peso / (altura * altura) 
    let msg 
    if (imc < 18.5) {
        msg = `Abaixo do peso`
    } else if ( imc >= 18.5 && imc <= 24.9 ) {
        msg = `Peso normal`
    } else if (imc >= 25 && imc <= 29.9 ) {
        msg = `Sobrepeso`
    } else if ( imc >= 30 && imc <= 34.9) {
        msg = `Obesidade grau 1`
    } else if ( imc >= 35 && imc <= 39.9) {
        msg = `Obesidade grau 2`
    } else  {
        msg= `Obesidade grau 3`
    }

    resultado.innerHTML =` Seu IMC é :${imc.toFixed(2)} Voce esta: ${msg}`
    
    
}