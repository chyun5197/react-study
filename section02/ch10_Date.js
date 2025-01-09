// Date 객체
// getFullYear(), getMonth()+1, getDate()
// getHours(), getMinutes(), getSeconds()
let date1 = new Date();
console.log(date1);
let date2 = new Date("1997-01-07/10:20"); // 구분자 . / 모두 가능, 시간은 :
console.log(date2);
let date3 = new Date(1997,1,7, 23);
console.log(date3);

// Time Stamp - 1970.1.1부터 몇초 지났는지
let ts1 = date1.getTime();
console.log(ts1);
let date4 = new Date(ts1);
console.log(date4);
console.log("\n");

// 시간 수정 가능
date1.setFullYear(2023)
date1.setDate(30)
console.log(date1);
console.log("\n");

// 시간을 여러 포맷으로 출력
console.log(date1.toDateString()); // Mon Jan 30 2023
console.log(date1.toLocaleString()); // 2023. 1. 30. 오전 11:46:04
console.log(date1.toLocaleDateString()); // 2023. 1. 30.


