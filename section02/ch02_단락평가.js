/* ch01
# Falsy
undefined, null, 0, NaN, "", 0n

# Truthy
존재값, [], {}, () => {}
 */

/* ch02
# 단락 평가(||, &&) 활용
논리연산에서 첫번째 피연산자의 참거짓에 따라 뒤의 연산 수행여부 결정되는 특징을 함수의 실행여부 적용 가능
|| : 앞이 참이면 뒤에 체크X (true 반환), 거짓이면 뒤에 체크O
&& : 앞이 거짓이면 뒤에 체크X (false 반환), 참이면 뒤에 체크O
 */
function a(){
    console.log("falseA")
    return false;
}
function b(){
    console.log("trueB")
    return true;
}
function c(){
    console.log("trueC")
    return true;
}

// 참거짓(OX 시행여부)
let case1 = a() || a(); // f(O) f(O)
console.log("# case1: " + case1);
let case2 = a() || b(); // f(O) t(O)
console.log("# case2: " + case2);
let case3 = b() || a(); // t(O) f(X)
console.log("# case3: " + case3);
let case4 = b() || c(); // t(O) t(X)
console.log("# case4: " + case4);
console.log("\n");

case1 = a() && a()
console.log("# case1: " + case1); // f(O) f(X)
case2 = a() && b()
console.log("# case2: " + case2); // f(O) t(X)
case3 = b() && a()
console.log("# case3: " + case3); // t(O) f(O)
case4 = b() && c()
console.log("# case4: " + case4); // t(O) t(O)

function printName(person){
    // console.log(person && person.name);
    const name = person && person.name;
    console.log(name || "person의 값 없음")
}
printName(); // 없을때도 에러 없이 undefined 출력
printName({name:"최현"}); // 있을때는 이름만 출력

