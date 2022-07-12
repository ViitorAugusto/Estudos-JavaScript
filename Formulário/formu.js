 function meuFormulario ()  {
    const form = document.querySelector(`.form`)
    const resultado = document.querySelector(`.resultado`)

    const pessoas = []  // uma array vazia

    function recebeEventoForm (evento) {
        evento.preventDefault()  // .preventDefault => desativa o browser de ser atualizado 
        const nome = form.querySelector(`.nome`)
        const sobrenome = form.querySelector(`.sobrenome`)
        const peso = form.querySelector(`.peso`)
        const altura =  form.querySelector(`.altura`)
        
        pessoas.push ({ // object , array estou criando com (.push) 
            nome: nome.value,
            sobrenome: sobrenome.value, // usando .value pois quero apenas o valor do input
            peso: peso.value,
            altura: altura.value
        })
         console.log(pessoas) // pra ver salva as array
        
        resultado.innerHTML += `<p> ${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    
    form.addEventListener(`submit`, recebeEventoForm) /*addEventListener, ainda não sei bem pra que serve
     mas aparentemente usado pra criar um evento.*/
 }
 meuFormulario () // executando minha function