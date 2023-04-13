// Dado el array a=[1,2,3,4,5,6]
// a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos en pantalla.
// b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en pantalla.
// c. Iterar por todos los elementos dentro de un array utilizando .forEach y mostrarlos en pantalla.
// d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
// e. Generar una copia de un array pero con todos los elementos incrementados en 1.
// f. Calcular el promedio

var a = [1,2,3,4,5,6]
let i = 0;
var aCopy = a

while (i < a.length) {
    console.log("Array recorrido con while:",a[i] );
    i++;
}

for ( i=0 ; i < a.length ; i++){
    console.log("For:",a[i] )
}

a.forEach(element => console.log("forEach:", element));


for ( i=0 ; i < a.length ; i++){
    var elementoMasUno = a[i] +1
    console.log("Elemento + 1:",elementoMasUno)
}

var acumulador = 0
a.map((elemento)=>{
    acumulador+= elemento
})
var promedio = acumulador/(a.length)
console.log("El promedio es:", promedio)
