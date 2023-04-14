// Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que contenga sólo las palabras que empiezan con una vocal.
const arrayWords = ['gato', 'animal', 'vendedor', 'amigable', 'estetico', 'objeto', 'hablar','uva','indio', 'cebolla','kira','una','indice']

function filterItems(arr) {
    return arr.filter((item) => item[0] == 'a'||item[0] == 'e'||item[0] == 'i'||item[0] == 'o'||item[0] == 'u');
  }
  
console.log(filterItems(arrayWords)); 

