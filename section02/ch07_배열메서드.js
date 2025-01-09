/*
# 배열 메서드 ch07
push(e), pop()
shift() - 배열의 맨앞 원소를 꺼내서 반환
unshift(e) - 배열의 맨앞에 원소 추가
slice(a,b) - 슬라이싱 규칙 파이썬과 동일
arr1.concat(arr2) - 배열 이어붙임
*/

// 배열 순회 및 탐색 ch08
// forEach - 배열의 각 원소로 특정 동작을 수행시키는 메서드
// forEach((value, index, array)=>{})
let arr1 = [1, 2, 3];
arr1.forEach(function(item, idx, arr) {
   console.log(idx, item*2, arr);
});

let doubledArr = [];
arr1.forEach((item)=>{
    doubledArr.push(item*2);
});
console.log(doubledArr);

// includes(e), indexOf(e)
// findIndex(()=>{}) - 콜백함수를 만족하는 특정 원소의 인덱스를 반환
let arr4 = [1, 2, 3];
const isEven = arr4.findIndex((item) => item%2!==0);
console.log(isEven);

// 배열에서 일반값은 indexOf()로 찾기 가능하지만 객체값은 못찾음
// 객체값 찾으려면 findIndex(()=>{}) 필요
let namesArr = [
    {name: "h"},
    {name: "c"}
]
console.log(namesArr.indexOf({name:"h"})); // -1
console.log(namesArr.findIndex((item) => item.name==="h")); // 0

// find(()=>{})
// 콜백함수 만족하는 원소를 그대로 반환
console.log(namesArr.find((item) => item.name==="h")); // {name: 'h'}
console.log("\n");

// 변형 메서드 ch09
// filter(callbackFunc) - 해당 조건 원소들로 필터링하여 새로운 배열로 반환
let arr5 = [1, 2, 3, 4];
console.log(arr5.filter((item) => item%2!==0)); // [1, 3]

// map(()=>{})
// 콜백함수 실행하거나 혹은 리턴한 값들로 새로운 배열에 담아 반환
const mapResult1 = arr5.map((item,idx, arr)=>{
    // console.log(idx, item);
    return item*2;
})
console.log(mapResult1); // [2, 4, 6, 8]

// sort() - 사전순 정렬
// sort(()=>{}) - 콜백함수로 기준 부여 가능
let nums = [10,3,5]

// 숫자 오름차순
nums.sort((a,b)=>{
    if(a>b) return 1; // b,a 양수 반환은 b를 a앞으로
    else if(a<b) return -1; // a,b
    else return 0; // 자리 유지
});
console.log(nums);

// toSorted() - 원본은 그대로, 정렬한 새로운 배열을 반환
// join(sep='구분자') - 배열 모든 원소를 문자열로 합쳐서 반환 (파이썬과 동일)
let str = ['a', 'b', 'c', 'd'];
console.log(str.join());
console.log(str.join('\n'));
