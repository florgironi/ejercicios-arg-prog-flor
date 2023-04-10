//Ejercicio 10
function mesDelAno(mes){
    switch (mes) {
        case (1,3,5,7,8,10,12):
            console.log("Tiene 31 dias este mes");
            break; 
        case (2,4,6,9,11):
            console.log("Este mes tiene 30 dias");
            break; 
        default:
            console.log("El numero tiene que estar en el rango de 0 y 12");
            break;
    }
}
mesDelAno(10);