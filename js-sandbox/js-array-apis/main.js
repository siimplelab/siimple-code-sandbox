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
  new Student('D', 40, false, 90),
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
    // return true;
  });
  console.log(result);
}

// * Q6. make an array of enrolled students
{
  // * A6. FILTER()
  const result = students.filter((student) => {
    // student.enrolled === true;
    return true;
  });
  console.log(result);
}

// * Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  // * A7. MAP()
  const result = students.map((student) => {
    // student.score
    return student.score;
  });
  console.log(result);
}

// * Q8. check if there is a student with the score lower than 50
{
  // * A8. SOME(), EVERY()
  let result = students.some((student) => {
    return student.score < 50;
  });
  console.log(result);

  result = students.every((student) => student.score < 50);
  console.log (result);
}

// * Q9. compute students' average score
{
  // * A9. REDUCE()
  const result = students.reduce((prev, curr) => {
    // console.log(prev);
    // console.log(curr.score);
    return (prev + curr.score / students.length);
    // 리턴값들이 prev에 순차적으로 할당됨
  }, 0);
  console.log(result);
}

// * Q10. make a string containing all the scores
// result should be: '45, 80, 90, 60, 88'
{
  const result = students.map((student) => {
    return student.score;
  })
  .filter((score) => score >= 50)
  .join(', ');
  console.log(result);
}

// * Q11. do Q1 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  // * A11. SORT()
  console.clear();
  const result = students.map((student) => {
    return student.score;
  }).sort((a,b) => {
    // return a - b;
    return b - a;
    // console.log(b);
    // console.log(b - a);
  });
  console.log(result);
}