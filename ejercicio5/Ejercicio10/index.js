
const calcular = (event) => {
  event.preventDefault()
  let pesos = document.getElementById("pesos")
  let dolares = document.getElementById("dolares")

  dolares.value = pesos.value / 300
}
