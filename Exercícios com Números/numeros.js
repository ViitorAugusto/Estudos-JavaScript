const numero = Number(prompt(`Digite um número`))
const resultado= document.getElementById(`resultado`)
const titulo = document.getElementById(`numero-titulo`)

titulo.innerHTML =`${numero}`
resultado.innerHTML += `<p>Raiz quadrada: <strong><mark>${numero ** 0.5}</mark></strong></p> ` // para calcular a raiz quadrada 
resultado.innerHTML += `<p>${numero} é inteiro :<strong><mark> ${Number.isInteger(numero)}</mark></strong></p>`



<strong><mark></mark></strong>