'use strict';

// 매개변수 패턴 (Parameter pattern)
// 구조 분배 할당 (Destructing assignment)

/* 객체 구조 분해 할당 */
const user = {
  name: "HEROPY",
  age: 85
}

// function getName(user) {
//   const { name } = user
//   return name
// }

function getName({ name }) {
  return name
}

function getEmail({ email = 'No Email' }) {
  return email
}

console.log(getName(user)); // "HEROPY"

/* -------------------------------------------------------------------------- */

/* 배열 구조 분배 할당 */
const fruits = ['Apple', 'Banana', 'Cherry'];

// function getSecondItem([a, b, c]) {
//   return b
// }

function getSecondItem([, b]) {
  return b
}

console.log(getSecondItem(fruits));

/* -------------------------------------------------------------------------- */

/* 나머지 매개변수(Rest parameter)와 arguments */
/* ...: 전개 연산자 */

// function sum(...rest) {
//   console.log(rest);
// }

function sum(a, b, ...rest) {
  console.log(rest);
  console.log(arguments);
  // arguments: 매개변수로 들어오는 모든 정보를 갖고 있음, 타입은 array-like(유사배열), 별도 지정 없이 활용 가능
  return rest.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  // Array.reduce(): fn(callback(accumulated value, current value), initial value)
}

console.log(sum(1, 2, 3, 4, 5));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));