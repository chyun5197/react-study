/*
# Promise는 비동기 작업을 감싸는 객체
비동기 작업 실행, 상태 관리, 결과 저장, 병렬 실행, 다시 실행...

# Promise의 3가지 상태
대기(pending) -> 성공(Fulfilled) : 해결(resolve)
             -> 실패(Rejected)  : 거부(reject)

 */

// 1단계)
const promise = new Promise((resolve, reject)=>{
    // 비동기 작업 실행하는 함수
    // executor
    setTimeout(()=>{
        console.log("hello");
        resolve("안녕");
        reject("실패한 이유"); // reason: 자바 예외 메세지랑 비슷한듯
    }, 2000);
});

// console.log(promise);
setTimeout(()=>{
    console.log("promise");
}, 3000);

// 2단계)
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        const num = 10; // resolve 실행
        // const num = null; // reject 실ㅇ행
        if (typeof num === 'number') {
            resolve(num + 10)
        } else {
            reject("숫자가 아닙니다")
        }
    }, 2000);
});

// 1. then(()=>{}) : promise 성공 후에 (resolve 수행 후에) 콜백함수 실행
// promise2.then((value) => {
//     console.log(value);
// });

// 2. catch(()=>{}): promise 실패 시 예외처리
// promise2.catch((error) => {
//     console.log(error);
// });

// promise chaining : 위 둘 합쳐 사용
promise2
    .then((value) => {
    console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });

// 3단계) 함수로 관리
function add10(num){
    const promise3 = new Promise((resolve, reject)=>{
        setTimeout(() => {
            // const num = 10; // resolve 실행
            // const num = null; // reject 실ㅇ행
            if (typeof num === 'number') {
                resolve(num + 10)
            } else {
                reject("숫자가 아닙니다")
            }
        }, 2000);
    });
    return promise3;
}
// const p = add10(10);
// p.then((result)=>{ // 76으로 인라인
add10(10).then((result)=>{
    console.log(result);

    // 한번 더
    const newP = add10(result);
    // newP.then((result)=>{
    //     console.log(result);
    // });
    return newP;
    // return add10(result) // 80,84줄 인라인
}).then((result)=>{ // 위의 3줄을 여기서 실행
    console.log(result);
}).catch((error)=>{ // 위쪽 여러 then 중 어디에서 실패하더라도 예외 처리
    console.log(error);
}).finally(()=>{ // finally()도 가능
    console.log("항상 실행")
});

