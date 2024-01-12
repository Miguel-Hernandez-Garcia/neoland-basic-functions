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


