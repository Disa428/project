"use strict";

/* let a = 5;
    b = a;

  b = b + 5;

  console.log(b);
  console.log(a);


  const obj = {
    a: 5,
    b: 1
  };
 */
 /*  const copy = obj;

  copy.a = 10;

  console.log(copy);
  console.log(obj);
 */
 function copy(mainObj) {
     let objCopy = {};
     
     
     for (let key in mainObj) {
         objCopy[key] = mainObj[key];
     }
     return objCopy;
    
 }

 const numbers = {
     a: 2,
     b: 5,
     c: {
         x: 7,
         y: 4
     }
 };

 const newNumbers = copy(numbers);
 newNumbers.a = 20;
 newNumbers.c.x = 20;

 console.log(newNumbers);
 console.log(numbers);

 const add = {
     d: 17,
     e: 20
 };

 const clone = (Object.assign({}, add));

 clone.d = 20;

/*  console.log(clone);
 */

const oldArray = ['a', 'b', 'c' ];
const newArray = oldArray.slice();

newArray[1] = "eeeeeeeee";

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'rutube'];
      blogs = ['wordpress', 'livejurnal', ',loger'];
      enternet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(enternet);

      function log(a, b, c) {
          console.log(a);
          console.log(b);
          console.log(c);
      }

      const num = [3, 4, 5];
     log(...num);

     const array = ['a', 'b'];

     const newAarray = [...array];

     console.log(newAarray);

     const art = {
         y: 2,
         o: 44

        };

     const terr = {
         ...art
        };

        console.log(terr);