'user strict';

// * Reference URL: https://www.youtube.com/watch?v=s1vpVCrT8f4&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=11

// * Javascript is synchrounous.
// Execute the code block in order after hoisting.
// hoisting: var, function declaration.
// NOTE: 모든 변수, 함수의 선언은 호이스팅되는 성질을 지님

console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');

// * Synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('hello'));

// * Asynchronous callback
function printWithDealy(print, timeout) {
  setTimeout(print, timeout);
}

printWithDealy(() => console.log('async callback'), 2000);

// * Callback hell example
// 읽고 이해하기가 어려움, 디버깅 난이도 높음
//  네트워크 통신 모의 구성
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter yout password');
userStorage.loginUser(id, password, (user) => {
  userStorage.getRoles(user, userWithRole => {
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
  })
}, error => { console.log(error) });