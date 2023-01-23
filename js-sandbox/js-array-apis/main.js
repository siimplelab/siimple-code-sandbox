// * Q1. make a string out of an array
block: {
  const fruits = ['apple', 'banana', 'orange'];
  // * A1. JOIN
  const result = fruits.join(':');
  console.log(result);
}

// * Q2. make an array out of a string
{
  const fruits = 'apple, kiwi, banana, berry ';
  // * A2. SPLIT 
  const result = fruits.split(',', 2);
  console.log(result);
}

// * Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  // * A3. REVERSE
  const result = array.reverse();
  console.log(result);
  console.log(array);
}

// * Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  // * A4. SPLICE (SPLICE: 꼬아 잇다)
  const result = array.splice(0, 2);
  console.log(result);
  console.log(result);
}

// * Q5 ~
class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}

const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88)
]

// * Q5. find a student with the score 90
{
  // * A5. FIND()
  // const result = students.find((student) => student.score === 90);
  const result = students.find(function (student, index) {
    // if (student.score === 90) {
    //  return student;
    // }
    return student.score === 90;
    // console.log(student.score === 90);
  });
  console.log(result);
}

// * Q6. make an array of enrolled students
{
  // * A6. FILTER()
  // const result = students.filter((student) => student.enrolled = true);
  // console.log(result);
}

// * Q7. make an array containing only the students' scores
{
  // * A7.
  // const result = students.
}