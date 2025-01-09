/*
# 연산자
++, --
|| && !
=== !== : 타입 포함하여 비교
== != : 타입 제외하고 비교
 */

// ?? : null 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;
let var4 = var1 ?? var2;
console.log(var4);
let var5 = var1 ?? var3;
console.log(var5);
let var6 = var2 ?? var3; // 둘 다 존재하는 값이면 앞의 값으로 할당
console.log(var6);

let name; // = '최현';
let nickname = '너구리';
console.log(name??nickname);

// typeof 연산자
// 값의 타입을 문자열로 리턴하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello";
let t1 = typeof var7;
console.log(t1);
console.log(typeof true);

// 삼항 연산자
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);


