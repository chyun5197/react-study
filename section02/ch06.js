// 원시타입 vs 객체타입 -> 자바랑 유사
// js에서 객체타입 : Object, Array, Function
// 얕은복사, 깊은복사
let o1 = {'name':'hyun'};
let o2 = {'name':'hyun'};
console.log(o1 === o2); // 얕은 비교 (참조하는 주소 비교)
console.log(JSON.stringify(o1) === JSON.stringify(o2)); // 깊은 비교 (객체 문자열 비교)

// 반복문
let arr = []
for (let item of arr);

let person = {
    name: 'John',
    age: 35,
    hobby: 'Youtube'
};
let keys = Object.keys(person);
let values = Object.values(person);
for (let key in person);