'use strict';
// * async & await
// * clear style of using Promise

// * 1. async
async function fetchUser() {
  // do network in 10 secs....
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// * 2. await
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return 'Apple';
}

async function getBanana() {
  await delay(1000);
  return 'Banana';
}

function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} + ${banana}`);
  })
}

async function pickFruitsWithAwait() {
  // try { 
  const apple = await getApple();
  const banana = await getBanana();
  return `${apple} + ${banana}`;
  // } catch() {
  // }
}

async function pickFruitsWithAwaitSecond() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
// console.log(pickFruitsWithAwait());
// pickFruitsWithAwait().then(console.log);

// * return test
const returnTestAnonymousArrow = () => { return 1 };
const returnTestAnonymous = function() {
  return 'hi';
}
function returnTest() {
  return "I'm returned"; 
}
console.log(returnTest());
const returnTestValue = returnTest();
console.log(returnTestValue);
console.log(returnTestAnonymous());
console.log(returnTestAnonymousArrow());

// * 3. useful APIs
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' x '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);