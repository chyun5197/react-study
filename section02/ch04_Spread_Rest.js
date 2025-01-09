// 1. Spread 연산자 : '...'
// 객체나 배열에 저장된 여러개의 값을 개별로 뿌려준다
let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2);

let obj1 = {
    a: 1,
    b: 2
};
let obj2 = {
    ...obj1,
    c: 3,
    d: 4
};
console.log(obj2);

function funcA(p1, p2, p3){
    console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수 : 파이썬 가변매개변수랑 같은듯
function funcB(one, ...rest){ // Rest매개변수는 일반매개변수 뒤에 선언 가능
    console.log(one);
    console.log(rest); // 배열에 저장
}
funcB(...arr1);





