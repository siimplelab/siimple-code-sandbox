// * 1. Class delcartion
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
ellie.speak();
console.log(ellie.name);
console.log(ellie.age);

// * 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // 유저가 입력하는 인자의 값을 제어하는 용도로 게터와 세터가 활용될 수 있음

  get age() {
    return this._age;
    // this.age를 할당하면 재귀적인 구조가 되기에 관행적으로 언더바를 활용
  }
  
  set age(value) {
    // if (value < 0) {
    //  throw Error('age can not be negative');
    // }
    this._age = value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// * 3. Fields (public, private)
class Experiment {
  publicField = 2; // public (외부 접근 가능)
  #privateField = 0; // private (외부 접근 불가)
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField); // undefiend

// * 4. Static properties and 
// 동일하게 사용되는 클래스의 메소드 등을 정의하기 위해 static 키워드 사용
// 활용 시 오브젝트에 상관 없이 클래스 자체에 연결되어 있음
class Article {
  static publisher = 'Dream coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
// console.log(article1.publisher); 
// static으로 정의된 내용은 클래스를 통해서만 접근할 수 있음
console.log(Article.publisher);
Article.printPublisher();

// * 5. Inheritance
// 상속과 다향성
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 부모의 속성 호출
    console.log('new triangle');
  }
 
  getArea() {
    return (this.width * this.height) / 2; // over ridding
  }

  // Object의 속성을 오버라이딩 할 수 있음
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(100, 100, 'red');
rectangle.draw();
console.log(rectangle.getArea()); // method는 ()는 함께 표현 필요
const triangle = new Triangle(100, 100, 'blue');
triangle.draw();
console.log(triangle.getArea());

// * 6. Class checking: instaceof
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); 
// every object is an instance of Object
// Object의 속성을 오버라이딩 할 수 있음

console.log(triangle.toString());

// * Reference: Javascript reference MDN (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)