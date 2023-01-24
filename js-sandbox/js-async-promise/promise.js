'use strict';

// * Promise is a Javascript object for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// * 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  setTimeout(() => {
    resolve('ellie');
    // reject(new Error());
    // Error는 자바스크립트 내장 객체
  }, 2000);
});

// * 2. Consumers: then, catch, finally
promise.then(value => {
  console.log(value);
})
.catch(error => {
  console.log(error);
})
.finally(() => {
  console.log('finally');
});
// * finally: 성공/실패 상관 없이 실행

// * 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num - 1), 1000);
  });
})
.then(num => console.log(num));

// * 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Chicken'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${hen} => 'Egg'`), 1000);
  });
const cook = egg => 
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 'Fried`), 1000);
  });

// const result = 
// getHen()
//   .then(chicken => getEgg(chicken))
//   .then(egg => console.log(egg))

getHen().
  then(getEgg);  