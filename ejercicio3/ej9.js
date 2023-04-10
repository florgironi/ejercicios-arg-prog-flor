//Ejercicio 9
function notaAlumno(nota){
    switch (nota) {
        case (0,1,2,3):
            console.log("Muy deficiente");
            break;
        case (4,5):
            console.log("Insuficiente");
            break;
        case (6):
            console.log("Suficiente");
            break;
        case (7):
            console.log("Bien");
            break; 
        case (8,9):
            console.log("Notable");
            break; 
        case (10):
            console.log("Sobresaliente");
            break;   
        default:
            console.log("La nota tiene que estar en el rango de 0 y 10");
            break;
    }
}
notaAlumno(8);