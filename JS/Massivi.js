"use strict";

const arr = [12, 26, 37, 6, 18];

arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
  return a - b;
}
/* arr[99] = 0;
console.log(arr.length);
console.log(arr); */

/* arr.forEach(function(item, i, arr) {
  console.log(`${i}: ${item} в массиве ${arr}`);
}); */

/* arr.pop(); */


/* arr.push(10);
console.log(arr); */

/* for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
} */

/* for (let value of arr) {
  console.log(value);
} */

const str = prompt(', ');
const product = str.split(', ');
product.sort();
console.log(product.join(';'));