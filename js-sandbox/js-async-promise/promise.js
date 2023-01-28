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
// 메소드 체이닝은 기본적으로 리턴값을 다음 메소드에 반환
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
    // setTimeout(() => reject(new Error('ERROR')), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 'Fried`), 1000);
  });

// const result = 
// getHen()
//   .then(chicken => getEgg(chicken))
//   .then(egg => console.log(egg))

getHen()
  .then(getEgg)
  .catch(error => {
    return 'ERR';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);

// * Callback Hell Refactoring
class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        resolve(id);
      } else {
        reject(new Error('not found'));
      }
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      if (user === 'ellie') {
        resolve({ name: 'ellie', role: 'admin' });
      } else {
        reject(new Error('no access'));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter yout password');
userStorage.loginUser(id, password)
  // .then(user => console.log(`${user} here`))
  .then(user => { return userStorage.getRoles(user) })
  // .then((user) => { userStorage.getRoles(user) })
  // .then(console.log)
  .then(userWithRole => { alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)})
  .catch(console.log);
  
// alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);

// JS method chaining
const chainTest = "";
async function chainFunction() {
  return 1;
}
const functionValue = chainFunction();

functionValue
  .then((elem) => elem + 1)
  .then(console.log);

const awaitFunction = async () => {
  let res = await functionValue;
  console.log(res);
}

awaitFunction();

// console.log(functionValue);