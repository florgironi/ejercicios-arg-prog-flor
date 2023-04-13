// Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con solo los números pares
const array = [3,64,768,45,77,9,1,5,454,12,35,64,82]

const result = array.filter(number => number % 2 == 0);

console.log("Estos son los numeros pares: ",result);