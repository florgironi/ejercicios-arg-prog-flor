// 6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.
const arrayNumerosAleatorios = []
while(arrayNumerosAleatorios.length < 10) {
  const numeroAleatorio = Math.floor(Math.random() * 100);
  arrayNumerosAleatorios.push(numeroAleatorio)
}
console.log(arrayNumerosAleatorios)
