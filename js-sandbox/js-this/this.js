// * this
// * '객체 데이터(함수)'를 정의하는 키워드
// * 일반 함수의 this는 호출 위치에서의 정의(참조)
// * 화살표 함수의 this는 자신이 선언된 함수(렉시컬) 범위에서 정의(참조)

const user = {
  firstName: 'Heropy',
  lastName: 'Park',
  age: 85,
  getFullName: function () {
    this.firstName
    this.lastName
    return `${this.firstName}  ${this.lastName}`
  }
}

console.log(user.getFullName());
// 점 표기법

const userArrow = {
  firstName: 'Heropy',
  lastName: 'Park',
  age: 85,
  getFullName: () => {
    this.firstName
    this.lastName
    return `${this.firstName}  ${this.lastName}`
  }
  // 화살표 함수 사용 시 객체를 포괄해 주는 범위 지정이 부재
}

console.log(userArrow.getFullName());

// 화살표 함수를 감싸는 새로운 객체 만들기
function userArrowWrap() {
  this.firstName = 'Anderson'
  this.lastName = 'Park'
  
  return {
    // 속성과 메소드를 합쳐서 멤버라는 이름으로 부르기도 함
    firstName: 'Heropy',
    lastName: 'Park',
    age: 85,
    getFullName: () => {
      this.firstName
      this.lastName
      return `${this.firstName}  ${this.lastName}`
    }
    // 화살표 함수 사용 시 객체를 포괄해 주는 범위 지정이 부재
    // 축약형 메소드 선언:
    // getFullName() { ... }
  }
}

const userArrowWrapReturned = userArrowWrap();
console.log(userArrowWrapReturned.getFullName())
// * 화살표 함수의 경우 호출하는 객체를 참조하는 것이 아니라 선언될 때의 객체만을 지속적으로 참조함

<<<<<<< HEAD
/* ANCHOR PROTOTYPE ---------------------------------------------------------------- */
// 객체 생성 함수를 활용한 객체 생성
// PROTOTYPE을 활용한 객체의 속성 및 메소드 추가
function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
// 객체 생성 함수의 메소드 생성 시에는 화살표 함수를 쓰면 this가 바라보는 대상이 달라질 수 있음
// 객체 생성 함수의 메소드 생성 시에는 일반 함수 사용 필요
User.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

const newUser = new User('James', 'Park');
const neoUser = new User('John', 'Park');

console.log(neoUser);
console.log(newUser.getFullName());
=======
// * this 더 이해하기
const timer = {
  title: 'TIMER',
  timeout() {
    console.log(this.title);
    // * Normal function
    // setTimeout(function () {
    //   console.log(this.title); // not seeing timer, instead it sees setTimeout function object
    // }, 1000)
    // * Arrow function
    setTimeout(() => {
      console.log(this.title); // it refers to lexical scope, so it sees timer wihout being capsulated by setTimeout
    }, 1000);
  }
}

timer.timeout();
>>>>>>> 37a207ac1a7d489475a6179fb7379b5120df50c9
