const btnEnviarPrimerForm = document.querySelector('#btn-enviar-form-contacto')
const primerForm = document.querySelector('#primerForm')
const mensajeDespuesDeForm = document.querySelector('mensajeDespuesDeForm')
const botonSiguienteForm = document.querySelector("#btn-siguiente-form")
const botonPagarForm = document.querySelector("#btn-pagar-form")


function preventDefaultfunction(e) {
e.preventDefault();
console.log('si se hace el click')
}
function esconderPrimerForm() {
console.log('ESTE CLICK TAMBIEN ')

    primerForm.style.display = 'none'
    mensajeDespuesDeForm.style.display = 'inline-block'
}


btnEnviarPrimerForm.addEventListener('click', preventDefaultfunction)
btnEnviarPrimerForm.addEventListener('click', esconderPrimerForm)
// botonSiguienteForm.addEventListener('click', preventDefaultfunction); 
// botonPagarForm.addEventListener('click', preventDefaultfunction)
