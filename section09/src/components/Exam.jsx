import {useReducer} from "react";

// reducer - state 갱신에 사용하는 함수
//           직접 호출X. 미리 준비된 dispatch 함수에 Action을 전달하여 실행
function reducer(state, action){
    console.log(state, action);
    // if(action.type === 'INCREASE' || action.type === 'DECREASE'){
    //     return state + action.data
    // }
    switch(action.type){
        case "INCREASE":
        case "DECREASE":
            return state + action.data;
        default: return state;
    }
}

const Exam = () =>{
    // dispatch : 발송하다
    // => 상태 변화가 있어야 한다는 사실을 알리는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () =>{
        // 인수: 상태가 어떻게 변화되길 원하는지
        // => 액션 객체
        dispatch({
            type: "INCREASE",
            data: 1,
        });
    }

    const onClickMinus = () =>{
        dispatch({
            type: "DECREASE",
            data: -1,
        });
    }

    return <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>
}
export default Exam;