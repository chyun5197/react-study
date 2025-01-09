// function add(a, b, callback){
//     setTimeout(()=>{
//         const sum = a+b
//         callback(sum)
//     }, 2000)
// }
// add(1,2, (value)=>{
//     console.log(value)
// });

// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=>{
        const food = "피자";
        callback(food);
    }, 2000);
}
function cooldownFood(food, callback){
    setTimeout(()=>{
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 2000);
}
function freezeFood(food, callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1000)
}

// but 들여쓰기 연속이라 가독성이 안좋음. 콜백 지옥
orderFood((food) => {
    // 2초후 => 2초후 => 1초후
    console.log(food);
    cooldownFood(food, (cooldownedFood)=>{
        console.log(cooldownedFood)
        freezeFood(cooldownedFood, (freezedFood)=>{
            console.log(freezedFood);
        });
    });
});

