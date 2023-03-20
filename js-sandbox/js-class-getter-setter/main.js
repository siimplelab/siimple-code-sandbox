// Getter & Setter

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }

  // 메서드
  // getFullName() {
  //   return `${this.firstName} ${this.lastName}`;
  // }

  // 속성같은 메서드 
  get fullName() {
    console.log('Getting full name...')
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    console.log(value)
    ;[this.firstName, this.lastName] = value.split(' ');
  }
}

const user = new User('Steve', 'Jobs');
console.log(user.fullName);

user.firstName = 'Elon';
console.log(user.fullName);

user.fullName = 'Bill Gates';
console.log(user);