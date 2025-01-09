// js는 기본적으로 동기적으로 실행
// js 엔진에는 쓰레드 1개뿐이라 여러 쓰레드에 각각 동기적으로 수행 명령 불가능(교안)
// => 비동기로 진행시킴 by callback 함수

console.log(1);
setTimeout(()=>{console.log(2)}, 3000) // 3초후 실행
console.log(3); // 3부터 로그 출력하고 윗줄 실행
console.log(3); // 3부터 로그 출력하고 윗줄 실행
console.log(3); // 3부터 로그 출력하고 윗줄 실행
setTimeout(()=>{console.log(2.5)})
console.log(3); // 3부터 로그 출력하고 윗줄 실행
console.log(3); // 3부터 로그 출력하고 윗줄 실행
console.log(3); // 3부터 로그 출력하고 윗줄 실행
console.log(3); // 3부터 로그 출력하고 윗줄 실행
// 1 3 2

// js엔진에서 setTimeout같은 비동기함수 만나면 Web APIs으로 처리를 넘김
// js엔진 코드 실행 끝나면 Web APIs에서 콜백함수 돌려줘서 실행
