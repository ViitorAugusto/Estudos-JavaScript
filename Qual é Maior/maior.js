function calcular() {
    var num1 = Number(window.prompt(`Digite um número:`))
    var num2 = Number(window.prompt(`Digite outro número:`))
    var res = document.getElementById(`resultado`) 
    
    if (num1 > num2) { // Colocar a condições no if
        res.innerHTML = `Analisando os valores ${num1} e ${num2}, o maior valor é ${num1} `
    } else if (num1 < num2){ // Colocar a condições no else if para que o (else consigar se validado)
        res.innerHTML = `Analisando os valores ${num1} e ${num2}, o maior valor é ${num2} `
    } else { // Acho que nao precisa ter um condições aqui...
        res.innerHTML = `Analisando os valores ${num1} e ${num2}, ambos os valores são igual `
    } 
}