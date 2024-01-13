/*EJERCICIOS BÁSICOS DE FUNCIONES
Iteración 1: Buscar el máximo */

/*-------------------------------------------------------------------------------
Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne , numberTwo) {
  // insert code
}
--------------------------------------------------------------------------------*/

function givehighernumber(a, b) {
  if (a>b) {return a};
  if (b>a) {return b};
  if (b===a) {return "Same number!"};
};

let resulthighernumber = givehighernumber(6,6);
console.log("🚀 ~ resulthighernumber:", resulthighernumber)

/*EJERCICIOS BÁSICOS DE FUNCIONES
Iteración 2: Buscar la palabra más larga */

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------
Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  // insert code
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

const findLongestWord=(array) => {
  let longestWord = "";
 for (let i = 0; i<array.length; i++) {
 if (array[i].length > longestWord.length) {longestWord=array[i]};
}; 

return longestWord;
}

let resultLongestWord = findLongestWord(avengers);
console.log(resultLongestWord)

/*EJERCICIOS BÁSICOS DE FUNCIONES
Iteración 3: Calcular la suma */

/*--------------------------------------------------------------------------------------------------------------------------------------------
Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz. 
Puedes usar este array para probar tu función:
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
  // insert code
}
----------------------------------------------------------------------------------------------------------------------------------------------*/

const numbers = [1, 2, 3, 5, 45, 37, 58];
let totalSum = 0;

const sumAll=(array) => {
  for (let i = 0; i<array.length; i++) 
 {totalSum += array[i]} 
 return totalSum
};

let resultSumAllNumbers = sumAll(numbers);
console.log(resultSumAllNumbers);

/*EJERCICIOS BÁSICOS DE FUNCIONES
Iteración 4: Calcular el promedio */

/*------------------------------------------------------------------------------------------------------
Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  // insert code
}
--------------------------------------------------------------------------------------------------------*/

const numbersAverage = [12, 21, 38, 5, 45, 37, 6];
let totalSumAverage = 0;

const average=(array) => {
 for (let i = 0; i<array.length; i++)
 {totalSumAverage += array[i]}
  return totalSumAverage/array.lenght;
}

let resultNumbersAverage = average(numbersAverage);
console.log("🚀 ~ resultNumbersAverage:", resultNumbersAverage);

//EJERCICIO PENDIENTE - RECIBO UN NaN en console.log