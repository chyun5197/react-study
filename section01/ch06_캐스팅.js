// 1. 묵시적 형 변환 (자동 타입변환)
let num = 10;
let str = "20"
console.log(num+str) // 문자열로 더해짐

// 2. 명시적 형 변환 (수동 타입변환)
let str1 = "10";
let strToNum1 = Number(str1);
console.log(strToNum1 + 10);

let str2 = "10개"
// let str2 = "asdf10개" 이건 안됨
let strToNum2 = parseInt(str2);
console.log(strToNum2) // 앞쪽의 숫자만 형변환해준다

let num1 = 20;
let numToStr1 = String(num1)
console.log(numToStr1 + "입니다")