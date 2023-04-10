//Ejercicio7
function elPolindromo(frase){
    const fraseReversed = frase.split("").reverse().join("");
    return fraseReversed === frase? "es polindromo" : "no es polindromo"
}
console.log(elPolindromo("somos o no somos"))
