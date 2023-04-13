// 1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista desordenada. Tiene que crear la lista uno mismo.
var a= [5,98,34,2,3,74,284,439,193,84,64]

function comparar ( a, b ){ return a - b; }
var aOrdenado = a.sort(comparar)
console.log(aOrdenado)