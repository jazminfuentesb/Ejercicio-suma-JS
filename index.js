//Dado un arreglo desordenado de enteros, encuentra un par cuya suma sea igual a la introducida por el usuario.


//Ejemplo:
//Input:
//arr =[8, 7, 2, 5, 3, 1]
//sum = 10

//Output:
//Encontré un par en los índices 0 y 2 (8+2)
//Encontré un par en los índices 1 y 4 (7+3)

const numeros = [8, 7, 2, 5, 3, 1];
const sumaObjetivo = 10;

function encontrarParSuma(arreglo, objetivo) {
  // Creamos un arreglo de objetos con valor e índice original
  const arregloConIndices = arreglo.map((valor, indice) => ({ valor, indice }));

  // Ordenamos por valor
  arregloConIndices.sort((a, b) => a.valor - b.valor);

  let izquierda = 0;
  let derecha = arregloConIndices.length - 1;

  while (izquierda < derecha) {
    const sumaActual = arregloConIndices[izquierda].valor + arregloConIndices[derecha].valor;
    if (sumaActual === objetivo) {
      return [arregloConIndices[izquierda].indice, arregloConIndices[derecha].indice];
    } else if (sumaActual < objetivo) {
      izquierda++;
    } else {
      derecha--;
    }
  }
  return "No se encontró un par con la suma deseada.";
}

const resultado = encontrarParSuma(numeros, sumaObjetivo);

if (typeof resultado === 'object') {
  console.log(
    `Encontré un par en los índices ${resultado[0]} y ${resultado[1]} (${numeros[resultado[0]]} + ${numeros[resultado[1]]})` 
  );
} else {
  console.log(resultado);
}

