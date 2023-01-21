'use strict';

// Reference URL: https://www.youtube.com/watch?v=1Lbr29tzAA8&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=7

// * Ojbects
// one of the Javascript's data types
// a collection of related data and/or functionality.
// nearly all objects in Javascript are instances of Object
// object = { key: value };

// * 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

// with Javascript magic (dynamically typed language)
// can add properties later 
ellie.hasJob = true;
console.log(ellie.hasJob);

// * 2. Computed properties
// key should be always string
// 값이 아직 확정되지 않은 속성을 참조할 때 사용
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// * 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

// * 4. Constructor Function 
// ES6 클래스 도입 전까지 활용한 컨스트럭터 함수 
function Person(name, age) {
  // this = {}; 생략
    this.name = name,
    this.age = age
  // return this; 생략
}

// * 5. in operator: property exstence check (key in obj)
// 객체의 속성 존재 여부 체크 
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.radnom); // undeifned

// * 6. for..in vs for..of'
// for (key in obj)
// 오브젝트를 대상으로 한 속성 반복문
console.clear();
for (const key in ellie) {
  console.log(key);
}

// for (value of iterable)
// 배열을 대상으로 한 요소 반복문
const array = [1, 2, 3, 4, 5];
// for(let i = 0; i < array.length; i++) {
//   console.log(array[i]);
// }
for (const value of array) {
  console.log(value);
}

// * 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
console.log(user); // 'coder'

// * old way of assigning properties to a new Object
const user3 = {};
for (const key in user) {
  user3[key] = user[key];
  console.log(user[key]);
}

console.clear();

// * new way of assigning properties to a new Object
const user4 = {};
Object.assign(user4, user3);
// 새로운 메소드를 쓰거나 할 때는 리턴값이 무엇인지 확인하는 것이 좋음
console.log(user4);

// * another example
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);