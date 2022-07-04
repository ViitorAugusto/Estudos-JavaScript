function calcular() {
    var num1 = Number(window.prompt(`Digite um número:`))
    var num2 = Number(window.prompt(`Digite outro número:`))
    var res = document.getElementById(`resultado`) 
    
    if (num1 > num2) { // Colocar a condições no if
        res.innerHTML = `<p>Analisando os valores<mark> ${num1}</mark> e <mark>${num2}</mark>, o maior valor é <mark>${num1}</mark></p> `
    } else if (num1 < num2){ // Colocar a condições no else if para que o (else consigar se validado)
        res.innerHTML =  `<p>Analisando os valores<mark> ${num1}</mark> e <mark>${num2}</mark>, o maior valor é <mark>${num2}</mark></p> `
    } else { // Acho que nao precisa ter um condições aqui...
        res.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark> ${num2}</mark>, ambos os valores são igual</p> `
    } 
}