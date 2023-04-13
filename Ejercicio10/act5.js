// Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
// a. Obtener aquellos nombres con al menos 6 letras.
// b. Obtener los nombres que comienzan con "M".
// c. Ordenar alfabéticamente y mostrar por consola.
// d. Generar un array que contenga solo las iniciales
// e. Ejemplo: ["F", "L", "E", "M",... ].
// f. Generar un array que contenga todos los nombres en mayúscula.
// g. Queremos saber si alguno de estos nombres comienza con "J”

var array = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"]
var soloIniciales = []
var arrayMayusculas = []
const filtradoDeNombres = array.filter((item)=> item.length > 6)
const empiezaConM = array.filter((item)=> item[0] == 'M')
const ordenAlfabetico = array.sort()

array.forEach((item)=>{
    soloIniciales.push(item[0]) 
})

array.forEach((item)=>{
    arrayMayusculas.push(item.toUpperCase()) 
})

const arrayConJ = (item) => item[0] === 'J';


console.log("Filtrado de nombres: ",filtradoDeNombres)
console.log("Empiezan con M: ",empiezaConM)
console.log("Oden alfabetico:",ordenAlfabetico)
console.log("Solo iniciales:",soloIniciales)
console.log("Array con mayusculas:",arrayMayusculas)
console.log("Existe en el array un elemento que empiece con J: ",array.some(arrayConJ));


