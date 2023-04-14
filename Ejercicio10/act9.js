// Crear un método que permite intercambiar las posiciones de dos elementos de un arreglo en base a sus índices

var arraydeNumero = [ 1, 4, 12, 0, 3, 29, 150]
var auxiliar;
function metodoIntercambio (primerIndice,segundoIndice){
    auxiliar = arraydeNumero[primerIndice]
    arraydeNumero[primerIndice] = arraydeNumero[segundoIndice]
    arraydeNumero[segundoIndice] =auxiliar
    console.log(arraydeNumero)
}
metodoIntercambio(0,1)