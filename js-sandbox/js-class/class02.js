'use strict'
// * ES6 class
// * Ways to create an object

// 객체 리터럴 방식
var me = {
  name : 'Kim',
  intro : function() {
    console.log(`My name is ${this.name}`);
  }
};

/* -------------------------------------------------------------------------- */
// * new 생성자 방식 (생성자 직접 생성 또는 사용자 정의 생성자 활용)
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}

// * new 생성자 방식 (생성자 직접 생성)
// var SelfObj = function(name, age){
//   this.name = name;  // this는 자신이 속한 객체를 참조하는 '자기 참조 변수'다.
//   this.age = age;
//   this.hello = function(){
//       return `이름은 ${this.name}이고, 나이는 ${this.age}입니다.`;
//   }
// }

// const user1 = new User('Steve', 'Job');
// const user2 = new User('Ellie', 'Park');

// * Object.create() 방식
// var parent = {a:10, b:20};

// var child = Object.create(parent);
// console.log(child.a);  // 10

// * 프로토타입 활용
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

// * Dot notation & bracket notation
// var key_name = 'name';
// console.log(myObj.key_name); // undefined

// myObj['name']; // '카레유'
// myObj['age'];  // 20
// myObj['hello'](); // '이름은 카레유이고, 나이는 20입니다.'

/* -------------------------------------------------------------------------- */
// * Now, ES6 class

class User {
  constructor(first, last) {
    this.firstName = first; 
    this.lastName = last;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const user1 = new User('Steve', 'Job');
const user2 = new User('Ellie', 'Park');

console.log(user1);
console.log(user2);
