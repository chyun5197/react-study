// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];
let [one, two, three, four] = arr;
console.log(one, two, three, four, five = 5); // 빈값 할당, 기본값 할당

let [first, sec] = arr; // 개수 부족해도됨
console.log(first, sec);

// 2. 객체의 구조 분해 할당
let person = {
    name: "hyun",
    age: 30,
    hobby: "YouTube",
};
let {name, age, hobby} = person;
console.log(name, age, hobby);

let{
    age: myAge, // 다른이름으로 받아올 수 있음
    hobby: myHobby,
    extra="20"
} = person;
console.log(myAge, myHobby, extra);

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변를 받는 방법
const func = ({name, age, hobby, extra}) => {
    console.log(name, age, hobby, extra);
}
func(person);