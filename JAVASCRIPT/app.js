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

const average=(array) => {
 let totalSumAverage = 0;
 for (let i = 0; i<array.length; i++)
 {totalSumAverage += array[i]}
  return totalSumAverage/array.length;
}

let resultNumbersAverage = average(numbersAverage);
console.log("🚀 ~ resultNumbersAverage:", resultNumbersAverage);


/*EJERCICIOS BÁSICOS DE FUNCIONES
Iteración 5: Calcular promedio de strings */

/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
  // insert code
}
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const averageWord=(array) => {
 let averageWordSum = 0;
 let averageWordSum2 = 0;
for (let i = 0; i<array.length; i++) {
if (typeof array[i] === "string") {
averageWordSum += array[i].length
 } else if (typeof array[i] === "number") {
averageWordSum2 += array[i]
}}
return `La suma de strings es ${averageWordSum} y la suma de números es ${averageWordSum2}`
}

const resultAverageWord = averageWord(mixedElements);
console.log("🚀 ~ resultAverageWord:", resultAverageWord);


/*EJERCICIOS BÁSICOS DE FUNCIONES
Iteración 6: Valores únicos */

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  // insert code
}
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

const removeDuplicates=(array) => {
  let uniqueElements = [];
 for (i = 0; i<array.length; i++) {

 if (!uniqueElements.includes(array[i])) 
  {uniqueElements.push(array[i]);}

 }
 return uniqueElements
}

const resultRemoveDuplicates = removeDuplicates(duplicates);
console.log("🚀 ~ resultRemoveDuplicates:", resultRemoveDuplicates);


/*EJERCICIOS BÁSICOS DE FUNCIONES
Iteración 7: Buscador de nombres */

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(param) {
  // insert code
}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

const finderName=(array, value) => {
  let nameIncluded = (array.includes(value)) ? `${value} está en la lista en la posición ${value.length}` : false;
  return nameIncluded
}

const resultNameFinder = finderName(nameFinder, `Jessica`);
console.log("🚀 ~ resultNameFinder:", resultNameFinder);


/*EJERCICIOS BÁSICOS DE FUNCIONES
Iteración 8: Contador de repeticiones */

/*-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  // insert code
}
--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

const repeatCounter=(array, value) => {
 let numberOfRepetitions = 0;
 for (i = 0; i<array.length; i++) {
 if (array[i]==value) {numberOfRepetitions++}
 }
return numberOfRepetitions
}

const resultRepeatCounter = repeatCounter(counterWords, `code`);
console.log("🚀 ~ resultRepeatCounte:", resultRepeatCounter);
