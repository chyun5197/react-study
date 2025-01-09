// 1. async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 promise를 리턴하도록 변환해주는 키워드

async function getData() {
    // return {
    //     name: "최현",
    //     id: "ch"
    // };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "최현",
                id: "ch"
            });
        }, 1500);
    })
}
console.log(getData()); // promise 객체로 반환 (개발자도구에서 확인)

// 2. await
// async 함수 내부에서만 사용 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printData(){
    // getData().then(result => {
    //     console.log(result);
    // });

    // 위 코드들을 then 없이 동기작업 처리하듯이 수행
    const data = await getData(); // promise의 비동기작업이 끝날때까지 기다린 후 결과값을 data에 대입
    console.log(data);
}
printData()
