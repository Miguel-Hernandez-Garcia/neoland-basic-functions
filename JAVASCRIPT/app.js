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

function findLongestWord(avengers) {
  let longestWord = avengers[1];
 for (let i = 1; i<avengers.length; i++) {
 if (avengers[i].length > longestWord.length) {longestWord=avengers[i]};
}; 

return longestWord;
}

//EJERCICIO PENDIENTE

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

/*const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
  for (let i = 0; i<numbers.length; i++) 
  {let totalsum = i};
};

return totalsum;*/

//EJERCICIO PENDIENTE