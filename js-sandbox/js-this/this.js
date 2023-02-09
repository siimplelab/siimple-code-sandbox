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