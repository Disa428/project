"use strict";

if (4==9) {
  console.log("ok");
} else {
  console.log("Error");
}

const num = 50;
if (num < 49) {
  console.log("error");
} else if (num > 100) {
    console.log("много");
} else {
    console.log("В точку")
}

(num === 50) ? console.log("ok") : console.log('Error');


const num = 51; 

switch (num) {
  case 49:
    console.log("Неверно");
    break;
  case 100:
    console.log("Неверно");
    break;
  case 50:
    console.log("верно");
    break;
  default:
    console.log("Не в этот раз");

}


//Циклы

let nom = 50;

/* while (nom <= 55) {
  console.log(nom);
  nom++;
}

do {
  console.log(nom);
  nom++;

}

while (nom < 55); */

for (let i = 1; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
 }


