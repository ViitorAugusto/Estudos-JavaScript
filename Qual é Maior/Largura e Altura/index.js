function ePaisagem (largura, altura) {
    return largura >= altura // ? true : false
} //Nesse caso ja estamos checando algo que ja vai return verdaderio ou falso
  //não precisa do ternário
console.log(ePaisagem(1920, 1080))


        // Arrow function

const ePaisagem2 = (largura, altura) => largura > altura
console.log(ePaisagem2(1920, 1440))      
