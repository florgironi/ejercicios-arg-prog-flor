//Ejercicio 6
function ejercicio6(num){
    if (0 < num < 10){
        var total = 1;
        for(var i=1; i<=num; i++){
            total = total*i
        }
        console.log(total)
    } else {
        console.log("debe introducir un numero desde el 1 hasta el 10 : ")
    }
}
ejercicio6(4)