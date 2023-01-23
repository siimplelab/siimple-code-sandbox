// * Reference URL: https://www.youtube.com/watch?v=FN_D4Ihs3LE&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=10
// HTTP: 클라이언트/서버 통신 규약
// AJAX 비동기 통신 기술
// XMLTHttpRequest: 기본 AJAX API
// fetch() API: 신규 기본 AJAX API
// XML, JSON 등 활용. 과거 XML이 많이 사용돼 표준용어처럼 사용되기도 함
// JSON: {key: value}
// * SERIALIZE: object를 시리얼라이즈해서 JSON화, DESERIALIZE: JSON의 내용을 디시리얼라이즈해서 object화

// * JSON
// * Javascript Object Notation

// * 1. Object to JSON
// * stringify(obj) 
// 오버로딩: 같은 함수라도 콜 방식(인자 개수 등)에 따라 사용방법이 달라짐
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  // symbol 등 JSON으로 시리얼라이즈가 안 되는 속성들이 있음
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  // symbol: Symbol(),
  jump: () => {
    console.log(`${name} can jump!`);
  }
};

json = JSON.stringify(rabbit); 
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json);

console.clear();
json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value;
  // return key === 'name' ? 'ellie' : value;
  // 가장 최상위 오브젝트가 전달된 후부터 입력값들이 출력
})
console.log(json);

// * 2. JSON to Object
// * parse(json)
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value;
})
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate);

// * Useful tools: JSON Diff, JSON Beautifier, JSON Parser, JSON Validator