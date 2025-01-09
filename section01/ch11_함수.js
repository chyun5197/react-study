// ch11~13
console.log(getArea(5, 10));

// 함수 호출 아래에 선언해도 실행됨(호이스팅)
function getArea(width, height) { // 매겨변수에 let 안써도됨
    function  another(){ // 중첩 함수
        console.log("another")
    }
    let area = width * height;
    console.log(area);
    another()
    return "종료"
}

console.log(getArea(10, 20));
console.log("\n");
// ============================================================
// 1. 함수 표현식
function funcA(){
    console.log("funcA");
}
let varA = funcA
varA();

let varB = function(){
    console.log("funcB");
}; // 익명함수
varB();

// 2. 화살표 함수
let varC = () => {
    return 1;
};
console.log(varC());
let varD = (num) => num+1;
console.log(varD());
console.log("\n");
// ============================================================
// 1. 콜백 함수 : 매개변수로 전달받은 함수
function main(value){
    console.log(value);
}

function sub(){
    console.log("sub");
}

main(sub);
main(function(){
    console.log("내부 익명");
});
main(() => {
    console.log("가능")
})
/* 콘솔 로그 : 함수 자체가 찍힘
ƒ sub(){
    console.log("sub");
}
 */

console.log("콜백함수");

// 2. 콜백함수의 활용
function repeat(count, callback){
    for (let i = 1; i <= count; i++) {
        // console.log(i);
        callback(i)
    }
}
// repeat(5)
repeat(5, function (idx){
    console.log(idx);
})

repeat(5, function (idx){
    console.log(idx*2);
})

repeat(5, (idx) => {
    console.log(idx*3);
})


// function repeatDouble(count){
//     for (let i = 1; i <= count; i++) {
//         console.log(i*2);
//     }
// }
// repeatDouble(5)

