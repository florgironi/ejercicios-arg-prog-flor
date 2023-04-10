//Ejercicio 11
let indice
let linea
let espacio
function piramide(n){
    if(n>10){
        console.log("el numero tiene que ser menor a 10")
        return
    }
    for(let i=1;i<=n;i++){
        for(let rep=1; rep<=i;rep++){
            indice = rep;
            espacio = "" + indice
            // linea = indice.toString();
            console.log(espacio)
        }
    }
}
piramide(6);

// //Ejercicio 12
// function bultosStock(bultoEnStock,bultoXCaja){
//     const cajasCompletas=bultoXCaja/bultoEnStock
// }
 