// Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.

var a = [ 1, -4, 12, 0, -3, 29, -150]

let suma =0

const filtradoDeNumeros = a.filter((valor)=> valor > 0)
for (let i = 0; i < filtradoDeNumeros.length; i++) {
  suma += filtradoDeNumeros[i]
}

console.log ("la suma es: " + suma)