// Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.

const array= ["azul", "amarillo", "rojo", "verde", "café", "rosa"] 

function checkAvailability(arr, val) {
    return arr.some((arrVal) => val === arrVal);
  }
  
console.log(checkAvailability(array, "azul"))
console.log(checkAvailability(array, "morado"))
