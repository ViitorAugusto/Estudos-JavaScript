const paragrafos = document.querySelector('.paragrafos')
const ps = document.querySelectorAll(`p`)
// Pegar os estilos do browser

const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
console.log(backgroundColorBody)

//