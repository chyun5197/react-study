// 1. Number Type
let num1 = 11;
let num2 = 4;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN; // not a number
console.log(1 * "hello") // => NaN .
// 불가능한 수치 연산. 에러가 아니라 NaN로 나와줌

// 2. String Type
let myName = "최현";
let myLoc = "방배"
let introduce = myName + myLoc;
console.log(introduce);

// 템플릿 리터럴 문법 (문자열 포맷팅처럼 변수 동적 사용 가능)
let introduceText = `${myName}은 ${myLoc}에 거주합니다`;
console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type : 값이 없다, 개발자가 직접 지정
let empty = null;

// 5. Undefined Type : 변수에 값을 초기화하지 않았을때 들어가는 기본값
let none;
let a;
console.log(none)
console.log(a)