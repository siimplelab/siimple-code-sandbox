'use strict';

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
console.log(ellie.radnom);

