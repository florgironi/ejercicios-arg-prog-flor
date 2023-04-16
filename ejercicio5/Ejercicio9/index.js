
const calcular = (event) => {
  event.preventDefault()
  let pesos = document.getElementById("pesos")
  let dolares = document.getElementById("dolares")

  pesos.value = dolares.value * 300
}
