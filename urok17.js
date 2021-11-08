"use strict";

const str = 'text';
console.log(str.length);

console.log(str[1]);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

const fruet = "some Fruet";
console.log(fruet.indexOf("e"));


 const logg = "Hello World";
/* console.log(logg.slice(7, 11));
console.log(logg.substring(7, 11)); */ 
console.log(logg.substr(6, 11));

const num = 12.2;
console.log(Math.round(num));

const test = '12.2 px';
console.log(parseInt(test));
console.log(parseFloat(test));