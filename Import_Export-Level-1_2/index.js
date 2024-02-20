import {names, numbers} from './data.js'
import functions from './function.js';

console.log(functions.firstElement(names));
console.log(functions.expectLast(names));
console.log(functions.lastElement(names));
console.log(functions.expectFirst(names));
console.log(functions.removeElement(['remove', 'stay', 'stay5', 22, true, 'remove'],'remove'));
console.log(functions.withoutDuplicates([1,6,9,2,1,6,7,10]));
console.log(functions.arraySum(numbers));
console.log(functions.randomNumber(10, 20));
console.log(functions.firstCapitalLetter("René"));
console.log(functions.capitalLetter("René"));
functions.lastLetterCheck("Hallo", "o")