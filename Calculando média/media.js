function calcular() {
    var nome = window.prompt(`Qual é o nome do aluno?`)
    var nota1 =Number(window.prompt(`${nome}, qual a sua primeira nota:`))
    var nota2 =Number(window.prompt(`Além ${nota1}, digite sua segunda nota:`))
    var media= (nota1 + nota2) /2
    
    var msg 
    if (media >= 6) {
        msg = `Meus Parabens`
    } 
    else { 
        msg =`Estude um pouco mais!`
    }
    var res = window.document.getElementById(`resultado`)
    res.innerHTML=`<p>Calculando média final de <mark>${nome}</mark></p>`
    res.innerHTML +=`<p>As notas obitdas foram <mark>${nota1}</mark> e <mark>${nota2}</mark></p>`
    res.innerHTML +=`<p>A média final será <mark>${media}</mark></p>`
    res.innerHTML +=`<p>A mensagem que temos é: <strong>${msg}</strong></p>`
    
}