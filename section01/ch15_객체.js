// ch15~16
// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {} // 객체 리터럴 (대부분 사용)

// 2. 객체 속성 {key:value..}
let person = {
    name: '현',
    nickname: '아메리카노',
    age: 90,
    days: ['월','화','수'],
    10: 20,
    "like dog": true // 띄어쓰기 포함되면 따옴표 필요
};
console.log(person);
console.log(person['name']);
console.log(person['age']);
console.log(person['days']);
console.log(person[10]);
console.log(person['like dog']);
console.log(person.name)
console.log(person.nickname)
// 없는 값은 undefined 반환

// 추가, 수정
person.job = "개발자";
person['hobby'] = "YouTube";
person['name'] = "hyun";
console.log(person);

// 삭제
delete person.job;
delete person['nickname'];

// 존재 유무
console.log('name' in person);
console.log(!'name' in person);
console.log("\n");
// ============================================================
// 1. 상수 객체
const animal = {
    type: "강아지",
    name: "뭉치",
    color: "golden"
}

// 추가, 수정, 삭제는 가능
animal.age = 5;
animal.name = "뭉뭉치치"
delete animal.color;

// animal = 13; 새로운 초기화는 안됨
console.log(animal);

// 2. 메서드
const human = {
    name: "멍멍",
    sayHello(){ // 객체 내에서는 앞에 'function' 안 써도 됨
        console.log("안녕");
    },
};
human.sayHello();
human["sayHello"]();
