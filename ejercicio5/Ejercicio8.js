// 8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
// medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
// luego recorriendolo para mostrar el resultado deseado del ejercicio.
const arrayDePalabras = []
const palabraIngresada = prompt("Ingresa una palabra")
arrayDePalabras.push(palabraIngresada)
if (palabraIngresada === "cancelar"){
  console.log(arrayDePalabras.join(" - "))
}
