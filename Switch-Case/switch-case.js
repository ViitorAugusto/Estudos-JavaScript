const elementos = [
    {tag: 'p' , texto: `Qualquer texto que voce quiser.`},
    {tag: 'div' , texto: `Frase 2`},
    {tag: 'section' , texto: `Frase 3`},
    {tag: 'footer' , texto: `Frase 4`},
    {tag: 'main' , texto: `Frase 5`}
];

const container = document.querySelector(`.container`)
const div = document.createElement(`div`); // Criada uma Div pra colocar todos os elementos do meu array

for (let i = 0; i < elementos.length ; i++ ) {
    let { tag, texto} = elementos[i]
    let tagCriada = document.createElement(tag) // colocar a tag se eu colocar (p) vai criar 4 parágrafos.
    
    tagCriada.innerText = texto // innerHTML = posso usar tambem 
    div.appendChild(tagCriada) // Add as tag dentro dessa div.
}

container.appendChild(div) // Usando a Div criada aqui já com os elementos.

