function calcular() {
    var num1 = Number(window.prompt(`Digite um número:`))
    var num2 = Number(window.prompt(`Digite outro número:`))
    var res = document.getElementById(`resultado`) 
    var maior //Nao precis
    if (num1 > num2) {
        res.innerHTML = `Analisando os valores ${num1} e ${num2}, o maior valor é ${num2} `
    } else {
        maior = num2
    }
    res.innerHTML=`${maior}`
}