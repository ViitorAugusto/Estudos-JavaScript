function max (x ,y) {
    if (x > y) {
        return x;
    } else {
        return y
    }
}
const maior = max (15, 11) 
console.log(maior) //Posso chamar a function direto.
// console.log(max(15, 11)); 

        // Arrow function
 const max2 = (x, y) => x > y ? x : y;
 console.log(max2(15, 110)) 
