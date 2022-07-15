    const form = document.querySelector(`.formulario`)

    form.addEventListener(`submit`, function (e) { // Esse (e) e uma abreviação de .evento

        e.preventDefault()
        
        const inputPeso = e.target.querySelector(`#peso`) //e.target vai me mostrar qual elemento foi clicado na página.(pegando o input TODO.)
        const inputAltura = e.target.querySelector(`#altura`) // porém nao serve para pegar o valor no input só uma outra forma de pegar esse input poderia usar tambem document.querySelector.
        
        const peso = Number(inputPeso.value)// const peso = Number(document.getElementById(`peso`).value) posso usar essa tambem
        const altura = Number(inputAltura.value)
         
        // Vou validar os inputs 

        if (!peso) {
            setResultado (`Peso Inválido` , false)
            return // Se for inválido quero que meu programa pare aqui
        }
        if (!altura) {
            setResultado (`Altura Inválido` , false)
            return // Se não parar aqui  
        }
    } );  // Essa parte do códico para o enveio desse Formulário.

    function criarP (){
        const p = document.createElement('p') // Estou criando um parágrafo
        p.classList.add(`paragrafo-resultado`) //Criei uma class com esse comando
        
        
    }
    
    function setResultado (msg) {
        const resul = document.getElementById(`resul`)
        resul.innerHTML = `` // Essa function vai mostrar meu resultado em uma div.function setResultado Vou deixar em branco pra toda a vez que eu charmar ela ficar vazio
        const p = criarP () // colocando a function pra rodar no resultado
        p.innerHTML = msg  // colocar html dentro do parágrafi
        resul.appendChild(p) // inclui um filho (elemento) nessa div no caso (p)

       
        
    }







/*function calcular() {
    
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
    
    
}*/