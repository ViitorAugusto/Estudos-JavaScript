const numero = Number(prompt(`Digite um número`))
const resultado= document.getElementById(`resultado`)
const titulo = document.getElementById(`numero-titulo`)
titulo.innerHTML =`${numero}`

resultado.innerHTML += `<p>Raiz quadrada: <strong><mark>${Math.sqrt(numero)}</mark></strong></p> ` // para calcular a raiz quadrada, posso fazer numero ** 0.5 

resultado.innerHTML += `<p>${numero} é inteiro :<strong><mark> ${Number.isInteger(numero)}</mark></strong></p>` // .isInteger numero inteiro.

resultado.innerHTML += `<p>Arredondando para baixo :<strong><mark> ${Math.floor(numero)}</mark></strong>.</p>` // Math.floor(var) para baixo

resultado.innerHTML += `<p>Arredondando para cima :<strong><mark> ${Math.ceil(numero)}</mark></strong>.</p>` // Math.ceil(var) para cima

resultado.innerHTML += `<p>Com duas casas decimais :<strong><mark> ${numero.toFixed (2)}</mark></strong>.</p>` // Mudando as casas decimais com .toFixed(casas (2))

