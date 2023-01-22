'use strict';

// * Array

// * 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// * 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[1]);

// * 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach
// fruits.forEach(function (fruit, index, array) {
//   console.log(fruit, index, array);
// });
fruits.forEach((fruit) => console.log(fruit))
// NOTE: 커맨드 클릭을 통해서 정확한 API 명세를 확인해 가면서 하는 것이 좋음

// * 4. Addition, deletion, copy
// push: add an item to the end
fruits.push('apple', 'peach');

// pop: remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('berry', 'lemon');
console.log(fruits);

// shift: remove an item for the beginning
fruits.shift('berry', 'lemon');
console.log(fruits);

// NOTE: Shift & unshift are really slow. So be careful when using it.

// splice: remove an item by index position
fruits.splice(1, 1);
fruits.splice(1, 1, 'melon', 'apple');
console.log(fruits);

// concat: combine two arrays
const fruits2 = ['sushi', 'roll', 'apple'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// * 5. Searching
// find the index
console.log(fruits.indexOf('apple'));

// includes (return bool)
console.log(fruits.includes('melon'));

// lastIndexOf
console.log(fruits.lastIndexOf('apple'));