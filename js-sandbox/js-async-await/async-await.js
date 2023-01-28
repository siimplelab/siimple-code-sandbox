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
  await delay(3000);
  return 'Apple';
}

async function getBanana() {
  await delay(3000);
  return 'Banana';
}

function pickFruits() {
  return getApple().then(apple => {
    return getBanana().then(banana => `${apple} ${banana}`);
  })
}

pickFruits().then(console.log);